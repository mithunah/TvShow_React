import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardSerie from "../composant/CardSerie/CardSerie";
import Footer from "../composant/Footer/Footer";
import Header from "../composant/Header/Header";
import Title from "../composant/Title/Title";



function SearchResult() {
    
    const { searched } = useParams();
    const [infoSerie, setInfoSerie] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    const fetchSearch = async () => {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURI(searched)}`);
        const info = await response.json();
        setInfoSerie(info);
        setLoading(false);
      }
      fetchSearch();
    }, []);
    
    
    return (
        <>
            <Header />
            <Title taille="50px">{searched}</Title>
      {loading &&
        <Title>Information on their way...</Title>
      }
      <div className='cards'>
        
          {infoSerie && infoSerie.map((serie, index) =>
            <div className='acard' key={index} >
              <CardSerie 
              image={serie.show.image === null ? 'https://via.placeholder.com/300x400' : serie.show.image.medium} 
              title={serie.show.name} 
              premiere={serie.show.premiered} 
              end={serie.show.ended} 
              serieID={serie.show.id}
              ></CardSerie>
              </div>
          )}
        
      </div>
            <Footer />
        </>
    );
}

export default SearchResult;