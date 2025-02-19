import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import { Rsvp } from "./components/Rsvp.tsx";
import { useState } from "react";

const ProtectedRoute = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Deba@roy") {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-script text-center gradient-text mb-6">
            Enter Password to View RSVPs
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-rose-400"
              placeholder="Enter password"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-rose-400 to-rose-500 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <Rsvp />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/rsvp",
    element: <ProtectedRoute />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
