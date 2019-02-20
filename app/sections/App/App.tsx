import React, {FunctionComponent, useState} from 'react';
import {BasicInfoSection, AbilitiesTable, SkillList} from '../../components';
import './App.scss';

interface Props {
  socket: SocketIOClient.Socket;
}

const App: FunctionComponent<Props> = function() {
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [charisma, setCharisma] = useState(0);

  return (
    <div className="app">
      <BasicInfoSection />
      <div className="second-row">
        <AbilitiesTable
          strength={strength}
          onStrChange={onStrChange}
          dexterity={dexterity}
          onDexChange={onDexChange}
          constitution={constitution}
          onConChange={onConChange}
          wisdom={wisdom}
          onWisChange={onWisChange}
          intelligence={intelligence}
          onIntChange={onIntChange}
          charisma={charisma}
          onChaChange={onChaChange}
        />
        <SkillList />
      </div>
    </div>
  );

  function onStrChange(event: React.ChangeEvent<HTMLInputElement>) {
    setStrength(+event.currentTarget.value);
  }

  function onDexChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDexterity(+event.currentTarget.value);
  }

  function onConChange(event: React.ChangeEvent<HTMLInputElement>) {
    setConstitution(+event.currentTarget.value);
  }

  function onWisChange(event: React.ChangeEvent<HTMLInputElement>) {
    setWisdom(+event.currentTarget.value);
  }

  function onIntChange(event: React.ChangeEvent<HTMLInputElement>) {
    setIntelligence(+event.currentTarget.value);
  }

  function onChaChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCharisma(+event.currentTarget.value);
  }
};

export default App;
