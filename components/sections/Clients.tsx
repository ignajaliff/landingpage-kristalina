import { clients, clientsSection, type Client } from '@/lib/data';
import { Icon } from '@/components/Icon';

function ClientCard({ building, admin }: Client) {
  return (
    <div className="client-card">
      <span className="client-icon">
        <Icon name="building-office" size={22} />
      </span>
      <div className="client-info">
        <strong>{building}</strong>
        <span>{admin}</span>
      </div>
    </div>
  );
}

export function Clients() {
  // Dos filas que se desplazan en sentidos opuestos.
  const half = Math.ceil(clients.length / 2);
  const rowA = clients.slice(0, half);
  const rowB = clients.slice(half);

  return (
    <section className="section" id="clients">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">{clientsSection.eyebrow}</span>
          <h2 className="grad-text">{clientsSection.title}</h2>
          <p className="lead">{clientsSection.subtitle}</p>
        </div>
      </div>

      {/* El marquee va fuera del container para ocupar todo el ancho */}
      <div className="marquee reveal">
        <div className="marquee-row">
          {/* Se duplica la lista para que el loop sea continuo (-50%) */}
          <div className="marquee-track">
            {[...rowA, ...rowA].map((c, i) => (
              <ClientCard key={`a-${i}`} {...c} />
            ))}
          </div>
        </div>
        <div className="marquee-row">
          <div className="marquee-track reverse">
            {[...rowB, ...rowB].map((c, i) => (
              <ClientCard key={`b-${i}`} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
