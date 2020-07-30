import React from "react"

const Landing = React.lazy(() => import("./views/landing"))
const Wallet = React.lazy(() => import("./views/wallet"))
const Store = React.lazy(() => import("./views/store"))
const Exchange = React.lazy(() => import("./views/exchange"))

const routes = [
  { path: "/wallet", name: "Wallet", component: Wallet },
  { path: "/store/:filter", name: "Store", component: Store },
  { path: "/store", name: "Store", component: Store },
  { path: "/exchange/:filter", name: "Exchange", component: Exchange },
  { path: "/exchange", name: "Exchange", component: Exchange },
  { path: "/", name: "Home", component: Landing },
]

export default routes
