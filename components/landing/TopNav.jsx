export default function TopNav() {
  return (
    <header className="top-nav-wrap">
      <div className="container top-nav">
        <a href="#home" className="brand">B&amp;O Apartment</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#rooms">Rooms</a>
          <a href="#facilities">Facilities</a>
          <a href="#location">Location</a>
          <a href="#gallery">Gallery</a>
        </nav>
        <a href="#contact" className="nav-cta">Contact Now</a>
      </div>
    </header>
  );
}
