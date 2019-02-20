import React, {StatelessComponent} from 'react';
import {skills, Skill} from './skills';

interface Props {}

const SkillList: StatelessComponent<Props> = function() {
  return (
    <div>
      {skills.map((skill: Skill) => (
        <div>
          <p>{skill.name}</p>
          <p>{skill.graduation}</p>
          <p>{skill.keyAbitily ? skill.keyAbitily.toUpperCase() : 'none'}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillList;
