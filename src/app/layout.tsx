import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://anjana.sivanandan.com";
const TITLE = "Anjana Sivanandan - Software Engineer & Independent Researcher";
const DESCRIPTION =
  "Portfolio of Anjana Sivanandan: software engineer in Singapore and independent researcher in quantum machine learning, quantum search algorithms, and cybersecurity.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Anjana Sivanandan",
    "Software Engineer",
    "Quantum Computing",
    "Quantum Machine Learning",
    "Cybersecurity Research",
    "Ballerina compiler",
    "University of Colombo School of Computing",
    "Singapore",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Anjana Sivanandan",
    locale: "en_SG",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

const THEME_INIT_SCRIPT = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", dark);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className="min-h-full font-sans antialiased selection:bg-amber-300 selection:text-slate-900">
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
