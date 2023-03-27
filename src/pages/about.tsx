import { useEffect } from 'react';

import { Layout } from '@/components/layout';
import { useNavContext } from '@/providers/nav-provider';
import { MyTimeline } from '@/ui/my-timeline';

const AboutPage = () => {
  const { setIsNavOpen } = useNavContext();

  useEffect(() => {
    setIsNavOpen(true);
  });

  return (
    <main className="px-4">
      <p className="text-xl font-semibold">About me</p>

      <div className="mt-10">
        <p className="mb-5">Hey, I&apos;m Henrique 👋</p>

        <p className="mb-5">
          I&apos;m a software engineer from Brazil with 4 years
          of experience, currently working as{' '}
          <span className="underline decoration-rose-100 decoration-wavy">
            Senior Frontend Engineer
          </span>{' '}
          at a fintech named PagBank and side projects. I&apos;m
          also majoring in Software Engineering.
        </p>
      </div>

      <div className="my-10 border-b border-rose-100/20" />

      <div>
        <p className="mb-5">
          I&apos;m passionate about every kind of art, including
          music, movies, HQ&apos;s, and of course,{' '}
          <span className="underline decoration-rose-100 decoration-wavy">
            coding
          </span>
          .
        </p>

        <p className="mb-5">
          This combination of interests is what keep me
          interested in always learning something and creating
          new projects. Is really awesome what we can do these
          days with the internet and the tools we have available.
        </p>

        <p className="mb-5">
          It&apos;s been 4 years since I started working with
          React and JavaScript. I&apos;m also a big fan of
          TypeScript and Next.js. When I&apos;m not writting
          React code, I&apos;m experimenting a lot wrtting
          Backend code with Node and Go.
        </p>

        <p>
          Following the steps of 92,5% of developers that I know,
          I&apos;m also a musician. I play drums since I was 12
          years old and guitar/bass for the past 2 years.
        </p>
      </div>

      <div className="my-10 border-b border-rose-100/20" />

      <MyTimeline />
    </main>
  );
};

AboutPage.getLayout = (page: React.ReactElement) => (
  <Layout>{page}</Layout>
);

export default AboutPage;
