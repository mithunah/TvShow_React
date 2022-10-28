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

    useEffect(() => {
        const fetchSuggestion = async () => {
            const response = await fetch(`https://api.tvmaze.com/shows/${serieID}`);
            const info = await response.json();
            setDetails(info);
            setLoading(false);
        }
        fetchSuggestion();
    }, []);

    return (
        <>
            <Header />
            {loading &&
                <Title>Informations are on their way...</Title>
            }
            {!loading && 
            <DetailSerie
                    title={details.name}
                    summary={details.summary}
                    image={details.image.medium || img}
                    genre={details.genres}
                >
                    Language: {details.language} <br /> Rating: {details.rating.average}
                </DetailSerie>
            
            }

            <Footer />
        </>
    );
}

export default DetailsSerie;