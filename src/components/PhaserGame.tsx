import { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const PhaserGame = () => {
    const gameContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!gameContainer.current) return;

        const config: Phaser.Types.Core.GameConfig = {
            type: Phaser.AUTO,
            width: 800,
            height: 600,
            parent: gameContainer.current,
            backgroundColor: '#2d2d2d',
            scene: {
                preload: preload,
                create: create,
                update: update,
            },
        };

        const game = new Phaser.Game(config);

        function preload(this: Phaser.Scene) {
            // Load the single strip for "Stand1"
            // Total width: 532, Height: 120. Frames: 4.
            // Frame width: 133 (532/4).
            this.load.spritesheet('mushroom_stand1', '/stand1.png', {
                frameWidth: 133,
                frameHeight: 120
            });
        }

        function create(this: Phaser.Scene) {
            this.add.text(400, 100, 'Mushroom Stand1', {
                fontSize: '32px',
                color: '#ffffff',
                align: 'center',
            }).setOrigin(0.5);

            // Create animation
            this.anims.create({
                key: 'stand1',
                frames: this.anims.generateFrameNumbers('mushroom_stand1', { start: 0, end: 3 }),
                frameRate: 6, // Adjusted speed for breathing effect
                repeat: -1,
                yoyo: true // Optional: breathing might look better with yoyo? 
                // But usually Stand1 loops 0-1-2-3-0. Let's stick to standard loop first.
                // Actually standard maplestory stand usually has a pattern, 
                // but linear loop is safe for now.
            });

            // Add single sprite to center
            const mushroom = this.add.sprite(400, 300, 'mushroom_stand1');
            mushroom.play('stand1');
        }

        function update(this: Phaser.Scene) {
            // No movement logic needed for this request
        }

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div ref={gameContainer} id="phaser-game" />;
};

export default PhaserGame;
