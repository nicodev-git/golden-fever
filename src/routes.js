import React from "react"

const Home = React.lazy(() => import("./views/wallet"))
const Wallet = React.lazy(() => import("./views/wallet"))
const Store = React.lazy(() => import("./views/store"))
const Buy = React.lazy(() => import("./views/buy"))
const Sell = React.lazy(() => import("./views/sell"))

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/wallet", name: "Wallet", component: Wallet },
  { path: "/store/:filter", name: "Store", component: Store },
  { path: "/store", name: "Store", component: Store },
  { path: "/store/:filter", name: "Store", component: Store },

  { path: "/buy", name: "Buy", component: Buy },
  { path: "/buy/:filter", name: "Buy", component: Buy },
  
  { path: "/sell", name: "Sell", component: Sell },
  { path: "/sell/:filter", name: "Sell", component: Sell },
]

export default routes
