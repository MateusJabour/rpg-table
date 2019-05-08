import React, {FunctionComponent} from 'react';

import {modifier, capitalize} from '../../../../utilities';
import './AbilityField.scss';

interface Props {
  name: string;
  value: number;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const AbilityField: FunctionComponent<Props> = ({
  name,
  value,
  onChange,
}: Props) => {
  return (
    <div className="abilities-field">
      <label htmlFor={`${name}-number`}>{capitalize(name)}</label>
      <input
        type="text"
        name={`${name}-number`}
        id={`${name}-number`}
        defaultValue={value.toString()}
        onChange={onChange}
      />
      <input
        type="text"
        name={`${name}-modifier`}
        id={`${name}-modifier`}
        value={modifier(value)}
      />
    </div>
  );
};

export default AbilityField;
