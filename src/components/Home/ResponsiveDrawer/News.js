import { Grid, Paper, Typography, Button, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import React from "react";

const useStyles = makeStyles({
  root: {
    margin: "0 0 10px 0",
    padding: "10px 0 0 30px",
  },
  headline: {
    fontWeight: 500,
    paddingBottom: "13px",
  },
  btn: {
    marginTop: "20px",
  },
});

const News = ({ newsData }) => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation="disable" className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Typography variant="h4" className={classes.headline}>
              {newsData.headline}
            </Typography>
            <Typography variant="p" className={classes.excerpt}>
              {newsData.excerpt}
            </Typography>
            <br />
            <NavLink
              to={`/fullNews/${newsData._id}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.btn}
              >
                Read More
              </Button>
            </NavLink>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={newsData.imageURL} height="100%" width="100%" alt="" />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default News;
