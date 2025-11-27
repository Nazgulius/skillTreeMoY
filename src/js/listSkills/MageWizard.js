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
// import electricalInduction from '../../img/icon_wiz/icon_wiz_electricalinduction.png';
import gemmancy from '../../img/icon_wiz/icon_wiz_gemmancy.png';
import violentQuake from '../../img/icon_wiz/icon_wiz_violentquake.png';
import electricalInduction from '../../img/icon_wiz/icon_wiz_17.png';

// skills Wizard

export const skillsWizard = [   
  { 
    id: "staffMastery",
    level: 0,
    dependencies: [],
    dependent: [
    ],
    element: null,
    skillName: "Staff Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Weapon: Staff
Requirement: None
Description: Increases Extra Magical Attack while wielding a Staff. At max level, also grants -6% Cooldown.
When the skill is maxed: Cooldown -6%
[Lv. 1]: One-Handed Staff: E.MATK +3, Tho-Handed Staff: E.MATK +4
[Lv. 2]: One-Handed Staff: E.MATK +6, Tho-Handed Staff: E.MATK +8
[Lv. 3]: One-Handed Staff: E.MATK +9, Tho-Handed Staff: E.MATK +12
[Lv. 4]: One-Handed Staff: E.MATK +12, Tho-Handed Staff: E.MATK +16
[Lv. 5]: One-Handed Staff: E.MATK +15 Tho-Handed Staff: E.MATK +20
[Lv. 6]: One-Handed Staff: E.MATK +18, Tho-Handed Staff: E.MATK +24
[Lv. 7]: One-Handed Staff: E.MATK +21, Tho-Handed Staff: E.MATK +28
[Lv. 8]: One-Handed Staff: E.MATK +24, Tho-Handed Staff: E.MATK +32
[Lv. 9]: One-Handed Staff: E.MATK +27, Tho-Handed Staff: E.MATK +36
[Lv.10]: One-Handed Staff: E.MATK +30, Tho-Handed Staff: E.MATK +40`,
    img: skillImgNo,
  },
  { 
    id: "sightrasher",
    level: 0,
    dependencies: [
      { id: "fireBolt", minLevel: 4 }, 
      { id: "fireBall", minLevel: 3 },
    ],
    dependent: [
      { id: "firePillar" },
    ],
    element: null,
    skillName: "Sightrasher",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Element: Fire
Variable Cast Time: 0.30s
Fixed Cast Time: 0.10s 
After Cast Delay: 2s
Hits: 1
Requirement: Fire Bolt Lv: 4, Fire Ball Lv: 3
Description: Deals M.DMG to enemies within a 15x15 AoE, Knocking them back 5 cells. Double the damage against Invisible enemies. Consumes Sight if active.
[Lv. 1]: MATK 100%, SP Cost: 40 
[Lv. 2]: MATK 200%, SP Cost: 47
[Lv. 3]: MATK 300%, SP Cost: 54 
[Lv. 4]: MATK 400%, SP Cost: 61 
[Lv. 5]: MATK 500%, SP Cost: 68
Formula: MATK (%); (Skill Lv x 100) `,
    img: sightrasher,
  },
  {
    id: "firePillar",
    level: 0,
    dependencies: [
      { id: "sightrasher", minLevel: 2 },
    ],
    dependent: [
      { id: "meteorStorm" },
    ],
    element: null,
    skillName: "Fire Pillar",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Element: Fire
Variable Cast Time: 0.85s
Fixed Cast Time: 0.15s
After Cast Delay: 0.30s 
Cooldown: 0.30s
Max Instances: 5 
Range: 9
Requirement: Sightrasher Lv: 2
Description: Creates a temporary pillar that deals Magical Damage to enemies within a Area of Effect when triggered. When cast on a cell occupied by monsters, the Area of Effect becomes 3x3 and deals 6 hits.
When cast on an unoccupied cell, the Area of Effect becomes 5x5, deals 12 hits.
[Lv. 1]: MATK 200%, SP Cost: 14 Duration: 10s
[Lv. 2]: MATK 300%, SP Cost: 18 Duration: 15s
[Lv. 3]: MATK 400%, SP Cost: 22 Duration: 20s
[Lv. 4]: MATK 500%, SP Cost: 26 Duration: 25s
[Lv. 5]: MATK 600%, SP Cost: 30 Duration: 30s
Formula: MATK (%) 100 + (Skill Lv x 100)`,
    img: firePillar,
  },
  {
    id: "meteorStorm",
    level: 0,
    dependencies: [
      { id: "firePillar", minLevel: 3 },
    ],
    dependent: [
    ],
    element: null,
    skillName: "Meteor Storm",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Element: Fire
After Cast Delay: 1s 
Cooldown: 65 
Range: 9
Requirement: Fire Pillar Lv: 3
Description: Creates a 7x7 AoE at the targeted location that deals M.DMG to enemies within a random 7x7 AoE every 0.45s for 4.5s.
Has a chance to inflict Burning for 100s. VCT and FCT scale with skill level.
[Lv. 1]: MATK 160%, VCT: 2.40s. FCT: 0.3s Duration: 4.7s. Damage Interval: 0.47s. SP Cost: 36. Passive Bonus: 6%
[Lv. 2]: MATK 220%, VCT: 2.80s. FCT: 0.4s Duration: 4.4s. Damage Interval: 0.44s. SP Cost: 42. Passive Bonus: 7%
[Lv. 3]: MATK 280%, VCT: 3.20s. FCT: 0.5s Duration: 4.1s. Damage Interval: 0.41s. SP Cost: 48. Passive Bonus: 8%
[Lv. 4]: MATK 340%, VCT: 3.60s. FCT: 0.6s Duration: 3.8s. Damage Interval: 0.38s. SP Cost: 54. Passive Bonus: 9%
[Lv. 5]: MATK 400%, VCT: 4.00s. FCT: 0.75 Duration: 3.5s. Damage Interval: 0.35s. SP Cost: 60. Passive Bonus: 10%
[Lv. 6]: MATK 460%, VCT: 4.40s. FCT: 0.8s Duration: 3.2s. Damage Interval: 0.32s. SP Cost: 66. Passive Bonus: 11%
[Lv. 7]: MATK 520%, VCT: 4.80s. FCT: 0.9s Duration: 2.9s. Damage Interval: 0.29s. SP Cost: 72. Passive Bonus: 12%
[Lv. 8]: MATK 580%, VCT: 5.20s. FCT: 1.0s Duration: 2.6s. Damage Interval: 0.26s. SP Cost: 78. Passive Bonus: 13%
[Lv. 9]: MATK 640%, VCT: 5.60s. FCT: 1.1s Duration: 2.3s. Damage Interval: 0.235. SP Cost: 84. Passive Bonus: 14%
[Lv.10]: MATK 700%, VCT: 6.00s. FCT: 1.2s Duration: 2.0s. Damage Interval: 0.20s. SP Cost: 90. Passive Bonus: 15%
Formula: MATK per Tick (%): 100 + (60 x Skill Lv) `,
    img: meteorStorm,
  },
  
  {
    id: "waterBall",
    level: 0,
    dependencies: [
      { id: "frostDiver", minLevel: 3 }, 
    ],
    dependent: [
      { id: "frostNova" },
    ],
    element: null,
    skillName: "Water Ball",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Element: Water
Variable Cast Time: 1.20s
After Cast Delay: 0.50s 
Cooldown: 1s
Range: 9
Hits: 1
SP Cost: 25
Requirement: Frost Diver Lv: 3
Description: Deals M.DMG to enemies within a 7x7 AoE around the target. Enemies on the edge take half damage.
Inflicts Wet for 10s, and each hit increases its stack by 1.
Consumes nearby Ice Wall cells or the Deluge cell beneath the user to launch up to 9 additional Water Balls at the same target. The damage from additional Water Balls is split across all enemies hit.
[Lv. 1]: MATK 140%
[Lv. 2]: MATK 180%
[Lv. 3]: MATK 220%
[Lv. 4]: MATK 260% 
[Lv. 5]: MATK 300%
Formula: MATK (%): 100 + (Skill Lv x 40) `,
    img: waterBall,
  },
  {
    id: "frostNova",
    level: 0,
    dependencies: [
      { id: "waterBall", minLevel: 2 }, 
    ],
    dependent: [
      { id: "stormGust" },
    ],
    element: null,
    skillName: "Frost Nova",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Element: Water
Variable Cast Time: 0.85s
Fixed Cast Time: 0.15s
After Cast Delay: 0.30s 
Cooldown: 0.30s
Hits: 1
Requirement: Water Ball Lv: 2
Description: Deals Magical Damage to enemies within a 11x11 Area of Effect. Has a chance to inflict Freezing for 5s. Inflicts Freeze for 10 seconds on the target once the Freezing effect ends.
[Lv. 1]: MATK 200%, Chance: 40%, SP Cost: 14
[Lv. 2]: MATK 300%, Chance: 50%, SP Cost: 18
[Lv. 3]: MATK 400%, Chance: 60%, SP Cost: 22
[Lv. 4]: MATK 500%, Chance: 70%, SP Cost: 26
[Lv. 5]: MATK 600%, Chance: 80%, SP Cost: 30
Formula: MATK (%): 100 + (100 x Skill Lv) `,
    img: frostNova,
  },
  {
    id: "stormGust",
    level: 0,
    dependencies: [
      { id: "frostNova", minLevel: 3 }, 
    ],
    dependent: [      
    ],
    element: null,
    skillName: "Storm Gust",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Element: Water
After Cast Delay: 1s 
Cooldown: 3s 
Range: 9 
Hits: 1
Requirement: Frost Nova Lv: 3
Description: Frost Nova Lv. 3 Description: Deals Magical Damage to enemies in the 9x9 Area of Effect, Knocking them back 2 cells to a random direction. Has a 15% chance to inflict Freezing for 5s. Inflicts Freeze on the target for 20s once the Freezing effect ends.
Instantly freezes enemies hit 3 times. Does not hit frozen enemies.
While learned, passively increases Magical Damage against enemies under Freezing or Freeze. This passive bonus is doubled when using a Two-Handed Staff.
Variable Cast Time and Fixed Cast Time scale with the skill level.
[Lv. 1]: MATK 160%, VCT: 2.40s. FCT: 0.3s Duration: 4.7s. Damage Interval: 0.47s. SP Cost: 36. Passive Bonus: 6%
[Lv. 2]: MATK 220%, VCT: 2.80s. FCT: 0.4s Duration: 4.4s. Damage Interval: 0.44s. SP Cost: 42. Passive Bonus: 7%
[Lv. 3]: MATK 280%, VCT: 3.20s. FCT: 0.5s Duration: 4.1s. Damage Interval: 0.41s. SP Cost: 48. Passive Bonus: 8%
[Lv. 4]: MATK 340%, VCT: 3.60s. FCT: 0.6s Duration: 3.8s. Damage Interval: 0.38s. SP Cost: 54. Passive Bonus: 9%
[Lv. 5]: MATK 400%, VCT: 4.00s. FCT: 0.75 Duration: 3.5s. Damage Interval: 0.35s. SP Cost: 60. Passive Bonus: 10%
[Lv. 6]: MATK 460%, VCT: 4.40s. FCT: 0.8s Duration: 3.2s. Damage Interval: 0.32s. SP Cost: 66. Passive Bonus: 11%
[Lv. 7]: MATK 520%, VCT: 4.80s. FCT: 0.9s Duration: 2.9s. Damage Interval: 0.29s. SP Cost: 72. Passive Bonus: 12%
[Lv. 8]: MATK 580%, VCT: 5.20s. FCT: 1.0s Duration: 2.6s. Damage Interval: 0.26s. SP Cost: 78. Passive Bonus: 13%
[Lv. 9]: MATK 640%, VCT: 5.60s. FCT: 1.1s Duration: 2.3s. Damage Interval: 0.235. SP Cost: 84. Passive Bonus: 14%
[Lv.10]: MATK 700%, VCT: 6.00s. FCT: 1.2s Duration: 2.0s. Damage Interval: 0.20s. SP Cost: 90. Passive Bonus: 15%
Formula: MATK per Tick (%): 100 + (60 x Skill Lv)`,
    img: stormGust,
  },
  {
    id: "jupitelThunder",
    level: 0,
    dependencies: [
      { id: "thunderstorm", minLevel: 3 }, 
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
Element: Wind
After Cast Delay: 0.14s 
Cooldown: 0.30s 
Range: 9
Requirement: Thunderstorm Lv:3
Description: Deals M.DMG to the target, Knocking it back.
VCT and FCT scale with skill level. 
[Lv. 1]: VCT: 2.00s. FCT: 0.30s. Hits: 2 Knockback: 3. SP Cost: 20
[Lv. 2]: VCT: 2.10s. FCT: 0.35s. Hits: 4 Knockback: 4. SP Cost: 25
[Lv. 3]: VCT: 2.30s. FCT: 0.40s. Hits: 6 Knockback: 5. SP Cost: 30
[Lv. 4]: VCT: 2.60s. FCT: 0.45s. Hits: 8 Knockback: 6. SP Cost: 35
[Lv. 5]: VCT: 3.00s. FCT: 0.50s. Hits: 10 Knockback: 7. SP Cost: 40
Formula: MATK (%); 100 x Hits `,
    img: jupitelThunder,
  },
   {
    id: "electricalInduction",
    level: 0,
    dependencies: [
      { id: "jupitelThunder", minLevel: 2 }, 
    ],
    dependent: [
      { id: "lordOfVermilion" },
    ],
    element: null,
    skillName: "Electrical Induction",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Element: Wind
Variable Cast Time: 0.85s
Fixed Cast Time: 0.15s
After Cast Delay: 0.30s 
Cooldown: 0.30s
Range: 9
Requirement: Jupitel Thunder Lv: 2
Description: Deals Magical Damage to the target, bouncing to a random enemy within a 3x3 Area of Effect after 2 hits. 
The damage increases with each bounce, and the bounce interval scales with Attack Motion. 
[Lv. 1]: MATK 110%, SP Cost: 14 
[Lv. 2]: MATK 120%, SP Cost: 18
[Lv. 3]: MATK 130%, SP Cost: 22 
[Lv. 4]: MATK 140%, SP Cost: 26 
[Lv. 5]: MATK 150%, SP Cost: 30
Formula: MATK (%): 100 + (Skill Lv x 10) + (Jumps x 10) 
Interval (seconds): (A.Motion - (Jumps x 20)) / 1000 `,
    img: electricalInduction,
  },
  {
    id: "lordOfVermilion",
    level: 0,
    dependencies: [
      { id: "electricalInduction", minLevel: 3 }, 
    ],
    dependent: [      
    ],
    element: null,
    skillName: "Lord of Vermilion",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Element: Wind
After Cast Delay: 1s
Cooldown: 3s
Range: 9 
Hits: 3
Requirement: Electrical Induction Lv: 3
Description: Deals Magical Damage to enemies in the 9x9 Area of Effect. Has a 15% chance to inflict Blind. 
While learned, passively increases Magical Damage against enemies under Blind. 
This passive bonus is doubled when using a Two-Handed Staff.
Variable Cast Time and Fixed Cast Time scale with the skill level.
[Lv. 1]: MATK 160%, VCT: 2.40s. FCT: 0.3s Duration: 4.7s. Damage Interval: 0.47s. SP Cost: 36. Passive Bonus: 6%
[Lv. 2]: MATK 220%, VCT: 2.80s, FCT: 0.4s Duration: 4.4s. Damage Interval: 0.44s. SP Cost: 42. Passive Bonus: 7%
[Lv. 3]: MATK 280%, VCT: 3.20s, FCT: 0.5s Duration: 4.1s. Damage Interval: 0.41s. SP Cost: 48. Passive Bonus: 8%
[Lv. 4]: MATK 340%, VCT: 3.60s, FCT: 0.6s Duration: 3.8s. Damage Interval: 0.38s. SP Cost: 54. Passive Bonus: 9%
[Lv. 5]: MATK 400%, VCT: 4.00s. FCT: 0.7s Duration: 3.5s. Damage Interval: 0.35s. SP Cost: 60. Passive Bonus: 10%
[Lv. 6]: MATK 460%, VCT: 4.40s. FCT: 0.8s Duration: 3.2s. Damage Interval: 0.32s. SP Cost: 66. Passive Bonus: 11%
[Lv. 7]: MATK 520%, VCT: 4.80s, FCT: 0.9s Duration: 2.9s. Damage Interval: 0.29s. SP Cost: 72. Passive Bonus: 12%
[Lv. 8]: MATK 580%, VCT: 5.20s, FCT: 1.0s Duration: 2.6s. Damage Interval: 0.26s. SP Cost: 78. Passive Bonus: 13%
[Lv. 9]: MATK 640%, VCT: 5.60s. FCT: 1.1s Duration: 2.3s. Damage Interval: 0.235. SP Cost: 84. Passive Bonus: 14%
[Lv.10]: MATK 700%, VCT: 6.00s. FCT: 1.2s Duration: 2.0s. Damage Interval: 0.20s. SP Cost: 90. Passive Bonus: 15%
Formula: MATK per Tick(%): 100 + (60 x Skill Lv)`,
    img: lordOfVermilion,
  },
 
  {
    id: "heavensDrive",
    level: 0,
    dependencies: [
      { id: "stoneCurse", minLevel: 3 },
    ],
    dependent: [
      { id: "violentQuake" },
    ],
    element: null,
    skillName: "Heaven's Drive ",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Element: Earth
After Cast Delay: 1s 
Range: 9 
Hits: 2
Requirement: Stone Curse Lv: 3
Description: Deals M.DMG to enemies within a 5x10 AoE at the targeted location, Knocking them back 2 cells.
The cast direction determines the skill's path, starting 1 cell away from the caster.
The skill moves 1 cell further every 0.3s, up to 5 times, dealing damage and knocking them back again.
VCT and FCT scale with skill level.
[Lv. 1]: MATK 25%, VCT: 0.70s. FCT: 0.10s SP Cost: 24
[Lv. 2]: MATK 50%, VCT: 0.95s. FCT: 0.30s SP Cost: 28
[Lv. 3]: MATK 75%, VCT: 1.20s. FCT: 0.40s SP Cost: 32
[Lv. 4]: MATK 100%, VCT: 1.45s. FCT: 0.60s SP Cost: 36
[Lv. 5]: MATK 125%, VCT: 1.70s. FCT: 0.70s SP Cost: 40
Formula: MATK (%): Skill Lv x 25 `,
    img: heavensDrive,
  },
  {
    id: "quagmire",
    level: 0,
    dependencies: [
      { id: "heavensDrive", minLevel: 2 }, 
    ],
    dependent: [
      { id: "violentQuake" }
    ],
    element: null,
    skillName: "Quagmire",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Ground
Variable Cast Time: 0.15s
Fixed Cast Time: 0.15s
After Cast Delay: 0.30s 
Cooldown: 0.30s
Max Instances: 3 
Range: 9
Requirement: Heaven's Drive Lv: 2
Description: Creates a 5x5 Area of Effect that reduces enemies' Agility and Dexterity, as well as increases their Walk Delay.
Also clears some Status Effects from them. This skill is Replaceable.
[Lv. 1]: WD +40%, AGI/DEX -10% Duration: 10s. SP Cost: 14
[Lv. 2]: WD +50%, AGI/DEX -20% Duration: 15s. SP Cost: 18
[Lv. 3]: WD +60%, AGI/DEX -30% Duration: 20s. SP Cost: 22
[Lv. 4]: WD +70%, AGI/DEX -40% Duration: 25s. SP Cost: 26
[Lv. 5]: WD +80%, AGI/DEX -50% Duration: 30s. SP Cost: 30`,
    img: quagmire,
  },
  {
    id: "violentQuake",
    level: 0,
    dependencies: [
      { id: "quagmire", minLevel: 3 }, 
    ],
    dependent: [      
    ],
    element: null,
    skillName: "Violent Quake",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Element: Earth
After Cast Delay: 1s 
Cooldown: 3s 
Range: 9
Requirement: Quagmire Lv: 3
Description: Creates a 9x9 AoE at the targeted location that deals M.DMG to enemies within a random 9x9 AoE every.
Has a 15% chance to inflict Stun. While learned, passively increases Magical Damage against enemies under Stun. This passive bonus is doubled when using a Two- Handed Staff.
Variable Cast Time and Fixed Cast Time scale with the skill level.
[Lv. 1]: MATK 160%, VCT: 2.40s. FCT: 0.3s Duration: 4.7s. Damage Interval: 0.47s. SP Cost: 36. Passive Bonus: 6%
[Lv. 2]: MATK 220%, VCT: 2.80s, FCT: 0.4s Duration: 4.4s. Damage Interval: 0.44s. SP Cost: 42. Passive Bonus: 7%
[Lv. 3]: MATK 280%, VCT: 3.20s, FCT: 0.5s Duration: 4.1s. Damage Interval: 0.41s. SP Cost: 48. Passive Bonus: 8%
[Lv. 4]: MATK 340%, VCT: 3.60s. FCT: 0.65 Duration: 3.8s. Damane Interval: 0.38s. SP Cost: 54. Passive Bonus: 9%
[Lv. 5]: MATK 400%, VCT: 4.00s. FCT: 0.75 Duration: 3.5s. Damage Interval: 0.35s. SP Cost: 60. Passive Bonus: 10%
[Lv. 6]: MATK 460%, VCT: 4.40s. FCT: 0.8s Duration: 3.2s. Damage Interval: 0.32s. SP Cost: 66. Passive Bonus: 11%
[Lv. 7]: MATK 520%, VCT: 4.80s. FCT: 0.95 Duration: 2.9s. Damage Interval: 0.295. SP Cost: 72. Passive Bonus: 12%
[Lv. 8]: MATK 580%, VCT: 5.20s. FCT: 1.0s Duration: 2.6s. Damage Interval: 0.265. SP Cost: 78. Passive Bonus: 13%
[Lv. 9]: MATK 640%, VCT: 5.60s. FCT: 1.1s Duration: 2.3s. Damage Interval: 0.23s. SP Cost: 84. Passive Bonus: 14%
[Lv.10]: MATK 700%, VCT: 6.00s. FCT: 1.2s Duration: 2.0s. Damage Interval: 0.20s. SP Cost: 90. Passive Bonus: 15%
Formula: MATK per Tick(%): 100 + (60 x Skill Lv)`,
    img: violentQuake,
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
SP Cost: 5
Requirement: None
Description: Crafts gemstones.
Base Level, Job Level, and Stats increase the number of crafted gemstones, except for Blue, Red, and Yellow gemstones.
Guide: Gemmancy Creation Guide
[Lv. 1]: Bonus Efficiency: 0%
[Lv. 2]: Bonus Efficiency: 25% 
[Lv. 3]: Bonus Efficiency: 50% 
[Lv. 4]: Bonus Efficiency: 75% 
[Lv. 5]: Bonus Efficiency: 100%

Crafted Gemstones :
Base Amount + Bonus Amount

Bonus Amount:
((Base Amount x ((Level Bonus + Stats Bonus) x ((Skill Lv x 25) - 25))) = 100)

Level Bonus:
((Base Lv x 100) / 200) + ((Job Lv x 100) / 140) / 100 
Stats Bonus:
((STR^2 / 10) + (AGI^2 / 10) + (VIT^2) + (INT^2 / 10) + (DEX^2 / 10) + (LUK^2 / 10)) / 100

Random Bonus Amount:
10% chance for the bonus to be reduced to 25% 
70% chance for the bonus to be reduced to 50% 
20% chance for no reductions`,
    img: gemmancy,
  },
];


/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */
