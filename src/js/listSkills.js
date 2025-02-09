/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

// skills mage

export const skillsWiz = [
  { // skills mage
    id: "fireBolt",
    level: 0,
    dependencies: [],
    dependent: [{ id: "fireBall" }, { id: "fireWall" }, { id: "sightrasher" }, { id: "meteorStorm" }, { id: "firePillar" }],
    element: null
  },
  {
    id: "fireBall",
    level: 0,
    dependencies: [{ id: "fireBolt", minLevel: 3 }],
    dependent: [{ id: "fireWall" }, { id: "sightrasher" }, { id: "meteorStorm" }, { id: "firePillar" }],
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
    dependent: [{ id: "frostDiver" }, { id: "iceWall" }, { id: "waterBall" }, { id: "stormGust" }, { id: "frostNova" }],
    element: null
  },
  {
    id: "frostDiver",
    level: 0,
    dependencies: [{ id: "coldBolt", minLevel: 3 }],
    dependent: [{ id: "iceWall" }, { id: "waterBall" }, { id: "stormGust" }, { id: "frostNova" }],
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
    dependent: [{ id: "thunderstorm" }, { id: "jupitelThunder" }, { id: "lordOfVermilion" }, { id: "electricalInduction" }],
    element: null
  },
  {
    id: "thunderstorm",
    level: 0,
    dependencies: [{ id: "lightningBolt", minLevel: 3 }],
    dependent: [{ id: "jupitelThunder" }, { id: "lordOfVermilion" }, { id: "electricalInduction" }],
    element: null
  },
  {
    id: "earthSpike",
    level: 0,
    dependencies: [],
    dependent: [{ id: "stoneCurse" }, { id: "violentQuake" }, { id: "quagmire" }, { id: "heavensDrive" }],
    element: null
  },
  {
    id: "stoneCurse",
    level: 0,
    dependencies: [{ id: "earthSpike", minLevel: 3 }],
    dependent: [{ id: "violentQuake" }, { id: "quagmire" }, { id: "heavensDrive" }],
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
  { // skills wizard
    id: "sightrasher",
    level: 0,
    dependencies: [{ id: "fireBolt", minLevel: 3 }, { id: "fireBall", minLevel: 2 }],
    dependent: [{ id: "meteorStorm" }, { id: "firePillar" }],
    element: null
  },
  {
    id: "meteorStorm",
    level: 0,
    dependencies: [{ id: "sightrasher", minLevel: 2 }, { id: "fireBolt", minLevel: 3 }, { id: "fireBall", minLevel: 2 }],
    dependent: [{ id: "firePillar" }],
    element: null
  },
  {
    id: "firePillar",
    level: 0,
    dependencies: [
      { id: "meteorStorm", minLevel: 6 },
      { id: "sightrasher", minLevel: 2 },
      { id: "fireBolt", minLevel: 3 },
      { id: "fireBall", minLevel: 2 }
    ],
    dependent: [],
    element: null
  },
  {
    id: "waterBall",
    level: 0,
    dependencies: [{ id: "frostDiver", minLevel: 2 }, { id: "coldBolt", minLevel: 3 }],
    dependent: [{ id: "stormGust" }, { id: "frostNova" }],
    element: null
  },
  {
    id: "stormGust",
    level: 0,
    dependencies: [{ id: "waterBall", minLevel: 2 }, { id: "frostDiver", minLevel: 2 }, { id: "coldBolt", minLevel: 3 }],
    dependent: [{ id: "frostNova" }],
    element: null
  },
  {
    id: "frostNova",
    level: 0,
    dependencies: [{ id: "stormGust", minLevel: 6 }, { id: "waterBall", minLevel: 2 }, { id: "frostDiver", minLevel: 2 }, { id: "coldBolt", minLevel: 3 }],
    dependent: [],
    element: null
  },
  {
    id: "jupitelThunder",
    level: 0,
    dependencies: [{ id: "thunderstorm", minLevel: 2 }, { id: "lightningBolt", minLevel: 3 }],
    dependent: [{ id: "lordOfVermilion" }, { id: "electricalInduction" }],
    element: null
  },
  {
    id: "lordOfVermilion",
    level: 0,
    dependencies: [{ id: "jupitelThunder", minLevel: 2 }, { id: "thunderstorm", minLevel: 2 }, { id: "lightningBolt", minLevel: 3 }],
    dependent: [{ id: "electricalInduction" }],
    element: null
  },
  {
    id: "electricalInduction",
    level: 0,
    dependencies: [{ id: "lordOfVermilion", minLevel: 6 }, { id: "jupitelThunder", minLevel: 2 }, { id: "thunderstorm", minLevel: 2 }, { id: "lightningBolt", minLevel: 3 }],
    dependent: [],
    element: null
  },
  {
    id: "heavensDrive",
    level: 0,
    dependencies: [{ id: "stoneCurse", minLevel: 2 }, { id: "earthSpike", minLevel: 3 }],
    dependent: [{ id: "violentQuake" }, { id: "quagmire" }],
    element: null
  },
  {
    id: "violentQuake",
    level: 0,
    dependencies: [{ id: "heavensDrive", minLevel: 2 }, { id: "stoneCurse", minLevel: 2 }, { id: "earthSpike", minLevel: 3 }],
    dependent: [{ id: "quagmire" }],
    element: null
  },
  {
    id: "quagmire",
    level: 0,
    dependencies: [{ id: "violentQuake", minLevel: 6 }, { id: "heavensDrive", minLevel: 2 }, { id: "stoneCurse", minLevel: 2 }, { id: "earthSpike", minLevel: 3 }],
    dependent: [],
    element: null
  },
  {
    id: "gemmancy",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null
  },
  {  // skills High Wizard
    id: "mysticalAmplification",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null
  },
  {
    id: "napalmVulcan",
    level: 0,
    dependencies: [{ id: "napalmBeat", minLevel: 4 }, { id: "soulStrike", minLevel: 3 }],
    dependent: [],
    element: null
  },
  {
    id: "soulDrain",
    level: 0,
    dependencies: [{ id: "incSPRecovery", minLevel: 4 }, { id: "soulStrike", minLevel: 6 }],
    dependent: [],
    element: null
  },
];


/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */