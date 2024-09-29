import React from "react";

const MainComponent = (props) => {
  return (
    <main
      className="flex items-center justify-center"
      style={{ height: "78%" }}
    >
      {props.children}
    </main>
  );
};

export default MainComponent;
