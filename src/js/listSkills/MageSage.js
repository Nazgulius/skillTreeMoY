/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import advancedBook from '../../img/icon_sag/icon_sag_1.gif'; 
import castCancel from '../../img/icon_sag/icon_sag_2.gif'; 
import magicRod from '../../img/icon_sag/icon_sag_3.gif'; 
import spellBreaker from '../../img/icon_sag/icon_sag_4.gif'; 
import freeCast from '../../img/icon_sag/icon_sag_5.gif'; 
import flameWeapon from '../../img/icon_sag/icon_sag_7.gif'; 
import frostWeapon from '../../img/icon_sag/icon_sag_8.gif'; 
import lightningWeapon from '../../img/icon_sag/icon_sag_9.gif'; 
import seismicWeapon from '../../img/icon_sag/icon_sag_10.gif'; 
import volcano from '../../img/icon_sag/icon_sag_12.gif'; 
import deluge from '../../img/icon_sag/icon_sag_13.gif'; 
import whirlwind from '../../img/icon_sag/icon_sag_14.gif'; 
import sandstorm from '../../img/icon_sag/icon_sag_17.png'; 
import landProtector from '../../img/icon_sag/icon_sag_15.gif'; 
import dispell from '../../img/icon_sag/icon_sag_16.gif'; 
import landDistortion from '../../img/icon_sag/icon_sag_18.png';
import spellwish from '../../img/icon_sag/icon_sag_19.png';
import scrollbending from '../../img/icon_sag/icon_sag_20.png';

// список скилов Sage
export const skillsSage = [  
  {
    id: "advancedBook",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "frostWeapon" }, 
      { id: "lightningWeapon" }, 
      { id: "seismicWeapon" },
      { id: "flameWeapon" }, 
      { id: "deluge" }, 
      { id: "whirlwind" }, 
      { id: "sandstorm" },
      { id: "volcano" }, 
      { id: "castCancel" }, 
      { id: "magicRod" }, 
      { id: "spellBreaker" },
      { id: "freeCast" }
    ],
    element: null,
    skillName: "Advanced Book",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: Book
Requirement: None
Description: Increases B.MATK while wielding Books. At max level, also grants +6% B.MATK and decreases DAA by 5%,
[Lv. 1]: B.MATK +3
[Lv. 2]: B.MATK +6
[Lv. 3]: B.MATK +9
[Lv. 4]: B.MATK +12
[Lv. 5]: B.MATK +15
[Lv. 6]: B.MATK +18
[Lv. 7]: B.MATK +21
[Lv. 8]: B.MATK +24
[Lv. 9]: B.MATK +27 
[Lv.10]: B.MATK +30`,
    img: advancedBook,
  },
  {
    id: "frostWeapon",
    level: 0,
    dependencies: [
      { id: "coldBolt", minLevel: 3 }, 
      { id: "advancedBook", minLevel: 3 }
    ],
    dependent: [
      { id: "deluge" },
      { id: "scrollbending" },
    ],
    element: null,
    skillName: "Frost Weapon",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Ally
Element: Water
Variable Cast Time: 1s
After Cast Delay: 2s 
Cooldown: A.Delay 
Range: 9
Requirement: Cold Bolt Lv: 3, Advanced Book Lv: 3
Description: Endows a single target's weapon with Water. Also increases the DMG of Water property basic attacks and skills. 
At max level becomes a 5x5 AoE, endowing allies around the target, but has a 0.6s FCT, double the SP Cost and triple the Catalysts.
Catalyst: 1x Indigo Point
[Lv. 1]: Water Damage +2%, SP Cost: 19 Duration: 75s
[Lv. 2]: Water Damage +3%, SP Cost: 23 Duration: 150s
[Lv. 3]: Water Damage +4%, SP Cost: 27 Duration: 225s
[Lv. 4]: Water Damage +5%, SP Cost: 31 Duration: 300s
[Lv. 5]: Water Damage +5%, SP Cost: 62 Duration: 300s`,
    img: frostWeapon,
  },
  {
    id: "lightningWeapon",
    level: 0,
    dependencies: [
      { id: "lightningBolt", minLevel: 3 }, 
      { id: "advancedBook", minLevel: 3 }
    ],
    dependent: [
      { id: "whirlwind" },
      { id: "scrollbending" },
    ],
    element: null,
    skillName: "Lightning Weapon",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Ally
Element: Wind
Variable Cast Time: 1s
After Cast Delay: 2s 
Cooldown: A.Delay 
Range: 9
Requirement: Lightning Bolt Lv: 3, Advanced Book Lv: 3
Description: Endows a single target's weapon with Wind. Also increases the DMG of Wind property basic attacks and skills.
At max level becomes a 5x5 AoE, endowing allies around the target, but has a 0.6s FCT, double the SP Cost and triple the Catalysts. 
Catalyst: 1x Canary Point
[Lv. 1]: Wind Damage +2%, SP Cost: 19 Duration: 75s
[Lv. 2]: Wind Damage +3%, SP Cost: 23 Duration: 150s
[Lv. 3]: Wind Damage +4%, SP Cost: 27 Duration: 225s
[Lv. 4]: Wind Damage +5%, SP Cost: 31 Duration: 300s
[Lv. 5]: Wind Damage +5%, SP Cost: 62 Duration: 300s`,
    img: lightningWeapon,
  },
  {
    id: "seismicWeapon",
    level: 0,
    dependencies: [
      { id: "earthSpike", minLevel: 3 }, 
      { id: "advancedBook", minLevel: 3 },
    ],
    dependent: [
      { id: "sandstorm" },
      { id: "scrollbending" },
    ],
    element: null,
    skillName: "Seismic Weapon",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive Target: Ally
Element: Earth
Variable Cast Time: 1s
After Cast Delay: 2s 
Cooldown: A.Delay 
Range: 9

Requirement: Earth Spike Lv: 3, Advanced Book Lv: 3
Description: Endows a single target's weapon with Earth. Also increases the DMG of Earth property basic attacks and skills.
At max level becomes a 5x5 AoE, endowing allies around the target, but has a 0.6s FCT, double the SP Cost and triple the Catalysts.
Catalyst: 1x Verdant Point
[Lv. 1]: Earth Damage +2%, SP Cost: 19 Duration: 75s
[Lv. 2]: Earth Damage +3%, SP Cost: 23 Duration: 150s
[Lv. 3]: Earth Damage +4%, SP Cost: 27 Duration: 225s
[Lv. 4]: Earth Damage +5%, SP Cost: 31 Duration: 300s
[Lv. 5]: Earth Damage +5%, SP Cost: 62 Duration: 300s`,
    img: seismicWeapon,
  },
  {
    id: "flameWeapon",
    level: 0,
    dependencies: [
      { id: "fireBolt", minLevel: 3 }, 
      { id: "advancedBook", minLevel: 3 },
    ],
    dependent: [
      { id: "volcano" },
      { id: "scrollbending" },
    ],
    element: null,
    skillName: "Flame Weapon",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Ally
Element: Fire
Variable Cast Time: 1s
After Cast Delay: 2s 
Cooldown: A.Delay 
Range: 9
Requirement: Fire Bolt Lv: 3, Advanced Book Lv: 3
Description: Endows a single target's weapon with Fire. Also increases the DMG of Fire property basic attacks and skills.
At max level becomes a 5x5 AoE, endowing allies around the target, but has a 0.6s FCT, double the SP Cost and triple the Catalysts.
Catalyst: 1x Scarlet Point
[Lv. 1]: Fire Damage +2%, SP Cost: 19 Duration: 75s
[Lv. 2]: Fire Damage +3%, SP Cost: 23 Duration: 150s
[Lv. 3]: Fire Damage +4%, SP Cost: 27 Duration: 225s
[Lv. 4]: Fire Damage +5%, SP Cost: 31 Duration: 300s
[Lv. 5]: Fire Damage +5%, SP Cost: 62 Duration: 300s`,
    img: flameWeapon,
  },
  {
    id: "deluge",
    level: 0,
    dependencies: [
      { id: "frostWeapon", minLevel: 2 },    
    ],
    dependent: [
      { id: "landProtector" },
      { id: "psychicWave" },
    ],
    element: null,
    skillName: "Deluge",
    maxLevel: 3,
    inform: `Max Lv: 3
Skill Form: Active
Type: Supportive 
Target: Ground
Element: Water
Variable Cast Time: 4s
Fixed Cast Time: 1s
After Cast Delay: 1s 
Range: 2
Requirement: Frost Weapon Lv: 2
Description: Creates a 7x7 AoE at the targeted location.
Increases allies' Max HP and basic attacks and skills of Water property damage.
Every 3s, Water entities recover 1% of their Max HP, and Fire entities receive 1% of their Max HP as Water M.DMG.
Does not consume Catalysts if the caster is within their own Deluge cell.
Catalyst: 3x Indigo Point
[Lv. 1]: Damage +10%, MaxHP +5% Duration: 60s. SP Cost: 30
[Lv. 2]: Damage +15%, MaxHP +10% Duration: 120s. SP Cost: 35
[Lv. 3]: Damage +20%, MaxHP +15% Duration: 180s, SP Cost: 40`,
img: deluge,
  },
  {
    id: "whirlwind",
    level: 0,
    dependencies: [
      { id: "lightningWeapon", minLevel: 2 }, 
    ],
    dependent: [
      { id: "landProtector" },
      { id: "psychicWave" },
    ],
    element: null,
    skillName: "Whirlwind",
    maxLevel: 3,
    inform: `Max Lv: 3
Skill Form: Active
Type: Supportive 
Target: Ground
Element: Wind
Variable Cast Time: 4s
Fixed Cast Time: 1s
After Cast Delay: 1s 
Range: 2
Requirement: Lightning Weapon Lv: 2
Description: Creates a 7x7 AoE at the targeted location.
Increases allies' FLEE and basic attacks and skills of Wind property damage.
Every 3s, Wind entities recover 1% of their Max HP, and Water entities receive 1% of their Max HP as Wind M.DMG.
Increases Fire Wall duration by 50%.
Does not consume Catalysts if the caster is within their own Whirlwind cell.
Catalyst: 3x Canary Point
[Lv. 1]: Damage +10%, FLEE +10 Duration: 60s. SP Cost: 30
[Lv. 2]: Damage +15%, FLEE +20 Duration: 120s. SP Cost: 35
[Lv. 3]: Damage +20%, FLEE +30 Duration: 180s. SP Cost: 40`,
    img: whirlwind,
  },
  {
    id: "sandstorm",
    level: 0,
    dependencies: [
      { id: "seismicWeapon", minLevel: 2 }, 
    ],
    dependent: [
      { id: "landProtector" },
      { id: "psychicWave" },
    ],
    element: null,
    skillName: "Sandstorm",
    maxLevel: 3,
    inform: `Max Lv: 3
Skill Form: Active
Type: Supportive 
Target: Ground
Element: Earth
Variable Cast Time: 4s
Fixed Cast Time: 1s
After Cast Delay: 1s 
Range: 2
Requirement: Seismic Weapon Lv: 2
Description: Creates a 7x7 AoE at the targeted location.
Increases allies' P.DEF and basic attacks and skills of Earth property damage.
Every 3s, Earth entities recover 1% of their Max HP, and Wind entities receive 1% of their Max HP as Earth M.DMG. Entities cannot become Invisible.
Does not consume Catalysts if the caster is within their own Sandstorm cell.
Catalyst: 3x Verdant Point
[Lv. 1]: Damage +10%, P.DEF +20 Duration: 60s, SP Cost: 30
[Lv. 2]: Damage +15%, P.DEF +30 Duration: 120s. SP Cost: 35
[Lv. 3]: Damage +20%, P.DEF +40 Duration: 180s. SP Cost: 40`,
    img: sandstorm,
  },
  {
    id: "volcano",
    level: 0,
    dependencies: [
      { id: "flameWeapon", minLevel: 2 }, 
    ],
    dependent: [
      { id: "landProtector" },
      { id: "psychicWave" },
    ],
    element: null,
    skillName: "Volcano",
    maxLevel: 3,
    inform: `Max Lv: 3
Skill Form: Active
Type: Supportive 
Target: Ground
Element: Fire
Variable Cast Time: 4s
Fixed Cast Time: 1s
After Cast Delay: 1s 
Range: 2
Requirement: Flame Weapon Lv: 2
Description: Creates a 7x7 AoE at the targeted location.
Increases allies' W.ATK, B.MATK and basic attacks and skills of Fire property damage. Every 3s, Fire entities recover 1% of their Max HP, and Earth entities receive 1% of their Max HP as Fire M.DMG.
Prevents the placement of Ice Walls.
Does not consume Catalysts if the caster is within their own Volcano cell.
Catalyst:  Scarlet Point
[Lv. 1]: Damage +10%, W.ATK/B.MATK +10 Duration: 60s. SP Cost: 30
[Lv. 2]: Damage +15%. W.ATK/B.MATK +20 Duration: 120s, SP Cost: 35
[Lv. 3]: Damage +20%, W.ATK/B.MATK +30 Duration: 180s. SP Cost: 40`,
    img: volcano,
  },
  {
    id: "castCancel",
    level: 0,
    dependencies: [
      { id: "advancedBook", minLevel: 2 }
    ],
    dependent: [
      { id: "freeCast" },
      { id: "soulBurn" },
    ],
    element: null,
    skillName: "Cast Cancel",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay 
SP Cost: 2
Requirement: Advanced Book Lv: 2
Description: Interrupts the caster's current skill cast and saves a portion of its SP Cost. 
[Lv. 1]: SP Retained: 10%
[Lv. 2]: SP Retained: 30%
[Lv. 3]: SP Retained: 50% 
[Lv. 4]: SP Retained: 70% 
[Lv. 5]: SP Retained: 90%`,
    img: castCancel,
  },
  {
    id: "dispell",
    level: 0,
    dependencies: [
      { id: "spellBreaker", minLevel: 3 }
    ],
    dependent: [
      { id: "abracadabra" },
      { id: "soulBurn" },
    ],
    element: null,
    skillName: "Dispell",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Enemy
Variable Cast Time: 1.40s
Fixed Cast Time: 0.60s
After Cast Delay: 0.50s
Cooldown: 1s
Range: 9
SP Cost: 1
Requirement: Spell Breaker Lv: 3
Description: Attempts to cancel all the target's status effects.
Catalyst: 1x Yellow Gemstone.
[Lv. 1]: Chance: 60%
[Lv. 2]: Chance: 70%
[Lv. 3]: Chance: 80% 
[Lv. 4]: Chance: 90%
[Lv. 5]: Chance: 100%`,
    img: dispell,
  },
  {
    id: "magicRod",
    level: 0,
    dependencies: [
      { id: "advancedBook", minLevel: 4 }
    ],
    dependent: [
      { id: "spellBreaker" },
      { id: "indulge" },
      { id: "soulBurn" },
      { id: "soulChange" },
    ],
    element: null,
    skillName: "Magic Rod",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: 0.30s
SP Cost: 2
Requirement: Advanced Book Lv: 4
Description: Temporarily prevents the next incoming single-target skill, absorbing a portion of its SP Cost.
Drains 20% of the target's SP if the prevented skill is Spell Breaker.
[Lv. 1]: Duration: 0.40s. SP Absorption: 20% 
[Lv. 2]: Duration: 0.60s. SP Absorption: 40% 
[Lv. 3]: Duration: 0.80s. SP Absorption: 60% 
[Lv. 4]: Duration: 1.00s. SP Absorption: 80% 
[Lv. 5]: Duration: 1.20s. SP Absorption: 100%`,
    img: magicRod,
  },
  {
    id: "spellBreaker",
    level: 0,
    dependencies: [
      { id: "magicRod", minLevel: 1 },
    ],
    dependent: [
      { id: "soulChange" },
      { id: "dispell" },
    ],
    element: null,
    skillName: "Spell Breaker",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Variable Cast Time: 0.56s
Fixed Cast Time: 0.14s
After Cast Delay: 0.50s 
Cooldown: 1s 
Range: 9
SP Cost: 10
Requirement: Magic Rod Lv: 1
Description: Interrupts the target's skill casting, absorbing a portion of its SP Cost. At max level, this skill also inflicts damage equal to 2% of the target's Max HP while absorbing half of it as health. 
[Lv. 1]: SP Absorption: 0% 
[Lv. 2]: SP Absorption: 25% 
[Lv. 3]: SP Absorption: 50%
[Lv. 4]: SP Absorption: 75%
[Lv. 5]: SP Absorption: 100%`,
    img: spellBreaker,
  },
  {
    id: "freeCast",
    level: 0,
    dependencies: [
      { id: "castCancel", minLevel: 1 },
    ],
    dependent: [
       { id: "doubleCasting" },
       { id: "spellwish" },
    ],
    element: null,
    skillName: "Free Cast",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Magical
Requirement: Cast Cancel Lv: 1
Description: Grants the ability to walk and to perform basic attacks while casting a skill, but increases WD and A.Motion during which. 
[Lv. 1]: WD +75%, A.Motion +100% 
[Lv. 2]: WD +70%, A.Motion +95%
[Lv. 3]: WD +65%, A.Motion +90% 
[Lv. 4]: WD +60%, A.Motion +85% 
[Lv. 5]: WD +55%, A.Motion +80% 
[Lv. 6]: WD +50%, A.Motion +75% 
[Lv. 7]: WD +45%, A.Motion +70% 
[Lv. 8]: WD +40%, A.Motion +65% 
[Lv. 9]: WD +35%, A.Motion +60% 
[Lv.10]: WD +30%, A.Motion +55%`,
    img: freeCast,
  },
  {
    id: "spellwish",
    level: 0,
    dependencies: [
      { id: "freeCast", minLevel: 4 },
    ],
    dependent: [],
    element: null,
    skillName: "Spellwish",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Self
Fixed Cast Time: 3s
After Cast Delay: 0.30s 
Cooldown: A.Delay
SP Cost: 35
Requirement: Free Cast Lv: 4
Description: Opens a list of learned Skills. Choosing a skill temporarily grants a chance to auto-cast it while performing basic attacks, consuming 65% of its SP Cost. The auto-cast level scales with Base Level and the learned level of the chosen skill. 
[Lv. 1]: Chance: 12%. Duration: 120s 
[Lv. 2]: Chance: 14%, Duration: 150s 
[Lv. 3]: Chance: 16%. Duration: 180s 
[Lv. 4]: Chance: 18%, Duration: 210s
[Lv. 5]: Chance: 20%. Duration: 240s 
[Lv. 6]: Chance: 22%, Duration: 270s 
[Lv. 7]: Chance: 24%, Duration: 300s 
[Lv. 8]: Chance: 26%, Duration: 330s 
[Lv. 9]: Chance: 28%. Duration: 360s 
[Lv.10]: Chance: 30%, Duration: 390s
Formula: Auto-cast Level: (Selected Skill Lv x Base Lv) x 100 `,
    img: spellwish,
  },
  {
    id: "landProtector",
    level: 0,
    dependencies: [
      { id: "volcano", minLevel: 2 },
      { id: "deluge", minLevel: 2 },
      { id: "sandstorm", minLevel: 2 },
      { id: "whirlwind", minLevel: 2 },
    ],
    dependent: [],
    element: null,
    skillName: "Land Protector",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Ground
Variable Cast Time: 4s.
Fixed Cast Time: 1s
After Cast Delay: 1s 
Range: 2
Requirement: Volcano Lv: 2, Deluge Lv: 2, Sandstorm Lv: 2, Whirlwind Lv: 2
Description: Places an area at the targeted location that nullifies and blocks certain ground targeted skills.
Can override other Land Protector instances.
AoE increases with skill level.
Catalyst: 1x Yellow Gemstone
[Lv. 1]: AoE: 3x3. SP Cost: 66 Duration: 60s
[Lv. 2]: AoE: 5x5. SP Cost: 62 Duration: 120s
[Lv. 3]: AoE: 7x7. SP Cost: 58 Duration: 180s
[Lv. 4]: AoE: 9x9. SP Cost: 54 Duration: 240s
[Lv. 5]: AoE: 11x11. SP Cost: 50 Duration: 300s`,
img: landProtector,
  },
//   {
//     id: "psychicWave",
//     level: 0,
//     dependencies: [
//       { id: "volcano", minLevel: 2 },
//       { id: "deluge", minLevel: 2 },
//       { id: "sandstorm", minLevel: 2 },
//       { id: "whirlwind", minLevel: 2 },
//     ],
//     dependent: [],
//     element: null,
//     skillName: "Psychic Wave",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Magical
// Target: Ground
// Range: 9
// Requirement: Volcano Lv: 2, Deluge Lv: 2, Sandstorm Lv: 2, Whirlwind Lv: 2
// Description: Fires a wave of psychic energy at targets in an area to deal multiple hits of Neutral elemental magic. The element of this skill can be changed by applying Frost Weapon, Lightning Weapon, Seismic Weapon, or Flame Weapon. Damage additionally increases according to the skill level and caster's Base Level.
// [Lv 1]: MAtk 120% x Hits,
// [Lv 2]: MAtk 130% x Hits,
// [Lv 3]: MAtk 140% x Hits,
// [Lv 4]: MAtk 150% x Hits,
// [Lv 5]: MAtk 160% x Hits`,
//     img: skillImgNo,
//   },
  {
    id: "landDistortion",
    level: 10,
    dependencies: [
      { id: "volcano", minLevel: 2 },
      { id: "deluge", minLevel: 2 },
      { id: "sandstorm", minLevel: 2 },
      { id: "whirlwind", minLevel: 2 },  
    ],
    dependent: [],
    element: null,
    skillName: "Land Distortion", 

    maxLevel: 5,
    inform: `Max Level: 5
Skill Form: Active 
Type: Magical
Target: Ground
Fixed Cast Time: 0.60s
After Cast Delay: 1s 
Cooldown: 35
Range: 9
Hits: 2
Description: Creates a 9x9 AoE at the targeted location that deals M.DMG every 0.5s for 3s, scaling with Base Level.
The element of this skill can be changed by certain Skills.
VCT scales with skill level.
[Lv. 1]: MATK 120%, VCT: 2.80s. SP Cost: 48 
[Lv. 2]: MATK 140%, VCT: 3.20s, SP Cost: 56 
[Lv. 3]: MATK 160%, VCT: 3.60s. SP Cost: 64
[Lv. 4]: MATK 180%, VCT: 4.00s. SP Cost: 72
[Lv. 5]: MATK 200%, VCT: 4.40s. SP Cost: 80
Formula: MATK (%) 120 + (Skill Lv x 20) + Base Lv `,
    img: landDistortion,
  },
  {
    id: "scrollbending",
    level: 0,
    dependencies: [
      { id: "flameWeapon", minLevel: 4 },
      { id: "frostWeapon", minLevel: 4 },
      { id: "lightningWeapon", minLevel: 4 },
      { id: "seismicWeapon", minLevel: 4 },
    ],
    dependent: [],
    element: null,
    skillName: "Scrollbending",
    maxLevel: 5,
    inform: `Max Level: 5
Skill Form: Active 
Type: Supportive 
Target: Self
Requirement: Flame Weapon Lv: 4, Frost Weapon Lv: 4, Lightning Weapon Lv: 4, Seismic Weapon Lv: 4
Description: Crafts Scrollbends using a variety of items.
Base Level, Job Level and Stats increase the number of crafted items.
Guide: Scrollbending Creation Guide
[Lv. 1]: Bonus Efficiency: 0%, SP Cost: 2 
[Lv. 2]: Bonus Efficiency: 25%, SP Cost: 4 
[Lv. 3]: Bonus Efficiency: 50%, SP Cost: 6 
[Lv. 4]: Bonus Efficiency: 75%, SP Cost: 8 
[Lv. 5]: Bonus Efficiency: 100%, SP Cost: 10

(В игре была такая информация)
Crafted Arrows:
Base Amount + Bonus Amount
Bonus Amount:
((Base Amount x ((Level Bonus + Stats Bonus) x ((Skill Lv x 25) - 25))) / 100)
Level Bonus:
((Base Lv x 100) / 200) + ((Job Lv x 100) / 140) / 100
Stats Bonus:
((STR^2 / 10) + (AGI^2 / 10) + (VIT^2 / 10) + (INT^2 / 10) + (DEX^2 / 10) + (LUK^2)) / 100
Random Bonus Amount:
10% chance for the bonus to be reduced to 25% 
70% chance for the bonus to be reduced to 50% 
20% chance for no reductions `,
    img: scrollbending,
  },
];




/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */
