import Dashboard from "./components/Dashboard"
import Register from "./components/Register"
import Login from "./components/Login"
import Issue from "./boards/issueBoard/IssueBoard"
import Task from "./boards/taskBoard/TaskBoard"
import Idea from "./boards/ideaBoard/IdeaBoard"
import Roadmap from "./boards/roadmapBoard/RoadmapBoard"

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-green",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth"
  },
  {
    path: "/issueboard",
    name: "Issues",
    icon: "ni ni-tag text-red",
    component: Issue,
    layout: "/admin"
  },
  {
    path: "/taskboard",
    name: "Tasks",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Task,
    layout: "/admin"
  },
  {
    path: "/ideaboard",
    name: "Ideas",
    icon: "ni ni-bulb-61 text-yellow",
    component: Idea,
    layout: "/admin"
  },
  {
    path: "/roadmap",
    name: "Roadmap",
    icon: "ni ni-calendar-grid-58 text-pink",
    component: Roadmap,
    layout: "/admin"
  }
]

export default routes;
