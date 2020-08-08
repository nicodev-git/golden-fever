import React from "react"

const Landing = React.lazy(() => import("./views/landing"))
const Wallet = React.lazy(() => import("./views/wallet"))
const AboutUs = React.lazy(() => import("./views/aboutus"))
const Press = React.lazy(() => import("./views/press"))
const Investors = React.lazy(() => import("./views/investors"))
const Host = React.lazy(() => import("./views/host"))
const Policy = React.lazy(() => import("./views/policy"))
const Terms = React.lazy(() => import("./views/terms"))
// const Store = React.lazy(() => import("./views/store"))
const Rights = React.lazy(() => import("./views/rights"))
const Exchange = React.lazy(() => import("./views/exchange"))

const routes = [
  { path: "/wallet", name: "Wallet", component: Wallet },
  { path: "/aboutus", name: "AboutUs", component: AboutUs },
  { path: "/press", name: "Press", component: Press },
  { path: "/rights", name: "Rights", component: Rights },
  { path: "/investors", name: "Investors", component: Investors },
  { path: "/host", name: "Host", component: Host },
  { path: "/terms", name: "Terms", component: Terms },
  { path: "/policy", name: "Policy", component: Policy },
  // { path: "/store/:filter", name: "Store", component: Store },
  // { path: "/store", name: "Store", component: Store },
  { path: "/exchange/:filter", name: "Exchange", component: Exchange },
  { path: "/exchange", name: "Exchange", component: Exchange },
  { path: "/", name: "Home", component: Landing },
]

export default routes
