import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phú Quốc & You",
  description: "Tạp chí du lịch và phong cách sống",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ViLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
