import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const ProjectsPage = () => {
  return (
    <section className="mainSection">
      <Sidebar />
      <div className="project">
        <Outlet />
      </div>
    </section>
  );
};

export default ProjectsPage;
