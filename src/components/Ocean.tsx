import { useEffect, useRef } from 'react';

interface Coin {
  x: number;
  y: number;
  speed: number;
  type: 'btc' | 'eth';
  size: number;
}

interface Shark {
  x: number;
  y: number;
  direction: number;
  frame: number;
}

export function Ocean() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create coins
    const coins: Coin[] = [];
    for (let i = 0; i < 30; i++) {
      coins.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 1.5,
        type: Math.random() > 0.5 ? 'btc' : 'eth',
        size: 16 + Math.floor(Math.random() * 16),
      });
    }

    // Create shark
    const shark: Shark = {
      x: canvas.width / 2,
      y: canvas.height / 2,
      direction: 1,
      frame: 0,
    };

    // Draw pixel coin
    const drawCoin = (
      x: number,
      y: number,
      size: number,
      type: 'btc' | 'eth'
    ) => {
      const px = size / 8; // Pixel size

      // Coin background
      ctx.fillStyle = type === 'btc' ? '#f7931a' : '#627eea';

      // Draw circular coin using pixels
      const pattern = [
        '  ####  ',
        ' ###### ',
        '########',
        '########',
        '########',
        '########',
        ' ###### ',
        '  ####  ',
      ];

      pattern.forEach((row, py) => {
        row.split('').forEach((pixel, pxx) => {
          if (pixel === '#') {
            ctx.fillRect(x + pxx * px, y + py * px, px, px);
          }
        });
      });

      // Draw symbol
      ctx.fillStyle = '#ffffff';
      if (type === 'btc') {
        // B symbol
        ctx.fillRect(x + 2 * px, y + 2 * px, px, 4 * px);
        ctx.fillRect(x + 3 * px, y + 2 * px, 2 * px, px);
        ctx.fillRect(x + 3 * px, y + 4 * px, 2 * px, px);
        ctx.fillRect(x + 3 * px, y + 5 * px, 2 * px, px);
        ctx.fillRect(x + 5 * px, y + 3 * px, px, px);
        ctx.fillRect(x + 5 * px, y + 5 * px, px, px);
      } else {
        // ETH diamond
        ctx.fillRect(x + 3.5 * px, y + 1.5 * px, px, px);
        ctx.fillRect(x + 2.5 * px, y + 2.5 * px, 3 * px, px);
        ctx.fillRect(x + 1.5 * px, y + 3.5 * px, 5 * px, px);
        ctx.fillRect(x + 2.5 * px, y + 4.5 * px, 3 * px, px);
        ctx.fillRect(x + 3.5 * px, y + 5.5 * px, px, px);
      }
    };

    // Draw pixel shark
    const drawShark = (
      x: number,
      y: number,
      direction: number,
      frame: number
    ) => {
      const px = 4; // Pixel size
      ctx.save();
      ctx.translate(x, y);
      if (direction < 0) ctx.scale(-1, 1);

      // Shark body color
      const bodyColor = '#5577aa';
      const bellyColor = '#88aacc';
      const finColor = '#334466';
      const eyeColor = '#111111';

      // Shark pixel art pattern
      const sharkPattern = [
        '        ####      ',
        '      ########    ',
        '  #  ##########   ',
        ' ### ########## ##',
        '#### ############',
        '  ## ############',
        '      ##########  ',
        '        ####      ',
      ];

      const bellyPattern = [
        '                  ',
        '                  ',
        '                  ',
        '                  ',
        '     #########    ',
        '      ########    ',
        '                  ',
        '                  ',
      ];

      // Draw body
      ctx.fillStyle = bodyColor;
      sharkPattern.forEach((row, py) => {
        row.split('').forEach((pixel, pxx) => {
          if (pixel === '#') {
            ctx.fillRect(pxx * px - 36, py * px - 16, px, px);
          }
        });
      });

      // Draw belly
      ctx.fillStyle = bellyColor;
      bellyPattern.forEach((row, py) => {
        row.split('').forEach((pixel, pxx) => {
          if (pixel === '#') {
            ctx.fillRect(pxx * px - 36, py * px - 16, px, px);
          }
        });
      });

      // Draw fin
      ctx.fillStyle = finColor;
      ctx.fillRect(0, -24, px * 2, px * 3);

      // Draw eye
      ctx.fillStyle = eyeColor;
      ctx.fillRect(28, -8, px, px);

      // Tail animation
      const tailOffset = Math.sin(frame * 0.2) * 4;
      ctx.fillStyle = finColor;
      ctx.fillRect(-32, tailOffset - 4, px * 2, px * 4);

      ctx.restore();
    };

    // Animation loop
    let animationFrame = 0;
    const animate = () => {
      ctx.fillStyle = '#0a3d5c';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw ocean gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#1a5a7a');
      gradient.addColorStop(0.5, '#0a3d5c');
      gradient.addColorStop(1, '#052030');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw sandy floor
      ctx.fillStyle = '#c4a574';
      ctx.fillRect(0, canvas.height - 60, canvas.width, 60);

      // Draw some pixel seaweed
      for (let i = 0; i < 10; i++) {
        const wx = (i * canvas.width) / 10 + 50;
        const wy = canvas.height - 60;
        ctx.fillStyle = '#44cc66';
        for (let j = 0; j < 5; j++) {
          const wobble = Math.sin(animationFrame * 0.05 + i) * 3;
          ctx.fillRect(wx + wobble, wy - j * 12, 8, 12);
        }
      }

      // Update and draw coins
      coins.forEach((coin) => {
        coin.y -= coin.speed;
        if (coin.y < -coin.size) {
          coin.y = canvas.height + coin.size;
          coin.x = Math.random() * canvas.width;
        }
        drawCoin(coin.x, coin.y, coin.size, coin.type);
      });

      // Update and draw shark
      shark.x += shark.direction * 2;
      shark.y += Math.sin(animationFrame * 0.02) * 0.5;
      shark.frame++;

      if (shark.x > canvas.width + 100) {
        shark.direction = -1;
      } else if (shark.x < -100) {
        shark.direction = 1;
      }

      drawShark(shark.x, shark.y, shark.direction, shark.frame);

      animationFrame++;
      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
}
