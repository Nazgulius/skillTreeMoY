/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */


// список скилов Champion
export const skillsChampion = [  
  {
    id: "chainCrushCombo",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Chain Crush Combo",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Physical
    Target: Self
    Range: 2
    Requirement: Triple Attack Lv: 8, Combo Finish Lv: 4
    Description: Chain Crush Combo is a devastating melee attack that can be used after Combo Finish, delivering a series of rapid crushing blows. Attack power increases further based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 9x9 AoE. Each cast requires 2 Spirit Sphere.
    [Lv 1]: Atk 400%, SP Cost: 16,
    [Lv 2]: Atk 800%, SP Cost: 22,
    [Lv 3]: Atk 1200%, SP Cost: 28,
    [Lv 4]: Atk 1600%, SP Cost: 34,
    [Lv 5]: Atk 2000%, SP Cost: 40`,
  },
  {
    id: "palmStrike",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Palm Strike",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Physical
    Target: Enemy
    Range: 1
    Requirement: Pacify Lv: 4, Body Relocation Lv: 3
    Description: Rush toward the enemy and deliver a powerful palm strike, pushing them back while dealing melee damage after a 1 second delay. Requires the user to be in Furious Spirits or Calm Spirits status. If the target collides with an obstacle or cannot be pushed, they receive additional damage. in Furious Spirits state, adds a damage multiplier based on your STR. In Calm Spirits state, adds a damage multiplier based on your VIT.
    [Lv 1]: Atk 300%, 7 SP, Range and Knock Back: 1 cell,
    [Lv 2]: Atk 450%, 9 SP, Range and Knock Back: 2 cells,
    [Lv 3]: Atk 600%, 11 SP, Range and Knock Back: 3 cells,
    [Lv 4]: Atk 750%, 13 SP, Range and Knock Back: 4 cells,
    [Lv 5]: Atk 900%, 15 SP, Range and Knock Back: 5 cells`,
  },
  {
    id: "spiritSpheresCollect",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Spirit Spheres Collect",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Misc
    Target: Self
    Requirement: Call Spirit Sphere Lv: 5
    Description: Extends the limit of Spirit Spheres the user can have and increases the Atk and DEF they grant by 2. Doubles the quantity of Spirit Spheres summoned by the Summon Spirit Sphere skill.
    [Lv 1]: Spirit Spheres Limit: +1, Duration: 80 sec,
    [Lv 2]: Spirit Spheres Limit: +2, Duration: 120 sec,
    [Lv 3]: Spirit Spheres Limit: +3, Duration: 160 sec,
    [Lv 4]: Spirit Spheres Limit: +4, Duration: 200 sec,
    [Lv 5]: Spirit Spheres Limit: +5, Duration: 240 sec`,
  },
  {
    id: "tigerFist",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Tiger Fist",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Physical
    Target: Self
    Range: 2
    Requirement: Triple Attack Lv: 8, Combo Finish Lv: 4
    Description: Tiger Fist is a powerful area-of-effect strike that can be used after Combo Finish, delivering a devastating blow within a 5x5 area and has a high chance of immobilizing enemies. Attack power increases further based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 9x9. Each cast requires 2 Spirit Sphere.
    [Lv 1]: Atk 350%, SP Cost: 9,
    [Lv 2]: Atk 500%, SP Cost: 13,
    [Lv 3]: Atk 650%, SP Cost: 17,
    [Lv 4]: Atk 800%, SP Cost: 21,
    [Lv 5]: Atk 950%, SP Cost: 25`,
  },
];


/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */