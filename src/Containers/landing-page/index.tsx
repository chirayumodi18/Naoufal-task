import React from 'react'
import CoverImage from './cover-image-section';
import Section2 from './section-2';
import HostingSteps from './hosting-steps-section';
import BlogSection from './blog-section';
import Covered from './covered-section';
import Payment from './payment-section';
import BlogSection2 from './blog-section-2';
import HostsDataSection from './hosts-data-section';
import AboutPage from './about-section';
import FrequentlyAskedQuestions from './frequently-asked-question-section';
import AboutHosting from './about-hosting-section';
import ReadyToEarn from './ready-to-earn-section';

import Person2 from '../../images/landing-page/person2.jpg';

import './landing-page.scss';

const Divider = () => {
  return (
    <div className="divider">
      <div className="custom-border" />
    </div>
  )
};

const LandingPage = () => {
  return (
    <div className="Landing-page">
      <CoverImage />
      <Section2 />
      <Divider />
      <HostingSteps />
      <div className="height-divider container" />
      <BlogSection />
      <Divider />
      <Covered />
      <div className="person-image">
        <div className="image-wrapper">
          <img src={Person2} alt="person" />
        </div>
      </div>
      <div className="height-divider container" />
      <Divider />
      <Payment />
      <BlogSection2 />
      <Divider />
      <HostsDataSection />
      <div className="height-divider container" />
      <Divider />
      <AboutPage />
      <div className="height-divider container" />
      <Divider />
      <FrequentlyAskedQuestions />
      <div className="height-divider container" />
      <AboutHosting />
      <div className="height-divider container" />
      <ReadyToEarn />
      <div className="height-divider container" />
    </div>
    )
}

export default LandingPage;
