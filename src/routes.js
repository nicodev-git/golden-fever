import React from "react"

const Home = React.lazy(() => import("./views/wallet"))
const Wallet = React.lazy(() => import("./views/wallet"))
const Store = React.lazy(() => import("./views/store"))

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/wallet", name: "Wallet", component: Wallet },
  { path: "/store", name: "Store", component: Store },
]

export default routes
