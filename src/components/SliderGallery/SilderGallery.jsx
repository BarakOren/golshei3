import { useRef, useState, useEffect } from 'react';
import "./SliderGallery.css";


const images = Object.values(
  import.meta.glob('./gallery/*', { eager: true })
).map(mod => mod.default);



export default function GallerySlider() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll);
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth / 3;
    el.scrollBy({ left: dir === 'right' ? cardWidth : -cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="slider-section" id="gallery">
      <h2 className="slider-title">קצת מהביצועים שלנו</h2>

      <div className="slider-wrapper">
        {canScrollRight && (
          <button type="button" className="slider-arrow slider-arrow--right" aria-label="לתמונות הבאות" onClick={() => scroll('right')}>
            &#8249;
          </button>
        )}

        <div className="slider-track" ref={scrollRef}>
          {images.map((src, i) => (
            <div className="slider-card" key={i}>
              <img src={src} alt={`עבודה ${i + 1}`} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>

        {canScrollLeft && (
          <button type="button" className="slider-arrow slider-arrow--left" aria-label="לתמונות הקודמות" onClick={() => scroll('left')}>
            &#8250;
          </button>
        )}
      </div>
    </section>
  );
}
