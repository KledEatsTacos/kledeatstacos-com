# Personal Portfolio Website

This is a personal portfolio website built with Nuxt 3 and PrimeVue, designed to showcase projects, skills, and recent activity from various platforms. It's an adaptation of the original portfolio by [erbilnas](https://github.com/erbilnas/portfolio), with modifications to suit my personal needs and preferences.

NOTE: I use lots of AI to help me, because it saves me lots of time (yippie vibe coding!)

## Live Demo

You can see a live version of this portfolio at: [https://kledeatstacos.com](https://kledeatstacos.com)

## Features

*   Dynamic display of personal information and summary.
*   Integration with Last.fm to show currently playing music.
*   Integration with Steam to display recent game activity.
*   Showcase of projects with descriptions.
*   Display of language proficiencies.
*   Responsive design for various screen sizes.
*   Theming capabilities (dark/light mode).
*   Education timeline.

## Tech Stack

*   **Framework:** [Nuxt 3](https://nuxt.com/)
*   **UI Library:** [PrimeVue](https://primevue.org/)
*   **State Management:** [Pinia](https://pinia.vuejs.org/)
*   **Styling:** SCSS
*   **Runtime:** [Bun](https://bun.sh/) (also compatible with Node.js/npm/yarn)
*   **API Integrations:** Last.fm, Steam, YouTube (for music video links)

## Prerequisites

*   [Node.js](https://nodejs.org/) (LTS version) and npm/yarn.
    *   Alternatively, [Bun](https://bun.sh/docs/installation)
*   API Keys for:
    *   Last.fm
    *   Steam
    *   YouTube Data API v3

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/KledEatsTacos/kledeatstacos-com.git
    cd kledeatstacos-com
    ```

2.  **Install dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using bun:
    ```bash
    bun install
    ```
    Or using yarn:
    ```bash
    yarn install
    ```

## Configuration

This project uses environment variables to manage API keys and other sensitive or deployment-specific information.

1.  **Create a `.env` file:**
    Copy the example configuration file `.env.example` to a new file named `.env` in the root of the project.
    ```bash
    cp .env.example .env
    ```

2.  **Update `.env` with your values:**
    Open the `.env` file and fill in the required API keys and personal information:

    *   `NUXT_APP_TITLE`: Your desired website title.
    *   `LINKEDIN_PROFILE`: Your LinkedIn profile URL.
    *   `GITHUB_PROFILE`: Your GitHub profile URL.
    *   `STEAM_PROFILE`: Your Steam profile URL.
    *   `YOUTUBE_PROFILE`: Your YouTube channel URL.
    *   `NUXT_APP_DARK_THEME`, `NUXT_APP_LIGHT_THEME`: URLs for PrimeVue themes (defaults are provided).
    *   `LASTFM_API_KEY`: Your Last.fm API key.
    *   `LASTFM_USERNAME`: Your Last.fm username.
    *   `YOUTUBE_API_KEY`: Your YouTube Data API v3 key.
    *   `STEAM_API_KEY`: Your Steam Web API key. **Note:** This key is often domain-restricted. For local development, it usually needs to be configured for `localhost`. For production, you'll need a key configured for your actual domain.
    *   `STEAM_ID`: Your 64-bit Steam ID.

    **Where to get API Keys:**
    *   **Last.fm:** [https://www.last.fm/api/account/create](https://www.last.fm/api/account/create)
    *   **Steam:** [https://steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey)
    *   **YouTube Data API v3:** [Google Cloud Console](https://console.cloud.google.com/apis/library/youtube.googleapis.com) (You'll need to create a project, enable the API, and get credentials).

## Running Locally

Once dependencies are installed and your `.env` file is configured:

Using Bun:
```bash
bun dev
```
Using npm:
```bash
npm run dev
```
Using yarn:
```bash
yarn dev
```
This will start the Nuxt development server, typically at `http://localhost:3000`.

## Building for Production

To build the application for production:

Using npm:
```bash
npm run build
```
Using Bun:
```bash
bun run build
```
Using yarn:
```bash
yarn build
```
This will create a `.output` directory with the production-ready build of your application.

## Deployment

You can deploy the generated `.output` directory to any static hosting provider or Node.js compatible platform.

*   **Vercel / Netlify:** These platforms are perfect. You can usually connect your Git repository, and they will handle the build and deployment process automatically. Remember to configure your environment variables (API keys and such) in the platform's settings.
*   **Node.js Server:** You can serve the application using the server in the `.output/server` directory.
    ```bash
    node .output/server/index.mjs
    ```
