import React, { Component } from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./SinglePage.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function SinglePage({ item }) {
  const { id } = useParams();
  const [anime, setAnime] = useState([]);
  const [image, setImage] = useState([]);
  const [largeImage, setLargeImage] = useState([]);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.jikan.moe/v4/anime/${id}`);
      const result1 = await axios(
        `https://api.jikan.moe/v4/anime/${id}/pictures`
      );
      setPictures(result1.data.data);
      setImage(result.data.data.images.jpg.image_url);
      setLargeImage(result.data.data.images.jpg.large_image_url);
      setAnime(result.data.data);
    };
    fetchData();
  }, []);

  console.log(pictures);

  let navigate = useNavigate();
  const routeChange = () => {
    navigate(-1);
  };

  return (
    <div className="products" style={{"background":`linear-gradient(rgba(30,27,38, 0.9), rgba(30,27,38, 1)),url(${largeImage})`, "backgroundSize": "cover", "backgroundPosition": "center", "backgroundRepeat": "no-repeat", }}>
      <div className="single__image__container" key={id}>
        <div className="single__image__card">
          <div className="single__image" >
          {/* <img
              src={largeImage}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
             */}
            <div className="gardian" style={{ backgroundImage: `url(${largeImage})`, }}>
            </div>
          </div>
          <div className="single__image__card__text">
            <div className="z-index">
              <div className="z-index-naslov">
                <strong>{anime.title}</strong>
              </div>

              <div className="z-index-text">
              <strong>{anime.type} / </strong>
              <strong>{anime.duration} / </strong>
              <strong>{anime.rating} </strong>
              </div>
            </div>
            <p>{anime.synopsis}</p>
            {/* <p>{anime.background}</p> */}

            {/* <div className="anime-pictures">
              {pictures.map((pic) => {
                return (
                  <img src={pic.jpg.image_url} alt="" />
                )
              })}
            </div> */}

            <div className="btn-container">
              <button
                onClick={(e) =>
                  navigate(`/episode/${anime.title}/${anime.mal_id}`)
                }
                className="single__image__button"
                variant="primary"
              >
                
                <p className="single__image__button__text">
                <i class="fa-solid fa-play"></i>
                  Watch
                </p>
              </button>
          <button className="single__image__button" onClick={routeChange}>
            <p className="single__image__button__text">go back</p>
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
