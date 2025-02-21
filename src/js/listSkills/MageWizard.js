/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import sightrasher from '../../img/icon_wiz/icon_wiz_12.png';
import firePillar from '../../img/icon_wiz/icon_wiz_3.png';
import frostNova from '../../img/icon_wiz/icon_wiz_4.png';
import heavensDrive from '../../img/icon_wiz/icon_wiz_5.png';
import jupitelThunder from '../../img/icon_wiz/icon_wiz_7.png';
import lordOfVermilion from '../../img/icon_wiz/icon_wiz_8.png';
import meteorStorm from '../../img/icon_wiz/icon_wiz_9.png';
import quagmire from '../../img/icon_wiz/icon_wiz_10.png';
import stormGust from '../../img/icon_wiz/icon_wiz_11.png';
import waterBall from '../../img/icon_wiz/icon_wiz_13.png';
import electricalInduction from '../../img/icon_wiz/icon_wiz_electricalinduction.png';
import gemmancy from '../../img/icon_wiz/icon_wiz_gemmancy.png';
import violentQuake from '../../img/icon_wiz/icon_wiz_violentquake.png';

// skills Wizard

export const skillsWizard = [   
  { 
    id: "sightrasher",
    level: 0,
    dependencies: [
      { id: "fireBolt", minLevel: 3 }, 
      { id: "fireBall", minLevel: 2 },
    ],
    dependent: [
      { id: "meteorStorm" },
    ],
    element: null,
    skillName: "Sightrasher",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Fire Bolt Lv: 4, Fire Ball Lv: 3
Description: Launches the fireball in 8 directions around the caster, dealing Fire property magic damage to all nearby enemies and pushing them 2 cells backward. After use, the fireball summoned by Sight disappears. Deals double damage to targets with any form of invisibility.
[Lv 1]: MAtk 100%,
[Lv 2]: MAtk 200%,
[Lv 3]: MAtk 300%,
[Lv 4]: MAtk 400%,
[Lv 5]: MAtk 500%`,
    img: sightrasher,
  },
  {
    id: "meteorStorm",
    level: 0,
    dependencies: [
      { id: "sightrasher", minLevel: 2 },
    ],
    dependent: [
      { id: "firePillar" },
    ],
    element: null,
    skillName: "Meteor Storm",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Sightrasher Lv: 3
Description: Calls down a rain of meteors upon a targeted area, dealing 125% Fire elemental magic damage to enemies within a 13x13 zone, with a chance to stun them. Each meteor affects a 7x7 area. The skill level determines the hits per meteor, and the chance to cause stun.
[Lv 1]: Meteors: 2, Hits per Meteor: 2, Stun Chance: 3%,
[Lv 2]: Meteors: 3, Hits per Meteor: 3, Stun Chance: 6%,
[Lv 3]: Meteors: 3, Hits per Meteor: 3, Stun Chance: 9%,
[Lv 4]: Meteors: 4, Hits per Meteor: 4, Stun Chance: 12%,
[Lv 5]: Meteors: 4, Hits per Meteor: 4, Stun Chance: 15%,
[Lv 6]: Meteors: 5, Hits per Meteor: 5, Stun Chance: 18%,
[Lv 7]: Meteors: 5, Hits per Meteor: 5, Stun Chance: 21%,
[Lv 8]: Meteors: 6, Hits per Meteor: 6, Stun Chance: 24%,
[Lv 9]: Meteors: 6, Hits per Meteor: 6, Stun Chance: 27%,
[Lv 10]: Meteors: 7, Hits per Meteor: 7, Stun Chance: 30%`,
    img: meteorStorm,
  },
  {
    id: "firePillar",
    level: 0,
    dependencies: [
      { id: "meteorStorm", minLevel: 6 },
    ],
    dependent: [],
    element: null,
    skillName: "Fire Pillar",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Meteor Storm Lv: 7
Description: Summons a towering pillar of flame at a designated location. The pillar erupts periodically, dealing piercing Fire property magic damage to all enemies in a 5x5 area. It will automatically disappear if not triggered within its maximum duration. A maximum of 5 pillars can be active at once. Additionally, Fire-damage abilities may trigger a Fire Pillar at the target, with the Auto-Cast chance based on the skill level. Catalyst: 1x Red Gemstone for Lvs. 6 or higher.
[Lv 1]: Hits Inflicted: 3, Auto-Cast Chance: 1%, Duration: 36 seconds,
[Lv 2]: Hits Inflicted: 4, Auto-Cast Chance: 2%, Duration: 42 seconds,
[Lv 3]: Hits Inflicted: 5, Auto-Cast Chance: 3%, Duration: 48 seconds,
[Lv 4]: Hits Inflicted: 6, Auto-Cast Chance: 4%, Duration: 54 seconds,
[Lv 5]: Hits Inflicted: 7, Auto-Cast Chance: 5%, Duration: 60 seconds,
[Lv 6]: Hits Inflicted: 8, Auto-Cast Chance: 6%, Duration: 66 seconds,
[Lv 7]: Hits Inflicted: 9, Auto-Cast Chance: 7%, Duration: 72 seconds,
[Lv 8]: Hits Inflicted: 10, Auto-Cast Chance: 8%, Duration: 78 seconds,
[Lv 9]: Hits Inflicted: 11, Auto-Cast Chance: 9%, Duration: 84 seconds,
[Lv 10]: Hits Inflicted: 12, Auto-Cast Chance: 10%, Duration: 90 seconds`,
    img: firePillar,
  },
  {
    id: "waterBall",
    level: 0,
    dependencies: [
      { id: "frostDiver", minLevel: 2 }, 
    ],
    dependent: [
      { id: "stormGust" },
    ],
    element: null,
    skillName: "Water Ball",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Frost Diver Lv: 3
Description: Launches a Water Ball to deal Water property magic damage to all enemies within its area of effect. Damage varies between the Center 3x3 Cells and Edge 5x5 Cells. If there is water around the caster, multiple Water Balls are conjured. The number of Water Balls depends on the amount of natural water in the terrain or the presence of Deluge/Ice Wall cells nearby. Each Waterball applies stacks of Wet, reducing Freeze resistance by 1% per stack. Against players, it also adds a chance to sit down by 0.5% per stack for each cell they move. Damage of the extra Water Balls is determined by the user's Base Level.
[Lv 1]: Center: 140% MAtk, Edge: 70% MAtk,
[Lv 2]: Center: 180% MAtk, Edge: 90% MAtk,
[Lv 3]: Center: 220% MAtk, Edge: 110% MAtk,
[Lv 4]: Center: 260% MAtk, Edge: 130% MAtk,
[Lv 5]: Center: 300% MAtk, Edge: 150% MAtk`,
    img: waterBall,
  },
  {
    id: "stormGust",
    level: 0,
    dependencies: [
      { id: "waterBall", minLevel: 2 }, 
    ],
    dependent: [
      { id: "frostNova" },
    ],
    element: null,
    skillName: "Storm Gust",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Water Ball Lv: 3
Description: Summons a fierce snowstorm in an 11x11 area, dealing Water magic damage every 0.45 seconds for 4.5 seconds. Pushes enemies 2 cells back and applies Freezing. Freezing lasts 5 seconds, and when it ends naturally, the target becomes Frozen. Enemies hit three times will Frozen, and Frozen enemies take no further damage from this skill.
[Lv 1]: MAtk 120% per Hit,
[Lv 2]: MAtk 170% per Hit,
[Lv 3]: MAtk 220% per Hit,
[Lv 4]: MAtk 270% per Hit,
[Lv 5]: MAtk 320% per Hit,
[Lv 6]: MAtk 370% per Hit,
[Lv 7]: MAtk 420% per Hit,
[Lv 8]: MAtk 470% per Hit,
[Lv 9]: MAtk 520% per Hit,
[Lv 10]: MAtk 570% per Hit`,
    img: stormGust,
  },
  {
    id: "frostNova",
    level: 0,
    dependencies: [
      { id: "stormGust", minLevel: 6 }, 
    ],
    dependent: [],
    element: null,
    skillName: "Frost Nova",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Requirement: Storm Gust Lv: 7
Description: Summons a ring of ice spikes around the user, dealing Water magic damage to nearby enemies with a chance to apply Freezing. Freezing lasts 5 seconds, and when it ends naturally, the target becomes Frozen. Higher skill levels increase the chance to Freezing and reduce cast time.
[Lv 1]: MAtk 110%,
[Lv 2]: MAtk 120%,
[Lv 3]: MAtk 130%,
[Lv 4]: MAtk 140%,
[Lv 5]: MAtk 150%,
[Lv 6]: MAtk 160%,
[Lv 7]: MAtk 170%,
[Lv 8]: MAtk 180%,
[Lv 9]: MAtk 190%,
[Lv 10]: MAtk 200%`,
    img: frostNova,
  },
  {
    id: "jupitelThunder",
    level: 0,
    dependencies: [
      { id: "thunderstorm", minLevel: 2 }, 
    ],
    dependent: [
      { id: "lordOfVermilion" }, 
    ],
    element: null,
    skillName: "Jupitel Thunder",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Thunderstorm Lv:3
Description: Fires a ball of crackling lightning that inflicts 100% MATK Wind elemental magic damage and knock back the targeted enemy. The number of hits increases with the skill level.
[Lv 1]: Hits: 2, Knockback: 3,
[Lv 2]: Hits: 4, Knockback: 4,
[Lv 3]: Hits: 6, Knockback: 5,
[Lv 4]: Hits: 8, Knockback: 6,
[Lv 5]: Hits: 10, Knockback: 7`,
    img: jupitelThunder,
  },
  {
    id: "lordOfVermilion",
    level: 0,
    dependencies: [
      { id: "jupitelThunder", minLevel: 2 }, 
    ],
    dependent: [
      { id: "electricalInduction" },
    ],
    element: null,
    skillName: "Lord of Vermilion",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Jupitel Thunder Lv: 3
Description: Calls down devastating lightning bolts from the skies to strike a chosen area, dealing Wind property magic damage every 0.45 seconds to all enemies within a [13*13] radius for 4.5 seconds. Enemies hit by this storm have a chance to be blinded. The chance of blindness is mitigated by the targets resistances.
[Lv 1]: MAtk 20% per Hit, Blind Chance:15%,
[Lv 2]: MAtk 40% per Hit, Blind Chance:20%,
[Lv 3]: MAtk 60% per Hit, Blind Chance:25%,
[Lv 4]: MAtk 80% per Hit, Blind Chance:30%,
[Lv 5]: MAtk 100% per Hit, Blind Chance:35%,
[Lv 6]: MAtk 120% per Hit, Blind Chance:40%,
[Lv 7]: MAtk 140% per Hit, Blind Chance:45%,
[Lv 8]: MAtk 160% per Hit, Blind Chance:50%,
[Lv 9]: MAtk 180% per Hit, Blind Chance:55%,
[Lv 10]: MAtk 200% per Hit, Blind Chance:60%`,
    img: lordOfVermilion,
  },
  {
    id: "electricalInduction",
    level: 0,
    dependencies: [
      { id: "lordOfVermilion", minLevel: 6 }, 
    ],
    dependent: [],
    element: null,
    skillName: "Electrical Induction",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 11
Requirement: Lord of Vermilion Lv: 7
Description: Unleashes a wave of electrical energy that inflicts Wind property magic damage. This skill bounces from target to target, with each jump increasing damage by 10%. If no other targets are nearby, all jumps will hit the initial target. Wind-damage abilities have a chance to trigger Electrical Induction at the target. The chance for auto-cast is half the skills level.
[Lv 1]: MAtk 10%, Jumps: 3, Auto-Cast Chance: 1%,
[Lv 2]: MAtk 10%, Jumps: 4, Auto-Cast Chance: 2%,
[Lv 3]: MAtk 10%, Jumps: 5, Auto-Cast Chance: 3%,
[Lv 4]: MAtk 10%, Jumps: 6, Auto-Cast Chance: 4%,
[Lv 5]: MAtk 10%, Jumps: 7, Auto-Cast Chance: 5%,
[Lv 6]: MAtk 10%, Jumps: 8, Auto-Cast Chance: 6%,
[Lv 7]: MAtk 10%, Jumps: 9, Auto-Cast Chance: 7%,
[Lv 8]: MAtk 10%, Jumps: 10, Auto-Cast Chance: 8%,
[Lv 9]: MAtk 10%, Jumps: 11, Auto-Cast Chance: 9%,
[Lv 10]: MAtk 10%, Jumps: 12, Auto-Cast Chance: 10%`,
    img: electricalInduction,
  },
  {
    id: "heavensDrive",
    level: 0,
    dependencies: [
      { id: "stoneCurse", minLevel: 2 },
    ],
    dependent: [
      { id: "violentQuake" },
    ],
    element: null,
    skillName: "Heaven's Drive ",
    maxLevel: 5,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Stone Curse Lv: 3
Description: Commands the earth to rise as spikes at a target location, dealing Earth Property Magic Damage to all enemies in a 5x10 area and pushing them 2 cells per hit. Can also hit hidden enemies.
[Lv 1]: MAtk 50% x 5 Hits,
[Lv 2]: MAtk 100% x 5 Hits,
[Lv 3]: MAtk 150% x 5 Hits,
[Lv 4]: MAtk 200% x 5 Hits,
[Lv 5]: MAtk 250% x 5 Hits`,
    img: heavensDrive,
  },
  {
    id: "violentQuake",
    level: 0,
    dependencies: [
      { id: "heavensDrive", minLevel: 2 }, 
    ],
    dependent: [
      { id: "quagmire" }
    ],
    element: null,
    skillName: "Violent Quake",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Heaven's Drive Lv: 3
Description: Causes an earthquake in the target area, with 10 rocks randomly rising during the skill's duration, dealing Earth magic damage to enemies in a 9x9 area. Each rock hit has a chance to inflict Confusion for a short time.
[Lv 1]: MATK 330%, Confusion Chance: 5%,
[Lv 2]: MATK 360%, Confusion Chance: 10%,
[Lv 3]: MATK 390%, Confusion Chance: 15%,
[Lv 4]: MATK 420%, Confusion Chance: 20%,
[Lv 5]: MATK 450%, Confusion Chance: 25%,
[Lv 6]: MATK 480%, Confusion Chance: 30%,
[Lv 7]: MATK 510%, Confusion Chance: 35%,
[Lv 8]: MATK 540%, Confusion Chance: 40%,
[Lv 9]: MATK 570%, Confusion Chance: 45%,
[Lv 10]: MATK 600%, Confusion Chance: 50%`,
    img: violentQuake,
  },
  {
    id: "quagmire",
    level: 0,
    dependencies: [
      { id: "violentQuake", minLevel: 6 }, 
    ],
    dependent: [],
    element: null,
    skillName: "Quagmire",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Violent Quake Lv: 7
Description: Creates a swamp at a target location, slowing and reducing AGI and DEX of all enemies in the area. Stat reduction is capped at 50% for monsters and players. Also removes effects like Increase AGI, Sword/Spear Quicken, Wind Walker, and Adrenaline Rush. Up to three swamps can be active at once. Reductions only apply while enemies are in the Quagmire.
[Lv 1]: AGI/DEX -15%, Duration: 8 seconds,
[Lv 2]: AGI/DEX -20%, Duration: 11 seconds,
[Lv 3]: AGI/DEX -25%, Duration: 14 seconds,
[Lv 4]: AGI/DEX -30%, Duration: 17 seconds,
[Lv 5]: AGI/DEX -35%, Duration: 20 seconds,
[Lv 6]: AGI/DEX -40%, Duration: 23 seconds,
[Lv 7]: AGI/DEX -45%, Duration: 26 seconds,
[Lv 8]: AGI/DEX -50%, Duration: 29 seconds,
[Lv 9]: AGI/DEX -55%, Duration: 32 seconds,
[Lv 10]: AGI/DEX -60%, Duration: 35 seconds`,
    img: quagmire,
  },
  {
    id: "gemmancy",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Gemmancy",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Master the art of Gemmancy, converting gemstones and gaining the ability to create rarer gemstones. The success rate is determined by your Base Level and Job Level, reaching up to 100%. The amount produced receives an additional bonus based on all attributes, with VIT being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies. Gemmancy Creation Guide
[Lv 1]: No Additional Bonus,
[Lv 2]: Additional Efficiency -75%,
[Lv 3]: Additional Efficiency -50%,
[Lv 4]: Additional Efficiency -25%,
[Lv 5]: Full Efficiency`,
    img: gemmancy,
  },
];


/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */
