import heroImage from "../../assets/images/illustration-working.svg";
const HeroSlide = () => {
  return (
    <div className="container col-xxl-8 px-4 py-5 hero-slide">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-sm-12 col-lg-6">
          <img
            src={heroImage}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold lh-2 mb-3">
            More than just shorter links
          </h1>
          <p className="lead mb-4">
            Build your brand's recognition and get detailed insights on how your
            links are preforming
          </p>
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeroSlide;
