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
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/30 via-black/10 to-black/40 pointer-events-none" />
    </>
  );
}