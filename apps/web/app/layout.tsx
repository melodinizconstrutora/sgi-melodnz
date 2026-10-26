import type { Metadata } from "next";
import "primereact/resources/themes/lara-light-green/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "SGI Melo Diniz Engenharia",
  description: "Sistema de Gestão Integrada para construção civil"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
