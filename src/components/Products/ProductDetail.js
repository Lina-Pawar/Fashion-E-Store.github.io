import { ProdList } from "./ProdList";
import "./ProductDetail.css";
import { ProdList2 } from "./ProdList2";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Slider from "infinite-react-carousel";
function ProductDetail() {
  let para = new URLSearchParams(window.location.search);
  let itemID = para.get("id");
  return (
    <div>
      <div
        style={{
          background:
            "-webkit-gradient(linear,left top, right top,from(#d4af37),color-stop(30%,#f9f095),color-stop(40%,#d4af37),color-stop(80%,#f9f095),color-stop(90%,#d4af37))",
          height: "8vh",
          width: "100%",
          position: "fixed",
          zIndex: "10",
        }}
      >
        <Navbar />
      </div>
      <div className="detpage">
        <div className="detcar">
          <Slider dots>
            <div>
              <img
                src={ProdList[itemID].image}
                className="detimg"
                alt="offers"
              />
            </div>
            <div>
              <img
                src={ProdList[itemID].image2}
                className="detimg"
                alt="offers"
              />
            </div>
          </Slider>
        </div>

        <div className="detcontent">
          <h2>{ProdList[itemID].name}</h2>
          <br />
          <h3 style={{ color: "darkgray" }}>{ProdList[itemID].itemdet}</h3>
          <br />
          <br />
          <h3>Size:{ProdList[itemID].size} </h3>
          <br />
          <h3>
            Prize: &#8377;. {ProdList[itemID].price}
            &nbsp;&nbsp;&nbsp;&nbsp; Quantity:&nbsp;&nbsp;
            <button style={{ width: "40px", height: "40px", fontSize: "16px" }}>
              -
            </button>
            <input
              style={{
                width: "40px",
                height: "40px",
                paddingLeft: "8px",
                fontSize: "16px",
              }}
            />
            <button style={{ width: "40px", height: "40px", fontSize: "16px" }}>
              +
            </button>
          </h3>
          <br />
          <button className="atcbtn">Add to Cart</button>
        </div>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <h3 style={{ textAlign: "center" }}>OTHER SIMILAR PRODUCTS</h3>
        <div style={{ paddingBottom: "1.3vh" }}>
          <ul
            className="list-items"
            style={{ gridTemplateColumns: "repeat(5,auto)" }}
          >
            {ProdList2.map((item, index) => {
              var linkto = "/product?id=" + item.id;
              return (
                <li className="list-item" key={item.id}>
                  <div>
                    <img className="itemimg" src={item.image} alt="product" />
                  </div>
                  <div>
                    <table width="100%">
                      <tbody>
                        <tr>
                          <td colSpan="2">
                            <b>{item.name}</b>
                          </td>
                        </tr>
                        <tr>
                          <td>&#8377; {item.price}</td>
                          <td align="right">
                            <a href={linkto} className="buy">
                              <button className="buybutton">Buy</button>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </li>
              );
            })}
            <li style={{ paddingTop: "15vh", color: "red", fontSize: "30px" }}>
              <Link to="/home">View More..</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProductDetail;
