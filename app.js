// import React from 'react';
// import ReactDOM from 'react-dom';

const myName = React.createElement("h1",{}, "my name is aniket and i am working in accenture and i am greatful of that");
      const treeRoot = ReactDOM.createRoot(document.getElementById("rootDiv"));
      treeRoot.render(myName);

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "HII i am aniket"),
    React.createElement("h1", {}, "HII i am mote"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "HII i am nitin"),
    React.createElement("h1", {}, "HII i am mote"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
