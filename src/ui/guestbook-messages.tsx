import clsx from 'clsx';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { IoSend } from 'react-icons/io5';
import { MdLogout } from 'react-icons/md';
import { VscLoading } from 'react-icons/vsc';

import { api } from '@/utils/api';

export const GuestbookMessages = () => {
  const { data: session } = useSession();

  const [message, setMessage] = useState('');

  const { data: guestbookMessages, refetch } =
    api.guestbook.getAll.useQuery();

  const { mutateAsync, isLoading } =
    api.guestbook.create.useMutation();

  return (
    <div>
      {session ? (
        <>
          <form className="relative w-full">
            <input
              className="mb-2 w-full rounded-md bg-rose-100/20 px-2 py-3"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Say hello 2 heaven..."
              required
            />
            <button
              className={clsx(
                'absolute right-2 top-6 -translate-y-1/2 transform text-sm',
                'flex items-center gap-2 rounded-md bg-rose-100/30 p-2 text-rose-100',
                'shadow-md transition-all duration-300 ease-out',
                'hover:scale-[1.05] hover:rounded-[10px] hover:shadow-rose-500/40',
                {
                  'disable cursor-not-allowed disabled:opacity-50':
                    isLoading,
                }
              )}
              disabled={isLoading}
              onClick={async (e) => {
                e.preventDefault();

                if (message) {
                  await mutateAsync({ message });
                  refetch();
                  setMessage('');
                }
              }}
            >
              Send
              <IoSend
                size={14}
                className={clsx('transition ease-out', {
                  'hidden opacity-0': isLoading,
                  'opacity-100': !isLoading,
                })}
              />
              <VscLoading
                className={clsx(
                  'animate-spin transition ease-out',
                  {
                    'hidden opacity-0': !isLoading,
                    'opacity-100': isLoading,
                  }
                )}
              />
            </button>
          </form>
          <button
            className="flex items-center gap-2 px-2 text-sm"
            onClick={() => signOut()}
          >
            Sign out
            <MdLogout size={12} />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => signIn('github')}
            className="text-md flex items-center gap-2 rounded-md bg-midnight p-4 font-semibold"
          >
            <AiFillGithub size={18} />
            Sign in with GitHub
          </button>
        </>
      )}

      <ul className="mt-5 flex flex-col items-stretch space-y-3">
        {guestbookMessages?.length ? (
          guestbookMessages.map((message) => (
            <li
              key={message.id}
              className="flex items-start gap-2"
            >
              <p className="font-light text-white/30">
                {message.author.name}:
              </p>
              <p className="max-w-[80%] break-words">
                {message.message}
              </p>
            </li>
          ))
        ) : (
          <p className="text-sm italic text-gray-500/90">
            No messages yet 😭 Send one!
          </p>
        )}
      </ul>
    </div>
  );
};
