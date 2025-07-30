# plantpulse. – AI-Powered Plant Health Analysis App 🌿

**plantpulse.** is a mobile and web-based app that helps users monitor the health of their plants using AI-powered image analysis. By uploading a photo of a plant, users receive instant insights on health issues such as yellowing, browning, or fungal infections—along with tailored feedback powered by Gemini's image recognition API.

---

## 🌱 Project Goal

To empower gardeners, farmers, and plant enthusiasts with a fast, accessible tool for diagnosing plant health using real-time AI analysis and image processing.

---

## 💡 Features

- 📷 Upload or capture plant images for instant analysis  
- 🧠 Detect common issues like yellowing, browning, fungal spots, and wilting  
- 📊 Get AI-generated feedback and suggested care tips in real time  
- 🔄 Store analysis history in Firebase for long-term tracking  
- 🔒 User authentication and secure data storage  
- 🚀 Works on both desktop and mobile devices

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, JavaScript  
- **Backend/API**: Python (Flask), Gemini Image API  
- **Database**: Firebase Firestore  
- **Hosting**: Firebase Hosting  
- **AI/ML**: Gemini API (image classification)

---

## 🧠 How It Works

1. **Image Input** – Users upload a photo of a plant leaf or full plant.  
2. **AI Analysis** – Gemini API processes the image and classifies it into health condition categories.  
3. **Feedback Displayed** – The app returns a readable result with condition type and care advice.  
4. **Data Stored** – Feedback is stored in Firestore and tied to the user's account for tracking over time.

---

## 📦 Installation
Steps to install and run your project:

git clone https://github.com/bradwco/plant-pulse.git

cd plant-pulse

python -m venv venv

.\venv\Scripts\activate 

pip install -r requirements.txt

py app.py

❗(if there is no Scripts folder in the venv folder, activate may be in bin, if so run:
.\venv\bin\activate)❗

    
    
