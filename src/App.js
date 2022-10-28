import './App.css';
import Card from './composant/CardSerie/CardSerie';
import Header from './composant/Header/Header';
import Footer from './composant/Footer/Footer';
import { useEffect, useState } from 'react';
import Title from './composant/Title/Title';




function App() {

  const [infoSerie, setInfoSerie] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSerie = async () => {
    setLoading(true);
    //https://api.tvmaze.com/shows/25499?embed[]=seasons
    //https://api.tvmaze.com/search/shows?q=las%20chicas%20del
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=The%20Haunting%20of`);
    const info = await response.json();
    //console.log(info);
    setInfoSerie(info);
    setLoading(false);
  }


  useEffect(() => {
    fetchSerie();
  }, [])

  console.log(infoSerie);

  return (
    <div className="App">
      <Header />
      <Title taille="50px">Des titres pour Halloween</Title>
      {loading &&
        <Title>Les données arrivent...</Title>
      }
      <div className='cards'>
        
          {infoSerie && infoSerie.map((serie, index) =>
            <div className='acard'>
              <Card 
              key={index} 
              image={serie.show.image === null ? 'https://via.placeholder.com/300x400' : serie.show.image.medium} 
              title={serie.show.name} 
              premiere={serie.show.premiered} 
              end={serie.show.ended} 
              serieID={serie.show.id}
              ></Card>
              </div>
          )}
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
