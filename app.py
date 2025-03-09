from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
from PIL import Image
import io
import os
import re  # used for score extraction

app = Flask(__name__)

# GEMINI CONFIG
#temporarily hardcoded for testing purposes
GEMINI_API_KEY = "";
genai.configure(api_key=GEMINI_API_KEY)

def analyze_image(image_bytes):
    """Sends image to Gemini API and gets AI feedback."""
    model = genai.GenerativeModel("gemini-1.5-flash")  # ✅ Use the new model

    try:
        # Convert image to a format Gemini can understand
        image = Image.open(io.BytesIO(image_bytes)).convert("RGB")

        # AI Prompt
        prompt = """
        Analyze this plant's health:
        - Give a health score from 1 to 10 (10 is healthiest).
        - Explain why you gave this score.
        - Suggest specific actions the farmer should take to improve the plant’s health.
        - Ensure the total length of response is no more than 100 words.
        """

        # Send request to Gemini
        response = model.generate_content([prompt, image], stream=False)

        # Handle missing or empty responses
        if not response or not response.text:
            return 5, "No response from AI."

        ai_text = response.text

        # Extract health score
        match = re.search(r'\b(10|\d)\b', ai_text)
        health_score = int(match.group()) if match else 5  # Default to 5 if missing

        return health_score, ai_text

    except Exception as e:
        return 5, f"Error processing image: {str(e)}"



@app.route("/analyze", methods=["POST"])
def analyze():
    """Receives an image and returns AI health score + feedback."""
    if "image" not in request.files:
        return jsonify({"error": "No image provided"}), 400

    image_file = request.files["image"]
    image_bytes = image_file.read()

    # Get AI feedback
    health_score, ai_feedback = analyze_image(image_bytes)

    return jsonify({"healthScore": health_score, "aiFeedback": ai_feedback})

# ✅ Pages for Frontend Routes
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
