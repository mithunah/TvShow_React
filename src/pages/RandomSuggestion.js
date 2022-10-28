import { useEffect, useState } from "react";
import DetailSerie from "../composant/DetailSerie/DetailSerie";
import Footer from "../composant/Footer/Footer";
import Header from "../composant/Header/Header";
import Title from "../composant/Title/Title";
import ToggleButton from "../composant/ToggleButton/ToggleButton";
import Button from "../composant/Button/Button"


function RandomSuggestion() {
  const [choice, setChoice] = useState([]);
  const [loading, setLoading] = useState(true);
  let img = 'https://via.placeholder.com/300x400';

  const fetchSuggestion = async () => {
    //44778
    let id = Math.floor(Math.random() * 440);
    console.log(id);
    const response = await fetch(`https://api.tvmaze.com/shows/${id}?embed[]=seasons`);
    const info = await response.json();
    //console.log(info);
    setChoice(info);
    setLoading(false);
  }


  useEffect(() => {
    fetchSuggestion();
  }, []);


  console.log(choice);

  return (
    <>
      <Header />
      <Button event={fetchSuggestion}>Nouvelle Suggestion</Button>
      {loading &&
        <Title>Les données arrivent...</Title>
      }
      {choice.image !== undefined &&
        <DetailSerie
          title={choice.name}
          summary={choice.summary}
          image={choice.image.medium || img}
        ></DetailSerie>
      }
      {!loading && choice._embedded.seasons.map((season, index) =>
        <ToggleButton summary={season.summary} episodeNb={season.episodeOrder}>Saison {season.number}</ToggleButton>
      )
      }

      <Footer />
    </>
  );

}

export default RandomSuggestion;