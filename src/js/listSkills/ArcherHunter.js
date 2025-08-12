/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import ankleSnare from '../../img/icon_hnt/icon_hnt_1.png'; 
import blastMine from '../../img/icon_hnt/icon_hnt_2.png'; 
import blitzBeat from '../../img/icon_hnt/icon_hnt_3.png'; 
import beastBane from '../../img/icon_hnt/icon_hnt_4.png'; 
import claymoreTrap from '../../img/icon_hnt/icon_hnt_5.png'; 
import detect from '../../img/icon_hnt/icon_hnt_6.png'; 
import falconryMastery from '../../img/icon_hnt/icon_hnt_7.png'; 
import flasher from '../../img/icon_hnt/icon_hnt_8.png'; 
import glacialTrap from '../../img/icon_hnt/icon_hnt_9.png'; 
import landMine from '../../img/icon_hnt/icon_hnt_10.png'; 
import removeTrap from '../../img/icon_hnt/icon_hnt_11.png'; 
import skidTrap from '../../img/icon_hnt/icon_hnt_12.png'; 
import shockwaveTrap from '../../img/icon_hnt/icon_hnt_13.png'; 
import sandman from '../../img/icon_hnt/icon_hnt_14.png'; 
import springTrap from '../../img/icon_hnt/icon_hnt_15.png'; 
import steelCrow from '../../img/icon_hnt/icon_hnt_16.png'; 
import trapResearch from '../../img/icon_hnt/icon_hnt_18.png'; 


// список скилов Hunter
export const skillsHunter = [ 
  {
    id: "falconryMastery",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "steelCrow" },
      { id: "beastBane" },
      { id: "blitzBeat" },
      { id: "detect" },
      { id: "springTrap" },
    ],
    element: null,
    skillName: "Falconry Mastery",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Passive
Description: Grants the ability to command a Falcon.
Rental with: Falcon Breeder

*** Old note: ***
Description: Master the art of Falcon command. Increasing the chance to auto-cast Blitz Beat. Falcon Breeder.
[Lv 1]: Auto Blitz chance +2%,
[Lv 2]: Auto Blitz chance +4%,
[Lv 3]: Auto Blitz chance +6%,
[Lv 4]: Auto Blitz chance +8%,
[Lv 5]: Auto Blitz chance +10%`,
    img: falconryMastery,
  }, 
  {
    id: "steelCrow",
    level: 0,
    dependencies: [
      { id: "falconryMastery", minLevel: 1 },
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
Description: Increases the damage of Blitz
Beat and Falcon Assault skills.
These skills also start ignoring part of the target's M.DEF.
[Lv. 1]: Damage +1%, MDEF -1% 
[Lv. 2]: Damage +2%, MDEF -2%
[Lv. 3]: Damage +3%, MDEF -3% 
[Lv. 4]: Damage +4%, MDEF -4% 
[Lv. 5]: Damage +5%, MDEF -5% 
[Lv. 6]: Damage +6%, MDEF -6% 
[Lv. 7]: Damage +7%, MDEF -7% 
[Lv. 8]: Damage +8%, MDEF -8% 
[Lv. 9]: Damage +9%, MDEF -9% 
[Lv.10]: Damage +10%, MDEF -10%`,
    img: steelCrow,
  },
  {
    id: "beastBane",
    level: 0,
    dependencies: [
      { id: "falconryMastery", minLevel: 1 },
    ],
    dependent: [],
    element: null,
    skillName: "Beast Bane",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: Falconry Mastery Lv: 1
Description: Boosts the DMG of Falcon Skills.
Also increases Mastery ATK against Brute
and Insect monsters.
[Lv. 1]: Falcon skills DMG: +1% Mastery ATK +4
[Lv. 2]: Falcon skills DMG: +2% Mastery ATK +8
[Lv. 3]: Falcon skills DMG: +3% Mastery ATK +12
[Lv. 4]: Falcon skills DMG: +4% Mastery ATK +16
[Lv. 5]: Falcon skills DMG: +5% Mastery ATK +20
[Lv. 6]: Falcon skills DMG: +6% Mastery ATK +24
[Lv. 7]: Falcon skills DMG: +7% Mastery ATK +28
[Lv. 8]: Falcon skills DMG: +8% Mastery ATK +32
[Lv. 9]: Falcon skills DMG: +9% Mastery ATK +36
[Lv.10]: Falcon skills DMG: +10% Mastery ATK +40`,
    img: beastBane,
  },
  {
    id: "blitzBeat",
    level: 0,
    dependencies: [
      { id: "falconryMastery", minLevel: 1 },
    ],
    dependent: [
      { id: "falconAssault" },
    ],
    element: null,
    skillName: "Blitz Beat",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical 
Target: Enemy
Element: Neutral
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay 0.14s 
Cooldown: A.Delay + 0.365
Range: 12
Hits: 6
Requirement: Falconry Mastery Lv: 1
Description: Deals M.DMG to enemies within a 3x3 AoE around the target, scaling with Base Level.
Has a chance to auto-cast on basic attacks, scaling with the weapon's stats and the learned level of Falconry Mastery.
When this skill is auto-cast, it only targets a single enemy.
The auto-cast chance doubles while wielding a Dagger or bare handed.
VCT scales with skill level.
[Lv. 1]: VCT: 0.75s. SP Cost: 9
[Lv. 2]: VCT: 0.80s. SP Cost: 11
[Lv. 3]: VCT: 0.85s. SP Cost: 13 
[Lv. 4]: VCT: 0.90s. SP Cost: 15 
[Lv. 5]: VCT: 0.95s. SP Cost: 17 
[Lv. 6]: VCT: 1.00s. SP Cost: 19 
[Lv. 7]: VCT: 1.05s. SP Cost: 21 
[Lv. 8]: VCT: 1.10s. SP Cost: 23 
[Lv. 9]: VCT: 1.15s. SP Cost: 25 
[Lv.10]: VCT: 1.20s. SP Cost: 27
Formula: MATK (%): 100 + (Skill Lv x 50) + (Base Lv x 3) 
 Auto-cast chance: (LUK / 3) + (2 x Falconry Mastery Lv)

`,
    img: blitzBeat,
  },
  {
    id: "detect",
    level: 0,
    dependencies: [
      { id: "falconryMastery", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Detect",
    maxLevel: 4,
    inform: `Max Lv: 4
Skill Form: Active
Type: Supportive 
Target: Ground
After Cast Delay: A.Delay - 0.14s 
Cooldown: A.Delay
SP Cost: 8
Requirement: Falconry Mastery Lv: 5
Description: Reveals Invisible entities within a 7x7 AoE around the targeted location. Requires a Falcon.
[Lv. 1]: Range: 6 cells
[Lv. 2]: Range: 7 cells
[Lv. 3]: Range: 8 cells 
[Lv. 4]: Range: 9 cells`,
    img: detect,
  },
  {
    id: "springTrap",
    level: 0,
    dependencies: [
      { id: "falconryMastery", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Spring Trap",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive
Target: Trap
After Cast Delay: A.Delay 0.44s 
Cooldown: A.Delay
SP Cost: 10
Requirement: Falconry Mastery Lv: 3
Description: Removes a targeted trap. Requires a Falcon.
[Lv. 1]: Range: 5 cells
[Lv. 2]: Range: 6 cells
[Lv. 3]: Range: 7 cells
[Lv. 4]: Range: 8 cells 
[Lv. 5]: Range: 9 cells`,
    img: springTrap,
  },
  {
    id: "blastMine",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 1 },
      { id: "landMine", minLevel: 1 },
    ],
    dependent: [
      { id: "detonator" },      
      { id: "claymoreTrap" },      
      { id: "glacialTrap" },      
      { id: "shockwaveTrap" },      
    ],
    element: null,
    skillName: "Blast Mine",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active 
Type: Offensive 
Target: Ground
Element: Wind
Fixed Cast Time: 1s
After Cast Delay: A.Delay 0.34s
Cooldown: 0.50s
Range: 4 Hits: 1
SP Cost: 15
Requirement: Trap Research Lv: 1, Land Mine Lv: 1
Description: Sets a trap at the targeted location. When triggered, deals P.DMG to enemies within a 5x5 AoE, scaling with Max SP, Base Level and the learned level of Trap Research. Also reduces their Wind property damage resistance by 5% for 10s.
Lasts 90s on the ground and can be pushed back 3 cells by attacks.
Ignores FLEE, Auto Guard, Parry and Weapon Blocking.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: ATK 100%, Trap HP: 5 
[Lv. 2]: ATK 200%, Trap HP: 10
[Lv. 3]: ATK 300%, Trap HP: 15 
[Lv. 4]: ATK 400%, Trap HP: 20 
[Lv. 5]: ATK 500%, Trap HP: 25
Formula: ATK%: (Skill Lv x 100) + (Base Lv x 6) + (Trap Research Lv x 10) + (Max SP / 4) `,
    img: blastMine,
  },
  {
    id: "claymoreTrap",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 1 },
      { id: "landMine", minLevel: 3 },
      { id: "blastMine", minLevel: 2 },
      { id: "glacialTrap", minLevel: 1 },
    ],
    dependent: [
      { id: "detonator" },
      { id: "shockwaveTrap" },
    ],
    element: null,
    skillName: "Claymore Trap",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Offensive
Target: Ground
Element: Fire
Fixed Cast Time: 1s
After Cast Delay: A.Delay 0.345
Cooldown: 0.50s
Range: 4
Hits: 1
SP Cost: 15
Requirement: Trap Research Lv: 1, Land Mine Lv: 3, Blast Mine Lv: 2, Glacial Trap Lv: 1
Description: Sets a trap at the targeted location. When triggered, deals P.DMG to enemies within a 5x5 AoE, scaling with Max SP, Base Level and the learned level of Trap Research. Also reduces their Fire property damage resistance by 5% for 10s.
Lasts 90s on the ground and can be pushed back 3 cells by attacks.
Ignores FLEE, Auto Guard, Parry and Weapon Blocking.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: ATK 100%, Trap HP: 5 
[Lv. 2]: ATK 200%, Trap HP: 10 
[Lv. 3]: ATK 300%, Trap HP: 15 
[Lv. 4]: ATK 400%, Trap HP: 20 
[Lv. 5]: ATK 500%, Trap HP: 25
Formula: ATK%: (Skill Lv x 100) + (Base Lv x 6) + (Trap Research Lv x 10) + (Max SP / 4) `,
    img: claymoreTrap,
  },
  {
    id: "ankleSnare",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 1 },
    ],
    dependent: [
      { id: "detonator" },
      { id: "flasher" },
      { id: "sandman" },
      { id: "shockwaveTrap" },
    ],
    element: null,
    skillName: "Ankle Snare",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Ground
Fixed Cast Time: 1s
After Cast Delay: A.Delay - 0.44s
Cooldown: 0.50s
Range: 4
SP Cost: 12
Requirement: Trap Research Lv: 1
Description: Sets a trap at the targeted location that lasts 20s. When triggered, has a chance to inflict Immobilized for 10s.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: Immobilization Chance: 10% Trap HP: 5
[Lv. 2]: Immobilization Chance: 20% Trap HP: 10
[Lv. 3]: Immobilization Chance: 30% Trap HP: 15
[Lv. 4]: Immobilization Chance: 40% Trap HP: 20
[Lv. 5]: Immobilization Chance: 50% Trap HP: 25`,
    img: ankleSnare,
  },
  {
    id: "flasher",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 1 },
      { id: "skidTrap", minLevel: 2 },
      { id: "ankleSnare", minLevel: 1 },
    ],
    dependent: [
      { id: "detonator" },
      { id: "sandman" },
      { id: "shockwaveTrap" },
    ],
    element: null,
    skillName: "Flasher",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Ground
Fixed Cast Time: 1s
After Cast Delay: A.Delay - 0.44s
Cooldown: 0.50s
Range: 4
SP Cost: 12
Requirement: Trap Research Lv: 1, Skid Trap Lv: 2, Ankle Snare Lv: 1
Description: Sets a trap at the targeted location that lasts for 20s. When triggered, has a chance to inflict Blind on enemies within a 5x5 AoE for 10s.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: Trap HP: 5. Blind Chance: 10%
[Lv. 2]: Trap HP: 10. Blind Chance: 20% 
[Lv. 3]: Trap HP: 15. Blind Chance: 30% 
[Lv. 4]: Trap HP: 20. Blind Chance: 40% 
[Lv. 5]: Trap HP: 25. Blind Chance: 50%`,
    img: flasher,
  },
  {
    id: "glacialTrap",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 1 },
      { id: "landMine", minLevel: 2 },
      { id: "blastMine", minLevel: 1 },
    ],
    dependent: [
      { id: "detonator" },
      { id: "claymoreTrap" },
      { id: "shockwaveTrap" },
    ],
    element: null,
    skillName: "Glacial Trap",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Offensive
Target: Ground
Element: Water
Fixed Cast Time: 1s
After Cast Delay: A.Delay 0.34s
Cooldown: 0.50s
Range: 4
Hits: 1
SP Cost: 15
Requirement: Trap Research Lv: 1, Land Mine Lv: 2, Blast Mine Lv: 1
Description: Sets a trap at the targeted location. When triggered, deals P.DMG to enemies within a 5x5 AoE, scaling with Max SP, Base Level and the learned level of Trap Research. Also reduces their Water property damage resistance by 5% for 10s.
Lasts 90s on the ground and can be pushed back 3 cells by attacks.
Ignores FLEE, Auto Guard, Parry and Weapon Blocking.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: ATK 100%, Trap HP: 5 
[Lv. 2]: ATK 200%, Trap HP: 10
[Lv. 3]: ATK 300%, Trap HP: 15 
[Lv. 4]: ATK 400%, Trap HP: 20 
[Lv. 5]: ATK 500%, Trap HP: 25
Formula: ATK%: (Skill Lv x 100) + (Base Lv x 6) + (Trap Research Lv x 10) + (Max SP / 4) `,
    img: glacialTrap,
  },
  {
    id: "landMine",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 1 },
    ],
    dependent: [
      { id: "detonator" },
      { id: "blastMine" },
      { id: "claymoreTrap" },
      { id: "glacialTrap" },
      { id: "shockwaveTrap" },
    ],
    element: null,
    skillName: "Land Mine",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Offensive 
Target: Ground
Element: Earth
Fixed Cast Time: 1s
After Cast Delay: A.Delay 0.34s
Cooldown: 0.50s
Range: 4
Hits: 1
SP Cost: 15
Requirement: Trap Research Lv: 1
Description: Sets a trap at the targeted location. When triggered, deals P.DMG to enemies within a 5x5 AoE, scaling with Max SP, Base Level and the learned level of Trap Research. Also reduces their Earth property damage resistance by 5% for 10s.
Lasts 90s on the ground and can be pushed back 3 cells by attacks.
Ignores FLEE, Auto Guard, Parry and Weapon Blocking.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: ATK 100%, Trap HP: 5 
[Lv. 2]: ATK 200%, Trap HP: 10
[Lv. 3]: ATK 300%, Trap HP: 15 
[Lv. 4]: ATK 400%, Trap HP: 20 
[Lv. 5]: ATK 500%, Trap HP: 25
Formula: ATK%: (Skill Lv x 100) + (Base Lv x 6) + (Trap Research Lv x 10) + (Max SP / 4) `,
    img: landMine,
  },
  {
    id: "removeTrap",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Remove Trap",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Supportive 
Target: Trap
After Cast Delay: 0.60s
Range: 2
SP Cost: 5
Requirement: Trap Research Lv: 5
Description: Removes the targeted trap and returns it to the inventory.`,
    img: removeTrap,
  },
  {
    id: "sandman",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 1 },
      { id: "skidTrap", minLevel: 3 },
      { id: "ankleSnare", minLevel: 2 },
      { id: "flasher", minLevel: 1 },
    ],
    dependent: [
      { id: "detonator" },
      { id: "shockwaveTrap" },
    ],
    element: null,
    skillName: "Sandman",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Ground
Fixed Cast Time: 1s
After Cast Delay: A.Delay 0.445
Cooldown: 0.50s
Range: 4
SP Cost: 12
Requirement: Trap Research Lv: 1, Skid Trap Lv: 3, Ankle Snare Lv: 2, Flasher Lv: 1
Description: Sets a trap at the targeted location that lasts for 20s. When triggered, has a chance to inflict Sleep on enemies within a 5x5 AoE for 10s.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: Trap HP: 5. Sleep Chance: 10%
[Lv. 2]: Trap HP: 10. Sleep Chance: 20% 
[Lv. 3]: Trap HP: 15. Sleep Chance: 30% 
[Lv. 4]: Trap HP: 20. Sleep Chance: 40% 
[Lv. 5]: Trap HP: 25. Sleep Chance: 50%`,
    img: sandman,
  },
  {
    id: "shockwaveTrap",
    level: 0,
    dependencies: [
      { id: "landMine", minLevel: 4 },
      { id: "skidTrap", minLevel: 4 },
      { id: "blastMine", minLevel: 3 },
      { id: "ankleSnare", minLevel: 3 },
      { id: "glacialTrap", minLevel: 2 },
      { id: "flasher", minLevel: 2 },
      { id: "claymoreTrap", minLevel: 1 },
      { id: "sandman", minLevel: 1 },
    ],
    dependent: [],
    element: null,
    skillName: "Shockwave Trap",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Offensive
Target: Ground
Element: Elementless
Fixed Cast Time: 1s
After Cast Delay: A.Delay 0.34s
Cooldown: 0.50s
Range: 4
SP Cost: 45
Requirement: Land Mine Lv: 4, Skid Trap Lv: 4, Blast Mine Lv: 3, Ankle Snare Lv: 3, Glacial Trap Lv: 2, Flasher Lv: 2, Claymore Trap Lv: 1, Sandman Lv: 1
Description: Sets a trap at the targeted location that lasts for 20s. When triggered, deals P.DMG to enemies within a 5x5 AoE, scaling with Max SP, Base Level and the learned level of Trap Research. Also reduces their Neutral property damage resistance by 5% for 10s.
Has a chance to inflict Shockwave for 10s. While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: ATK 100%, Trap HP: 5 
[Lv. 2]: ATK 200%, Trap HP: 10
[Lv. 3]: ATK 300%, Trap HP: 15 
[Lv. 4]: ATK 400%, Trap HP: 20 
[Lv. 5]: ATK 500%, Trap HP: 25
Formula: ATK%: (Skill Lv x 100) + (Base Lv x 6) + (Trap Research Lv x 10) + (Max SP / 4) 
Burned SP (%): 3 + Skill Lv
Shockwave Damage: (Burned SP x 2) + (Trap Research Lv x 50) `,
    img: shockwaveTrap,
  },
  {
    id: "skidTrap",
    level: 0,
    dependencies: [
      { id: "trapResearch", minLevel: 1 },
    ],
    dependent: [
      { id: "detonator" },
      { id: "flasher" },
      { id: "sandman" },
      { id: "shockwaveTrap" },
    ],
    element: null,
    skillName: "Skid Trap",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Ground
Fixed Cast Time: 1s
After Cast Delay: A.Delay 0.44s
Cooldown: 0.50s
Range: 4
SP Cost: 10
Requirement: Trap Research Lv: 1
Description: Sets a trap at the targeted location that lasts for 20s. When triggered, Knocks the enemy back 7 cells.
While wielding a Dagger or bare handed, doubles the skill's Range and halves its FCT and CD.
Catalyst: 1x Trap
[Lv. 1]: Trap HP: 5
[Lv. 2]: Trap HP: 10
[Lv. 3]: Trap HP: 15
[Lv. 4]: Trap HP: 20
[Lv. 5]: Trap HP: 25`,
    img: skidTrap,
  },
  {
    id: "trapResearch",
    level: 0,
    dependencies: [
    ],
    dependent: [
      { id: "blastMine" },
      { id: "claymoreTrap" },
      { id: "ankleSnare" },
      { id: "flasher" },
      { id: "glacialTrap" },
      { id: "landMine" },
      { id: "removeTrap" },
      { id: "sandman" },
      { id: "skidTrap" },
    ],
    element: null,
    skillName: "Trap Research",
    maxLevel: 5,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Description: Increases the duration and the property resistance drop of Offensive traps. Also boosts and the NSE chance of Supportive traps.
Also increases INT.
[Lv. 1]: INT +1. NSE Chance +5% Duration +10s. Resistance Drop +1% 
[Lv. 2]: INT +2. NSE Chance +10% Duration +20s. Resistance Drop +2% 
[Lv. 3]: INT +3. NSE Chance +15% Duration +30s. Resistance Drop +3% 
[Lv. 4]: INT +4. NSE Chance +20% Duration +40s. Resistance Drop +4% 
[Lv. 5]: INT +5. NSE Chance +25% Duration +50s. Resistance Drop +5% 
[Lv. 6]: INT +6. NSE Chance +30% Duration +60s. Resistance Drop +6%
[Lv. 7]: INT +7. NSE Chance +35% Duration +70s. Resistance Drop +7% 
[Lv. 8]: INT +8. NSE Chance +40% Duration +80s. Resistance Drop +8% 
[Lv. 9]: INT +9, NSE Chance +45% Duration +90s. Resistance Drop +9% 
[Lv.10]: INT +10. NSE Chance +50% Duration +100s. Resistance Drop +10%`,
    img: trapResearch,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
