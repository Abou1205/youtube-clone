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


Certainly! If you are using the YouTube API through RapidAPI, you can modify the README to reflect that. Here's the updated version:

```markdown
# YouTube Clone

A simple YouTube clone built with React, featuring a header component with a search bar, icons for notifications and video recording, and integrations with various libraries, including the YouTube API accessed through RapidAPI.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Libraries](#libraries)
- [YouTube API (RapidAPI)](#youtube-api-rapidapi)
- [Installation](#installation)
- [Usage](#usage)
- [Gif](#gif)
## About

This project is a basic YouTube clone created with React. It includes a header component with a search bar and icons for notifications and video recording. The project utilizes various libraries and integrates with the YouTube API through RapidAPI to fetch and display video content.

## Features

- Header component with YouTube logo, search bar, and icons for notifications and video recording.
- Search functionality to navigate to the search results page.

## Libraries

The project uses the following libraries:

- [axios](https://axios-http.com/): Promise-based HTTP client for making requests to the YouTube API through RapidAPI.
- [millify](https://www.npmjs.com/package/millify): Utility for formatting large numbers into human-readable strings.
- [moment](https://momentjs.com/): Library for parsing, validating, manipulating, and displaying dates and times.
- [react-router-dom](https://reactrouter.com/): Declarative routing for React applications.
- [react-player](https://www.npmjs.com/package/react-player): A React component for playing a variety of URLs, including YouTube videos.
- [tailwindcss](https://tailwindcss.com/): A utility-first CSS framework for quickly building custom designs.
- [react-icons](https://react-icons.github.io/react-icons/): A collection of popular icons as React components.

## YouTube API (RapidAPI)

The project utilizes the YouTube API through RapidAPI to fetch video content and search results. To use the YouTube API, you will need to obtain a RapidAPI key. Follow these steps:

1. Sign up for a RapidAPI account.
2. Subscribe to the [YouTube Data API v3](https://rapidapi.com/youtube.videos/api/youtube-data1).
3. Obtain your RapidAPI key from the Dashboard.


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

![](video.gif)