export default function GlassCard({ children, className = "" }) {
  return (
    <div className={`bg-red-950/40 backdrop-blur-md border border-yellow-600/30 rounded-xl p-5 md:p-6 shadow-lg ${className}`}>
      {children}
    </div>
  );
}