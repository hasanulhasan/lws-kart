import "./globals.css";
import Footer from "@/componets/Home/Footer";
import Header from "@/componets/Home/Header";
import Navbar from "@/componets/Home/Navbar";
import { dbConnect } from "@/service/mongo";

export const metadata = {
  title: "Lws Cart",
  description: "Lws Cart by Next JS",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
