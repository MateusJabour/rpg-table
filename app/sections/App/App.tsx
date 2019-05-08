import React, {FunctionComponent, useState} from 'react';
import {BasicInfoSection, AbilitiesTable, SkillList} from '../../components';
import './App.scss';

interface Props {
  socket: SocketIOClient.Socket;
}

const App: FunctionComponent<Props> = function() {
  const [strength, setStrength] = useAttributeState(0);
  const [dexterity, setDexterity] = useAttributeState(0);
  const [constitution, setConstitution] = useAttributeState(0);
  const [wisdom, setWisdom] = useAttributeState(0);
  const [intelligence, setIntelligence] = useAttributeState(0);
  const [charisma, setCharisma] = useAttributeState(0);

  return (
    <div className="app">
      <BasicInfoSection />
      <div className="second-row">
        <AbilitiesTable
          strength={strength}
          onStrChange={setStrength}
          dexterity={dexterity}
          onDexChange={setDexterity}
          constitution={constitution}
          onConChange={setConstitution}
          intelligence={intelligence}
          onIntChange={setIntelligence}
          wisdom={wisdom}
          onWisChange={setWisdom}
          charisma={charisma}
          onChaChange={setCharisma}
        />
        <SkillList
          strength={strength}
          dexterity={dexterity}
          constitution={constitution}
          wisdom={wisdom}
          intelligence={intelligence}
          charisma={charisma}
        />
      </div>
    </div>
  );
};

function useAttributeState(
  initialValue: number,
): [number, (event: React.ChangeEvent<HTMLInputElement>) => void] {
  const [attribute, setAttribute] = useState(initialValue);

  function onAttributeChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAttribute(+event.currentTarget.value);
  }

  return [attribute, onAttributeChange];
}

export default App;
