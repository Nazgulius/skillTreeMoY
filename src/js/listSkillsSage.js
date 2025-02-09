/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */


// список скилов Sage
export const skillsSage = [
  { // skills mage
    id: "fireBolt",
    level: 0,
    dependencies: [],
    dependent: [{ id: "fireBall" }, { id: "fireWall" }, ],
    element: null
  },
  {
    id: "fireBall",
    level: 0,
    dependencies: [{ id: "fireBolt", minLevel: 3 }],
    dependent: [{ id: "fireWall" }, ],
    element: null
  },
  {
    id: "fireWall",
    level: 0,
    dependencies: [{ id: "fireBolt", minLevel: 3 }, { id: "fireBall", minLevel: 4 }],
    element: null
  },
  {
    id: "coldBolt",
    level: 0,
    dependencies: [],
    dependent: [{ id: "frostDiver" }, { id: "iceWall" },],
    element: null
  },
  {
    id: "frostDiver",
    level: 0,
    dependencies: [{ id: "coldBolt", minLevel: 3 }],
    dependent: [{ id: "iceWall" }, ],
    element: null
  },
  {
    id: "iceWall",
    level: 0,
    dependencies: [{ id: "coldBolt", minLevel: 3 }, { id: "frostDiver", minLevel: 4 }],
    dependent: [],
    element: null
  },
  {
    id: "lightningBolt",
    level: 0,
    dependencies: [],
    dependent: [{ id: "thunderstorm" }, ],
    element: null
  },
  {
    id: "thunderstorm",
    level: 0,
    dependencies: [{ id: "lightningBolt", minLevel: 3 }],
    dependent: [],
    element: null
  },
  {
    id: "earthSpike",
    level: 0,
    dependencies: [],
    dependent: [{ id: "stoneCurse" }, ],
    element: null
  },
  {
    id: "stoneCurse",
    level: 0,
    dependencies: [{ id: "earthSpike", minLevel: 3 }],
    dependent: [],
    element: null
  },
  {
    id: "soulStrike",
    level: 0,
    dependencies: [],
    dependent: [{ id: "napalmBeat" }, { id: "safetyWall" }],
    element: null
  },
  {
    id: "napalmBeat",
    level: 0,
    dependencies: [{ id: "soulStrike", minLevel: 3 }],
    dependent: [{ id: "safetyWall" }],
    element: null
  },
  {
    id: "safetyWall",
    level: 0,
    dependencies: [{ id: "soulStrike", minLevel: 6 }, { id: "napalmBeat", minLevel: 4 }],
    element: null
  },
  {
    id: "incSPRecovery",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null
  },
  {
    id: "sight",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null
  },
  {
    id: "advancedBook",
    level: 0,
    dependencies: [],
    dependent: [{ id: "frostWeapon" }, { id: "lightningWeapon" }, { id: "seismicWeapon" }, { id: "flameWeapon" }, { id: "deluge" }, { id: "whirlwind" }, { id: "sandstorm" }, { id: "volcano" }, { id: "castCancel" }, { id: "magicRod" }, { id: "spellBreaker" }, { id: "freeCast" }],
    element: null
  },
  {
    id: "frostWeapon",
    level: 0,
    dependencies: [{ id: "coldBolt", minLevel: 2 }, { id: "advancedBook", minLevel: 2 }],
    dependent: [{ id: "deluge" },],
    element: null
  },
  {
    id: "lightningWeapon",
    level: 0,
    dependencies: [{ id: "lightningBolt", minLevel: 2 }, { id: "advancedBook", minLevel: 2 }],
    dependent: [{ id: "whirlwind" }],
    element: null
  },
  {
    id: "seismicWeapon",
    level: 0,
    dependencies: [{ id: "earthSpike", minLevel: 2 }, { id: "advancedBook", minLevel: 2 }],
    dependent: [{ id: "sandstorm" }],
    element: null
  },
  {
    id: "flameWeapon",
    level: 0,
    dependencies: [{ id: "fireBolt", minLevel: 2 }, { id: "advancedBook", minLevel: 2 }],
    dependent: [{ id: "volcano" }],
    element: null
  },
  {
    id: "deluge",
    level: 0,
    dependencies: [{ id: "frostWeapon", minLevel: 1 }, { id: "advancedBook", minLevel: 2 }, { id: "coldBolt", minLevel: 2 }],
    dependent: [],
    element: null
  },
  {
    id: "whirlwind",
    level: 0,
    dependencies: [{ id: "lightningWeapon", minLevel: 1 }, { id: "advancedBook", minLevel: 2 }, { id: "lightningBolt", minLevel: 2 }],
    dependent: [],
    element: null
  },
  {
    id: "sandstorm",
    level: 0,
    dependencies: [{ id: "seismicWeapon", minLevel: 1 }, { id: "advancedBook", minLevel: 2 }, { id: "earthSpike", minLevel: 2 }],
    dependent: [],
    element: null
  },
  {
    id: "volcano",
    level: 0,
    dependencies: [{ id: "flameWeapon", minLevel: 1 }, { id: "advancedBook", minLevel: 2 }, { id: "fireBolt", minLevel: 2 }],
    dependent: [],
    element: null
  },
  {
    id: "castCancel",
    level: 0,
    dependencies: [{ id: "advancedBook", minLevel: 1 }],
    dependent: [{ id: "freeCast" }],
    element: null
  },
  {
    id: "dispell",
    level: 0,
    dependencies: [{ id: "spellBreaker", minLevel: 2 }],
    dependent: [],
    element: null
  },
  {
    id: "magicRod",
    level: 0,
    dependencies: [{ id: "advancedBook", minLevel: 3 }],
    dependent: [{ id: "spellBreaker" }],
    element: null
  },
  {
    id: "spellBreaker",
    level: 0,
    dependencies: [{ id: "advancedBook", minLevel: 3 }, { id: "magicRod", minLevel: 0 }],
    dependent: [],
    element: null
  },
  {
    id: "freeCast",
    level: 0,
    dependencies: [{ id: "advancedBook", minLevel: 1 }, { id: "castCancel", minLevel: 0 }],
    dependent: [],
    element: null
  },
  {
    id: "spellwish",
    level: 0,
    dependencies: [{ id: "advancedBook", minLevel: 1 }, { id: "castCancel", minLevel: 0 }, { id: "freeCast", minLevel: 3 }],
    dependent: [],
    element: null
  },
  {
    id: "scrollbending",
    level: 0,
    dependencies: [
      { id: "advancedBook", minLevel: 1 }, 
      { id: "castCancel", minLevel: 0 }, 
      { id: "freeCast", minLevel: 3 
    }],
    dependent: [],
    element: null
  },
];




/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */