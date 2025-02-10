/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */


// список скилов HighPriest
export const skillsHighPriest = [  
  {
    id: "assumptio",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Assumptio",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Magical
    Target: Ally
    Range: 9
    Requirement: Angelus Lv: 5, Impositio Manus Lv: 3
    Description: Increases target's Defense, and recieved Healing amount for, the skill's duration. Can be used in conjunction with Kyrie Eleison.
    [Lv 1]: DEF +50, Healing +2%, Duration: 20 seconds,
    [Lv 2]: DEF +100, Healing +4%, Duration: 40 seconds,
    [Lv 3]: DEF +150, Healing +6%, Duration: 60 seconds,
    [Lv 4]: DEF +200, Healing +8%, Duration: 80 seconds,
    [Lv 5]: DEF +250, Healing +10%, Duration: 100 seconds`,
  },
  {
    id: "basilica",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Basilica",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Magical
    Target: Self
    Range: 4
    Requirement: Demon Bane Lv: 3, Divine Protection Lv: 3, Sanctuary Lv: 1
    Description: Creates a sacred basilica in a [5x5] area around the user, sharing the benefits of Demon Bane and Divine Protection with allies within the basilica. Allies who already possess these skills will have their effects increased by 50%. For the user, activates the effects of Demon Bane and Divine Protection every 3 seconds. Catalyst: 3x Holy Water.
    [Lv 1]: SP Cost: 60, Duration: 20,
    [Lv 2]: SP Cost: 70, Duration: 30,
    [Lv 3]: SP Cost: 80, Duration: 40,
    [Lv 4]: SP Cost: 90, Duration: 50,
    [Lv 5]: SP Cost: 100, Duration: 60`,
  },
  {
    id: "manaRecharge",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Mana Recharge",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Passive
    Type: Misc
    Requirement: Mace Mastery Lv: 10, Demon Bane Lv: 10
    Description: Reduces the amount of SP, that is consumed when using skills.
    [Lv 1]: -4% SP Consumption,
    [Lv 2]: -8% SP Consumption,
    [Lv 3]: -12% SP Consumption,
    [Lv 4]: -16% SP Consumption,
    [Lv 5]: -20% SP Consumption`,
  },
  {
    id: "meditatio",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Meditatio",
    maxLevel: 10,
    inform: `Max Lv: 10
    Skill Form: Passive
    Type: Magical
    Requirement: Impositio Manus Lv: 3, Increase SP Recovery Lv: 3, Lex Divina Lv: 3
    Description: Increases SP and, MaxSP Recovery, as well as the amount of, HP restored by Healing skills.
    [Lv 1]: MaxSP +1%, SP Recovery +3%,
    [Lv 2]: MaxSP +2%, SP Recovery +6%,
    [Lv 3]: MaxSP +3%, SP Recovery +9%,
    [Lv 4]: MaxSP +4%, SP Recovery +12%,
    [Lv 5]: MaxSP +5%, SP Recovery +15%,
    [Lv 6]: MaxSP +6%, SP Recovery +18%,
    [Lv 7]: MaxSP +7%, SP Recovery +21%,
    [Lv 8]: MaxSP +8%, SP Recovery +24%,
    [Lv 9]: MaxSP +9%, SP Recovery +27%,
    [Lv 10]: MaxSP +10%, SP Recovery +30%`,
  },
];


/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */