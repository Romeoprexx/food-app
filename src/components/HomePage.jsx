import Comment from "./Comment";
import Banner from "./Banner";
import Categories from "./Categories";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div className="homepage">
      <Hero />
      <Categories />
      <Comment />
    </div>
  );
};

export default HomePage;
