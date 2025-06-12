
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
Range: 2
Requirement: Cart Revolution Lv: 10, Cart Boost Lv: 1, Cart Twister Lv: 5
Description: While under the effect of Cart Boost, unleash a devastating attack by smashing your pushcart into an enemy. Has a chance to stun the target. The heavier your cart, more crushing the blow. Consumes 3x Zeny Pouch.
[Lv 1]: Stun Chance: 5%,
[Lv 2]: Stun Chance: 10%,
[Lv 3]: Stun Chance: 15%,
[Lv 4]: Stun Chance: 20%,
[Lv 5]: Stun Chance: 25%,
[Lv 6]: Stun Chance: 30%,
[Lv 7]: Stun Chance: 35%,
[Lv 8]: Stun Chance: 40%,
[Lv 9]: Stun Chance: 45%,
[Lv 10]: Stun Chance: 50%`,
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
Type: Physical
Target: Ally
Range: 2
Requirement: Reforge Lv: 5, Exotic Weapon Reforging Lv: 1, Repair Weapon Lv: 1, Blade Weapon Reforging Lv: 1, Blunt Weapon Reforging Lv: 1, Pierce Weapon Reforging Lv: 1, Magic Weapon Reforging Lv: 1, String Weapon Reforging Lv: 1
Description: Harness the power of the anvil to temporarily enhance a party member's equipment. This boosts weapon damage and shield damage mitigation. The upgrade might even reach Perfect Upgrade status, extending its duration and amplifying the bonuses. Weapon Enhancement increases final damage, shield Enhancement improves damage mitigation. Enhancement is linked to the equipment itself, so switching items won't remove the effect. Usable only on party members. [Perfect Upgrade Chance]: 10% plus [Skill Level] and bonuses from stats and anvil, minus any equipment penalty. 2x Phracon for Lv.1 Weapons, 2x Emveretarcon for Lv.2 Weapons, 2x Oridecon for Lv.3 ~ 4 Weapons, 2x Elunium for Shields`,
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
Type: Physical
Target: Self
Requirement: Power Thrust Lv: 10
Description: Strap Zeny Pouches onto your weapon for increases your weapons damage, enhancing its weight of impact. Also applies the Power Thrust buff to your whole party. Consumes 1x Zeny Pouch per Skill Level.
[Lv 1]: Atk +20%, Duration: 156 sec,
[Lv 2]: Atk +40%, Duration: 192 sec,
[Lv 3]: Atk +60%, Duration: 228 sec,
[Lv 4]: Atk +80%, Duration: 264 sec,
[Lv 5]: Atk +100%, Duration: 300 sec`,
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
Type: Physical
Target: Self
Requirement: Skin Tempering Lv: 5, Hammerfall Lv: 5
Description: Ignite your attacks with the power of fire, adding flat Fire damage to each strike. This fiery damage scales with your LUK and DEX and is affected only by the target's elemental weakness. Each hit carries a chance to break the enemys equipped weapon or armor. Against monsters, it reduces their physical damage or defense instead. The added fire damage applies to regular attacks, reflect damage, and most skills but excludes cart-related skills.
[Lv 1]: Chance of Break Weapon: 1%, Armor: 0.7%, Duration: 15 seconds,
[Lv 2]: Chance of Break Weapon: 2%, Armor: 1.4%, Duration: 20 seconds,
[Lv 3]: Chance of Break Weapon: 3%, Armor: 2.1%, Duration: 25 seconds,
[Lv 4]: Chance of Break Weapon: 4%, Armor: 2.8%, Duration: 30 seconds,
[Lv 5]: Chance of Break Weapon: 5%, Armor: 3.5%, Duration: 35 seconds,
[Lv 6]: Chance of Break Weapon: 6%, Armor: 4.2%, Duration: 40 seconds,
[Lv 7]: Chance of Break Weapon: 7%, Armor: 4.9%, Duration: 45 seconds,
[Lv 8]: Chance of Break Weapon: 8%, Armor: 5.6%, Duration: 50 seconds,
[Lv 9]: Chance of Break Weapon: 9%, Armor: 6.3%, Duration: 55 seconds,
[Lv 10]: Chance of Break Weapon: 10%, Armor: 7.0%, Duration: 60 seconds
`,
    img: meltdown,
  },
];
