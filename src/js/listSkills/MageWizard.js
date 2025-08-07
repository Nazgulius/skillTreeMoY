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
    id: "sightrasher",
    level: 0,
    dependencies: [
      { id: "fireBolt", minLevel: 4 }, 
      { id: "fireBall", minLevel: 3 },
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
    id: "meteorStorm",
    level: 0,
    dependencies: [
      { id: "sightrasher", minLevel: 3 },
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
Element: Fire
After Cast Delay: 1s 
Cooldown: 65 
Range: 9
Requirement: Sightrasher Lv: 3
Description: Creates a 7x7 AoE at the targeted location that deals M.DMG to enemies within a random 7x7 AoE every 0.45s for 4.5s.
Has a chance to inflict Burning for 100s. VCT and FCT scale with skill level.
[Lv. 1]: MATK 330%, VCT: 2.60s. FCT: 0.78s Burning Chance: 3%, SP Cost: 60
[Lv. 2]: MATK 360%, VCT: 2.90s. FCT: 0.82s Burning Chance: 6%, SP Cost: 64
[Lv. 3]: MATK 390%, VCT: 3.20s. FCT: 0.86s Burning Chance: 9%, SP Cost: 68
[Lv. 4]: MATK 420%, VCT: 3.50s. FCT: 0.90s Burning Chance: 12%, SP Cost: 72
[Lv. 5]: MATK 450%, VCT: 4.10s. FCT: 0.98s Burning Chance: 15%, SP Cost: 76
[Lv. 6]: MATK 480%, VCT: 4.70s. FCT: 1.06s Burning Chance: 18%, SP Cost: 80
[Lv. 7]: MATK 510%, VCT: 5.30s. FCT: 1.14s Burning Chance: 21%, SP Cost: 84
[Lv. 8]: MATK 540%, VCT: 6.20s. FCT: 1.26s Burning Chance: 24%, SP Cost: 88
[Lv. 9]: MATK 570%, VCT: 7.10s. FCT: 1.38s Burning Chance: 27%, SP Cost: 92
[Lv.10]: MATK 600%, VCT: 8.00s. FCT: 1.50s Burning Chance: 30%, SP Cost: 96
Formula: MATK (%); 300 + (Skill Lv x 30) `,
    img: meteorStorm,
  },
  {
    id: "firePillar",
    level: 0,
    dependencies: [
      { id: "meteorStorm", minLevel: 7 },
    ],
    dependent: [],
    element: null,
    skillName: "Fire Pillar",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
Element: Fire
After Cast Delay: 1s 
Max Instances: 5 
Range: 9
Requirement: Meteor Storm Lv: 7
Description: Summons a temporary pillar at the targeted location that explodes when triggered, dealing M.DMG damage to all enemies within a 5x5 AoE.
The damage is not multiplied by hits against players.
Grants a chance to auto-cast Fire Pillar when casting Skills, with the auto-casted level being half of the skill's learned level.
VCT and FCT scale with skill level.
Catalyst: 1x Red Gemstone for Lv. 6 or higher.
[Lv. 1]: MATK 80% x 3 Hits Duration: 36s. Chance: 1%, SP Cost: 39
[Lv. 2]: MATK 100% x 4 Hits Duration: 42s. Chance: 2%, SP Cost: 43 
[Lv. 3]: MATK 120% x 5 Hits Duration: 48s. Chance: 3%, SP Cost: 47 
[Lv. 4]: MATK 140% x 6 Hits Duration: 54s. Chance: 4%, SP Cost: 51 
[Lv. 5]: MATK 160% x 7 Hits Duration: 60s. Chance: 5%, SP Cost: 55 
[Lv. 6]: MATK 180% x 8 Hits Duration: 66s. Chance: 6%, SP Cost: 59 
[Lv. 7]: MATK 200% x 9 Hits Duration: 72s. Chance: 7%, SP Cost: 63 
[Lv. 8]: MATK 220% x 10 Hits Duration: 78s. Chance: 8%, SP Cost: 67 
[Lv. 9]: MATK 240% x 11 Hits Duration: 84s. Chance: 9%, SP Cost: 71 
[Lv.10]: MATK 260% x 12 Hits Duration: 90s. Chance: 10%, SP Cost: 75
Formula: MATK (%) (60+ (Skill Lv x 20)) x Hits 
Against Players MATK (%): 60 + (Skill Lv x 20)`,
    img: firePillar,
  },
  {
    id: "waterBall",
    level: 0,
    dependencies: [
      { id: "frostDiver", minLevel: 3 }, 
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
    id: "stormGust",
    level: 0,
    dependencies: [
      { id: "waterBall", minLevel: 3 }, 
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
Element: Water
After Cast Delay: 1s 
Cooldown: 65 
Range: 9 
Hits: 1
Requirement: Water Ball Lv: 3
Description: Deals M.DMG to enemies within a 9x9 AoE around the targeted location every 0.45s for 4.5s, knocking them back 2 cells. Has a chance to inflict Freezing for 5s. Inflicts Freeze on the target for 27s once the Freezing effect ends.
Also inflicts Freeze immediately if the enemy is hit 3 times.
Does not hit frozen enemies.
VCT and FCT scale with skill level.
[Lv. 1]: MATK 120%, VCT: 2.60s. FCT: 0.78s Freezing Chance: 60%, SP Cost: 60
[Lv. 2]: MATK 170%, VCT: 2.90s. FCT: 0.825 Freezing Chance: 55%, SP Cost: 64
[Lv. 3]: MATK 220%, VCT: 3.20s. FCT: 0.86s Freezing Chance: 50%, SP Cost: 68
[Lv. 4]: MATK 270%, VCT: 3.50s. FCT: 0.90s Freezing Chance: 45%, SP Cost: 72
[Lv. 5]: MATK 320%, VCT: 4.10s. FCT: 0.98s Freezing Chance: 40%, SP Cost: 76
[Lv. 6]: MATK 370%, VCT: 4.70s. FCT: 1.06s Freezing Chance: 35%, SP Cost: 80
[Lv. 7]: MATK 420%, VCT: 5.30s. FCT: 1.14s Freezing Chance: 30%, SP Cost: 84
[Lv. 8]: MATK 470%, VCT: 6.20s. FCT: 1.26s Freezing Chance: 25%, SP Cost: 88
[Lv. 9]: MATK 520%, VCT: 7.10s. FCT: 1.38s Freezing Chance: 20%, SP Cost: 92 
[Lv.10]: MATK 570%, VCT: 8.00s. FCT: 1.50s Freezing Chance: 15%, SP Cost: 96
Formula: MATK (%); 70 + (Skill Lv x 50) `,
    img: stormGust,
  },
  {
    id: "frostNova",
    level: 0,
    dependencies: [
      { id: "stormGust", minLevel: 7 }, 
    ],
    dependent: [],
    element: null,
    skillName: "Frost Nova",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Element: Water
After Cast Delay: 0.14s 
Cooldown: 0.30s
Hits: 1
Requirement: Storm Gust Lv: 7
Description: Deals M.DMG to enemies within a 9x9 AoE.
Has a chance to inflict Freezing for 5s. Inflicts Freeze on the target once the Freezing effect ends.
VCT and FCT scale with skill level. 
[Lv. 1]: MATK 110%, VCT/FCT: 0.57s Chance: 38%, Freeze Duration: 2.80s SP Cost: 35
[Lv. 2]: MATK 120%, VCT/FCT: 0.54s Chance: 43%, Freeze Duration: 3.60s SP Cost: 34
[Lv. 3]: MATK 130%, VCT/FCT: 0.51s Chance: 48%, Freeze Duration: 4.40s SP Cost: 33
[Lv. 4]: MATK 140%, VCT/FCT: 0.48s Chance: 53%, Freeze Duration: 5.20s SP Cost: 32
[Lv. 5]: MATK 150%, VCT/FCT: 0.45s Chance: 58%, Freeze Duration: 6.00s SP Cost: 31
[Lv. 6]: MATK 160%, VCT/FCT: 0.42s Chance: 63%, Freeze Duration: 6.80s SP Cost: 30
[Lv. 7]: MATK 170%, VCT/FCT: 0.39s Chance: 68%, Freeze Duration: 7.60s SP Cost: 29
[Lv. 8]: MATK 180%, VCT/FCT: 0.36s Chance: 73%, Freeze Duration: 8.40s SP Cost: 28
[Lv. 9]: MATK 190%, VCT/FCT: 0.33s Chance: 78%, Freeze Duration: 9.20s SP Cost: 27
[Lv.10]: MATK 200%, VCT/FCT: 0.30s Chance: 83%, Freeze Duration: 10.00s SP Cost: 26
Formula: MATK (%); 100 + (Skill Lv) `,
    img: frostNova,
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
    id: "lordOfVermilion",
    level: 0,
    dependencies: [
      { id: "jupitelThunder", minLevel: 3 }, 
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
Element: Wind
After Cast Delay: 1s
Cooldown: 65
Range: 9 
Hits: 4
Requirement: Jupitel Thunder Lv: 3
Description: Deals M.DMG to enemies within a 13x13 AoE around the targeted location every 0.45s for 4.5s.
Has a chance to inflict Blind for 20s.
VCT and FCT scale with skill level.
[Lv. 1]: MATK 20%, VCT: 2.60s. FCT: 0.78s Blind Chance: 15%, SP Cost: 60
[Lv. 2]: MATK 40%, VCT: 2.90s. FCT: 0.82s Blind Chance: 20%, SP Cost: 64
[Lv. 3]: MATK 60%, VCT: 3.20s. FCT: 0.86s Blind Chance: 25%, SP Cost: 68
[Lv. 4]: MATK 80%, VCT: 3.50s. FCT: 0.90s Blind Chance: 30%, SP Cost: 72
[Lv. 5]: MATK 100%, VCT: 4.10s. FCT: 0.98s Blind Chance: 35%, SP Cost: 76
[Lv. 6]: MATK 120%, VCT: 4.70s. FCT: 1.06s Blind Chance: 40%, SP Cost: 80
[Lv. 7]: MATK 140%, VCT: 5.30s. FCT: 1.14s Blind Chance: 45%, SP Cost: 84
[Lv. 8]: MATK 160%, VCT: 6.20s. FCT: 1.26s Blind Chance: 50%, SP Cost: 88
[Lv. 9]: MATK 180%, VCT: 7.10s. FCT: 1.38s Blind Chance: 55%, SP Cost: 92
[Lv.10]: MATK 200%, VCT: 8.00s. FCT: 1.50s Blind Chance: 60%, SP Cost: 96
Formula: MATK (%): Skill Lv x 20 `,
    img: lordOfVermilion,
  },
  {
    id: "electricalInduction",
    level: 0,
    dependencies: [
      { id: "lordOfVermilion", minLevel: 7 }, 
    ],
    dependent: [],
    element: null,
    skillName: "Electrical Induction",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Element: Wind
After Cast Delay: 1s 
Range: 9
Requirement: Lord of Vermilion Lv: 7
Description: Deals M.DMG to the target, and bounces to a random enemy within a 7x7 AoE after 2 hits. The damage increases by 10% with each bounce, and the bounce interval scales with A.Motion.
Grants a chance to auto-cast Electrical Induction when casting Skills, and the auto- cast level being half of the skill's learned level.
VCT and FCT scale with skill level.
[Lv. 1]: MATK 20% x 3 Hits. VCT: 2.30s FCT: 0.55s. Chance: 1%, SP Cost: 39
[Lv. 2]: MATK 30% x 4 Hits. VCT: 2.10s FCT: 0.50s. Chance: 2%, SP Cost: 43 
[Lv. 3]: MATK 40% x 5 Hits. VCT: 1.90s FCT: 0.45s. Chance: 3%, SP Cost: 47 
[Lv. 4]: MATK 50% x 6 Hits. VCT: 1.70s FCT: 0.40s. Chance: 4%, SP Cost: 51 
[Lv. 5]: MATK 60% x 7 Hits, VCT: 1.50s FCT: 0.35s. Chance: 5%, SP Cost: 55
[Lv. 6]: MATK 70% x 8 Hits. VCT: 1.30s FCT: 0.30s. Chance: 6%, SP Cost: 59 
[Lv. 7]: MATK 80% x 9 Hits. VCT: 1.10s FCT: 0.25s. Chance: 7%, SP Cost: 63
[Lv. 8]: MATK 90% x 10 Hits. VCT: 0.90s FCT: 0.20s. Chance: 8%, SP Cost: 67
[Lv. 9]: MATK 100% x 11 Hits, VCT: 0.70s FCT: 0.15s. Chance: 9%, SP Cost: 71 
[Lv.10]: MATK 110% x 12 Hits. VCT: 0.50s FCT: 0.10s. Chance: 10%, SP Cost: 75
Formula: MATK (%); 10+ (Skill Lv x 10) + (Jumps x 10) 
Interval (seconds): (A.Motion (Jumps x 20)) = 1000 `,
    img: electricalInduction,
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
    inform: `Max Lv: 10
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
Formula: MATK (%); Skill Lv x 25 `,
    img: heavensDrive,
  },
  {
    id: "violentQuake",
    level: 0,
    dependencies: [
      { id: "heavensDrive", minLevel: 3 }, 
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
Element: Earth
After Cast Delay: 1s 
Cooldown: 65 
Range: 9
Requirement: Heaven's Drive Lv: 3
Description: Creates a 7x7 AoE at the targeted location that deals M.DMG to enemies within a random 7x7 AoE every 0.45s for 4.5s.
Has a chance to inflict Stun for 5s. VCT and FCT scale with skill level.
[Lv. 1]: MATK 230%, VCT: 2.60s. FCT: 0.78s Stun Chance: 3%, SP Cost: 60
[Lv. 2]: MATK 260%, VCT: 2.90s. FCT: 0.82s Stun Chance: 6%, SP Cost: 64
[Lv. 3]: MATK 290%, VCT: 3.20s. FCT: 0.86s Stun Chance: 9%, SP Cost: 68
[Lv. 4]: MATK 320%, VCT: 3.50s. FCT: 0.90s Stun Chance: 12%, SP Cost: 72
[Lv. 5]: MATK 350%, VCT: 4.10s. FCT: 0.98s Stun Chance: 15%, SP Cost: 76
[Lv. 6]: MATK 380%, VCT: 4.70s. FCT: 1.06s Stun Chance: 18%, SP Cost: 80
[Lv. 7]: MATK 410%, VCT: 5.30s. FCT: 1.14s Stun Chance: 21%, SP Cost: 84
[Lv. 8]: MATK 440%, VCT: 6.20s. FCT: 1.26s Stun Chance: 24%, SP Cost: 88
[Lv. 9]: MATK 470%, VCT: 7.10s. FCT: 1.38s Stun Chance: 27%, SP Cost: 92
[Lv.10]: MATK 500%, VCT: 8.00s. FCT: 1.50s Stun Chance: 30%, SP Cost: 96
Formula: MATK (%); 200 + (Skill Lv x 30) `,
    img: violentQuake,
  },
  {
    id: "quagmire",
    level: 0,
    dependencies: [
      { id: "violentQuake", minLevel: 7 }, 
    ],
    dependent: [],
    element: null,
    skillName: "Quagmire",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ground
After Cast Delay: 1s 
Max Instances: 3 
Range: 9
Requirement: Violent Quake Lv: 7
Description: Temporarily creates a 5x5 AoE at the targeted location, reducing AGI and DEX and increasing WD of enemies. Also removes some Status Effects from them. Older instances are removed to create new ones when reaching the instance limit. 
[Lv. 1]: WD +26%, AGI/DEX -15% Duration: 8s. SP Cost: 8
[Lv. 2]: WD +32%, AGI/DEX -20% Duration: 11s. SP Cost: 11
[Lv. 3]: WD +38%, AGI/DEX -25% Duration: 14s. SP Cost: 14
[Lv. 4]: WD +44%, AGI/DEX -30% Duration: 17s. SP Cost: 17
[Lv. 5]: WD +50%, AGI/DEX -35% Duration: 20s. SP Cost: 20
[Lv. 6]: WD +56%, AGI/DEX -40% Duration: 23s. SP Cost: 23
[Lv. 7]: WD +62%, AGI/DEX -45% Duration: 26s. SP Cost: 26
[Lv. 8]: WD +68%, AGI/DEX -50% Duration: 29s, SP Cost: 29
[Lv. 9]: WD +74%, AGI/DEX -55% Duration: 32s. SP Cost: 32
[Lv.10]: WD +80%, AGI/DEX -60% Duration: 35s, SP Cost: 35`,
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
