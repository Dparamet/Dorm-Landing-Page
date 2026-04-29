import Image from "next/image";

export default function RoomPricingSection({ rooms }) {
  return (
    <section className="section" id="rooms">
      <div className="container">
        <div className="section-head fade-in">
          <p className="section-label">Room & Pricing</p>
          <h2>Choose the room that fits your budget</h2>
          <p>Clear price ranges for students and young professionals who want simple and practical living.</p>
        </div>

        <div className="room-grid">
          {rooms.map((room, index) => (
            <article className={`room-card fade-in delay-${index + 1}`} key={room.name}>
              <Image
                src={room.image}
                alt={room.name}
                className="room-image"
                width={900}
                height={600}
                sizes="(max-width: 820px) 100vw, 50vw"
              />
              <div className="room-card-body">
                <div className="room-card-header">
                  <h3>{room.name}</h3>
                  <span>{room.unit}</span>
                </div>
                <p className="room-price">{room.price}</p>
                <p>{room.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
