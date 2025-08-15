/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import palmStrike from '../../img/icon_chp/icon_chp_1.gif'; 
// import tigerFist from '../../img/icon_chp/icon_chp_2.gif'; 
// import chainCrushCombo from '../../img/icon_chp/icon_chp_3.gif'; 
import spiritSpheresCollect from '../../img/icon_chp/icon_chp_4.gif'; 
import phoenix from '../../img/icon_chp/icon_chp_5.png'; 
import dragons from '../../img/icon_chp/icon_chp_6.png'; 

// список скилов Champion
export const skillsChampion = [  

  {
    id: "palmStrike",
    level: 0,
    dependencies: [
      { id: "pacify", minLevel: 4 },
      { id: "bodyRelocation", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Palm Strike",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.18s 
Cooldown: A.Delay + 0.365 
Range: 1
Hits: 1
Requirement: Pacify Lv: 4, Body Relocation Lv: 3
Description: Deals P.DMG to the target after a 1.25s delay, Knocking it back. The damage delay scales with A.Motion.
If the target hits an obstacle or cannot be knocked back, it takes a second P.DMG based on its Level and Size. Against players, this damage scales with Weight instead of Size. 
Furious Spirits: The damage scales with STR. 
Calm Spirits: The damage scales with VIT. 
[Lv. 1]: ATK 300%, Knockback: 1 Range: 1. SP Cost: 7
[Lv. 2]: ATK 450%, Knockback: 2 Range: 2. SP Cost: 9
[Lv. 3]: ATK 600%, Knockback: 3 Range: 3. SP Cost: 11
[Lv. 4]: ATK 750%, Knockback: 4 Range: 4. SP Cost: 13
[Lv. 5]: ATK 900%, Knockback: 5 Range: 5. SP Cost: 15
Formula: ATK (%): 150 + (Skill Lv x 150)
Second ATK (%): (Skill Lv x 150) + Weight Bonus + (Target Lv x 5)

Weight Bonus:
Target Player: (weight x 100) / Max Weight 
Target Large Size: 50
Target Medium Size: 40
Target Small Size: 30

Furious Spirits: ATK Bonus (%): STR x 3
Calm Spirits: ATK Bonus (%): VIT x 3 `,
    img: palmStrike,
  },
  {
    id: "spiritSpheresCollect",
    level: 0,
    dependencies: [
      { id: "callSpiritSphere", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Spirit Spheres Collect",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Skill Form: Active 
Type: Supportive 
Target: Self
Fixed Cast Time: 1s
After Cast Delay: 0.30s
Cooldown: A.Delay
Requirement: Call Spirit Sphere Lv: 5
Description: Grants a status that temporarily increases Max HP and Max SP, as well as causes Call Spirit Spheres to summon double the amount of Spirit Spheres in exchange for doubling their SP Cost.
[Lv. 1]: Max HP/SP +2%, SP Cost: 26 Duration: 140s
[Lv. 2]: Max HP/SP +4%, SP Cost: 32 Duration: 180s
[Lv. 3]: Max HP/SP +6%, SP Cost: 38 Duration: 220s
[Lv. 4]: Max HP/SP +8%, SP Cost: 44 Duration: 260s
[Lv. 5]: Max HP/SP +10%, SP Cost: 50 Duration: 300s`,
    img: spiritSpheresCollect,
  },
  {
    id: "phoenix",
    level: 0,
    dependencies: [
      // { id: "tripleAttack", minLevel: 8 },
    ],
    dependent: [],
    element: null,
    skillName: "Phoenix's Dive",
    maxLevel: 5,
    inform: `Max Level: 5
Skill Form: Active
Type: Physical
Target: Enemy
Variable Cast Time: A.Delay + 1.40s
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay + 1s
Cooldown: A.Delay + 3s
Range: 2 + Weapon's range
Hits: 8
Description: Deals P.DMG to the target, Knocking it back 2 cells. The damage scales with the user's HP.
Can be used immediately after Flight Fist. Its ACD becomes A.Delay + 0.12s, with no cast time. Damage is also increased. Requires Furious Spirits stance and 2 Spirit Spheres.
[Lv. 1]: HP Cost: 2%, SP Cost: 20
[Lv. 2]: HP Cost: 4%, SP Cost: 25 
[Lv. 3]: HP Cost: 6%, SP Cost: 30 
[Lv. 4]: HP Cost: 8%, SP Cost: 35 
[Lv. 5]: HP Cost: 10%, SP Cost: 40
Formula: ATK (%): (Skill Lv x 400) x (1.0 + ((100 - ((HP x 100) / MaxHP)) / 100))
Combo ATK (%): (Skill Lv x 400) x (1.3 + ((100 - ((HP x 100) / MaxHP)) / 100)) `,
    img: phoenix,
  },
  {
    id: "dragons",
    level: 0,
    dependencies: [
      // { id: "tripleAttack", minLevel: 8 },
    ],
    dependent: [],
    element: null,
    skillName: "Dragon's Rise",
    maxLevel: 5,
    inform: `Max Level: 5
Skill Form: Active 
Type: Physical
Target: Enemy
Variable Cast Time: A.Delay +1.40s
Fixed Cast Time: 0.60s
After Cast Delay: A.Delay + 1s 
Cooldown: A.Delay + 35
Range: 2 + Weapon's range 
Hits: 1
Description: Deals P.DMG to enemies within a 5x5 AoE around the target, scaling with the user's HP and SP. Enemies on the edge take half the damage.
Can be used immediately after Fallen Fist. Its ACD becomes A.Delay + 0.12s, with no cast time. Damage is also increased. 
Requires Calm Spirits stance and 2 Spirit Spheres.
[Lv. 1]: SP Cost: 20
[Lv. 2]: SP Cost: 25
[Lv. 3]: SP Cost: 30 
[Lv. 4]: SP Cost: 35 
[Lv. 5]: SP Cost: 40
Formula: Damage: (HP x (10 + (Skill Lv x 4)) / 100) x (SP / 500) 
Combo Damage: (HP x (10 + (Skill Lv x 4)) / 100) x (SP / 350) `,
    img: dragons,
  },
];


/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

//   {
//     id: "chainCrushCombo",
//     level: 0,
//     dependencies: [
//       { id: "tripleAttack", minLevel: 8 },
//       { id: "comboFinish", minLevel: 4 },
//     ],
//     dependent: [],
//     element: null,
//     skillName: "Chain Crush Combo",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Physical
// Target: Self
// Range: 2
// Requirement: Triple Attack Lv: 8, Combo Finish Lv: 4
// Description: Chain Crush Combo is a devastating melee attack that can be used after Combo Finish, delivering a series of rapid crushing blows. Attack power increases further based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 9x9 AoE. Each cast requires 2 Spirit Sphere.
// [Lv 1]: Atk 400%, SP Cost: 16,
// [Lv 2]: Atk 800%, SP Cost: 22,
// [Lv 3]: Atk 1200%, SP Cost: 28,
// [Lv 4]: Atk 1600%, SP Cost: 34,
// [Lv 5]: Atk 2000%, SP Cost: 40`,
//     img: chainCrushCombo, 
//   },
//   {
//     id: "tigerFist",
//     level: 0,
//     dependencies: [
//       { id: "tripleAttack", minLevel: 8 },
//       { id: "comboFinish", minLevel: 4 },
//     ],
//     dependent: [],
//     element: null,
//     skillName: "Tiger Fist",
//     maxLevel: 5,
//     inform: `Max Lv: 5
// Skill Form: Active
// Type: Physical
// Target: Self
// Range: 2
// Requirement: Triple Attack Lv: 8, Combo Finish Lv: 4
// Description: Tiger Fist is a powerful area-of-effect strike that can be used after Combo Finish, delivering a devastating blow within a 5x5 area and has a high chance of immobilizing enemies. Attack power increases further based on their Base Level. When wielding a Knuckle-class weapon, deals additional damage and reduces cast delay. In Furious Spirits state, Adds twice your CRIT as TRUE DAMAGE to skill hits. In Calm Spirits state, adds your Soft Defense and half of Hard Defense as Physical Damage and become 9x9. Each cast requires 2 Spirit Sphere.
// [Lv 1]: Atk 350%, SP Cost: 9,
// [Lv 2]: Atk 500%, SP Cost: 13,
// [Lv 3]: Atk 650%, SP Cost: 17,
// [Lv 4]: Atk 800%, SP Cost: 21,
// [Lv 5]: Atk 950%, SP Cost: 25`,
//     img: tigerFist,
//   },
