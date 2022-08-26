import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";
import "./Episodes.css";

function Episodes() {
  const [anime, setAnime] = useState([]);
  const { id } = useParams();
  const [image, setImage] = useState([]);
  const [largeImage, setLargeImage] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.jikan.moe/v4/anime/${id}`);

      setImage(result.data.data.images.jpg.image_url);
      console.log(result.data.data)
    };
    fetchData();
  }, []);

  let navigate = useNavigate();
  const routeChange = () => {
    navigate(-1);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.jikan.moe/v4/anime/${id}/videos/episodes`
      );
      setAnime(result.data.data);
    };
    fetchData();
  }, []);
  console.log(largeImage);
  return (
    <div className="episodes-page">
      {anime.map((item) => {
        return (
          <Card className="episodes-card" key={item.mal_id}>
            <Card.Img variant="top" src={image} />
            <Card.Body className="episodes-card-body">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.episode}</Card.Text>
              <Button
                
                href={item.url}
                
                className="btn"
                variant="primary"
              >
                Watch
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Episodes;
