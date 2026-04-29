export default function ContactSection({ contact }) {
  return (
    <section className="section" id="contact">
      <div className="container contact-wrap fade-in">
        <div className="panel contact-card">
          <p className="section-label">Contact</p>
          <h2>{contact.title}</h2>
          <p>{contact.description}</p>
          <div className="contact-links">
            <a className="btn btn-primary" href={`tel:${contact.phone}`}>{contact.primaryCta}</a>
            <a className="btn btn-secondary" href={contact.facebook} target="_blank" rel="noreferrer">{contact.secondaryCta}</a>
          </div>
          <div className="contact-meta">
            <span>Phone: {contact.phone}</span>
            <span>{contact.facebookLabel}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
