import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import MainLayout from "../layouts/MainLayout";
import Error from "../components/Error";
import AllVisas from "../components/AllVisas";
import AddVisa from "../components/AddVisa";
import MyAddedVisa from "../components/MyAddedVisa";
import MyVisaApplication from "../components/MyVisaApplication";
import Details from "../components/Details";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivateRoute from "../components/PrivateRoute";
import UpdateVisa from "../components/UpdateVisa";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader:()=> fetch('https://assignment-10-server-psi-nine.vercel.app/visa')
      },
      {
        path: "/allVisas",
        element: <AllVisas></AllVisas>,
        // loader:()=> fetch('https://assignment-10-server-psi-nine.vercel.app/visa')
      },
      {
        path: "/addVisa",
        element: <PrivateRoute><AddVisa></AddVisa></PrivateRoute>,
      },
      {
        path: "/myaddedVisas",
        element: <PrivateRoute><MyAddedVisa></MyAddedVisa></PrivateRoute>,
        loader:async()=>{
          const res = await fetch('https://assignment-10-server-psi-nine.vercel.app/visa')
          const data = await res.json()
          console.log(data);
          return data;
        }
      },
      {
        path: "/myVisaApplications",
        element: <PrivateRoute><MyVisaApplication></MyVisaApplication></PrivateRoute>,
        loader:()=>fetch('https://assignment-10-server-psi-nine.vercel.app/application')
      },
      {
        path:"/details/:id",
        element:<PrivateRoute>
          <Details></Details>
        </PrivateRoute>,
        loader:async({params})=>{
          const res = await fetch('https://assignment-10-server-psi-nine.vercel.app/visa')
          const data = await res.json()
          const singleData = data.find(d=>d._id==params.id)
          return singleData;
        }
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateVisa/:id",
        element: <UpdateVisa></UpdateVisa>,
        loader:({params})=>fetch(`https://assignment-10-server-psi-nine.vercel.app/visa/${params.id}`)
      },
      {
        path: "*",
        element:<Error></Error>,
      },
    ],
  },
]);

export default router;
