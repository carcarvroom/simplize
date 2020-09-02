import Profile from "./components/Profile"
import Register from "./components/Register"
import Login from "./components/Login"
import Issue from "./boards/ideaBoard/IdeaBoard"
import Task from "./boards/taskBoard/TaskBoard"
import Idea from "./boards/ideaBoard/IdeaBoard"
import Roadmap from "./boards/roadmapBoard/RoadmapBoard"

const routes = [
  {
    path: "/profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
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
    icon: "ni ni-circle-08 text-pink",
    component: Issue,
    layout: "/admin"
  },
  {
    path: "/taskboard",
    name: "Tasks",
    icon: "ni ni-circle-08 text-pink",
    component: Task,
    layout: "/admin"
  },
  {
    path: "/ideaboard",
    name: "Ideas",
    icon: "ni ni-circle-08 text-pink",
    component: Idea,
    layout: "/admin"
  },
  {
    path: "/roadmap",
    name: "Roadmap",
    icon: "ni ni-circle-08 text-pink",
    component: Roadmap,
    layout: "/admin"
  }
]

export default routes;
