/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import abracadabra from '../../img/icon_sag/icon_sag_17.gif'; 
import indulge from '../../img/icon_pro/icon_pro_1.gif'; 
// import soulChange from '../../img/icon_pro/icon_pro_2.gif'; 
import soulBurn from '../../img/icon_pro/icon_pro_3.gif'; 
import mindBreaker from '../../img/icon_pro/icon_pro_4.gif'; 
// import memorize from '../../img/icon_pro/icon_pro_5.gif'; 
import fogWall from '../../img/icon_pro/icon_pro_6.gif'; 
// import spiderWeb from '../../img/icon_pro/icon_pro_7.gif'; 
import doubleCasting from '../../img/icon_pro/icon_pro_8.gif'; 

// список скилов Professor
export const skillsProfessort = [  
  {
    id: "abracadabra",
    level: 0,
    dependencies: [
      { id: "dispell", minLevel: 1 },
    ],
    dependent: [ ],
    element: null,
    skillName: "Abracadabra",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Self
Variable Cast Time: 2.40s
Fixed Cast Time: 0.60s
After Cast Delay: 1s 
Cooldown: 10s
SP Cost: 60
Requirement: Dispell Lv: 1
Description: While active, every time a skill is cast or a basic attack is performed, there is a chance to auto-cast an additional skill of a similar type.
The auto-cast skill scales with the learned level of Abracadabra.
Increases VCT by 10%, adds 0.5s FCT to instant skills, and raises all SP Cost relative to the active level of Abracadabra. 
Abracadabra ends after casting a number of skills based on its level.
Catalyst: 2x Yellow Gemstone
[Lv. 1]: Amount: 1. Max Lv: 1. SP Cost +1 Attacking Chance: 1%, Casting Chance: 5% 
[Lv. 2]: Amount: 1. Max Lv: 2. SP Cost +2 Attacking Chance: 2%, Casting Chance: 10% 
[Lv. 3]: Amount: 2. Max Lv: 3. SP Cost +3 Attacking Chance: 3%, Casting Chance: 15% 
[Lv. 4]: Amount: 2. Max Lv: 4. SP Cost +4 Attacking Chance: 4%, Casting Chance: 20% 
[Lv. 5]: Amount: 3. Max Lv: 5. SP Cost +5 Attacking Chance: 5%, Casting Chance: 25% 
[Lv. 6]: Amount: 3. Max Lv: 6. SP Cost +6 Attacking Chance: 6%, Casting Chance: 30% 
[Lv. 7]: Amount: 4. Max Lv: 7. SP Cost +7 Attacking Chance: 7%, Casting Chance: 35%
[Lv. 8]: Amount: 4. Max Lv: 8. SP Cost +8 Attacking Chance: 8%, Casting Chance: 40% 
[Lv. 9]: Amount: 5. Max Lv: 9. SP Cost +9 Attacking Chance: 9%, Casting Chance: 45% 
[Lv.10]: Amount: 5. Max Lv: 10. SP Cost +10 Attacking Chance: 10%, Casting Chance: 50%`,
    img: abracadabra,
  },
  {
    id: "doubleCasting",
    level: 0,
    dependencies: [
      { id: "freeCast", minLevel: 5 },
    ],
    dependent: [ ],
    element: null,
    skillName: "Double Casting",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Self
Variable Cast Time: 1.40s
Fixed Cast Time: 0.60s
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: Free Cast Lv: 5
Description: Grants a chance to cast certain Skills twice for the next 90s.
This effect applies to both manually casted skills as well as auto-casted skills.
[Lv. 1]: Chance: 40%, SP Cost: 40
[Lv. 2]: Chance: 50%, SP Cost: 45
[Lv. 3]: Chance: 60%, SP Cost: 50 
[Lv. 4]: Chance: 70%, SP Cost: 55 
[Lv. 5]: Chance: 80%, SP Cost: 60`,
    img: doubleCasting,
  },
  {
    id: "fogWall",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Fog Wall",
    maxLevel: 5,
    inform: `Max Level: 5
Skill Form: Active
Type: Supportive
Target: Ground
After Cast Delay: A.Delay - 0.425
Cooldown: 1s
Range: 9 
SP Cost: 25
Requirement: None
Description: Creates a 5x3 AoE at the targeted location that temporarily inflicts Blind on enemies.
Reduces the P.DMG taken and ACC of ranged basic attacks and skills launched against entities within the area.
Older instances are removed to create new ones when reaching the instance limit. 
[Lv. 1]: Max Instances: 1. Duration: 14s 
[Lv. 2]: Max Instances: 2. Duration: 18s 
[Lv. 3]: Max Instances: 3. Duration: 22s 
[Lv. 4]: Max Instances: 4. Duration: 26s 
[Lv. 5]: Max Instances: 5. Duration: 30s
Ranged Skills Damage: -25%
Ranged Basic Attacks Darnage: -75% ACC: -50% `,
    img: fogWall,
  },
  {
    id: "indulge",
    level: 0,
    dependencies: [
      { id: "magicRod", minLevel: 1 },
      { id: "increaseSPRecovery", minLevel: 1 },     
    ],
    dependent: [ ],
    element: null,
    skillName: "Indulge",
    maxLevel: 5,
    inform: `Max Level: 5
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: A.Delay - 0.42s
Cooldown: A.Delay
Description: Drains 10% of Max HP, and restores SP based on the drained amount. 
[Lv. 1]; SP Restore: 10% of drained HP 
[Lv. 2]: SP Restore: 20% of drained HP 
[Lv. 3]: SP Restore: 30% of drained HP 
[Lv. 4]: SP Restore: 40% of drained HP 
[Lv. 5]: SP Restore: 50% of drained HP`,
    img: indulge,
  },
  {
    id: "mindBreaker",
    level: 0,
    dependencies: [
      { id: "increaseSPRecovery", minLevel: 3 },      
      { id: "soulBurn", minLevel: 2 },
    ],
    dependent: [ ],
    element: null,
    skillName: "Mind Breaker",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Enemy
After Cast Delay: 1s 
Range: 9
Requirement: Increase SP Recovery Lv: 3, Soul Burn Lv: 2
Description: Attempts to reduce the target's M.DEF, but increases its B.MATK. Does not work on Bosses, Undead and Corrupt monsters.
[Lv. 1]: B.MATK +32%, M.DEF -16% SP Cost: 12
[Lv. 2]: B.MATK +44%, M.DEF -22% SP Cost: 15
[Lv. 3]: B.MATK +56%, M.DEF -28% SP Cost: 18
[Lv. 4]: B.MATK +68%, M.DEF -34% SP Cost: 21
[Lv. 5]: B.MATK +80%, M.DEF -40% SP Cost: 24`,
    img: mindBreaker,
  },
  {
    id: "soulBurn",
    level: 0,
    dependencies: [
      { id: "castCancel", minLevel: 5 },
      { id: "magicRod", minLevel: 3 },
      { id: "dispell", minLevel: 3 },
    ],
    dependent: [
      { id: "mindBreaker" },      
    ],
    element: null,
    skillName: "Soul Burn",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Element: Neutral
After Cast Delay: 0.30s
Cooldown: 10s 
Range: 10 
Hits: 1
Requirement: Cast Cancel Lv: 5, Magic Rod Lv: 3, Dispell Lv: 3
Description: Deals M.DMG to the SP of single target, scaling with Max SP. 
If the damage exceeds the target's SP, the remaining damage is dealt to their HP.
The damage is based on the target's INT and Level against monsters. 
This skill has a 30% chance for the damage to be dealt back to the caster against players.
VCT scales with skill level.
[Lv. 1]: MATK 100%, MaxSP: 20%, VCT: 0,50s SP Cost: 30
[Lv. 2]: MATK 200%, MaxSP: 40%, VCT: 1.00s SP Cost: 35
[Lv. 3]: MATK 300%, MaxSP: 60%, VCT: 1.50s SP Cost: 40
[Lv. 4]: MATK 400%, MaxSP: 80%, VCT: 2.00s SP Cost: 45
[Lv. 5]: MATK 500%, MaxSP: 100%, VCT: 2.50s SP Cost: 50
Formula: 
SP Damage: (MaxSP x (Skill Lv x 20)) / 100
HP Damage: (Exceeded Damage x (Skill Lv x 100)) / 100 
SP Monsters: (3 + (INT / 10)) x Lv `,
    img: soulBurn,
  },
];



  /*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
//   {
//     id: "memorize",
//     level: 0,
//     dependencies: [],
//     dependent: [ ],
//     element: null,
//     skillName: "Memorize",
//     maxLevel: 1,
//     inform: `Max Lv: 1
// Skill Form: Active
// Type: Magical
// Target: Self
// Requirement: None
// Description: Charges for 0.5 sec to gain a stack that reduces After-cast delay, Variable cast time, and Fixed cast time by 50%. Max Stacks: 5`,
//     img: memorize,
//   },
//   {
//     id: "soulChange",
//     level: 0,
//     dependencies: [
//       { id: "magicRod", minLevel: 3 },
//       { id: "spellBreaker", minLevel: 2 },      
//     ],
//     dependent: [ ],
//     element: null,
//     skillName: "Soul Change",
//     maxLevel: 1,
//     inform: `Max Lv: 1
// Skill Form: Active
// Type: Misc
// Target: Enemy
// Range: 9
// Requirement: Magic Rod Lv: 3, Spell Breaker Lv: 2
// Description: Exchanges caster's remaining SP with target's remaining SP. The SP that the caster receives cannot exceed the caster's MaxSP limit.`,
//     img: soulChange,
//   },
//   {
//     id: "spiderWeb",
//     level: 0,
//     dependencies: [],
//     dependent: [ ],
//     element: null,
//     skillName: "Spider Web",
//     maxLevel: 1,
//     inform: `Max Lv: 1
// Skill Form: Active
// Type: Magical
// Target: Enemy
// Range: 7
// Requirement: None
// Description: Shoots a spider web that will bind and immobilize a target and decrease it's FLEE rate by half for 8 seconds. Fire, Earth, Wind and Water elemental attacks will cause 75% more damage on Fiber Locked targets and cancel the Fiber Locked status. A maximum of 5 Spider Webs can be shot at once. Catalyst: 1x Cobweb.`,
//     img: spiderWeb,
//   },
