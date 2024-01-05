# Youtube Clone

A simple YouTube clone built with React, featuring a header component with a search bar, icons for notifications and videos, and integrations with various libraries, including the YouTube API accessed through RapidAPI.


## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies and Libraries](#technologiesandlibraries)
- [YouTube API (RapidAPI)](#youtube-api-rapidapi)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About

The YouTube Clone project is a React-based application that mimics key features of the YouTube platform. It offers a simplified yet comprehensive example for React developers to understand real-world application development.

## Features

- **Header Component:**
  - Centralized UI with YouTube logo, search bar, and icons for notifications and video recording.

- **Search Functionality:**
  - Utilizes YouTube API (RapidAPI) for precise and up-to-date search results.

- **Video Playback:**
  - Seamless in-app video playback using `react-player`.

- **Related Videos:**
  - Utilizes Youtube API (RapidAPI) for showing related videos.

- **Comments:**
  - Utilizes Youtube API (RapidAPI) for videos' comments.

## Technologies and Libraries

- **React:** Core library for building interactive user interfaces.
- **YouTube API (RapidAPI):** Integration for fetching video content and search results.
- **axios:** Handles HTTP requests for data fetching.
- **millify:** Formats large numbers into readable strings.
- **moment:** Manages and formats date and time.
- **react-router-dom:** Enables declarative routing within the app.
- **tailwindcss:** Simplifies styling with a utility-first approach.
- **react-icons:** Provides popular icons as React components.

## YouTube API (RapidAPI)

The project utilizes the YouTube API through RapidAPI to fetch video content and search results. To use the YouTube API, you will need to obtain a RapidAPI key. Follow these steps:

1. Sign up for a RapidAPI account.
2. Subscribe to the [YT-API](https://rapidapi.com/ytjar/api/yt-api).
3. Obtain your RapidAPI key from the Dashboard.
4. Update the getData.js file in your project with API key

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Abou1205/YoutubeClone.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open your browser and go to `http://localhost:3000` to see the YouTube clone in action.

3. Use the search bar in the header to search for videos and press Enter to view the search results.

## Gif

![](/video.gif)
