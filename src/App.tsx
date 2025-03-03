import React from "react";
import { Router, Route } from "wouter";
import ProposalPage from "./pages/ProposalPage";
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  return (
    <Router base="/ValentineProposal">
      <Route path="/" component={ProposalPage} />
      <Route path="/success" component={SuccessPage} />
    </Router>
  );
}