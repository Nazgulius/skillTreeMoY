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
Requirement: None
Description: Increase Atk, MAtk and Aspd with Whip Class Weapon. When [Lv 10], it increases Max SP in 6%.
[Lv 1]: Atk +2, MAtk +2, Aspd +1%,
[Lv 2]: Atk +4, MAtk +4, Aspd +2%,
[Lv 3]: Atk +6, MAtk +6, Aspd +3%,
[Lv 4]: Atk +8, MAtk +8, Aspd +4%,
[Lv 5]: Atk +10, MAtk +10, Aspd +5%,
[Lv 6]: Atk +12, MAtk +12, Aspd +6%,
[Lv 7]: Atk +14, MAtk +14, Aspd +7%,
[Lv 8]: Atk +16, MAtk +16, Aspd +8%,
[Lv 9]: Atk +18, MAtk +18, Aspd +9%,
[Lv 10]: Atk +20, MAtk +20, Aspd +10%`,
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
Target: Enemy
Range: 12
Requirement: Dancing Lesson Lv: 3
Description: Fires a powerful volley of arrows using an whip. The Arrows element determines the element of this attack. Consumes: 2x Arrow.
[Lv 1]: Atk 130% x 2 Hits,
[Lv 2]: Atk 160% x 2 Hits,
[Lv 3]: Atk 190% x 2 Hits,
[Lv 4]: Atk 220% x 2 Hits,
[Lv 5]: Atk 250% x 2 Hits
New calculation: ATK% = (50 + Crit) + (30 × Skill Lv).
Details: AfterCastActDelay set as ASPD; CastTime: 350 + (50 × Skill Lv); Fixed Cast Time: 400; AmmoAmount: 1.
`,
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
Type: Magical
Target: Self
Requirement: Dancing Lesson Lv: 2
Description: Performs a corny dance, dealing Neutral magic damage to all enemies in a 9x9 radius every 3 seconds. Reduces movement speed by 25% and consumes 3 SP per second while active. Can trigger auto-cast items. You can still use basic attacks and skills while active. Requires a Whip class weapon. Cannot switch weapons while active.
[Lv 1]: (Atk + MAtk) x 30% every 3 seconds,
[Lv 2]: (Atk + MAtk) x 60% every 3 seconds,
[Lv 3]: (Atk + MAtk) x 90% every 3 seconds,
[Lv 4]: (Atk + MAtk) x 120% every 3 seconds,
[Lv 5]: (Atk + MAtk) x 150% every 3 seconds
The interval between hits is now calculated based on the user’s attack speed.
New Hit/Sec calculation:
Hit/Sec = 1000 ÷ ((4000 - (20 × ASPD)) × 3).
Now the skill can trigger autocast for both physical and magical modes.
It does not disable SP regeneration, but reduces regeneration by 70% and increases the regeneration time by 30%.
`,
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
Type: Misc
Target: Self
Requirement: Cringe Dance Lv: 3
Description: Performs a dance that will boost Max SP and reduce SP Cost of the user and party members around the performer. Duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Whip Class Weapon.
[Lv 1]: MaxSP +10%, SP consumption: -6%,
[Lv 2]: MaxSP +11%, SP consumption: -7%,
[Lv 3]: MaxSP +12%, SP consumption: -8%,
[Lv 4]: MaxSP +13%, SP consumption: -9%,
[Lv 5]: MaxSP +14%, SP consumption: -10%,
[Lv 6]: MaxSP +15%, SP consumption: -11%,
[Lv 7]: MaxSP +16%, SP consumption: -12%,
[Lv 8]: MaxSP +17%, SP consumption: -13%,
[Lv 9]: MaxSP +18%, SP consumption: -14%,
[Lv 10]: MaxSP +20%, SP consumption: -15%
Additional Benefits and Adjustments: Increases MaxSP by (Skill Lv × 2)%; reduces SP Consumption by (Skill Lv × 2)%; increases SP Recovery by (Skill Lv × 2)%.
`,
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
Type: Misc
Target: Self
Requirement: Encore Lv: 3
Description: Inflicts the Petrifying status to enemies within the casters view.
[Lv 1]: Chance: 20%,
[Lv 2]: Chance: 25%,
[Lv 3]: Chance: 30%,
[Lv 4]: Chance: 35%,
[Lv 5]: Chance: 40%`,
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
Type: Misc
Target: Self
Requirement: Cringe Dance Lv: 3
Description: Performs a dance that will boost Hit and Long Range Damage of all players around the performer. Duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Whip Class Weapon.
[Lv 1]: Perfect Hit +1, Ranged Damage +2%,
[Lv 2]: Perfect Hit +2, Ranged Damage +4%,
[Lv 3]: Perfect Hit +3, Ranged Damage +6%,
[Lv 4]: Perfect Hit +4, Ranged Damage +8%,
[Lv 5]: Perfect Hit +5, Ranged Damage +10%,
[Lv 6]: Perfect Hit +6, Ranged Damage +12%,
[Lv 7]: Perfect Hit +7, Ranged Damage +14%,
[Lv 8]: Perfect Hit +8, Ranged Damage +16%,
[Lv 9]: Perfect Hit +9, Ranged Damage +18%,
[Lv 10]: Perfect Hit +10, Ranged Damage +20%
Additional Benefits and Adjustments: Perfect Hit +1 × Skill Lv; Ranged Damage: +(5 + Skill Lv)%; adds 1% × Skill Lv chance to ignore the target’s defense.
`,
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
Type: Misc
Target: Self
Requirement: Cringe Dance Lv: 3
Description: Performs a dance that will boost the Crit and Critical Damage of the user and party members around the performer. Duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Whip Class Weapon.
[Lv 1]: Crit +1, Critical Damage + 2%,
[Lv 2]: Crit +2, Critical Damage + 4%,
[Lv 3]: Crit +3, Critical Damage + 6%,
[Lv 4]: Crit +4, Critical Damage + 8%,
[Lv 5]: Crit +5, Critical Damage + 10%,
[Lv 6]: Crit +6, Critical Damage + 12%,
[Lv 7]: Crit +7, Critical Damage + 14%,
[Lv 8]: Crit +8, Critical Damage + 16%,
[Lv 9]: Crit +9, Critical Damage + 18%,
[Lv 10]: Crit +10, Critical Damage + 20%
Additional Benefits and Adjustments: Crit +1 × Skill Lv; Critical Shield +1 × Skill Lv; Critical Damage + (5 + Skill Lv)%.`,
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
Type: Misc
Target: Self
Requirement: Cringe Dance Lv: 3
Description: Perform a dance that increases the movement speed of you and your party around the performer. While the effect is active, when you take damage, the attackers movement speed and attack speed are reduced. Duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Whip Class Weapon.
[Lv 1]: Allies MS +7%, Attacker MS and ASPD -11% for 9.5 seconds,
[Lv 2]: Allies MS +9%, Attacker MS and ASPD -12% for 9 seconds,
[Lv 3]: Allies MS +11%, Attacker MS and ASPD -13% for 8.5 seconds,
[Lv 4]: Allies MS +13%, Attacker MS and ASPD -14% for 8 seconds,
[Lv 5]: Allies MS +15%, Attacker MS and ASPD -15% for 7.5 seconds,
[Lv 6]: Allies MS +17%, Attacker MS and ASPD -16% for 7 seconds,
[Lv 7]: Allies MS +19%, Attacker MS and ASPD -17% for 6.5 seconds,
[Lv 8]: Allies MS +21%, Attacker MS and ASPD -18% for 6 seconds,
[Lv 9]: Allies MS +23%, Attacker MS and ASPD -19% for 5.5 seconds,
[Lv 10]: Allies MS +25%, Attacker MS and ASPD -20% for 5 seconds
Additional Benefits and Adjustments: Increases movement speed by (5 + (Skill Lv × 2))%; reduces enemies’ movement speed by 5 + (Skill Lv × 2)% for 5 seconds (only for the summoner); True Defense +10 × Skill Lv.`,
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
