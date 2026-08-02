import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventPage from "./pages/EventPage";
import ConsultationPage from "./pages/ConsultationPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EventPage />} />
        <Route path="/book" element={<ConsultationPage />} />
      </Routes>
    </BrowserRouter>
  );
}