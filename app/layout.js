import "./globals.css";

export const metadata = {
  title: "B&O Apartment Khon Kaen | ใกล้ราชมงคลขอนแก่น",
  description:
    "B&O Apartment Khon Kaen ห้องพักใกล้ราชมงคลขอนแก่น ราคาเริ่มต้นสบาย ๆ พร้อมสิ่งอำนวยความสะดวกครบและเดินถึงมหาวิทยาลัยได้",
  keywords: [
    "B&O Apartment",
    "หอพักขอนแก่น",
    "หอใกล้ราชมงคลขอนแก่น",
    "ห้องเช่าขอนแก่น",
    "หอพักนักศึกษา",
    "apartment khon kaen"
  ],
  openGraph: {
    title: "B&O Apartment Khon Kaen",
    description:
      "อพาร์ทเมนต์ใกล้ราชมงคลขอนแก่น สำหรับนักศึกษาและคนทำงาน ราคาเริ่มต้นเข้าถึงง่าย",
    type: "website",
    locale: "th_TH"
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "B&O Apartment Khon Kaen",
              description:
                "หอพักราคาประหยัดใกล้ราชมงคลขอนแก่น เหมาะกับนักศึกษาและคนทำงาน",
              telephone: "081-871-2254",
              address: {
                "@type": "PostalAddress",
                streetAddress: "191 Moo 6, Sri Chan Road Soi 29",
                addressLocality: "Nai Mueang",
                addressRegion: "Mueang Khon Kaen",
                addressCountry: "TH"
              },
              areaServed: "Khon Kaen",
              amenityFeature: [
                { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
                { "@type": "LocationFeatureSpecification", name: "CCTV", value: true },
                { "@type": "LocationFeatureSpecification", name: "Study room", value: true }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
