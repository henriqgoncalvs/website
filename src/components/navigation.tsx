import { AiFillGithub } from 'react-icons/ai';
import { GoBook } from 'react-icons/go';
import { GrLinkedinOption } from 'react-icons/gr';
import { HiOutlineDocumentText } from 'react-icons/hi';

import { Link } from './link';

export const Navigation = () => {
  return (
    <div className="flex items-center space-x-2 text-base font-semibold leading-none text-rose-100/90 sm:space-x-5">
      <Link
        href="/about"
        leftIcon={<HiOutlineDocumentText />}
        size="sm"
      >
        <span className="transition-all duration-300 ease-out group-hover:text-rose-200">
          About
        </span>
      </Link>

      <Link href="/guestbook" leftIcon={<GoBook />} size="sm">
        <span className="transition-all duration-300 ease-out group-hover:text-rose-200">
          Guestbook
        </span>
      </Link>

      <Link
        href="https://github.com/henriqgoncalvs"
        external
        leftIcon={<AiFillGithub />}
        variant="icon-button"
      />

      <Link
        href="https://www.linkedin.com/in/henriiqueg/"
        external
        leftIcon={<GrLinkedinOption />}
        variant="icon-button"
      />
    </div>
  );
};
