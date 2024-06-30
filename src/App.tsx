import React from 'react';
import Panel from './components/Panel';
import CharacterList from './components/CharactersList';

function App() {
  return (
    <div className='container mx-auto'>
      <Panel>
        <CharacterList></CharacterList>
      </Panel>
    </div>
  );
}

export default App;
