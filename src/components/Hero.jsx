import '../assets/css/hero.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import Pageloader from './Pageloader';

const Hero = () => {
    const [data, setData] = useState([]);
    const [pageLoad, setPageLoad] = useState(false);

    const randomURL = `https://api.consumet.org/meta/anilist/random-anime?provider=gogoanime`;

    useEffect(() => {
        const fetchLatest = async () => {
            try {
                const response = await axios.get(randomURL);
                const responseData = response.data;
                const cleanedDescription = removeHtmlTags(responseData.description);
                console.log(responseData.id);
                setData({...responseData, description: cleanedDescription });
                setPageLoad(true)
            } catch(error) {
                console.log(error.message);
                setTimeout(() => {
                    fetchLatest();
                }, 6000);
            }
        };
        fetchLatest();
        setPageLoad(false)
    }, []);

    const removeHtmlTags = (htmlString) => {
        const sanitizedString = DOMPurify.sanitize(htmlString, { ALLOWED_TAGS: [] });
        return sanitizedString;
    };

    if (!pageLoad) {
        return <Pageloader />
    }

    return (
        <section id='hero' className='hero' style={{backgroundImage: `url(${data.cover})`}} >
            <div className="container container__hero" >
                <article className='anime__hero__info'>
                    <div className='anime__hero__title'>
                            <h3>
                                {data.title?.english ?? data.title?.romaji}
                            </h3>
                        <ul className='anime__status__episodes'>
                            <li>
                                { data.startDate?.year }
                            </li>
                            <li>
                                { data.status }
                            </li>
                            <li >
                                EP: { data.totalEpisodes }
                            </li>
                        </ul>
                    </div>
                    <p>
                        { data.description }
                    </p>
                    <Link to={`/info/${data.id}`} className='btn btn-primary'>
                        Read Info
                    </Link>
                </article>
                <div className='anime__hero__cover'>
                    <img src={data.image} alt=" cover image" />
                </div>
            </div>
        </section>
    )
}

export default Hero
