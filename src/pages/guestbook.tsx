import { useEffect } from 'react';

import { Layout } from '@/components/layout';
import { useNavContext } from '@/providers/nav-provider';
import { GuestbookMessages } from '@/ui/guestbook-messages';

const GuestbookPage = () => {
  const { setIsNavOpen } = useNavContext();

  useEffect(() => {
    setIsNavOpen(true);
  });

  return (
    <main className="px-4 pt-5 sm:pt-0">
      <p className="text-xl font-semibold">Guestbook</p>

      <div className="mt-10">
        <p className="mb-5">
          Feel free to leave me a message 👊
        </p>
      </div>

      <GuestbookMessages />

      <div className="my-10 border-b border-rose-100/20" />
    </main>
  );
};

GuestbookPage.getLayout = (page: React.ReactElement) => (
  <Layout>{page}</Layout>
);

export default GuestbookPage;
