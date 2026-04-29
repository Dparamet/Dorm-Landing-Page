export default function FacilitiesSection({ facilities, utilities }) {
  return (
    <section className="section" id="facilities">
      <div className="container">
        <div className="section-head fade-in">
          <p className="section-label">Facilities</p>
          <h2>Useful amenities for everyday comfort</h2>
        </div>

        <div className="facility-grid">
          {facilities.map((facility, index) => (
            <article className={`facility-card fade-in delay-${(index % 3) + 1}`} key={facility.title}>
              <span className="facility-icon" aria-hidden="true">{facility.icon}</span>
              <div>
                <h3>{facility.title}</h3>
                <p>{facility.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="utility-strip fade-in delay-2">
          {utilities.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
