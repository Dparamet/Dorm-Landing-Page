export default function PricingSection({ pricing }) {
  return (
    <section className="section" id="pricing">
      <div className="container pricing-wrap">
        <h2>{pricing.title}</h2>
        <div className="pricing-card">
          <p className="plan">{pricing.plan}</p>
          <p className="price">{pricing.price}</p>
          <p>{pricing.detail}</p>
          <p className="promo">{pricing.promo}</p>
          <a className="btn btn-primary" href="#final-cta">{pricing.cta}</a>
        </div>
      </div>
    </section>
  );
}
