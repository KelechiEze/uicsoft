import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Add this if using Bootstrap
import "./globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'], // Include the weights you need
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "KANEC Impact Ledger",
  description: "Empowering impact with transparency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}