/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import cloaking from '../../img/icon_ass/icon_ass_1.png'; 
import poisonWeapon from '../../img/icon_ass/icon_ass_2.png'; 
import grimtooth from '../../img/icon_ass/icon_ass_3.png'; 
import katarMastery from '../../img/icon_ass/icon_ass_4.png'; 
import sonicBlow from '../../img/icon_ass/icon_ass_8.png'; 
import poisonReact from '../../img/icon_ass/icon_ass_6.png'; 
import venomDust from '../../img/icon_ass/icon_ass_9.png'; 
import venomSplasher from '../../img/icon_ass/icon_ass_10.png'; 
import dualWieldingMastery from '../../img/icon_ass/icon_ass_11.png'; 
import throwingKnife from '../../img/icon_ass/icon_ass_12.png'; 
import poisonery from '../../img/icon_ass/icon_ass_13.png'; 
import vSAnticipation from '../../img/icon_ass/icon_ass_14.png'; 

// список скилов Assassin
export const skillsAssassin = [  
  {
    id: "katarMastery",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "crossLethality" },
      { id: "grimtooth" },
    ],
    element: null,
    skillName: "Katar Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increase attack with Katars Weapons. When [Lv 10], it increases Attack in 6%. Also increases the Critical rate when using Katars Class Weapons. Unlike other two-handed weapons, the katar allows assassins to strike twice with each basic attack, once with the right hand and once with the left. Each hit deals 60% of the normal damage. Attack bonus granted by this skill is of the Equipment type.
[Lv 1]: Atk +4, Critical Rate +10%,
[Lv 2]: Atk +8, Critical Rate +20%,
[Lv 3]: Atk +12, Critical Rate +30%,
[Lv 4]: Atk +16, Critical Rate +40%,
[Lv 5]: Atk +20, Critical Rate +50%,
[Lv 6]: Atk +24, Critical Rate +60%,
[Lv 7]: Atk +28, Critical Rate +70%,
[Lv 8]: Atk +32, Critical Rate +80%,
[Lv 9]: Atk +36, Critical Rate +90%,
[Lv 10]: Atk +40, Critical Rate +100%`,
    img: katarMastery,
  },
  {
    id: "cloaking",
    level: 0,
    dependencies: [
      { id: "hiding", minLevel: 1 }
    ],
    dependent: [
      { id: "meteorAssault" },
      { id: "soulDestroyer" },
      { id: "grimtooth" },
      { id: "throwingKnife" },
    ],
    element: null,
    skillName: "Cloaking",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Hiding Lv: 1
Description: Conceals yourself, allowing movement while hidden. Movement Speed is enhanced when attached to a wall but reduced when not. Initially, the skill requires proximity to a wall. While active, SP is drained. Demon, Insect race monsters, and boss monsters can detect the user. After the effect ends, the item cannot be picked up for 3 seconds.
[Lv 1]: Off Wall:Not available, On Wall:103%, 1 SP per 0.5sec,
[Lv 2]: Off Wall: 76%, On Wall:106%, 1 SP per 1.0sec,
[Lv 3]: Off Wall: 79%, On Wall:109%, 1 SP per 2.0sec,
[Lv 4]: Off Wall: 82%, On Wall:112%, 1 SP per 3.0sec,
[Lv 5]: Off Wall: 85%, On Wall:115%, 1 SP per 4.0sec,
[Lv 6]: Off Wall: 88%, On Wall:118%, 1 SP per 5.0sec,
[Lv 7]: Off Wall: 91%, On Wall:121%, 1 SP per 6.0sec,
[Lv 8]: Off Wall: 94%, On Wall:124%, 1 SP per 7.0sec,
[Lv 9]: Off Wall: 97%, On Wall:127%, 1 SP per 8.0sec,
[Lv 10]: Off Wall:100%, On Wall:130%, 1 SP per 9.0sec`,
    img: cloaking,
  },
  {
    id: "dualWieldingMastery",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "crossLethality" },
      { id: "meteorAssault" },
      { id: "throwingKnife" },
    ],
    element: null,
    skillName: "Dual Wielding Mastery",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increase attack with Dual Wielding Weapons. Equipping two weapons at once reduces the Attack Power of the weapons in 50%, this skill restores damage that is reduced.
[Lv 1]: Atk +4, Dual Wielding Penalty -5%,
[Lv 2]: Atk +8, Dual Wielding Penalty -10%,
[Lv 3]: Atk +12, Dual Wielding Penalty -15%,
[Lv 4]: Atk +16, Dual Wielding Penalty -20%,
[Lv 5]: Atk +20, Dual Wielding Penalty -25%,
[Lv 6]: Atk +24, Dual Wielding Penalty -30%,
[Lv 7]: Atk +28, Dual Wielding Penalty -35%,
[Lv 8]: Atk +32, Dual Wielding Penalty -40%,
[Lv 9]: Atk +36, Dual Wielding Penalty -45%,
[Lv 10]: Atk +40, Dual Wielding Penalty -50%`,
    img: dualWieldingMastery,
  },
  {
    id: "throwingKnife",
    level: 0,
    dependencies: [
      { id: "dualWieldingMastery", minLevel: 5 },
      { id: "cloaking", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Throwing Knife",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 12
Requirement: Dual Wielding Mastery Lv: 5, Cloaking Lv: 5
Description: Precisely aims and throws a knife at the target, inflicting physical ranged damage. Damage increases based on the target lost HP and ignores 1% of Defense for every 1% of target's HP lost. Status effects depend on the type of Throwing Knife used.
[Lv 1]: Atk 115%,
[Lv 2]: Atk 130%,
[Lv 3]: Atk 145%,
[Lv 4]: Atk 160%,
[Lv 5]: Atk 175%,
[Lv 6]: Atk 190%,
[Lv 7]: Atk 205%,
[Lv 8]: Atk 220%,
[Lv 9]: Atk 235%,
[Lv 10]: Atk 250%`,
    img: throwingKnife,
  },
  {
    id: "grimtooth",
    level: 0,
    dependencies: [
      { id: "cloaking", minLevel: 2 },
      { id: "katarMastery", minLevel: 4 },
    ],
    dependent: [
      { id: "sonicBlow" },
    ],
    element: null,
    skillName: "Grimtooth",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 5 ~ 9
Requirement: Cloaking Lv: 2, Katar Mastery Lv: 4
Description: Strikes a single target with the equipped katar while hidden, dealing physical damage to all enemies in a 3x3 area. User AGI increases the damage. When used against normal monsters, it reduces their Move Speed by 50% for 1 second. Can be used from Cloaking, but this negates the AGI scaling, and doubles the SP cost.
[Lv 1]: Atk (120 + AGI)%, Range 5 cells,
[Lv 2]: Atk (140 + AGI)%, Range 5 cells,
[Lv 3]: Atk (160 + AGI)%, Range 6 cells,
[Lv 4]: Atk (180 + AGI)%, Range 6 cells,
[Lv 5]: Atk (200 + AGI)%, Range 7 cells,
[Lv 6]: Atk (220 + AGI)%, Range 7 cells,
[Lv 7]: Atk (240 + AGI)%, Range 8 cells,
[Lv 8]: Atk (260 + AGI)%, Range 8 cells,
[Lv 9]: Atk (280 + AGI)%, Range 9 cells,
[Lv 10]: Atk (300 + AGI)%, Range 9 cells`,
    img: grimtooth,
  },
  {
    id: "sonicBlow",
    level: 0,
    dependencies: [
      { id: "grimtooth", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Sonic Blow",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Enemy
Range: 1
Requirement: Grimtooth Lv: 5
Description: Unleashes a flurry of rapid Katar strikes on the target, with a chance to inflict the Stun status.
[Lv 1]: Atk 300%, Stun Chance: 12%,
[Lv 2]: Atk 400%, Stun Chance: 14%,
[Lv 3]: Atk 500%, Stun Chance: 16%,
[Lv 4]: Atk 600%, Stun Chance: 18%,
[Lv 5]: Atk 700%, Stun Chance: 20%,
[Lv 6]: Atk 800%, Stun Chance: 22%,
[Lv 7]: Atk 900%, Stun Chance: 24%,
[Lv 8]: Atk 1000%, Stun Chance: 26%,
[Lv 9]: Atk 1100%, Stun Chance: 28%,
[Lv 10]: Atk 1200%, Stun Chance: 30%`,
    img: sonicBlow,
  },
   {
    id: "poisonWeapon",
    level: 0,
    dependencies: [
      { id: "envenom", minLevel: 1 },
    ],
    dependent: [
      { id: "meteorAssault" },
      { id: "soulDestroyer" },
      { id: "poisonReact" },
      { id: "poisonery" },
      { id: "venomDust" },
    ],
    element: null,
    skillName: "Poison Weapon",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Physical
Target: Ally
Range: 9
Requirement: Envenom Lv: 1
Description: Temporarily imbue a single target weapon with the Poison property, giving a chance to poison enemies upon physical attack. At Lv 5, the effect expands to a 5x5 area around the target but costs double the SP and triple the catalyst. Catalyst: 1x Condensed Poison.
[Lv 1]: Poison Damage by 2%, Duration: 75 secs, Poisoning chance: 2%,
[Lv 2]: Poison Damage by 3%, Duration: 150 secs, Poisoning chance: 4%,
[Lv 3]: Poison Damage by 4%, Duration: 225 secs, Poisoning chance: 6%,
[Lv 4]: Poison Damage by 5%, Duration: 300 secs, Poisoning chance: 8%,
[Lv 5]: Poison Damage by 5%, Duration: 300 secs, Poisoning chance: 10%`,
    img: poisonWeapon,
  },
  {
    id: "poisonReact",
    level: 0,
    dependencies: [
      { id: "poisonWeapon", minLevel: 3 },
    ],
    dependent: [],
    element: null,
    skillName: "Poison React",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Self
Requirement: Poison Weapon Lv: 3
Description: Amplifies and redirects 70% of the Poison damage received as magic damage to the attacker. When attacked by other properties, casts Envenom at the learned level. Reflection and auto-casting chances are influenced by Venom Dust and Venom Splasher levels. Chance to cast Envenom is reduced to 1/3 if the target misses.
[Lv 1]: Amplifies in 130%, Chance: 6%, Duration: 20 sec,
[Lv 2]: Amplifies in 160%, Chance: 12%, Duration: 20 sec,
[Lv 3]: Amplifies in 190%, Chance: 18%, Duration: 30 sec,
[Lv 4]: Amplifies in 220%, Chance: 24%, Duration: 30 sec,
[Lv 5]: Amplifies in 250%, Chance: 30%, Duration: 40 sec,
[Lv 6]: Amplifies in 280%, Chance: 36%, Duration: 40 sec,
[Lv 7]: Amplifies in 310%, Chance: 42%, Duration: 50 sec,
[Lv 8]: Amplifies in 340%, Chance: 48%, Duration: 50 sec,
[Lv 9]: Amplifies in 370%, Chance: 54%, Duration: 60 sec,
[Lv 10]: Amplifies in 400%, Chance: 60%, Duration: 60 sec`,
    img: poisonReact,
  },
  {
    id: "poisonery",
    level: 0,
    dependencies: [
      { id: "envenom", minLevel: 10 },
      { id: "detoxify", minLevel: 1 },
      { id: "poisonWeapon", minLevel: 5 },
    ],
    dependent: [
      { id: "deadlyPoisonMastery" },
    ],
    element: null,
    skillName: "Poisonery",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Envenom Lv: 10, Detoxify Lv: 1, Poison Weapon Lv: 5
Description: Creates Poison Bottles. The success rate is determined by your Base Level and Job Level, reaching up to 100%. The amount produced receives an additional bonus based on all attributes, with DEX being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies. Poisonery Creation Guide ,
[Lv 1]: No Additional Bonus,
[Lv 2]: Additional Efficiency -75%,
[Lv 3]: Additional Efficiency -50%,
[Lv 4]: Additional Efficiency -25%,
[Lv 5]: Full Efficiency

Poison Bottle
New calculation:
For Basic Attacks: ATK% + (15 + Skill Lv × 7),
For Skills: ATK%/MATK% + (5 + Skill Lv × 7)
`,
    img: poisonery,
  },  
  {
    id: "venomDust",
    level: 0,
    dependencies: [
      { id: "poisonWeapon", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Venom Dust",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Physical
Target: Ground
Range: 9
Requirement: Poison Weapon Lv: 5
Description: Contaminates a targeted location with a toxic cloud, reducing the resistance to poisoning and poison property of all enemies within the area. The resistance drop is more severe at the center of the cloud. Increases the activation chance of Poison React by 2% per level learned. Catalyst: 1x Noxious Powder Bottle.
[Lv 1]: Poison resistance Drop: 5% ~ 1%, Durarion: 6 sec,
[Lv 2]: Poison resistance Drop: 10% ~ 2% Durarion: 12 sec,
[Lv 3]: Poison resistance Drop: 15% ~ 3%, Durarion: 18 sec,
[Lv 4]: Poison resistance Drop: 20% ~ 4%, Durarion: 24 sec,
[Lv 5]: Poison resistance Drop: 25% ~ 5%, Durarion: 30 sec,
[Lv 6]: Poison resistance Drop: 30% ~ 6%, Durarion: 36 sec,
[Lv 7]: Poison resistance Drop: 35% ~ 7%, Durarion: 42 sec,
[Lv 8]: Poison resistance Drop: 40% ~ 8%, Durarion: 48 sec,
[Lv 9]: Poison resistance Drop: 45% ~ 9%, Durarion: 54 sec,
[Lv 10]: Poison resistance Drop: 50% ~ 10%, Durarion: 60 sec`,
    img: venomDust,
  },
  {
    id: "venomSplasher",
    level: 0,
    dependencies: [
      { id: "poisonReact", minLevel: 5 },
      { id: "venomDust", minLevel: 5 },
    ],
    dependent: [],
    element: null,
    skillName: "Venom Splasher",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Enemy
Range: 4
Requirement: Poison React Lv: 5, Venom Dust Lv: 5
Description: Attaches a deadly toxin to a single target, causing a venomous explosion after 90 seconds. Use V.S Anticipation to detonate Venom Splasher early. Explosion deals Magical Poison Damage to all enemies around the target. If the target is poisoned, the poison spreads to nearby enemies. Up to 5 Venom Splashers can be set on different targets. Increases Poison React activation chance by 2% per level.
[Lv 1]: MAtk 610%, Cooldown: 2 sec,
[Lv 2]: MAtk 700%, Cooldown: 4 sec,
[Lv 3]: MAtk 800%, Cooldown: 6 sec,
[Lv 4]: MAtk 900%, Cooldown: 8 sec,
[Lv 5]: MAtk 1000%, Cooldown: 10 sec,
[Lv 6]: MAtk 1100%, Cooldown: 12 sec,
[Lv 7]: MAtk 1200%, Cooldown: 14 sec,
[Lv 8]: MAtk 1300%, Cooldown: 16 sec,
[Lv 9]: MAtk 1400%, Cooldown: 18 sec,
[Lv 10]: MAtk 1500%, Cooldown: 20 sec`,
    img: venomSplasher,
  },  
  {
    id: "vSAnticipation",
    level: 0,
    dependencies: [],
    dependent: [],
    element: null,
    skillName: "V.S. Anticipation",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active 
Type: Misc 
Target: Self 
Range: 9 
Cooldown: 3.0 s
Description: Instantly detonates your Venom Splasher in a large 21x21 area and reduces its cooldown. Can be used while Cloaking without breaking it.
[Lv 1]: Cooldown Reduction: 4 secs 
[Lv 2]: Cooldown Reduction: 8 secs 
[Lv 3]: Cooldown Reduction: 12 secs 
[Lv 4]: Cooldown Reduction: 16 secs 
[Lv 5]: Cooldown Reduction: 20 secs`,
    img: vSAnticipation,
  },
];


/*  author Chalykh Maksim 
  # data 11.02.2025 
  # email: chalyh.maksim.88@mail.ru */
