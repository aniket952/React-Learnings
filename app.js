import React from "react";
import ReactDOM from "react-dom/client";

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

//functional Component
const SearchComponent = () => {
  return (
    <div className="app-search">
      <textarea className="searchbar" placeholder="Search here...."></textarea>
    </div>
  );
};
const CardComponent = (props) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo-700x394.png"
      ></img>
      <h4>{props.resName}</h4>
      <h4>{props.resPrice}</h4>
      <h4>{props.resMin}</h4>
    </div>
  );
};
const ResComponent = () => {
  return (
    <div className="restuarant-list">
      <CardComponent resName="kfc" resPrice="400" resMin="40" />
      {/* <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent /> */}
    </div>
  );
};
const HeaderComponenet = () => {
  return (
    <div className="app-Header">
      <div className="app-logo">
        <img
          className="logo"
          alt="logo-Loding"
          src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Logo-700x394.png"
        />
      </div>
      <div className="app-menu">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const BodyComponent = () => {
  return (
    <div className="bodyComponent">
      <SearchComponent />
      <ResComponent />
    </div>
  );
};
const ReactApp = () => (
  <div>
    <HeaderComponenet />
    <BodyComponent />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactApp />);
