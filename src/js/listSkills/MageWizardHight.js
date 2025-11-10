/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import mysticalAmplification from '../../img/icon_hwz/icon_hwz_2.png';
import soulDrain from '../../img/icon_hwz/icon_hwz_1.png';
import napalmVulcan from '../../img/icon_hwz/icon_hwz_3.png';
import cataclys from '../../img/icon_wiz/icon_wiz_18.png';

// skills Wizard Hight

export const skillsWizardHight = [
  {  
    id: "mysticalAmplification",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Mystical Amplification",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Fixed Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: None
Description: Removes M.DMG Variance, ensuring maximum damage while active, but increases all skills' SP Cost by 30%,
Also increases B.MATK and Hard Magical Defense.
[Lv. 1]: B.MATK +10%, H.MDEF +10, SP Cost: 40 
[Lv. 2]: B.MATK +20%, H.MDEF +20, SP Cost: 50 
[Lv. 3]: B.MATK +30%, H.MDEF +30, SP Cost: 60 
[Lv. 4]: B.MATK +40%, H.MDEF +40, SP Cost: 70 
[Lv. 5]: B.MATK +50%, H.MDEF +50, SP Cost: 80`,
    img: mysticalAmplification,
  },
  {
    id: "napalmVulcan",
    level: 0,
    dependencies: [
      { id: "napalmBeat", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Napalm Vulcan",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Element: Ghost
Fixed Cast Time: 0.60s
After Cast Delay: 1s 
Cooldown: 2s
Range: 9
Requirement: Napalm Beat Lv: 5
Description: Deals M.DMG to enemies within a
7x7 AoE around the target, scaling with the learned level of Napalm Beat.
Has a chance to inflict Curse for 18s. VCT scales with skill level.
[Lv. 1]: VCT: 0.80s. Hits: 1. Chance: 5% SP Cost: 8 Passive Bonus: 7%
[Lv. 2]: VCT: 1.20s. Hits: 2. Chance: 10% SP Cost: 16 Passive Bonus: 9%
[Lv. 3]: VCT: 1.60s. Hits: 3. Chance: 15% SP Cost: 24 Passive Bonus: 11%
[Lv. 4]: VCT: 2.00s. Hits: 4. Chance: 20% SP Cost: 32 Passive Bonus: 13%
[Lv. 5]: VCT: 2.40s. Hits: 5. Chance: 25% SP Cost: 40 Passive Bonus: 15%
Formula: MATK (%): (100 + (Napalm Beat Lv x 20)) x Hits `,
    img: napalmVulcan,
  },
  {
    id: "soulDrain",
    level: 0,
    dependencies: [
      { id: "increaseSPRecovery", minLevel: 5 }, 
      { id: "soulStrike", minLevel: 7 },
    ],
    dependent: [],
    element: null,
    skillName: "Soul Drain",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Passive
Type: Magical
Requirement: Increase SP Recovery Lv: 5, Soul Strike Lv: 7
Description: Increases Max SP and drains SP from monsters when they are killed, scaling with their level.
[Lv. 1]: MaxSP +10%
[Lv. 2]: MaxSP +15%
[Lv. 3]: MaxSP +20% 
[Lv. 4]: MaxSP +25% 
[Lv. 5]: MaxSP +30%
Formula: SP Drain: (Target Lv x (95 + (Skill Lv x 30)) / 100 `,
    img: soulDrain,
  },
  {
    id: "cataclysm",
    level: 5,
    dependencies: [
      // { id: "increaseSPRecovery", minLevel: 5 },       
    ],
    dependent: [],
    element: null,
    skillName: "Cataclysm",
    maxLevel: 5,
    inform: `Max Level: 5
Skill Form: Active Type: Magical
Target: Enemy
Element: Flexible
Fixed Cast Time: 1.50s
After Cast Delay: 2s 
Cooldown: 8s
Range: 9
Hits: 4
Description: Consumes 4 elemental orbs to deal M.DMG to enemies within a 7x7 M.DMG. Each consumed orb triggers one hit, with the element corresponding to that orb's element. Casting or defeating enemies with Fire,
Water, Wind or Earth skills has a chance to summon an elemental orb for 180s, based on the element of the casted skill.
A maximum of 4 orbs can exist at once, with each orb increasing the damage of its matching element by 4% while active. Each orb's duration is tracked separately. VCT scales with skill level.
[Lv. 1]: MATK 800% x Hits, VCT: 5s Orb Chance: 6%, SP Cost: 60
[Lv. 2]: MATK 1100% x Hits. VCT: 6s Orb Chance: 7%, SP Cost: 75
[Lv. 3]: MATK 1400% x Hits. VCT: 7s Orb Chance: 8%, SP Cost: 90
[Lv. 4]: MATK 1700% x Hits. VCT: 8s Orb Chance: 9%, SP Cost: 105 
[Lv. 5]: MATK 2000% x Hits. VCT: 9s Orb Chance: 10%, SP Cost: 120
Formula: MATK (%): (500 + (Skill Lv x 300)) x Hits `,
    img: cataclys,
  },
];


/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */
