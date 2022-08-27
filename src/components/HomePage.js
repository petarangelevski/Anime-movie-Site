import React, { useEffect, useState } from "react";
import "./HomePage.css";
import logo from "../images/logo.jpg";
import background from "../images/21a1926ddd463659b1b17a75bdb0c6af.png";
import axios from "axios";
import Button from "react-bootstrap/Button";

import { useNavigate } from "react-router-dom";
function HomePage() {
  const [anime, setAnime] = useState([]);
  const [picture, setPicture] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [randomRecommended, setRandomRecommended] = useState([]);
  const [newestAnime, setNewestAnime] = useState([]);
  const [randomNewestAnime, setRandomNewestAnime] = useState([]);
  const [allCharacters, setAllCharacters] = useState([]);
  const [randomCharacters, setRandomCharacters] = useState([]);
  const [mostPopularAnime, setMostPopularAnime] = useState([]);
  const [randomMostPopularAnime, setRandomMostPopularAnime] = useState([]);
  const [allGenres, setAllGenres] = useState([]);
  const [randomGRecommended, setRandomGRecommended] = useState([])



  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.jikan.moe/v4/genres/anime`);

      const results = result.data.data;

      setAllGenres(results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getMultipleRandom = async () => {
      const shuffled = [...allGenres].sort(() => 0.5 - Math.random());

      setRandomGRecommended(shuffled.slice(0, 16));
    };
    getMultipleRandom();
  }, [allGenres]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(`https://api.jikan.moe/v4/anime?order_by=popularity&sort=desc&order_by=start_date`);

  //     const results = result.data.data;

  //     setMostPopularAnime(results);
  //   }
  //   fetchData();
  // }, [])


  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(`https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&status=complete`);

  //     const results = result.data.data;

  //     setNewestAnime(results);
  //   }
  //   fetchData();
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.jikan.moe/v4/characters?order_by=favorites&sort=desc`);

      const results = result.data.data;


      setAllCharacters(results);
    };
    fetchData();
  }, []);


  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.jikan.moe/v4/anime/1/recommendations`
      );

      const results = result.data.data;

      setRecommended(results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const getMultipleRandom = async () => {
      const shuffled = [...recommended].sort(() => 0.5 - Math.random());

      setRandomRecommended(shuffled.slice(0, 8));
    };
    getMultipleRandom();
  }, [recommended]);


  useEffect(() => {
    const getMultipleRandom = async () => {
      const shuffled = [...newestAnime].sort(() => 0.5 - Math.random());

      setRandomNewestAnime(shuffled.slice(0, 4));
    };
    getMultipleRandom();
  }, [newestAnime]);
  console.log(newestAnime);


  useEffect(() => {
    const getMultipleRandom = async () => {
      const shuffled = [...allCharacters].sort(() => 0.5 - Math.random());

      setRandomCharacters(shuffled.slice(0, 8));
    };
    getMultipleRandom();
  }, [allCharacters]);
  console.log(allCharacters);

  useEffect(() => {
    const getMultipleRandom = async () => {
      const shuffled = [...mostPopularAnime].sort(() => 0.5 - Math.random());

      setRandomMostPopularAnime(shuffled.slice(0, 4));
    };
    getMultipleRandom();
  }, [mostPopularAnime]);


  return (
    <>
      <div className="siteContainer">
        <div className="fullWit">
          <div className="width15"></div>
          <div className="width60">
            <h1>Welcome to Kiko's Anime</h1>
            <p>
              <span>Discover your favorite anime</span>
            </p>
          </div>
          <div className="width15"></div>
        </div>
        {/* fullWit */}
      </div>
      <div className="bodyCon">
        <div className="con">
          <div className="sec1Slide">
            <div className="txtPart">
              <h2>Wach some onile anime</h2>
              <p>
                Stream over 45,000 legal, industry-supported anime episodes here
                on Anime-Planet. Create your anime list on Anime-Planet and
                we'll keep your place when you watch videos on our site.
              </p>
            </div>
            <div className="genresPart">
              <div className="naslov">
              <h2>GENRES</h2>
              </div>
              <div className="genresContent">
            {allGenres.map((item) => {
                return (
                  <ul className='footerGenres-genre'>
                    <li
                      className="dropdown-item"
                      key={item.mal_id}
                      onClick={(e) => navigate(`/genres/${item.name}/${item.mal_id}`)}
                    >
                      {item.name}
                    </li>
                  </ul>
                );
              })}
              </div>
            </div>

          </div>
          <div className="recommendation">
            <div className="recommended-text">
              <h1>Here is the recommended anime</h1>
            </div>
            <div className="recommended-card-container">
              {randomRecommended.slice(0, 4).map((item) => {
                return (
                  <div className="recommended-card" key={item.entry.mal_id}>
                    <div className="recommended-card-pic">
                      <img
                        className="recommended-card-image"
                        src={item.entry.images.jpg.image_url}
                        alt=""
                      />
                    </div>
                    <div className="recommended-card-text">
                      <p className="recommended-card-title">
                        {item.entry.title}
                      </p>
                      <Button
                    onClick={(e) => navigate(`/${item.entry.title}/${item.entry.mal_id}`)}
                    className="btn"
                    variant="primary"
                  >
                    View More
                  </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="newest">
            <div className="newest-text">
              <h1>Here is the newest anime</h1>
            </div>
            <div className="newest-card-container">
              {randomRecommended.slice(4, 8).map((item) => {
                return (
                  <div className="newest-card" key={item.mal_id} >
                    <div className="newest-card-pic">
                      <img
                        className="newest-card-image"
                        src={item.entry.images.jpg.image_url}
                        alt=""
                      />
                    </div>
                    <div className="newest-card-text">
                      <p className="newest-card-title">
                        {item.entry.title}
                      </p>
                      <Button
                    onClick={(e) => navigate(`/${item.title}/${item.mal_id}`)}
                    className="btn"
                    variant="primary"
                  >
                    View More
                  </Button>
                    </div>

                  </div>
                  
                 );
              })} 
            </div>
          </div>


          <div className="newest">
            <div className="newest-text">
              <h1>Favorite Anime Charatcers</h1>
            </div>
            <div className="newest-card-container">
              {randomCharacters.slice(0, 4).map((item) => {
                return (
                  <div className="newest-card" key={item.mal_id} >
                    <div className="newest-card-pic">
                      <img
                        className="newest-card-image"
                        src={item.images.jpg.image_url}
                        alt=""
                      />
                    </div>
                    <div className="newest-card-text">
                      <p className="newest-card-title">
                        {item.name}
                      </p>
                      <Button
                    onClick={(e) => navigate(`/characters/${item.name}/${item.mal_id}`)}
                    className="btn"
                    variant="primary"
                  >
                    View More
                  </Button>
                    </div>

                  </div>
                  
                 );
              })} 
            </div>
          </div>




          <div className="newest">
            <div className="newest-text">
              <h1>Most Popular Anime</h1>
            </div>
            <div className="newest-card-container">
              {randomCharacters.slice(4, 8).map((item) => {
                return (
                  <div className="newest-card" key={item.mal_id} >
                    <div className="newest-card-pic">
                      <img
                        className="newest-card-image"
                        src={item.images.jpg.image_url}
                        alt=""
                      />
                    </div>
                    <div className="newest-card-text">
                      <p className="newest-card-title">
                        {item.name}
                      </p>
                      <Button
                    onClick={(e) => navigate(`/characters/${item.name}/${item.mal_id}`)}
                    className="btn"
                    variant="primary"
                  >
                    View More
                  </Button>
                    </div>

                  </div>
                  
                 );
              })} 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

{
  /* <div className="section-1">
        <section className="siteBanner fullbleed">
            <div className="fullbleedContent">

            </div>
        </section>
        </div> */
}
