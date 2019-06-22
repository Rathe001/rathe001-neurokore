export const STATS = [
  {
    id: 0,
    name: 'Strength',
    abbr: 'STR',
    desc: `
      <p>
        Slightly increases damage with all attacks, reduces the effect of ailments, and increases health.
      </p>
    `,
    cost: 3,
  },
  {
    id: 1,
    name: 'Dexterity',
    abbr: 'DEX',
    desc: `
      <p>
        Raises your chance to hit the enemy, lowers the chance to get hit yourself, and reduces the damage you take from traps.
      </p>
    `,
    cost: 3,
  },
  {
    id: 2,
    name: 'Intelligence',
    abbr: 'INT',
    desc: `
      <p>
        Increased strength of tech, increases chance to discover hidden secrets, and increases energy.
      </p>
    `,
    cost: 3,
  },
  {
    id: 4,
    name: 'Martial Arts',
    abbr: 'MAR',
    desc: `
      <p>
        Increases damage of melee range weapons such as swords, axes, and clubs, as well as unarmed combat.
      </p>
    `,
    cost: 1,
  },
  {
    id: 6,
    name: 'Kinetic Weapons',
    abbr: 'KIN',
    desc: `<p>Increases damage of medium ranged kinetic weapons, such as pistols, miniguns, and shotguns.</p>`,
    cost: 1,
  },
  {
    id: 5,
    name: 'Energy Weapons',
    abbr: 'ENE',
    desc: `<p>Increases damage of long ranged energy weapons, such as blasters and laser rifles.</p>`,
    cost: 1,
  },
  {
    id: 9,
    name: 'Leadership',
    abbr: 'LEA',
    desc: `<p>Increases the strength of party buffs and auras.</p>`,
    cost: 1,
  },
  {
    id: 7,
    name: 'Lo Tech',
    abbr: 'LOT',
    desc: `<p>
        Allows usage of simple, elemental-based gadgets such as moltov coctails or
        shock grenades. Requires energy.
      </p>`,
    cost: 3,
  },
  {
    id: 8,
    name: 'High Tech',
    abbr: 'HIT',
    desc: `<p>
        Allows usage of extremely powerful, but demanding gadgets such as
        doomsday devices or death rays. Requires energy.
      </p>`,
    cost: 6,
  },
];

export default { STATS };
