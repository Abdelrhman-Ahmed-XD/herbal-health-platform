# Nabta: Herbal Health Platform

Live site: [nabta-eg.vercel.app](https://nabta-eg.vercel.app)

## About

Nabta is a full stack web platform that connects users with natural, herbal based remedies through an AI powered recommendation system. Instead of manually searching through scattered information, users can describe their symptoms and receive tailored herb suggestions backed by a structured herbal database. The platform was built as freelance work for a direct client, with a focus on making herbal knowledge accessible, searchable, and easy to act on.

## Features

- **AI symptom to herb recommender**: users enter their symptoms in natural language, and the app uses Google's Generative AI (Gemini) to map those symptoms to relevant herbs and remedies
- **Herb and plant database**: a searchable catalog of herbs with details on their properties, uses, and benefits
- **Data visualization**: usage and health related insights are presented through interactive charts built with Recharts
- **User accounts and history**: authentication and data persistence handled through Firebase, allowing users to save searches and track past recommendations
- **Serverless backend**: server side logic (including AI requests and data processing) runs through Netlify functions, keeping the frontend lightweight and the API keys secure

## Tech Stack

**Frontend:** React 19, React Router, Tailwind CSS, Vite
**Backend / Infrastructure:** Firebase (Authentication, Firestore), Firebase Admin SDK, Netlify Functions
**AI:** Google Generative AI (Gemini API)
**Data Visualization:** Recharts

## Project Structure

```
herbal-health-platform/
├── Data/                # Herbal and symptom reference data
├── functions/            # Serverless function source
├── netlify/functions/    # Netlify deployment functions
├── public/               # Static assets
├── scripts/              # Build and maintenance scripts
├── src/                  # React application source
├── firebase.json
├── firestore.indexes.json
├── netlify.toml
├── vercel.json
└── package.json
```

## Getting Started

1. Clone the repository
   ```
   git clone https://github.com/Abdelrhman-Ahmed-XD/herbal-health-platform.git
   cd herbal-health-platform
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Set up environment variables for Firebase and the Google Generative AI API key (see your `.env` configuration)
4. Run the development server
   ```
   npm run dev
   ```
5. Build for production
   ```
   npm run build
   ```

## Notes

This project was developed as freelance client work, delivered as a production ready platform deployed on Vercel with Netlify functions handling backend logic.
