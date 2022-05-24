import React from "react";
import Menu from "../Menu/Menu";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import Paper from "@mui/material/Paper";
import { CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const FavoriteBooks = () => {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    setBooks(JSON.parse(localStorage.getItem("favoriteBooks")));
  }, []);

  const getImage = (book) => {
    const find = book.resources.find((item) => item.uri.includes("medium.jpg"));

    return find.uri;
  };

  const getTxt = (book) => {
    const find = book.resources.find((item) => item.uri.includes("txt"));
    window.open(find.uri);
  };
  const clear = () => {
    localStorage.clear();
    setBooks([]);
  };

  return (
    <>
      <Menu />
      <Grid item xs={12} align="center"></Grid>
      <Grid item xs={12} align="center">
        <Button onClick={clear} variant="contained" endIcon={<SendIcon />}>
          Clear Favourite Book
        </Button>
      </Grid>
      <Grid item xs={12} align="center">
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
                  <Card sx={{ maxWidth: 200 }}>
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
                      <Button onClick={() => getTxt(book)}>Read Book</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Paper>
            </Box>
          );
        })}
      </Grid>
    </>
  );
};

export default FavoriteBooks;
