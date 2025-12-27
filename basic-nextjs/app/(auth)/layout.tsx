export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Promo Bar */}
      <div className="w-full bg-neutral-950 border-b border-neutral-800">
        <div className="px-4 py-1.5 text-center text-xs text-neutral-400 tracking-wide">
          <span className="text-neutral-200 font-medium">20% OFF</span>{" "}
          for the next{" "}
          <span className="text-neutral-300">3 days</span>
        </div>
      </div>

      {children}
    </div>
  );
}
