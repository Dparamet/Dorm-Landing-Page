export default function LocationSection({ location, site }) {
  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`;

  return (
    <section className="section" id="location">
      <div className="container two-col location-grid">
        <article className="panel fade-in">
          <p className="section-label">Location</p>
          <h2>{location.title}</h2>
          <ul className="clean-list">
            {location.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="location-note">Address: {site.address}</p>
        </article>

        <article className="panel map-panel fade-in delay-1">
          <iframe
            title="B&O Apartment map"
            src={mapUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </article>
      </div>
    </section>
  );
}
