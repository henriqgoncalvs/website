import { type ReactElement } from 'react';

import { Layout } from '@/ui/layout';
import { ProfileBanner } from '@/ui/profile-banner';
import { TechIUse } from '@/ui/tech-i-use';
import { ThingsIveBuilt } from '@/ui/things-ive-built';

const Home = () => {
  return (
    <>
      <ProfileBanner />
      <ThingsIveBuilt />
      <TechIUse />
    </>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
