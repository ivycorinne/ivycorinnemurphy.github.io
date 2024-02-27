import React, { useState, useEffect } from 'react';
import IvyPortrait from '../images/ivy_portrait.png';
import IvyResume from '../images/Ivy_Resume_2024.PDF';
import '../App.css';

function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize(); // Call once to set the initial value
    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []); // Only run once on component mount

  return (
    <div className="container">
      {isMobile ? (
        <div className="mobile-content">
          <MobileContent />
          <img src={IvyPortrait} alt="Ivy Murphy" className="mobile-image" />
        </div>
      ) : (
        <div className="desktop-content">
          <div className="left-column">
            <img src={IvyPortrait} alt="Ivy Murphy" />
          </div>
          <div className="right-column">
            <h1>Meet Ivy</h1>
            <DesktopContent />
          </div>
        </div>
      )}
    </div>
  );
}

function DesktopContent() {
  return (
    <>
      <p>
        In an industry often constrained by conformity, Ivy Murphy emerges as a leader of innovation, unbound by conventions.
      </p>
      <p>
        Her expertise transcends keen people and program management: Ivy fosters motivation and empowers teams with her infectious energy. Proficient in navigating complex Engineering leadership and process optimization, she aligns engineering endeavors with overarching company objectives while fostering high morale.
      </p>
      <p>
        As the former Head of Quality and Velocity at OpenSea, Ivy led three engineering teams concurrently, driving higher efficiency without compromising quality. Under her leadership, OpenSea grew from a novice Engineering team to a mature machine with high quality code. She obsessively led better experiences for builders, internal dogfooders, and external users.
      </p>
      <p>
        Prior to her tenure at OpenSea, Ivy spearheaded transformative initiatives at renowned companies. At Robinhood, she led quality endeavors during high-stakes rollouts, propelling company growth and solidifying its industry dominance. Previously at Apple, she drove unparalleled user experiences across Weather, News, and Stocks apps, influencing the daily lives of millions of users profoundly.
      </p>
      <p>
        Armed with a Bachelor of Science in Informatics from Indiana University, Bloomington, Ivy combines technical acumen with interdisciplinary human-computer interaction expertise. Her specialization in computer science equips her with the tools to engineer solutions that not only meet technical standards but also resonate profoundly with builders and end-users alike.
      </p>
      <p>
        She also loves writing about the space and encouraging others to get analytical and question what may appear as normal, check out her thoughts at <a href="https://misplacedmusing.substack.com/">Misplaced Musing</a>.
      </p>
      <p><a href={IvyResume} target="_blank" rel="noopener noreferrer">View Resume</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="mailto:ivycorinnemurphy@gmail.com">Contact Her</a></p>
    </>
  );
}

function MobileContent() {
  return (
    <>
      <h1>Meet Ivy</h1>
      <p>
        In an industry often constrained by conformity, Ivy Murphy emerges as a leader of innovation, unbound by conventions.
      </p>
      <p>
        She is adept at people and process management, proven from her mark left at OpenSea, Robinhood, and Apple.
      </p>
      <p>
        She also loves writing about the space and encouraging others to get analytical and question what may appear as normal, check out her thoughts at <a href="https://misplacedmusing.substack.com/">Misplaced Musing</a>.
      </p>
      <p><a href={IvyResume} target="_blank" rel="noopener noreferrer">View Resume</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="mailto:ivycorinnemurphy@gmail.com">Contact Her</a></p>
    </>
  );
}

export default HomePage;
