/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка

// список скилов Professor
export const skillsProfessort = [  
  {
    id: "abracadabra",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Abracadabra",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Requirement: Dispell Lv: 1
Description: Unleash a touch of magic mayhem. When you use an offensive skill after casting Abracadabra, a random spell from offensive arsenal is unleashed. If you use a support skill, a random spell from your support arsenal is unleashed. Buffs targeting only yourself will activate on self-casts or self-targeted skills. While Abracadabra is active, adds 0.5 seconds to Fixed Cast Time for skills without it, applies an extra SP cost to other abilities and increases Variable Cast Time by 10%. Catalyst: 2x Yellow Gemstone.
[Lv 1]: Spells Lv: 1, Number of Spells: 1,
[Lv 2]: Spells Lv: 2, Number of Spells: 1,
[Lv 3]: Spells Lv: 3, Number of Spells: 2,
[Lv 4]: Spells Lv: 4, Number of Spells: 2,
[Lv 5]: Spells Lv: 5, Number of Spells: 3,
[Lv 6]: Spells Lv: 6, Number of Spells: 3,
[Lv 7]: Spells Lv: 7, Number of Spells: 4,
[Lv 8]: Spells Lv: 8, Number of Spells: 4,
[Lv 9]: Spells Lv: 9, Number of Spells: 5,
[Lv 10]: Spells Lv: 10, Number of Spells: 5`,
    img: skillImgNo,
  },
  {
    id: "doubleCasting",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Double Casting",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Free Cast Lv: 5
Description: Provides a chance to repeat any Elemental skill cast for 90 seconds. The skills eligible for this effect are Cold Bolt, Frost Driver, Fire Bolt, Fire Ball, Fire Wall, Lightning Bolt, Thunder Storm, Soul Strike, Napalm Beat, and Earth Spike.
[Lv 1]: Chance to Repeat: 40%,
[Lv 2]: Chance to Repeat: 50%,
[Lv 3]: Chance to Repeat: 60%,
[Lv 4]: Chance to Repeat: 70%,
[Lv 5]: Chance to Repeat: 80%`,
    img: skillImgNo,
  },
  {
    id: "fogWall",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Fog Wall",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: None
Description: Creates a wall of fog in a 5x3 cell area that will cause the Blind status on players and monsters. All long ranged attacks targeted at players within the skill's range will have a greater chance of missing and have apply to monsters in normal fields, but will also apply to players in PvP zones.
[Lv 1]: Max Fog Walls 1, Duration: 14 seconds,
[Lv 2]: Max Fog Walls 2, Duration: 18 seconds,
[Lv 3]: Max Fog Walls 3, Duration: 22 seconds,
[Lv 4]: Max Fog Walls 4, Duration: 26 seconds,
[Lv 5]: Max Fog Walls 5, Duration: 30 seconds`,
    img: skillImgNo,
  },
  {
    id: "indulge",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Indulge",
    maxLevel: 10,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Increase SP Recovery Lv: 1, Magic Rod Lv: 1
Description: Consumes an amount of HP equal to 10% of MaxHP to restore an SP amount determined by the skill's level.
[Lv 1]: SP +10%,
[Lv 2]: SP +20%,
[Lv 3]: SP +30%,
[Lv 4]: SP +40%,
[Lv 5]: SP +50%`,
    img: skillImgNo,
  },
  {
    id: "memorize",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Memorize",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Charges for 0.5 sec to gain a stack that reduces After-cast delay, Variable cast time, and Fixed cast time by 50%. Max Stacks: 5`,
    img: skillImgNo,
  },
  {
    id: "mindBreaker",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Mind Breaker",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Enemy
Range: 9
Requirement: Increase SP Recovery Lv: 3, Soul Burn Lv: 2
Description: Induces mental turmoil in an enemy that will reduce it's MDEF, but will also increases it's MATK. This skill's level affects the success rate.
[Lv 1]: MATK +20%, MDEF -12%,
[Lv 2]: MATK +40%, MDEF -24%,
[Lv 3]: MATK +60%, MDEF -36%,
[Lv 4]: MATK +80%, MDEF -48%,
[Lv 5]: MATK +100%, MDEF -60%`,
    img: skillImgNo,
  },
  {
    id: "soulBurn",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Soul Burn",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 10
Requirement: Cast Cancel Lv: 5, Magic Rod Lv: 3, Dispell Lv: 3
Description: Casts a spell that has a chance to burn the targets SP. The amount of SP burned is based on the users maximum SP and skill level. Any excess SP burned is converted into magical neutral property damage to the targets health. Against Monsters: 100% success rate. Against Players: 70% success rate. If the spell fails, the caster receives the excess damage. In GvG/PvP maps, the cooldown of this skill is increased by 10 times.
[Lv 1]: 20% of user Max SP is Burned in Enemy current SP, Excess SP damage: x1,
[Lv 2]: 40% of user Max SP is Burned in Enemy current SP, Excess SP damage: x2,
[Lv 3]: 60% of user Max SP is Burned in Enemy current SP, Excess SP damage: x3,
[Lv 4]: 80% of user Max SP is Burned in Enemy current SP, Excess SP damage: x4,
[Lv 5]: 100% of user Max SP is Burned in Enemy current SP, Excess SP damage: x5`,
    img: skillImgNo,
  },
  {
    id: "soulChange",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Soul Change",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Misc
Target: Enemy
Range: 9
Requirement: Magic Rod Lv: 3, Spell Breaker Lv: 2
Description: Exchanges caster's remaining SP with target's remaining SP. The SP that the caster receives cannot exceed the caster's MaxSP limit.`,
    img: skillImgNo,
  },
  {
    id: "spiderWeb",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Spider Web",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Magical
Target: Enemy
Range: 7
Requirement: None
Description: Shoots a spider web that will bind and immobilize a target and decrease it's FLEE rate by half for 8 seconds. Fire, Earth, Wind and Water elemental attacks will cause 75% more damage on Fiber Locked targets and cancel the Fiber Locked status. A maximum of 5 Spider Webs can be shot at once. Catalyst: 1x Cobweb.`,
    img: skillImgNo,
  },
];



  /*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */