import React from "react";
import Menu from "../Menu/Menu";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { CardActions } from "@mui/material";

const FindBook = () => {
  const [books, setBooks] = useState([]);
  const [value, setValue] = useState("");

  console.log(books);
  const error = (err) => {
    console.log(err);
  };

  useEffect(() => {
    fetch(`https://gnikdroy.pythonanywhere.com/api/book/`)
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.results);
      })

      .catch(error);
  }, []);

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const searchBook = () => {
    setBooks(books.filter((item) => item.title.includes(value)));
  };

  const getImage = (book) => {
    const find = book.resources.find((item) => item.uri.includes("medium.jpg"));

    return find.uri;
  };

  const getTxt = (book) => {
    const find = book.resources.find((item) => item.uri.includes("txt"));
    window.open(find.uri);
  };

  return (
    <>
      <Menu />
      <Grid item xs={12} align="center"></Grid>
      <Grid item xs={12} align="center">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={value}
            onChange={handleChangeValue}
            label="Title book"
            color="secondary"
            focused
          />

          <Button
            onClick={searchBook}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Find Book
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} align="center"></Grid>
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

export default FindBook;
