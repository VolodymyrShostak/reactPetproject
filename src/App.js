import ReduxToolkitPages from "./pages/reduxToolkitPages/ReduxToolkitPages";
import ReduxAsyncThankPages from "./pages/ReduxAsyncThankPages/ReduxAsyncThunkPages";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import Layout from "./components/Layout";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import AboutPage from "./pages/About/AboutPage";
import ReduxRtkQueryPage from "pages/ReduxRtkQueryPage/ReduxRtkQueryPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />}>
            <Route path="redux-toolkit" element={<ReduxToolkitPages />} />
            <Route path="redux-thank" element={<ReduxAsyncThankPages />} />
            <Route path="redux-rtk" element={<ReduxRtkQueryPage />} />
          </Route>
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
