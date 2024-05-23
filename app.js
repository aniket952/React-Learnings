import React from "react";
import ReactDOM from "react-dom";

//without using JSX, core way to do it
// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "HII i am aniket"),
//     React.createElement("h1", {}, "HII i am mote"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "HII i am nitin"),
//     React.createElement("h1", {}, "HII i am mote"),
//   ]),
// ]);

//with useing JSX
const heading = (
  <div className="aniket" id="aniket">
    <h1>my name is aniket mote i am wotking in accenture</h1>
    <h2>my name is aniket</h2>
  </div>
);

//functional Component
const ChildComponenet = () => (
  <div className="dp">
    <h1>dp</h1>
    <h2>mote</h2>
  </div>
);
const HeadingComponent = () => (
  <div className="aniketmote">
    <h1>aniket</h1>
    <h2>mote</h2>
    <ChildComponenet />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("rootDiv"));
// root.render(heading);
root.render(<HeadingComponent />);
