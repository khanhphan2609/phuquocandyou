import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Phú Quốc & You",
  description: "Nền tảng kết nối cộng đồng người quan tâm đến Phú Quốc số 1 thế giới.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
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
