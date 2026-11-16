import gsap from 'gsap';
import {SplitText} from 'gsap/all';
import { useGSAP } from  '@gsap/react'
import React from 'react';

const About = () => {
     useGSAP (() => {
      const titleSplit = SplitText.create('#about h2', { type: 'words' });

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: '#about',
          start: 'top center',
        }
      });
      scrollTimeline.from(titleSplit.words, {
        opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out',stagger: 0.02
      })
      .from('.top-grid div, .bottom-grid div', {
        opacity: 0, duration: 1, ease: 'power1.inOut',stagger: 0.04
      },'-=0.5')
    })

  return (
    <section id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <span className="badge">About us</span>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              <br />
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with detail -
              from the first muddle to the final garnish. That care is what turns a
              simple drink into something truly memorable.
            </p>

            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">More than +13000 customers</p>
            </div>
          </div>
        </div>
        <div className="image-gallery">
          <div className="image-row">
            <div className="image-frame">
              <img src="/images/abt1.png" alt="Bartender garnishing a cocktail" />
              <div className="noisy" />
            </div>
            

            <div className="image-frame">
              <img src="/images/abt5.png" alt="Bartender pouring a cocktail" />
              <div className="noisy" />
            </div>


            <div className="image-frame">
              <img src="/images/abt3.png" alt="Colorful cocktails with fresh citrus" />
              <div className="noisy" />
            </div>
          </div>
         
          <div className="image-row">
            

            <div className="image-frame">
              <img src="/images/abt2.png" alt="Friends enjoying drinks together" />
              <div className="noisy" />
            </div>
            
            <div className="image-frame">
              <img src="/images/under-img.jpg" alt="Bartender preparing drinks at the bar" />
              <div className="noisy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
