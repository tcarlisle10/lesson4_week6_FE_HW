import CharacterDetail from './component/CharacterDetail';
import React, { useState } from 'react';
import CharacterList from './component/CharacterList';
import './App.css';
import axios from 'axios';
import { useEffect, } from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Home from './component/Home';
import Comics from './component/Comics';
import NotFound from './component/NotFound';
import NavBar from './component/NavBar';


const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  return (
    <div className="app-container">
      <h1>Marvel Characters</h1>
      <div className='content'>
      <CharacterList />
      </div>
    </div>
  );
};

export default App;