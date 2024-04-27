import { Fredoka } from "next/font/google";
import "./globals.css";
import { MainFooter } from "@/components/MainFooter";
// import { useRouter } from "next/navigation";

const inter = Fredoka({ subsets: ["latin"] });

export const metadata = {
  title: "Munayco Pizzas",
  description: "Munayco pizzas' website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <MainFooter/>
      </body>
    </html>
  );
}
