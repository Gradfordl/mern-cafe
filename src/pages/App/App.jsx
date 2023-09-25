import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NewOrderPage from "../NewOrderPage/NewOrderPage.jsx";
import AuthPage from "../AuthPage/AuthPage.jsx";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage.jsx";
import { getUser } from "../../utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          {/* Because App defines all routes we import & use Route Component */}
          <Routes>
            //define the route to the desired Component
            <Route
              path="/orders/new"
              element={<NewOrderPage user={user} setUser={setUser} />}
            />
            <Route
              path="/orders"
              element={<OrderHistoryPage user={user} setUser={setUser} />}
            />
            <Route path="*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
