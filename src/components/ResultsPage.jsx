import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Grid,
  Container,
  Box,
  Stack,
  Card,
  CardContent,
  styled,
  Typography
} from "@mui/material";
import Paper from "@mui/material/Paper";
import "./ResultsPageStyles.css";
import dummydata1 from "./dummydata.js";
import { ReactTinyLink } from "react-tiny-link";
import ReactPlayer from "react-player";
import StarRatings from "./StarRatings.jsx";
import ShareButton from "./ShareButton.jsx";
import Header from "./Header.jsx";
import { setFinalMouse, getFinalMouse } from "./redux/state/finalMouseSlice.js";
import PanToolOutlinedIcon from "@mui/icons-material/PanToolOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import AspectRatioIcon from "@mui/icons-material/AspectRatio";
import ControlPointDuplicateIcon from "@mui/icons-material/ControlPointDuplicate";
import Footer from "./Footer.jsx";
import { setScrapedData, getScrapedData } from './redux/state/scrapedDataSlice.js';
import { setRelatedMouse, getRelatedMouse } from './redux/state/relatedMouseSlice.js';
import { setScrapedYoutube, getScrapedYoutube } from './redux/state/scrapedYoutubeSlice.js';

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

  const [productURL, setProductURL] = useState("");
  const [mouseData, setMouseData] = useState("");
  const [scraped, setScraped] = useState("");

  const finalResult = useSelector(getFinalMouse);
  const scrapedData = useSelector(getScrapedData);
	const relatedMice = useSelector(getRelatedMouse);
	const scrapedYoutube = useSelector(getScrapedYoutube);

  function getMouseData() {
    setProductData(dummydata1.data[0]);
  }

  function handleClick() {
    window.location.assign(`${productData.amazonLink}`);
  }

  useEffect(() => {
    getMouseData();
  }, []);


  const grip = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6" component="div">
          Mouse made for {productData && productData.mouseGrip.replace(/\[|\]/g,'')} users
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Palm grip is the most widely used mouse grip.
        </Typography>
        <Typography variant="body2">
          <br />
          <div className="ital">
          {"It is most popularly used in FPS games."}
          </div>
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
          <div className="ital">
          {`The heavier the mouse, the higher one's in-game sensitivity should be`}
          </div>
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  const misc = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h6" component="div">
          Available in {productData && productData.interface.replace(/\[|\]/g,'')}.
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Made by {productData && productData.productName.split(" ")[0]}
        </Typography>
        <Typography variant="body2">
        <div className="ital">
          {"People rated this mouse averageMouseRating out of 5 on Amazon"}
          </div>
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
          <div className="ital">
          People rated this mouse averageMouseRating out of 5 on Amazon
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
                <h2 className="product-header">
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
                  // src={scrapedData.data.image}
                  sx={{
                    height: "100%",
                    width: "150px",
                    opacity: "0.9"
                  }}
                  src={"https://m.media-amazon.com/images/I/5152oFkzhLL._AC_SY450_.jpg"}
                />
              </Box>
              <p className="product-name">
                <div className="product-stars">
                <StarRatings />
                </div>
                <ShareButton />
              </p>
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
                  // url={scrapedYoutube.data[0].link}
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
                <Box sx={{ marginLeft: "8px" }}>
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
                <Box sx={{ marginLeft: "8px" }}>
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
                <Box sx={{ marginLeft: "8px" }}>
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
