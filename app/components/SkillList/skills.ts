type Abitilies = 'str' | 'con' | 'wis' | 'int' | 'cha' | 'dex';

export interface Skill {
  name: string;
  graduation: number;
  keyAbitily?: Abitilies;
}

export const skills: Skill[] = [
  {name: 'Appraise', graduation: 0, keyAbitily: 'int'},
  {name: 'Balance', graduation: 0, keyAbitily: 'dex'},
  {name: 'Bluff', graduation: 0, keyAbitily: 'cha'},
  {name: 'Climb', graduation: 0, keyAbitily: 'str'},
  {name: 'Concentration', graduation: 0, keyAbitily: 'con'},
  {name: 'Craft', graduation: 0, keyAbitily: 'int'},
  {
    name: 'Decipher Script',
    graduation: 0,
    keyAbitily: 'int',
  },
  {name: 'Diplomacy', graduation: 0, keyAbitily: 'cha'},
  {name: 'Disable Device', graduation: 0, keyAbitily: 'int'},
  {name: 'Disguise', graduation: 0, keyAbitily: 'cha'},
  {name: 'Escape Artist', graduation: 0, keyAbitily: 'dex'},
  {name: 'Forgery', graduation: 0, keyAbitily: 'int'},
  {
    name: 'Gather Information',
    graduation: 0,
    keyAbitily: 'cha',
  },
  {name: 'Handle Animal', graduation: 0, keyAbitily: 'cha'},
  {name: 'Heal', graduation: 0, keyAbitily: 'wis'},
  {name: 'Hide', graduation: 0, keyAbitily: 'dex'},
  {name: 'Intimidate', graduation: 0, keyAbitily: 'cha'},
  {name: 'Jump', graduation: 0, keyAbitily: 'str'},
  {name: 'Knowledge', graduation: 0, keyAbitily: 'int'},
  {name: 'Listen', graduation: 0, keyAbitily: 'wis'},
  {name: 'Move Silently', graduation: 0, keyAbitily: 'dex'},
  {name: 'Open Lock', graduation: 0, keyAbitily: 'dex'},
  {name: 'Perform', graduation: 0, keyAbitily: 'cha'},
  {name: 'Profession', graduation: 0, keyAbitily: 'wis'},
  {name: 'Ride', graduation: 0, keyAbitily: 'dex'},
  {name: 'Search', graduation: 0, keyAbitily: 'int'},
  {name: 'Sense Motive', graduation: 0, keyAbitily: 'wis'},
  {
    name: 'Sleight Of Hand',
    graduation: 0,
    keyAbitily: 'dex',
  },
  {name: 'Speak Language', graduation: 0},
  {name: 'Spellcraft', graduation: 0, keyAbitily: 'int'},
  {name: 'Spot', graduation: 0, keyAbitily: 'wis'},
  {name: 'Survival', graduation: 0, keyAbitily: 'wis'},
  {name: 'Swim', graduation: 0, keyAbitily: 'str'},
  {name: 'Tumble', graduation: 0, keyAbitily: 'dex'},
  {
    name: 'Use Magic Device',
    graduation: 0,
    keyAbitily: 'cha',
  },
  {name: 'Use Rope', graduation: 0, keyAbitily: 'dex'},
];
