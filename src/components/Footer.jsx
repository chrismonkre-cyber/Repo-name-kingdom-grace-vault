const LINKS = [
  { label: "Main Site", href: "https://kingdommandateministry.com" },
  { label: "Bible Companion", href: "https://thebiblecompanion.online" },
  { label: "Prayer Wall", href: "https://prayer.kingdommandateministry.com" },
  { label: "Fire", href: "https://fire.kingdommandateministry.com" },
  { label: "Pathway", href: "https://pathway.kingdommandateministry.com" },
  { label: "Declarations", href: "https://declarations.kingdommandateministry.com" },
  { label: "Healing Room", href: "https://healing.kingdommandateministry.com" },
  { label: "Purpose Finder", href: "https://purpose.kingdommandateministry.com" },
  { label: "Identity", href: "https://identity.kingdommandateministry.com" },
  { label: "Gift Finder", href: "https://gifts.kingdommandateministry.com" },
  { label: "Battle Plan", href: "https://battle.kingdommandateministry.com" },
  { label: "Grace Vault", href: "https://grace.kingdommandateministry.com" },
  { label: "Revival Fire", href: "https://revival.kingdommandateministry.com" },
  { label: "Family Altar", href: "https://family.kingdommandateministry.com" },
  { label: "Marketplace Mandate", href: "https://marketplace.kingdommandateministry.com" },
  { label: "Freedom", href: "https://freedom.kingdommandateministry.com" },
  { label: "YouTube", href: "https://www.youtube.com/@KingdomMandateMinistry" },
  { label: "Contact", href: "mailto:kingdommm.chris@gmail.com" },
  { label: "Partner / Sow", href: "https://www.paypal.com/donate/?business=kingdommm.chris%40gmail.com" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black/70 backdrop-blur-md border-t border-yellow-700/40 py-8 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
          {LINKS.map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-yellow-200/80 hover:text-yellow-300 text-xs font-body transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <p className="text-yellow-100/60 text-xs font-body">
          © 2026 Kingdom Mandate Ministry | Built for the Glory of GOD, by the Grace of GOD
        </p>
      </div>
    </footer>
  );
}