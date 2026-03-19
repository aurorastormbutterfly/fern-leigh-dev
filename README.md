# Fern Leigh Dev Portfolio

This is the repository for my personal portfolio website, built with Next.js, React, and TypeScript. The site showcases my projects, experience, and my approach to software development.

## Overview

This portfolio is a reflection of my skills and values as a software engineer. This site is not static; it is actively maintained to reflect my latest work and engineering practices. The primary goal is to provide a clear and engaging overview of my work, with a focus on quality, accessibility, and user experience.

The live site can be found at [https://www.fern-leigh.dev](https://www.fern-leigh.dev).

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v20 or later)
- yarn

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/your_repository.git
    ```
2.  Install YARN packages
    ```sh
    yarn install
    ```
3.  Set up your environment variables. You will need to create a `.env.local` file in the root of the project and add your Firebase credentials. You can get these from your Firebase project settings.
    ```
    GOOGLE_APPLICATION_CREDENTIALS=<path to your service account json>
    ```
4.  Run the development server
    ```sh
    yarn dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pages and Features

### About Page

The about page gives a glimpse into my professional ethos and personal interests. It features:

-   **Flip Cards:** Interactive cards built with React that flip on click or keypress. This component is designed with accessibility in mind, supporting keyboard navigation and respecting `prefers-reduced-motion`. The state of the card (flipped or not) is managed using React's `useState` hook.
-   **Fern Animations:** The fern illustrations that frame the cards are not just decorative but are part of the component, creating a cohesive and branded feel.

### Portfolio Page

This page showcases my projects.

-   **Dynamic Project Loading:** The project data is fetched from a Firestore database. This is done on the server-side using `getStaticProps` in Next.js, which means the data is fetched at build time. This approach allows for fast page loads and SEO benefits, while still allowing for dynamic content updates without a full redeploy.

## Accessibility

Accessibility is a core principle of this project. I've taken the following steps to ensure the site is usable by as many people as possible:

-   **Semantic HTML:** Using HTML5 elements like `<main>`, `<header>`, and `<nav>` to give structure to the page.
-   **Keyboard Navigation:** All interactive elements, including the flip cards and navigation, are fully accessible via keyboard.
-   **Reduced Motion:** Animations are disabled for users who have `prefers-reduced-motion` enabled in their system settings. This is handled in the `FlipCard` component with a `useEffect` hook that listens for changes in the media query.
-   **ARIA Attributes:** Using `aria-live`, `aria-hidden`, and `role` attributes to provide additional context to screen readers.
-   **Alt Text:** All images have descriptive alt text.

## CI/CD Pipeline

The project uses GitHub Actions for continuous integration and continuous deployment. The pipeline is defined in `.github/workflows/CI.yml` and includes the following steps:

1.  **Trigger:** The workflow is triggered on push or pull request to the `staging` and `main` branches.
2.  **Testing:** It runs both unit tests (Jest) and end-to-end tests (Playwright). The build is blocked if any of these tests fail.
3.  **Firebase Credentials:** It uses a secret to set up Firebase credentials for the tests that interact with Firestore.
4.  **Promotion to Production:** On a successful push to `staging`, the changes are deployed to a staging environment for review. Once they have been verified, they can be manually promoted to the `main` branch for production deployment.

I have two environments set up in Firebase: `staging` and `production`. This allows for a safe workflow where changes can be tested in a production-like environment before being released to users.

## Testing Strategy

A comprehensive testing strategy is in place to ensure code quality and prevent regressions.

-   **Unit Tests:** Written with Jest and React Testing Library. These tests cover individual components and functions, ensuring they behave as expected in isolation. The focus is on testing the component's public API and behavior from a user's perspective.
-   **End-to-End Tests:** Written with Playwright. These tests simulate user journeys across the application, from the home page to the portfolio and about pages. They verify that the application works as a whole and that the integration between the frontend and the backend (Firebase) is functioning correctly.
-   **Test Cases:** I've determined what to test based on the application's critical paths and user flows. For example, the E2E tests cover navigating between pages and interacting with the flip cards and project links. Unit tests focus on the logic within each component, such as the state changes in the `FlipCard`.

## Environment Variables

The site is currently undergoing a redesign. To control the visibility of the new design, I'm using an environment variable `SHOW_PLACEHOLDER`. When set to `true`, a placeholder page is shown instead of the main application. This is handled in the `RootLayout` component. This allows me to deploy the new infrastructure and codebase while still showing the old site to users.
