import { about, hero } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.title}</h2>
          <p className="lead">{about.text}</p>
        </div>

        <div className="video-wrap reveal d1">
          {about.youtubeId ? (
            <div className="video-frame">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${about.youtubeId}`}
                title={about.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="video-frame video-placeholder">
              <span className="video-play">
                <Icon name="play" size={28} />
              </span>
              <span className="video-placeholder-text">Video próximamente</span>
            </div>
          )}
        </div>

        {/* Logo + foto del producto (movidos aquí desde el Hero, se conservan) */}
        <div className="about-product reveal d2">
          <img
            className="about-product-logo"
            src="/kristalina-logo.png"
            alt="Kristalina"
          />
          <img
            className="about-product-photo"
            src={hero.image.src}
            alt={hero.image.alt}
          />
        </div>
      </div>
    </section>
  );
}
