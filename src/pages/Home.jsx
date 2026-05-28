import { Link } from "react-router-dom";
import PageBackground from "../components/PageBackground";
import HeroHeader from "../components/HeroHeader";
import GlassCard from "../components/GlassCard";

const DESKTOP = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/0316e9949_home-desktop.png";
const MOBILE = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/0e0994f67_home-mobil.png";

const FEATURES = [
  { title: "God Our Provider", text: "He supplies, leads, and teaches us to trust Him in every season." },
  { title: "Stewardship", text: "Manage what God has placed in your hands with wisdom, prayer, and responsibility." },
  { title: "Generosity", text: "Give with joy, make an impact, and keep your heart aligned with Heaven." },
  { title: "Legacy", text: "Build with purpose today so future generations are blessed tomorrow." },
];

const BUTTONS = [
  { label: "Start Today", to: "/daily" },
  { label: "Biblical Wisdom", to: "/wisdom" },
  { label: "Goals Journal", to: "/journal" },
  { label: "Partner / Sow", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

export default function Home() {
  return (
    <>
      <PageBackground desktopImg={DESKTOP} mobileImg={MOBILE} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20">
        <HeroHeader title="Kingdom Grace Vault" subtitle="Receive. Walk. Steward. Multiply." />

        <GlassCard className="max-w-3xl mx-auto mb-10 text-center">
          <p className="text-yellow-100/90 font-body text-sm md:text-base leading-relaxed">
            God is the Provider. We are stewards. Kingdom Grace Vault helps you walk in biblical wisdom, honor God with what He has given, grow in generosity, and build a legacy that points back to Him.
          </p>
        </GlassCard>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {BUTTONS.map(b =>
            b.href ? (
              <a key={b.label} href={b.href} target="_blank" rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-heading font-bold text-sm hover:from-yellow-500 hover:to-yellow-400 transition-all shadow-md">
                {b.label}
              </a>
            ) : (
              <Link key={b.label} to={b.to}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-800 to-red-700 text-yellow-100 font-heading font-bold text-sm hover:from-red-700 hover:to-red-600 transition-all shadow-md border border-yellow-600/30">
                {b.label}
              </Link>
            )
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {FEATURES.map(f => (
            <GlassCard key={f.title}>
              <h3 className="font-heading text-lg text-yellow-300 font-bold mb-2">{f.title}</h3>
              <p className="text-yellow-100/80 text-sm font-body">{f.text}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </>
  );
}