import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { sliderLists } from '../../jsm_gsap_landing';

const Menu = () => {
  const menuRef = useRef(null);
  const cocktailImageRef = useRef(null);
  const entryTweenRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const previousIndexRef = useRef(activeIndex);
  const activeDrink = sliderLists[activeIndex];

  useGSAP(() => {
    const image = cocktailImageRef.current;
    const startX = () => -(window.innerWidth + image.getBoundingClientRect().width) / 2;
    const endX = () => window.innerWidth >= 1280
      ? -Math.min(window.innerWidth * 0.12, 160)
      : 0;

    entryTweenRef.current = gsap.fromTo(image, {
      x: startX,
      opacity: 0,
    }, {
      x: endX,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: menuRef.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, { scope: menuRef });

  useGSAP(() => {
    if (previousIndexRef.current === activeIndex) return;
    previousIndexRef.current = activeIndex;

    if (entryTweenRef.current) {
      entryTweenRef.current.scrollTrigger?.kill();
      entryTweenRef.current.kill();
      entryTweenRef.current = null;
    }

    const image = cocktailImageRef.current;
    const startX = -(window.innerWidth + image.getBoundingClientRect().width) / 2;
    const endX = window.innerWidth >= 1280
      ? -Math.min(window.innerWidth * 0.12, 160)
      : 0;

    gsap.killTweensOf(image);
    gsap.fromTo(image, {
      x: startX,
      opacity: 0,
    }, {
      x: endX,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    });
  }, { dependencies: [activeIndex], scope: menuRef, revertOnUpdate: true });

  const changeDrink = (direction) => {
    setActiveIndex((currentIndex) => (
      (currentIndex + direction + sliderLists.length) % sliderLists.length
    ));
  };

  return (
    <section id="menu" aria-labelledby="menu-heading" ref={menuRef}>
      <img src="/images/slider-right-leaf.png" alt="" aria-hidden="true" id="m-right-leaf" />
      <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>

      <nav className="cocktail-tabs" aria-label="Cocktail navigation">
        {sliderLists.map((drink, index) => (
          <button
            key={drink.id}
            type="button"
            aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >
            {drink.name}
          </button>
        ))}
      </nav>

      <div className="content">
        <div className="cocktail">
          <img ref={cocktailImageRef} src={activeDrink.image} alt={activeDrink.name} />
          <div className="arrows" role="group" aria-label="Browse cocktails">
            <button type="button" aria-label="Previous cocktail" onClick={() => changeDrink(-1)}>
              <img src="/images/left-arrow.png" alt="" />
              <span>Previous</span>
            </button>
            <button type="button" aria-label="Next cocktail" onClick={() => changeDrink(1)}>
              <span>Next</span>
              <img src="/images/right-arrow.png" alt="" />
            </button>
          </div>
        </div>

        <div className="recipe" aria-live="polite">
          <div className="info">
            <p id="title">{activeDrink.name}</p>
          </div>
          <div className="details">
            <h2>{activeDrink.title}</h2>
            <p>{activeDrink.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
