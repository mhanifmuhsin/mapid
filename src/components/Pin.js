import * as React from "react";

function Pin({ status }) {
  const color = (status) => {
    if (status === "Kuning") {
      return "#ffff00ff";
    } else if (status === "Merah") {
      return "#8b0000ff";
    } else if (status === "Hijau") {
      return "#006400ff";
    } else {
      return "#d00";
    }
  };
  return (
    <span
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: color(status),
        borderRadius: "50%",
        display: "inline-block",
      }}
    ></span>
  );
}

export default React.memo(Pin);
