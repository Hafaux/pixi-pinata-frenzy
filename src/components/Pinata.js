import gsap from 'gsap/gsap-core';
import { Container, Sprite } from 'pixi.js';

/**
 * Class representing a pinata
 * @extends Container
 */
export default class Pinata extends Container {
  constructor() {
    super();

    this.name = 'pinata';

    this._elements = new Container();
    this._body = new Sprite.from('pinata');

    this._createBody();
    
    this._body.interactive = true;
    this._body.buttonMode = true;

    this._body.on('click', this._handleBodyClick.bind(this));
  }

  /**
   * @private
   */
  async _handleBodyClick() {
    this._addChili();
    await gsap.to(this._body.scale, { x: 0.9, y: 0.9, duration: 0.1 });
    gsap.to(this._body.scale, { x: 1, y: 1, duration: 0.1 });
  }

  /**
   * @private
   */
  async _addChili() {
    const chili = new Sprite.from('chili');

    chili.name = 'chili';

    this._elements.addChild(chili);

    const scaleFactor = Math.random() + 0.5;
    chili.scale.x = scaleFactor;
    chili.scale.y = scaleFactor;

    chili.rotation = Math.random() - 0.5;

    await gsap.to(chili, { 
      x: Math.floor(Math.random() * 200 - 100), 
      y: 800, 
      duration: 5, 
      alpha: 0 
    });

    this._elements.removeChild(chili);
  }

  async addParticle() {
    const particle = new Sprite.from('particle');

    particle.name = 'particle';

    this._elements.addChild(particle);

    await gsap.to(particle, { 
      x: Math.floor(Math.random() * 200 - 100), 
      y: 400, 
      duration: 5, 
      alpha: 0 
    });

    this._elements.removeChild(particle);
  }

  /**
   * @private
   */
  _createBody() {
    this._elements.y = 200;
    this.addChild(this._elements);

    this._body.anchor.set(0.5, 0);
    this._body.rotation = 0.5;
    this.addChild(this._body);
  }

  dance() {
    gsap.to(this._body, { rotation: -0.3, yoyo: true, repeat: -1, ease: 'power3.inOut', duration: 0.312 });
  }
}