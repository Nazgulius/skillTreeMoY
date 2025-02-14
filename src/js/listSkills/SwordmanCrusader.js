/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка

// список скилов Crusader
export const skillsCrusader = [  
  {
    id: "cavalryMastery",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Cavalry Mastery",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Passive
Type: Physical
Requirement: Riding Lv: 1
Description: Removes the ASPD and Flee penalty while mounted. Increases Hit Rate and Flee Rate by 10% and Critical when not mounted.
[Lv 1]: -8% ASPD and Flee penalty.
[Lv 2]: -16% ASPD and Flee penalty.
[Lv 3]: -24% ASPD and Flee penalty.
[Lv 4]: -32% ASPD and Flee penalty.
[Lv 5]: -40% ASPD and Flee penalty.`,
    img: skillImgNo,
  },
  {
    id: "defender",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Defender",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Guard Lv: 5, Faith Lv: 5
Description: Requires the user to have a shield equipped. Produces an aura of protection to buffer all incoming ranged physical damage at cost of attack speed and Move Speed. Skill level affects damage reduction and Atk speed. This skill can be switched on and off.
[Lv 1]: Damage reduction from long distance: 20%, Atk Speed: 80%,
[Lv 2]: Damage reduction from long distance: 35%, Atk Speed: 85%,
[Lv 3]: Damage reduction from long distance: 50%, Atk Speed: 90%,
[Lv 4]: Damage reduction from long distance: 65%, Atk Speed: 95%,
[Lv 5]: Damage reduction from long distance: 80%, Atk Speed:100%`,
    img: skillImgNo,
  },
  {
    id: "devotion",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Devotion",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Misc
Target: Ally
Range: 11
Requirement: Heal Lv: 5, Guard Lv: 3
Description: Links to a single target to share part of its damage. The targets level and the casters level must not differ by more than 10. The skill remains active until the player takes damage out of range or the duration expires. Every linked allies increase the maximum HP of Crusader. Crusaders cannot use this skill if already linked to another ally with Devotion. Maximum Connections: 5 Allies.
[Lv 1]: Damage redirected 55%, +100 HP and 0.4% HP for every linked allie, Duration: 30sec,
[Lv 2]: Damage redirected 65%, +200 HP and 0.8% HP for every linked allie, Duration: 45sec,
[Lv 3]: Damage redirected 75%, +300 HP and 1.2% HP for every linked allie, Duration: 60sec,
[Lv 4]: Damage redirected 85%, +400 HP and 1.6% HP for every linked allie, Duration: 75sec,
[Lv 5]: Damage redirected 95%, +500 HP and 2% HP for every linked allie, Duration: 90sec`,
    img: skillImgNo,
  },
  {
    id: "faith",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Faith",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Requirement: None
Description: Passively Enhances MaxHP. Activating removes all allies bound to [Devotion].
[Lv 1]: MaxHP + 200, MaxHP + 1%,
[Lv 2]: MaxHP + 400, MaxHP + 2%,
[Lv 3]: MaxHP + 600, MaxHP + 3%,
[Lv 4]: MaxHP + 800, MaxHP + 4%,
[Lv 5]: MaxHP +1000, MaxHP + 5%,
[Lv 6]: MaxHP +1200, MaxHP + 6%,
[Lv 7]: MaxHP +1400, MaxHP + 7%,
[Lv 8]: MaxHP +1600, MaxHP + 8%,
[Lv 9]: MaxHP +1800, MaxHP + 9%,
[Lv 10]: MaxHP +2000, MaxHP + 10%`,
    img: skillImgNo,
  },
  {
    id: "grandCross",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Grand Cross",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical or Magical
Target: Self
Range: 5
Requirement: Holy Cross Lv: 5
Description: Channel a divine cross around yourself and sacrificing 10% of your HP to inflicts Holy Property Damage to all enemies in a Cross-Shaped area. When wielding One-Handed Swords, Maces, or Daggers, the attack is Magical. When wielding Two-Handed Swords, Spears, or Axes, the attack is Physical. Damage is affected by STR and INT, with INT halved for Physical Damage and STR halved for Magical Damage. These attribute bonuses scale with Base Level reaching 100% effectiveness at User Max Level. Against Undead and Demon monsters, has a 100% chance to inflict Blind. Casting cannot be interrupted.
[Lv 1]: Atk or MAtk 125% x Hits,
[Lv 2]: Atk or MAtk 150% x Hits,
[Lv 3]: Atk or MAtk 175% x Hits,
[Lv 4]: Atk or MAtk 200% x Hits,
[Lv 5]: Atk or MAtk 225% x Hits,
[Lv 6]: Atk or MAtk 250% x Hits,
[Lv 7]: Atk or MAtk 275% x Hits,
[Lv 8]: Atk or MAtk 300% x Hits,
[Lv 9]: Atk or MAtk 325% x Hits,
[Lv 10]: Atk or MAtk 350% x Hits`,
    img: skillImgNo,
  },
  {
    id: "guard",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Guard",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: None
Description: Requires a Shield equipped. Allows the user to block physical attacks with the equipped shield by chance in duration. The player will be forced to pause momentarily whenever this skill blocks damage. This skill can be switched on and off.
[Lv 1]: Block Chance: 5%,
[Lv 2]: Block Chance: 10%,
[Lv 3]: Block Chance: 14%,
[Lv 4]: Block Chance: 18%,
[Lv 5]: Block Chance: 21%,
[Lv 6]: Block Chance: 24%,
[Lv 7]: Block Chance: 26%,
[Lv 8]: Block Chance: 28%,
[Lv 9]: Block Chance: 29%,
[Lv 10]: Block Chance: 30%`,
    img: skillImgNo,
  },
  {
    id: "heal",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Heal",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Faith Lv: 7
Description: Restores HP of a single target. This skill is affected by Base Level, INT and MAtk. Versus Corrupt property targets, inflicts Holy property damage equal 75% the amount of the HP restored.
[Lv 1]: SP Cost: 13,
[Lv 2]: SP Cost: 16,
[Lv 3]: SP Cost: 19,
[Lv 4]: SP Cost: 22,
[Lv 5]: SP Cost: 25,
[Lv 6]: SP Cost: 28,
[Lv 7]: SP Cost: 31,
[Lv 8]: SP Cost: 34,
[Lv 9]: SP Cost: 37,
[Lv 10]: SP Cost: 40`,
    img: skillImgNo,
  },
  {
    id: "holyCross",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Holy Cross",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical or Magical
Target: Enemy
Range: 2
Requirement: Faith Lv: 5
Description: Strikes the target with a divine cross of light, dealing Holy Property Damage with a 30% chance to inflict Blind. When wielding One-Handed Swords, Maces, or Daggers, the attack is Magical. When wielding Two-Handed Swords, Spears, or Axes, the attack is physical. Damage is affected by STR and INT, with INT halved for Physical Damage and STR halved for Magical Damage. These attribute bonuses scale with Base Level, reaching 100% effectiveness at User Max Level.
[Lv 1]: Atk or MAtk 135%,
[Lv 2]: Atk or MAtk 170%,
[Lv 3]: Atk or MAtk 205%,
[Lv 4]: Atk or MAtk 240%,
[Lv 5]: Atk or MAtk 275%,
[Lv 6]: Atk or MAtk 310%,
[Lv 7]: Atk or MAtk 345%,
[Lv 8]: Atk or MAtk 380%,
[Lv 9]: Atk or MAtk 415%,
[Lv 10]: Atk or MAtk 450%`,
    img: skillImgNo,
  },
  {
    id: "martyrsHeal",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Martyr's Heal",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Range: 9
Requirement: Devotion Lv: 1
Description: Center a divine cross on yourself, sacrificing HP and SP to heal allies around you over time. The cross moves with you and doesn't prevent the use of any attacks or skills. The healing is based on your learned Heal skill and your maximum HP. Allies under the effect of Devotion receive the healing even outside the area of effect. The user is not healed and has their movement speed reduced by 30%. This skill can be switched on and off.
[Lv 1]: Heal every 10 seconds, Drain 19 SP and 1% HP every 10 seconds,
[Lv 2]: Heal every 9 seconds, Drain 23 SP and 1% HP every 9 seconds,
[Lv 3]: Heal every 8 seconds, Drain 27 SP and 1% HP every 8 seconds,
[Lv 4]: Heal every 7 seconds, Drain 31 SP and 1% HP every 7 seconds,
[Lv 5]: Heal every 6 seconds, Drain 35 SP and 1% HP every 6 seconds,
[Lv 6]: Heal every 5 seconds, Drain 39 SP and 1% HP every 5 seconds,
[Lv 7]: Heal every 4 seconds, Drain 43 SP and 1% HP every 4 seconds,
[Lv 8]: Heal every 3 seconds, Drain 47 SP and 1% HP every 3 seconds,
[Lv 9]: Heal every 2 seconds, Drain 51 SP and 1% HP every 2 seconds,
[Lv 10]: Heal every 1 seconds, Drain 55 SP and 1% HP every 1 seconds`,
    img: skillImgNo,
  },
  {
    id: "reflectorShield",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Reflector Shield",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Guard Lv: 5, Faith Lv: 5
Description: Requires a Shield equipped. Produces an aura of retaliation to reflect a portion of the close range physical damage taken back at the attacker for five minutes. This skill is deactivated when the shield is released in duration.
[Lv 1]: Damage Reflected: 4%,
[Lv 2]: Damage Reflected: 8%,
[Lv 3]: Damage Reflected: 12%,
[Lv 4]: Damage Reflected: 16%,
[Lv 5]: Damage Reflected: 20%,
[Lv 6]: Damage Reflected: 24%,
[Lv 7]: Damage Reflected: 28%,
[Lv 8]: Damage Reflected: 32%,
[Lv 9]: Damage Reflected: 36%,
[Lv 10]: Damage Reflected: 40%`,
    img: skillImgNo,
  },
  {
    id: "riding",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Riding",
    maxLevel: 1,
    inform: `Max Lv: 1
Skill Form: Passive
Type: Physical
Requirement: Endure Lv: 1
Description: Enables the user to ride a Peco Peco. Increases Weight Limit by 750 but reduces ASPD and Flee by 50% while mounted. Riding affects Weapon Size Modifiers as follows:, One-Handed Sword: Small 100%, Medium 125%, Large 100%, Two-Handed Sword: Small 100%, Medium 100%, Large 125%, Spear: Small 100%, Medium 100%, Large 125%, PecoPeco Breeder.`,
    img: skillImgNo,
  },
  {
    id: "shieldBoomerang",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Shield Boomerang",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 6 ~ 10
Requirement: Shield Charge Lv: 3
Description: Requires a Shield equipped. Hurls the equipped shield like a boomerang at a single target to inflict Ranged Physical Damage. Damage is greatly affected by Weight, Defense and Refine Level of the equipped Shield. If used against targets with reduced Move Speed, it causes Immobilization for 0.5 seconds. Immobilized status is applied to the target even if it is immune to immobilizations.
[Lv 1]: Atk 135% + 10% of Shield Weight + Def + Refine ,
[Lv 2]: Atk 170% + 20% of Shield Weight + Def + Refine ,
[Lv 3]: Atk 205% + 30% of Shield Weight + Def + Refine ,
[Lv 4]: Atk 240% + 40% of Shield Weight + Def + Refine ,
[Lv 5]: Atk 275% + 50% of Shield Weight + Def + Refine ,
[Lv 6]: Atk 310% + 60% of Shield Weight + Def + Refine ,
[Lv 7]: Atk 345% + 70% of Shield Weight + Def + Refine ,
[Lv 8]: Atk 380% + 80% of Shield Weight + Def + Refine ,
[Lv 9]: Atk 415% + 90% of Shield Weight + Def + Refine ,
[Lv 10]: Atk 450% + 100% of Shield Weight + Def + Refine`,
    img: skillImgNo,
  },
  {
    id: "shieldCharge",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Shield Charge",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Enemy
Range: 4
Requirement: Faith Lv: 5
Description: Requires a Shield equipped. Smashes the equipped shield into a single target to inflict physical damage and push it backwards, knockback it and reducing its Move Speed by 15% for 8 seconds. If the target collides with any obstacle, there is a 12% chance per skill level of being Stunned. Slow caused by this skill works on any type of monster.
[Lv 1]: Atk 180%, Knockback: 5 cells,
[Lv 2]: Atk 260%, Knockback: 6 cells,
[Lv 3]: Atk 340%, Knockback: 7 cells,
[Lv 4]: Atk 420%, Knockback: 8 cells,
[Lv 5]: Atk 500%, Knockback: 9 cells`,
    img: skillImgNo,
  },
  {
    id: "spearQuicken",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Spear Quicken",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: One-Spear Mastery Lv: 5
Description: Requires Spear Class Weapon. Temporarily boosts Attack speed, Critcal and Hit. This effect is also knocked off by Decrease AGI and Quagmire.
[Lv 1]: Duration: 84sec, Critcal +1, Hit +2,
[Lv 2]: Duration: 108sec, Critcal +2, Hit +4,
[Lv 3]: Duration: 132sec, Critcal +3, Hit +6,
[Lv 4]: Duration: 156sec, Critcal +4, Hit +8,
[Lv 5]: Duration: 180sec, Critcal +5, Hit +10,
[Lv 6]: Duration: 204sec, Critcal +6, Hit +12,
[Lv 7]: Duration: 228sec, Critcal +7, Hit +14,
[Lv 8]: Duration: 252sec, Critcal +8, Hit +16,
[Lv 9]: Duration: 276sec, Critcal +9, Hit +18,
[Lv 10]: Duration: 300sec, Critcal +10, Hit +20`,
    img: skillImgNo,
  },
  {
    id: "swordQuicken",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Sword Quicken",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: One-Handed Sword Mastery Lv: 5
Description: Requires Swords Class Weapon. Temporarily boosts Attack Speed, Critcal and Hit. This effect is also knocked off by Decrease AGI and Quagmire.
[Lv 1]: Duration: 84sec, Critcal +1, Hit +2,
[Lv 2]: Duration: 108sec, Critcal +2, Hit +4,
[Lv 3]: Duration: 132sec, Critcal +3, Hit +6,
[Lv 4]: Duration: 156sec, Critcal +4, Hit +8,
[Lv 5]: Duration: 180sec, Critcal +5, Hit +10,
[Lv 6]: Duration: 204sec, Critcal +6, Hit +12,
[Lv 7]: Duration: 228sec, Critcal +7, Hit +14,
[Lv 8]: Duration: 252sec, Critcal +8, Hit +16,
[Lv 9]: Duration: 276sec, Critcal +9, Hit +18,
[Lv 10]: Duration: 300sec, Critcal +10, Hit +20`,
    img: skillImgNo,
  },
  {
    id: "twoHandedSpearMastery",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Two-Handed Spear Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: One-Spear Mastery Lv: 5
Description: Increase Attack with Two-Handed Spear Weapons. When [Lv 10], it increases damage on All Size in 6%. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: Atk +4,
[Lv 2]: Atk +8,
[Lv 3]: Atk +12,
[Lv 4]: Atk +16,
[Lv 5]: Atk +20,
[Lv 6]: Atk +24,
[Lv 7]: Atk +28,
[Lv 8]: Atk +32,
[Lv 9]: Atk +36,
[Lv 10]: Atk +40`,
    img: skillImgNo,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */