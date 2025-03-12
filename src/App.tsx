import { HomePage } from "./pages/HomePage"
import { Link, Route, Switch } from "wouter";

function App() {
  return (
    <>
      <Route path="/*">
        <HomePage />
      </Route>
      <Route path="/login">
        <div>Login</div>
      </Route>
      <Route path="/panel">
        <div>panel</div>
      </Route>
      <Route path="/aboutus">
        <div>Register</div>
      </Route>
    </>
  )
}

export default App
