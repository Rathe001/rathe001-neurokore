import React from 'react';

export const STATS = [
  {
    id: 0,
    name: 'Strength',
    abbr: 'STR',
    desc: (
      <p>
        Slightly increases damage with all attacks. Strength is also useful to lift heavy objects,
        and increases HP.
      </p>
    ),
    cost: 2,
  },
  {
    id: 1,
    name: 'Dexterity',
    abbr: 'DEX',
    desc: (
      <p>
        High dexterity raises your chance to hit the enemy, lowers the chance to get hit yourself,
        and increases stamina.
      </p>
    ),
    cost: 2,
  },
  {
    id: 2,
    name: 'Intelligence',
    abbr: 'INT',
    desc: (
      <p>
        High intelligence allows for increased potency of both high and lo tech, while reducing the
        material cost of those items. Also increases MP.
      </p>
    ),
    cost: 2,
  },
  {
    id: 3,
    name: 'Perception',
    abbr: 'PER',
    desc: (
      <p>
        Increases chance to discover hidden secrets, as well as better assess the enemy&lsquo;s
        strengths and weaknesses.
      </p>
    ),
    cost: 2,
  },
  {
    id: 4,
    name: 'Martial Arts',
    abbr: 'MAR',
    desc: (
      <p>
        Increases damage of melee weapons, such as swords, axes, and staves. Also increases skill at
        unarmed combat.
      </p>
    ),
    cost: 2,
  },
  {
    id: 5,
    name: 'Energy Weapons',
    abbr: 'ENE',
    desc: <p>Increases damage of energy ranged weapons, such as laser pistols and laser rifles.</p>,
    cost: 2,
  },
  {
    id: 6,
    name: 'Kinetic Weapons',
    abbr: 'KIN',
    desc: <p>Increases damage of kinetic ranged weapons, such as pistols, rifles, and shotguns.</p>,
    cost: 2,
  },
  {
    id: 7,
    name: 'Lo Tech',
    abbr: 'LOT',
    desc: (
      <p>
        Allows usage of lo-tech skills - simple, elemental-based gadgets such as moltov coctails or
        shock grenades. Requires MP.
      </p>
    ),
    cost: 5,
  },
  {
    id: 8,
    name: 'High Tech',
    abbr: 'HIT',
    desc: (
      <p>
        Allows usage of high-tech skills - extremely powerful, but demanding gadgets such as
        doomsday devices or death rays. Requires MP.
      </p>
    ),
    cost: 10,
  },
  {
    id: 9,
    name: 'Leadership',
    abbr: 'LEA',
    desc: <p>Increases the strength of party buffs and auras.</p>,
    cost: 1,
  },
];

export default { STATS };
