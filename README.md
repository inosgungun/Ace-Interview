# 🧠 AceInterview – Your AI-Powered Mock Interview Platform

AceInterview is an AI-powered mock interview platform built to help job seekers practice and improve their technical and behavioral interview skills. Whether you're preparing for entry-level or senior roles, AceInterview generates personalized mock interviews tailored to your desired role, level, and tech stack.



## 🚀 Features

- 🎙️ **AI Voice Interviewer** – Get real-time, voice-based interviews powered by Vapi and LLMs.
- 🧠 **Customizable Interviews** – Choose your **role**, **experience level**, and **tech stack** to get relevant questions.
- 📊 **Instant Feedback** – Receive constructive feedback after each question to help you improve.
- 📁 **Interview History** – Review your past mock interviews and track your progress.
- 🔐 **Authentication with Firebase** – Secure sign-up and login to manage user sessions.

## 🛠️ Tech Stack

- **Frontend:** Next.js, Tailwind CSS  
- **AI & Voice:** Vapi (Voice Agent API), OpenAI (via LangChain)  
- **Backend & Data:** Firebase Authentication, Firestore, and Firebase Storage  
- **Design:** Responsive and modern UI using Tailwind components



## 🧪 Getting Started

Follow these steps to set up **AceInterview** on your local machine:

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- A [Firebase](https://firebase.google.com/) project
- A [Vapi](https://vapi.ai/) account and assistant


### 📥 Installation Steps

#### 1. Clone the Repository
```bash
git clone https://github.com/your-username/aceinterview.git
cd aceinterview
npm install
```

#### 2. Set Up Firebase Project

1.  Go to Firebase Console and create a new project.
2.  Enable the following services:
    -   **Authentication**: Go to Build > Authentication > Sign-in method, enable Email/Password.
    -   **Firestore**: Go to Build > Firestore Database, click Create Database in test mode.
    -   **Storage**: Go to Build > Storage, click Get Started to enable file uploads (e.g., user assets or resume uploads).


#### 3. Get Firebase Config Values

1.  Go to Project Settings > General > Your apps (Web App).
2.  Click </> to register a new Web App.
3.  Firebase will provide config values and store them in .env.

### 4. Setting Up Gemini API (Google Generative AI)

AceInterview supports using the **Gemini API** by Google for generating smarter, context-aware interview questions and answers. So go to Google Cloud Console and generate an API key.

#### 5. Set Up Vapi Assistant

1.  Go to [Vapi Dashboard](https://www.vapi.ai/) and log in.
2.  Create a new Assistant and attach workflow :
    -   Give it a name.
    -   Configure the voice, personality, and system prompt as needed
3.  Save and note down the Assistant ID.
4.  Go to API Settings and generate an API Key.

#### 6. Start the Development Server
```bash
npm run dev
```


## Environment Variables Summary

Create a `.env` file at the root of your project:

```bash
# Firebase
FIREBASE_PROJECT_ID=""
FIREBASE_PRIVATE_KEY= ""
FIREBASE_CLIENT_EMAIL=""

NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=""
NEXT_PUBLIC_FIREBASE_APP_ID=""
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=""

# Gemini Api
GOOGLE_GENERATIVE_AI_API_KEY=""

# Vapi (Assistant Id and Public Key)
NEXT_PUBLIC_VAPI_WORKFLOW_ID=""
NEXT_PUBLIC_VAPI_WEB_TOKEN=""
```

## 📌 Future Enhancements
-   👥 Add peer-to-peer interviews with real users
-   📈 Analytics dashboard for interview performance
-   🔁 Real-time transcript and replay
-   🎯 Role-specific scoring rubric

## 🌐 Live Demo

> https://ace-interview-one.vercel.app/


## ✨ Author

Made with ❤️ by [Gungun Soni](https://github.com/inosgungun)
