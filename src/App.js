import React from "react";
import "./App.css";
import "./bootstrap.min.css";

// Components
import Picture from "./components/Picture";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="card">
      <Picture />
      <Content />
      <Footer />
    </div>
  );
}
