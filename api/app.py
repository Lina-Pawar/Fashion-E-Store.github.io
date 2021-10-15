from Connector import Connection
from flask import Flask, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route("/LoginUser", methods=["GET", "POST"])
def login():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.verifyUser(userData)
    return {"response": response}

@app.route("/RegisterUser", methods=["GET", "POST"])
def register():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.createUser(userData)
    return {"response": response}

@app.route("/ResetPassword", methods=["GET", "POST"])
def resetpassword():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.resetPassword(userData)
    return {"response": response}

@app.route("/UpdateProfile", methods=["GET", "POST"])
def update():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.update(userData)
    return {"response": response}

@app.route("/UserInfo", methods=["GET", "POST"])
def userinfo():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.getUserInfo(userData)
    return {"response": response}

@app.route("/Trending", methods=["GET", "POST"])
def trending():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.Trending(userData)
    return {"response": response}
    
@app.route("/Products", methods=["GET", "POST"])
def products():
    conn = Connection()
    if request.method == "POST":
        response = conn.Products()
    return {"response": response}
    
@app.route("/Customers", methods=["GET", "POST"])
def customers():
    conn = Connection()
    if request.method == "POST":
        response = conn.Customers()
    return {"response": response}

@app.route("/OrderDetails", methods=["GET", "POST"])
def orderdetails():
    conn = Connection()
    if request.method == "POST":
        response = conn.OrderDetails()
    return {"response": response}

@app.route("/GetCart", methods=["GET", "POST"])
def getCart():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.getcart(userData)
    return {"response": response}

@app.route("/GetMyOrders", methods=["GET", "POST"])
def getMyOrders():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.getmyorders(userData)
    return {"response": response}

@app.route("/CheckOrder", methods=["GET", "POST"])
def CheckOrder():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.checkOrder(userData)
    return {"response": response}

@app.route("/AddCart", methods=["GET", "POST"])
def AddCart():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.addCart(userData)
    return {"response": response}

@app.route("/DeleteCart", methods=["GET", "POST"])
def DeleteCart():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.deletecart(userData)
    return {"response": response}

@app.route("/Order", methods=["GET", "POST"])
def order():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.order(userData)
    return {"response": response}

@app.route("/Quantity", methods=["GET", "POST"])
def updateqty():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.updateQty(userData)
    return {"response": response}

@app.route("/AddProduct", methods=["GET", "POST"])
def addproduct():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.addProduct(userData)
    return {"response": response}

@app.route("/EditProduct", methods=["GET", "POST"])
def updateProd():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.updateProd(userData)
    return {"response": response}

@app.route("/DeleteProduct", methods=["GET", "POST"])
def deleteProd():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.deleteProd(userData)
    return {"response": response}

@app.route("/TopProducts", methods=["GET", "POST"])
def topProducts():
    conn = Connection()
    if request.method == "POST":
        response = conn.topProducts()
    return {"response": response}

@app.route("/Pie", methods=["GET", "POST"])
def pie():
    conn = Connection()
    if request.method == "POST":
        response = conn.Pie()
    return {"response": response}

@app.route("/LineGraph", methods=["GET", "POST"])
def linegraph():
    conn = Connection()
    if request.method == "POST":
        response = conn.lineGraph()
    return {"response": response}

@app.route("/Deliver", methods=["GET", "POST"])
def deliver():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.Deliver(userData)
    return {"response": response}

@app.route("/SendChat", methods=["GET", "POST"])
def sendchat():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.sendChat(userData)
    return {"response": response}

@app.route("/GetChat", methods=["GET", "POST"])
def getchat():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.getChat(userData)
    return {"response": response}

@app.route("/AdminChats", methods=["GET", "POST"])
def adminchats():
    conn = Connection()
    if request.method == "POST":
        userData = request.json
        response = conn.AdminChats(userData)
    return {"response": response}

if __name__ == "__main__":
    app.run(host='0.0.0.0', threaded=True)
