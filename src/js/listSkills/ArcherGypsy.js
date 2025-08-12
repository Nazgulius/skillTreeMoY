/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import arrowVulcan from '../../img/icon_cng/icon_cng_1.gif'; 
import moonlitWaterMill from '../../img/icon_cng/icon_cng_2.gif'; 
import tarotCardOfFate from '../../img/icon_cng/icon_cng_6.gif'; 
import reverberation from '../../img/icon_cng/icon_cng_7.png'; 

// список скилов Gypsy
export const skillsGypsy = [  
  {
    id: "arrowVulcan",
    level: 0,
    dependencies: [
      { id: "arrowShower", minLevel: 5 },
      { id: "slingingStrike", minLevel: 1 },
      { id: "doubleStrafe", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Arrow Vulcan",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Weapon: Instrument/Whip 
Type: Physical
Target: Enemy
Element: Ammunition
After Cast Delay: A.Delay - 0.26s
Fixed Cast Time: 0.60s
Cooldown: 1.50s
Range: 12
Hits: 9
Requirement: Arrow Shower Lv: 5, Musical Strike Lv: 1, Double Strafe Lv: 5
Description: Deals ranged P.DMG to the target.
Grants +3 hits if used after Musical Strike or Slinging Strike.
VCT scales with skill level.
Catalyst: 1x Arrow
[Lv. 1]: ATK 108% x Hits, VCT: 0.50s SP Cost: 17
[Lv. 2]: ATK 116% x Hits. VCT: 0.60s SP Cost: 19
[Lv. 3]: ATK 124% x Hits, VCT: 0.70s SP Cost: 21
[Lv. 4]: ATK 132% x Hits, VCT: 0.80s SP Cost: 23
[Lv. 5]: ATK 140% x Hits, VCT: 0.90s SP Cost: 25
[Lv. 6]: ATK 148% x Hits. VCT: 1.00s SP Cost: 27
[Lv. 7]: ATK 156% x Hits. VCT: 1.10s SP Cost: 29
[Lv. 8]: ATK 164% x Hits. VCT: 1.20s SP Cost: 31
[Lv. 9]: ATK 172% x Hits. VCT: 1.30s SP Cost: 33
[Lv.10]: ATK 180% x Hits. VCT: 1.40s SP Cost: 35
Formula: ATK (%): (100 + (Skill Lv x 8)) x Hits `,
    img: arrowVulcan,
  },
  {
    id: "moonlitWaterMill",
    level: 0,
    dependencies: [
      { id: "improveConcentration", minLevel: 5 },
      { id: "dancingLesson", minLevel: 7 },
    ],
    dependent: [],
    element: null,
    skillName: "Moonlit Water Mill",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Weapon: Instrument/Whip 
ype: Supportive
Target: Self
Variable Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: 20s
Requirement: Improve Concentration Lv: 5, Musical Lesson Lv: 7
Description: Increases B.ATK or B.MATK of nearby allies for 180s, depending on Class. Scales with Job Level, Musical Lesson, Dancing Lesson, and number of party members. 
[Lv 1]: B.ATK or B.MATK +6. SP Cost: 30 
[Lv 2]: B.ATK or B.MATK +12. SP Cost: 40 
[Lv 3]: B.ATK or B.MATK +18. SP Cost: 50 
[Lv 4]: B.ATK or B.MATK +24. SP Cost: 60 
[Lv 5]: B.ATK or B.MATK +30. SP Cost: 70
Formula: BATK: + (Skill Lv x 6) + (Job Lv / 7) + Musical Lesson Lv + Number of Bards in the party 
       B.MATK: + (Skill Lv x 6) + (Job Lv / 7) + Dancing Lesson Ly + Number of Dancers in the party `,
    img: moonlitWaterMill,
  },
  {
    id: "reverberation",
    level: 0,
    dependencies: [
      { id: "cringeDance", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Reverberation",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Weapon: Instrument/Whip
Type: Magical
Target: Enemy
Element: Ammunition.
After Cast Delay: 1s 
Fixed Cast Time: 0.60s 
Cooldown: 1.50s
Range: 9
Requirement: Dissonance Lv: 5
Description: Deals M.DMG to enemies within a 5x5 AoE around the target.
VCT scales with skill level.
Catalyst: 1x Arrow
[Lv. 1]: MATK 700%, VCT: 1.10s SP Cost: 30
[Lv. 2]: MATK 900%, VCT: 1.30s SP Cost: 35
[Lv. 3]: MATK 1100%, VCT: 1.50s SP Cost: 40
[Lv. 4]: MATK 1300%, VCT: 1.70s SP Cost: 45
[Lv. 5]: MATK 1500%, VCT: 1.90s SP Cost: 50`,
    img: reverberation,
  },
  {
    id: "tarotCardOfFate",
    level: 0,
    dependencies: [
      { id: "improveConcentration", minLevel: 10 },
      { id: "cringeDance", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Tarot Card of Fate",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Self
SP Cost: 70
Requirement: Improve Concentration Lv: 10, Cringe Dance Lv: 3
Description: When activated for the first time, Tarot Cards are displayed in order above the user's head for 30s.
Upon second activation, the displayed card is used on allies and enemies within an 11x11 AoE.
After a card is used, it is removed from the list and replaced by a random card on the next skill use.
CD scales with skill level.
The Lovers: Heals allies 20% Max HP. Inflicts Seduction on enemies for 5s. 
The Fool: Heals allies 20% Max SP. Burns enemies' SP by 20%, 
The Chariot: Removes movement NSE and reduces WD by 20% for allies for 60s. Also grants 2s immunity to movement NSE. Increases WD by 20% for enemies for 30s. 
The Hanged Man: Removes control NSE from allies and grants 10s immunity. Inflicts Hallucination and Chaos on allies and enemies for 10s.
The High Priestess: Grants allies immunity to the next NSE for 60s. Ignores enemies' resistance to the next NSE for 30s.
The Tower: Increases allies' S.DEF by 150 for 60s. Reduces enemies' S.DEF by 300 for 30s. 
The Temperance: Grants +20% Healing Received Effectiveness to allies for 60s. Prevents user and enemies from hurting each other for 5s.
The Sun: Increases allies' B.ATK, W.ATK, B.MATK, H.DEF, H.MDEF, FLEE, and ACC by 5% for 60s. Decreases these stats for enemies by 5% for 30s.
The Devil: Increases allies' B.ATK, W.ATK and B.MATK by 10% for 60s. Decreases these stats for enemies by 5% and deals 666 T.DMG every 1.5s for 30s. 
Wheel of Fortune: Applies effects of two random cards to allies and enemies.
The Star: Decreases allies' FCT by 20% for 60s. Increases enemies' FCT by 20% for 30s. 
The Strength: Increases allies' B.ATK and W.ATK by 20% for 60s. Reduces enemies' B.ATK and W.ATK by 20% for 30s.
The Magician: Increases allies' B.MATK by 20% for 60s. Decreases enemies' B.MATK by 20% for 30s. 
Death: Resurrects allies and changes their property to Corrupt for 60s. Deals 1000 T.DMG as Corrupt property and changes enemies' property to Corrupt for 30s.
Catalyst: 1x 'Tarot Cards
[Lv. 1]: CD: 90s
[Lv. 2]: CD: 75s
[Lv. 3]: CD: 60s
[Lv. 4]: CD: 45s
[Lv. 5]: CD: 30s

*** Old note ***
Description: When using [Tarot Card of Fate], the cards are drawn one by one, and the drawn cards appear above your head. Upon using [Tarot Card of Fate] again, you select the card to be used. After that, you can choose the target for the Tarot card, whether it be yourself, an ally, or an enemy. The cooldown, cast time, and cast delay of [Tarot Card of Fate] are applied after choosing a target for the card. The effects of tarot cards are:
[The Fool]: Allies: If your current SP percentage is higher than the targets, transfer yours to the target. When used on yourself, restores 20% of maximum SP. Enemies: If your current SP percentage is higher than the targets, removes the same amount of SP from the target.
[The Magician]: Allies: Increases MATK by 20% for 15 seconds. Enemies: Decreases MATK by 20% for 15 seconds.
[The High Priestess]: Allies: Renders the target immune to the next negative status received. Enemies: Reduces the targets resistance to the next negative status.
[The Chariot]: Allies: Grants movement speed and removes movement impairment effects. Gains immunity to movement impairment for 2 seconds. Enemies: Reduces movement speed by 20% for 15 seconds.
[Strength]: Allies: Increases ATK by 20% for 15 seconds. Enemies: Decreases ATK by 20% for 15 seconds.
[The Lovers]: Allies: Combines the current HP and SP of the target with the users and divides it equally between them. Enemies: Applies the Charm status to the enemy for 10 seconds.
[Wheel of Fortune]: Allies and enemies: Randomly activates the effects of two tarot cards.
[The Hanged Man]: Allies: Inflicts Hallucination and Confusion for 10 seconds but makes the target immune to any crowd control effect* for the same duration. Enemies: Inflicts Hallucination and Confusion for 10 seconds.
[Temperance]: Allies: Increases the effectiveness of received heals by 25% for 10 seconds. Enemies: You and the enemy cannot inflict damage on each other for 5 seconds.
[The Devil]: Allies: Causes 666 damage every 3 seconds for 15 seconds and increases Atk and Matk by 10% for the same duration. Enemies: Causes fixed 666 damage every 1.5 seconds for 15 seconds and reduces Atk and Matk by 10% for the same duration.
[Death]: Allies: Resurrects a dead ally with 20% HP but enchants their armor with the corrupt property for 10 seconds. Enemies: Causes 1000 corrupt property damage and enchants their armor with the corrupt property for 10 seconds.
[The Tower]: Allies: Increases soft DEF by 500 for 10 seconds. Enemies: Reduces soft DEF by 500 for 10 seconds.
[The Star]: Allies: Reduces fixed cast time by 20% for 15 seconds. Enemies: Increases fixed cast time by 20% for 15 seconds.
[The Sun]: Allies: Increases Atk, Matk, Soft Def, Soft Mdef, Flee, and Hit by 5% for 10 seconds. Enemies: Decreases Atk, Matk, Soft Def, Soft Mdef, Flee, and Hit by 5% for 10 seconds.
[Lv 1]: Cooldown: 51 Seconds,
[Lv 2]: Cooldown: 42 Seconds,
[Lv 3]: Cooldown: 33 Seconds,
[Lv 4]: Cooldown: 24 Seconds,
[Lv 5]: Cooldown: 15 Seconds`,
    img: tarotCardOfFate,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
