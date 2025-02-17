/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка

// список скилов Lord Knight
export const skillsLordKnight = [  
  {
    id: "auraBlade",
    level: 0,
    dependencies: [
      { id: "swordQuicken", minLevel: 4 },
    ],
    dependent: [],
    element: null,
    skillName: "Aura Blade",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Sword Quicken Lv: 5
Description: Requires Swords Class Weapon. Produces a special aura around the sword blade to strengthen its power temporarily. For every Job Level above 50, the user gains +25 True Damage.
[Lv 1]: True Damage +50,
[Lv 2]: True Damage +100,
[Lv 3]: True Damage +150,
[Lv 4]: True Damage +200,
[Lv 5]: True Damage +250,
[Lv 6]: True Damage +300,
[Lv 7]: True Damage +350,
[Lv 8]: True Damage +400,
[Lv 9]: True Damage +450,
[Lv 10]: True Damage +500`,
    img: skillImgNo,
  },
  {
    id: "Berserk",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "Berserk",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: None
Description: Unleashes the power of rage to greatly enhance the user temporarily, at the cost of extreme vulnerability. Increases maximum HP, movement speed, attack speed by 30%, and attack power by 100%, while keeping the Endure state active. Reduces defense, magic defense, evasion, and healing received. Disables consumables, and attack skills. Disables switch of equipments.
[Lv 1]: Max HP +60%, FLEE -95%, DEF/MDEF -95%, Received healing -90%,
[Lv 2]: Max HP +70%, FLEE -90%, DEF/MDEF -95%, Received healing -90%,
[Lv 3]: Max HP +80%, FLEE -85%, DEF/MDEF -90%, Received healing -80%,
[Lv 4]: Max HP +90%, FLEE -80%, DEF/MDEF -90%, Received healing -80%,
[Lv 5]: Max HP +100%, FLEE -75%, DEF/MDEF -85%, Received healing -70%,
[Lv 6]: Max HP +110%, FLEE -70%, DEF/MDEF -85%, Received healing -70%,
[Lv 7]: Max HP +120%, FLEE -65%, DEF/MDEF -80%, Received healing -60%,
[Lv 8]: Max HP +130%, FLEE -60%, DEF/MDEF -80%, Received healing -60%,
[Lv 9]: Max HP +140%, FLEE -55%, DEF/MDEF -75%, Received healing -50%,
[Lv 10]: Max HP +150%, FLEE -50%, DEF/MDEF -75%, Received healing -50%`,
    img: skillImgNo,
  },
  {
    id: "concentration",
    level: 0,
    dependencies: [
      { id: "spearQuicken", minLevel: 4 },
    ],
    dependent: [],
    element: null,
    skillName: "Concentration",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Spear Quicken Lv: 5
Description: Requires Spear Class Weapon. Boosts Attack Power and Hit Rate.
[Lv 1]: Atk and Hit +2%,
[Lv 2]: Atk and Hit +4%,
[Lv 3]: Atk and Hit +6%,
[Lv 4]: Atk and Hit +8%,
[Lv 5]: Atk and Hit +10%,
[Lv 6]: Atk and Hit +12%,
[Lv 7]: Atk and Hit +14%,
[Lv 8]: Atk and Hit +16%,
[Lv 9]: Atk and Hit +18%,
[Lv 10]: Atk and Hit +20%`,
    img: skillImgNo,
  },
  {
    id: "jointBeat",
    level: 0,
    dependencies: [
      { id: "brandishSpear", minLevel: 6 },
    ],
    dependent: [],
    element: null,
    skillName: "Joint Beat",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 3
Requirement: Brandish Spear Lv: 7
Description: Requires Spear Class Weapon. Executes precision strikes at an enemys vital points, inflicting various debilitating effects.The skills ratio is influenced by the users Vitality minus the targets Vitality. Targets with higher Vitality may exhibit increased resistance against the debilitating effects, potentially reducing the skills efficacy.
[Lv 1]: Atk 110%, Random Break,
[Lv 2]: Atk 120%, Random Break,
[Lv 3]: Atk 130%, Random Break,
[Lv 4]: Atk 140%, Random Break,
[Lv 5]: Atk 150%, Ankle Break: Halves Move Speed,
[Lv 6]: Atk 160%, Wrist Break: Decreases Aspd by 25%,
[Lv 7]: Atk 170%, Knee Break: Decreases Move Speed by 30% and Aspd by 10%,
[Lv 8]: Atk 180%, Shoulder Break: Halves soft defense,
[Lv 9]: Atk 190%, Waist Break: Decreases soft defense by 25% and attack by 25%,
[Lv 10]: Atk 200%, Neck Break: Doubles damage from this skill and inflicts Bleeding`,
    img: skillImgNo,
  },
  {
    id: "parry",
    level: 0,
    dependencies: [
      { id: "counterAttack", minLevel: 4 },
      { id: "twoHandedSwordMastery", minLevel: 9 },
    ],
    dependent: [],
    element: null,
    skillName: "Parry",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Counter Attack Lv: 5, Two-Handed Sword Mastery Lv: 10
Description: Requires Two-Handed Sword Class Weapon. Allows the user to block physical attacks with the equipped two-handed sword by chance temporarily. In PvP maps, the activation chance is influenced by your AGI and that of your opponent. For every 10 points of difference, the chance of blocking is reduced by 3%.
[Lv 1]: Block +23%,
[Lv 2]: Block +26%,
[Lv 3]: Block +29%,
[Lv 4]: Block +32%,
[Lv 5]: Block +35%,
[Lv 6]: Block +38%,
[Lv 7]: Block +41%,
[Lv 8]: Block +44%,
[Lv 9]: Block +47%,
[Lv 10]: Block +50%`,
    img: skillImgNo,
  },
  {
    id: "spiralPierce",
    level: 0,
    dependencies: [
      { id: "spearBoomerang", minLevel: 4 },
    ],
    dependent: [],
    element: null,
    skillName: "Spiral Pierce",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 6 ~ 10
Requirement: Spear Boomerang Lv: 5
Description: Requires Spear Class Weapon. Throws your spear with a spiraling motion, piercing the target five times. Damage is greatly affected by the Weight of the equipped weapon and the Spear Boomerang Learned Level. If used on a target that was recently immobilized (up to 3 seconds after any immobilization), adds the weapon's Weight as True Damage at the end of each hit. Casting Time and Range increase with the level of this skill.
[Lv 1]: Variable C.Time: 0.36 Seconds, Range: 6 cells,
[Lv 2]: Variable C.Time: 0.36 Seconds, Range: 6 cells,
[Lv 3]: Variable C.Time: 0.42 Seconds, Range: 7 cells,
[Lv 4]: Variable C.Time: 0.42 Seconds, Range: 7 cells,
[Lv 5]: Variable C.Time: 0.48 Seconds, Range: 8 cells,
[Lv 6]: Variable C.Time: 0.48 Seconds, Range: 8 cells,
[Lv 7]: Variable C.Time: 0.54 Seconds, Range: 9 cells,
[Lv 8]: Variable C.Time: 0.54 Seconds, Range: 9 cells,
[Lv 9]: Variable C.Time: 0.6 Seconds, Range: 10 cells,
[Lv 10]: Variable C.Time: 0.6 Seconds, Range: 10 cells`,
    img: skillImgNo,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
