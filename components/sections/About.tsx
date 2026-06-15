import { about } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function About() {
  return (
    <section className="section section-soft" id="about">
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
      </div>
    </section>
  );
}
