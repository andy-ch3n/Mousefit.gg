import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getClicked } from "./components/redux/state/quizButtonClickedSlice.js";
import { getIsQuizDone } from "./components/redux/state/isQuizDoneSlice.js";
import { getScrapedYoutube } from "./components/redux/state/scrapedYoutubeSlice.js";
import { getScrapedData } from "./components/redux/state/scrapedDataSlice.js";
import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Theme from "./Theme/ThemeFile.js";
import Header from "./components/Header.jsx";
import Mouse from "./components/Mouse.jsx";
import QuizButton from "./components/QuizButton.jsx";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Footer from "./components/Footer.jsx";
import ResultsPage from "./components/ResultsPage.jsx";
import LoadingPage from "./components/LoadingPage.jsx";

function App() {
  const quizClicked = useSelector(getClicked);
  const scrapedYoutube = useSelector(getScrapedYoutube);
  const scrapedData = useSelector(getScrapedData);
  const isQuizDone = useSelector(getIsQuizDone);

  useEffect(() => {}, []);

  const landingPage = () => {
    if (!quizClicked.quizbuttonclicked) {
      return <Mouse />;
    }
    return <></>;
  };

  const QuizDonePage = () => {
    if (scrapedYoutube.isLoading && scrapedData.isLoading) {
      return <LoadingPage />;
    } else {
      return <ResultsPage />;
    }
  };

  const QuizDonePageTwo = () => {
    if (!isQuizDone.done) {
      return <QuizButton />;
    } else if (
      isQuizDone.done &&
      scrapedYoutube.isLoading &&
      scrapedData.isLoading
    ) {
      return <LoadingPage />;
    } else {
      return <ResultsPage />;
    }
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <div className="stupid-star-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <div className="body-container-wrapper-thing">
          <Header />
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: !quizClicked.quizbuttonclicked ? null : "center",
              justifyContent: !quizClicked.quizbuttonclicked ? null : "center",
              flexDirection: "column",
            }}
          >
            {landingPage()}
            <Box
              position={!quizClicked.quizbuttonclicked ? "absolute" : "static"}
              bottom={!quizClicked.quizbuttonclicked ? "35%" : null}
              left={!quizClicked.quizbuttonclicked ? "50%" : null}
            >
              {scrapedYoutube.isLoading && scrapedData.isLoading ? (
                <QuizButton />
              ) : (
                <ResultsPage />
              )}
              {/* {QuizDonePageTwo()} */}
            </Box>
            {/* <LoadingPage /> */}
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
