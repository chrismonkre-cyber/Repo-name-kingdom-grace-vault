import { useState } from "react";
import PageBackground from "../components/PageBackground";
import HeroHeader from "../components/HeroHeader";
import GlassCard from "../components/GlassCard";

const DESKTOP = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/5ce6b1f52_daily-desktop.png";
const MOBILE = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/34800c83b_daily-mobile.png";

const DAYS = [
  {
    theme: "God Is My Provider",
    scripture: "\"And my God will meet all your needs according to the riches of his glory in Christ Jesus.\" — Philippians 4:19",
    encouragement: "You are not alone in your provision. God sees you, knows your needs, and is faithful to provide. Trust Him today.",
    prayer: "Father, I thank You that You are my Provider. I trust You with my finances, my family, and my future. Help me to rest in Your faithfulness. In Jesus' name, Amen.",
    declaration: "I declare that God is my Provider. He supplies all my needs. I lack nothing because He is more than enough.",
    action: "Write down three things God has provided for you recently. Thank Him specifically for each one.",
    reflection: "Where am I trusting my own strength instead of trusting God as my Provider?"
  },
  {
    theme: "Seek First the Kingdom",
    scripture: "\"But seek first his kingdom and his righteousness, and all these things will be given to you as well.\" — Matthew 6:33",
    encouragement: "When God is first, everything else falls into alignment. Priorities rooted in the Kingdom produce peace.",
    prayer: "Lord, help me to seek Your Kingdom above all else. Align my desires, my spending, and my goals with Your will. In Jesus' name, Amen.",
    declaration: "I put God first in everything — my time, my money, my heart. As I seek His Kingdom, He adds everything I need.",
    action: "Review your weekly schedule and spending. Identify one area to realign with Kingdom priorities.",
    reflection: "What competes with God for first place in my life?"
  },
  {
    theme: "Faithful Stewardship",
    scripture: "\"Whoever can be trusted with very little can also be trusted with much.\" — Luke 16:10",
    encouragement: "Faithfulness in the small things is the doorway to greater responsibility and blessing. Steward well today.",
    prayer: "Father, give me wisdom to manage what You have placed in my hands. Help me be faithful in the small and the great. In Jesus' name, Amen.",
    declaration: "I am a faithful steward. I manage God's resources with wisdom, integrity, and purpose.",
    action: "Look at your budget or spending this week. Find one area where you can be more intentional.",
    reflection: "Am I being faithful with what God has already given me?"
  },
  {
    theme: "Wisdom Over Worry",
    scripture: "\"If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault.\" — James 1:5",
    encouragement: "Worry produces nothing, but wisdom produces fruit. Ask God for wisdom and He will give it generously.",
    prayer: "God, I exchange my worry for Your wisdom. Teach me to make decisions rooted in faith, not fear. In Jesus' name, Amen.",
    declaration: "I choose wisdom over worry. God gives me clarity, peace, and direction for every financial decision.",
    action: "Write down one financial worry. Then write a Scripture-based declaration to replace it.",
    reflection: "What financial decision do I need God's wisdom for today?"
  },
  {
    theme: "Generosity with Joy",
    scripture: "\"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.\" — 2 Corinthians 9:7",
    encouragement: "Generosity is the heartbeat of the Kingdom. When you give with joy, Heaven moves in your life.",
    prayer: "Lord, make me generous like You. Let me give with joy, without fear, knowing that You will always replenish what I sow. In Jesus' name, Amen.",
    declaration: "I am a cheerful giver. I give generously because God is generous with me. My giving unlocks Kingdom impact.",
    action: "Find one way to be generous today — a financial gift, an encouraging word, or an act of service.",
    reflection: "Is there an area where God is calling me to be more generous?"
  },
  {
    theme: "Contentment and Gratitude",
    scripture: "\"I have learned the secret of being content in any and every situation.\" — Philippians 4:12",
    encouragement: "Contentment is not about having everything — it is about trusting the One who holds everything. Rest in Him today.",
    prayer: "Father, teach me contentment. Help me to be grateful for what I have while trusting You for what is to come. In Jesus' name, Amen.",
    declaration: "I am content in every season. I am grateful for God's provision and I trust His timing for increase.",
    action: "Write five things you are grateful for today. Let gratitude shift your perspective.",
    reflection: "Where do I need to practice contentment instead of comparison?"
  },
  {
    theme: "Building Kingdom Legacy",
    scripture: "\"A good person leaves an inheritance for their children's children.\" — Proverbs 13:22",
    encouragement: "Legacy is not just about money. It is about faith, wisdom, character, and Kingdom impact passed to the next generation.",
    prayer: "God, help me to build a legacy of faith, generosity, and wisdom. Let my life impact generations for Your glory. In Jesus' name, Amen.",
    declaration: "I am building a legacy for God's glory. My stewardship today blesses my family and future generations.",
    action: "Write down one legacy goal — something you want to pass on spiritually, financially, or relationally.",
    reflection: "What kind of legacy am I building with my life and resources?"
  }
];

const DAY_NAMES = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export default function DailyWisdom() {
  const todayIdx = new Date().getDay();
  const [selected, setSelected] = useState(todayIdx);
  const day = DAYS[selected];

  return (
    <>
      <PageBackground desktopImg={DESKTOP} mobileImg={MOBILE} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12 md:py-20">
        <HeroHeader title="Today's Kingdom Wisdom" subtitle="Feed your faith. Honor God. Walk in wisdom." />

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {DAY_NAMES.map((name, i) => (
            <button key={i} onClick={() => setSelected(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold transition-all ${selected === i ? "bg-yellow-500 text-black" : "bg-red-950/50 text-yellow-200 border border-yellow-600/30 hover:bg-red-900/60"}`}>
              {name}
            </button>
          ))}
        </div>

        <GlassCard>
          <h2 className="font-heading text-xl md:text-2xl text-yellow-300 font-bold mb-4">{day.theme}</h2>

          <div className="space-y-5">
            <Section label="Scripture" text={day.scripture} />
            <Section label="Encouragement" text={day.encouragement} />
            <Section label="Prayer" text={day.prayer} />
            <Section label="Declaration" text={day.declaration} />
            <Section label="Action Step" text={day.action} />
            <Section label="Reflection" text={day.reflection} />
          </div>
        </GlassCard>
      </div>
    </>
  );
}

function Section({ label, text }) {
  return (
    <div>
      <h3 className="font-heading text-sm text-yellow-400 font-bold uppercase tracking-wider mb-1">{label}</h3>
      <p className="text-yellow-100/85 text-sm font-body leading-relaxed">{text}</p>
    </div>
  );
}