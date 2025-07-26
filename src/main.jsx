import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import WorkspacePage from "./components/WorkspacePage.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Analytics />
                <Route path="/" element={<App />} />
                <Route path="/workspace" element={<WorkspacePage />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
