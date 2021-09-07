import { Typography, Grid, Container, Button } from "@material-ui/core";
import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./MoreNews.css";

const MoreNews = () => {
  const [newses, setNewses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((res) => res.json())
      .then((data) => setNewses(data));
  }, []);
  return (
    <div>
      <h2 className="title-name">More News</h2>
      <Container>
        <Grid container spacing={2}>
          {newses.map((news) => (
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <div id="card-container" class="card">
                <img src={news.imageURL} class="card-img-top" alt="news" />
                <div class="card-body">
                  <h5 class="card-title">{news.headline}</h5>
                  <p class="card-text">{news.excerpt}</p>
                  <NavLink
                    to={`/fullNews/${news._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="contained" color="primary">
                      Read More
                    </Button>
                  </NavLink>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MoreNews;
