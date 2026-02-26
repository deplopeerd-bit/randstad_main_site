import RoutesMapping from "./components/RoutesMapping";
import { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

/* -------------------- */
/*  TITLE CONTROLLER    */
/* -------------------- */

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    // Home page
    if (path === "/") {
      document.title = "Home | Randstad";
      return;
    }

    // Remove first slash
    let cleaned = path.substring(1);

    // Remove main section names if you don't want them in title
    const sectionsToRemove = [
      "findajob",
      "fortalent",
      "foremployer",
      "resources",
      "aboutus",
    ];

    sectionsToRemove.forEach((section) => {
      if (cleaned.startsWith(section)) {
        cleaned = cleaned.replace(section, "");
      }
    });

    // Clean extra slashes
    cleaned = cleaned.replace(/^\/+/, "");

    // Convert URL into readable title
    cleaned = cleaned
      .replace(/-/g, " ")
      .replace(/&/g, "and")
      .replace(/\//g, " ")
      .replace(/,/g, "");

    // Capitalize every word
    const formatted = cleaned
      .split(" ")
      .filter(Boolean)
      .map((word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");

    document.title = formatted
      ? `${formatted} | Randstad`
      : "Randstad";

  }, [location]);

  return <RoutesMapping />;
}

/* -------------------- */
/*  MAIN EXPORT         */
/* -------------------- */

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}