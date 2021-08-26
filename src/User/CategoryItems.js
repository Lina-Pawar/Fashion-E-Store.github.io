import { React } from "react";
import { Link } from "react-router-dom";
import "./CategoryItems.css";
function CategoryItems() {
  return (
    <div className="catitems">
      <h2 style={{textAlign:"center",textDecoration:"none",paddingLeft:0}}>Categories</h2>
      <h3>Clothing&nbsp;<i className="fas fa-tshirt"></i></h3>
      <hr />
        <Link to="/category?category=men&type=clothing">
          <div className="catimg" id="one">
            <h3><b>Men Clothing</b></h3>
          </div>
        </Link>
        <Link to="/category?category=women&type=clothing">
          <div className="catimg" id="two">
            <h3><b>Women Clothing</b></h3>
          </div>
        </Link>
        <Link to="/category?category=kids&type=clothing">
          <div className="catimg" id="three">
            <h3><b>Kids Clothing</b></h3>
          </div>
        </Link> 
      <h3>Accessories&nbsp;<i className="fab fa-redhat"></i></h3>
      <hr />
      <Link to="/category?category=men&type=accessories">
          <div className="catimg" id="four">
            <h3><b>Men Accessories</b></h3>
          </div>
        </Link>
        <Link to="/category?category=women&type=accessories">
          <div className="catimg" id="five">
            <h3><b>Women Accessories</b></h3>
          </div>
        </Link>
        <Link to="/category?category=kids&type=accessories">
          <div className="catimg" id="six">
            <h3><b>Kids Accessories</b></h3>
          </div>
        </Link> 
      <h3>Footwear&nbsp;<i className="fas fa-shoe-prints"></i></h3>
      <hr />
      <Link to="/category?category=men&type=footwear">
          <div className="catimg" id="seven">
            <h3><b>Men Footwear</b></h3>
          </div>
        </Link>
        <Link to="/category?category=women&type=footwear">
          <div className="catimg" id="eight">
            <h3><b>Women Footwear</b></h3>
          </div>
        </Link>
        <Link to="/category?category=kids&type=footwear">
          <div className="catimg" id="nine">
            <h3><b>Kids Footwear</b></h3>
          </div>
        </Link> 
    </div>
  );
}

export default CategoryItems;
export const clothing=[
  {
    type:"men",
    colors:"Yellow Black Green Blue White Orange Brown Pink Purple Gold Khaki Red Olive Gray",
    categories:"T-Shirt Casual Shirts Blazers Suits Kurtas Sherwani Jackets Sweatshirts Jeans Nightwear Pants"
  },
  {
    type:"women",
    colors:"Brown Pink Purple Blue Yellow Green Burgundy Red Magenta Black White Golden",
    categories:"Tops Skirts Ethnics Sarees Dresses Jeans Ethnic Jumpsuit Lehengas Shorts Nightwear"
  },
  {
    type:"kids",
    colors:"Grey Black Blue White Red Green Cream Gold Pink Yellow Peach",
    categories:"Boys Girls T-shirt Trousers Clothing Trackpants Shorts Shirt Jeans Tops Capris Nightsuit Dresses Lehengas Joggers"
  }
];
export const accessories=[
  {
    type:"men",
    colors:"Silver Black Gold Yellow Blue Brown Green Red White",
    categories:"Watches Belts Gloves Wallets Hats Caps Masks"
  },
  {
    type:"women",
    colors:"Gold Brown Red Black Green Blue Silver Pink Purple White Peach Grey Beige",
    categories:"Jewellery Hats Scarf Belts Sunglasses Watches Masks Gloves"
  },
  {
    type:"kids",
    colors:"Green Grey Blue Black Gray Burgundy Red Yellow Silver Pink White",
    categories:"Boys Girls Watches Caps Sunglasses Belts Masks"
  }
];
export const footwear=[
  {
    type:"men",
    colors:"White Blue Black Brown Orange Red Green",
    categories:"Sports Shoes Sandals Flip Flops Crocs Running Socks"
  },
  {
    type:"women",
    colors:"Pink Black Grey Brown Beige Yellow Red Purple Gold Blue Peach White Green",
    categories:"Flats Wedges Heels Boots Sneakers Shoes"
  },
  {
    type:"kids",
    colors:"Blue Green Red Yellow Black Orange White Navy Grey Pink",
    categories:"Boys Girls Shoes Sandal Crocs Sneakers Sandals Heels Solid Pumps"
  }
];