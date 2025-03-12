import { HomePage } from "./pages/HomePage"
import { Link, Route, Switch } from "wouter";
import Panel from "./pages/Panel"

function App() {
  return (
    <>
      <Route path="/">
        <HomePage />
      </Route>
      <Route path="/login">
        <div>Login</div>
      </Route>
      <Route path="/panel">
        <Panel />
      </Route>
      <Route path="/aboutus">
        <div>Register</div>
      </Route>
    </>
  )
}

export default App
