import { type ReactElement } from 'react';

import { Layout } from '@/ui/layout';
import { ProfileBanner } from '@/ui/profile-banner';
import { ThingsIveBuilt } from '@/ui/things-ive-built';

const Home = () => {
  return (
    <>
      <ProfileBanner />
      <ThingsIveBuilt />
    </>
  );
};

Home.getLayout = function (page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
