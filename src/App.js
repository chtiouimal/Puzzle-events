import { useEffect, useMemo, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { INITIAL_PUZZLE_DATA } from "./constants/initial.constants";
import { PuzzleContext } from "./context/PuzzleContext";
import { AdminLayout, DashboardPage, UsersPage } from "./features/admin";
import { AuthPage } from "./features/auth";
import { OuterLayout } from "./layouts";
import { MainPage } from "./pages";
import { getUser } from "./services/user.services";

function App() {
  const [puzzleData, setPuzzleData] = useState(INITIAL_PUZZLE_DATA);

  const value = useMemo(() => ({ puzzleData, setPuzzleData }), [puzzleData]);

  const getUserData = async (id) => {
    await getUser(id)
      .then((data) => setPuzzleData((prev) => ({ ...prev, user: data.data })))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      getUserData(localStorage.getItem("user"));
    }
    if (localStorage.getItem("authToken")) {
      setPuzzleData((prev) => ({ ...prev, loggedIn: true }));
    }
  }, []);

  const PrivateRoutes = ({ loggedIn }) => {
    return !loggedIn ? (
      <Navigate to="/auth" />
    ) : localStorage.getItem("admin") === "1" ? (
      <Outlet />
    ) : (
      <Navigate to="/admin" />
    );
  };

  const AdminRoutes = ({ loggedIn }) => {
    return !loggedIn ? (
      <Navigate to="/auth" />
    ) : loggedIn && localStorage.getItem("admin") === "0" ? (
      <Outlet />
    ) : (
      <Navigate to="/" />
    );
  };

  return (
    <PuzzleContext.Provider value={value}>
      <OuterLayout>
        <Routes>
          <Route
            exact
            path="/auth"
            element={
              !puzzleData.loggedIn ? (
                <AuthPage />
              ) : puzzleData.loggedIn && puzzleData.isAdmin === 0 ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route element={<PrivateRoutes loggedIn={puzzleData.loggedIn} />}>
            <Route path="" element={<AdminLayout />}>
              <Route index element={<MainPage />} />
              <Route path="puzzle" element={<h4>Item</h4>} />
            </Route>
          </Route>
          <Route element={<AdminRoutes loggedIn={puzzleData.loggedIn} />}>
            <Route path="admin" element={<Outlet />}>
              <Route index element={<DashboardPage />} />
              <Route path="admin/users" element={<UsersPage />} />
            </Route>
          </Route>
        </Routes>
      </OuterLayout>
    </PuzzleContext.Provider>
  );
}

export default App;
