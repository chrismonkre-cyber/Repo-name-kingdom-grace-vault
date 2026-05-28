import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/da587606a_newlogo.png";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/daily", label: "Daily Wisdom" },
  { to: "/wisdom", label: "Wisdom" },
  { to: "/journal", label: "Journal" },
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-yellow-700/40">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={LOGO} alt="Kingdom Mandate Ministry" className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover" />
          <span className="font-heading text-sm md:text-base font-bold text-yellow-300 hidden sm:block">Kingdom Grace Vault</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body text-sm transition-colors ${pathname === l.to ? "text-yellow-300 font-semibold" : "text-yellow-100/80 hover:text-yellow-300"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-yellow-300 p-1">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg border-t border-yellow-700/40">
          <div className="flex flex-col px-6 py-4 gap-3">
            {NAV_LINKS.map(l => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`font-body text-base py-1 ${pathname === l.to ? "text-yellow-300 font-semibold" : "text-yellow-100/80"}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}