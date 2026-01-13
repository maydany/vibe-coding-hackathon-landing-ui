import { useEffect, useRef } from 'react';

interface MatrixChar {
  char: string;
  opacity: number;
  targetOpacity: number;
  fadeSpeed: number;
  nextChange: number;
  isWord: boolean;
  activeUntil: number; // For twinkling effect
}

export function HackathonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Words to show prominently
    const words = [
      'EMONAD',
      'CHOG',
      'SHRAMP',
      'MONAD',
      'MOTION',
      'MONCOCK',
      'MONAD LISA',
      '143',
      'MONSHI',
      'NADS',
      'MONARK',
      'MOFU',
      'HOGDOG',
      'MONWOLF',
    ];
    const allChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ';
    
    const fontSize = 18;
    const gap = 26;
    let grid: MatrixChar[][] = [];
    let cols = 0;
    let rows = 0;

    const createCell = (char?: string): MatrixChar => ({
      char: char || allChars[Math.floor(Math.random() * allChars.length)],
      opacity: Math.random() * 0.1,
      targetOpacity: Math.random() * 0.1,
      fadeSpeed: 0.005 + Math.random() * 0.01,
      nextChange: Date.now() + Math.random() * 3000,
      isWord: false,
      activeUntil: 0, // Timestamp when the word highlight ends
    });

    const createRow = (): MatrixChar[] => {
      const row: MatrixChar[] = [];
      for (let x = 0; x < cols; x++) {
        row[x] = createCell();
      }
      return row;
    };

    const isAreaClear = (startX: number, startY: number, length: number, horizontal: boolean) => {
      const pad = 2; // Increased padding for better separation
      const x1 = Math.max(0, startX - pad);
      const y1 = Math.max(0, startY - pad);
      
      let x2, y2;
      if (horizontal) {
        x2 = Math.min(cols - 1, startX + length + pad - 1);
        y2 = Math.min(rows - 1, startY + pad);
      } else {
        x2 = Math.min(cols - 1, startX + pad);
        y2 = Math.min(rows - 1, startY + length + pad - 1);
      }

      for (let y = y1; y <= y2; y++) {
        for (let x = x1; x <= x2; x++) {
          if (grid[y] && grid[y][x] && grid[y][x].isWord) {
            return false;
          }
        }
      }
      return true;
    };

    const initGrid = () => {
      cols = Math.ceil(canvas.width / gap) + 1;
      rows = Math.ceil(canvas.height / gap) + 4;
      grid = [];
      
      for (let y = 0; y < rows; y++) {
        grid[y] = createRow();
      }
    };

    const handleNewRow = () => {
      grid.push(createRow());
    };
    
    // Function to try spawning a word
    const trySpawnWord = () => {
      const word = words[Math.floor(Math.random() * words.length)];
      const horizontal = Math.random() > 0.4;
      
      // Randomize duration and fade speed for this specific word instance
      const duration = 2000 + Math.random() * 3500; // 2.0s to 5.5s
      const spawnFadeSpeed = 0.01 + Math.random() * 0.02; // 0.01 to 0.03

      // Try multiple times to find a spot
      for (let attempt = 0; attempt < 5; attempt++) {
        if (horizontal) {
          const x = Math.floor(Math.random() * (cols - word.length - 2)) + 1;
          const y = Math.floor(Math.random() * (rows - 4)) + 2; // Avoid very top/bottom edge
          
          if (isAreaClear(x, y, word.length, true)) {
            const now = Date.now();
            for (let j = 0; j < word.length; j++) {
              const cell = grid[y][x + j];
              cell.char = word[j];
              cell.isWord = true;
              cell.opacity = 0; // Start invisible for smooth fade-in
              cell.targetOpacity = 1;
              cell.fadeSpeed = spawnFadeSpeed; // Use randomized speed
              cell.activeUntil = now + duration;
            }
            return;
          }
        } else {
          const x = Math.floor(Math.random() * (cols - 2)) + 1;
          const y = Math.floor(Math.random() * (rows - word.length - 2)) + 1;
          
          if (isAreaClear(x, y, word.length, false)) {
            const now = Date.now();
            for (let j = 0; j < word.length; j++) {
              const cell = grid[y + j][x];
              cell.char = word[j];
              cell.isWord = true;
              cell.opacity = 0;
              cell.targetOpacity = 1;
              cell.fadeSpeed = spawnFadeSpeed; // Use randomized speed
              cell.activeUntil = now + duration;
            }
            return;
          }
        }
      }
    };

    let animationId: number;
    let scrollOffset = 0;
    const scrollSpeed = 0.45;
    let spawnRate = 0.03;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Higher spawn rate for desktop
      spawnRate = window.innerWidth > 1024 ? 0.15 : 0.05;
      
      initGrid();
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      const now = Date.now();
      
      // Randomly try to spawn words
      if (Math.random() < spawnRate) { 
        trySpawnWord();
      }
      
      // Incremental scroll
      scrollOffset += scrollSpeed;
      if (scrollOffset >= gap) {
        scrollOffset -= gap;
        grid.shift();
        handleNewRow();
      }
      
      ctx.fillStyle = '#0a0a14';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "Fira Code", "Courier New", monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      for (let y = 0; y < grid.length; y++) {
        const row = grid[y];
        for (let x = 0; x < cols; x++) {
          const cell = row[x];
          
          // Lifecycle management for words
          if (cell.isWord) {
             if (now > cell.activeUntil) {
                // Time's up, fade away
                cell.targetOpacity = 0.05; 
                // Force a consistent slow fade-out for disappearance
                if (cell.fadeSpeed > 0.01) cell.fadeSpeed = 0.01;
                
                // Once it's dim enough, release it
                if (cell.opacity < 0.1) {
                   cell.isWord = false;
                   cell.activeUntil = 0;
                }
             } else {
                // Keep it bright
                 cell.targetOpacity = 1.0;
                 // Don't override fadeSpeed here; let the randomized spawn speed handle fade-in
             }
          }
          
          // Smooth fade
          if (cell.opacity < cell.targetOpacity) {
            cell.opacity = Math.min(cell.opacity + cell.fadeSpeed, cell.targetOpacity);
          } else if (cell.opacity > cell.targetOpacity) {
            cell.opacity = Math.max(cell.opacity - cell.fadeSpeed, cell.targetOpacity);
          }
          
          // Regular background flickering
          if (!cell.isWord && now > cell.nextChange) {
            if (Math.random() < 0.6) {
              cell.targetOpacity = 0.25 + Math.random() * 0.45;
            } else {
              cell.targetOpacity = 0.02 + Math.random() * 0.15;
            }
            if (Math.random() < 0.5) {
              cell.char = allChars[Math.floor(Math.random() * allChars.length)];
            }
            cell.nextChange = now + 400 + Math.random() * 1200;
            cell.fadeSpeed = 0.006 + Math.random() * 0.02;
          }
          
          // Draw
          if (cell.opacity > 0.03) {
            const posX = x * gap;
            const posY = (y * gap) - scrollOffset;

            if (posY > -gap && posY < canvas.height + gap) {
              if (cell.isWord) {
                // Word Glow - Bright Purple/White mix
                ctx.shadowColor = '#d8b4fe'; // Light purple glow
                ctx.shadowBlur = cell.opacity * 25;
                // Tinted purple white
                const r = 235;
                const g = 180;
                const b = 255;
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${cell.opacity})`;
              } else {
                // Background Glow
                if (cell.opacity > 0.4) {
                  ctx.shadowColor = '#8844aa';
                  ctx.shadowBlur = 4;
                } else {
                  ctx.shadowBlur = 0;
                }
                const r = Math.floor(80 + cell.opacity * 60);
                const g = Math.floor(30 + cell.opacity * 40);
                const b = Math.floor(120 + cell.opacity * 80);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${cell.opacity * 0.8})`;
              }
              
              ctx.fillText(cell.char, posX, posY);
              ctx.shadowBlur = 0;
            }
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
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
        background: '#0a0a14',
      }}
    />
  );
}
