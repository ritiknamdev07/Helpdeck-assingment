import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import MyTicket from "./components/MyTicket";
import NewTicketPage from "./pages/NewTicketPage";

import Database from "./components/Database";
import UserLogHistory from "./components/UserLogHistory";
import Settings from "./components/Settings";
import Performance from "./components/Performance";
import UserProfile from "./components/UserProfile";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPage from "./pages/ForgotPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/new-ticket" element={<NewTicketPage />} />
          <Route path="/my-ticket" element={<MyTicket />} />
          <Route path="/database" element={<Database />} />
          <Route path="/user-logs" element={<UserLogHistory />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forgot-page" element={<ForgotPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
