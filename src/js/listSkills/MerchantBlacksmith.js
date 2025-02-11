
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

// список скилов Blacksmith
export const skillsBlacksmith = [
  {
    id: "hammerfall",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Hammerfall",
    maxLevel: 10,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Physical
    Target: Ground
    Range: 1
    Requirement: None
    Description: Requires Axes or Maces Class Weapon. Strikes the ground with great force, with a chance to Stun all targets in a 5x5 area.
    [Lv 1]: Stun Chance 30%,
    [Lv 2]: Stun Chance 40%,
    [Lv 3]: Stun Chance 50%,
    [Lv 4]: Stun Chance 60%,
    [Lv 5]: Stun Chance 70%`,
  },
  {
    id: "metalTempering",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Metal Tempering",
    maxLevel: 10,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Physical
    Target: Self
    Requirement: None
    Description: Become a master of metalworking by smelting Iron Ore into Iron, crafting Steel from it, and refining Rough Elunium and Rough Oridecon into Elunium and Oridecon. The success rate is determined by your Base Level and Job Level, reaching up to 100%. The amount produced receives an additional bonus based on all attributes, with DEX being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies. Metal Tempering Guide ,
    [Lv 1]: No Additional Bonus,
    [Lv 2]: Additional Efficiency -75%,
    [Lv 3]: Additional Efficiency -50%,
    [Lv 4]: Additional Efficiency -25%,
    [Lv 5]: Full Efficiency`,
  },
  {
    id: "enchantedStoneCraft",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Enchanted Stone Craft",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Physical
    Target: Self
    Description: Enable to create [Elemental Stones] by using a Mini Furnace and 10 [Elemental Ores]. The success rate is determined by your Base Level and Job Level, reaching up to 100%. The amount produced receives an additional bonus based on all attributes, with LUK being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies.
    [Lv 1]: No Additional Bonus,
    [Lv 2]: Additional Efficiency -75%,
    [Lv 3]: Additional Efficiency -50%,
    [Lv 4]: Additional Efficiency -25%,
    [Lv 5]: Full Efficiency`,
  },
  {
    id: "reforge",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Reforge",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Physical
    Target: Self
    Requirement: Enchanted Stone Craft Lv: 1, Metal Tempering Lv: 1
    Description: Allows the blacksmith to reforge weapons. Reforging lets you apply one enhancement to a weapon from a list of possible upgrades. These enhancements can either boost the weapon's stats, like increasing bonuses, or even change the weapon's behavior. Each weapon can only be reforged once.
    [Lv 1]: Reforge Chance +3%,
    [Lv 2]: Reforge Chance +6%,
    [Lv 3]: Reforge Chance +9%,
    [Lv 4]: Reforge Chance +12%,
    [Lv 5]: Reforge Chance +15%`,
  },
  {
    id: "cartBoost",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Cart Boost",
    maxLevel: 1,
    inform: `Max Lv: 1
    Skill Form: Active
    Type: Physical
    Target: Self
    Requirement: Pushcart Lv: 5
    Description: Increase Move Speed for 30 Seconds when a Pushcart is equipped.`,
  },
  {
    id: "adrenalineRush",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Adrenaline Rush",
    maxLevel: 10,
    inform: `Max Lv: 10
    Skill Form: Active
    Type: Physical
    Target: Self
    Requirement: Axe Mastery Lv: 3
    Description: Requires Axes or Maces Class Weapon. Temporarily boosts Attack speed, Critcal and Hit for all party members. This effect is also knocked off by Decrease AGI and Quagmire.
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
  },
  {
    id: "bladeWeaponReforging",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Blade Weapon Reforging",
    maxLevel: 3,
    inform: `Max Lv: 3
    Skill Form: Passive
    Type: Physical
    Requirement: Reforge Lv: 1
    Description: With an [Anvil] in your inventory, you can reforge Dagger, Axes and Swords class weapons. This process requires a forging hammer and all necessary materials. Your DEX and LUK will further influence the success rate.
    [Lv 1]: Success Rate: 5%,
    [Lv 2]: Success Rate: 10%,
    [Lv 3]: Success Rate: 15%`,
  },
  {
    id: "bluntWeaponReforging",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Blunt Weapon Reforging",
    maxLevel: 3,
    inform: `Max Lv: 3
    Skill Form: Passive
    Type: Physical
    Requirement: Reforge Lv: 1
    Description: With an [Anvil] in your inventory, you can reforge Mace and Knuckle class weapons. This process requires a forging hammer and all necessary materials. Your DEX and LUK will further influence the success rate.
    [Lv 1]: Success Rate: 5%,
    [Lv 2]: Success Rate: 10%,
    [Lv 3]: Success Rate: 15%`,
  },
  {
    id: "pierceWeaponReforging",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Pierce Weapon Reforging",
    maxLevel: 3,
    inform: `Max Lv: 3
    Skill Form: Passive
    Type: Physical
    Requirement: Reforge Lv: 1
    Description: With an [Anvil] in your inventory, you can reforge One and Two-Handed Spear class weapons. This process requires a forging hammer and all necessary materials. Your DEX and LUK will further influence the success rate.
    [Lv 1]: Success Rate: 5%,
    [Lv 2]: Success Rate: 10%,
    [Lv 3]: Success Rate: 15%`,
  },
  {
    id: "magicWeaponReforging",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Magic Weapon Reforging",
    maxLevel: 3,
    inform: `Max Lv: 3
    Skill Form: Passive
    Type: Physical
    Requirement: Reforge Lv: 1
    Description: With an [Anvil] in your inventory, you can reforge One, Two Handed Staff and Book class weapons. This process requires a forging hammer and all necessary materials. Your DEX and LUK will further influence the success rate.
    [Lv 1]: Success Rate: 5%,
    [Lv 2]: Success Rate: 10%,
    [Lv 3]: Success Rate: 15%`,
  },
  {
    id: "exoticWeaponReforging",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Exotic Weapon Reforging",
    maxLevel: 3,
    inform: `Max Lv: 3
    Skill Form: Passive
    Type: Physical
    Requirement: Reforge Lv: 1
    Description: With an [Anvil] in your inventory, you can reforge Humma Shuriken, Katar and Gun class weapons. This process requires a forging hammer and all necessary materials. Your DEX and LUK will further influence the success rate.
    [Lv 1]: Success Rate: 5%,
    [Lv 2]: Success Rate: 10%,
    [Lv 3]: Success Rate: 15%`,
  },
  {
    id: "stringWeaponReforging",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "String Weapon Reforging",
    maxLevel: 3,
    inform: `Max Lv: 3
    Skill Form: Passive
    Type: Physical
    Requirement: Reforge Lv: 1
    Description: With an [Anvil] in your inventory, you can reforge Bow, Musical Instrument and Whip class weapons. This process requires a forging hammer and all necessary materials. Your DEX and LUK will further influence the success rate.
    [Lv 1]: Success Rate: 5%,
    [Lv 2]: Success Rate: 10%,
    [Lv 3]: Success Rate: 15%`,
  },
  {
    id: "hiltBinding",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Hilt Binding",
    maxLevel: 1,
    inform: `Max Lv: 1
    Skill Form: Passive
    Type: Physical
    Requirement: Adrenaline Rush Lv: 7, Power Thrust Lv: 7, Weapon Perfection Lv: 3
    Description: Infuse your combat prowess. This skill prolongs the effects of Adrenaline Rush, Power Thrust, and Weapon Perfection by 20%, giving your buffs extra staying power. Plus, it enhances these abilities with a bonus +1 STR and +4 Atk.`,
  },
  {
    id: "maximizePower",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Maximize Power",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Physical
    Target: Self
    Requirement: Power Thrust Lv: 5
    Description: Channel the full potential of your weapon with Maximize Power. This skill ensures your weapon delivers its maximum damage output for 240 seconds. As you harness its full might, your SP will steadily drain. Discoun and Overcharge will aways give maximum bonus.
    [Lv 1]: Drains 6 SP every 2 second,
    [Lv 2]: Drains 5 SP every 2 second,
    [Lv 3]: Drains 4 SP every 2 second,
    [Lv 4]: Drains 3 SP every 2 second,
    [Lv 5]: Drains 2 SP every 2 second`,
  },
  {
    id: "powerThrust",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Power Thrust",
    maxLevel: 10,
    inform: `Max Lv: 10
    Skill Form: Active
    Type: Physical
    Target: Self
    Requirement: Weapon Perfection Lv: 3
    Description: Unleash a surge of strength with Power Thrust. Temporarily amplify your own attack power and that of your party members.
    [Lv 1]: Boosts Self Attack by 7% and Party Attack by 6%, lasting 60 seconds,
    [Lv 2]: Boosts Self Attack by 9% and Party Attack by 7%, lasting 70 seconds,
    [Lv 3]: Boosts Self Attack by 11% and Party Attack by 8%, lasting 80 seconds,
    [Lv 4]: Boosts Self Attack by 13% and Party Attack by 9%, lasting 90 seconds,
    [Lv 5]: Boosts Self Attack by 15% and Party Attack by 10%, lasting 100 seconds,
    [Lv 6]: Boosts Self Attack by 17% and Party Attack by 11%, lasting 110 seconds,
    [Lv 7]: Boosts Self Attack by 19% and Party Attack by 12%, lasting 120 seconds,
    [Lv 8]: Boosts Self Attack by 21% and Party Attack by 13%, lasting 130 seconds,
    [Lv 9]: Boosts Self Attack by 23% and Party Attack by 14%, lasting 140 seconds,
    [Lv 10]: Boosts Self Attack by 25% and Party Attack by 15%, lasting 150 seconds`,
  },
  {
    id: "repairWeapon",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Repair Weapon",
    maxLevel: 1,
    inform: `Max Lv: 1
    Skill Form: Active
    Type: Physical
    Target: Ally
    Range: 2
    Requirement: Reforge Lv: 2
    Description: With an [Anvil] in your inventory, you can restore a single targets damaged equipment, making it usable once more. This process uses 2 Steels.`,
  },
  {
    id: "skinTempering",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Skin Tempering",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Passive
    Type: Physical
    Requirement: Reforge Lv: 2
    Description: Harden your skin with the power of the forge, enhancing your resistance to Fire and Neutral property damage.
    [Lv 1]: Fire Res +4%, Neutral Res +1%,
    [Lv 2]: Fire Res +8%, Neutral Res +2%,
    [Lv 3]: Fire Res +12%, Neutral Res +3%,
    [Lv 4]: Fire Res +16%, Neutral Res +4%,
    [Lv 5]: Fire Res +20%, Neutral Res +5%`,
  },
  {
    id: "weaponPerfection",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Weapon Perfection",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Active
    Type: Physical
    Target: Self
    Requirement: Adrenaline Rush Lv: 3
    Description: This skill temporarily erases any size penalties from the equipped weapon for you and your party members, making your strikes more effective.
    [Lv 1]: Lasts 30 seconds,
    [Lv 2]: Lasts 60 seconds,
    [Lv 3]: Lasts 90 seconds,
    [Lv 4]: Lasts 120 seconds,
    [Lv 5]: Lasts 150 seconds`,
  },
  {
    id: "weaponryResearch",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Weaponry Research",
    maxLevel: 5,
    inform: `Max Lv: 5
    Skill Form: Passive
    Type: Physical
    Requirement: Hilt Binding Lv: 1
    Description: Sharpens your understanding of weapon mechanics, boosting your Status Attack and Hit Rate with any weapon.
    [Lv 1]: Status Atk +4, Hit Rate +4%,
    [Lv 2]: Status Atk +8, Hit Rate +8%,
    [Lv 3]: Status Atk +12, Hit Rate +12%,
    [Lv 4]: Status Atk +16, Hit Rate +16%,
    [Lv 5]: Status Atk +20, Hit Rate +20%`,
  },
];