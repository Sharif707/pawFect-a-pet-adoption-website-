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
import DonationCampaigns from "../Pages/Dashboard/UserDashboard/Donation/MyDonationCampaigns/MyDonationCampaigns";
import EditDonation from "../Pages/Dashboard/UserDashboard/Donation/EditDonation/EditDonation";
import AllDonations from "../Pages/AllDonations/AllDonations";
import PetListing from "../Pages/PetListing/PetListing";
import PetDetails from "../Pages/PetDetails/PetDetails";
import AdoptionRequestTable from "../Pages/Dashboard/UserDashboard/AdoptionRequest/AdoptionRequest";
import UsersList from "../Pages/Dashboard/Admin/AllUsers/UsersList";
import AdminRoute from "./AdminRoute";
import StatisticsPage from "../Pages/Dashboard/Statistics/Statistics";
import ProfilePage from "../Pages/Dashboard/ProfilePage/ProfilePage";
import AllPets from "../Pages/Dashboard/Admin/AllPets/AllPets";
import AllCampaigns from "../Pages/Dashboard/Admin/AllCampaigns/AllCampaigns";

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
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/all-donations",
        element: <AllDonations />,
      },

      {
        path: "/all-pets",
        element: (
          <PrivateRoute>
            <PetListing />,
          </PrivateRoute>
        ),
      },
      {
        path: "/pet-details/:id",
        element: (
          <PrivateRoute>
            <PetDetails />,
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />,
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <StatisticsPage />,
          </PrivateRoute>
        ),
      },
      {
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

      {
        path: "/dashboard/my-campaigns",
        element: (
          <PrivateRoute>
            <DonationCampaigns />,
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/edited-donation/:id",
        element: (
          <PrivateRoute>
            <EditDonation />,
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/adoption-request",
        element: <AdoptionRequestTable />,
      },
      {
        path: "/dashboard/all-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <UsersList />,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-pets",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllPets />,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-campaigns",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllCampaigns />,
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile-page",
        element: (
          <PrivateRoute>
            <ProfilePage />,
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
