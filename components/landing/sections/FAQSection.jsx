export default function FAQSection({ faqs }) {
  return (
    <section className="section" id="faq">
      <div className="container">
        <h2>คำถามที่พบบ่อย</h2>
        <div className="faq-list">
          {faqs.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
