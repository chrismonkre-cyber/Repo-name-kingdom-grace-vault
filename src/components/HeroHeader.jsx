const LOGO = "https://media.base44.com/images/public/user_69a2073c194ba1099feee8ab/da587606a_newlogo.png";

export default function HeroHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-8 md:mb-12">
      <img src={LOGO} alt="Kingdom Mandate Ministry" className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full object-cover drop-shadow-lg" />
      <h1 className="font-heading text-3xl md:text-5xl font-bold text-yellow-300 drop-shadow-lg mb-3" style={{ textShadow: '0 0 30px rgba(200,150,0,0.5)' }}>
        {title}
      </h1>
      {subtitle && (
        <p className="font-body text-base md:text-xl text-yellow-100/90 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}