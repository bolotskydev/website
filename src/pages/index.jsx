import React from 'react';

import Community from 'components/pages/home/community/community';
import ComponentBased from 'components/pages/home/component-based';
import Features from 'components/pages/home/features';
import GetStarted from 'components/pages/home/get-started/get-started';
import Hero from 'components/pages/home/hero';
import HowItWorks from 'components/pages/home/how-it-works';
import Languages from 'components/pages/home/languages/languages';
import NotificationCenter from 'components/pages/home/notification-center';
import SimpleUse from 'components/pages/home/simple-use';
import Layout from 'components/shared/layout';
import Separator from 'components/shared/separator';

const HomePage = () => (
  <Layout>
    <Hero />
    <HowItWorks />
    <Separator />
    <Features />
    <NotificationCenter />
    <Separator />
    <Community />
    <ComponentBased />
    <SimpleUse />
    <Separator />
    <Languages />
    <GetStarted />
    <Separator />
  </Layout>
);

export default HomePage;
