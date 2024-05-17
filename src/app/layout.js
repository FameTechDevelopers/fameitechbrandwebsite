import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fameitech",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-CEK68M8B3N"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-CEK68M8B3N');
              `,
          }}
        />
        <meta
          name="google-site-verification"
          content="pyLPKww96DsegbH5S1v-qnB35cgrNYfF3G1JKn3Ua-g"
        />
      </head>
      <body className={inter.className}>
        {children}

        <LiveChat />
      </body>
    </html>
  );
}
