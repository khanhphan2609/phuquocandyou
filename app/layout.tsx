import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";



const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-primary",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phú Quốc & You",
  description:
    "Nền tảng kết nối cộng đồng người quan tâm đến Phú Quốc số 1 thế giới.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={`${beVietnamPro.variable} antialiased`}>
        <main className="bg-[var(--blue-darker)]">
          {children}
        </main>
      </body>
    </html>
  );
}
