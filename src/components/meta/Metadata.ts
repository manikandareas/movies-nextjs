import { Metadata } from "next";

export const myMetadata: Metadata = {
  title: "Madia",
  description:
    "Madia Film adalah portal film terkini yang memadukan kecanggihan teknologi dengan kecintaan pada seni perfilman. Temukan ribuan judul film dari berbagai genre, mulai dari drama epik hingga petualangan penuh aksi. Nikmati pengalaman menonton yang tak terlupakan dengan fitur pemutaran berkualitas tinggi dan informasi mendalam tentang setiap produksi. Madia Film memberikan akses cepat dan mudah ke dunia film, membawa Anda lebih dekat dengan cerita-cerita paling ikonik dan aktor-aktor terkenal.",
  authors: [
    {
      name: "Vito Andareas Manik",
      url: "https://github.com/manikandareas",
    },
  ],
  openGraph: {
    type: "website",
    url: "https://movies-nextjs-coral.vercel.app",
    title: "Home - Madia",
    description:
      "Madia Film adalah portal film terkini yang memadukan kecanggihan teknologi dengan kecintaan pada seni perfilman. Temukan ribuan judul film dari berbagai genre, mulai dari drama epik hingga petualangan penuh aksi. Nikmati pengalaman menonton yang tak terlupakan dengan fitur pemutaran berkualitas tinggi dan informasi mendalam tentang setiap produksi. Madia Film memberikan akses cepat dan mudah ke dunia film, membawa Anda lebih dekat dengan cerita-cerita paling ikonik dan aktor-aktor terkenal.",
    images: [
      {
        url: "https://movies-nextjs-coral.vercel.app/opengraph-image.png",
      },
    ],
  },
  metadataBase: new URL("https://movies-nextjs-coral.vercel.app"),
};
