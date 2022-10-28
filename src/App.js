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
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=The%20Haunting%20of`);
    const info = await response.json();

    setInfoSerie(info);
    setLoading(false);
  }


  useEffect(() => {
    fetchSerie();
  }, [])


  return (
    <div className="App">
      <Header />
      <Title taille="50px">Some Shows for Halloween</Title>
      {loading &&
        <Title>Informations on their way...</Title>
      }
      <div className='cards'>
        
          {infoSerie && infoSerie.map((serie, index) =>
            <div className='acard' key={index} >
              <Card 
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
