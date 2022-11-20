import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import HeroSlide from "./components/HeroSlide/HeroSlide";
import Shortening from "./components/Shortrning/Shortening";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import Features from "./components/Features/Features";
const App = () => {
  return (
    <div className="main-content">
      <Header />
      <HeroSlide />
      <section className="container-fluid gray-bg-color">
        <Shortening />
      </section>
      <section className="py-5 text-center container-fluid gray-bg-color">
        <div className="row py-lg-5">
          <SectionTitle />
        </div>
      </section>
      <section className="py-5 container-fluid gray-bg-color">
        <Features />
      </section>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
