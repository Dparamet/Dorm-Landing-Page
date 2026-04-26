export default function ProductDetailsSection({ product, features }) {
  return (
    <section className="section" id="details">
      <div className="container two-col">
        <div>
          <h2>รายละเอียดสินค้า</h2>
          <p>
            Product Name: {product.name}
            <br />
            Product Type: {product.type}
            <br />
            Target Audience: {product.targetAudience}
            <br />
            Main Problem: {product.mainProblem}
          </p>
        </div>
        <div>
          <h3>จุดเด่นที่เหนือกว่าคู่แข่ง</h3>
          <ul className="feature-list">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
