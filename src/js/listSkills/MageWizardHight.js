/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import mysticalAmplification from '../../img/icon_hwz/icon_hwz_2.png';
import soulDrain from '../../img/icon_hwz/icon_hwz_1.png';
import napalmVulcan from '../../img/icon_hwz/icon_hwz_3.png';

// skills Wizard Hight

export const skillsWizardHight = [
  {  
    id: "mysticalAmplification",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Mystical Amplification",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Amplifies MATK for 60 seconds.
[Lv 1]: MATK +5%,
[Lv 2]: MATK +10%,
[Lv 3]: MATK +15%,
[Lv 4]: MATK +20%,
[Lv 5]: MATK +25%,
[Lv 6]: MATK +30%,
[Lv 7]: MATK +35%,
[Lv 8]: MATK +40%,
[Lv 9]: MATK +45%,
[Lv 10]: MATK +50%`,
    img: mysticalAmplification,
  },
  {
    id: "napalmVulcan",
    level: 0,
    dependencies: [{ id: "napalmBeat", minLevel: 4 }, { id: "soulStrike", minLevel: 3 }],
    dependent: [],
    element: null,
    skillName: "Napalm Vulcan",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Napalm Beat Lv: 5
Description: Unleashes a barrage of Napalm Beat, dealing Ghost Property Magic Damage to all enemies in a 7x7 area. Has a chance to inflict Curse. Damage is based on Napalm Beat's power.
[Lv 1]: 1 Hit, Curse chance: 5%,
[Lv 2]: 2 Hits, Curse chance: 10%,
[Lv 3]: 3 Hits, Curse chance: 15%,
[Lv 4]: 4 Hits, Curse chance: 20%,
[Lv 5]: 5 Hits, Curse chance: 25%`,
    img: napalmVulcan,
  },
  {
    id: "soulDrain",
    level: 0,
    dependencies: [{ id: "increaseSPRecovery", minLevel: 4 }, { id: "soulStrike", minLevel: 6 }],
    dependent: [],
    element: null,
    skillName: "Soul Drain",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Magical
Requirement: Increase SP Recovery Lv: 5, Soul Strike Lv: 7
Description: Increases MaxSP. Whenever you defeat an enemy with magical or physical attack, you will gain certain amount of SP depend on monster's level.
[Lv 1]: MaxSP +2%,
[Lv 2]: MaxSP +4%,
[Lv 3]: MaxSP +6%,
[Lv 4]: MaxSP +8%,
[Lv 5]: MaxSP +10%,
[Lv 6]: MaxSP +12%,
[Lv 7]: MaxSP +14%,
[Lv 8]: MaxSP +16%,
[Lv 9]: MaxSP +18%,
[Lv 10]: MaxSP +20%`,
    img: soulDrain,
  },
];


/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */