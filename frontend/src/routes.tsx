// src/routes.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Top‐level pages
// import HomePage from "./pages/HomePage";
import TeamMembers from "./pages/TeamMembers";
import OurWorks from "./pages/OurWorks";
import LandingPage from "./pages/LandingPage";
import Outreach from "./pages/Outreach";
import ContactForm from "./pages/ContactForm";
import MPCPage from "./pages/MPCPage"

// // MPC subpages
// import MPCOverview from "./pages/MPC/MPCOverview";
// import MPCEvaluation from "./pages/MPC/MPCEvaluation";
// import MPCDecision from "./pages/MPC/MPCDecision";
// import MPCMeetingAnalysis from "./pages/MPC/MPCMeetingAnalysis";
// import MPCMember from "./pages/MPC/MPCMember";
// import MPCCorrelation from "./pages/MPC/MPCCorrelation";
// import MPCVotingPattern from "./pages/MPC/MPCVotingPattern";

// // Explorer subpages
// import ExplorerOverview from "./pages/Explorer/ExplorerOverview";
// import SentimentOvertime from "./pages/Explorer/SentimentOvertime";
// import DecentOvertime from "./pages/Explorer/DecentOvertime";
// import TopicTrends from "./pages/Explorer/TopicTrends";
// import Chatbot from "./pages/Explorer/Chatbot";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<LandingPage />} />

        {/* Team Members */}
        <Route path="/team" element={<TeamMembers />} />
        <Route path="/mpcpage" element={<MPCPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/OurWorks" element={<OurWorks />} />


        {/* MPC Section */}
        {/* <Route path="/mpc" element={<MPCOverview />}>
          <Route path="evaluation" element={<MPCEvaluation />} />
          <Route path="decision" element={<MPCDecision />} />
          <Route path="meeting-analysis" element={<MPCMeetingAnalysis />} />
          <Route path="member" element={<MPCMember />} />
          <Route path="correlation-graph" element={<MPCCorrelation />} />
          <Route path="voting-pattern" element={<MPCVotingPattern />} />
          <Route path="" element={<Navigate to="evaluation" replace />} />
        </Route> */}

        {/* Explorer Section */}
        {/* <Route path="/explorer" element={<ExplorerOverview />}>
          <Route path="sentiment-overtime" element={<SentimentOvertime />} />
          <Route path="decent-overtime" element={<DecentOvertime />} />
          <Route path="topic-trends" element={<TopicTrends />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="" element={<Navigate to="sentiment-overtime" replace />} />
        </Route> */}

        {/* Other single‐page routes */}
        <Route path="/ourworks" element={<OurWorks />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/contact" element={<ContactForm />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
