# RAD AI - Legal Document Analysis Platform

A powerful AI-powered legal document analysis tool that helps users understand, analyze, and improve legal documents.

## Features

- 📄 **Document Upload**: Support for PDF and text files
- 🔍 **AI Analysis**: Comprehensive document analysis with issue detection
- 🗣️ **Multi-language Support**: Text-to-speech and translation in multiple languages
- 🎯 **Smart Highlighting**: Issues and unfair clauses highlighted in red
- 💬 **Interactive Chat**: Ask questions about your documents
- ✨ **Document Redrafting**: AI-powered document improvements

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd RAD
   ```

2. **Get your Gemini API Key**
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the key

3. **Configure API Key (Local Development)**
   - Open `config.js`
   - Replace the API key in the `envVars` object (line 31)
   - **⚠️ Never commit this change to GitHub!**

4. **Run locally**
   - Open `index.html` in your browser
   - Or use a local server: `python -m http.server 8000`

## Deployment Options

### Option 1: Firebase Hosting (Recommended for Students)

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Set public directory to `.` (current directory)
   - Choose "No" for SPA configuration
   - Choose "No" for GitHub Actions

4. **Set up environment variables**
   ```bash
   firebase functions:config:set gemini.api_key="YOUR_API_KEY_HERE"
   ```

5. **Update config.js for production**
   - Replace `config.js` with `config.production.js`
   - Or rename files appropriately

6. **Deploy**
   ```bash
   firebase deploy
   ```

### Option 2: Netlify

1. **Connect your GitHub repo to Netlify**
2. **Set environment variables in Netlify dashboard**
   - Go to Site Settings → Environment variables
   - Add `GEMINI_API_KEY` with your API key
3. **Deploy automatically via GitHub integration**

### Option 3: Vercel

1. **Connect your GitHub repo to Vercel**
2. **Set environment variables in Vercel dashboard**
   - Go to Project Settings → Environment Variables
   - Add `GEMINI_API_KEY` with your API key
3. **Deploy automatically via GitHub integration**

## Security Best Practices

### ⚠️ **IMPORTANT: API Key Security**

1. **Never commit API keys to GitHub**
   - The `.gitignore` file excludes `.env` and `config.js`
   - Always use environment variables for production

2. **For deployment:**
   - Use `config.production.js` instead of `config.js`
   - Set `GEMINI_API_KEY` as an environment variable in your hosting platform

3. **Restrict your API key:**
   - Go to Google Cloud Console
   - Restrict your API key to specific domains
   - Limit to Generative Language API only

## File Structure

```
RAD/
├── index.html              # Main application
├── config.js              # Local development config (not deployed)
├── config.production.js    # Production-safe config
├── .env                   # Environment variables (local only)
├── .gitignore            # Excludes sensitive files
├── README.md             # This file
└── LOGO.svg              # Application logo
```

## Environment Variables

- `GEMINI_API_KEY`: Your Google Gemini API key (required)

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **AI**: Google Gemini API
- **PDF Processing**: PDF.js
- **Speech**: Web Speech API
- **Styling**: CSS Grid, Flexbox, CSS Variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure API keys are not committed
5. Create a pull request

## License

This project is for educational purposes. Please ensure compliance with Google's API terms of service.

## Support

For issues or questions, please create an issue in the GitHub repository.

---

**Note**: This application requires a valid Google Gemini API key to function. The free tier should be sufficient for student/educational use.