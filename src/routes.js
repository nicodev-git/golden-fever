import React from "react"

const Home = React.lazy(() => import("./views/wallet"))
const Wallet = React.lazy(() => import("./views/wallet"))

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/wallet", name: "Wallet", component: Wallet },
]

export default routes
