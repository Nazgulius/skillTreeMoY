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
import dancingLesson from '../../img/icon_dan/icon_dan_1.gif';
import slingingStrike from '../../img/icon_dan/icon_dan_10.png';
import humming from '../../img/icon_dan/icon_dan_5.gif';
import dontForgetMe from '../../img/icon_dan/icon_dan_6.gif';
import fortunesKiss from '../../img/icon_dan/icon_dan_7.gif';
import cringeDance from '../../img/icon_dan/icon_dan_3.gif';
import medusaScream from '../../img/icon_dan/icon_dan_4.gif';
import bellyDance from '../../img/icon_dan/icon_dan_8.gif';

// список скилов Dancer
export const skillsDancer = [  
  {
    id: "dancingLesson",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "moonlitWaterMill" },
      { id: "cringeDance" },
      { id: "encore" },
      { id: "slingingStrike" },
    ],
    element: null,
    skillName: "Dancing Lesson",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Weapon: Whip
Requirement: None
Description: Increases E.ATK, E.MATK, and reduces DAA while wielding a Whip. At max level, also grants +6% Max SP.
[Lv. 1]: E.ATK +2. E.MATK +2. DAA -1% 
[Lv. 2]: E.ATK +4. E.MATK +4. DAA -2% 
[Lv. 3]: E.ATK +6. E.MATK +6. DAA -3% 
[Lv. 4]: E.ATK +8. E.MATK +8. DAA -4% 
[Lv. 5]: E.ATK +10. E.MATK +10. DAA -5% 
[Lv. 6]: E.ATK +12. E.MATK +12. DAA -6% 
[Lv. 7]: E.ATK +14. EMATK +14. DAA -7% 
[Lv. 8]: E.ATK +16. E.MATK +16. DAA -8% 
[Lv. 9]: E.ATK +18. E.MATK +18. DAA -9% 
[Lv.10]: E.ATK +20. E.MATK +20. DAA -10%`,
    img: dancingLesson,
  },
  {
    id: "slingingStrike",
    level: 0,
    dependencies: [
      { id: "dancingLesson", minLevel: 3 },
    ],
    dependent: [
      { id: "arrowVulcan" },
    ],
    element: null,
    skillName: "Slinging Strike",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Weapon: Whip (or Instrument)
Target: Enemy
Element: Ammunition
Fixed Cast Time: 0.30s
After Cast Delay: A.Delay - 0.26s
Cooldown: A.Delay
Range: 12
Hits: 2
Requirement: Dancing Lesson Lv: 3
Description: Deals ranged P.DMG to the target, scaling with CRIT.
VCT scales with skill level.
Catalyst: 1x Arrow
[Lv. 1]: ATK 180% x Hits. VCT: 0.30s SP Cost: 8
[Lv. 2]: ATK 210% x Hits. VCT: 0.40s SP Cost: 11
[Lv. 3]: ATK 240% x Hits. VCT: 0.50s SP Cost: 14
[Lv. 4]: ATK 270% x Hits, VCT: 0.60s SP Cost: 17
[Lv. 5]: ATK 300% x Hits, VCT: 0.70s SP Cost: 20
Formula: ATK (%): (50 + CRIT + (Skill Lv x 30)) x Hits `,
    img: slingingStrike,
  },
  {
    id: "cringeDance",
    level: 0,
    dependencies: [
      { id: "dancingLesson", minLevel: 2 },
    ],
    dependent: [
      { id: "tarotCardOfFate" },
      { id: "reverberation" },
      { id: "bellyDance" },
      { id: "dontForgetMe" },
      { id: "fortunesKiss" },
      { id: "humming" },
    ],
    element: null,
    skillName: "Cringe Dance",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Weapon: Whip
Type: Magical
Target: Self
Element: Neutral
Variable Cast Time: 0.70s
Fixed Cast Time: 0.30s
After Cast Delay: 0.30s
Cooldown: 10s
Requirement: Dancing Lesson Lv: 2
Description: Deals M.DMG to enemies within a 9x9 AoE, scaling with ATK and Musical Lesson level. Damage interval is based on A.Delay, and can trigger auto-cast.
While active, increases WD by 25% and SP Recovery Interval by 30%, reduces SP Recovery by 70%, and drains SP every second.
Switching to a non-whip weapon cancel the skill.
[Lv. 1]: ATK/MATK 30%, SP Cost: 28 
[Lv. 2]: ATK/MATK 60%, SP Cost: 31 
[Lv. 3]: ATK/MATK 90%, SP Cost: 34 
[Lv. 4]: ATK/MATK 120%, SP Cost: 37 
[Lv. 5]: ATK/MATK 150%, SP Cost: 40
Damage: (((Skill Lv x 30) + (ATK + MATK x (Skill Lv x 0.3))) x (100 + (Musical Lesson Lv x 3))) / 100 
SP Consumption: (5 + Max SP / 500)
Interval (seconds): A.Delay x 3 `,
    img: cringeDance,
  },
  {
    id: "bellyDance",
    level: 0,
    dependencies: [
      { id: "cringeDance", minLevel: 3 },
    ],
    dependent: [      
      { id: "drumOfBattlefield" },
    ],
    element: null,
    skillName: "Belly Dance",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Whip 
Type: Dance 
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Cringe Dance Lv: 3
Description: Increases SP Recovery and Max SP, and reduces SP Cost of nearby allies for 180s.
Only 3 dances can be active at a time.
[Lv 1]: MaxSP +2%, SP Cost: -2% SP Recovery: +2%
[Lv 2]: MaxSP +4%, SP Cost: -4% SP Recovery: +4%
[Lv 3]: MaxSP +6%, SP Cost: -6% SP Recovery: +6%
[Lv 4]: MaxSP +8%, SP Cost: -8% SP Recovery: +8%
[Lv 5]: MaxSP +10%, SP Cost: -10% SP Recovery: +10%
[Lv 6]: MaxSP +12%, SP Cost: -12% SP Recovery: +12%
[Lv 7]: MaxSP +14%, SP Cost: -14% SP Recovery: +14%
[Lv 8]: MaxSP +16%, SP Cost: -16% SP Recovery: +16%
[Lv 9]: MaxSP +18%, SP Cost: -18% SP Recovery: +18%
[Lv10]: MaxSP +20%, SP Cost: -20% SP Recovery: +20%`,
    img: bellyDance,
  },
  {
    id: "drumOfBattlefield",
    level: 0,
    dependencies: [
      { id: "bellyDance", minLevel: 10 },
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
      { id: "dancingLesson", minLevel: 5 },
    ],
    dependent: [      
      { id: "medusaScream" },
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
    id: "medusaScream",
    level: 0,
    dependencies: [
      { id: "encore", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Medusa Scream",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: A.Delay - 0.26s 
Cooldown: A.Delay + 25
Requirement: Encore Lv: 3
Description: Has a chance to inflict Petrifying on nearby enemies.
When petrifying ends, inflicts Petrify for 27s. 
[Lv. 1]: Petrifying Chance: 20%, SP Cost: 12 
[Lv. 2]: Petrifying Chance: 25%, SP Cost: 14 
[Lv. 3]: Petrifying Chance: 30%, SP Cost: 16 
[Lv. 4]: Petrifying Chance: 35%, SP Cost: 18 
[Lv. 5]: Petrifying Chance: 40%, SP Cost: 20`,
    img: medusaScream,
  },
  {
    id: "humming",
    level: 0,
    dependencies: [
      { id: "cringeDance", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Humming",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Whip 
Type: Dance 
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Cringe Dance Lv: 3
Description: Increases P.ACC and ranged P.DMG of nearby allies for 180s. Also grants Armor Pierce.
Only 3 dances can be active at a time. 
[Lv. 1]: P.ACC +1. Ranged P.DMG: +2% Armor Pierce: +1%, SP Cost: 33 
[Lv. 2]: P.ACC +2. Ranged P.DMG: +4% Armor Pierce: +2%, SP Cost: 36 
[Lv. 3]: P.ACC +3. Ranged P.DMG: +6% Armor Pierce: +3%, SP Cost: 39
[Lv. 4]: P.ACC +4. Ranged P.DMG: +8% Armor Pierce: +4%, SP Cost: 42 
[Lv. 5]: P.ACC +5. Ranged P.DMG: +10% Armor Pierce: +5%, SP Cost: 45 
[Lv. 6]: P.ACC +6. Ranged P.DMG: +12% Armor Pierce: +6%, SP Cost: 48 
[Lv. 7]: P.ACC +7. Ranged P.DMG: +14% Armor Pierce: +7%, SP Cost: 51 
[Lv. 8]: P.ACC +8. Ranged P.DMG: +16% Armor Pierce: +8%, SP Cost: 54 
[Lv. 9]: P.ACC +9. Ranged P.DMG: +18% Armor Pierce: +9%, SP Cost: 57 
[Lv.10]: P.ACC +10. Ranged P.DMG: +20% Armor Pierce: +10%, SP Cost: 60`,
    img: humming,
  },
  {
    id: "intoTheAbyss",
    level: 0,
    dependencies: [
      { id: "humming", minLevel: 10 },
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
    id: "fortunesKiss",
    level: 0,
    dependencies: [
      { id: "cringeDance", minLevel: 3 },
    ],
    dependent: [      
      { id: "invulnerableSiegfried" },
    ],
    element: null,
    skillName: "Fortune's Kiss",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Whip 
Type: Dance 
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Cringe Dance Lv: 3
Description: Increases CRIT and C.DMG of nearby allies for 180s.
Only 3 dances can be active at a time. 
[Lv. 1]: CRIT +1. C.DMG +2%, SP Cost: 33 
[Lv. 2]: CRIT +2. C.DMG +4%, SP Cost: 36 
[Lv. 3]: CRIT +3. C.DMG +6%, SP Cost: 39 
[Lv. 4]: CRIT +4. C.DMG +8%, SP Cost: 42 
[Lv. 5]: CRIT +5. C.DMG +10%, SP Cost: 45 
[Lv. 6]: CRIT +6. C.DMG +12%, SP Cost: 48 
[Lv. 7]: CRIT +7, C.DMG +14%, SP Cost: 51 
[Lv. 8]: CRIT +8. C.DMG +16%, SP Cost: 54 
[Lv. 9]: CRIT +9. C.DMG +18%, SP Cost: 57 
[Lv.10]: CRIT +10. C.DMG +20%, SP Cost: 60`,
    img: fortunesKiss,
  },
  {
    id: "invulnerableSiegfried",
    level: 0,
    dependencies: [
      { id: "fortunesKiss", minLevel: 10 },
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
    id: "dontForgetMe",
    level: 0,
    dependencies: [
      { id: "cringeDance", minLevel: 3 },
    ],
    dependent: [      
      { id: "theRingOfNibelungen" },
    ],
    element: null,
    skillName: "Don't Forget Me",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Whip 
Type: Dance
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Cringe Dance Lv: 3
Description: Reduces WD and increases T.DEF of nearby allies for 180s.
Also increases WD of nearby enemies for 5s, and while active, this effect is reapplied whenever an enemy deals P.DMG to the user. Only 3 dances can be active at a time.
[Lv. 1]: WD -7%, T.DEF +10. SP Cost: 33 Enemies WD +7%
[Lv. 2]: WD -9%, T.DEF +20. SP Cost: 36 Enemies WD +9%
[Lv. 3]: WD -11%, T.DEF +30. SP Cost: 39 Enemies WD +11%
[Lv. 4]: WD -13%, T.DEF +40. SP Cost: 42 Enemies WD +13%
[Lv. 5]: WD -15%, T.DEF +50. SP Cost: 45 Enemies WD +15%
[Lv. 6]: WD -17%, T.DEF +60. SP Cost: 48 Enemies WD +17%
[Lv. 7]: WD -19%, T.DEF +70. SP Cost: 51 Enemies WD +19%
[Lv. 8]: WD -21%, T.DEF +80. SP Cost: 54 Enemies WD +21%
[Lv. 9]: WD -23%, T.DEF +90. SP Cost: 57 Enemies WD +23%
[Lv.10]: WD -25%, T.DEF +100, SP Cost: 60 Enemies WD +25%`,
    img: dontForgetMe,
  },
  {
    id: "theRingOfNibelungen",
    level: 0,
    dependencies: [
      { id: "dontForgetMe", minLevel: 10 },
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
