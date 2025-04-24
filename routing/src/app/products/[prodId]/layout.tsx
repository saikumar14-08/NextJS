// src/app/products/layout.tsx

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "2px dashed red", padding: "1rem" }}>
      <h2>This is Product layout</h2>
      {children}
    </div>
  );
}
