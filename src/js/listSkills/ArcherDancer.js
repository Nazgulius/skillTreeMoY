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
import slingingStrike from '../../img/icon_dan/icon_dan_2.gif';
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
Type: Misc
Target: Self
Requirement: Belly Dance Lv: 10
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
Type: Misc
Target: Self
Requirement: Dancing Lesson Lv: 5
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
Type: Misc
Target: Self
Requirement: Humming Lv: 10
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
Description: Initiates a sleepy duet that gives opponents within a 9x9 area a 100% chance to be inflicted with Sleep every 10 seconds while they remain in the area. The Sleep effect lasts for 4 seconds. Both users must be in the same group and adjacent to each other. Duet lasts for 180 seconds, and both partners can move freely and use skills within the area. If either leaves the area, the effect ends. Only one duet can be active at a time, but it can coexist with other songs or dances. Using the duet puts both partners skills on cooldown.`,
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
Type: Misc
Target: Self
Requirement: Fortune's Kiss Lv: 10
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
Type: Misc
Target: Self
Requirement: Don't Forget Me Lv: 10
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
