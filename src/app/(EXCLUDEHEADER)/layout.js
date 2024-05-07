import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fameitech",
  description: "",
};

export default function RootLayout({ children }) {
  return <body className={inter.className}>{children}</body>;
}