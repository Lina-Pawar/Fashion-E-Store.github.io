import "./FilterItems.css";
function FilterItems(){
    return(
        <div className="filteritems">
        <h2 style={{textAlign:"center",textDecoration:"none",paddingLeft:"0"}}>Filter <i className="fas fa-filter"></i></h2>
        <h2>Price Range</h2>
        <hr />
        <br />
        <h3><input type="checkbox" name="price1" />&nbsp;&nbsp;<label>&#8377; 0 to &#8377; 200</label></h3>
        <h3><input type="checkbox" name="price2" />&nbsp;&nbsp;<label>&#8377; 200 to &#8377; 500</label></h3>
        <h3><input type="checkbox" name="price3" />&nbsp;&nbsp;<label>&#8377; 500 to &#8377; 1000</label></h3>
        <h3><input type="checkbox" name="price4" />&nbsp;&nbsp;<label>&#8377; 1000 to &#8377; 2000</label></h3>
        <h3><input type="checkbox" name="price5" />&nbsp;&nbsp;<label>&#8377; 2000 and above</label></h3>
        <br/>
        <h2>Colors Available</h2>
        <hr/>
        <br />
        <table align="center" style={{width:"95%",textAlign:"left"}}>
              <tr>
                <td><h3><input type="checkbox" name="black" />&nbsp;&nbsp;<label>Black</label></h3></td>
                <td><h3><input type="checkbox" name="white" />&nbsp;&nbsp;<label>White</label></h3></td>
              </tr>
              <tr>
                <td><h3><input type="checkbox" name="red" />&nbsp;&nbsp;<label>Red</label></h3></td>
                <td><h3><input type="checkbox" name="blue" />&nbsp;&nbsp;<label>Blue</label></h3></td>
              </tr>
              <tr>
              <td><h3><input type="checkbox" name="green" />&nbsp;&nbsp;<label>Green</label></h3></td>
              <td><h3><input type="checkbox" name="yellow" />&nbsp;&nbsp;<label>Yellow</label></h3></td>    
              </tr>
              <tr>
              <td><h3><input type="checkbox" name="pink" />&nbsp;&nbsp;<label>Pink</label></h3></td>
              <td><h3><input type="checkbox" name="purple" />&nbsp;&nbsp;<label>Purple</label></h3></td>
              </tr>
              <tr>
                  <td colSpan="2"><h3><input type="checkbox" name="showall" />&nbsp;&nbsp;<label>Show All..</label></h3></td>
              </tr>
          </table>
        <br />
        <h2>Categories</h2>
        <hr />
        <br />
        </div>
    )
}
export default FilterItems;