import React, {StatelessComponent} from 'react';
import {skills, Skill} from './skills';
import {modifier} from '../../utilities';

interface Props {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
}

enum Abilities {
  'str' = 'strength',
  'dex' = 'dexterity',
  'con' = 'constitution',
  'int' = 'intelligence',
  'wis' = 'wisdom',
  'cha' = 'charisma',
}

const SkillList: StatelessComponent<Props> = function(props: Props) {
  return (
    <div>
      {skills.map(({name, graduation, keyAbitily}: Skill) => (
        <div>
          <span>{name}</span> <span>{graduation}</span>{' '}
          <span>{keyAbitily ? keyAbitily.toUpperCase() : 'none'}</span>{' '}
          <span>
            {keyAbitily ? modifier(props[Abilities[keyAbitily]]) : 'none'}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
