import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Footer/Footer";

const useStyles = makeStyles({
  headline: {
    fontWeight: 500,
    width: "70%",
    margin: "30px 0 15px 0",
  },
  news: {
    width: "60%",
    lineHeight: "30px",
    fontSize: "18px",
  },
  date: {
    margin: "20px 0 10px 0",
    fontSize: "14px",
  },
  reporter: {
    marginBottom: "15px",
    fontSize: "15px",
  },
});

const FullNews = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [news, setNews] = useState([]);
  useEffect(() => {
    const url = `https://hotcoffee-server.herokuapp.com/fullNews/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setNews(data[0]));
  }, []);
  return (
    <div>
      <Navbar />
      <Container>
        <Typography variant="h2" className={classes.headline}>
          {news.headline}
        </Typography>
        <img src={news.imageURL} alt="" />
        <Typography className={classes.date}>
          Published at {news.date}
        </Typography>
        <Typography className={classes.reporter}>By {news.reporter}</Typography>
        <Typography className={classes.news}>{news.news}</Typography>
      </Container>
      <Footer />
    </div>
  );
};

export default FullNews;
