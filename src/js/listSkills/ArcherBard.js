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
import musicalStrike from '../../img/icon_bnd/icon_bnd_12.gif'; 
import dissonance from '../../img/icon_bnd/icon_bnd_13.gif'; 
import whistle from '../../img/icon_bnd/icon_bnd_14.gif'; 
import assassinCrossOfSunset from '../../img/icon_bnd/icon_bnd_15.gif'; 
import poemOfBragi from '../../img/icon_bnd/icon_bnd_16.gif'; 
import appleOfIdun from '../../img/icon_bnd/icon_bnd_17.gif'; 
import frostJoke from '../../img/icon_bnd/icon_bnd_19.png'; 

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
Requirement: None
Description: Increase Atk, MAtk and Aspd with Musical Instruments Class Weapon. When [Lv 10], it increases Max SP in 6%.
[Lv 1]: Atk +2, MAtk +2, Aspd +1%,
[Lv 2]: Atk +4, MAtk +4, Aspd +2%,
[Lv 3]: Atk +6, MAtk +6, Aspd +3%,
[Lv 4]: Atk +8, MAtk +8, Aspd +4%,
[Lv 5]: Atk +10, MAtk +10, Aspd +5%,
[Lv 6]: Atk +12, MAtk +12, Aspd +6%,
[Lv 7]: Atk +14, MAtk +14, Aspd +7%,
[Lv 8]: Atk +16, MAtk +16, Aspd +8%,
[Lv 9]: Atk +18, MAtk +18, Aspd +9%,
[Lv 10]: Atk +20, MAtk +20, Aspd +10%
`,
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
Type: Physical
Target: Enemy
Range: 12
Requirement: Musical Lesson Lv: 3
Description: Fires a powerful volley of arrows using an instrument. The Arrows element determines the element of this attack. Consumes: 2x Arrow.
[Lv 1]: Atk 130% x 2 Hits,
[Lv 2]: Atk 160% x 2 Hits,
[Lv 3]: Atk 190% x 2 Hits,
[Lv 4]: Atk 220% x 2 Hits,
[Lv 5]: Atk 250% x 2 Hits
New calculation: ATK% = (50 + Crit) + (30 × Skill Lv).
Details: AfterCastActDelay set as ASPD; CastTime: 350 + (50 × Skill Lv); Fixed Cast Time: 400; AmmoAmount: 1.
`,
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
Type: Magical
Target: Self
Requirement: Musical Lesson Lv: 2
Description: Plays a discordant tune, dealing Neutral magic damage to all enemies in a 9x9 radius every 3 seconds. Reduces movement speed by 25% and consumes 3 SP per second while active. Can trigger auto-cast items. You can still use basic attacks and skills while active. Requires a Musical Instrument class weapon. Cannot switch weapons while active.
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
Type: Misc
Target: Self
Requirement: Dissonance Lv: 3
Description: Performs a song that will boost Max HP and Healings Received of the user and nearby party members around the performer. The duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Musical Instrument Class Weapon.
[Lv 1]: MaxHP +10%, Healings Received + 2%,
[Lv 2]: MaxHP +11%, Healings Received + 4%,
[Lv 3]: MaxHP +12%, Healings Received + 6%,
[Lv 4]: MaxHP +13%, Healings Received + 8%,
[Lv 5]: MaxHP +14%, Healings Received +10%,
[Lv 6]: MaxHP +15%, Healings Received +12%,
[Lv 7]: MaxHP +16%, Healings Received +14%,
[Lv 8]: MaxHP +17%, Healings Received +16%,
[Lv 9]: MaxHP +18%, Healings Received +18%,
[Lv 10]: MaxHP +20%, Healings Received +20%
Additional Benefits and Adjustments: Heals 5% of allies’ HP when using the skill; increases MaxHP by (2 × Skill Lv)%; heals 2% of the user’s HP every (25 - (Skill Lv × 2)) seconds.
`,
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
Type: Misc
Target: Self
Requirement: Apple of Idun Lv: 10
Description: Initiates a battle duet that temporarily increases both physical and magical attack power for you and your party members within a 25x25 area. Both users must be in the same group and adjacent to each other, and the partner must have learned the duet. Duet level matches the initiator skill level. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown.
[Lv 1]: Atk +15, MAtk +15,
[Lv 2]: Atk +20, MAtk +20,
[Lv 3]: Atk +25, MAtk +25,
[Lv 4]: Atk +30, MAtk +30,
[Lv 5]: Atk +35, MAtk +35`,
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
Type: Misc
Target: Self
Requirement: Drum of Battlefield Lv: 3
Description: Initiates a frenzied duet that gives opponents within a 9x9 area a 35% chance to fail when activating their skills. Upon activation, it also has a 100% chance to inflict Chaos. Both users must be in the same group and adjacent to each other. Duet lasts for 180 seconds, and both partners can move freely and use skills within the area. If either leaves the area, the effect ends. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown.`,
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
Type: Misc
Target: Self
Requirement: Musical Lesson Lv: 5
Description: Extends the duration of all active songs, dances, and party buff duets for you and your allies by 15 seconds. Upon use, you gain a special status effect that enhances your abilities based on the number of active songs, dances, and duets. For Melody Strike and Slinging Strike, it increases skill damage by +10%. For Dissonance and Cringe Dance, it reduces the interval between attacks by 0.4 seconds. For Arrow Vulcan and Reverberation, it reduces the cooldown by 0.107 seconds. SP cost increases by 35 for each active song, dance, and duet. SP cost increases by 35 for each active song, dance, and duet.
[Lv 1]: Encore duration: 40 seconds,
[Lv 2]: Encore duration: 60 seconds,
[Lv 3]: Encore duration: 80 seconds,
[Lv 4]: Encore duration: 100 seconds,
[Lv 5]: Encore duration: 120 seconds
The functionality has been modified to improve usability.
When activated, it reduces the Cooldown of all active songs/dances by 50% and increases their duration by 50% (based on their current duration).
Synergies:
Slinging/Musical Strike: increases the final ATK% by 10% per active song/dance.
Arrow Vulcan: increases the final ATK% by 5% per active song/dance.
Reverberation: reduces SP cost and Cooldown by 5% per active song/dance.
Dissonance/Cringe Dance: reduces physical damage received by 5% per active song/dance.
`,
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
Type: Misc
Target: Self
Requirement: Encore Lv: 3
Description: Inflicts the Freezing status to enemies within the casters view.
[Lv 1]: Chance: 20%,
[Lv 2]: Chance: 25%,
[Lv 3]: Chance: 30%,
[Lv 4]: Chance: 35%,
[Lv 5]: Chance: 40%`,
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
Type: Misc
Target: Self
Requirement: Dissonance Lv: 3
Description: Performs a song that will boost Flee and Perfect Dodge of the user and party members around the performer. The duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Musical Instrument Class Weapon.
[Lv 1]: Flee +20, Perfect Dodge +1,
[Lv 2]: Flee +22, Perfect Dodge +2,
[Lv 3]: Flee +24, Perfect Dodge +3,
[Lv 4]: Flee +26, Perfect Dodge +4,
[Lv 5]: Flee +28, Perfect Dodge +5,
[Lv 6]: Flee +30, Perfect Dodge +6,
[Lv 7]: Flee +32, Perfect Dodge +7,
[Lv 8]: Flee +34, Perfect Dodge +8,
[Lv 9]: Flee +36, Perfect Dodge +9,
[Lv 10]: Flee +40, Perfect Dodge +10
Additional Benefits and Adjustments: Perfect Dodge +1 × Skill Lv; Flee: +20 + (Skill Lv × 2); adds 1% × Skill Lv chance to dodge any damage.
`,
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
Type: Misc
Target: Self
Requirement: Whistle Lv: 10
Description: Initiates an ambitious duet that grants a temporary effect, giving you and your party members within a 25x25 area a chance to negate the consumption of catalysts when using skills. Both users must be in the same group and adjacent to each other, and the partner must have learned the duet. Duet level matches the initiator skill level. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown. You must have the skills catalyst to use it. Catalysts That Can Have Consumption Negated: Arrows, Gems, Zeny Pouch, Vials, Potions, Traps, Spider Web, Sage Points, Throwing Knives, Poison Bottle, Stones, Spirit Orbs and any type of ammunition.
[Lv 1]: Grants a 4% chance to negate catalyst consumption.
[Lv 2]: Grants a 8% chance to negate catalyst consumption.
[Lv 3]: Grants a 12% chance to negate catalyst consumption.
[Lv 4]: Grants a 16% chance to negate catalyst consumption.
[Lv 5]: Grants a 20% chance to negate catalyst consumption.`,
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
Type: Misc
Target: Self
Requirement: Into the Abyss Lv: 3
Description: Initiates a sleepy duet that gives opponents within a 9x9 area a 100% chance to be inflicted with Sleep every 10 seconds while they remain in the area. The Sleep effect lasts for 4 seconds. Both users must be in the same group and adjacent to each other. Duet lasts for 180 seconds, and both partners can move freely and use skills within the area. If either leaves the area, the effect ends. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown`,
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
Type: Misc
Target: Self
Requirement: Dissonance Lv: 3
Description: Performs a song that will shorten Variable Cast Time and After Cast Delay of the user and party members around the performer. The duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Musical Instrument Class Weapon.
[Lv 1]: VCT -2%, Cast Delay -3%,
[Lv 2]: VCT -4%, Cast Delay -6%,
[Lv 3]: VCT -6%, Cast Delay -9%,
[Lv 4]: VCT -8%, Cast Delay -12%,
[Lv 5]: VCT -10%, Cast Delay -15%,
[Lv 6]: VCT -12%, Cast Delay -18%,
[Lv 7]: VCT -14%, Cast Delay -21%,
[Lv 8]: VCT -16%, Cast Delay -24%,
[Lv 9]: VCT -18%, Cast Delay -27%,
[Lv 10]: VCT -20%, Cast Delay -30%
Additional Benefits and Adjustments: Reduces VariableCastTime, FixedCastTime, and AfterCastDelay by (5 + (Skill Lv × 2))%.
`,
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
Type: Misc
Target: Self
Requirement: Poem of Bragi Lv: 10
Description: Initiates a comforting duet that grants temporary resistance to various negative effects and increases Fire, Water, Wind, and Earth resistances for you and party members within a 25x25 area. Both users must be in the same group and adjacent to each other, and the partner must have learned the duet. Duet level matches the initiator skill level. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown. Negative Effects Affected: Blind, Petrification, Freezing, Stun, Curse, Sleep, Silence, Chaos,
[Lv 1]: Elemental Resistences +3%, Tolerance to negative effects +5%,
[Lv 2]: Elemental Resistences +6%, Tolerance to negative effects +10%,
[Lv 3]: Elemental Resistences +9%, Tolerance to negative effects +15%,
[Lv 4]: Elemental Resistences +12%, Tolerance to negative effects +20%,
[Lv 5]: Elemental Resistences +15%, Tolerance to negative effects +25%`,
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
Type: Misc
Target: Self
Requirement: Invulnerable Siegfried Lv: 3
Description: Initiates a greedy duet that increases Base and Job experience gain for you and players within the 9x9 area of effect who defeat monsters. Both users must be in the same group and adjacent to each other. Duet lasts for 180 seconds, and both partners can move freely and use skills within the area, but if either leaves the area, the effect ends. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown. Increases base and class experience from defeating monsters by 40%`,
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
Type: Misc
Target: Self
Requirement: None
Description: Performs a song that will boost attack speed of the user and party members around the performer. The duration of this skill is 180 seconds and is reduced by 60 seconds for each subsequent music used after it. Requires Musical Instrument Class Weapon.
[Lv 1]: Aspd +2%,
[Lv 2]: Aspd +4%,
[Lv 3]: Aspd +6%,
[Lv 4]: Aspd +8%,
[Lv 5]: Aspd +10%,
[Lv 6]: Aspd +12%,
[Lv 7]: Aspd +14%,
[Lv 8]: Aspd +16%,
[Lv 9]: Aspd +18%,
[Lv 10]: Aspd +20%
Additional Benefits and Adjustments: Reduces the user’s After Attack Delay by 5 + (Skill Lv × 2)%; increases enemies’ After Attack Delay by 5 + (Skill Lv × 2)% for 5 seconds (only for the summoner); True ATK/MATK +10 × Skill Lv.

`,
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
Type: Misc
Target: Self
Requirement: Assassin Cross of Sunset Lv: 10
Description: Initiates a refined duet that grants a random temporary effect to you and your party members within a 25x25 area. Both users must be in the same group and adjacent to each other, and the partner must have learned the duet. Duet level matches the initiator skill level. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown.
[Lv 1]: Attack Speed +4%, Atk +4%, MAtk +4%, Max HP +6%, Max SP +6%, All Stats +3, Hit +10, Flee +10, SP consumption -6%, HP recovery +20%, SP recovery +20%,
[Lv 2]: Attack Speed +8%, Atk +8%, MAtk +8%, Max HP +12%, Max SP +12%, All Stats +6, Hit +20, Flee +20, SP consumption -12%, HP recovery +40%, SP recovery +40%,
[Lv 3]: Attack Speed +12%, Atk +12%, MAtk +12%, Max HP +18%, Max SP +18%, All Stats +9, Hit +30, Flee +30, SP consumption -18%, HP recovery +60%, SP recovery +60%,
[Lv 4]: Attack Speed +16%, Atk +16%, MAtk +16%, Max HP +24%, Max SP +24%, All Stats +12, Hit +40, Flee +40, SP consumption -24%, HP recovery +80%, SP recovery +80%,
[Lv 5]: Attack Speed +20%, Atk +20%, MAtk +20%, Max HP +30%, Max SP +30%, All Stats +15, Hit +50, Flee +50, SP consumption -30%, HP recovery +100%, SP recovery +100%`,
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
Type: Misc
Target: Self
Requirement: The Ring of Nibelungen Lv: 3
Description: Initiates a discordant duet that randomly reduces the physical and magical defenses of opponents within a 9x9 area. Both users must be in the same group and adjacent to each other. Duet lasts for 180 seconds, and both partners can move freely and use skills within the area. If either leaves the area, the effect ends. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown. Reduces physical and magical defenses by a random percentage between 10% and 50%.`,
    img: eternalChaos,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
