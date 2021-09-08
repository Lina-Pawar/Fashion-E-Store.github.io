import "./Chatbox.css";

function Chatbox(){
    function show() {
        var coll = document.getElementsByClassName("collapsible");
        for (let i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
    }
    function getTime() {
        let today = new Date();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        let time = hours + ":" + minutes;
        return time;
    }
    var x=setInterval(() => {
        if(document.getElementById("botStarterMessage")!==null){
            let firstMessage = "How's it going?"
            document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
            let time = getTime();
            document.getElementById("chat-timestamp").innerHTML+=(time);
            document.getElementById("userInput").scrollIntoView(false);
            clearInterval(x);
        }
      }, 1);
    function getHardResponse(userText) {
        let botResponse = getBotResponse(userText);
        let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
        document.getElementById("chatbox").innerHTML+=(botHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
    }
    function getResponse() {
        let userText = document.getElementById("textInput").value;
        if (userText==="") {
            userText = "I Love StyleZone";
        }
        let userHtml = '<p class="userText"><span>' + userText + '</span></p>';
        document.getElementById("textInput").value="";
        document.getElementById("chatbox").innerHTML+=(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            getHardResponse(userText);
        }, 1000)
    }
    function getBotResponse(input) {
        if (input==="Hello") {
            return "Hello there!";
        } else if (input==="I Love StyleZone") {
            return "Thank you :)";
        } else if (input==="I have a complain") {
            return "You can mail us at Stylezone@gmail.com , and we guarantee of taking necessary steps in 48hrs.";
        } else {
            return "Try asking something else!";
        }
    }
    function buttonSendText(sampleText) {
        let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
        document.getElementById("textInput").value="";
        document.getElementById("chatbox").innerHTML+=(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);
        setTimeout(() => {
            getHardResponse(sampleText);
        }, 1000)
    }

    function sendButton() {
        getResponse();
    }

    function heartButton() {
        buttonSendText("Thank you!")
    }
    function typing(e) {
        if (e.which===13) {
            getResponse();
        }
    }
    return(
        <div class="chat-bar-collapsible">
            <button id="chat-button" type="button" class="collapsible" onClick={show}>Chat with us!
                <i id="chat-icon" style={{color: "#fff"}} class="fa fa-fw fa-comments-o"></i>
            </button>
    
            <div class="chatcontent">
                <div class="full-chat-block">
                    <div class="outer-container">
                        <div class="chat-container">
                            <div id="chatbox">
                                <h5 id="chat-timestamp"></h5>
                                <p id="botStarterMessage" class="botText"><span>Loading...</span></p>
                            </div>
                            <div class="chat-bar-input-block">
                                <div id="userInput">
                                    <input id="textInput" class="input-box" type="text" name="msg" placeholder="Tap 'Enter' to send a message" onKeyPress={(e) => typing(e)}/>
                                    <p></p>
                                </div>
    
                                <div class="chat-bar-icons">
                                    <i id="chat-icon" style={{color: "crimson"}} class="fa fa-fw fa-heart"
                                        onClick={heartButton}></i>
                                    <i id="chat-icon" style={{color: "#333"}} class="fa fa-fw fa-send"
                                        onClick={sendButton}></i>
                                </div>
                            </div>
    
                            <div id="chat-bar-bottom">
                                <p></p>
                            </div>
    
                        </div>
                    </div>
    
                </div>
            </div>
    
        </div>
    );
}
export default Chatbox;