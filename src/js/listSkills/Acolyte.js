/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import angelus from '../../img/icon_aco/icon_aco_1.png';
import blessing from '../../img/icon_aco/icon_aco_3.png';
import cure from '../../img/icon_aco/icon_aco_4.png';
import decreaseAgility from '../../img/icon_aco/icon_aco_5.png';
import demonBane from '../../img/icon_aco/icon_aco_6.png';
import divineProtection from '../../img/icon_aco/icon_aco_7.png';
import heal from '../../img/icon_aco/icon_aco_8.png';
import increaseAgility from '../../img/icon_aco/icon_aco_9.png';
import pneuma from '../../img/icon_aco/icon_aco_10.png';
import ruwach from '../../img/icon_aco/icon_aco_11.png';
import teleport from '../../img/icon_aco/icon_aco_13.png';
import warpPortal from '../../img/icon_aco/icon_aco_14.png';
import holyLight from '../../img/icon_aco/icon_aco_15.png';


// список скилов Acolyte
export const skillsAcolyte = [ 
  
  {
    id: "divineProtection",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "angelus" }, 
      { id: "blessing" }, 
      { id: "demonBane" },
      { id: "kyrieEleison" }, 
      { id: "maceMastery" },
      { id: "assumptio" },
      { id: "basilica" },
      { id: "manaRecharge" }, 
      { id: "ironHand" }, 
    ],
    element: null,
    skillName: "Divine Protection",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Passively raises Soft Defense and Soft Magic Defense against Demon and Undead race monsters. Base level affects damage reduction. When receiving damage from Demon and Undead race monsters, there is a chance to activate the Divine Protection effect for 10 seconds. This effect reduces the next damage you receive from Demon and Undead race monsters, with the reduction being equal to half of your base level in %.
[Lv 1]: Reduction: 3 + Base Level, Chance of effect: 1%,
[Lv 2]: Reduction: 6 + Base Level, Chance of effect: 2%,
[Lv 3]: Reduction: 9 + Base Level, Chance of effect: 3%,
[Lv 4]: Reduction: 12 + Base Level, Chance of effect: 4%,
[Lv 5]: Reduction: 15 + Base Level, Chance of effect: 5%,
[Lv 6]: Reduction: 18 + Base Level, Chance of effect: 6%,
[Lv 7]: Reduction: 21 + Base Level, Chance of effect: 7%,
[Lv 8]: Reduction: 24 + Base Level, Chance of effect: 8%,
[Lv 9]: Reduction: 27 + Base Level, Chance of effect: 9%,
[Lv 10]: Reduction: 30 + Base Level, Chance of effect: 10%`,
    img: divineProtection,    
  }, 
  {
    id: "demonBane",
    level: 0,
    dependencies: [{ id: "divineProtection", minLevel: 3 }],
    dependent: [
      { id: "maceMastery" },
      { id: "basilica" },
      { id: "manaRecharge" }, 
      { id: "ironHand" }, 
    ],
    element: null,
    skillName: "Demon Bane",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: Divine Protection Lv: 3
Description: Passively raises damage against Demon and Undead race monsters. Base level affects damage bonus. Damage increased by this skill is added after final damage is calculated. When attacking Demon and Undead race monsters, there is a chance to activate the Demon Bane effect for 10 seconds. This effect increases the damage of your next attack or skill in Demon and Undead race monsters, with the increased damage being equal to half of your base level in %.
[Lv 1]: Damage: 3 + Base Level, Chance of effect: 1%,
[Lv 2]: Damage: 6 + Base Level, Chance of effect: 2%,
[Lv 3]: Damage: 9 + Base Level, Chance of effect: 3%,
[Lv 4]: Damage: 12 + Base Level, Chance of effect: 4%,
[Lv 5]: Damage: 15 + Base Level, Chance of effect: 5%,
[Lv 6]: Damage: 18 + Base Level, Chance of effect: 6%,
[Lv 7]: Damage: 21 + Base Level, Chance of effect: 7%,
[Lv 8]: Damage: 24 + Base Level, Chance of effect: 8%,
[Lv 9]: Damage: 27 + Base Level, Chance of effect: 9%,
[Lv 10]: Damage: 30 + Base Level, Chance of effect: 10%`,
    img: demonBane, 
  },
  {
    id: "heal",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "cure" },
      { id: "increaseAgility" },
      { id: "decreaseAgility" },
      { id: "safetyWal" },
      { id: "sanctuary" },
      { id: "basilica" },
    ], 
    element: null,
    skillName: "Heal",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: None
Description: Restores HP of a single target. This skill is affected by Base Level, INT and MAtk. Versus Corrupt property targets, inflicts Holy property damage equal 75% the amount of the HP restored.
[Lv 1]: SP Cost: 13,
[Lv 2]: SP Cost: 16,
[Lv 3]: SP Cost: 19,
[Lv 4]: SP Cost: 22,
[Lv 5]: SP Cost: 25,
[Lv 6]: SP Cost: 28,
[Lv 7]: SP Cost: 31,
[Lv 8]: SP Cost: 34,
[Lv 9]: SP Cost: 37,
[Lv 10]: SP Cost: 40`,
    img: heal, 
  },
  {
    id: "cure",
    level: 0,
    dependencies: [{ id: "heal", minLevel: 2 }],
    dependent: [],
    element: null,
    skillName: "Cure",
    maxLevel: 5,
    inform: `Max Lv: 1 (or 5)
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Heal Lv: 2
Description: Attempts to cleanse a single target from the Silence, Chaos and Blind status. If successful, grants a temporary 20% increase in resistance to the cured status. Caster INT and Base Level, target INT or LUK and Base Level increases chance of cleanse. This skill is initially learned at Level 1, with higher levels unlocked through special items.
[Lv 1]: Resistance duration: 10 seconds. Cooldown: 3 seconds,
[Lv 2]: Resistance duration: 20 seconds. Cooldown: 2.5 seconds,
[Lv 3]: Resistance duration: 30 seconds. Cooldown: 2 seconds,
[Lv 4]: Resistance duration: 40 seconds. Cooldown: 1.5 seconds,
[Lv 5]: Resistance duration: 50 seconds. Cooldown: 1 seconds`,
    img: cure, 
  },
  {
    id: "angelus",
    level: 0,
    dependencies: [{ id: "divineProtection", minLevel: 3 }],
    dependent: [
      { id: "kyrieEleison" }, 
      { id: "assumptio" },
    ],
    element: null,
    skillName: "Angelus",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Requirement: Divine Protection Lv: 3
Description: Increases VIT, Soft Defense and MaxHP on the user and all party members in a 14x14 area around the user. Additionally, the bonus of VIT increases by +1 for every 14 Job Levels of the user. Duration of this ability is 240 seconds.
[Lv 1]: VIT +1, Soft Def +5%, HP +50,
[Lv 2]: VIT +2, Soft Def +10%, HP +100,
[Lv 3]: VIT +3, Soft Def +15%, HP +150,
[Lv 4]: VIT +4, Soft Def +20%, HP +200,
[Lv 5]: VIT +5, Soft Def +25%, HP +250,
[Lv 6]: VIT +6, Soft Def +30%, HP +300,
[Lv 7]: VIT +7, Soft Def +35%, HP +350,
[Lv 8]: VIT +8, Soft Def +40%, HP +400,
[Lv 9]: VIT +9, Soft Def +45%, HP +450, 
[Lv 10]: VIT +10, Soft Def +50%, HP +500`,
    img: angelus, 
  },
  {
    id: "blessing",
    level: 0,
    dependencies: [{ id: "divineProtection", minLevel: 5 }],
    dependent: [],
    element: null,
    skillName: "Blessing",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Divine Protection Lv: 5
Description: Temporarily increases STR, INT, DEX and reduces Variable Cast Time of the specified character. Additionally, the bonus of STR, INT, and DEX increases by +1 for every 14 job levels of the user. Also has a chance to cure a target of Curse status. When used on Undead and Demon monsters Blessing will reduce their STR, INT and DEX by 50%. When the user becomes a High Priest, Blessing becomes a 5x5 area effect around the target, but the SP cost increases by 2 for each affected target. Duration of this ability is 240 seconds.
[Lv 1]: STR, INT, DEX +1, Variable Cast Time -1%,
[Lv 2]: STR, INT, DEX +2, Variable Cast Time -2%,
[Lv 3]: STR, INT, DEX +3, Variable Cast Time -3%,
[Lv 4]: STR, INT, DEX +4, Variable Cast Time -4%,
[Lv 5]: STR, INT, DEX +5, Variable Cast Time -5%,
[Lv 6]: STR, INT, DEX +6, Variable Cast Time -6%,
[Lv 7]: STR, INT, DEX +7, Variable Cast Time -7%,
[Lv 8]: STR, INT, DEX +8, Variable Cast Time -8%,
[Lv 9]: STR, INT, DEX +9, Variable Cast Time -9%,
[Lv 10]: STR, INT, DEX +10, Variable Cast Time -10%`,
    img: blessing, 
  },
  {
    id: "increaseAgility",
    level: 0,
    dependencies: [{ id: "heal", minLevel: 3 }],
    dependent: [{ id: "decreaseAgility" }],
    element: null,
    skillName: "Increase Agility",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Heal Lv: 3
Description: Increases targeted characters AGI, Movement and Attack Speed for the duration of skill. Additionally, the bonus of AGI increases by +1 for every 14 job levels of the user. Drains 15 HP from the caster after each cast. When used on target that affected by Decrease Agility status, this skill will release target from that. When the user becomes a High Priest, Increase agility becomes a 5x5 area effect around the target, but the SP cost increases by 2 for each affected target. Duration of this ability is 240 seconds.
[Lv 1]: AGI +1, Atk Speed: +1%,
[Lv 2]: AGI +2, Atk Speed: +2%,
[Lv 3]: AGI +3, Atk Speed: +3%,
[Lv 4]: AGI +4, Atk Speed: +4%,
[Lv 5]: AGI +5, Atk Speed: +5%,
[Lv 6]: AGI +6, Atk Speed: +6%,
[Lv 7]: AGI +7, Atk Speed: +7%,
[Lv 8]: AGI +8, Atk Speed: +8%,
[Lv 9]: AGI +9, Atk Speed: +9%,
[Lv 10]: AGI +10, Atk Speed: +10%`,
    img: increaseAgility, 
  },  
  {
    id: "decreaseAgility",
    level: 0,
    dependencies: [{ id: "increaseAgility", minLevel: 1 }],
    dependent: [],
    element: null,
    skillName: "Decrease Agility",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Increase Agility Lv: 1
Description: Decreases targeted characters AGI, Movement and Attack Speed for the duration of skill. Additionally, the reduction of AGI increases by 1 for every 14 job levels of the user. When the user becomes a High Priest, Decrease Agility becomes a 3x3 area effect around the target, but the SP cost increases by 4 for each affected target.
[Lv 1]: AGI -1, Movement Speed: -1%, Duration: 15 Seconds,
[Lv 2]: AGI -2, Movement Speed: -2%, Duration: 20 Seconds,
[Lv 3]: AGI -3, Movement Speed: -3%, Duration: 25 Seconds,
[Lv 4]: AGI -4, Movement Speed: -4%, Duration: 30 Seconds,
[Lv 5]: AGI -5, Movement Speed: -5%, Duration: 35 Seconds,
[Lv 6]: AGI -6, Movement Speed: -6%, Duration: 40 Seconds,
[Lv 7]: AGI -7, Movement Speed: -7%, Duration: 45 Seconds,
[Lv 8]: AGI -8, Movement Speed: -8%, Duration: 50 Seconds,
[Lv 9]: AGI -9, Movement Speed: -9%, Duration: 55 Seconds,
[Lv 10]: AGI -10, Movement Speed: -10%, Duration: 60 Seconds`,
    img: decreaseAgility, 
  },
  {
    id: "holyLight",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "magnusExorcismus" },
      { id: "turnUndead" },
    ],
    element: null,
    skillName: "Holy Light",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: None
Description: Summon holy light to counter evil. When used with Staffs or Books, it deals magical damage, has a casting time, and a spell range of 9 cells. When used with Maces or Knuckles, it becomes a physical attack, has no casting time, and becomes melee-ranged.
[Lv 1]: ATK or MATK 135%,
[Lv 2]: ATK or MATK 170%,
[Lv 3]: ATK or MATK 205%,
[Lv 4]: ATK or MATK 240%,
[Lv 5]: ATK or MATK 275%,
[Lv 6]: ATK or MATK 310%,
[Lv 7]: ATK or MATK 345%,
[Lv 8]: ATK or MATK 380%,
[Lv 9]: ATK or MATK 415%,
[Lv 10]: ATK or MATK 450%`,
    img: holyLight, 
  },
  {
    id: "ruwach",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "teleport" },
      { id: "warpPortal" },
      { id: "pneuma" },
      { id: "lexAeterna" },
      { id: "lexDivina" },
      { id: "magnusExorcismus" },
      { id: "turnUndead" },
      { id: "meditatio" },
    ],
    element: null,
    skillName: "Ruwach",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Uses 10 SP to summon Holy Spirit that will detect hidden characters in 5x5 cells area around the caster for 10 sec.`,
    img: ruwach, 
  },
  {
    id: "teleport",
    level: 0,
    dependencies: [{ id: "ruwach", minLevel: 1 }],
    dependent: [{ id: "warpPortal" }],
    element: null,
    skillName: "Teleport",
    maxLevel: 2,
    inform: `Max Lv: 2
Skill Form: Active
Type: Magical
Target: Self
Requirement: Ruwach Lv: 1
Description: Teleports caster to other area. Cant be used in an area that protected by Land Protector.
[Lv 1]: Random Spot, SP Consumption: 10,
[Lv 2]: Save Point, SP Consumption: 9`,
    img: teleport, 
  },
  {
    id: "warpPortal",
    level: 0,
    dependencies: [{ id: "teleport", minLevel: 2 },],
    dependent: [{ id: "pneuma" }], 
    element: null,
    skillName: "Warp Portal",
    maxLevel: 3,
    inform: `Max Lv: 3
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Teleport Lv: 2
Description: Creates a Warp Portal that will transport those that enter to the portal's destination. Up to 8 players can be transported regardless of the skill level. This skill is disabled within land protector effect. Catalyst: 1x Blue Gemstone.
[Lv 1]: 1 custom position available,
[Lv 2]: 2 custom position available,
[Lv 3]: 3 custom position available`,
    img: warpPortal, 
  },
  {
    id: "pneuma",
    level: 0,
    dependencies: [
      { id: "warpPortal", minLevel: 3 }, 
    ],
    dependent: [],
    element: null,
    skillName: "Pneuma",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Warp Portal Lv: 3
Description: Uses 10 SP to create, barrier in 3x3 cells around targeted, cell that for 10 sec will protect, anyone inside it from long range, physical attacks.`,
    img: pneuma, 
  },
];


/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
