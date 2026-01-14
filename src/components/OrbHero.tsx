import { HeroBase } from './HeroBase';

export function OrbHero() {
  return (
    <HeroBase initialTheme="purple">
      {() => (
        <iframe
          src="https://my.spline.design/orb-nHZyz0DUTihVpAVXnCnHHt8v/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="pointer-events-none h-full w-full object-cover"
          loading="lazy"
          title="3D Orb"
        />
      )}
    </HeroBase>
  );
}
