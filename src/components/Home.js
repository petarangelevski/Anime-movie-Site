import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";
import "./Home.css";
import "./Modal.css";
import SinglePage from "./SinglePage";

function Home({ filteredList, handleCategoryChange }) {
  const [item, setItem] = useState([]);
  const [result, setResult] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [show, setShow] = useState(false);
  const [pageCount, setPageCount] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState("");
  const [datas, setDatas] = useState([]);
  const { page } = useParams();


  const navigate = useNavigate();
  

  const URL = `https://api.jikan.moe/v4/anime?page=${page}`

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(URL);
      setFiltered(result.data.data);
      setItem(result.data.data);
      setPageCount(result.data.pagination.last_visible_page)
      setPagination(result.data.pagination);
    };
    fetchData();
  }, []);


  const handlePageChange = (selectedObject) => {
		setCurrentPage(selectedObject.selected);
		
      const fetchData = async () => {
        const result = await axios(`https://api.jikan.moe/v4/anime?page=${selectedObject.selected}`);
        setItem(result.data.data);
        setPageCount(result.data.pagination.last_visible_page)
        setPagination(result.data.pagination);
      };
      fetchData();
      console.log(selectedObject.selected);
	};
  


  const onChange = (e) => {
    setResult(e.target.value)
  }

  return (
    <>
      <div className="homepage">

        {item.map((item) => {
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
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={6}
        onPageChange={handlePageChange}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
      </div>
    </>
  );
}

export default Home;
