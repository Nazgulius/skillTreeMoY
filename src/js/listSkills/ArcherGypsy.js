/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */


// список скилов Gypsy
export const skillsGypsy = [  
  {
    id: "arrowVulcan",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Arrow Vulcan",
    maxLevel: 10,
    inform: `Max Lv: 10
    Skill Form: Active
    Type: Physical
    Target: Enemy
    Range: 12
    Requirement: Arrow Shower Lv: 5, Slinging Strike Lv: 1, Double Strafe Lv: 5
    Description: Fires a rapid flurry of arrows at a targeted enemy, with damage increasing based on your Base Level. This skill requires a Musical Instrument Class Weapon for Minstrels or a Whip Class Weapon for Gypsies. If used after Musical Strike or Slinging Strike, halves the fixed and variable cast times and removes the after-cast delay. Consumes: 3x Arrow.
    [Lv 1]: Atk 610%,
    [Lv 2]: Atk 720%,
    [Lv 3]: Atk 830%,
    [Lv 4]: Atk 940%,
    [Lv 5]: Atk 1050%,
    [Lv 6]: Atk 1160%,
    [Lv 7]: Atk 1270%,
    [Lv 8]: Atk 1380%,
    [Lv 9]: Atk 1490%,
    [Lv 10]: Atk 1600%`,
  },
  {
    id: "moonlitWaterMill",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Moonlit Water Mill",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Misc
    Target: Self
    Requirement: Improve Concentration Lv: 5, Dancing Lesson Lv: 7
    Description: The Moonlight Watermill performance can be executed by both Minstrels and Gypsies, providing inspiration to the group. However, the characteristics of this performance vary depending on the performer. Both effects share the same type, preventing simultaneous activation of both. When performed by Minstrels, it grants an Atk, whereas when executed by Gypsies, it offers an MAtk. The granted bonuses are influenced by the presence of additional Minstrels or Gypsies in the group. The more Minstrels in the group, the higher the Atk, and the same principle applies to Gypsies for the MAtk. Additionally, the users job level and the level of [Musical Lesson] or [Dancing Lesson] also contribute to increasing the bonuses provided by the performance. Requires Musical Instrument Class Weapon for Minstrels and Whip Class Weapon for Gypsies.
    [Lv 1]: Atk or MAtk +6,
    [Lv 2]: Atk or MAtk +12,
    [Lv 3]: Atk or MAtk +18,
    [Lv 4]: Atk or MAtk +24,
    [Lv 5]: Atk or MAtk +30`,
  },
  {
    id: "reverberation",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Reverberation",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Magical
    Target: Enemy
    Range: 9
    Requirement: Cringe Dance Lv: 5
    Description: Emits a high-frequency sound wave at an enemy, causing magical damage to the target and all enemies within a 5x5 area. Skills element is determined by the arrows element.
    [Lv 1]: MAtk 700%,
    [Lv 2]: MAtk 900%,
    [Lv 3]: MAtk 1100%,
    [Lv 4]: MAtk 1300%,
    [Lv 5]: MAtk 1500%`,
  },
  {
    id: "tarotCardOfFate",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Tarot Card of Fate",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Misc
    Target: Self
    Requirement: Improve Concentration Lv: 10, Cringe Dance Lv: 3
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
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */