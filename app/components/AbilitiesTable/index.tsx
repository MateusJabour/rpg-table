import React, {FunctionComponent} from 'react';
import './AbilitiesTable.scss';

import AbilityField from './components/AbilityField';

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

const AbilitiesTable: FunctionComponent<Props> = ({
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
  onStrChange,
  onDexChange,
  onConChange,
  onIntChange,
  onWisChange,
  onChaChange,
}) => {
  return (
    <div className="abilities-table">
      <AbilityField name="strength" value={strength} onChange={onStrChange} />
      <AbilityField name="dexterity" value={dexterity} onChange={onDexChange} />
      <AbilityField
        name="constitution"
        value={constitution}
        onChange={onConChange}
      />
      <AbilityField
        name="intelligence"
        value={intelligence}
        onChange={onIntChange}
      />
      <AbilityField name="wisdom" value={wisdom} onChange={onWisChange} />
      <AbilityField name="charisma" value={charisma} onChange={onChaChange} />
    </div>
  );
};

export default AbilitiesTable;
