import Search from "./Search";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero">
        <div className="main-title">
          <h1 className="welcome">
              Welcome to Romeo's Delight
          </h1>
          <h2 className="crave">
            Crave it? Get it.
          </h2>
          <p className="favourite" id="do">
          Search for a favorite restaurant, cuisine, or dish.
          </p>
        </div>
        <p className="search">
          <Search />
        </p>
      </div>
    </div>
  );
};

export default Hero;
