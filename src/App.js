import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlanLayout from "./pages/Layouts/PlanLayout";
import AppLayout from "./pages/Layouts/AppLayout";
import Welcome from "./pages/Welcome";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PlanLayout>
              <Welcome />
            </PlanLayout>
          }
        />

        <Route
          path="/invite"
          element={
            <PlanLayout>
              <PhoneConfirmation />
            </PlanLayout>
          }
        />
        <Route
          path="/code_confirm"
          element={
            <PlanLayout>
              <CodeConfirm />
            </PlanLayout>
          }
        />
        <Route
          path="/allow_notification"
          element={
            <PlanLayout>
              <AllowNotification />
            </PlanLayout>
          }
        />

        <Route
          path="/home"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
