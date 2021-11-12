import React from "react";

function LoadingPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <p style={{ color: "white", paddingTop: "9%" }}>
        Conjuring the best mouse for you...
      </p>
      <img
        style={{ paddingTop: "2%", minWidth: "75%", maxWidth: "85%" }}
        src="loading.gif"
        alt="loading"
      />
    </div>
  );
}

export default LoadingPage;
