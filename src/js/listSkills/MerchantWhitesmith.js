
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import meltdown from '../../img/icon_wsm/icon_wsm_1.gif'; 
import foundryPowerUp from '../../img/icon_wsm/icon_wsm_3.gif'; 
import cartTermination from '../../img/icon_wsm/icon_wsm_4.gif'; 
import maximumPowerThrust from '../../img/icon_wsm/icon_wsm_5.gif'; 

// список скилов Whitesmith
export const skillsWhitesmith = [
  {
    id: "cartTermination",
    level: 0,
    dependencies: [
      { id: "cartRevolution", minLevel: 10 },
      { id: "cartBoost", minLevel: 1 },
      { id: "cartTwister", minLevel: 5 },
    ],
    dependent: [ ],
    element: null,
    skillName: "Cart Termination",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
After Cast Delay: A.Delay - 0.22s
Cooldown: A.Delay
Range: 2
Hits: 1
SP Cost: 15
Requirement: Cart Revolution Lv: 10, Cart Boost Lv: 1, Cart Twister Lv: 5
Description: Deals P.DMG to the target, scaling with Pushcart's current weight. Ignores Auto Guard, Parry, and Weapon Blocking.
Requires a Pushcart.
Can be cast up to 9 cells, transforming into High Speed Cart Ram if cast from more than 3 cells.
High Speed Cart Ram: Charges to the target, dealing P.DMG.
Has a chance to inflict Stun for 4.5s.
Also temporarily grants T.ATK bonus to pushcart Skills.
VCT scales with WD and the distance from the target, and cannot be decreased by stats or gear.
High Speed Cart Ram has its own CD, scaling with the distance from the target.
Catalyst: 3x Zeny Pouch

Formula:
ATK (%): (((Cart Weight  / (15 - Skill Lv)) x 8000) / 8000) - 100 
VCT (seconds): WD x Skill Lv
Special Effect:
Stun Chance (%): 10 + (Skill Lv x 7)
High Speed Cart Ram Cooldown (seconds): 2 x Number of Cells 
True ATK: ((Cart Weight / 20) x STR) / 100 
Duration (seconds): 1 x Skill Lv `,
    img: cartTermination,
  },
  {
    id: "foundryPowerUp",
    level: 0,
    dependencies: [
      { id: "reforge", minLevel: 5 },
      { id: "exoticWeaponReforging", minLevel: 1 },
      { id: "repairWeapon", minLevel: 1 },
      { id: "bladeWeaponReforging", minLevel: 1 },
      { id: "bluntWeaponReforging", minLevel: 1 },
      { id: "pierceWeaponReforging", minLevel: 1 }, 
      { id: "magicWeaponReforging", minLevel: 1 }, 
      { id: "stringWeaponReforging", minLevel: 1 },
    ],
    dependent: [ ],
    element: null,
    skillName: "Foundry Power-Up",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive
Target: Ally
Range: 2
Fixed Cast Time: 1s
After Cast Delay: 0.30s
Requirement: Reforge Lv: 5, Exotic Weapon Reforging Lv: 1, Repair Weapon Lv: 1, Blade Weapon Reforging Lv: 1, Blunt Weapon Reforging Lv: 1, Pierce Weapon Reforging Lv: 1, Magic Weapon Reforging Lv: 1, String Weapon Reforging Lv: 1
Description: Enhances the target's Weapon or Shield for 30s.
Has a chance for a perfect enhancement, increasing its effectiveness and doubling duration. The chance scales with DEX, LUK, Anvil type, equipment stats and skill level. Requires any type of Anvil in the inventory. Catalyst: 
  2x Rough Oridecon for Lv. 1~2 Weapons
  2x Oridecon for Lv. 3~4 Weapons
  2x Rough Elunium for Lv. 1~2 Shields
  2x Elunium for Lv. 3~4 Shields
[Lv. 1]: SP Cost: 33
[Lv. 2]: SP Cost: 36
[Lv. 3]: SP Cost: 39
[Lv. 4]: SP Cost: 42
[Lv. 5]: SP Cost: 45
[Lv. 6]: SP Cost: 48
[Lv. 7]: SP Cost: 51
[Lv. 8]: SP Cost: 54 
[Lv. 9]: SP Cost: 57 
[Lv.10]: SP Cost: 60
Formula:
Perfect Enhance Chance (%): (((Skill Lv x 10) + Anvil Bonus + ((DEX x LUK) / 600) x 100) - Penalty) / 100 
Penalty: ((Equip Refine x 6) + (Equip Lv x 10)) x 100
Anvil Bonus: 
Emperium Anvil 10
Golden Anvil: 5
Oridecon Anvil: 3
Anvil: 0 `,
    img: foundryPowerUp,
  },
  {
    id: "maximumPowerThrust",
    level: 0,
    dependencies: [
      { id: "powerThrust", minLevel: 10 },
    ],
    dependent: [ ],
    element: null,
    skillName: "Maximum Power Thrust",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
SP Cost: 15
Requirement: Power Thrust Lv: 10
Description: Increases the allies' refine bonus received from their weapon.
Catalyst: 5x Zeny Pouch
[Lv. 1]: Refine Bonus +10%, Duration: 156s 
[Lv. 2]: Refine Bonus +20%, Duration: 192s 
[Lv. 3]: Refine Bonus +30%, Duration: 228s 
[Lv. 4]: Refine Bonus +40%, Duration: 264s 
[Lv. 5]: Refine Bonus +50%, Duration: 300s`,
    img: maximumPowerThrust,
  },
  {
    id: "meltdown",
    level: 0,
    dependencies: [
      { id: "skinTempering", minLevel: 5 },
      { id: "hammerfall", minLevel: 5 },
    ],
    dependent: [ ],
    element: null,
    skillName: "Meltdown",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Supportive 
Target: Self
After Cast Delay: 0.30s 
Cooldown: A.Delay
Requirement: Skin Tempering Lv: 5, Hammerfall Lv: 5
Description: Temporarily adds Fire property damage to melee P.DMG, scaling with DEX and LUK. This also applies to reflected melee P.DMG.
The damage bonus does not work on pushcart Skills.
Grants a chance to reduce normal monsters' W.ATK, B.MATK and P.DEF by 15% for 60s on performing basic attacks. Also grants a chance to Break players' weapon and armor.
[Lv. 1]: Duration: 15s. SP Cost: 45
[Lv. 2]: Duration: 20s. SP Cost: 50
[Lv. 3]: Duration: 25s. SP Cost: 55 
[Lv. 4]: Duration: 30s. SP Cost: 60 
[Lv. 5]: Duration: 35s. SP Cost: 65 
[Lv. 6]: Duration: 40s. SP Cost: 70 
[Lv. 7]: Duration: 45s. SP Cost: 75 
[Lv. 8]: Duration: 50s. SP Cost: 80 
[Lv. 9]: Duration: 55s. SP Cost: 85 
[Lv.10]: Duration: 60s. SP Cost: 90
Formula:
Fire Damage: (Skill Lv x 50) + ((DEX + LUK) × 5)
Reflect Fire Damage: (((Skill Lv x 50) + ((DEX + LUK) x 5)) x User's Melee Reflect Rate) / 100 
Break Weapon chance (%): 1 x Skill Lv
Break Armor chance (%): 0.7 x Skill Lv
Reduce W.ATK/B.MATK Chance (%): 1 x Skill Lv
Reduce P.DEF Chance (%): 0.7 x Skill Lv `,
    img: meltdown,
  },
];
