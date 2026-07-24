'use client';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { contact } from '@/lib/data';
import { Icon } from '@/components/Icon';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  // Sitio estático: abrimos el mail del visitante con los datos cargados.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta de ${form.name || 'la web'}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section section-soft" id="cta">
      <div className="container">
        <div className="contact-card reveal d1">
          {/* Datos de contacto */}
          <ul className="contact-info">
            <li>
              <span className="contact-icon">
                <Icon name="phone" size={20} />
              </span>
              <div>
                <strong>Teléfono</strong>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                  {contact.phone}
                </a>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <Icon name="mail" size={20} />
              </span>
              <div>
                <strong>Email</strong>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <Icon name="map-pin" size={20} />
              </span>
              <div>
                <strong>Dirección</strong>
                <span>{contact.address}</span>
              </div>
            </li>
          </ul>

          {/* Formulario */}
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="cf-name">Nombre</label>
              <input
                id="cf-name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="tu@email.com"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="cf-message">Mensaje</label>
              <textarea
                id="cf-message"
                name="message"
                rows={4}
                value={form.message}
                onChange={onChange}
                placeholder="Contanos qué necesitás"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar mensaje
              <Icon name="arrow-right" size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
