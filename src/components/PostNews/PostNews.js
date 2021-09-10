import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  Avatar,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import axios from "axios";
import { useForm } from "react-hook-form";
import Navbar from "../Home/Navbar/Navbar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  name: {
    marginBottom: 10,
  },
}));

export default function Dashboard() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const donorData = {
      headline: data.headline,
      news: data.news,
      date: data.date,
      reporter: data.reporter,
      excerpt: data.excerpt,
      imageURL: imageURL,
    };
    const url = `https://hotcoffee-server.herokuapp.com/addNews`;

    console.log(donorData);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(donorData),
    }).then((res) => console.log("server side response", res));
    alert("News Posted Successfully");
  };

  const handleUpload = (e) => {
    console.log(e.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "09843d41cbc1f748cbe92dbeb66ae56d");
    imageData.append("image", e.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [value, setValue] = useState(4);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleValue = () => {
    setValue(0);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
        variant="primary"
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            HotCoffee Dashboard
          </Typography>

          <NavLink
            style={{
              color: "white",
              fontSize: "16px",
              marginRight: "20px",
              textDecoration: "none",
            }}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            style={{
              color: "white",
              fontSize: "16px",
              textDecoration: "none",
              textDecoration: "none",
            }}
            to="/dashboard"
          >
            Dashboard
          </NavLink>
          <IconButton color="inherit">
            <Badge badgeContent={value} onClick={handleValue} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {/* <List>{mainListItems}</List> */}
        <NavLink to="/allDonor">
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Post a News" />
          </ListItem>
        </NavLink>
        <NavLink to="/applicant">
          <ListItem button>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Add Admin" />
          </ListItem>
        </NavLink>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Update Post" />
        </ListItem>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Post A News
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* register your input into the hook by invoking the "register" function */}

              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Headline"
                name="name"
                autoComplete="name"
                {...register("headline")}
                autoFocus
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Full News"
                type="text"
                id="phone"
                {...register("news")}
                autoComplete="current-password"
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Reporter Name"
                type="text"
                id="address"
                {...register("reporter")}
                autoComplete="current-password"
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Date"
                type="text"
                id="age"
                {...register("date")}
                autoComplete="current-password"
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Excerpt"
                type="text"
                id="age"
                {...register("excerpt")}
                autoComplete="current-password"
              />

              <p>News Image</p>
              <input
                className="form-control"
                type="file"
                onChange={handleUpload}
              />
              {/* include validation with required or other standard HTML validation rules */}
              {/* <input  {...register("exampleRequired", { required: true })} /> */}
              {/* errors will return when field validation fails  */}
              {errors.exampleRequired && <span>This field is required</span>}

              <input className="mt-4 btn btn-danger" type="submit" />
            </form>
          </div>
        </Container>
      </main>
    </div>
  );
}
