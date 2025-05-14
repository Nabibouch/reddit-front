import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
    const { user } = useAuth()
    if (!user) return <Navigate to="/Signin" replace />
    return children
}

const jwt = localStorage.getItem("jwt");

const response = await fetch("http://localhost:1337/api/posts", {
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
});
