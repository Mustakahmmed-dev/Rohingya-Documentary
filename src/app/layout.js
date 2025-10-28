import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/footer";

export const metadata = {
  title: "Rohingya Documentary",
  description: "Rohingay documentaries",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
