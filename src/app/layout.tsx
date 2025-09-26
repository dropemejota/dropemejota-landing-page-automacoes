import "@/app/globals.css";

export const metadata = {
  title: "Automação EmeJota",
  description: "Landing page de automação",
};

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#F5F5F5] text-[#333333] antialiased">
        {children}
      </body>
    </html>
  );
}
