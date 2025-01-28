import ChoosePlanPage from "./screens/ChoosePlan";
import FinishPage from "./screens/FinishPage";
import PaymentPage from "./screens/Payment";
import SetupAccount from "./screens/SetupAccount";
import SignupPage from "./screens/Signup";
import WelcomeScreen from "./screens/Welcome";
import { createBrowserRouter, RouterProvider } from "react-router";
import { OrganizationForm } from "./components/OrganiztionForm";
import Layout from "./components/Layout";
import { SessionsTable } from "./screens/SessionPage";
import { ClassDataTable } from "./components/ClassDataTable";
import DashboardScreen from "./screens/DashboardScreen";
import AcademicsPage from "./screens/AcademicsDashboard";
import HomeworkPage from "./screens/Homework";
import NoticeBoardPage from "./screens/Noticeboard";
import EventsPage from "./screens/Events";
import { PricingPlans } from "./components/Pricing";
import { PaymentForm } from "./components/PaymentForm";
import { InvoiceTable } from "./components/BillingInvoice";
import UsersPage from "./screens/Userpage";
import SchoolDashboardPage from "./screens/MySchool";
import InquiriesPage from "./screens/InqiryPage";
import { StudentTable } from "./components/StudentTable";
import { TeacherTable } from "./components/TeacherTable";
import LicensePage from "./screens/Licence";
import { ComprehensiveDashboard } from "./screens/Comprehensive-Dashboard";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeScreen />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/setup-account",
    element: <SetupAccount />,
  },
  {
    path: "/choose-plan",
    element: <ChoosePlanPage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/finish",
    element: <FinishPage />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <ComprehensiveDashboard />,
      },
      {
        path: "school-management",
        children: [
          {
            path: "dashboard",
            element: <DashboardScreen />,
          },
          {
            path: "session",
            element: <SessionsTable />,
          },
          {
            path: "classes",
            element: <ClassDataTable />,
          },
          {
            path: "add-branch",
            element: <OrganizationForm />,
          },
        ],
      },
      {
        path: "myschool",
        children: [
          {
            path: "dashboard",
            element: <SchoolDashboardPage />,
          },
          {
            path: "inquiry",
            element: <InquiriesPage />,
          },
          {
            path: "students",
            element: <StudentTable />,
          },
          {
            path: "teachers",
            element: <TeacherTable />,
          },
          {
            path: "classes",
            element: <ClassDataTable />,
          },
          {
            path: "licence",
            element: <LicensePage />,
          },
        ],
      },
      {
        path: "academics",
        children: [
          {
            path: "dashboard",
            element: <AcademicsPage />,
          },
          {
            path: "home-work",
            element: <HomeworkPage />,
          },
          {
            path: "notice",
            element: <NoticeBoardPage />,
          },
          {
            path: "events",
            element: <EventsPage />,
          },
        ],
      },
      {
        path: "billing",
        children: [
          {
            path: "myplans",
            element: <PricingPlans />,
          },
          {
            path: "payment",
            element: <PaymentForm />,
          },
          {
            path: "invoice",
            element: <InvoiceTable />,
          },
        ],
      },
      {
        path: "user",
        element: <UsersPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className=" bg-white">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
