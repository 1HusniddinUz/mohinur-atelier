import "../../assets/HeroSection.css"
const HeroSection = () => {
  return (
    <div id="HeroSection">
      <div className="HeroTextBlock">
        <div className="TextBlockTop">
          <h1>Hydrated skin in 3 easy steps</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique duis Cursus mi quis viverra
            ornare.
          </p>
          <button className="red">Shop now</button>
          <button className="white">Our Story</button>
        </div>
        <div className="TextBlockBottom">
            <span>Trusted by the world's best companies</span>
            <strong>Logo</strong>
            <strong>Logo</strong>
            <strong>Logo</strong>
        </div>
      </div>
      <div className="HeroContent"></div>
    </div>
  );
};

export default HeroSection;
