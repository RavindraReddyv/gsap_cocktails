import React from 'react';
import gsap from 'gsap';
import { featureLists, goodLists } from '../../jsm_gsap_landing';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from '@gsap/react';

const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? 'top 20%' : 'top top';
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start,
        end: 'bottom center',
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline.to('.will-fade', {
      opacity: 0,
      stagger: 0.2,
      ease: 'power1.inOut',
    }).to('.masked-img', {
      scale: 1.5,
      transformOrigin: '50% 50%',
      maskPosition: 'center center',
      maskSize: '500%',
      duration: 1,
      ease: 'power1.inOut',
    });
  }, { dependencies: [isMobile] });

  return (
    <div id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>

        <div className="content">
          <ul className="order-2 space-y-4 will-fade md:order-none">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-center order-1 md:order-none">
            <div className="cocktail-img">
              <img
                src="/images/under-img.jpg"
                alt="Bartender preparing a cocktail"
                className="abs-center masked-img size-full object-contain object-center"
              />
            </div>
            <h2 className="sip-worthy">Sip-worthy Perfection</h2>
          </div>

          <ul className="order-3 space-y-4 will-fade md:order-none md:justify-self-end">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center justify-start gap-2">
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60">{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>This isn't just a drink. It's a carefully Crafted moment made just for you</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
