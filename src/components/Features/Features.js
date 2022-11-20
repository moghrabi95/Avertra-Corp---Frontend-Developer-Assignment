import recognition from "../../assets/images/icon-brand-recognition.svg";
import detailed from "../../assets/images/icon-detailed-records.svg";
import customizable from "../../assets/images/icon-fully-customizable.svg";
const Features = () => {
  return (
    <div className="container features">
      <div className="row">
        <div className="col-lg-4 mx-auto">
          <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
            <div className="blockquote-custom-icon bg-info shadow-sm">
              <img src={recognition} alt="recognition" width={30} />
            </div>
            <h4>Brand recognition</h4>
            <p className="mb-0 mt-2 font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </blockquote>
        </div>
        <div
          className="col-lg-4 mx-auto mt-5"
          style={{ transform: "translateY(30px)" }}
        >
          <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
            <div className="blockquote-custom-icon bg-info shadow-sm">
              <img src={detailed} alt="recognition" width={30} />
            </div>
            <h4>Brand detailed</h4>
            <p className="mb-0 mt-2 font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </blockquote>
        </div>
        <div
          className="col-lg-4 mx-auto  mt-5"
          style={{ transform: "translateY(60px)" }}
        >
          <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
            <div className="blockquote-custom-icon bg-info shadow-sm">
              <img src={customizable} alt="recognition" width={30} />
            </div>
            <h4>Fully Customizable</h4>
            <p className="mb-0 mt-2 font-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};
export default Features;
