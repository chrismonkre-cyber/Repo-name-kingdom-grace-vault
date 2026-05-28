import PageBackground from "../components/PageBackground";
import HeroHeader from "../components/HeroHeader";
import GlassCard from "../components/GlassCard";
import { ExternalLink } from "lucide-react";

const DESKTOP = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/382298f7e_resources-about-desktop.png";
const MOBILE = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/b18825553_resource-sabout-mobile.png";

const RESOURCES = [
  { title: "The Bible Companion", href: "https://thebiblecompanion.online" },
  { title: "Kingdom Pathway", href: "https://pathway.kingdommandateministry.com" },
  { title: "Kingdom Declarations", href: "https://declarations.kingdommandateministry.com" },
  { title: "Kingdom Healing Room", href: "https://healing.kingdommandateministry.com" },
  { title: "Kingdom Purpose Finder", href: "https://purpose.kingdommandateministry.com" },
  { title: "Kingdom Identity", href: "https://identity.kingdommandateministry.com" },
  { title: "Kingdom Gift Finder", href: "https://gifts.kingdommandateministry.com" },
  { title: "Kingdom Battle Plan", href: "https://battle.kingdommandateministry.com" },
  { title: "Kingdom Mandate Ministry", href: "https://kingdommandateministry.com" },
  { title: "YouTube Channel", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { title: "Partner / Sow", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
  { title: "Contact", href: "mailto:kingdommm.chris@gmail.com" },
];

export default function Resources() {
  return (
    <>
      <PageBackground desktopImg={DESKTOP} mobileImg={MOBILE} />
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-20">
        <HeroHeader title="Kingdom Resources" subtitle="Continue the journey with powerful tools and Kingdom resources." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RESOURCES.map(r => (
            <a key={r.title} href={r.href} target="_blank" rel="noopener noreferrer">
              <GlassCard className="flex items-center justify-between gap-3 hover:border-yellow-400/60 transition-colors cursor-pointer group">
                <h3 className="font-heading text-sm md:text-base text-yellow-300 font-bold group-hover:text-yellow-200 transition-colors">{r.title}</h3>
                <ExternalLink className="w-4 h-4 text-yellow-400/60 group-hover:text-yellow-300 shrink-0" />
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}