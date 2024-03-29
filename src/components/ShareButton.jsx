import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  PinterestIcon,
  FacebookShareButton,
  TwitterShareButton,
  PinterestShareButton,
} from "react-share";

function ShareSocial() {
  return (
    <>
      <FacebookShareButton
        url={"https://peing.net/ja/"}
        hashtag={"#hashtag"}
        description={"aiueo"}
        className="socialImages"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        title={"test"}
        url={"https://peing.net/ja/"}
        hashtags={["hashtag1", "hashtag2"]}
        className="socialImages"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <PinterestShareButton
        title={"test"}
        url={"https://peing.net/ja/"}
        hashtags={["hashtag1", "hashtag2"]}
        className="socialImages"
      >
        <PinterestIcon size={32} round />
      </PinterestShareButton>
    </>
  );
}

export default ShareSocial;
