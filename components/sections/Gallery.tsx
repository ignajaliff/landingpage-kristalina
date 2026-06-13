import { galleryItems, gallerySection } from '@/lib/data';

export function Gallery() {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">{gallerySection.eyebrow}</span>
          <h2>{gallerySection.title}</h2>
          <p className="lead" style={{ marginInline: 'auto' }}>
            {gallerySection.subtitle}
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div key={i} className={`gallery-item reveal d${(i % 3) + 1}`}>
              {item.src ? (
                <img src={item.src} alt={item.alt} loading="lazy" />
              ) : (
                <div
                  aria-hidden="true"
                  style={{
                    width: '100%',
                    height: '100%',
                    background:
                      'linear-gradient(135deg, var(--accent-soft), var(--bg-soft))',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
