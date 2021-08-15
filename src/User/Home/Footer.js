import "./Footer.css";
import f11img from "../../imgs/footericons/secure.png";
import f12img from "../../imgs/footericons/trust.png";
import f13img from "../../imgs/footericons/help.png";
import f14img from "../../imgs/footericons/app.png";
import fb from "../../imgs/footericons/fb.png";
import twi from "../../imgs/footericons/twitter.png";
import yt from "../../imgs/footericons/yt.png";
import ins from "../../imgs/footericons/insta.jpg";
function Footer(){
    return(
        <div className="footer">
            <div className="footer1">
               <div className="f1item">
                   <img src={f11img} alt="f11img"/>
                   <p><b>100% SECURE PAYMENT</b></p>
                   <p style={{fontSize:"0.9rem",color:"grey"}}>Moving Your card details to a much more <br/>secured place.</p>
               </div>
               <div className="f1item">
                   <img src={f12img} alt="f12img"/>
                   <p><b>TRUSTPAY</b></p>
                   <p style={{fontSize:"0.9rem",color:"grey"}}>100% Payment Protection.<br/>Easy Return Policy</p>
               </div>
               <div className="f1item">
                   <img src={f13img} alt="f13img"/>
                   <p><b>HELP CENTER</b></p>
                   <p style={{fontSize:"0.9rem",color:"grey"}}>Got a question? Look No further. <br/>Browse on FAQs or submit your query here.</p>
               </div>
               <div className="f1item">
                   <img src={f14img} alt="f14img"/>
                   <p><b>SHOP ON THE GO</b></p>
                   <p style={{fontSize:"0.9rem",color:"grey"}}>Download the and get exciting app<br/> only offers at your fingertip.</p>
               </div>
            </div>
            <div className="footer2">
               <div className="f2item">
               <p style={{fontSize:"18px"}}><b>POLICY INFO</b></p>
               <br/>
                <p className="footlink">Privacy Policy</p><br/>
                <p className="footlink">Terms of Sale</p><br/>
                <p className="footlink">Terms of Use</p><br/>
                <p className="footlink">Report Abuse and Takedown Policy</p><br/>
               </div>
               <div className="f2item">
               <p style={{fontSize:"18px"}}><b>CONNECT</b></p>
               <br/>
                <p className="footlink"><img src={fb} alt="fb"/> Facebook</p><br/>
                <p className="footlink"><img src={twi} alt="twi"/> Twitter</p><br/>
                <p className="footlink"> <img src={yt} alt="yt"/> Youtube</p><br/>
                <p className="footlink"><img src={ins} alt="ins"/> Instagram</p><br/>
               </div>
               <div className="f2item">
               <p style={{fontSize:"18px"}}><b>SUBSCRIBE</b></p>
               <br/>
               <input placeholder="Your email address"/><button>Subscribe</button>
               <br/><br/>
               <div className="f2cont"><p>Need help?&nbsp; <i className="fas fa-phone-alt" style={{color:"black"}}></i>&nbsp; Call us 24/7 at <span style={{color:"black"}}>+91-92126 92126</span></p></div>
               </div>
            </div>
            <hr style={{width:"100%"}}/>
            <footer style={{textAlign:"center",padding:"12px",backgroundColor:"lightgrey"}}>
                <p><i className="far fa-copyright"></i> Copyright 2021, StyleZone Co In. All rights Reserved</p>
            </footer> 
        </div>
    )
}
export default Footer;