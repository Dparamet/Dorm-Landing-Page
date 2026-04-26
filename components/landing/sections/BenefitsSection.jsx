export default function BenefitsSection({ items }) {
  return (
    <section className="section" id="benefits">
      <div className="container">
        <h2>ผลลัพธ์ที่คุณจะได้รับ</h2>
        <ul className="benefit-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
