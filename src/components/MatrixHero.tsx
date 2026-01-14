import { HackathonBackground } from './HackathonBackground';
import { HeroBase } from './HeroBase';

export function MatrixHero() {
  return (
    <HeroBase initialTheme="purple">
      {(theme) => <HackathonBackground theme={theme} />}
    </HeroBase>
  );
}
