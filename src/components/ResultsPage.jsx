import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Button, Grid, Container, Box, Stack, Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper';
import './ResultsPageStyles.css'
import dummydata1 from './dummydata.js'
import { ReactTinyLink } from 'react-tiny-link';
import ReactPlayer from 'react-player'
import StarRatings from './StarRatings.jsx'
import ShareButton from './ShareButton.jsx'
import { setFinalMouse, getFinalMouse } from './redux/state/finalMouseSlice.js'
import PanToolOutlinedIcon from '@mui/icons-material/PanToolOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import PermDataSettingIcon from '@mui/icons-material/PermDataSetting';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import Footer from './Footer.jsx'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  elevation: 5,
  border: `1px solid navy`,
  textAlign: 'center',
  padding: "10px",
  color: theme.palette.text.primary,
}));


function ResultsPage() {
  const [dummyData, setDummyData] = useState([])
  const [productData, setProductData] = useState('')

  const [productURL, setProductURL] = useState('')
  const [mouseData, setMouseData] = useState('')
  const [scraped, setScraped] = useState('')

  const finalResult = useSelector(getFinalMouse)

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
      }
    }).then((res) => res.json())
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



  // function gripLogic() {
  //   if (productData.mouseGrip.includes())
  // }

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          benevolent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const grip = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6" component="div">
          Mouse made for {productData.mouseGrip} users
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Palm grip is the most widely used mouse grip.
        </Typography>
        <Typography variant="body2">
          <br />
          {'It is most popularly used in FPS games.'}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const weight = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6" component="div">
          Considered a <strong>Heavy</strong> (>100g) mouse.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Classified as a <strong>Large size (>222222mm) </strong>
        </Typography>
        <Typography variant="body2">
          <br />
          {`The heavier the mouse, the higher one's sensitivity should be`}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const misc = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6" component="div">
          Available in {productData.interface}.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Made by brandNameSliced
        </Typography>
        <Typography variant="body2">
          {'People rated this mouse averageMouseRating out of 5 on Amazon'}
          <br />
          <br />
        </Typography>
      </CardContent>
    </React.Fragment>
  );


  const related = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6" component="div">
          Available in {productData.interface}.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Made by brandNameSliced
        </Typography>
        <br />
        <Typography variant="body2">
          <br />
          <br />

          People rated this mouse averageMouseRating out of 5 on Amazon
          <br />
        </Typography>
      </CardContent>
    </React.Fragment>
  );




  return (
    <>
    <Container>
      <div className="results-page">
        <article>
          <h1>YOUR PERFECT MOUSE IS </h1>
        </article>
        <Typography className="product-name" variant="h4">Your mouse is</Typography>
        <br />
        <br />
        <div>
        </div>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Item className="name">
              <h3 className="product-name"> {productData && productData.productName} - {productData && productData.price.$numberDouble} </h3>
            </Item>
            <div className="product-name">
              <br />
            </div>
            <p className="product-name">
              <StarRatings />
              <ShareButton />
            </p>
            <br />
            <div className="product-name">
              <Button className="product-name" onClick={handleClick} color="secondary" variant="contained"> Click to buy on Amazon </Button>
            </div>
          </Grid>
          <Grid item xs={8}>
            <ReactPlayer
              width="525px"
              url='https://www.youtube.com/watch?v=imE3jc3Iq3s'
            />
            <br />
            <Item className="related1">
              <div className="relatedMouse"> <ControlPointDuplicateIcon /> <strong>Related Mouses</strong> </div>
              <p> mouse 1 </p>
              <p> mouse 2 </p>
            </Item>
          </Grid>
        </Grid>
        <br />
        <Box sx={{ display: "flex", justifyContent: 'center' }}>
        </Box>
        <br />
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4}>
            <Item sx={{ border: 1, marginLeft: "15px" }} className="grip">
              <PanToolOutlinedIcon /> <strong>Mouse Grip</strong> </Item>
            <Card sx={{ border: 1, marginLeft: "15px" }} variant="outlined">{grip}</Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>
              <FitnessCenterOutlinedIcon /> <strong>Weight and Size </strong> </Item>
            <Card sx={{ border: 1 }} variant="outlined">{weight}</Card>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item sx={{ border: 1, marginRight: "15px" }}> <AspectRatioIcon />  <strong>Misc/Additional Info</strong> </Item>
            <Card sx={{ border: 1, marginRight: "15px" }} variant="outlined">{misc}</Card>
          </Grid>
        </Grid>
        <br />
      </div>
    </Container>
    <Footer/>
    </>
  );
}
export default ResultsPage;


{/* <Item> This mouse is available in <b>{productData.interface}</b> </Item>
<Item> This mouse is mainly for FPS gamers </Item>
<Item> Has a weight of {productData && productData.weight.$numberDouble}g </Item>
<Item> The mouse supports {productData.mouseGrip} grip </Item> */}