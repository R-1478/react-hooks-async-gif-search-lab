import React, { useState } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  
  const fetchGifs = (query) => {
    // Fetch data from Giphy API and update state
  
    const apiKey = 'kDcNO6qIQ5lzs7KvW63q84eVr2ZZD3MC';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setGifs(data.data.slice(0, 3))) // Store the first 3 gifs in state
      .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div>
      <GifSearch onSearch={fetchGifs} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;