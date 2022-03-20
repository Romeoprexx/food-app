import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories-section">
      <h1 className="explore">Explore by Categories</h1>
      <div className="categories">
        <Link to="/category/bbqs" className="categories-card">
          <div className="food-group">
            <img
              src="https://trentinowild.it/images/oramedia/icon_activities/GrigliataBBQ_525_1580035289.webp"
              alt="bbq"
            />

            <h3>Bbqs</h3>
          </div>
        </Link>
        <Link to="/category/burgers" className="categories-card">
          <div className="food-group">
            <img
              src="https://media.istockphoto.com/photos/homemade-cheese-smash-burger-picture-id618630648?k=20&m=618630648&s=612x612&w=0&h=g04p1-NSXvwS52y74cDgF483LkRpzyoOSwCaduo0mgA="
              alt="burgers  "
            />

            <h3>Burgers</h3>
          </div>
        </Link>
        <Link to="/category/fried-chicken" className="categories-card">
          <div className="food-group">
            <img
              src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.616.462.suffix/1568222255998.jpeg"
              alt="chickens"
            />

            <h3>Fried Chicken</h3>
          </div>
        </Link>
        <Link to="/category/ice-cream" className="categories-card">
          <div className="food-group">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/super-easy-fruit-ice-cream-b288af9.jpg?quality=90&resize=440,400"
              alt="ice-cream"
            />

            <h3>Ice-cream</h3>
          </div>
        </Link>
        <Link to="/category/pizzas" className="categories-card">
          <div className="food-group">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/1c/88/f9/30/half-and-half-pepperoni.jpg"
              alt="pizza"
            />

            <h3>Pizzas</h3>
          </div>
        </Link>
        <Link to="/category/sandwiches" className="categories-card">
          <div className="food-group">
            <img
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/05/club-sandwich-recipe.jpg"
              alt="sandwiches"
            />

            <h3>Sandwiches</h3>
          </div>
        </Link>
        <Link to="/category/sausages" className="categories-card">
          <div className="food-group">
            <img
              src="https://www.keziefoods.co.uk/wp-content/uploads/2021/01/Ostrich-Sausages-270g-6-in-a-pack.jpg"
              alt="sausages"
            />

            <h3>Sausages</h3>
          </div>
        </Link>
        <Link to="/category/steaks" className="categories-card">
          <div className="food-group">
            <img
              src="https://assets.bonappetit.com/photos/57ad5452f1c801a1038bcb97/master/pass/perfect-porterhouse-steak.jpg"
              alt="steak"
            />

            <h3>Steak</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
