import React, {FunctionComponent} from 'react';
import './AbilitiesTable.scss';

import {modifier} from '../../utilities';

interface Props {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  onStrChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onDexChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onConChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onWisChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onIntChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onChaChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const AbilitiesTable: FunctionComponent<Props> = function({
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
  onStrChange,
  onDexChange,
  onConChange,
  onWisChange,
  onIntChange,
  onChaChange,
}) {
  return (
    <div className="abilities-table">
      <div className="abilities-table__field">
        <label htmlFor="str-number">Strength</label>
        <input
          type="text"
          name="str-number"
          id="str-number"
          defaultValue={strength.toString()}
          onChange={onStrChange}
        />
        <input
          type="text"
          name="str-mod"
          id="str-mod"
          value={modifier(strength)}
        />
      </div>

      <div className="abilities-table__field">
        <label htmlFor="dex-number">Dexterity</label>
        <input
          type="text"
          name="dex-number"
          id="dex-number"
          value={dexterity}
          onChange={onDexChange}
        />
        <input
          type="text"
          name="dex-mod"
          id="dex-mod"
          value={modifier(dexterity)}
        />
      </div>

      <div className="abilities-table__field">
        <label htmlFor="con-number">Constitution</label>
        <input
          type="text"
          name="con-number"
          id="con-number"
          value={constitution}
          onChange={onConChange}
        />
        <input
          type="text"
          name="con-mod"
          id="con-mod"
          value={modifier(constitution)}
        />
      </div>

      <div className="abilities-table__field">
        <label htmlFor="int-number">Intelligence</label>
        <input
          type="text"
          name="int-number"
          id="int-number"
          value={intelligence}
          onChange={onIntChange}
        />
        <input
          type="text"
          name="int-mod"
          id="int-mod"
          value={modifier(intelligence)}
        />
      </div>

      <div className="abilities-table__field">
        <label htmlFor="wis-number">Wisdom</label>
        <input
          type="text"
          name="wis-number"
          id="wis-number"
          value={wisdom}
          onChange={onWisChange}
        />
        <input
          type="text"
          name="wis-mod"
          id="wis-mod"
          value={modifier(wisdom)}
        />
      </div>

      <div className="abilities-table__field">
        <label htmlFor="cha-number">Charisma</label>
        <input
          type="text"
          name="cha-number"
          id="cha-number"
          value={charisma}
          onChange={onChaChange}
        />
        <input
          type="text"
          name="cha-mod"
          id="cha-mod"
          value={modifier(charisma)}
        />
      </div>
    </div>
  );
};

export default AbilitiesTable;
