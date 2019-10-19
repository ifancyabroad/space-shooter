import background from '../assets/images/background.png';
import ship from '../assets/spritesheets/ship.png';
import ship2 from '../assets/spritesheets/ship2.png';
import ship3 from '../assets/spritesheets/ship3.png';
import explosion from '../assets/spritesheets/explosion.png';
import powerUp from '../assets/spritesheets/power-up.png';
import player from '../assets/spritesheets/player.png';
import beam from '../assets/spritesheets/beam.png';
import pixelFont from '../assets/font/font.png';
import pixelFontXML from '../assets/font/font.xml';
import audioBeam from '../assets/sounds/beam.ogg';
import audioBeamMP3 from '../assets/sounds/beam.mp3';
import audioExplosion from '../assets/sounds/explosion.ogg';
import audioExplosionMP3 from '../assets/sounds/explosion.mp3';
import audioPickup from '../assets/sounds/pickup.ogg';
import audioPickupMP3 from '../assets/sounds/pickup.mp3';
import audioMusic from '../assets/sounds/sci-fi_platformer12.ogg';
import audioMusicMP3 from '../assets/sounds/sci-fi_platformer12.mp3';

export class Scene1 extends Phaser.Scene {

  constructor() {
    super('bootGame');
  }

  preload() {
    this.load.image('background', background);

    // this.load.image('ship', ship);
    // this.load.image('ship2', ship2);
    // this.load.image('ship3', ship3);

    this.load.spritesheet('ship', ship, {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet('ship2', ship2, {
      frameWidth: 32,
      frameHeight: 16
    });
    this.load.spritesheet('ship3', ship3, {
      frameWidth: 32,
      frameHeight: 32
    });
    this.load.spritesheet('explosion', explosion, {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet('power-up', powerUp, {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.spritesheet('player', player, {
      frameWidth: 16,
      frameHeight: 24
    });
    this.load.spritesheet('beam', beam, {
      frameWidth: 16,
      frameHeight: 16
    });

    this.load.bitmapFont('pixelFont', pixelFont, pixelFontXML);

    this.load.audio('audio_beam', [audioBeam, audioBeamMP3]);
    this.load.audio('audio_explosion', [audioExplosion, audioExplosionMP3]);
    this.load.audio('audio_pickup', [audioPickup, audioPickupMP3]);
    this.load.audio('music', [audioMusic, audioMusicMP3]);
  }

  create() {
    this.add.text(20, 20, 'Loading game...');
    this.scene.start('playGame');

    this.anims.create({
      key: 'ship1_anim',
      frames: this.anims.generateFrameNumbers('ship'),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: 'ship2_anim',
      frames: this.anims.generateFrameNumbers('ship2'),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: 'ship3_anim',
      frames: this.anims.generateFrameNumbers('ship3'),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'explode',
      frames: this.anims.generateFrameNumbers('explosion'),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    });

    this.anims.create({
      key: 'red',
      frames: this.anims.generateFrameNumbers('power-up', {
        stert: 0,
        end: 1
      }),
      frameRate: 20,
      repeat: -1
    });
    this.anims.create({
      key: 'gray',
      frames: this.anims.generateFrameNumbers('power-up', {
        start: 2,
        end: 3
      }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'thrust',
      frames: this.anims.generateFrameNumbers('player'),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'beam_anim',
      frames: this.anims.generateFrameNumbers('beam'),
      frameRate: 20,
      repeat: -1
    });
  }
}