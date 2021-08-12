function MenList(){
    return(
        <table align="center" style={{width:"95%",marginLeft:"10%",textAlign:"left"}}>
            <tr>
              <td><h3><input type="checkbox" name="tshirt" />&nbsp;&nbsp;<label>T-Shirt</label></h3></td>
              <td><h3><input type="checkbox" name="shirt" />&nbsp;&nbsp;<label>Shirt</label></h3></td>
            </tr>
            <tr>
              <td><h3><input type="checkbox" name="blazers" />&nbsp;&nbsp;<label>Blazers</label></h3></td>
              <td><h3><input type="checkbox" name="jacket" />&nbsp;&nbsp;<label>Jackets</label></h3></td>
            </tr>
            <tr>
            <td><h3><input type="checkbox" name="casual" />&nbsp;&nbsp;<label>Casuals</label></h3></td>
            <td><h3><input type="checkbox" name="pant" />&nbsp;&nbsp;<label>Pants</label></h3></td>    
            </tr>
            <tr>
            <td><h3><input type="checkbox" name="kurta" />&nbsp;&nbsp;<label>Kurtas</label></h3></td>
            <td><h3><input type="checkbox" name="sherwani" />&nbsp;&nbsp;<label>Sherwanis</label></h3></td>
            </tr>
            <tr>
                <td colSpan="2"><h3><input type="checkbox" name="showall" />&nbsp;&nbsp;<label>Show All..</label></h3></td>
            </tr>
        </table> 
        
    )
}
export default MenList;