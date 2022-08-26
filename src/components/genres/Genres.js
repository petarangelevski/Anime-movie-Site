import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Genres({ allGenres }) {
  const [actionGenres, setActionGenres] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.jikan.moe/v4/anime?genres=${id}`);

      const results = result.data.data;

      setActionGenres(results);
    };
    fetchData();
  }, []);

  return (
    <div>
      {actionGenres.map((item) => {
        return (
          <>
            <div className="div1" key={id}>
              <div
                className="div"
               
              >
                {item.title}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Genres;
