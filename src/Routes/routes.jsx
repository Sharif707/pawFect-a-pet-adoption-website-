import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/Home/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";

import PrivateRoute from "./PrivateRoute";
import AddPetForm from "../Pages/Dashboard/UserDashboard/AddPets/AddPets";
import PetsTable from "../Pages/Dashboard/UserDashboard/PetsTable/PetsTable";
import UpdatePet from "../Pages/Dashboard/UserDashboard/UpdatePets/UpdatePet";
import DonationFormContainer from "../Pages/Dashboard/UserDashboard/Donation/DonationFormContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        path: "/dashboard/add-pets",
        element: (
          <PrivateRoute>
            <AddPetForm />,
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/pets-table",
        element: (
          <PrivateRoute>
            <PetsTable />,
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/update-pet/:id",
        element: (
          <PrivateRoute>
            <UpdatePet />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/donation",
        element: (
          <PrivateRoute>
            <DonationFormContainer />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
