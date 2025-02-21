
/*  author Chalykh Maksim 
  # data 10.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка

// список скилов Merchant
export const skillsMerchant = [  
  {
    id: "axeMastery",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "adrenalineRush" },
    ],
    element: null,
    skillName: "Axe Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increase attack with One Handed or Two Handed Axes Weapons. Second Class The benefits of this skill are improved upon reaching 2nd class. When [Lv 10], it increases damage on All Size in 6%. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: One Handed Atk +2, Two Handed Atk +3, 2nd Class Additional Atk +1,
[Lv 2]: One Handed Atk +4, Two Handed Atk +6, 2nd Class Additional Atk +2,
[Lv 3]: One Handed Atk +6, Two Handed Atk +9, 2nd Class Additional Atk +3,
[Lv 4]: One Handed Atk +8, Two Handed Atk +12, 2nd Class Additional Atk +4,
[Lv 5]: One Handed Atk +10, Two Handed Atk +15, 2nd Class Additional Atk +5,
[Lv 6]: One Handed Atk +12, Two Handed Atk +18, 2nd Class Additional Atk +6,
[Lv 7]:One Handed Atk +14, Two Handed Atk +21, 2nd Class Additional Atk +7,
[Lv 8]: One Handed Atk +16, Two Handed Atk +24, 2nd Class Additional Atk +8,
[Lv 9]: One Handed Atk +18, Two Handed Atk +27, 2nd Class Additional Atk +9,
[Lv 10]: One Handed Atk +20, Two Handed Atk +30, 2nd Class Additional Atk +10`,
    img: skillImgNo,
  },
  {
    id: "mammonite",
    level: 0,
    dependencies: [],
    dependent: [ ],
    element: null,
    skillName: "Mammonite",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: None
Description: Harness the power of greed to deliver a devastating blow to a single target, dealing physical damage. At skill level 6 or higher has a chance to Stun. Consumes 2x Zeny Pouch at Lvs. 6 ~ 10.
[Lv 1]: Atk 150%,
[Lv 2]: Atk 200%,
[Lv 3]: Atk 250%,
[Lv 4]: Atk 300%,
[Lv 5]: Atk 350%,
[Lv 6]: Atk 400%, Stun chance 4%,
[Lv 7]: Atk 450%, Stun chance 8%,
[Lv 8]: Atk 500%, Stun chance 12%,
[Lv 9]: Atk 550%, Stun chance 16%,
[Lv 10]: Atk 600%, Stun chance 20%`,
    img: skillImgNo,
  },
  {
    id: "pushcart",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "cartRevolution" },
      { id: "cartTwister" },
      { id: "discount" },
      { id: "overcharge" },
      { id: "cartBoost" },
    ],
    element: null,
    skillName: "Pushcart",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Misc
Requirement: None
Description: Enables to rent a Pushcart and Increases maximum player Weight Limit. Pushcart Assembler.
[Lv 1]: Maximum player Weight +200,
[Lv 2]: Maximum player Weight +400,
[Lv 3]: Maximum player Weight +600,
[Lv 4]: Maximum player Weight +800,
[Lv 5]: Maximum player Weight +1000,
[Lv 6]: Maximum player Weight +1200,
[Lv 7]: Maximum player Weight +1400,
[Lv 8]: Maximum player Weight +1600,
[Lv 9]: Maximum player Weight +1800,
[Lv 10]: Maximum player Weight +2000`,
    img: skillImgNo,
  },
  {
    id: "cartRevolution",
    level: 0,
    dependencies: [{ id: "pushcart", minLevel: 0 }],
    dependent: [
      { id: "cartTwister" },
      { id: "cartTermination" },
    ],
    element: null,
    skillName: "Cart Revolution",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Pushcart Lv: 1
Description: Slam your pushcart into a single target, dealing physical damage and Knockback them 3 cells. Cart Weight and the Number of different Items in it affect the base skill ratio, because nothing says power like a well-packed pushcart.
[Lv 1]: Atk 100% + 1% for every 200 of Cart Weight,
[Lv 2]: Atk 100% + 2% for every 200 of Cart Weight,
[Lv 3]: Atk 100% + 3% for every 200 of Cart Weight,
[Lv 4]: Atk 100% + 4% for every 200 of Cart Weight,
[Lv 5]: Atk 100% + 5% for every 200 of Cart Weight,
[Lv 6]: Atk 100% + 6% for every 200 of Cart Weight,
[Lv 7]: Atk 100% + 7% for every 200 of Cart Weight,
[Lv 8]: Atk 100% + 8% for every 200 of Cart Weight,
[Lv 9]: Atk 100% + 9% for every 200 of Cart Weight,
[Lv 10]: Atk 100% + 10% for every 200 of Cart Weight`,
    img: skillImgNo,
  },
  {
    id: "cartTwister",
    level: 0,
    dependencies: [{ id: "cartRevolution", minLevel: 4 }, { id: "pushcart", minLevel: 0 }],
    dependent: [
      { id: "cartTermination" },
    ],
    element: null,
    skillName: "Cart Twister",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Self
Requirement: Cart Revolution Lv: 5
Description: Grab your cart and spin it like a whirlwind, dealing melee physical damage to all enemies within a 5x5 cell area around you. Cart Weight and the Number of different Items in it affect the base skill ratio. Every 30 VIT increases the SkillRatio by 1% per Base Level.
[Lv 1]: Atk 100% + 1% for every 400 of Cart Weight,
[Lv 2]: Atk 100% + 2% for every 400 of Cart Weight,
[Lv 3]: Atk 100% + 3% for every 400 of Cart Weight,
[Lv 4]: Atk 100% + 4% for every 400 of Cart Weight,
[Lv 5]: Atk 100% + 5% for every 400 of Cart Weight,
[Lv 6]: Atk 100% + 6% for every 400 of Cart Weight,
[Lv 7]: Atk 100% + 7% for every 400 of Cart Weight,
[Lv 8]: Atk 100% + 8% for every 400 of Cart Weight,
[Lv 9]: Atk 100% + 9% for every 400 of Cart Weight,
[Lv 10]: Atk 100% + 10% for every 400 of Cart Weight`,
    img: skillImgNo,
  },
  {
    id: "discount",
    level: 0,
    dependencies: [{ id: "pushcart", minLevel: 2 },],
    dependent: [      
      { id: "overcharge" },
    ],
    element: null,
    skillName: "Discount",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Pushcart Lv: 3
Description: Activate this skill to receive a buff that randomly slashes the SP Cost of your abilities. The reduction varies based on the skill level, giving you a chance to save a small, medium, or large amount of SP. However, this cannot be used at the same time as Overcharge.
[Lv 1]: SP reduction: 1%, 2%, or 5%,
[Lv 2]: SP reduction: 2%, 4%, or 10%,
[Lv 3]: SP reduction: 3%, 6%, or 15%,
[Lv 4]: SP reduction: 4%, 8%, or 20%,
[Lv 5]: SP reduction: 5%, 10%, or 25%,
[Lv 6]: SP reduction: 6%, 12%, or 30%,
[Lv 7]: SP reduction: 7%, 14%, or 35%,
[Lv 8]: SP reduction: 8%, 16%, or 40%,
[Lv 9]: SP reduction: 9%, 18%, or 45%,
[Lv 10]: SP reduction: 10%, 20%, or 50%`,
    img: skillImgNo,
  },
  {
    id: "overcharge",
    level: 0,
    dependencies: [
      { id: "discount", minLevel: 2 },
      { id: "pushcart", minLevel: 2 },
    ],
    dependent: [ ],
    element: null,
    skillName: "Overcharge",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Discount Lv: 3
Description: Activate this skill to unleash a buff that ramps up the SP Cost of your abilities, but in return, boosts their Status Attack. The increase in SP cost is random, and the Status Attack scales accordingly. However, this cannot be used at the same time as Discount.
[Lv 1]: SP increase cost: 1%, 2%, or 5%, Status Attack: +1, +2, or +5,
[Lv 2]: SP increase cost: 2%, 4%, or 10%, Status Attack: +2, +4, or +10,
[Lv 3]: SP increase cost: 3%, 6%, or 15%, Status Attack: +3, +6, or +15,
[Lv 4]: SP increase cost: 4%, 8%, or 20%, Status Attack: +4, +8, or +20,
[Lv 5]: SP increase cost: 5%, 10%, or 25%, Status Attack: +5, +10, or +25,
[Lv 6]: SP increase cost: 6%, 12%, or 30%, Status Attack: +6, +12, or +30,
[Lv 7]: SP increase cost: 7%, 14%, or 35%, Status Attack: +7, +14, or +35,
[Lv 8]: SP increase cost: 8%, 16%, or 40%, Status Attack: +8, +16, or +40,
[Lv 9]: SP increase cost: 9%, 18%, or 45%, Status Attack: +9, +18, or +45,
[Lv 10]: SP increase cost: 10%, 20%, or 50%, Status Attack: +10, +20, or +50,`,
    img: skillImgNo,
  },
];
