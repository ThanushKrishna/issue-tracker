# Project - Issue Tracker

Welcome to Project Issue Tracker! This repository contains all the code and resources related to my project.

## Overview

The Issue Tracker is a web application developed using Next.js Framework that allows teams to track and manage their project issues efficiently. Leveraging the power of Next.js, the application provides a seamless and interactive user experience while ensuring high performance.

## Key Features

- **User Authentication**: Secure user authentication system to ensure only authorized users can access and manage issues.
- **Issue Management**: Create, view, edit, and delete issues with detailed information including title, description, status, assignee, priority, and due date.
- **Search and Filters**: Easily search for specific issues and apply filters based on various criteria such as status, priority, assignee, etc.
- **Commenting**: Collaborate with team members by adding comments to issues, and facilitating communication and updates.
- **Notifications**: Receive real-time notifications for updates on assigned issues or discussions.
- **Reporting and Analytics**: Generate reports and track analytics to gain insights into issue trends, resolution times, and team performance.
<!-- - **Integration**: Seamless integration with other tools and platforms such as Slack, GitHub, or Jira for enhanced workflow automation. -->

## Technology Stack

- **Frontend**: Next.js Framework for server-side rendering and a responsive user interface.
- **Backend**: Since Next.js is a full-stack application development framework, server-side logic, API routes and MySQL DB Integration for storing and managing issue data is also implemented with Next.js
- **Deployment**: The application is deployed in Vercel and DB is deployed on the Google Cloud Platform (GCP) for scalability, reliability, and seamless integration with other GCP services.

## Next.js Full Stack Framework Features

**Frontend Features:**

- **Server-side Rendering (SSR):** Render React components on the server side for faster page load times and improved SEO.
- **Static Site Generation (SSG):** Pre-render pages at build time for faster loading and better performance.
- **Client-side Routing:** Built-in routing system for client-side navigation without page reloads.
- **Automatic Code Splitting:** Split code into smaller bundles for improved performance.
- **CSS and Image Support:** Import CSS files and optimize images with built-in support.
- **API Routes:** Create API endpoints within the application for server-side logic.

**Backend Features:**

- **API Routes:** Easily create API endpoints in the `pages/api` directory for server-side logic.
- **Server-side Logic:** Run server-side logic within API routes or during server-side rendering.
- **Middleware Support:** Add custom logic or modify incoming requests with middleware functions.
- **Authentication:** Integrate authentication libraries or services for user authentication.
- **Database Integration:** Interact with databases such as MongoDB, PostgreSQL, or MySQL using libraries like `mongoose`, `pg`, or `mysql`.

## Installation

1. Clone this repository: `git clone https://github.com/ThanushKrishna/issue-tracker.git`
2. Navigate to the project directory: `cd issue-tracker`
3. Install dependencies: `npm install`

## Usage

Instructions on how to use your project or any specific commands that users need to run.

To start the project in development: **npm run dev**
<br/>
To start the project in Production: **npm run build**


## Contributing

I welcome contributions from the community! If you'd like to contribute, please follow these steps:
1. Fork this repository
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -am 'Add new feature'`
4. Push to your forked repository: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the [MIT License](LICENSE).
