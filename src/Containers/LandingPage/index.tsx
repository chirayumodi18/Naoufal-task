import React from 'react'
import CoverImage from './CoverImageSection';
import Section2 from './Section2';
import HostingSteps from './HostingStepsSection';
import BlogSection from './BlogSection';
import Covered from './CoveredSection';
import Payment from './PaymentSection';
import BlogSection2 from './BlogSection2';
import HostsDataSection from './HostsDataSection';
import AboutPage from './AboutSection';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestionSection';
import AboutHosting from './AboutHostingSection';
import ReadyToEarn from './ReadyToEarnSection';

import Person2 from '../../images/person2.jpg';

import './LandingPage.scss';

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
