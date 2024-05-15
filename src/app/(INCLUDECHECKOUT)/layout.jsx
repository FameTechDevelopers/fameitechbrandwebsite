"use client"
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import CheckOutNavbar from "@/components/CheckoutNavbar";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51LFajrJVYsK2tZ4hdqnkEQxx8HtNAkJ0wJZYMQsLO4gKB3GeRYRnZ6G0zIrWHenNmfRcWTqxgKB0pGDBjNtkuK8l00BNxgodeL');

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Fameitech - Checkout",
//   description: "",
// };

export default function RootLayout({ children }) {
  return <div className="bg-gray-100 min-h-screen">
     <Elements stripe={stripePromise}>
  <CheckOutNavbar />
  {children}
     </Elements>
  </div>;
}
