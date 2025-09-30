import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Auren Moyo - Data Science & AI Engineer",
  description: "Data Science and Artificial Intelligence Engineer specialized in advanced modeling, machine learning and deep learning.",
  keywords: ["Data Science", "AI", "Machine Learning", "Deep Learning", "Python", "Engineer"],
  authors: [{ name: "Auren Moyo" }],
  openGraph: {
    title: "Auren Moyo - Data Science & AI Engineer",
    description: "Data Science and Artificial Intelligence Engineer specialized in advanced modeling, machine learning and deep learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased bg-gray-900 text-white`}>
        <LanguageProvider>
          <div>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
