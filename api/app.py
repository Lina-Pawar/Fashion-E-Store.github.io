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

@app.route("/Products", methods=["GET", "POST"])
def products():
    conn = Connection()
    if request.method == "POST":
        response = conn.Products()
    return {"response": response}
if __name__ == "__main__":
    app.run(host='0.0.0.0', threaded=True)

@app.route("/Customers", methods=["GET", "POST"])
def customers():
    conn = Connection()
    if request.method == "POST":
        response = conn.Customers()
    return {"response": response}
if __name__ == "__main__":
    app.run(host='0.0.0.0', threaded=True)
