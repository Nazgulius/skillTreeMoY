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
Description: Deals M.DMG to enemies within a 7x7 AoE around the target. Enemies on the edge take half damage.
Consumes nearby Fire Wall cells or the Volcano cell beneath the user to launch up to 9 additional Fire Balls at the same target. The damage from additional Fire Balls is split across all enemies hit.
[Lv 1]: MATK 120%,
[Lv 2]: MATK 140%,
[Lv 3]: MATK 160%,
[Lv 4]: MATK 180%,
[Lv 5]: MATK 200%,
[Lv 6]: MATK 220%,
[Lv 7]: MATK 240%,
[Lv 8]: MATK 260%,
[Lv 9]: MATK 280%,
[Lv 10]: MATK 300%
Formula: MATK (%): 100 + (Skill Lv x 20)`,
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
Element: Fire
Cooldown: 0.20s 
Range: 9
SP Cost: 20
Requirement: Fire Ball Lv: 5
Description: Creates a 3x1 AoE wall at the targeted location, dealing M.DMG and Knocking enemies back 2 cells until it expires or its hit limit is reached.
Cannot knock Undead and Corrupt enemies. Older instances are removed to create new ones when reaching the instance limit.
[Lv. 1]: VCT: 2.00s. Max Instances: 1 Hits: 3. Duration: 55
[Lv. 2]: VCT: 1.80s. Max Instances: 1 Hits: 4. Duration: 55
[Lv. 3]: VCT: 1.60s. Max Instances: 1 Hits: 5. Duration: 5s
[Lv. 4]: VCT: 1.40s. Max Instances: 2 Hits: 6. Duration: 10s
[Lv. 5]: VCT: 1.20s. Max Instances: 2 Hits: 7. Duration: 10s
[Lv. 6]: VCT: 1.10s. Max Instances: 2 Hits: 8. Duration: 10s
[Lv. 7]: VCT: 1.00s. Max Instances: 3 Hits: 9. Duration: 15s
[Lv. 8]: VCT: 0.90s. Max Instances: 3 Hits: 10. Duration: 15s
[Lv. 9]: VCT: 0.80s. Max Instances: 3 Hits: 11. Duration: 15s
[Lv.10]: VCT: 0.70s. Max Instances: 4 Hits: 12. Duration: 20s
Formula: MATK (%): 50 `,
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
Element: Water
After Cast Delay: 1.40s 
Range: 9
Requirement: None
Description: Deals M.DMG to the target, scaling with Base Level when manually cast.
VCT and FCT scale with skill level.
[Lv. 1]: VCT: 0.50s. FCT: 0.30s Hits: 1. SP Cost: 12
[Lv. 2]: VCT: 0.65s. FCT: 0.35s Hits: 2. SP Cost: 14
[Lv. 3]: VCT: 0.80s. FCT: 0.40s Hits: 3. SP Cost: 16
[Lv. 4]: VCT: 0.95s. FCT: 0.45s Hits: 4. SP Cost: 18
[Lv. 5]: VCT: 1.25s. FCT: 0.55s Hits: 5. SP Cost: 20
[Lv. 6]: VCT: 1.55s. FCT: 0.65s Hits: 6. SP Cost: 22
[Lv. 7]: VCT: 1.85s. FCT: 0.75s Hits: 7. SP Cost: 24
[Lv. 8]: VCT: 2.30s. FCT: 0.90s Hits: 8. SP Cost: 26
[Lv. 9]: VCT: 2.75s. FCT: 1.05s Hits: 9. SP Cost: 28
[Lv.10]: VCT: 3.20s. FCT: 1.20s Hits: 10. SP Cost: 30
Formula: MATK (%) (100+ Manually Cast Bonus) x. Hits Manually Cast Bonus: (100 x Base Lv^2) % 10000`,
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
Element: Water
Variable Cast Time: 1.20s 
Cooldown: 0.30s
Range: 9
Requirement: Cold Bolt Lv: 4
Description: Deals M.DMG to the target. Has a chance to inflict Freezing for 3s. Inflicts Freeze on the target once the Freezing effect ends.
If the target is already frozen, the skill fails but still consumes SP.
[Lv. 1]: MATK 110%, Chance: 38% Freeze Duration: 3s
[Lv. 2]: MATK 120%, Chance: 41% Freeze Duration: 6s
[Lv. 3]: MATK 130%, Chance: 44% Freeze Duration: 9s
[Lv. 4]: MATK 140%, Chance: 47% Freeze Duration: 12s
[Lv. 5]: MATK 150%, Chance: 50% Freeze Duration: 15s
[Lv. 6]: MATK 160%, Chance: 53% Freeze Duration: 18s
[Lv. 7]: MATK 170%, Chance: 56% Freeze Duration: 21s
[Lv. 8]: MATK 180%, Chance: 59% Freeze Duration: 24s
[Lv. 9]: MATK 190%, Chance: 62% Freeze Duration: 27s
[Lv.10]: MATK 200%, Chance: 65% Freeze Duration: 30s
Formula: MATK (%); 100 + (Skill Lv x 10)`,
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
Cooldown: 0.20s 
Range: 9
SP Cost: 20
Requirement: Frost Diver Lv: 5
Description: Creates a 5x1 AoE wall at the targeted location, blocking the path until its durability runs out or it expires.
The durability decreases by 50 every second and can receive DMG.
Older instances are removed to create new ones when reaching the instance limit.
[Lv. 1]: VCT: 2.00s. Max Instances: 1 Durability: 400. Duration: 5s
[Lv. 2]: VCT: 1.80s. Max Instances: 1 Durability: 600. Duration: 5s
[Lv 3]: Max Walls: 1, Duration: 5 sec, Wall HP: 800,
[Lv 4]: Max Walls: 2, Duration: 10 sec, Wall HP: 1000,
[Lv 5]: Max Walls: 2, Duration: 10 sec, Wall HP: 1200,
[Lv 6]: Max Walls: 2, Duration: 10 sec, Wall HP: 1400,
[Lv 7]: Max Walls: 3, Duration: 15 sec, Wall HP: 1600,
[Lv 8]: Max Walls: 3, Duration: 15 sec, Wall HP: 1800,
[Lv 9]: Max Walls: 3, Duration: 15 sec, Wall HP: 2000,
[Lv 10]: Max Walls: 4, Duration: 20 sec, Wall HP: 2200
Durability: 200+ (Skill Lv x 200)`,
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
Element: Wind
After Cast Delay: 1.40s
Range: 9
Requirement: None
Description: Deals M.DMG to the target, scaling with Base Level when manually cast.
VCT and FCT scale with skill level.
[Lv. 1]: VCT: 0.50s. FCT: 0.30s Hits: 1. SP Cost: 12
[Lv. 2]: VCT: 0.65s. FCT: 0.35s Hits: 2. SP Cost: 14
[Lv. 3]: VCT: 0.80s. FCT: 0.40s Hits: 3. SP Cost: 16
[Lv. 4]: VCT: 0.95s. FCT: 0.45s Hits: 4. SP Cost: 18
[Lv. 5]: VCT: 1.25s. FCT: 0.55s Hits: 5. SP Cost: 20
[Lv. 6]: VCT: 1.55s. FCT: 0.65s Hits: 6. SP Cost: 22
[Lv. 7]: VCT: 1.85s. FCT: 0.75s Hits: 7. SP Cost: 24
[Lv. 8]: VCT: 2.30s. FCT: 0.90s Hits: 8. SP Cost: 26
[Lv. 9]: VCT: 2.75s. FCT: 1.05s Hits: 9. SP Cost: 28
[Lv.10]: VCT: 3.20s. FCT: 1.20s Hits: 10. SP Cost: 30
Formula: MATK (%); (100+ Manually Cast Bonus) x. Hits Manually Cast Bonus: (100 x Base Lv^2) = 10000`,
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
Eelement: Wind
Variable Cast Time: 1.20s
After Cast Delay: 0.50s 
Cooldown: 1s
Range: 9 
Hits: 3
SP Cost: 25
Requirement: Lightning Bolt Lv: 4
Description: Deals M.DMG to enemies within a 5x5 AoE around the targeted location. Consumes the Whirlwind cell beneath the user to launch up to 9 additional Thunder Storm at the same location.
The damage from additional Thunder Storm is split across all enemies hit.
[Lv. 1]: MATK 120%
[Lv. 2]: MATK 140%
[Lv. 3]: MATK 160%
[Lv. 4]: MATK 180%
[Lv. 5]: MATK 200%
[Lv. 6]: MATK 220%
[Lv. 7]: MATK 240%
[Lv. 8]: MATK 260% 
[Lv. 9]: MATK 280% 
[Lv.10]: MATK 300%
Formula: MATK (%); 100+ (Skill Lv x. 20) `,
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
Element: Earth
After Cast Delay: 1.40s
Range: 9
Requirement: None
Description: Deals M.DMG to the target, scaling with Base Level when manually cast. VCT and FCT scale with skill level.
[Lv. 1]: VCT: 0.50s. FCT: 0.30s Hits: 1. SP Cost: 12
[Lv. 2]: VCT: 0.65s. FCT: 0.35s Hits: 2. SP Cost: 14
[Lv. 3]: VCT: 0.80s. FCT: 0.40s Hits: 3. SP Cost: 16
[Lv. 4]: VCT: 0.95s. FCT: 0.45s Hits: 4. SP Cost: 18
[Lv. 5]: VCT: 1.25s. FCT: 0.55s Hits: 5. SP Cost: 20
[Lv. 6]: VCT: 1.55s. FCT: 0.65s Hits: 6. SP Cost: 22
[Lv. 7]: VCT: 1.85s. FCT: 0.75s Hits: 7. SP Cost: 24
[Lv. 8]: VCT: 2.30s. FCT: 0.90s Hits: 8. SP Cost: 26
[Lv. 9]: VCT: 2.75s. FCT: 1.05s Hits: 9. SP Cost: 28
[Lv.10]: VCT: 3.20s. FCT: 1.20s Hits: 10. SP Cost: 30
Formula: MATK (%); (100 + Manually Cast Bonus) x Hits Manually Cast Bonus: (100 x Base Lv^2) = 10000`,
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
Variable Cast Time: 1s Cooldown: 0.50s 
Range: 2
Requirement: Earth Spike Lv: 4
Variable Cast Time: 1s Cooldown: 0.50s Range: 2
Description: Attempts to inflict Petrifying to the target for 3s. Inflicts Petrify on the target for 17s once the Petrifying effect ends.
If the target is already petrifying or petrified, the skill fails but still consumes SP. When cast from skill level 5 or higher, consumes the Catalyst in a successful attempt only.
Catalyst: 1x Red Gemstone
[Lv. 1]: Petrifying Chance: 24%, SP Cost: 25 
[Lv. 2]: Petrifying Chance: 28%, SP Cost: 24 
[Lv. 3]: Petrifying Chance: 32%, SP Cost: 23 
[Lv. 4]: Petrifying Chance: 36%, SP Cost: 22 
[Lv. 5]: Petrifying Chance: 40%, SP Cost: 21 
[Lv. 6]: Petrifying Chance: 44%, SP Cost: 20 
[Lv. 7]: Petrifying Chance: 48%, SP Cost: 19 
[Lv. 8]: Petrifying Chance: 52%, SP Cost: 18 
[Lv. 9]: Petrifying Chance: 56%, SP Cost: 17 
[Lv.10]: Petrifying Chance: 60%, SP Cost: 16`,
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
