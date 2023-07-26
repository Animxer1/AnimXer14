import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const InfoBanner = ({data, currentEpisode, firstEpisode}) => {
    
    // const title = data.title ? (data.title.english || data.title.romaji) : 'N/A';
    const baseUrl = "https://www.youtube.com/watch?v="

    // console.log("currentEpisode", currentEpisode)
    // console.log("firstEpisode", firstEpisode)
    console.log("anime data: ", data)

    return (
        <section id='info' className='info' style={{backgroundImage: `url(${data.cover})`}} >
            <div className="container container__info" >
                <div className='anime__info__cover'>
                    {
                        data.image &&
                        <LazyLoadImage
                            effect="blur" 
                            src={data.image} 
                            alt={data?.title?.romaji} 
                        />
                    }
                </div>
                <article className='anime__info__info'>
                    {
                        data?.title &&
                        <div className='anime__info'>
                            <span>Title:</span>
                            <h3>
                                {data?.title?.english || data?.title?.romaji}
                            </h3>
                        </div>
                    }
                    {
                        data.genres.length > 0 && 
                        <ul className='anime__info__ul'>
                            <span>Genres:</span>
                            {   
                                (
                                    data.genres.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                {item}
                                            </li>
                                        )
                                    })
                                )
                            }
                        </ul>
                    }
                    {
                        data.releaseDate &&
                        <div className='anime__info'>
                            <span>Released:</span>
                            <p>
                                {data.releaseDate}
                            </p>
                        </div>
                    }
                    {
                        data.status &&
                        <div className='anime__info'>
                            <span>Status:</span>
                            <p>
                                {data.status}
                            </p>
                        </div>
                    }
                    {
                        data.synonyms.length > 0 &&
                        <ul className='anime__info__ul'>
                            <span>Other Names:</span>
                            <li> 
                            { 
                                data.synonyms.map((item, index) => {
                                    return (
                                        <p key={index}> {item}, &nbsp;</p>
                                    )
                                })
                            }
                            </li>
                        </ul>
                    }
                    {
                        data.relations.length > 0 &&
                        <ul className='anime__info__ul'>
                            <span>Relations:</span>
                            <li> 
                            { 
                                data.relations.map((item, index) => {
                                    if(index < 5) {
                                        return (
                                            <Link to={`/info/${item.id}`}
                                                key={index}
                                            > 
                                                {item?.title?.english || item?.title?.romaji}, &nbsp;
                                            </Link>
                                        )
                                    } else {
                                        return null;
                                    }
                                })
                            }
                            </li>
                        </ul>
                    }
                    {
                        data.studios.length > 0 && 
                        <ul className='anime__info__ul'>
                            <span>Studios:</span>
                            {
                                data.studios.map((item, index)=> {
                                    return (
                                    <li key={index}>
                                        {item}
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    }
                    {
                        data.rating && 
                        <div className='anime__info'>
                            <span>Rating:</span>
                            <p>
                                {data.rating}%
                            </p>
                        </div>
                    }
                    {
                        data.type &&
                        <div className='anime__info'>
                            <span>Category:</span>
                            {
                                data.type === 'TV' ? (
                                    <p>
                                        {data.type} Series
                                    </p>
                                ) :  (
                                    <p>
                                        {data.type}
                                    </p>
                                )
                            }
                        </div>
                    }
                    <div className={`anime__info ${data.currentEpisode === 0 ? 'd-none' : ''}`}>
                        <span>Total Episodes:</span>
                        <p>
                            {data.currentEpisode}
                        </p>
                    </div>
                    <div className={`anime__info ${data.popularity === 0 ? 'd-none' : ''}`}>
                        <span>Popularity:</span>
                        <p>
                            {data.popularity}
                        </p>
                    </div>
                    {
                        data?.trailer?.id &&
                        <div className='anime__info'>
                                <span>Trailer:</span>
                                <a href={`${baseUrl}${data?.trailer?.id}`} 
                                    target="__blank" rel="noreferrer"
                                    style={{textDecoration: "underline"}}
                                >
                                    Watch Trailer
                                </a>
                        </div>
                    }
                    <div className='anime__info'>
                        <span>Summary:</span>
                        <p>
                            {data.description}
                        </p>
                    </div>
                    {
                        data.episodes.length > 0 &&
                        <div className='anime__info__buttons'>
                            <Link to={`/pass/${data.id}/${currentEpisode}`} className="btn btn-primary">
                                Watch EP {currentEpisode}
                            </Link>
                            <Link to={`/pass/${data.id}/${firstEpisode}`} className="btn btn">
                                Watch EP 0{firstEpisode}
                            </Link>
                        </div>
                    }
                </article>
            </div>
        </section>
    )
}
export default InfoBanner
