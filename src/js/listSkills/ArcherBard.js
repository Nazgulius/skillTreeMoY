/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import encore from '../../img/icon_bnd/icon_bnd_2.gif';
import lullaby from '../../img/icon_bnd/icon_bnd_3.gif';
import mrKimARichMan from '../../img/icon_bnd/icon_bnd_4.gif';
import eternalChaos from '../../img/icon_bnd/icon_bnd_5.gif';
import drumOfBattlefield from '../../img/icon_bnd/icon_bnd_6.gif';
import theRingOfNibelungen from '../../img/icon_bnd/icon_bnd_7.gif';
import lokisWail from '../../img/icon_bnd/icon_bnd_8.gif';
import intoTheAbyss from '../../img/icon_bnd/icon_bnd_9.gif';
import invulnerableSiegfried from '../../img/icon_bnd/icon_bnd_10.gif';
import musicalLesson from '../../img/icon_bnd/icon_bnd_11.gif';
import musicalStrike from '../../img/icon_bnd/icon_bnd_20.png'; 
import dissonance from '../../img/icon_bnd/icon_bnd_13.gif'; 
import whistle from '../../img/icon_bnd/icon_bnd_14.gif'; 
import assassinCrossOfSunset from '../../img/icon_bnd/icon_bnd_15.gif'; 
import poemOfBragi from '../../img/icon_bnd/icon_bnd_22.png'; 
import appleOfIdun from '../../img/icon_bnd/icon_bnd_17.gif'; 
import frostJoke from '../../img/icon_bnd/icon_bnd_21.png'; 

// список скилов Bard
export const skillsBard = [    
  {
    id: "musicalLesson",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "moonlitWaterMill" },
      { id: "encore" },
      { id: "musicalStrike" },
      { id: "dissonance" },
    ],
    element: null,
    skillName: "Musical Lesson",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: Instrument
Requirement: None
Description: Increases E.ATK, E.MATK and decreases DAA while wielding an Instrument. At max level, also grants +6% Max SP. 
[Lv. 1]: E.ATK +2. E.MATK +2. DAA -1% 
[Lv. 2]: E.ATK +4. E.MATK +4. DAA -2% 
[Lv. 3]: E.ATK +6. E.MATK +6. DAA -3% 
[Lv. 4]: E.ATK +8. E.MATK +8. DAA -4% 
[Lv. 5]: E.ATK +10. E.MATK +10. DAA -5% 
[Lv. 6]: E.ATK +12. E.MATK +12. DAA -6% 
[Lv. 7]: E.ATK +14. E.MATK +14. DAA -7% 
[Lv. 8]: E.ATK +16. E.MATK +16. DAA -8% 
[Lv. 9]: E.ATK +18. E.MATK +18. DAA -9% 
[Lv.10]: E.ATK +20. E.MATK +20. DAA -10%`,
    img: musicalLesson,
  },
  {
    id: "musicalStrike",
    level: 0,
    dependencies: [
      { id: "musicalLesson", minLevel: 3 },
    ],
    dependent: [
      { id: "arrowVulcan" },
    ],
    element: null,
    skillName: "Musical Strike",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Weapon: Instrument 
Type: Physical
Target: Enemy
Element: Ammunition
Fixed Cast Time: 0.30s
After Cast Delay: A.Delay - 0.26s
Cooldown: A.Delay
Range: 12
Hits: 2
Requirement: Musical Lesson Lv: 3
Description: Deals ranged P.DMG to the target, scaling with CRIT.
VCT scales with skill level.
Catalyst: 1x Arrow
[Lv. 1]: ATK 180% x Hits. VCT: 0.30s SP Cost: 8
[Lv. 2]: ATK 210% x Hits. VCT: 0.40s SP Cost: 11
[Lv. 3]: ATK 240% x Hits, VCT: 0.50s SP Cost: 14
[Lv. 4]: ATK 270% x Hits, VCT: 0.60s SP Cost: 17
[Lv. 5]: ATK 300% x Hits, VCT: 0.70s SP Cost: 20
Formula: ATK (%): (50 + CRIT + (Skill Lv x 30)) x Hits `,
    img: musicalStrike,
  },
  {
    id: "dissonance",
    level: 0,
    dependencies: [
      { id: "musicalLesson", minLevel: 2 },
    ],
    dependent: [
      { id: "reverberation" },
      { id: "tarotCardOfFate" },
      { id: "appleOfIdun" },
      { id: "poemOfBragi" },
      { id: "whistle" },
    ],
    element: null,
    skillName: "Dissonance",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Toggle
Weapon: Instrument 
Type: Magical
Target: Self
Element: Neutral
Variable Cast Time: 0.70s 
Fixed Cast Time: 0.30s
After Cast Delay: 0.30s 
Cooldown: 10s
Requirement: Musical Lesson Lv: 2
Description: Deals M.DMG to enemies within a 9x9 AoE, scaling with ATK and Musical Lesson level. Damage interval is based on A.Delay, and can trigger auto-cast.
While active, increases WD by 25% and SP Recovery Interval by 30%, reduces SP Recovery by 70%, and drains SP every second.
Switching to a non-instrument weapon cancel the skill.
[Lv. 1]: ATK/MATK 30%, SP Cost: 28 
[Lv. 2]: ATK/MATK 60%, SP Cost: 31 
[Lv. 3]: ATK/MATK 90%, SP Cost: 34 
[Lv. 4]: ATK/MATK 120%, SP Cost: 37 
[Lv. 5]: ATK/MATK 150%, SP Cost: 40
Damage: (((Skill Lv x 30) + (ATK + MATK x (Skill Lv x 0,3))) x (100+ (Musical Lesson Lv x 3))) / 100
SP Consumption: (5 + Max SP / 500)
Interval (seconds): A.Delay x 3 `,
    img: dissonance,
  },
  {
    id: "appleOfIdun",
    level: 0,
    dependencies: [
      { id: "dissonance", minLevel: 3 },
    ],
    dependent: [      
      { id: "drumOfBattlefield" },
    ],
    element: null,
    skillName: "Apple of Idun",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Instrument 
Type: Song
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Dissonance Lv: 3
Description: Instantly recovers 5% Max HP of nearby allies.
Also increases their Max HP and restores 2% over time for 180s.
Only 3 songs can be active at a time.
[Lv. 1]: MaxHP +2%, Interval: 23s SP Cost: 33
[Lv. 2]: MaxHP +4%, Interval: 21s SP Cost: 36
[Lv. 3]: MaxHP +6%, Interval: 19s SP Cost: 39
[Lv. 4]: MaxHP +8%, Interval: 17s SP Cost: 42
[Lv. 5]: MaxHP +10%, Interval: 15s SP Cost: 45
[Lv. 6]: MaxHP +12%, Interval: 13s SP Cost: 48
[Lv. 7]: MaxHP +14%, Interval: 11s SP Cost: 51
[Lv. 8]: MaxHP +16%, Interval: 9s SP Cost: 54
[Lv. 9]: MaxHP +18%, Interval: 75 SP Cost: 57
[Lv.10]: MaxHP +20%, Interval: 5s SP Cost: 60`,
    img: appleOfIdun,
  },
  {
    id: "drumOfBattlefield",
    level: 0,
    dependencies: [
      { id: "appleOfIdun", minLevel: 10 },
    ],
    dependent: [      
      { id: "lokisWail" },
    ],
    element: null,
    skillName: "Drum of Battlefield",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Weapon: Instrument/Whip 
Type: Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s 
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Apple of Idun Lv: 10
Description: Increases B.ATK and B.MATK of nearby allies for 60s.
Requires an Artist ally in an adjacent cell to activate, and only 1 duet can be active at a time.
[Lv. 1]: B.ATK +20. B.MATK +20, SP Cost: 38 
[Lv. 2]: B.ATK +25. B.MATK +25, SP Cost: 46 
[Lv. 3]: B.ATK +30. B.MATK +30, SP Cost: 54 
[Lv. 4]; B.ATK +35. B.MATK +35, SP Cost: 62 
[Lv. 5]: B.ATK +40. B.MATK +40. SP Cost: 70`,
    img: drumOfBattlefield,
  },
  {
    id: "lokisWail",
    level: 0,
    dependencies: [
      { id: "drumOfBattlefield", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Loki's Wail",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Weapon: Instrument/Whip
Type: Ground Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 30s
SP Cost: 40
Requirement: Drum of Battlefield Lv: 3
Description: Creates a 9x9 AoE that lasts for 180s, inflicting Loki's Wail to enemies inside.
Also inflicts Chaos on enemies on activation. Requires an Artist ally in an adjacent cell to activate, and the duet ends if either the user or the artist who activated it leaves the AoE.`,
    img: lokisWail,
  },
  {
    id: "encore",
    level: 0,
    dependencies: [
      { id: "musicalLesson", minLevel: 5 },
    ],
    dependent: [      
      { id: "frostJoke" },
    ],
    element: null,
    skillName: "Encore",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Weapon: Instrument/Whip
Type: Supportive
Target: Self
After Cast Delay: 0.30s
Cooldown: 20s
SP Cost: 70
Requirement: Musical Lesson Lv: 5
Description: Increases duration and reduces CD of all Songs and Dances by 50%.
Also boosts the effectiveness of Bard and Dancer Skills.
[Lv 1]: Duration: 40s
[Lv 2]: Duration: 60s
[Lv 3]: Duration: 80s
[Lv 4]: Duration: 100s 
[Lv 5]: Duration: 120s`,
    img: encore,
  },
  
  {
    id: "frostJoke",
    level: 0,
    dependencies: [
      { id: "encore", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Frost Joke",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: A.Delay - 0.26s 
Cooldown: A.Delay + 25
Requirement: Encore Lv: 3
Description: Has a chance to inflict Freezing on nearby enemies.
When freezing ends, inflicts Freeze for 275. 
[Lv. 1]: Freezing Chance: 20%, SP Cost: 12 
[Lv. 2]: Freezing Chance: 25%, SP Cost: 14 
[Lv. 3]: Freezing Chance: 30%, SP Cost: 16 
[Lv. 4]: Freezing Chance: 35%, SP Cost: 18 
[Lv. 5]: Freezing Chance: 40%, SP Cost: 20`,
    img: frostJoke,
  },
  {
    id: "whistle",
    level: 0,
    dependencies: [
      { id: "dissonance", minLevel: 3 },
    ],
    dependent: [      
      { id: "intoTheAbyss" },
    ],
    element: null,
    skillName: "Whistle",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Instrument 
Type: Song 
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s 
Cooldown: 20s
Requirement: Dissonance Lv: 3
Description: Increases FLEE and P.FLEE of nearby allies for 180s.
Only 3 songs can be active at a time. 
[Lv. 1]: FLEE +22. P.FLEE +1. SP Cost: 33 
[Lv. 2]: FLEE +24. P.FLEE +2. SP Cost: 36 
[Lv. 3]: FLEE +26. P.FLEE +3. SP Cost: 39 
[Lv. 4]: FLEE +28. P.FLEE +4. SP Cost: 42 
[Lv. 5]: FLEE +30. P.FLEE +5. SP Cost: 45 
[Lv. 6]: FLEE +32. P.FLEE +6. SP Cost: 48 
[Lv. 7]: FLEE +34. P.FLEE +7. SP Cost: 51 
[Lv. 8]: FLEE +36. P.FLEE +8. SP Cost: 54
[Lv. 9]: FLEE +38. P.FLEE +9. SP Cost: 57 
[Lv.10]: FLEE +40. P.FLEE +10. SP Cost: 60`,
    img: whistle,
  },
  {
    id: "intoTheAbyss",
    level: 0,
    dependencies: [
      { id: "whistle", minLevel: 10 },
    ],
    dependent: [      
      { id: "lullaby" },
    ],
    element: null,
    skillName: "Into the Abyss",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Weapon: Instrument/Whip 
Type: Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 20s
Requirement: Whistle Lv: 10
Description: Grants nearby allies a chance to not consume skill Catalyst for 60s.
Requires an Artist ally in an adjacent cell to activate, and only 1 duet can be active at a time.
[Lv. 1]: Chance: 4%, SP Cost: 38 
[Lv. 2]: Chance: 8%, SP Cost: 46 
[Lv. 3]: Chance: 12%, SP Cost: 54 
[Lv. 4]: Chance: 16%, SP Cost: 62 
[Lv. 5]: Chance: 20%, SP Cost: 70`,
    img: intoTheAbyss,
  },
  {
    id: "lullaby",
    level: 0,
    dependencies: [
      { id: "intoTheAbyss", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Lullaby",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Weapon: Instrument/Whip 
Type: Ground Duet 
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 30s
SP Cost: 40
Requirement: Into the Abyss Lv: 3
Description: Creates a 9x9 AoE that lasts for 180s, inflicting Sleep on enemies inside for 4s every 10s.
Requires an Artist ally in an adjacent cell to activate, and the duet ends if either the user or the artist who activated it leaves the AoE.`,
    img: lullaby,
  },
  {
    id: "poemOfBragi",
    level: 0,
    dependencies: [
      { id: "dissonance", minLevel: 3 },
    ],
    dependent: [      
      { id: "invulnerableSiegfried" },
    ],
    element: null,
    skillName: "Poem of Bragi",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Instrument 
Type: Song
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Dissonance Lv: 3
Description: Reduces VCT, FCT and ACD of nearby allies for 180s.
Only 3 songs can be active at a time.
[Lv. 1]: VCT/FCT/ACD -7%, SP Cost: 33 
[Lv. 2]: VCT/FCT/ACD -9%, SP Cost: 36 
[Lv. 3]: VCT/FCT/ACD -11%, SP Cost: 39 
[Lv. 4]: VCT/FCT/ACD -13%, SP Cost: 42 
[Lv. 5]: VCT/FCT/ACD -15%, SP Cost: 45 
[Lv. 6]: VCT/FCT/ACD -17%, SP Cost: 48 
[Lv. 7]: VCT/FCT/ACD -19%, SP Cost: 51 
[Lv. 8]: VCT/FCT/ACD -21%, SP Cost: 54
[Lv. 9]: VCT/FCT/ACD -23%, SP Cost: 57 
[Lv.10]: VCT/FCT/ACD -25%, SP Cost: 60`,
    img: poemOfBragi,
  },
  {
    id: "invulnerableSiegfried",
    level: 0,
    dependencies: [
      { id: "poemOfBragi", minLevel: 10 },
    ],
    dependent: [      
      { id: "mrKimARichMan" },
    ],
    element: null,
    skillName: "Invulnerable Siegfried",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Weapon: Instrument/Whip 
Type: Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Poem of Bragi Lv: 10
Description: Grants nearby allies both NSE and ELE resistance for 60s.
Requires an Artist ally in an adjacent cell to activate, and only 1 duet can be active at a time.
[Lv. 1]; NSE +3%, ELE +5%, SP Cost: 38 
[Lv. 2]: NSE. +6%, ELE +10%, SP Cost: 46 
[Lv. 3]; NSE. +9%, ELE +15%, SP Cost: 54 
[Lv. 4]: NSE. +12%, ELE +20%, SP Cost: 62 
[Lv. 5]; NSE. +15%, ELE +25%, SP Cost: 70`,
    img: invulnerableSiegfried,
  }, 
  {
    id: "mrKimARichMan",
    level: 0,
    dependencies: [
      { id: "invulnerableSiegfried", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Mr. Kim A Rich Man",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Weapon: Instrument/Whip 
Type: Ground Duet 
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 30s
SP Cost: 40
Requirement: Invulnerable Siegfried Lv: 3
Description: Creates a 9x9 AoE that lasts for 180s, granting Mr. Kim A Rich Man to allies inside.
Requires an Artist ally in an adjacent cell to activate, and the duet ends if either the user or the artist who activated it leaves the AoE.`,
    img: mrKimARichMan,
  },
  {
    id: "assassinCrossOfSunset",
    level: 0,
    dependencies: [],
    dependent: [      
      { id: "theRingOfNibelungen" },
    ],
    element: null,
    skillName: "Assassin Cross of Sunset",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Instrument 
Type: Song
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s 
Cooldown: 20s
Requirement: None
Description: Reduces DAA and increases T.DMG of nearby allies for 180s.
Also increases DAA of nearby enemies for 5s, and while active, this effect is reapplied whenever an enemy deals P.DMG to the user. Only 3 songs can be active at a time.
[Lv. 1]: DAA -7%, T.DMG +10. SP Cost: 33 Enemies DAA +7%
[Lv. 2]: DAA -9%, T.DMG +20. SP Cost: 36 Enemies DAA +9%
[Lv. 3]: DAA -11%, T.DMG +30. SP Cost: 39 Enemies DAA +11%
[Lv. 4]: DAA -13%, T.DMG +40. SP Cost: 42 Enemies DAA +13%
[Lv. 5]: DAA -15%, T.DMG +50. SP Cost: 45 Enemies DAA +15%
[Lv. 6]: DAA -17%, T.DMG +60. SP Cost: 48 Enemies DAA +17%
[Lv. 7]: DAA -19%, T.DMG +70. SP Cost: 51 Enemies DAA +19%
[Lv. 8]: DAA -21%, T.DMG +80. SP Cost: 54 Enemies DAA +21%
[Lv. 9]: DAA -23%, T.DMG +90. SP Cost: 57 Enemies DAA +23%
[Lv.10]: DAA -25%, T.DMG +100. SP Cost: 60 Enemies DAA +25%`,
    img: assassinCrossOfSunset,
  },
  {
    id: "theRingOfNibelungen",
    level: 0,
    dependencies: [
      { id: "assassinCrossOfSunset", minLevel: 10 },
    ],
    dependent: [      
      { id: "eternalChaos" },
    ],
    element: null,
    skillName: "The Ring of Nibelungen",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Weapon: Instrument/Whip 
Type: Duet
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Assassin Cross of Sunset Lv: 10
Description: Grants nearby allies a random Effect for 60s.
Requires an Artist ally in an adjacent cell to activate, and only 1 duet can be active at a time.
[Lv. 1]: SP Cost: 38
[Lv. 2]: SP Cost: 46
[Lv. 3]: SP Cost: 54
[Lv. 4]: SP Cost: 62 
[Lv. 5]: SP Cost: 70`,
    img: theRingOfNibelungen,
  },
  {
    id: "eternalChaos",
    level: 0,
    dependencies: [
      { id: "theRingOfNibelungen", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Eternal Chaos",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Weapon: Instrument/Whip 
Type: Ground Duet 
Target: Self
Variable Cast Time: 1.50s
Fixed Cast Time: 0.50s
After Cast Delay: 0.30s 
Cooldown: 30s
SP Cost: 40
Requirement: The Ring of Nibelungen Lv: 3
Description: Creates a 9x9 AoE that lasts for 180s, inflicting Eternal Chaos to enemies inside.
Requires an Artist ally in an adjacent cell to activate, and the duet ends if either the user or the artist who activated it leaves the AoE.`,
    img: eternalChaos,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
