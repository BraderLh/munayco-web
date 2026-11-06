import "./globals.css";
import { MainFooter } from "@/components/MainFooter";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/context/CartContext";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  title: "Munayco Pizzas",
  description: "Munayco pizzas' website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          <SiteHeader />
          {children}
          <CartDrawer />
          <MainFooter/>
        </CartProvider>
      </body>
    </html>
  );
}
