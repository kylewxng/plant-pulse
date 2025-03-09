from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def login_page():
    return render_template("login.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/signup")
def signup():
    return render_template("signup.html")

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/gallery")
def gallery():
    return render_template("gallery.html")

@app.route("/analytics")
def analytics():
    return render_template("analytics.html")

if __name__ == "__main__":
    print("🚀 Running Flask server! Open http://127.0.0.1:4000/")
    app.run(debug=True, host="0.0.0.0", port=4000)
