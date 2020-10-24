import React from "react";
let size = "100%";
export default class Screen extends React.Component {
  render() {
    return (
      <div
        style={{
          height: size,
          background: "rgb(133,134,148)",
          overflowX: "auto",
          overflowY: "hidden"
        }}
        className="screen"
      >
        <h1
          style={{
            color: "white",
            fontSize: "70px",
            transform: "translateY(25%)"
          }}
        >
          {this.props.value}
        </h1>
      </div>
    );
  }
}
