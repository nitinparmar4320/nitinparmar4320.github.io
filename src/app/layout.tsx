import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader, JetBrains_Mono } from "next/font/google";
import { GlobalCursorTrail } from "@/components/common/GlobalCursorTrail";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#F8F7F2",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nitinparmar.dev"),
  title: {
    default: "Nitin Parmar — Full Stack Developer | React, Node.js & Modern Architectures",
    template: "%s | Nitin Parmar",
  },
  description:
    "Personal portfolio of Nitin Parmar, Full Stack Developer with 3+ years experience engineering scalable web applications with React.js, Next.js, Node.js, and modern backend architectures in Ahmedabad, India.",
  keywords: [
    "Nitin Parmar",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MySQL",
    "Microservices",
    "GraphQL",
    "Tailwind CSS",
    "Web Development",
    "Portfolio",
    "Ahmedabad"
  ],
  authors: [{ name: "Nitin Parmar", url: "https://nitinparmar.dev" }],
  creator: "Nitin Parmar",
  publisher: "Nitin Parmar",
  formatDetection: {
    email: true,
    address: true,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nitinparmar.dev",
    siteName: "Nitin Parmar — Portfolio",
    title: "Nitin Parmar — Full Stack Developer",
    description:
      "Building thoughtful digital experiences, from interface to infrastructure. 3+ years experience across React.js, Next.js, Node.js, and backend microservices.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nitin Parmar — Full Stack Developer",
    description:
      "Building thoughtful digital experiences, from interface to infrastructure.",
    creator: "@nitinparmar4320",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://nitinparmar.dev/#person",
        name: "Nitin Parmar",
        jobTitle: "Full Stack Developer",
        description:
          "Full Stack Developer with 3+ years experience engineering scalable web applications with React.js, Next.js, Node.js, and modern backend architectures.",
        url: "https://nitinparmar.dev",
        sameAs: [
          "https://github.com/nitinparmar4320",
          "https://www.linkedin.com/in/nitinparmar4320"
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ahmedabad",
          addressRegion: "Gujarat",
          addressCountry: "India"
        },
        knowsAbout: [
          "React.js",
          "Next.js",
          "Node.js",
          "TypeScript",
          "PostgreSQL",
          "MySQL",
          "MongoDB",
          "Microservices",
          "GraphQL",
          "REST APIs"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://nitinparmar.dev/#website",
        url: "https://nitinparmar.dev",
        name: "Nitin Parmar — Full Stack Developer Portfolio",
        publisher: {
          "@id": "https://nitinparmar.dev/#person"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${plusJakartaSans.variable} ${newsreader.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-[var(--bg-primary)] text-[var(--text-primary)] relative">
        <GlobalCursorTrail />
        {children}
      </body>
    </html>
  );
}
