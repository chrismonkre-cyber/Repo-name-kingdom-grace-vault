import GlassCard from "./GlassCard";
import { Smartphone } from "lucide-react";

const STEPS = [
  "Open this app in your browser.",
  'Tap your browser menu (the three dots or share icon).',
  'Choose "Add to Home Screen" or "Install App."',
  "Open it anytime like a normal app — no app store needed.",
];

export default function InstallSection() {
  const scrollToInstall = () => {
    document.getElementById("install-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="install-section" className="mt-10">
      <GlassCard>
        <div className="flex items-center gap-3 mb-4">
          <Smartphone className="w-6 h-6 text-yellow-400 shrink-0" />
          <h2 className="font-heading text-xl md:text-2xl text-yellow-300 font-bold">Install This Free Kingdom App</h2>
        </div>
        <p className="text-yellow-100/85 font-body text-sm md:text-base mb-5">
          You can install Kingdom Grace Vault on your phone, tablet, or computer without using an app store.
        </p>
        <ol className="space-y-2 mb-6">
          {STEPS.map((step, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-yellow-600/40 border border-yellow-500/40 text-yellow-300 font-heading font-bold text-xs flex items-center justify-center">{i + 1}</span>
              <p className="text-yellow-100/85 text-sm font-body">{step}</p>
            </li>
          ))}
        </ol>
        <button
          onClick={scrollToInstall}
          className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-heading font-bold text-sm hover:from-yellow-500 hover:to-yellow-400 transition-all shadow-md"
        >
          Install / Add to Home Screen
        </button>
      </GlassCard>
    </div>
  );
}