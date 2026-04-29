import Image from "next/image";

export default function GallerySection({ gallery }) {
  return (
    <section className="section" id="gallery">
      <div className="container">
        <div className="section-head fade-in">
          <p className="section-label">Gallery</p>
          <h2>Preview the apartment atmosphere</h2>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <figure className={`gallery-card fade-in delay-${(index % 3) + 1}`} key={item.src}>
              <Image
                className="gallery-image"
                src={item.src}
                alt={item.alt}
                width={800}
                height={800}
                sizes="(max-width: 820px) 50vw, 25vw"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
