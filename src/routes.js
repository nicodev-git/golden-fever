import React from "react"

const Home = React.lazy(() => import("./views/wallet"))
const Wallet = React.lazy(() => import("./views/wallet"))
const Store = React.lazy(() => import("./views/store"))
const Buy = React.lazy(() => import("./views/buy"))
const Sell = React.lazy(() => import("./views/sell"))
const Exchange = React.lazy(() => import("./views/exchange"))

const routes = [
  { path: "/wallet", name: "Wallet", component: Wallet },
  { path: "/store/:filter", name: "Store", component: Store },
  { path: "/store", name: "Store", component: Store },
  { path: "/exchange/:filter", name: "Exchange", component: Exchange },
  { path: "/exchange", name: "Exchange", component: Exchange },
  { path: "/", exact: true, name: "Home" },
]

export default routes
