import { useState } from "react";
import PageBackground from "../components/PageBackground";
import HeroHeader from "../components/HeroHeader";
import { ChevronDown } from "lucide-react";

const DESKTOP = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/92fdb0c40_wisdom-desktop.png";
const MOBILE = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/4c4fa4c66_wisdom-mobile.png";

const CATEGORIES = [
  { title:"God Our Provider", desc:"God is our source, not our job or savings.", scripture:"Philippians 4:19", wisdom:"Every good gift comes from God. When we acknowledge Him as Provider, we release worry and walk in faith. He is Jehovah Jireh — the Lord who provides.", prayer:"Father, I trust You as my Provider. I release every worry and receive Your provision today. In Jesus' name, Amen.", declaration:"God is my Provider. He meets every need according to His riches in glory.", action:"List three ways God has provided for you this month and thank Him." },
  { title:"Stewardship", desc:"We manage what belongs to God.", scripture:"Luke 16:10", wisdom:"Everything belongs to God. We are managers, not owners. Faithful stewardship in small things opens doors to greater things.", prayer:"Lord, help me steward every resource — time, money, talent — for Your glory. In Jesus' name, Amen.", declaration:"I am a faithful steward of all God has entrusted to me.", action:"Review your budget and identify one area to steward more wisely." },
  { title:"Seek First the Kingdom", desc:"God's Kingdom above all else.", scripture:"Matthew 6:33", wisdom:"When we prioritize God's Kingdom, He takes care of everything else. Seek Him first in every decision.", prayer:"God, I put Your Kingdom first today — in my finances, my time, and my heart. In Jesus' name, Amen.", declaration:"I seek first the Kingdom of God and His righteousness. Everything I need is added.", action:"Identify one area where worldly priorities have overtaken Kingdom priorities and realign." },
  { title:"Generosity", desc:"Give as God gives — freely and joyfully.", scripture:"2 Corinthians 9:7", wisdom:"Generosity breaks the spirit of greed, selfishness, and fear. When we give cheerfully, we reflect the heart of God.", prayer:"Lord, make me generous like You. Let my giving flow from love, not obligation. In Jesus' name, Amen.", declaration:"I am a cheerful giver. I give generously and God multiplies my seed.", action:"Find one way to give generously today — financially, with your time, or with encouragement." },
  { title:"Contentment", desc:"True wealth is found in Christ.", scripture:"Philippians 4:12", wisdom:"Contentment is not complacency — it is trusting God in every season. It frees us from comparison and anxiety.", prayer:"Father, teach me to be content in plenty and in need. My joy is in You. In Jesus' name, Amen.", declaration:"I am content in every season. God's grace is sufficient for me.", action:"Write five things you are grateful for right now." },
  { title:"Avoiding Debt", desc:"Owe no one anything except love.", scripture:"Romans 13:8", wisdom:"Debt creates bondage. God calls us to freedom. Wise planning and patience keep us out of unnecessary debt.", prayer:"Lord, give me discipline to avoid unnecessary debt and wisdom to become free from any current debt. In Jesus' name, Amen.", declaration:"I walk in financial freedom. I am the lender, not the borrower.", action:"Identify one debt to prioritize paying off. Create a simple plan." },
  { title:"Wise Planning", desc:"Plan with prayer and purpose.", scripture:"Proverbs 21:5", wisdom:"Planning is not a lack of faith — it is wise stewardship. God honors diligent, prayerful preparation.", prayer:"God, guide my planning. Let every plan be submitted to You. In Jesus' name, Amen.", declaration:"I plan with wisdom and execute with faith. God directs my steps.", action:"Set one financial goal for the next 90 days and write it down." },
  { title:"Work and Diligence", desc:"Work as unto the Lord.", scripture:"Colossians 3:23", wisdom:"God honors hard work. Whatever we do, we do it for His glory — not for the approval of men.", prayer:"Lord, help me work diligently and excellently as unto You. In Jesus' name, Amen.", declaration:"I work with excellence and diligence. God blesses the work of my hands.", action:"Identify one area in your work or ministry where you can bring more excellence." },
  { title:"Saving with Purpose", desc:"Save wisely for what matters.", scripture:"Proverbs 6:6-8", wisdom:"Saving is not hoarding — it is preparing with faith. The ant saves in summer for the seasons ahead.", prayer:"Father, give me the discipline to save wisely and the faith to know You are in control. In Jesus' name, Amen.", declaration:"I save with purpose and trust God with my future.", action:"Set up or review a savings goal and automate one small step toward it." },
  { title:"Kingdom Legacy", desc:"Build for generations.", scripture:"Proverbs 13:22", wisdom:"Legacy is more than money. It is faith, wisdom, character, and Kingdom purpose passed to future generations.", prayer:"God, help me build a legacy of faith that outlasts my lifetime. In Jesus' name, Amen.", declaration:"I am building a multigenerational legacy of faith, wisdom, and Kingdom impact.", action:"Write one thing you want your children or spiritual children to inherit from your life." },
  { title:"Faith Over Fear", desc:"Trust God, not circumstances.", scripture:"2 Timothy 1:7", wisdom:"Fear paralyzes. Faith activates. God has not given us a spirit of fear but of power, love, and a sound mind.", prayer:"Lord, I reject fear and choose faith. I trust You in every area of my life. In Jesus' name, Amen.", declaration:"I walk by faith, not by fear. God has given me power, love, and a sound mind.", action:"Name one financial fear and write a faith declaration to replace it." },
  { title:"Trusting God in Every Season", desc:"He is faithful in plenty and in need.", scripture:"Habakkuk 3:17-18", wisdom:"Seasons change, but God does not. Whether in abundance or waiting, He is worthy of our trust and praise.", prayer:"Father, I trust You in this season. Whether I see provision or not, I choose to praise You. In Jesus' name, Amen.", declaration:"I trust God in every season. He is faithful yesterday, today, and forever.", action:"Reflect on a past season where God was faithful. Let that strengthen your trust today." },
];

export default function Wisdom() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <>
      <PageBackground desktopImg={DESKTOP} mobileImg={MOBILE} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-20">
        <HeroHeader title="Biblical Financial Wisdom" subtitle="Manage well. Honor God. Walk in peace." />

        <div className="space-y-3">
          {CATEGORIES.map((cat, i) => (
            <div key={i} className="bg-red-950/40 backdrop-blur-md border border-yellow-600/30 rounded-xl overflow-hidden shadow-lg">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
              >
                <div>
                  <h3 className="font-heading text-base md:text-lg text-yellow-300 font-bold">{cat.title}</h3>
                  <p className="text-yellow-100/70 text-xs font-body mt-0.5">{cat.desc}</p>
                </div>
                <ChevronDown className={`w-5 h-5 text-yellow-400 shrink-0 transition-transform duration-200 ${openIdx === i ? "rotate-180" : ""}`} />
              </button>

              {openIdx === i && (
                <div className="px-5 pb-5 space-y-4 border-t border-yellow-600/20 pt-4">
                  <WSection label="Scripture" text={cat.scripture} />
                  <WSection label="Wisdom" text={cat.wisdom} />
                  <WSection label="Prayer" text={cat.prayer} />
                  <WSection label="Declaration" text={cat.declaration} />
                  <WSection label="Action Step" text={cat.action} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function WSection({ label, text }) {
  return (
    <div>
      <h4 className="font-heading text-xs text-yellow-400 font-bold uppercase tracking-wider mb-1">{label}</h4>
      <p className="text-yellow-100/85 text-sm font-body leading-relaxed">{text}</p>
    </div>
  );
}