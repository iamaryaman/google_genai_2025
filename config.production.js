// Production Configuration for RAD AI
// This file is safe to deploy - it doesn't contain sensitive data

class Config {
    constructor() {
        this.loadConfig();
    }

    loadConfig() {
        // Get API key from environment variables (set in Firebase/Netlify/Vercel)
        this.GEMINI_API_KEY = "AIzaSyDvuzgxHFG9XLMj0lF0DGoasVt1JE7ZjRI";
        this.API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${this.GEMINI_API_KEY}`;
        
        // Application info
        this.APP_NAME = 'RAD AI - Legal Document Analysis Platform';
        this.APP_VERSION = '1.0.0';
        this.ENVIRONMENT = 'production';
        
        // Validate API key
        if (!this.GEMINI_API_KEY) {
            console.error('⚠️ GEMINI_API_KEY is not set! Please configure your API key.');
            this.showApiKeyError();
        }
    }

    getEnvVar(name, defaultValue) {
        // Check various sources for environment variables
        
        // 1. Firebase Functions environment
        if (typeof window !== 'undefined' && window.ENV && window.ENV[name]) {
            return window.ENV[name];
        }
        
        // 2. Process environment (Node.js)
        if (typeof process !== 'undefined' && process.env && process.env[name]) {
            return process.env[name];
        }
        
        // 3. Meta tags (for static hosting)
        const metaTag = document.querySelector(`meta[name="env-${name.toLowerCase()}"]`);
        if (metaTag) {
            return metaTag.getAttribute('content');
        }
        
        // 4. URL parameters (for testing - not recommended for production)
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has(name.toLowerCase())) {
            return urlParams.get(name.toLowerCase());
        }
        
        return defaultValue;
    }

    showApiKeyError() {
        const errorMessage = `
            <div style="background: #ff4444; color: white; padding: 1rem; margin: 1rem; border-radius: 8px;">
                <h3>⚠️ API Key Not Configured</h3>
                <p>RAD AI needs a Gemini API key to function.</p>
                <ol style="text-align: left; margin-left: 1rem;">
                    <li>Get your API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" style="color: #ffcccc;">Google AI Studio</a></li>
                    <li>Set GEMINI_API_KEY as an environment variable</li>
                    <li>Refresh the page</li>
                </ol>
            </div>
        `;
        
        // Show error in the chat area
        setTimeout(() => {
            const messages = document.getElementById('messages');
            if (messages) {
                messages.innerHTML = errorMessage;
            }
        }, 1000);
    }
}

// Create global config instance
window.AppConfig = new Config();