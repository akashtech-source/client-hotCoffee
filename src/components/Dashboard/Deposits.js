import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const [news, setnews] = useState([]);
  useEffect(() => {
    fetch("https://hotcoffee-server.herokuapp.com/news")
      .then((res) => res.json())
      .then((data) => setnews(data));
  }, []);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Post</Title>
      {news.length === 0 && (
        <div className="d-flex justify-content-center p-2">
          <div
            class="text-primary spinner-grow"
            style={{ width: "4rem", height: "4rem" }}
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <Typography component="p" variant="h4">
        {news.length} News
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Till {new Date().getFullYear()}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View All news's
        </Link>
      </div>
    </React.Fragment>
  );
}
