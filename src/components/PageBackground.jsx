export default function PageBackground({ desktopImg, mobileImg }) {
  return (
    <>
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${desktopImg})` }}
      />
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${mobileImg})` }}
      />
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/30 to-black/50 pointer-events-none" />
    </>
  );
}
