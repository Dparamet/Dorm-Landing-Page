export default function TopNav() {
  return (
    <header className="top-nav-wrap">
      <div className="container top-nav">
        <a href="#home" className="brand">StayNearU</a>
        <nav aria-label="Main navigation">
          <a href="#benefits">จุดเด่น</a>
          <a href="#pricing">ราคา</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href="#final-cta" className="nav-cta">เริ่มหาหอ</a>
      </div>
    </header>
  );
}
