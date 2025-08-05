/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import fireBolt from '../../img/icon_mag/icon_mag_3.png';
import fireBall from '../../img/icon_mag/icon_mag_2.png';
import fireWall from '../../img/icon_mag/icon_mag_6.png';
import coldBolt from '../../img/icon_mag/icon_mag_1.png';
import frostDiver from '../../img/icon_mag/icon_mag_4.png';
import iceWall from '../../img/icon_mag/icon_mag_14.png';
import lightningBolt from '../../img/icon_mag/icon_mag_7.png';
import thunderstorm from '../../img/icon_mag/icon_mag_13.png';
import earthSpike from '../../img/icon_mag/icon_mag_15.png';
import stoneCurse from '../../img/icon_mag/icon_mag_12.png';
import soulStrike from '../../img/icon_mag/icon_mag_8.png';
import napalmBeat from '../../img/icon_mag/icon_mag_11.png';
import safetyWall from '../../img/icon_mag/icon_mag_9.png';
import increaseSPRecovery from '../../img/icon_mag/icon_mag_5.png';
import sight from '../../img/icon_mag/icon_mag_10.png';


// skills Mage
export const skillsMage = [
  { 
    id: "fireBolt",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "fireBall" },
      { id: "sightrasher" },
      { id: "flameWeapon" },
    ],
    element: null,
    skillName: "Fire Bolt",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Element: Fire
After Cast Delay: 1.4s
Range: 9
Requirement: None
Description: Deals M.DMG to the target, scaling with Base Level when manually cast. VCT and FCT scale with skill level.
[Lv 1]: 1 Hit, VCT: 0.50s, FCT: 0.30s SP Cost: 12,
[Lv 2]: 2 Hits, VCT: 0.65s, FCT: 0.35s SP Cost: 14,
[Lv 3]: 3 Hits, VCT: 0.80s, FCT: 0.40s SP Cost: 16,
[Lv 4]: 4 Hits, VCT: 0.95s, FCT: 0.45s SP Cost: 18,
[Lv 5]: 5 Hits, VCT: 1.25s, FCT: 0.55s SP Cost: 20,
[Lv 6]: 6 Hits, VCT: 1.55s, FCT: 0.65s SP Cost: 22,
[Lv 7]: 7 Hits, VCT: 1.85s, FCT: 0.75s SP Cost: 24,
[Lv 8]: 8 Hits, VCT: 2.30s, FCT: 0.90s SP Cost: 26,
[Lv 9]: 9 Hits, VCT: 2.75s, FCT: 1.05s SP Cost: 28,
[Lv 10]: 10 Hits, VCT: 3.20s, FCT: 1.20s SP Cost: 30
Formula: MATK (%): (100 + Manually Cast Bonus) x Hits
Manually Cast Bonus: (100 x Base Lv^2) % 10000`,
    img: fireBolt,
  },
  {
    id: "fireBall",
    level: 0,
    dependencies: [
      { id: "fireBolt", minLevel: 4 },
    ],
    dependent: [
      { id: "fireWall" }, 
      { id: "sightrasher" },       
    ],
    element: null,
    skillName: "Fire Ball",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Element: Fire
Variable Cast Delay: 1.2s
After Cast Delay: 0.5s
Cooldown: 1s
Range: 9
Hit: 1
SP Cost: 25
Requirement: Fire Bolt Lv: 4
Description: Unleashes a scorching fireball that explodes on impact, dealing Fire property magic damage to all enemies within its area of effect. The damage varies between the center [3x3 cells] and the edges [5x5 cells]. If theres fire present around the caster, multiple fireballs are conjured, with their number depending on the amount of natural fire in the terrain or the presence of Volcano or Fire Wall cells near the caster. Damage of the extra Fireballs is determined by the user's Base Level.
[Lv 1]: Center: MAtk 120%,
[Lv 2]: Center: MAtk 140%,
[Lv 3]: Center: MAtk 160%,
[Lv 4]: Center: MAtk 180%,
[Lv 5]: Center: MAtk 200%,
[Lv 6]: Center: MAtk 220%,
[Lv 7]: Center: MAtk 240%,
[Lv 8]: Center: MAtk 260%,
[Lv 9]: Center: MAtk 280%,
[Lv 10]: Center: MAtk 300%`,
    img: fireBall,
  },
  {
    id: "fireWall",
    level: 0,
    dependencies: [
      { id: "fireBall", minLevel: 5 }
    ],
    element: null,
    skillName: "Fire Wall",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Fire Ball Lv: 5
Description: Conjures a blazing wall of flames at a targeted location, dealing 50% Fire property magic damage and pushing enemies back two cells upon contact. However, targets of the [Corrupt] element cannot be pushed.
[Lv 1]: Max Fire Wall up: 1, Duration: 5 sec, Attacks per wall: 3,
[Lv 2]: Max Fire Wall up: 1, Duration: 5 sec, Attacks per wall: 4,
[Lv 3]: Max Fire Wall up: 1, Duration: 5 sec, Attacks per wall: 5,
[Lv 4]: Max Fire Wall up: 2, Duration: 10 sec, Attacks per wall: 6,
[Lv 5]: Max Fire Wall up: 2, Duration: 10 sec, Attacks per wall: 7,
[Lv 6]: Max Fire Wall up: 2, Duration: 10 sec, Attacks per wall: 8,
[Lv 7]: Max Fire Wall up: 3, Duration: 15 sec, Attacks per wall: 9,
[Lv 8]: Max Fire Wall up: 3, Duration: 15 sec, Attacks per wall: 10,
[Lv 9]: Max Fire Wall up: 3, Duration: 15 sec, Attacks per wall: 11,
[Lv 10]: Max Fire Wall up: 4, Duration: 20 sec, Attacks per wall: 12`,
    img: fireWall,
  },
  {
    id: "coldBolt",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "frostDiver" }, 
      { id: "frostWeapon" },
    ],
    element: null,
    skillName: "Cold Bolt",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: None
Description: Summons bolts of frigid ice to strike at an enemy which inflicts 100% MATK Water elemental magic damage per Hit.
[Lv 1]: 1 Hit, 12 SP Consumption,
[Lv 2]: 2 Hits, 14 SP Consumption,
[Lv 3]: 3 Hits, 16 SP Consumption,
[Lv 4]: 4 Hits, 18 SP Consumption,
[Lv 5]: 5 Hits, 20 SP Consumption,
[Lv 6]: 6 Hits, 22 SP Consumption,
[Lv 7]: 7 Hits, 24 SP Consumption,
[Lv 8]: 8 Hits, 26 SP Consumption,
[Lv 9]: 9 Hits, 28 SP Consumption,
[Lv 10]: 10 Hits, 30 SP Consumption`,
    img: coldBolt,
  },
  {
    id: "frostDiver",
    level: 0,
    dependencies: [
      { id: "coldBolt", minLevel: 4 },
    ],
    dependent: [
      { id: "iceWall" }, 
      { id: "waterBall" }, 
    ],
    element: null,
    skillName: "Frost Diver",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Cold Bolt Lv: 4
Description: Inflicts Water Property Magic Damage with a chance to leave the target Freezing. Freezing lasts for 5 seconds. When it ends naturally, the inflicted target becomes Frozen. If the target is already Frozen, the skill will fail but still consume SP.
[Lv 1]: MAtk 110%, Chance of Freezing: 38%,
[Lv 2]: MAtk 120%, Chance of Freezing: 41%,
[Lv 3]: MAtk 130%, Chance of Freezing: 44%,
[Lv 4]: MAtk 140%, Chance of Freezing: 47%,
[Lv 5]: MAtk 150%, Chance of Freezing: 50%,
[Lv 6]: MAtk 160%, Chance of Freezing: 53%,
[Lv 7]: MAtk 170%, Chance of Freezing: 56%,
[Lv 8]: MAtk 180%, Chance of Freezing: 59%,
[Lv 9]: MAtk 190%, Chance of Freezing: 62%,
[Lv 10]: MAtk 200%, Chance of Freezing: 65%`,
    img: frostDiver,
  },
  {
    id: "iceWall",
    level: 0,
    dependencies: [       
      { id: "frostDiver", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Ice Wall",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Frost Diver Lv: 5
Description: Conjures a solid wall of ice in a 1x5 cell area, blocking enemies but susceptible to destruction by attacks. The walls HP and number of walls that can be created increase with skill level, and the wall will vanish once its HP reaches zero.
[Lv 1]: Max Walls: 1, Duration: 5 sec, Wall HP: 400,
[Lv 2]: Max Walls: 1, Duration: 5 sec, Wall HP: 600,
[Lv 3]: Max Walls: 1, Duration: 5 sec, Wall HP: 800,
[Lv 4]: Max Walls: 2, Duration: 10 sec, Wall HP: 1000,
[Lv 5]: Max Walls: 2, Duration: 10 sec, Wall HP: 1200,
[Lv 6]: Max Walls: 2, Duration: 10 sec, Wall HP: 1400,
[Lv 7]: Max Walls: 3, Duration: 15 sec, Wall HP: 1600,
[Lv 8]: Max Walls: 3, Duration: 15 sec, Wall HP: 1800,
[Lv 9]: Max Walls: 3, Duration: 15 sec, Wall HP: 2000,
[Lv 10]: Max Walls: 4, Duration: 20 sec, Wall HP: 2200`,
    img: iceWall,
  },
  {
    id: "lightningBolt",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "thunderstorm" }, 
      { id: "lightningWeapon" },
    ],
    element: null,
    skillName: "Lightning Bolt",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: None
Description: Drops lightning on target inflicting 100% MATK Wind elemental magic damage per Hit.
[Lv 1]: 1 Hit, SP Consumption: 12,
[Lv 2]: 2 Hits, SP Consumption: 14,
[Lv 3]: 3 Hits, SP Consumption: 16,
[Lv 4]: 4 Hits, SP Consumption: 18,
[Lv 5]: 5 Hits, SP Consumption: 20,
[Lv 6]: 6 Hits, SP Consumption: 22,
[Lv 7]: 7 Hits, SP Consumption: 24,
[Lv 8]: 8 Hits, SP Consumption: 26,
[Lv 9]: 9 Hits, SP Consumption: 28,
[Lv 10]: 10 Hits, SP Consumption: 30`,
    img: lightningBolt,
  },
  {
    id: "thunderstorm",
    level: 0,
    dependencies: [
      { id: "lightningBolt", minLevel: 4 }
    ],
    dependent: [
      { id: "jupitelThunder" }, 
    ],
    element: null,
    skillName: "Thunderstorm",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Lightning Bolt Lv: 4
Description: Summons a lightning bolt to strike a specific location, dealing Wind elemental magic damage to all enemies within a 5x5 cells area.
[Lv 1]: MAtk 100% 2 Hits, SP Cost: 24,
[Lv 2]: MAtk 200% 2 Hits, SP Cost: 28,
[Lv 3]: MAtk 300% 4 Hits, SP Cost: 32,
[Lv 4]: MAtk 400% 4 Hits, SP Cost: 36,
[Lv 5]: MAtk 500% 6 Hits, SP Cost: 40,
[Lv 6]: MAtk 600% 6 Hits, SP Cost: 44,
[Lv 7]: MAtk 700% 8 Hits, SP Cost: 48,
[Lv 8]: MAtk 800% 8 Hits, SP Cost: 52,
[Lv 9]: MAtk 900% 10 Hits, SP Cost: 56,
[Lv 10]: MAtk 1000% 10 Hits, SP Cost: 60`,
    img: thunderstorm,
  },
  {
    id: "earthSpike",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "stoneCurse" }, 
      { id: "seismicWeapon" },
    ],
    element: null,
    skillName: "Earth Spike",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: None
Description: Summons spikes from the ground beneath a single target, each dealing 100% Earth property magic damage.
[Lv 1]: 1 Hit, SP Cost: 12,
[Lv 2]: 2 Hits, SP Cost: 14,
[Lv 3]: 3 Hits, SP Cost: 16,
[Lv 4]: 4 Hits, SP Cost: 18,
[Lv 5]: 5 Hits, SP Cost: 20,
[Lv 6]: 6 Hits, SP Cost: 22,
[Lv 7]: 7 Hits, SP Cost: 24,
[Lv 8]: 8 Hits, SP Cost: 26,
[Lv 9]: 9 Hits, SP Cost: 28,
[Lv 10]: 10 Hits, SP Cost: 30`,
    img: earthSpike,
  },
  {
    id: "stoneCurse",
    level: 0,
    dependencies: [
      { id: "earthSpike", minLevel: 4 },
    ],
    dependent: [
      { id: "heavensDrive" },
    ],
    element: null,
    skillName: "Stone Curse",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 2
Requirement: Earth Spike Lv: 4
Description: Attempts to Petrifying a single target. If used on an already petrified target, the skill will fail. Catalyst: 1x Red Gemstone.
[Lv 1]: Consumption: Per Use, Petrifying Chance: 24%,
[Lv 2]: Consumption: Per Use, Petrifying Chance: 28%,
[Lv 3]: Consumption: Per Use, Petrifying Chance: 32%,
[Lv 4]: Consumption: Per Use, Petrifying Chance: 36%,
[Lv 5]: Consumption: Per Use, Petrifying Chance: 40%,
[Lv 6]: Consumption: On Success, Petrifying Chance: 44%,
[Lv 7]: Consumption: On Success, Petrifying Chance: 48%,
[Lv 8]: Consumption: On Success, Petrifying Chance: 52%,
[Lv 9]: Consumption: On Success, Petrifying Chance: 56%,
[Lv 10]: Consumption: On Success, Petrifying Chance: 60%`,
    img: stoneCurse,
  },
  {
    id: "soulStrike",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "napalmBeat" }, 
      { id: "safetyWall" },
      { id: "soulDrain" },
    ],
    element: null,
    skillName: "Soul Strike",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: None
Description: Summon the Ancient Holy Spirit to deliver direct attacks, inflicting Ghost property magic damage.
[Lv 1]: 100% Magic Attack / 1 Hit, SP Cost: 12,
[Lv 2]: 200% Magic Attack / 1 Hit, SP Cost: 14,
[Lv 3]: 300% Magic Attack / 2 Hits, SP Cost: 16,
[Lv 4]: 400% Magic Attack / 2 Hits, SP Cost: 18,
[Lv 5]: 500% Magic Attack / 3 Hits, SP Cost: 20,
[Lv 6]: 600% Magic Attack / 3 Hits, SP Cost: 22,
[Lv 7]: 700% Magic Attack / 4 Hits, SP Cost: 24,
[Lv 8]: 800% Magic Attack / 4 Hits, SP Cost: 26,
[Lv 9]: 900% Magic Attack / 5 Hits, SP Cost: 28,
[Lv 10]: 1000% Magic Attack / 5 Hits, SP Cost: 30`,
    img: soulStrike,
  },
  {
    id: "napalmBeat",
    level: 0,
    dependencies: [
      { id: "soulStrike", minLevel: 4 },
    ],
    dependent: [
      { id: "safetyWall" },
      { id: "napalmVulcan" },
    ],
    element: null,
    skillName: "Napalm Beat",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Requirement: Soul Strike Lv: 4
Description: Unleashes a surge of psychokinetic energy, striking a target with Ghost property magic damage and affecting all enemies within a 5x5 cells area. This skill deals extra damage to [Undead Race] or [Corrupt Property] entities. 
[Lv 1] : MAtk 120%, Additional Damage: +10%, SP Cost: 9, 
[Lv 2] : MAtk 140%, Additional Damage: +20%, SP Cost: 9, 
[Lv 3] : MAtk 160%, Additional Damage: +30%, SP Cost: 9, 
[Lv 4] : MAtk 180%, Additional Damage: +40%, SP Cost: 12, 
[Lv 5] : MAtk 200%, Additional Damage: +50%, SP Cost: 12, 
[Lv 6] : MAtk 220%, Additional Damage: +60%, SP Cost: 12, 
[Lv 7] : MAtk 240%, Additional Damage: +70%, SP Cost: 15, 
[Lv 8] : MAtk 260%, Additional Damage: +80%, SP Cost: 15, 
[Lv 9] : MAtk 280%, Additional Damage: +90%, SP Cost: 15, 
[Lv10] : MAtk 300%, Additional Damage: +100%, SP Cost: 18`,
    img: napalmBeat,
  },
  {
    id: "safetyWall",
    level: 0,
    dependencies: [
      { id: "napalmBeat", minLevel: 5 },
    ],
    element: null,
    skillName: "Safety Wall",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Napalm Beat Lv: 5, Soul Strike Lv: 7
Description: Constructs a protective barrier at a targeted location that blocks all close-range physical damage until its durability is depleted or the skill expires. The walls durability and effectiveness are influenced by your INT, Base Level, and MaxSP. Only the initial impact is prevented beyond the total durability. A maximum of 4 Safety Walls can be active at once. Catalyst: 1x Blue Gemstone.
[Lv 1]: Durability: 300, Blocks Damage 2 times,
[Lv 2]: Durability: 600, Blocks Damage 3 times,
[Lv 3]: Durability: 900, Blocks Damage 4 times,
[Lv 4]: Durability: 1200, Blocks Damage 5 times,
[Lv 5]: Durability: 1500, Blocks Damage 6 times,
[Lv 6]: Durability: 1800, Blocks Damage 7 times,
[Lv 7]: Durability: 2100, Blocks Damage 8 times,
[Lv 8]: Durability: 2400, Blocks Damage 9 times,
[Lv 9]: Durability: 2700, Blocks Damage 10 times,
[Lv 10]: Durability: 3000, Blocks Damage 11 times`,
    img: safetyWall,
  },
  {
    id: "increaseSPRecovery",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "indulge" },
      { id: "mindBreaker" },
      { id: "soulDrain" },
    ],
    element: null,
    skillName: "Increase SP Recovery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: None
Description: Increases the amount of SP recovered through your natural SP regeneration. Increases SP Potions healing in 3% per Skill Level.
[Lv 1]: SP Recovery +[3 + 0.1% of MaxSP],
[Lv 2]: SP Recovery +[6 + 0.2% of MaxSP],
[Lv 3]: SP Recovery +[9 + 0.3% of MaxSP],
[Lv 4]: SP Recovery +[12 + 0.4% of MaxSP],
[Lv 5]: SP Recovery +[15 + 0.5% of MaxSP],
[Lv 6]: SP Recovery +[18 + 0.6% of MaxSP],
[Lv 7]: SP Recovery +[21 + 0.7% of MaxSP],
[Lv 8]: SP Recovery +[24 + 0.8% of MaxSP],
[Lv 9]: SP Recovery +[27 + 0.9% of MaxSP],
[Lv 10]: SP Recovery +[30 + 1% of MaxSP]`,
    img: increaseSPRecovery,
  },
  {
    id: "sight",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Sight",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Summons a fireball that reveals hidden characters within a 7x7 area around the caster. This skill can only be learned at level 1; higher levels are unlocked through items.
[Lv 1]: Duration: 10 Seconds,
[Lv 2]: Duration: 20 Seconds,
[Lv 3]: Duration: 30 Seconds,
[Lv 4]: Duration: 40 Seconds,
[Lv 5]: Duration: 50 Seconds`,
    img: sight,
  },
];


/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
