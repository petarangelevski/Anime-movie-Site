import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './Characters.css';

function Characters() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [largeImage, setLargeImage] = useState([]);


  let navigate = useNavigate();

  const routeChange = () => {
    navigate(-1);
  };

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URL);
      const result1 = await axios(
        URL
      );
   


      const results = result.data.data;
      const results1 = result.data.data.images.jpg.image_url
    
      setAllCharacters(results);
    
      setLargeImage(results1);
    };
    fetchData();
  }, []);














  const URL = `https://api.jikan.moe/v4/characters/${id}/full`;

  console.log(allCharacters);

  return (
    <div className="products">
      <div className="single__image__container" key={id}>
        <div className="single__image__card">
          <div className="single__image">

            <div className="gardian" style={{ backgroundImage: `url(${largeImage})`, }}></div>
          </div>
          <div className="single__image__card__text">
            <div className="z-index">

            </div>
          </div>

        </div>
      </div>
      <div className="about">
      <div className="z-index-naslov">
                <strong>{allCharacters.name}</strong>
              </div>
        <div className="txtAbout">
          <p>{allCharacters.about}</p>
        </div>
        <div className="btn-container">
            <button className="single__image__button" onClick={routeChange}>
              <p className="single__image__button__text">go back</p>
            </button>
          </div>
      </div>
    </div>
  );
}

export default Characters;
