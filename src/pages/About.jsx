import PageBackground from "../components/PageBackground";
import HeroHeader from "../components/HeroHeader";
import GlassCard from "../components/GlassCard";
import InstallSection from "../components/InstallSection";

const DESKTOP = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/382298f7e_resources-about-desktop.png";
const MOBILE = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/b18825553_resource-sabout-mobile.png";

export default function About() {
  return (
    <>
      <PageBackground desktopImg={DESKTOP} mobileImg={MOBILE} />
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-12 md:py-20">
        <HeroHeader title="About Kingdom Grace Vault" subtitle="Helping believers walk in biblical wisdom and faithful stewardship." />

        <GlassCard className="mb-6">
          <p className="text-yellow-100/90 font-body text-sm md:text-base leading-relaxed">
            Kingdom Grace Vault exists to help believers grow in biblical stewardship, generosity, wisdom, prayer, and legacy. This app is not about chasing wealth; it is about honoring God, managing what He has given, trusting Him as Provider, and using resources for Kingdom purpose.
          </p>
        </GlassCard>

        <GlassCard className="mb-8">
          <h3 className="font-heading text-lg text-yellow-300 font-bold mb-3">Kingdom Mandate Ministry</h3>
          <p className="text-yellow-100/90 font-body text-sm md:text-base leading-relaxed">
            Kingdom Mandate Ministry exists to awaken believers, stir the fire of revival, and equip the Body of Christ to walk in purpose, power, and truth.
          </p>
        </GlassCard>

        <div className="flex flex-wrap justify-center gap-3">
          <a href="https://kingdommandateministry.com" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-800 to-red-700 text-yellow-100 font-heading font-bold text-sm hover:from-red-700 hover:to-red-600 transition-all shadow-md border border-yellow-600/30">
            Visit Kingdom Mandate Ministry
          </a>
          <a href="https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-heading font-bold text-sm hover:from-yellow-500 hover:to-yellow-400 transition-all shadow-md">
            Partner / Sow
          </a>
        </div>
        <InstallSection />
      </div>
    </>
  );
}