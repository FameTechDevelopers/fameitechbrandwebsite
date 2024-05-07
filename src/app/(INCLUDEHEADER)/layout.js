import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fameitech",
  description: "",
};

export default function RootLayout({ children }) {
  return <>
       <Navbar />
  {children}
  <Footer />
  </>;
}
