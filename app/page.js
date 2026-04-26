const benefits = [
  "ลดเวลาหาหอจากหลายวัน เหลือไม่กี่นาที ด้วยข้อมูลที่เปรียบเทียบง่าย",
  "มั่นใจเรื่องความปลอดภัย มีการคัดกรองหอและรีวิวจากผู้พักจริง",
  "คุมงบได้ตั้งแต่แรก เพราะมีราคาและค่าใช้จ่ายระบุชัดเจน",
  "เดินทางสะดวก เลือกหอใกล้มหาวิทยาลัยหรือที่ทำงานตามพิกัดจริง",
  "ทักจองและนัดดูห้องได้ทันที ไม่ต้องโทรหลายที่ให้เสียเวลา"
];

const features = [
  "แผนที่ระยะเดินจริงจากหอถึงมหาวิทยาลัย/รถไฟฟ้า",
  "ฟิลเตอร์ละเอียด: งบ, ห้องแอร์, เลี้ยงสัตว์ได้, ที่จอดรถ, อินเทอร์เน็ต",
  "รีวิวผู้พักจริงพร้อมคะแนนแยกด้านเสียง/ความสะอาด/ความปลอดภัย",
  "แชตในระบบ + นัดดูห้องออนไลน์",
  "อัปเดตห้องว่างแบบเรียลไทม์"
];

const faqs = [
  {
    q: "ข้อมูลหอในเว็บน่าเชื่อถือแค่ไหน?",
    a: "ทุกหอมีการยืนยันตัวตนผู้ลงประกาศ และรีวิวแสดงเฉพาะผู้พักจริงที่ยืนยันการเข้าพักแล้ว"
  },
  {
    q: "มีค่าใช้จ่ายในการใช้งานไหม?",
    a: "ผู้เช่าสามารถค้นหา เปรียบเทียบ และติดต่อหอได้ฟรี ไม่มีค่าธรรมเนียมแอบแฝง"
  },
  {
    q: "ถ้าเจอหอไม่ตรงปกทำอย่างไร?",
    a: "สามารถรายงานผ่านระบบได้ทันที ทีมงานจะตรวจสอบและระงับประกาศที่ไม่ผ่านมาตรฐาน"
  },
  {
    q: "เหมาะกับคนทำงานด้วยไหม?",
    a: "เหมาะมาก เพราะมีฟิลเตอร์ใกล้รถไฟฟ้า/ย่านออฟฟิศ และคำนวณเวลาเดินทางให้ดูทันที"
  }
];

const testimonials = [
  {
    name: "เมย์ นักศึกษาปี 2",
    text: "ก่อนหน้านี้หาหอเองเหนื่อยมาก แต่พอใช้ StayNearU ก็เจอหอที่ชอบในวันเดียว ราคาตรงงบจริง"
  },
  {
    name: "นนท์ พนักงานออฟฟิศ",
    text: "ชอบที่มีรีวิวเรื่องเสียงรบกวนกับความปลอดภัย ทำให้ตัดสินใจง่ายขึ้นและไม่เสียเวลานัดดูหลายที่"
  },
  {
    name: "แพร ผู้ปกครอง",
    text: "ดูข้อมูลแทนลูกได้ครบ ทั้งระยะทางและค่าใช้จ่าย รวมถึงโปรเข้าอยู่ใหม่ คุ้มมาก"
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero section" id="home">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">เว็บไซต์หอสำหรับนักศึกษาและคนทำงาน</p>
            <h1>หา หอที่ใช่ เข้าอยู่ไว ในงบที่คุณคุมได้</h1>
            <p className="subheadline">
              StayNearU ช่วยคุณเปรียบเทียบหอพักและห้องเช่าใกล้มหาวิทยาลัยหรือที่ทำงานแบบเข้าใจง่าย
              พร้อมรีวิวจริง แผนที่จริง และราคาจริง
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#pricing">ดูหอพร้อมโปรวันนี้</a>
              <a className="btn btn-ghost" href="#how-it-works">ดูวิธีใช้งาน 3 ขั้นตอน</a>
            </div>
            <div className="stats-row">
              <div>
                <strong>12,500+</strong>
                <span>ผู้ใช้งานต่อเดือน</span>
              </div>
              <div>
                <strong>4.8/5</strong>
                <span>คะแนนความพึงพอใจ</span>
              </div>
              <div>
                <strong>1,200+</strong>
                <span>หอที่ผ่านการคัดกรอง</span>
              </div>
            </div>
          </div>

          <div className="hero-card" aria-label="Product image suggestion">
            <p className="card-title">Product Image Suggestion</p>
            <p className="card-copy">
              ภาพแนะนำ: Mockup หน้าจอมือถือ + โน้ตบุ๊กที่กำลังเปิดหน้าเปรียบเทียบหอ พร้อมหมุดแผนที่
              และเรตติ้งรีวิว เพื่อสื่อสารว่าใช้งานง่ายและเชื่อถือได้
            </p>
            <ul>
              <li>เน้นสีสดใส โทนส้ม-น้ำเงิน เพิ่มความน่าเชื่อถือ</li>
              <li>มีองค์ประกอบแผนที่/ระยะทางให้เข้าใจทันที</li>
              <li>แสดงป้ายราคาโปรโมชั่นชัดเจน</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="problem-solution">
        <div className="container two-col">
          <article className="panel">
            <h2>ปัญหาที่คนหาหอเจอบ่อย</h2>
            <p>
              เสียเวลาค้นหลายเว็บ ข้อมูลไม่ตรงกัน บางที่ราคาจริงไม่เหมือนประกาศ และต้องนัดดูห้องหลายรอบ
              กว่าจะเจอที่พักที่ไว้ใจได้
            </p>
          </article>
          <article className="panel panel-accent">
            <h2>ทางออกของ StayNearU</h2>
            <p>
              รวมข้อมูลหอที่ตรวจสอบแล้วในที่เดียว เปรียบเทียบง่าย เห็นราคาจริง รีวิวจริง และกดติดต่อได้ทันที
              ช่วยตัดสินใจเร็วขึ้นแบบมั่นใจ
            </p>
          </article>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="container">
          <h2>ผลลัพธ์ที่คุณจะได้รับ</h2>
          <ul className="benefit-list">
            {benefits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="social-proof">
        <div className="container">
          <h2>เสียงจากผู้ใช้งานจริง</h2>
          <div className="testimonials">
            {testimonials.map((t) => (
              <article className="quote" key={t.name}>
                <p>“{t.text}”</p>
                <span>{t.name}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="details">
        <div className="container two-col">
          <div>
            <h2>รายละเอียดสินค้า</h2>
            <p>
              Product Name: เว็บไซต์หอ StayNearU<br />
              Product Type: ห้องเช่า / Room
              <br />
              Target Audience: นักศึกษา คนทำงาน และผู้ที่ต้องการที่พักใกล้แหล่งเรียน/แหล่งงาน
              <br />
              Main Problem: หาหอยาก ข้อมูลกระจัดกระจาย ราคาไม่ชัดเจน
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

      <section className="section" id="how-it-works">
        <div className="container">
          <h2>ใช้งานง่ายใน 3 ขั้นตอน</h2>
          <div className="steps">
            <article>
              <span>01</span>
              <h3>เลือกโซนและงบ</h3>
              <p>ระบุย่านที่ต้องการ งบประมาณ และเงื่อนไขที่สำคัญกับคุณ</p>
            </article>
            <article>
              <span>02</span>
              <h3>เปรียบเทียบหอที่ใช่</h3>
              <p>ดูรีวิว ราคา และระยะทางจริงแบบ side-by-side ตัดสินใจง่ายขึ้น</p>
            </article>
            <article>
              <span>03</span>
              <h3>ทักจองและนัดดูห้อง</h3>
              <p>ส่งข้อความในระบบทันที และยืนยันวันเข้าพักได้ในไม่กี่คลิก</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="container pricing-wrap">
          <h2>ราคาเริ่มต้นชัดเจน</h2>
          <div className="pricing-card">
            <p className="plan">แพ็กเกจผู้เช่า</p>
            <p className="price">฿0</p>
            <p>ค้นหา เปรียบเทียบ และติดต่อหอได้ฟรี</p>
            <p className="promo">โปรโมชั่น: หอที่ร่วมรายการลดค่าแรกเข้า สูงสุด 1,500 บาท*</p>
            <a className="btn btn-primary" href="#final-cta">เริ่มค้นหาหอฟรีตอนนี้</a>
          </div>
        </div>
      </section>

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

      <section className="section final-cta" id="final-cta">
        <div className="container">
          <h2>หอดี ๆ ไม่ต้องหาให้เหนื่อยอีกต่อไป</h2>
          <p>
            ลองใช้ StayNearU วันนี้ แล้วคุณจะรู้ว่าการหาที่พักที่ตรงใจในงบที่ใช่
            สามารถจบได้เร็วและสบายใจกว่าเดิม
          </p>
          <div className="cta-row center">
            <a className="btn btn-primary" href="#home">เริ่มหาหอทันที</a>
            <a className="btn btn-ghost" href="#social-proof">ดูรีวิวเพิ่มเติม</a>
          </div>
          <small>
            CTA Suggestions: “ดูหอพร้อมโปรวันนี้”, “เริ่มหาหอทันที”, “จองคิวดูห้องฟรี”, “เปรียบเทียบหอใน 1 นาที”
          </small>
        </div>
      </section>
    </main>
  );
}
