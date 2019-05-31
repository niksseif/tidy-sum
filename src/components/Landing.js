import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import imageHeader from "../Assets/imageHeader.jpg";
import Login from "./Login.jsx";
class landing extends Component {
  state = {
    loading: true,
    user: null
  };
  render() {
    const { loading } = this.state;
    return (
      <div
        style={{
          backgroundColor: "#DBE2DD",
          opacity: "0.8",
          position: "relative",
          textAlign: "center"
        }}
      >
        <div style={{ backgroundColor: "#DBE2DD" }}>
          <Image
            onLoad={() => this.setState({ loading: false })}
            src={imageHeader}
          />

          <p
            style={{
              fontSize: "5vw",
              color: "white",
              position: "absolute",
              top: "20%",
              left: "30%",
              zIndex: "10"
            }}
          >
            TIDY-SUM
          </p>
        </div>
        <div>{this.state.loading === false && <Login />}</div>
      </div>
    );
  }
}
export default landing;
