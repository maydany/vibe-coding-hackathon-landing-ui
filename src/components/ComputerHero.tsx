import { HeroBase } from './HeroBase';

export function ComputerHero() {
  return (
    <HeroBase initialTheme="black">
      {() => (
        <iframe
          src="https://my.spline.design/cutecomputerfollowcursor-tYYFdbNy0gcLqmlVsMsIkjtx/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ width: '100%', height: '100%', border: 'none' }}
          className="h-full w-full"
          loading="lazy"
          title="3D Computer Interaction"
        />
      )}
    </HeroBase>
  );
}
