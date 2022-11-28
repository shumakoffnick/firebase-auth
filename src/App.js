import { Routes, Route } from "react-router-dom";
import AccountPage from "./components/AccountPage";
import ProtectedRoute from "./components/ProtectedRoute";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/account" element={
        <ProtectedRoute>
        <AccountPage/>
        </ProtectedRoute>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
