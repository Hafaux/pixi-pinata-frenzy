import gsap from 'gsap';
import { Sprite, Texture } from 'pixi.js';

/**
 * Class representing a cactus
 * @extends Sprite
 */
export default class Cactus extends Sprite {
  /**
   * Cactus constructor
   * @param {string} textureName Name of the preloaded texture
   * @param {number} x X coordinates
   * @param {number} y Y coordinates
   */
  constructor(textureName, x, y) {
    super(Texture.from(textureName));

    this.name = textureName;

    this.x = x;
    this.y = y;

    this.rotation = 0.5;
    this.anchor.set(0.5, 1);
  }

  dance() {
    gsap.to(this, { rotation: -0.3, yoyo: true, repeat: -1, ease: 'power3.inOut', duration: 0.312 });
  }
}