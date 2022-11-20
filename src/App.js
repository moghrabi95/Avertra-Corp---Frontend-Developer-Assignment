import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header/Header";
import HeroSlide from "./components/HeroSlide/HeroSlide";
import Shortening from "./components/Shortrning/Shortening";
import SectionTitle from "./components/SectionTitle/SectionTitle";
import Features from "./components/Features/Features";
import Boost from "./components/Boost/Boost";
import Footer from "./components/Foorter/Footer";
const App = () => {
  return (
    <Provider store={store}>
      <div className="main-content">
        <Header />
        <HeroSlide />
        <section className="container-fluid gray-bg-color mt-5 pb-10 ">
          <Shortening />
          <SectionTitle />
          <Features />
        </section>
        <section className="boost-section">
          <Boost />
        </section>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
