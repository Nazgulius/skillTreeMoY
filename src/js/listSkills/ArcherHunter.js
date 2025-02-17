/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка

// список скилов Hunter
export const skillsHunter = [ 
  {
    id: "falconryMastery",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "steelCrow" },
    ],
    element: null,
    skillName: "Falconry Mastery",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Passive
Type: Misc
Requirement: None
Description: Master the art of Falcon command. Increasing the chance to auto-cast Blitz Beat. Falcon Breeder.
[Lv 1]: Auto Blitz chance +2%,
[Lv 2]: Auto Blitz chance +4%,
[Lv 3]: Auto Blitz chance +6%,
[Lv 4]: Auto Blitz chance +8%,
[Lv 5]: Auto Blitz chance +10%`,
    img: skillImgNo,
  }, 
  {
    id: "steelCrow",
    level: 0,
    dependencies: [
      { id: "falconryMastery", minLevel: 0 },
    ],
    dependent: [
      { id: "falconAssault" },
    ],
    element: null,
    skillName: "Steel Crow",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: Falconry Mastery Lv: 1
Description: Amplify the might of your falcon attacks.
[Lv 1]: Damage: +10,
[Lv 2]: Damage: +20,
[Lv 3]: Damage: +30,
[Lv 4]: Damage: +40,
[Lv 5]: Damage: +50,
[Lv 6]: Damage: +60,
[Lv 7]: Damage: +70,
[Lv 8]: Damage: +80,
[Lv 9]: Damage: +90,
[Lv 10]: Damage: +100`,
    img: skillImgNo,
  },
  {
    id: "beastBane",
    level: 0,
    dependencies: [
      { id: "falconryMastery", minLevel: 0 },
    ],
    dependent: [],
    element: null,
    skillName: "Beast Bane",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: Falconry Mastery Lv: 1
Description: Harness the power of the falcon to deliver devastating strikes against Beast and Insect monsters. Mastery attack increases when accompanied by a falcon, enhancing the damage of your birds attacks.
[Lv 1]: Damage +4, Falcon skills damage +1%,
[Lv 2]: Damage +8, Falcon skills damage +2%,
[Lv 3]: Damage +12, Falcon skills damage +3%,
[Lv 4]: Damage +16, Falcon skills damage +4%,
[Lv 5]: Damage +20, Falcon skills damage +5%,
[Lv 6]: Damage +24, Falcon skills damage +6%,
[Lv 7]: Damage +28, Falcon skills damage +7%,
[Lv 8]: Damage +32, Falcon skills damage +8%,
[Lv 9]: Damage +36, Falcon skills damage +9%,
[Lv 10]: Damage +40, Falcon skills damage +10%`,
    img: skillImgNo,
  },
  {
    id: "blitzBeat",
    level: 0,
    dependencies: [
      { id: "falconryMastery", minLevel: 0 },
    ],
    dependent: [
      { id: "falconAssault" },
    ],
    element: null,
    skillName: "Blitz Beat",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 12
Requirement: Falconry Mastery Lv: 1
Description: Commands the Falcon to dive at a single target and strike repeatedly to inflict special ranged damage to all enemies in a [3*3] area around the target. Falcon damage increases with owners AGI, DEX, INT and MATK. For Bows: Every 3 LUK points, auto-cast chance is increased by 1%. For Daggers: Every 2 LUK points, auto-cast chance is increased by 1%.
[Lv 1]: Hits: 2,
[Lv 2]: Hits: 2,
[Lv 3]: Hits: 3,
[Lv 4]: Hits: 3,
[Lv 5]: Hits: 4,
[Lv 6]: Hits: 4,
[Lv 7]: Hits: 5,
[Lv 8]: Hits: 5,
[Lv 9]: Hits: 6,
[Lv 10]: Hits: 6`,
    img: skillImgNo,
  },
  {
    id: "detect",
    level: 0,
    dependencies: [
      { id: "falconryMastery", minLevel: 4 },
    ],
    dependent: [],
    element: null,
    skillName: "Detect",
    maxLevel: 4,
    inform: `Max Lv: 4
Skill Form: Active
Type: Misc
Target: Ground
Range: 6
Requirement: Falconry Mastery Lv: 5
Description: Commands a Falcon to detect hidden characters from a distance.
[Lv 1]: Range: 6 cells,
[Lv 2]: Range: 7 cells,
[Lv 3]: Range: 8 cells,
[Lv 4]: Range: 9 cells`,
    img: skillImgNo,
  },
  {
    id: "springTrap",
    level: 0,
    dependencies: [
      { id: "falconryMastery", minLevel: 2 },
    ],
    dependent: [],
    element: null,
    skillName: "Spring Trap",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Trap
Range: 5
Requirement: Falconry Mastery Lv: 3
Description: Commands Falcon to remove a set Trap from a distance.
[Lv 1]: Range: 5 cells,
[Lv 2]: Range: 6 cells,
[Lv 3]: Range: 7 cells,
[Lv 4]: Range: 8 cells,
[Lv 5]: Range: 9 cells`,
    img: skillImgNo,
  },
  {
    id: "blastMine",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 0 },
      { id: "landMine", minLevel: 0 },
    ],
    dependent: [
      { id: "detonator" },
    ],
    element: null,
    skillName: "Blast Mine",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1, Land Mine Lv: 1
Description: Deploys a trap that explodes when triggered, dealing piercing Wind damage to all enemies in a 5x5 area. Damage increases upon skill level, users base level, DEX and INT. Traps ignores accuracy checks and lasts for 90 seconds, and can be placed directly under enemies. It can be pushed 3 cells back with basic attacks. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5,
[Lv 2]: Trap HP: 10,
[Lv 3]: Trap HP: 15,
[Lv 4]: Trap HP: 20,
[Lv 5]: Trap HP: 25`,
    img: skillImgNo,
  },
  {
    id: "claymoreTrap",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 0 },
      { id: "landMine", minLevel: 2 },
      { id: "blastMine", minLevel: 1 },
      { id: "glacialTrap", minLevel: 0 },
    ],
    dependent: [
      { id: "detonator" },
    ],
    element: null,
    skillName: "Claymore Trap",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1, Land Mine Lv: 3, Blast Mine Lv: 2, Glacial Trap Lv: 1
Description: Deploys a trap that explodes when triggered, dealing piercing Fire damage to all enemies in a 5x5 area. Damage increases upon skill level, users base level, DEX and INT. Traps ignores accuracy checks and lasts for 90 seconds, and can be placed directly under enemies. It can be pushed 3 cells back with basic attacks. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5,
[Lv 2]: Trap HP: 10,
[Lv 3]: Trap HP: 15,
[Lv 4]: Trap HP: 20,
[Lv 5]: Trap HP: 25`,
    img: skillImgNo,
  },
  {
    id: "ankleSnare",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 0 },
    ],
    dependent: [
      { id: "detonator" },
    ],
    element: null,
    skillName: "Ankle Snare",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1
Description: Deploys trap at a targeted location that immobilizes any enemy that steps on it. The duration of immobilization decreases based on the targets AGI. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5, Duration: 28 sec,
[Lv 2]: Trap HP: 10, Duration: 56 sec,
[Lv 3]: Trap HP: 15, Duration: 84 sec,
[Lv 4]: Trap HP: 20, Duration: 112 sec,
[Lv 5]: Trap HP: 25, Duration: 140 sec`,
    img: skillImgNo,
  },
  {
    id: "flasher",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 0 },
      { id: "skidTrap", minLevel: 1 },
      { id: "ankleSnare", minLevel: 0 },
    ],
    dependent: [
      { id: "detonator" },
    ],
    element: null,
    skillName: "Flasher",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1, Skid Trap Lv: 2, Ankle Snare Lv: 1
Description: Deploys trap at a targeted location that releases a blinding flash when triggered, potentially causing all enemies within the area to become blind for 18 seconds. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5, Duration: 28 sec, Blind chance: 50%,
[Lv 2]: Trap HP: 10, Duration: 56 sec, Blind chance: 60%,
[Lv 3]: Trap HP: 15, Duration: 84 sec, Blind chance: 70%,
[Lv 4]: Trap HP: 20, Duration: 112 sec, Blind chance: 80%,
[Lv 5]: Trap HP: 25, Duration: 140 sec, Blind chance: 90%`,
    img: skillImgNo,
  },
  {
    id: "glacialTrap",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 0 },
      { id: "landMine", minLevel: 1 },
      { id: "blastMine", minLevel: 0 },
    ],
    dependent: [
      { id: "detonator" },
    ],
    element: null,
    skillName: "Glacial Trap",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1, Land Mine Lv: 2, Blast Mine Lv: 1
Description: Deploys a trap that explodes when triggered, dealing piercing Water damage to all enemies in a 5x5 area. Damage increases upon skill level, users base level, DEX and INT. Traps ignores accuracy checks and lasts for 90 seconds, and can be placed directly under enemies. It can be pushed 3 cells back with basic attacks. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5,
[Lv 2]: Trap HP: 10,
[Lv 3]: Trap HP: 15,
[Lv 4]: Trap HP: 20,
[Lv 5]: Trap HP: 25`,
    img: skillImgNo,
  },
  {
    id: "landMine",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 0 },
    ],
    dependent: [
      { id: "detonator" },
    ],
    element: null,
    skillName: "Land Mine",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1
Description: Deploys a trap that explodes when triggered, dealing piercing Earth damage to all enemies in a 5x5 area. Damage increases upon skill level, users base level, DEX and INT. Traps ignores accuracy checks and lasts for 90 seconds, and can be placed directly under enemies. It can be pushed 3 cells back with basic attacks. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5,
[Lv 2]: Trap HP: 10,
[Lv 3]: Trap HP: 15,
[Lv 4]: Trap HP: 20,
[Lv 5]: Trap HP: 25`,
    img: skillImgNo,
  },
  {
    id: "removeTrap",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 4 },
    ],
    dependent: [],
    element: null,
    skillName: "Remove Trap",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Misc
Target: Trap
Range: 2
Requirement: Trap Research Lv: 5
Description: Removes a trap that has been set on the ground, as well as regain that Trap.`,
    img: skillImgNo,
  },
  {
    id: "sandman",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 0 },
      { id: "skidTrap", minLevel: 2 },
      { id: "ankleSnare", minLevel: 1 },
      { id: "flasher", minLevel: 0 },
    ],
    dependent: [
      { id: "detonator" },
    ],
    element: null,
    skillName: "Sandman",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1, Skid Trap Lv: 3, Ankle Snare Lv: 2, Flasher Lv: 1
Description: Deploys trap at a targeted location that releases a sedative when triggered, potentially putting all enemies within the area to sleep for 18 seconds. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5, Duration: 28 sec, Sleep chance: 50%,
[Lv 2]: Trap HP: 10, Duration: 56 sec, Sleep chance: 60%,
[Lv 3]: Trap HP: 15, Duration: 84 sec, Sleep chance: 70%,
[Lv 4]: Trap HP: 20, Duration: 112 sec, Sleep chance: 80%,
[Lv 5]: Trap HP: 25, Duration: 140 sec, Sleep chance: 90%`,
    img: skillImgNo,
  },
  {
    id: "shockwaveTrap",
    level: 0,
    dependencies: [
      { id: "landMine", minLevel: 3 },
      { id: "skidTrap", minLevel: 3 },
      { id: "blastMine", minLevel: 2 },
      { id: "ankleSnare", minLevel: 2 },
      { id: "glacialTrap", minLevel: 1 },
      { id: "flasher", minLevel: 1 },
      { id: "claymoreTrap", minLevel: 0 },
      { id: "sandman", minLevel: 0 },
    ],
    dependent: [],
    element: null,
    skillName: "Shockwave Trap",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Ground
Range: 2
Requirement: Land Mine Lv: 4, Skid Trap Lv: 4, Blast Mine Lv: 3, Ankle Snare Lv: 3, Glacial Trap Lv: 2, Flasher Lv: 2, Claymore Trap Lv: 1, Sandman Lv: 1
Description: Deploys trap that releases a shockwave when triggered, drains the target's SP every 2 seconds for 20 seconds. Deals damage equal to double the SP burned. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5, Duration: 23 sec, SP Burn: 4%,
[Lv 2]: Trap HP: 10, Duration: 46 sec, SP Burn: 5%,
[Lv 3]: Trap HP: 15, Duration: 69 sec, SP Burn: 6%,
[Lv 4]: Trap HP: 20, Duration: 92 sec, SP Burn: 7%,
[Lv 5]: Trap HP: 25, Duration: 115 sec, SP Burn: 8%`,
    img: skillImgNo,
  },
  {
    id: "skidTrap",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 0 },
    ],
    dependent: [
      { id: "detonator" },
    ],
    element: null,
    skillName: "Skid Trap",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Ground
Range: 2
Requirement: Trap Research Lv: 1
Description: Deploys trap that causes any enemy that steps on it to slip and slide in a certain direction. Catalyst: 1x Trap.
[Lv 1]: Trap HP: 5, Duration: 28 sec, Knock Back: 6 cells,
[Lv 2]: Trap HP: 10, Duration: 56 sec, Knock Back: 7 cells,
[Lv 3]: Trap HP: 15, Duration: 84 sec, Knock Back: 8 cells,
[Lv 4]: Trap HP: 20, Duration: 112 sec, Knock Back: 9 cells,
[Lv 5]: Trap HP: 25, Duration: 140 sec, Knock Back: 10 cells`,
    img: skillImgNo,
  },
  {
    id: "trapResearch",
    level: 0,
    dependencies: [
      
    ],
    dependent: [
      
    ],
    element: null,
    skillName: "Trap Research",
    maxLevel: 5,
    inform: `Max Lv: 5
??????????`,
    img: skillImgNo,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */