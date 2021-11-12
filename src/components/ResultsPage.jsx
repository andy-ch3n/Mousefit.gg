import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Grid,
  Container,
  Box,
  Card,
  CardContent,
  styled,
  Paper,
  Typography
} from "@mui/material";
import "./ResultsPageStyles.css";
import dummydata1 from "./dummydata.js";
import ReactPlayer from "react-player";
import StarRatings from "./StarRatings.jsx";
import ShareButton from "./ShareButton.jsx";
import { getFinalMouse } from "./redux/state/finalMouseSlice.js";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import { getScrapedData } from './redux/state/scrapedDataSlice.js';
import { getRelatedMouse } from './redux/state/relatedMouseSlice.js';
import { getScrapedYoutube } from './redux/state/scrapedYoutubeSlice.js';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  elevation: 5,
  border: `1px solid navy`,
  textAlign: "center",
  padding: "10px",
  color: theme.palette.text.primary,
}));

function ResultsPage() {
  const [dummyData, setDummyData] = useState([]);
  const [productData, setProductData] = useState("");
  const [weightMeasure, setWeightMeasure] = useState("");
  const [sizeMeasure, setSizeMeasure] = useState("");

  const finalResult = useSelector(getFinalMouse);
  const scrapedData = useSelector(getScrapedData);
  const relatedMice = useSelector(getRelatedMouse);
  const scrapedYoutube = useSelector(getScrapedYoutube);

  function getMouseData() {
    setProductData(dummydata1.data[0]);
  }


  function getWeightMeasure() {
    if (productData && productData.weight.$numberDouble < 60) {
      setWeightMeasure('very light (<60g)')
    } else if (productData && (productData.weight.$numberDouble >= 60 && productData.weight.$numberDouble < 75)) {
      setWeightMeasure('light (60-75g)')
    } else if (productData && (productData.weight.$numberDouble >= 75 && productData.weight.$numberDouble < 100)) {
      setWeightMeasure('medium, (75-100g)')
    } else {
      setWeightMeasure('heavy, (100g+)')
    }
  }

  function getSizeMeasure() {
    if (productData && productData.mouseSize.$numberDouble < 310000) {
      setSizeMeasure('small (<310,000mm^3)')
    } else if (productData && (productData.mouseSize.$numberDouble >= 75 && productData.mouseSize.$numberDouble < 100)) {
      setSizeMeasure('medium, (310,000-370,000mm^3)')
    } else {
      setSizeMeasure('large, (350,000mm^3+)')
    }

  }

  function handleClick() {
    window.location.assign(`${productData.amazonLink}`);
  }

  useEffect(() => {

    getMouseData();
    getWeightMeasure()
    getSizeMeasure()
  }, []);


  const grip = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6" component="div">
          Mouse made for {productData && productData.mouseGrip.replace(/\[|\]/g, '')} users
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {productData && productData.mouseGrip.includes('palm') ? <p> Palm grip is the most widely used mouse grip.</p> : <p> Claw is the second most widely used mouse grip. </p>}
        </Typography>
        <br />
        <Typography variant="body2">
          <br />
          <div className="ital">
            {"ProTip: FPS gamers most commonly use the palm grip. MOBA gamers are most commonly claw grip."}
          </div>
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const weight = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6" component="div">
          Considered a <strong>{weightMeasure}</strong> mouse.
        </Typography>
        <br />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Mouse is <strong>{sizeMeasure}</strong>
          <br />
          <br />
          <div>
            Calculated using <strong> Length x Width x Height</strong>
          </div>
        </Typography>
        <Typography variant="body2">
          <br />
          <div className="ital">
            {`ProTip: The heavier the mouse, the higher one's in-game sensitivity should generally be.`}
          </div>
          <br />
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const misc = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6" component="div">
          Available in {productData && productData.interface.replace(/\[|\]/g, '')}.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <br />
          Made by <strong>{productData && productData.productName.split(" ")[0]}</strong>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {productData && productData.price.$numberDouble > 100
            ? <p>This is considered an <strong>expensive ($100+)</strong> price for a mouse. </p>
            : <p>This is considered an <strong>average</strong> price for a mouse.</p>}
        </Typography>
        <Typography variant="body2">
          <div className="ital">
            {`ProTip: People rated this mouse ${scrapedData.data.rating} out of 5 on Amazon`}
          </div>
          <br />
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <>
      <Container
        sx={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "30px",
          borderColor: "primary.main",
          borderRadius: '50%'
        }}
      >
        <div className="results-page">
          <h1 className="gradient-text">YOUR PERFECT MOUSE IS </h1>
          <br />
          <br />
          <div></div>
          <Grid
            container
            spacing={2}
            columns={16}
            sx={{ marginLeft: "0", width: "100%" }}
          >
            <Grid item xs={8}>
              <Item className="name">
                <h2 className="gradient-name">
                  {" "}
                  {productData && productData.productName} - {" "}
                  {productData && productData.price.$numberDouble}{" "}
                </h2>
              </Item>
              <div className="product-name">
                <br />
              </div>
              <Box
                sx={{
                  height: 233,
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Box
                  component="img"
                  alt={`Everything you need to know about ${productData.productName}`}
                  sx={{
                    height: "100%",
                    width: "150px",
                    opacity: "0.9"
                  }}
                  src={"https://m.media-amazon.com/images/I/5152oFkzhLL._AC_SY450_.jpg"}
                // instead src={scrapedData.data.image}
                />
              </Box>
              <div className="social-stars">
                <div className="product-stars">
                  <StarRatings />
                </div>
                <ShareButton />
              </div>
              <br />
              <div className="product-name">
                <Button
                  className="product-name"
                  onClick={handleClick}
                  color="secondary"
                  variant="contained"
                >
                  {" "}
                  Click to buy on Amazon{" "}
                </Button>
              </div>
            </Grid>
            <Grid item xs={8}>
              <Item className="reactPlayer">
                <ReactPlayer
                  width="525px"
                  // instead url={scrapedYoutube.data[0].link}
                  url={"https://www.youtube.com/watch?v=FGwzq4UMnVs&list=RDFGwzq4UMnVs&start_radio=1&ab_channel=Ti%C3%ABsto"}
                />
              </Item>
              <br />
              <Item className="related1">
                <div className="relatedMouse">
                  {" "}
                  <ControlPointDuplicateIcon /> <strong>
                    Related Mouses
                  </strong>{" "}
                  {(relatedMice.relatedmouse.length >= 1 && relatedMice.relatedmouse.length) < 3 ? <p>{relatedMice.relatedmouse.map(result => result.productName)}</p> : <p> No related products to display</p>}
                </div>
              </Item>
            </Grid>
          </Grid>
          <br />
          <Box sx={{ display: "flex", justifyContent: "center" }}></Box>
          <br />
          <Box
            sx={{
              height: "16px",
              borderTop: "1px solid black",
              marginLeft: "16px",
              marginRight: "16px",
            }}
          />
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            alignItems="stretch"
          >
            <Grid item xs={2} sm={4} md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Item
                sx={{
                  border: 1,
                  marginLeft: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="grip"
              >
                <PanToolOutlinedIcon />
                <Box sx={{ marginLeft: "8px", textDecoration: "underline" }}>
                  <strong>Mouse Grip</strong>
                </Box>
              </Item>
              <Card sx={{ border: 1, marginLeft: "15px", flexGrow: 1 }} variant="outlined">
                {grip}
              </Card>
            </Grid>
            <Grid item xs={2} sm={4} md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FitnessCenterOutlinedIcon />
                <Box sx={{ marginLeft: "8px", textDecoration: "underline" }}>
                  <strong>Weight and Size</strong>
                </Box>
              </Item>
              <Card sx={{ border: 1, flexGrow: 1 }} variant="outlined">
                {weight}
              </Card>
            </Grid>
            <Grid
              item xs={2} sm={4} md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Item
                sx={{
                  border: 1,
                  marginRight: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {" "}
                <AspectRatioIcon />
                <Box sx={{ marginLeft: "8px", textDecoration: "underline" }}>
                  <strong>Misc & Additional Info</strong>
                </Box>
              </Item>
              <Card sx={{ border: 1, marginRight: "15px", flexGrow: 1 }} variant="outlined">
                {misc}
              </Card>
            </Grid>
          </Grid>
          <br />
        </div>
      </Container>
    </>
  );
}
export default ResultsPage;
