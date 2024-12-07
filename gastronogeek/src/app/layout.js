// import localFont from "next/font/local";
import "./globals.css";
import Header from '../components/Header';
import Hero from '@/components/Hero'
import GSAP from "@/libs/GSAP";
import PageTransition from "@/utils/PageTransition";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Gastronogeek",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={``}>
        < PageTransition >
        < GSAP >
      <Header />
      <Hero
        title="Bienvenue sur Gastronogeek"
        subtitle="Découvrez des recettes geek et gourmandes"
        backgroundImage="/images/hero-background.jpg"
      />
        {children}
        </GSAP>
        </PageTransition>
      </body>
    </html>
  );
}
