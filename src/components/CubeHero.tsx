import { HeroBase } from './HeroBase';

export function CubeHero() {
  return (
    <HeroBase initialTheme="purple">
      {() => (
        <iframe
          src="https://my.spline.design/interactivecubes-IANiTeEwiG2mfl6MMeglicTI/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ width: '100%', height: '100%', border: 'none' }}
          className="h-full w-full"
          loading="lazy"
          title="3D Interactive Cubes"
        />
      )}
    </HeroBase>
  );
}
