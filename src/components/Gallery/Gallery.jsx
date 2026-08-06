import './Gallery.css';
export default function Gallery() {

const images = Object.values(
  import.meta.glob('../../../public/assets/gallery/*', { eager: true })
).map(mod => mod.default);

  return (
    <div>
      <section className="gallery-page-section" id="gallery">
        <span className="section-label">העבודות שלנו</span>
        <h1 className="section-title">גלריית פרויקטים</h1>
        <div className="section-divider" />
        <div className="gallery-page-grid">
          {images.map((src, i) => (
            <div key={i} className="gallery-page-item">
              <img src={src} alt={`עבודת גובה ${i + 1}`} className="gallery-page-img" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
