'use strict'
/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

  // `=== GameObject ===`
  class GameObject { 
    constructor(attrs) {
      this.createdAt = attrs.createdAt;
      this.name = attrs.name;
      this.dimensions = attrs.dimensions;
    }
  
    destroy() {
      return `${this.name} was removed from the game.`;
    }
  }
  


//   function GameObject(attrs) {
//     this.createdAt = attrs.createdAt;
//     this.name = attrs.name;
//     this.dimensions = attrs.dimensions; /*(These represent the character's size in the video game)*/
//   }

//  GameObject.prototype.destroy = function() {
//    // prototype method that returns: `${this.name} was removed from the game.`
//     return `${this.name} was removed from the game.`;
//  }


  // console.log(`=== CharacterStats ===`);
   class CharacterStats extends GameObject {
    constructor(attrs) {
     super(attrs);
     this.healthPoints = attrs.healthPoints;
    }
    takeDamage() {
      return `${this.name} took damage.`;
     }
  }

//   function CharacterStats (attributes) {  /*class CharacterStats extends GameObject {}*/
//     GameObject.call(this, attributes);   /* super()*/
//     this.healthPoints = attributes.healthPoints;
//   }

//   CharacterStats.prototype = Object.create(GameObject.prototype);
//   // * should inherit destroy() from GameObject's prototype

//   CharacterStats.prototype.takeDamage = function() {
//      return `${this.name} took damage.`; // prototype method -> returns the string '<object name> took damage.'
//   }
 

  // console.log(`=== Humanoid (Having an appearance or character resembling that of a human.) ===`);

  class Humanoid extends CharacterStats {
      constructor (attrs) {
        super(attrs);
        this.team = attrs.team;
        this.weapons = attrs.weapons;
        this.language = attrs.language;
        
      }
      greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
      }
  }


//   function Humanoid (attribs) {
//     CharacterStats.call(this, attribs);
//     this.team = attribs.team;
//     this.weapons = attribs.weapons;
//     this.language = attribs.language;
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}.`;
//   }
  // * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  // * should inherit destroy() from GameObject through CharacterStats
  // * should inherit takeDamage() from CharacterStats


/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(`Today's date:`, mage.createdAt); 
console.log(`archer.dimensions`, archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(`swordsman.healthPoints:`, swordsman.healthPoints); // 15
console.log(`mage.name:`, mage.name); // Bruce
console.log(`swordsman.team:`, swordsman.team); // The Round Table
console.log(`mage.weapons:`, mage.weapons); // Staff of Shamalama
console.log(`archer.language:`, archer.language); // Elvish
console.log(`archer.greet:`, archer.greet()); // Lilith offers a greeting in Elvish.
console.log(`mage, who took Damage:`, mage.takeDamage()); // Bruce took damage.
console.log(`swordsman destroyed:`, swordsman.destroy()); // Sir Mustachio was removed from the game.


