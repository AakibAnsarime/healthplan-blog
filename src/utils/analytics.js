import ReactGA from "react-ga4";

// Initialize Google Analytics
export const initializeAnalytics = () => {
  ReactGA.initialize("G-WDLXYQZ4C3"); // Replace with your Measurement ID
};

// Track a page view
export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};