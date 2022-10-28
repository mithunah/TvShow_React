import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../composant/Footer/Footer";
import Header from "../composant/Header/Header";
import Title from "../composant/Title/Title";
import DetailSerie from "../composant/DetailSerie/DetailSerie";

function DetailsSerie() {

    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    let img = 'https://via.placeholder.com/300x400';
    const { serieID } = useParams();

    const fetchSuggestion = async () => {
        //44778
        const response = await fetch(`https://api.tvmaze.com/shows/${serieID}`);
        const info = await response.json();
        //console.log(info);
        setDetails(info);
        setLoading(false);
    }

    useEffect(() => {
        fetchSuggestion();
    }, []);


    console.log(details);

    return (
        <>
            <Header />
            {loading &&
                <Title>Les données arrivent...</Title>
            }
            {!loading &&
                <DetailSerie
                    title={details.name}
                    summary={details.summary}
                    image={details.image.medium || img}
                >
                    Langue: {details.language} <br /> Note: {details.rating.average}
                </DetailSerie>

            }

            {/* {!loading && choice._embedded.seasons.map((season, index)=> 
        <ToggleButton summary={season.summary} episodeNb={season.episodeOrder}>Saison {season.number}</ToggleButton>
        )
        } */}

            <Footer />
        </>
    );
}

export default DetailsSerie;