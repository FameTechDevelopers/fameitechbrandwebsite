import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import CheckOutNavbar from "@/components/CheckoutNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fameitech - Checkout",
  description: "",
};

export default function RootLayout({ children }) {
  return <div className="bg-gray-100 h-screen">
  <CheckOutNavbar />
  {children}
  </div>;
}
