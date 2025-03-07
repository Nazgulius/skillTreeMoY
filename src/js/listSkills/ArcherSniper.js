/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import trueSight from '../../img/icon_snp/icon_snp_1.png';
import falconAssault from '../../img/icon_snp/icon_snp_2.png';
import sharpShooting from '../../img/icon_snp/icon_snp_3.png';
import windWalk from '../../img/icon_snp/icon_snp_4.png';
import quickDraw from '../../img/icon_snp/icon_snp_5.png';
import detonator from '../../img/icon_snp/icon_snp_6.png';

// список скилов Sniper
export const skillsSniper = [  
  {
    id: "detonator",
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
    skillName: "Detonator",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Active
Type: Misc
Target: Ground
Range: 9
Requirement: Land Mine Lv: 4, Skid Trap Lv: 4, Blast Mine Lv: 3, Ankle Snare Lv: 3, Glacial Trap Lv: 2, Flasher Lv: 2, Claymore Trap Lv: 1, Sandman Lv: 1
Description: Instantly activates all traps within a 7x7 area. Traps triggered by this skill have their detonation area expanded to 7x7. This skill does not activate traps set by other players. Can activate the following traps: Glacial Trap, Blast Mine, Land Mine, Claymore Trap, Flasher, Sandman.`,
    img: detonator,
  },
  {
    id: "falconAssault",
    level: 0,
    dependencies: [
      { id: "steelCrow", minLevel: 6 },
      { id: "blitzBeat", minLevel: 7 },
    ],
    dependent: [],
    element: null,
    skillName: "Falcon Assault",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 12
Requirement: Steel Crow Lv: 6, Blitz Beat Lv: 7
Description: Command your falcon to execute a swift dive, delivering a physical attack that bypasses both defense and evasion on a single target. Falcon Assault has a chance to automatically trigger Blitz Beat. The damage is based on Blitz Beat's damage.
[Lv 1]: Blitz Beat Damage x [1.1 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 1% + one third of the Auto-Blitz Beat chance.
[Lv 2]: Blitz Beat Damage x [1.2 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 2% + one third of the Auto-Blitz Beat chance.
[Lv 3]: Blitz Beat Damage x [1.3 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 3% + one third of the Auto-Blitz Beat chance.
[Lv 4]: Blitz Beat Damage x [1.4 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 4% + one third of the Auto-Blitz Beat chance.
[Lv 5]: Blitz Beat Damage x [1.5 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 5% + one third of the Auto-Blitz Beat chance.
[Lv 6]: Blitz Beat Damage x [1.6 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 6% + one third of the Auto-Blitz Beat chance.
[Lv 7]: Blitz Beat Damage x [1.7 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 7% + one third of the Auto-Blitz Beat chance.
[Lv 8]: Blitz Beat Damage x [1.8 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 8% + one third of the Auto-Blitz Beat chance.
[Lv 9]: Blitz Beat Damage x [1.9 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 9% + one third of the Auto-Blitz Beat chance.
[Lv 10]: Blitz Beat Damage x [2 + 0.1 every 8 INT], Blitz Beat auto-trigger chance 10% + one third of the Auto-Blitz Beat chance.
New calculation:
Damage = ((Skill Lv × 10) + (Steel Crow Lv × 10) + Agi + (Dex ÷ 5) + (Luk ÷ 3) + (Matk × (Int / 80)) × BlitzBeat Hits) × ((Int / 80) + (Skill Lv × 0.1)).
Details: AfterCastActDelay set as ASPD + 220; CastTime varying between 410 and 1400; Fixed Cast Time: 600; Cooldown: 1500.
`,
    img: falconAssault,
  },
  {
    id: "quickDraw",
    level: 0,
    dependencies: [
      { id: "owlsEye", minLevel: 10 },
      { id: "vulturesEye", minLevel: 10 },
      { id: "improveConcentration", minLevel: 10 },
    ],
    dependent: [],
    element: null,
    skillName: "Quick Draw",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Owl's Eye Lv: 10, Vulture's Eye Lv: 10, Improve Concentration Lv: 10
Description: Enters the Quickdraw state, reducing your Flee Rate to increase your Attack Speed and Critical. Also provides a chance to unleash a second attack with basic attacks.
[Lv 1]: Flee -47%, Aspd +2%, Crit +2, Double Attack Chance 7%,
[Lv 2]: Flee -44%, Aspd +4%, Crit +4, Double Attack Chance 9%,
[Lv 3]: Flee -41%, Aspd +6%, Crit +6, Double Attack Chance 11%,
[Lv 4]: Flee -38%, Aspd +8%, Crit +8, Double Attack Chance 13%,
[Lv 5]: Flee -35%, Aspd +10%, Crit +10, Double Attack Chance 15%,
[Lv 6]: Flee -32%, Aspd +12%, Crit +12, Double Attack Chance 17%,
[Lv 7]: Flee -29%, Aspdt +14%, Crit +14, Double Attack Chance 19%,
[Lv 8]: Flee -26%, Aspd +16%, Crit +16, Double Attack Chance 21%,
[Lv 9]: Flee -23%, Aspd +18%, Crit +18, Double Attack Chance 23%,
[Lv 10]: Flee -20%, Aspd +20%, Crit +20, Double Attack Chance 25%`,
    img: quickDraw,
  },
  {
    id: "sharpShooting",
    level: 0,
    dependencies: [
      { id: "improveConcentration", minLevel: 10 },
      { id: "doubleStrafe", minLevel: 7 },
      { id: "chargeArrow", minLevel: 10 },
    ],
    dependent: [],
    element: null,
    skillName: "Sharp Shooting",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Improve Concentration Lv: 10, Double Strafe Lv: 7, Charge Arrow Lv: 10
Description: Fires a powerful arrow towards a target point, dealing heavy damage to all enemies in its path. Each Base Level above 80 increases the skill damage. Consumes: 1x Arrow.
[Lv 1]: Atk 210%,
[Lv 2]: Atk 320%,
[Lv 3]: Atk 430%,
[Lv 4]: Atk 540%,
[Lv 5]: Atk 650%,
[Lv 6]: Atk 760%,
[Lv 7]: Atk 870%,
[Lv 8]: Atk 980%,
[Lv 9]: Atk 1090%,
[Lv 10]: Atk 1200%
Details: AfterCastActDelay set as ASPD + 220; CastTime: 200 + (100 × Skill Lv); Fixed Cast Time: 500; Cooldown: 2000.`,
    img: sharpShooting,
  },
  {
    id: "trueSight",
    level: 0,
    dependencies: [
      { id: "owlsEye", minLevel: 10 },
      { id: "vulturesEye", minLevel: 10 },
      { id: "improveConcentration", minLevel: 10 },
    ],
    dependent: [],
    element: null,
    skillName: "True Sight",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Owl's Eye Lv: 10, Vulture's Eye Lv: 10, Improve Concentration Lv: 10
Description: Enters the True Sight state, reducing your attack speed to increase your hit rate , damage and Critical.
[Lv 1]: Aspd -47%, Hit +2%, Damage +7%, Crit +2,
[Lv 2]: Aspd -44%, Hit +4%, Damage +9%, Crit +4,
[Lv 3]: Aspd -41%, Hit +6%, Damage +11%, Crit +6,
[Lv 4]: Aspd -38%, Hit +8%, Damage +13%, Crit +8,
[Lv 5]: Aspd -35%, Hit +10%, Damage +15%, Crit +10,
[Lv 6]: Aspd -32%, Hit +12%, Damage +17%, Crit +12,
[Lv 7]: Aspd -29%, Hit +14%, Damage +19%, Crit +14,
[Lv 8]: Aspd -26%, Hit +16%, Damage +21%, Crit +16,
[Lv 9]: Aspd -23%, Hit +18%, Damage +23%, Crit +18,
[Lv 10]: Aspd -20%, Hit +20%, Damage +25%, Crit +20`,
    img: trueSight,
  },
  {
    id: "windWalk",
    level: 0,
    dependencies: [
      { id: "improveConcentration", minLevel: 9 },
    ],
    dependent: [],
    element: null,
    skillName: "Wind Walk",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Improve Concentration Lv: 9
Description: Increases Movement Speed and Flee Rate for you and party members for 210 seconds. Movement speed boosts from different skills do not stack; only the highest bonus applies. Skills that reduce Movement Speed, like Quagmire, cancel Wind Walk.
[Lv 1]: Move Speed +17%, Flee Rate +1%,
[Lv 2]: Move Speed +19%, Flee Rate +2%,
[Lv 3]: Move Speed +21%, Flee Rate +3%,
[Lv 4]: Move Speed +23%, Flee Rate +4%,
[Lv 5]: Move Speed +25%, Flee Rate +5%,
[Lv 6]: Move Speed +27%, Flee Rate +6%,
[Lv 7]: Move Speed +29%, Flee Rate +7%,
[Lv 8]: Move Speed +31%, Flee Rate +8%,
[Lv 9]: Move Speed +33%, Flee Rate +9%,
[Lv 10]: Move Speed +35%, Flee Rate +10%
New calculation: Bonus% = 5 + (Skill Lv × 2).
`,
    img: windWalk,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
