import React from "react";
import Slider from "react-slick";
import "../../assets/Products.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    name: "Ayollar kostyumi",
    price: "$200",
    image:
      "https://theremoda.com/cdn/shop/collections/gucci-clothing-shoes-and-accessories-theremoda.jpg",
  },
  {
    name: "Ayollar sumkasi",
    price: "$150",
    image:
      "https://theremoda.com/cdn/shop/collections/gucci-clothing-shoes-and-accessories-theremoda.jpg",
  },
  {
    name: "Ayollar kostyumi",
    price: "$180",
    image:
      "https://theremoda.com/cdn/shop/collections/gucci-clothing-shoes-and-accessories-theremoda.jpg",
  },
  {
    name: "Ayollar ko'ylagi",
    price: "$130",
    image:
      "https://theremoda.com/cdn/shop/collections/gucci-clothing-shoes-and-accessories-theremoda.jpg",
  },
];

const Products = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
  };

  return (
    <div id="Products">
      <div className="products-section">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div className="carousel-slide" key={index}>
              <div className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
