import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button, Grid, Container, Box, Stack } from '@mui/material';
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import './ResultsPageStyles.css'
import dummydata1 from './dummydata.js'
import { ReactTinyLink } from 'react-tiny-link';
import ReactPlayer from 'react-player'
import StarRatings from './StarRatings.jsx'
import ShareButton from './ShareButton.jsx'



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));


function ResultsPage() {
  const dispatch = useDispatch();
  const [dummyData, setDummyData] = useState([])
  const [productData, setProductData] = useState('')
  const [productURL, setProductURL] = useState('')
  const [mouseData, setMouseData] = useState('')
  const [scraped, setScraped] = useState('')


  // function getMouseData() {
  //   fetch("http://localhost:1337/api/getAll", {
  //     method: "GET",
  //     mode: 'no-cors',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then((response) => {
  //     console.log('response data', response.data[0])
  //     setProductData(response.data[0])
  //   }).catch((error) => {
  //     console.log('error fetching mouse')
  //   })
  // // }
  // }


  // function getMouseData1(e) {
  //   e.preventDefault()
  //   fetch(`http://localhost:1337/api/getScrapedData`)
  //   .then((response) => {
  //     setMouseData(response);
  //   })
  //   .catch((err => {
  //       console.log('invalid username')
  //     }))
  // }

  const getMouseList = () => {
    fetch("http://localhost:1337/api/getScrapedData/", {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      body: JSON.stringify({
        url: productData.amazonLink
      }),
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }}).then((res) => res.json())
        .then((result) => {
           console.log('work', result)
            setScraped(result);
        },
        (error) => {
            console.log(error);
        }
    )
}



  function getMouseData() {
    setProductData(dummydata1.data[0])
  }


  function handleClick() {
    window.location.assign(`${productData.amazonLink}`);
  }

  useEffect(() => {
    getMouseData()
    if (productData.length > 5) {
    getMouseList()
    }
  }, [])


  return (
    <div className="results-page">
      <h1> Quiz Results Page </h1>
      <br />
      <br />
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
      <Item> Your recommended mouse  </Item>
      <h3 className="product-name"> {productData.productName} </h3>
      <p className="product-name">
      <StarRatings/>
      </p>
      <div className="product-name">
            <ReactTinyLink
              cardSize="large"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              width={"10vw"}
              className="product-name"
              description={null}
              url="https://www.amazon.com/ASUS-ROG-Chakram-Wireless-Optical/dp/B0859F3S39/ref=sr_1_3?crid=7M266WNLYNKC&keywords=asus+rog+chakram&qid=1636598115&qsid=145-9430918-4631208&sprefix=asus+rog+chakram%2Caps%2C205&sr=8-3&sres=B0859F3S39%2CB0937MPFN3%2CB09D6DMY6T%2CB079RYNX33%2CB07MWTHGWT%2CB08KFQVT5Y%2CB09726KT4R%2CB08J3WX8Q1%2CB07M65DNKH%2CB073JDLCKT%2CB06XT4B2B9%2CB08R14HS3R%2CB0874WT7ZT%2CB01EMP3XDY%2CB073JJXHSB%2CB07JH4RNYH&srpt=INPUT_MOUSE"
            />
      </div>
      <div className="product-name">
      <ShareButton/>
      </div>
        </Grid>
        <Grid item xs={8}>
            <ReactPlayer
            width="550px"
            url='https://www.youtube.com/watch?v=imE3jc3Iq3s'
             />
          <Item> Price of this mouse is <strong> {productData && productData.price.$numberDouble} </strong> </Item>
          <Item> This mouse is available in <b>{productData.interface}</b> </Item>
          <Item> This mouse is mainly for FPS gamers </Item>
          <Item> Has a weight of {productData && productData.weight.$numberDouble}g </Item>
          <Item> The mouse supports {productData.mouseGrip} grip </Item>
        </Grid>
      </Grid>
      <br />
      <Box sx={{ display: "flex", justifyContent: 'center' }}>
        <Button onClick={handleClick} color="secondary" variant="contained"> Click to buy on Amazon </Button>
        <Button onClick={getMouseList}> test </Button>
      </Box>
        <br />
    </div>
  );
}
export default ResultsPage;