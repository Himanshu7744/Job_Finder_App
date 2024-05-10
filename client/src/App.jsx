import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Footer, Navbar } from "./Components";
import {
  AuthPage,
  About,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetail,
  UploadJobs,
  UserProfile,
} from "./Pages";
import { useSelector } from "react-redux";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/user-auth" state={{ from: location }} replace />
  );
}
function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <main className="bg -[#f7fdfd]">
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Navigate to="find-jobs" replace={true} />}
          />
          <Route path="/find-jobs" element={<FindJobs />} />
          <Route path="/companies" element={<Companies />} />
          <Route
            path={
              user?.accountType === "seeker"
                ? "/user-profile"
                : "/user-profile/:id"
            }
            element={<UserProfile />}
          />
          <Route path={"/company-profile"} element={<CompanyProfile />} />
          <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"/upload-job"} element={<UploadJobs />} />
          <Route path={"/job-detail/:id"} element={<JobDetail />} />
        </Route>

        <Route path="/about-us" element={<About />} />
        <Route path="/user-auth" element={<AuthPage />} />
      </Routes>
      {user && <Footer />}
      <ToastContainer />
    </main>
  );
}

export default App;
