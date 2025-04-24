export const metadata = {
  title: "Next.js",
  description: "Testing static routing",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>This is Header Component</div>
        {children}
        <div>This is Footer Component</div>
      </body>
    </html>
  );
}
