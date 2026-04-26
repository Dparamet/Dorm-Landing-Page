import "./globals.css";

export const metadata = {
  title: "เว็บไซต์หอ StayNearU | หอพักใกล้มหาวิทยาลัย เข้าอยู่ไว",
  description:
    "ค้นหาหอพักใกล้มหาวิทยาลัยและแหล่งงาน เดินทางง่าย ปลอดภัย มีสิ่งอำนวยความสะดวกครบ พร้อมโปรส่วนลดเข้าอยู่ใหม่",
  keywords: [
    "เว็บไซต์หอ",
    "หอพัก",
    "ห้องเช่า",
    "หอพักใกล้มหาวิทยาลัย",
    "หอพักนักศึกษา",
    "ที่พักคนทำงาน"
  ],
  openGraph: {
    title: "เว็บไซต์หอ StayNearU",
    description:
      "หอพักดี เดินทางง่าย ราคาชัดเจน พร้อมเข้าอยู่ มีรีวิวจริงจากผู้พัก",
    type: "website",
    locale: "th_TH"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
