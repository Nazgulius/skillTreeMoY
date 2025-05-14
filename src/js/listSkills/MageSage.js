/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */

import skillImgNo from '../../img/no_img.png'; // заглушка
import advancedBook from '../../img/icon_sag/icon_sag_1.gif'; 
import castCancel from '../../img/icon_sag/icon_sag_2.gif'; 
import magicRod from '../../img/icon_sag/icon_sag_3.gif'; 
import spellBreaker from '../../img/icon_sag/icon_sag_4.gif'; 
import freeCast from '../../img/icon_sag/icon_sag_5.gif'; 
import flameWeapon from '../../img/icon_sag/icon_sag_7.gif'; 
import frostWeapon from '../../img/icon_sag/icon_sag_8.gif'; 
import lightningWeapon from '../../img/icon_sag/icon_sag_9.gif'; 
import seismicWeapon from '../../img/icon_sag/icon_sag_10.gif'; 
import volcano from '../../img/icon_sag/icon_sag_12.gif'; 
import deluge from '../../img/icon_sag/icon_sag_13.gif'; 
import whirlwind from '../../img/icon_sag/icon_sag_14.gif'; 
import sandstorm from '../../img/icon_sag/icon_sag_15.gif'; 
import landProtector from '../../img/icon_sag/icon_sag_15.gif'; 
import dispell from '../../img/icon_sag/icon_sag_16.gif'; 

// список скилов Sage
export const skillsSage = [  
  {
    id: "advancedBook",
    level: 0,
    dependencies: [],
    dependent: [
      { id: "frostWeapon" }, 
      { id: "lightningWeapon" }, 
      { id: "seismicWeapon" },
      { id: "flameWeapon" }, 
      { id: "deluge" }, 
      { id: "whirlwind" }, 
      { id: "sandstorm" },
      { id: "volcano" }, 
      { id: "castCancel" }, 
      { id: "magicRod" }, 
      { id: "spellBreaker" },
      { id: "freeCast" }
    ],
    element: null,
    skillName: "Advanced Book",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Physical
Requirement: None
Description: Increase magical attack and attack speed with Book Weapons. When [Lv 10], it increases MAtk in 6%.
[Lv 1]: MAtk +3, Attack Speed +0.5%,
[Lv 2]: MAtk +6, Attack Speed +1%,
[Lv 3]: MAtk +9, Attack Speed +1.5%,
[Lv 4]: MAtk +12, Attack Speed +2%,
[Lv 5]: MAtk +15, Attack Speed +2.5%,
[Lv 6]: MAtk +18, Attack Speed +3%,
[Lv 7]: MAtk +21, Attack Speed +3.5%,
[Lv 8]: MAtk +24, Attack Speed +4%,
[Lv 9]: MAtk +27, Attack Speed +4.5%,
[Lv 10]: MAtk +30, Attack Speed +5%`,
    img: advancedBook,
  },
  {
    id: "frostWeapon",
    level: 0,
    dependencies: [
      { id: "coldBolt", minLevel: 3 }, 
      { id: "advancedBook", minLevel: 3 }
    ],
    dependent: [
      { id: "deluge" },
      { id: "scrollbending" },
    ],
    element: null,
    skillName: "Frost Weapon",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Cold Bolt Lv: 3, Advanced Book Lv: 3
Description: Temporarily imbues a single targets weapon with Water property, increasing both physical and magical water damage. At Lv 5, the effect expands to a 5x5 area around the target but costs double the SP and triple the catalyst. Catalyst: 1x Indigo Point.
[Lv 1]: Water Damage +2%, Duration: 75 sec,
[Lv 2]: Water Damage +3%, Duration: 140 sec,
[Lv 3]: Water Damage +4%, Duration: 225 sec,
[Lv 4]: Water Damage +5%, Duration: 300 sec,
[Lv 5]: Water Damage +5%, Duration: 300 sec`,
    img: frostWeapon,
  },
  {
    id: "lightningWeapon",
    level: 0,
    dependencies: [
      { id: "lightningBolt", minLevel: 3 }, 
      { id: "advancedBook", minLevel: 3 }
    ],
    dependent: [
      { id: "whirlwind" },
      { id: "scrollbending" },
    ],
    element: null,
    skillName: "Lightning Weapon",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Lightning Bolt Lv: 3, Advanced Book Lv: 3
Description: Temporarily imbues a single targets weapon with Wind property, increasing both physical and magical wind damage. At Lv 5, the effect expands to a 5x5 area around the target but costs double the SP and triple the catalyst. Catalyst: 1x Canary Point.
[Lv 1]: Wind Damage +2%, Duration: 75 sec,
[Lv 2]: Wind Damage +3%, Duration: 140 sec,
[Lv 3]: Wind Damage +4%, Duration: 225 sec,
[Lv 4]: Wind Damage +5%, Duration: 300 sec,
[Lv 5]: Wind Damage +5%, Duration: 300 sec`,
    img: lightningWeapon,
  },
  {
    id: "seismicWeapon",
    level: 0,
    dependencies: [
      { id: "earthSpike", minLevel: 3 }, 
      { id: "advancedBook", minLevel: 3 },
    ],
    dependent: [
      { id: "sandstorm" },
      { id: "scrollbending" },
    ],
    element: null,
    skillName: "Seismic Weapon",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Earth Spike Lv: 3, Advanced Book Lv: 3
Description: Temporarily imbues a single targets weapon with Earth property, increasing both physical and magical earth damage. Each use consumes 1 Lime Green point. At [Lv 5], the effect expands to a [5*5] area around the target but costs double the SP and triple the catalyst. Catalyst: 1x Verdant Point.
[Lv 1]: Earth Damage +2%, Duration: 75 sec,
[Lv 2]: Earth Damage +3%, Duration: 140 sec,
[Lv 3]: Earth Damage +4%, Duration: 225 sec,
[Lv 4]: Earth Damage +5%, Duration: 300 sec,
[Lv 5]: Earth Damage +5%, Duration: 300 sec`,
    img: seismicWeapon,
  },
  {
    id: "flameWeapon",
    level: 0,
    dependencies: [
      { id: "fireBolt", minLevel: 3 }, 
      { id: "advancedBook", minLevel: 3 },
    ],
    dependent: [
      { id: "volcano" },
      { id: "scrollbending" },
    ],
    element: null,
    skillName: "Flame Weapon",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ally
Range: 9
Requirement: Fire Bolt Lv: 3, Advanced Book Lv: 3
Description: Temporarily imbues a single targets weapon with Fire property, increasing both physical and magical fire damage. At Lv 5, the effect expands to a 5x5 area around the target but costs double the SP and triple the catalyst. Catalyst: 1x Scarlet Point.
[Lv 1]: Fire Damage +2%, Duration: 75 sec,
[Lv 2]: Fire Damage +3%, Duration: 140 sec,
[Lv 3]: Fire Damage +4%, Duration: 225 sec,
[Lv 4]: Fire Damage +5%, Duration: 300 sec,
[Lv 5]: Fire Damage +5%, Duration: 300 sec`,
    img: flameWeapon,
  },
  {
    id: "deluge",
    level: 0,
    dependencies: [
      { id: "frostWeapon", minLevel: 2 },    
    ],
    dependent: [
      { id: "landProtector" },
      { id: "psychicWave" },
    ],
    element: null,
    skillName: "Deluge",
    maxLevel: 3,
    inform: `Max Lv: 3
Skill Form: Active
Type: Magical
Target: Ground
Range: 2
Requirement: Frost Weapon Lv: 2
Description: Creates a Deluge Terrain in a 7x7 cell area, amplifying all Water property attacks and increasing the MaxHP of all allies within the area. This terrain also doubles the duration of Blinding Mist and acts as water for skills like Aqua Benedicta and Water Ball. Casting other elemental terrains while this buff is active does not incur a Catalyst cost. Every 3 seconds within the Deluge terrain: Water property entities regenerate 1% of their HP. Fire property entities take 1% of their HP as magical damage, which can be reduced by any magic damage reduction.. Catalyst: 3x Indigo Point.
[Lv 1]: Water Damage +10%, MaxHP +5%, Duration: 1 min.
[Lv 2]: Water Damage +15%, MaxHP +10%, Duration: 2 min.
[Lv 3]: Water Damage +20%, MaxHP +15%, Duration: 3 min.`,
img: deluge,
  },
  {
    id: "whirlwind",
    level: 0,
    dependencies: [
      { id: "lightningWeapon", minLevel: 2 }, 
    ],
    dependent: [
      { id: "landProtector" },
      { id: "psychicWave" },
    ],
    element: null,
    skillName: "Whirlwind",
    maxLevel: 3,
    inform: `Max Lv: 3
Skill Form: Active
Type: Magical
Target: Ground
Range: 2
Requirement: Lightning Weapon Lv: 2
Description: Creates a Whirlwind Terrain in a 7x7 cell area, enhancing all Wind property attacks and increasing the Flee Rate of allies within the area. Additionally, this terrain extends the duration of Fire Wall by 50%. Casting other elemental terrains while this buff is active does not incur a Catalyst cost. Every 3 seconds within the Whirlwind terrain: Wind property entities regenerate 1% of their HP. Water property entities take 1% of their HP as magical damage, which can be reduced by any magic damage reduction. Catalyst: 3x Canary Point.
[Lv 1]: Wind Damage +10%, Flee +10, Duration: 1 min,
[Lv 2]: Wind Damage +15%, Flee +20, Duration: 2 min,
[Lv 3]: Wind Damage +20%, Flee +30, Duration: 3 min`,
    img: whirlwind,
  },
  {
    id: "sandstorm",
    level: 0,
    dependencies: [
      { id: "seismicWeapon", minLevel: 2 }, 
    ],
    dependent: [
      { id: "landProtector" },
      { id: "psychicWave" },
    ],
    element: null,
    skillName: "Sandstorm",
    maxLevel: 3,
    inform: `Max Lv: 3
Skill Form: Active
Type: Magical
Target: Ground
Range: 2
Requirement: Seismic Weapon Lv: 2
Description: Creates a Sandstorm Terrain in a 7x7 cell area, amplifying all Wind property attacks and increasing the Def of allies within the area. This terrain also prevents the use of any form of invisibility. Casting other elemental terrains while this buff is active does not incur a Catalyst cost. Every 3 seconds within the Sandstorm terrain: Earth property entities regenerate 1% of their HP. Wind property entities take 1% of their HP as magical damage, which can be reduced by any magic damage reduction. Catalyst: 3x Verdant Point.
[Lv 1]: Earth Damage +10%, Def +20, Duration: 1 min,
[Lv 2]: Earth Damage +15%, Def +30, Duration: 2 min,
[Lv 3]: Earth Damage +20%, Def +40, Duration: 3 min`,
    img: sandstorm,
  },
  {
    id: "volcano",
    level: 0,
    dependencies: [
      { id: "flameWeapon", minLevel: 2 }, 
    ],
    dependent: [
      { id: "landProtector" },
      { id: "psychicWave" },
    ],
    element: null,
    skillName: "Volcano",
    maxLevel: 3,
    inform: `Max Lv: 3
Skill Form: Active
Type: Magical
Target: Ground
Range: 2
Requirement: Flame Weapon Lv: 2
Description: Transforms a 7x7 area into a Volcano Terrain, enhancing all Fire property attacks and boosting the Atk/MAtk of all allies within the area. This terrain prevents the placement of Ice Wall and interacts with Fire Ball, acting as an additional source of fire. Casting other elemental terrains while this buff is active does not incur a Catalyst cost. Every 3 seconds within the Volcano terrain: Fire property entities regenerate 1% of their HP. Earth property entities take 1% of their HP as magical damage, which can be reduced by any magic damage reduction. Catalyst: 3x Scarlet Point.
[Lv 1]: Fire Damage +10%, Atk/MAtk +10, Duration: 1 min,
[Lv 2]: Fire Damage +15%, Atk/MAtk +20, Duration: 2 min,
[Lv 3]: Fire Damage +20%, Atk/MAtk +30, Duration: 3 min`,
    img: volcano,
  },
  {
    id: "castCancel",
    level: 0,
    dependencies: [
      { id: "advancedBook", minLevel: 2 }
    ],
    dependent: [
      { id: "freeCast" },
      { id: "soulBurn" },
    ],
    element: null,
    skillName: "Cast Cancel",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Advanced Book Lv: 2
Description: Only usable while casting a magic spell. Immediately cancels a spell, allowing the caster to take another action without any delay. The higher the skill level, the lower the SP consumption of the casting skill.
[Lv 1]: SP Consumption: 90%,
[Lv 2]: SP Consumption: 70%,
[Lv 3]: SP Consumption: 50%,
[Lv 4]: SP Consumption: 30%,
[Lv 5]: SP Consumption: 10%`,
    img: castCancel,
  },
  {
    id: "dispell",
    level: 0,
    dependencies: [
      { id: "spellBreaker", minLevel: 3 }
    ],
    dependent: [
      { id: "abracadabra" },
      { id: "soulBurn" },
    ],
    element: null,
    skillName: "Dispell",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Spell Breaker Lv: 3
Description: Casting Dispell has a chance of canceling all magic effects that have been cast on a target. Success chance is determined by the target's magic defense. If you use level 5, it will succeed 100% regardless. Catalyst: 1x Yellow Gemstone.
[Lv 1]: Success Chance: 60%,
[Lv 2]: Success Chance: 70%,
[Lv 3]: Success Chance: 80%,
[Lv 4]: Success Chance: 90%,
[Lv 5]: Success Chance: 100%`,
    img: dispell,
  },
  {
    id: "magicRod",
    level: 0,
    dependencies: [
      { id: "advancedBook", minLevel: 4 }
    ],
    dependent: [
      { id: "spellBreaker" },
      { id: "indulge" },
      { id: "soulBurn" },
      { id: "soulChange" },
    ],
    element: null,
    skillName: "Magic Rod",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Self
Requirement: Advanced Book Lv: 4
Description: Upon being attacked with a skill, using Magic Rod in the correct moment has a chance of absorbing the SP that the enemy has used for the skill to the caster instead of damage. Countering Spell Breaker with Magic Rod will reduce the target's SP by 20% when it is successful.
[Lv 1]: Timing: 0.4 seconds, SP Absorption: 20%,
[Lv 2]: Timing: 0.6 seconds, SP Absorption: 40%,
[Lv 3]: Timing: 0.8 seconds, SP Absorption: 60%,
[Lv 4]: Timing: 1.0 second, SP Absorption: 80%,
[Lv 5]: Timing: 1.2 seconds, SP Absorption: 100%`,
    img: magicRod,
  },
  {
    id: "spellBreaker",
    level: 0,
    dependencies: [
      { id: "magicRod", minLevel: 1 },
    ],
    dependent: [
      { id: "soulChange" },
      { id: "dispell" },
    ],
    element: null,
    skillName: "Spell Breaker",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Enemy
Range: 9
Requirement: Magic Rod Lv: 1
Description: Interrupts a magic spell cast by an enemy and receive the SP the enemy used to cast that spell, as well as reduce 2% of the enemy's HP. At skill 5 and above, half of this HP damage is absorbed by the caster. HP cannot be drained from Boss monsters and Guardians, but this skill does have 10% chance of interrupting Boss monster spells.
[Lv 1]: SP Absorption: 0%,
[Lv 2]: SP Absorption: 25%,
[Lv 3]: SP Absorption: 50%,
[Lv 4]: SP Absorption: 75%,
[Lv 5]: SP Absorption: 100%`,
    img: spellBreaker,
  },
  {
    id: "freeCast",
    level: 0,
    dependencies: [
      { id: "castCancel", minLevel: 1 },
    ],
    dependent: [
       { id: "doubleCasting" },
       { id: "spellwish" },
    ],
    element: null,
    skillName: "Free Cast",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Passive
Type: Magical
Requirement: Cast Cancel Lv: 1
Description: Enables moving and attacking during the casting of magic spells.
[Lv 1]: Movement Speed: 30%, , Attack Speed: 55%,
[Lv 2]: Movement Speed: 35%, , Attack Speed: 60%,
[Lv 3]: Movement Speed: 40%, , Attack Speed: 65%,
[Lv 4]: Movement Speed: 45%, , Attack Speed: 70%,
[Lv 5]: Movement Speed: 50%, , Attack Speed: 75%,
[Lv 6]: Movement Speed: 55%, , Attack Speed: 80%,
[Lv 7]: Movement Speed: 60%, , Attack Speed: 85%,
[Lv 8]: Movement Speed: 65%, , Attack Speed: 90%,
[Lv 9]: Movement Speed: 70%, , Attack Speed: 95%,
[Lv 10]: Movement Speed: 75%, , Attack Speed: 100%`,
    img: freeCast,
  },
  {
    id: "spellwish",
    level: 0,
    dependencies: [
      { id: "freeCast", minLevel: 4 },
    ],
    dependent: [],
    element: null,
    skillName: "Spellwish",
    maxLevel: 10,
    inform: `Max Lv: 10
Skill Form: Active
Type: Magical
Target: Self
Requirement: Free Cast Lv: 4
Description: Grants the ability to automatically cast a spell when performing basic attacks. Auto-cast spells consume only 2/3 of their SP cost. Fire Bolt, Fire Ball, Cold Bolt, Frost Diver, Lightning Bolt, Thunderstorm, Earth Spike, Soul Strike, and Napalm Beat can be auto-cast if learned. Auto-cast level equals Learned Level x Base Level%.
[Lv 1]: Chance of Autocast: 3%,
[Lv 2]: Chance of Autocast: 6%,
[Lv 3]: Chance of Autocast: 9%,
[Lv 4]: Chance of Autocast: 12%,
[Lv 5]: Chance of Autocast: 15%,
[Lv 6]: Chance of Autocast: 18%,
[Lv 7]: Chance of Autocast: 21%,
[Lv 8]: Chance of Autocast: 24%,
[Lv 9]: Chance of Autocast: 27%,
[Lv 10]: Chance of Autocast: 30%`,
    img: skillImgNo,
  },
  {
    id: "scrollbending",
    level: 0,
    dependencies: [
      { id: "flameWeapon", minLevel: 4 },
      { id: "frostWeapon", minLevel: 4 },
      { id: "lightningWeapon", minLevel: 4 },
      { id: "seismicWeapon", minLevel: 4 },
    ],
    dependent: [],
    element: null,
    skillName: "Scrollbending",
    maxLevel: 5,
    inform: `Max Lv: 1 (or 5)
Skill Form: Active
Type: Misc
Target: Self
Requirement: Flame Weapon Lv: 4, Frost Weapon Lv: 4, Lightning Weapon Lv: 4, Seismic Weapon Lv: 4
Description: Uses scrollbending techniques to bind a chosen element to a 1 blank scroll. The quantity of scrolls crafted receives an additional bonus based on Base Level, Job Level, and all attributes, with LUK being the most influential. The relevance of attributes increases exponentially as they grow. The skill level affects the efficiency of the additional production. Regardless of the skill level, the additional production varies. Scrollbending Creation Guide ,
[Lv 1]: No Additional Bonus,
[Lv 2]: Additional Efficiency -75%,
[Lv 3]: Additional Efficiency -50%,
[Lv 4]: Additional Efficiency -25%,
[Lv 5]: Full Efficiency`,
    img: skillImgNo,
  },
  {
    id: "landProtector",
    level: 0,
    dependencies: [
      { id: "volcano", minLevel: 2 },
      { id: "deluge", minLevel: 2 },
      { id: "sandstorm", minLevel: 2 },
      { id: "whirlwind", minLevel: 2 },
    ],
    dependent: [],
    element: null,
    skillName: "Land Protector",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Range: 2
Requirement: Volcano Lv: 2, Deluge Lv: 2, Sandstorm Lv: 2, Whirlwind Lv: 2
Description: Creates a protective area on the targeted location that nullifies and blocks certain ground-targeting skills. Sages can cancel each other's instances of this skill. This skill cannot be cast on cells currently affected by any floor skill or ground-targeted skill. Catalyst: 1x Yellow Gemstone.
[Lv 1]: Duration: 1 min, Effective AoE: 3x3,
[Lv 2]: Duration: 2 min, Effective AoE: 5x5,
[Lv 3]: Duration: 3 min, Effective AoE: 7x7,
[Lv 4]: Duration: 4 min, Effective AoE: 9x9,
[Lv 5]: Duration: 5 min, Effective AoE: 11x11`,
    img: landProtector,
  },
  {
    id: "psychicWave",
    level: 0,
    dependencies: [
      { id: "volcano", minLevel: 2 },
      { id: "deluge", minLevel: 2 },
      { id: "sandstorm", minLevel: 2 },
      { id: "whirlwind", minLevel: 2 },
    ],
    dependent: [],
    element: null,
    skillName: "Psychic Wave",
    maxLevel: 5,
    inform: `Max Lv: 5
Skill Form: Active
Type: Magical
Target: Ground
Range: 9
Requirement: Volcano Lv: 2, Deluge Lv: 2, Sandstorm Lv: 2, Whirlwind Lv: 2
Description: Fires a wave of psychic energy at targets in an area to deal multiple hits of Neutral elemental magic. The element of this skill can be changed by applying Frost Weapon, Lightning Weapon, Seismic Weapon, or Flame Weapon. Damage additionally increases according to the skill level and caster's Base Level.
[Lv 1]: MAtk 120% x Hits,
[Lv 2]: MAtk 130% x Hits,
[Lv 3]: MAtk 140% x Hits,
[Lv 4]: MAtk 150% x Hits,
[Lv 5]: MAtk 160% x Hits`,
    img: skillImgNo,
  },
];




/*  author Chalykh Maksim 
  # data 25.01.2025 
  # email: chalyh.maksim.88@mail.ru */
