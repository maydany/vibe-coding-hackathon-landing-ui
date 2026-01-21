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
            // Load assets here if needed
            // this.load.image('logo', 'assets/logo.png');
        }

        function create(this: Phaser.Scene) {
            this.add.text(400, 300, 'Phaser 3 Game\nCenter', {
                fontSize: '32px',
                color: '#ffffff',
                align: 'center',
            }).setOrigin(0.5);
        }

        function update(this: Phaser.Scene) {
            // Game loop logic
        }

        return () => {
            game.destroy(true);
        };
    }, []);

    return <div ref={gameContainer} id="phaser-game" />;
};

export default PhaserGame;
