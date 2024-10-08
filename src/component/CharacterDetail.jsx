import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterDetail = ({ characterId, onClose }) => {
  const [characterDetail, setCharacterDetail] = useState(null);

  useEffect(() => {
    if (characterId) {
      const fetchCharacterDetail = async () => {
        try {
          const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=2b704055d59fcfb644809ce43dccf3cf&hash=bb132c516e79bbb093a0d154873cb1fa`);
          setCharacterDetail(response.data.data.results[0]);
        } catch (error) {
          console.error('Error, no detail available :', error);
        }
      };

      fetchCharacterDetail();
    }
  }, [characterId]);

  if (!characterDetail) {
    return <div>Select a Hero or Bad Guy, Your Choice </div>;
  }

  return (
    <div className='dets'>
      <button onClick={onClose}>Close</button>
      <h2>{characterDetail.name}</h2>
      <p>{characterDetail.description || 'Sorry!! No description '}</p>
      <h3>Comics:</h3>
      <ul>
        {characterDetail.comics.items.map(comic => (
          <li key={comic.resourceURI}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;