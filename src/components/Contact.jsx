import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/all';
import { openingHours, socials, storeInfo } from '../../jsm_gsap_landing';

const Contact = () => {
  const contactRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    const titleSplit = new SplitText(titleRef.current, { type: 'words' });
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: 'top center',
        once: true,
      },
    });

    const details = contactRef.current.querySelectorAll('h3, p');
    const rightLeaf = contactRef.current.querySelector('#f-right-leaf');
    const leftLeaf = contactRef.current.querySelector('#f-left-leaf');

    timeline
      .from(titleSplit.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
        ease: 'power1.inOut',
      })
      .from(details, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.02,
        ease: 'power1.inOut',
      })
      .to(rightLeaf, {
        y: -50,
        duration: 1,
        ease: 'power1.inOut',
      })
      .to(leftLeaf, {
        y: -50,
        duration: 1,
        ease: 'power1.inOut',
      });

    return () => titleSplit.revert();
  }, { scope: contactRef });

  return (
    <footer id="contact" ref={contactRef}>
      <img src="/images/footer-right-leaf.png" alt="" id="f-right-leaf" />
      <img src="/images/footer-left-leaf.png" alt="" id="f-left-leaf" />

      <div className="content">
        <h2 ref={titleRef}>{storeInfo.heading}</h2>

        <div>
          <h3>Visit Our Bar</h3>
          <p>{storeInfo.address}</p>
        </div>

        <div>
          <h3>Contact Us</h3>
          <p>
            <a
              href={`tel:${storeInfo.contact.phone.replace(/[^\d+]/g, '')}`}
              className="text-inherit no-underline hover:text-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow"
            >
              {storeInfo.contact.phone}
            </a>
          </p>
          <p>
            <a
              href={`mailto:${storeInfo.contact.email}`}
              className="text-inherit no-underline hover:text-yellow focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow"
            >
              {storeInfo.contact.email}
            </a>
          </p>
        </div>

        <div>
          <h3>Open Every Day</h3>
          {openingHours.map(({ day, time }) => (
            <p key={day}>
              {day}: {time}
            </p>
          ))}
        </div>

        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
