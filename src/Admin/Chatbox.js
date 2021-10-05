import "./Chatbox.css";
import Service from "../components/Service";
import ReactDOM from 'react-dom';

Service.AdminChats().then((resp) =>{
    if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
        const values=resp.data.response;
        // eslint-disable-next-line
        const userlist=values.map((userlist)=>{
            AdminChats.push(userlist);             
            return userlist;
          });
    } else {
        alert("Error");
    }
});
var AdminChats=[];
var username='';
function Chatbox(){
    function showchats(name) {
        username=name;
        Service.getChat({username:name}).then((resp) =>{
            if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
                const values=resp.data.response;
                document.getElementById("user-chats").innerHTML='<br/>';
                // eslint-disable-next-line
                const msgs=values.map((msgs)=>{
                    if(msgs[0]!==''){
                        let userHtml = '<p class="userText"><span>'+msgs[0]+'</span></p>';
                        document.getElementById("user-chats").innerHTML+=(userHtml);
                    }
                    if(msgs[1]!==''){
                        let botHtml = '<p class="botText"><span>' + msgs[1] + '</span></p><br/>';
                        document.getElementById("user-chats").innerHTML+=(botHtml);
                    }
                    return msgs;
                  });
            }
        });
    }
    function typing(e) {
        if (e.which===13) {
            var input=document.getElementById("admin-input").value;
            let userHtml = '<p class="userText"><span>'+input+'</span></p>';
            document.getElementById("user-chats").innerHTML+=(userHtml);
            Service.sendChat({uname:username,a_msg:input,c_msg:''}).then((resp) =>{
                if (resp.data.response !== 0 && resp.data.response !== undefined && resp.data.response !== null) {
                }
            });
            document.getElementById("admin-input").value="";
            return "";
        }
    }
    var x=setInterval(function(){
        if(AdminChats.length>0){
          const List = () => {
            return(
              <>
               
                {AdminChats.map((name,index) => {
                    return (
                    <tr onClick={()=>showchats(name)}>
                        <td>{index+1}</td>
                        <td>{name}</td>
                    </tr>
                    );
                })}
                </>
            );
        }
        clearInterval(x);
        ReactDOM.render(<List/>, document.getElementById("chat-table"));
      }
    },500);
      
    return(
        <div className="admin-chatbox">
            <div className="chattable">
                <p>Chats</p>
                <br />
            <table id="chat-table" align="center">
                <div className="spinner"></div>
            </table>
            </div>
            <hr class="cbvline" />
            <div id="admin-chat-window">
                <div id="user-chats"></div>
                <input id="admin-input" className="input-box" placeholder="Enter message" onKeyPress={(e) => typing(e)}/>
            </div>
        </div>
    );
}
export default Chatbox;