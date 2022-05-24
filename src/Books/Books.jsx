import React from "react";
import Menu from "../Menu/Menu";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Paper from "@mui/material/Paper";
import { CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


const Books = () => {
  const [books, setBooks] = useState([]);
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();

  const error = (err) => {
    console.log(err);
  };

  useEffect(() => {
    localStorage.setItem("favoriteBooks", JSON.stringify([]));
    fetch(`https://gnikdroy.pythonanywhere.com/api/book/`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.results);
        setPrevious(data.previous);
        setNext(data.next);
      })

      .catch(error);
  }, []);

  const nextPage = () => {
    fetch(next)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.results);
        setPrevious(data.previous);
        setNext(data.next);
      })
      .catch(error);
  };

  const previousPage = () => {
    fetch(previous)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.results);
        setPrevious(data.previous);
        setNext(data.next);
      })
      .catch(error);
  };

  const getImage = (book) => {
    const find = book.resources.find((item) => item.uri.includes("medium.jpg"));

    return find.uri;
  };

  const getTxt = (book) => {
    const find = book.resources.find((item) => item.uri.includes("txt"));
    window.open(find.uri);
  };

  const favorite = (book) => {
    const fav = JSON.parse(localStorage.getItem("favoriteBooks"));
    fav.push(book);
    localStorage.setItem("favoriteBooks", JSON.stringify(fav));

  
  };

  return (
    <>
      <Menu />
      
      <Grid container justifyContent="center" >
      
        {books.map((book) => {
          return (
            <Box
              justifyContent="center"
              sx={{
                display: "inline-block",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 500,
                  height: 500,
                  marginTop: 3,
                },
              }}
            >
              <Paper elevation={16}>
                <Grid item xs={12} align="center">
                  <Card sx={{ maxWidth: 210 }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={getImage(book)}
                      alt="Book"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        <div>{book.id}</div>
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <div>{book.title}</div>
                      </Typography>
                    </CardContent>

                    <CardActions>
                      <IconButton
                        onClick={() => favorite(book)}
                        aria-label="add to favorites"
                      >
                        <FavoriteIcon />
                      </IconButton>

                      <Button onClick={() => getTxt(book)}>Read Book</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Paper>
            </Box>
          );
        })}
      </Grid>
    
      <Grid item xs={12}></Grid>
      <Grid item xs={12} align="center">
        <Button
          onClick={previousPage}
          disabled={previous == null}
          variant="contained"
        >
          Last Page
        </Button>
        <Button onClick={nextPage} variant="contained">
          Next Page
        </Button>
      </Grid>
    </>
  );
};

export default Books;
