import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Plena · Nutrición diseñada para tu vida",
  description: "Planes de alimentación saludable elaborados por chef profesional y nutriólogo certificado. Entrega a domicilio en Guadalajara.",
  keywords: "meal prep Guadalajara, comida saludable a domicilio, nutriólogo GDL, plan de alimentación, diabetes, bajo en carbohidratos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
