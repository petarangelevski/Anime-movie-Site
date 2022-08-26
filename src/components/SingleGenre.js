import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function SingleGenre({ allGenres }) {
  const { id } = useParams();
  const [animeGenres, setAnimeGenres] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.jikan.moe/v4/anime?genres=${id}`);
      const results = result.data.data;

      setAnimeGenres(results);
    };
    fetchData();
  }, []);

  console.log(animeGenres);
  return (
    <div className="homepage">
      {animeGenres.map((item) => {
        return (
          <Card key={item.mal_id} style={{ width: "23%" }}>
            <Card.Img
              style={{ height: "650px" }}
              variant="top"
              src={item.images.jpg.image_url}
            />
            <Card.Body style={{ display: "flex", flexDirection: "column" }}>
              <Card.Title style={{ fontSize: "1.2rem" }}>
                {item.title}
              </Card.Title>
              <Card.Text>{item.genres.type}</Card.Text>
              <div className="btns">
                <Button
                  onClick={(e) => navigate(`/${item.title}/${item.mal_id}`)}
                  className="btn"
                  variant="primary"
                >
                  View More
                </Button>

                <Button
                  href={item.trailer.url}
                  className="btn"
                  variant="primary"
                >
                  Trailer
                </Button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default SingleGenre;
