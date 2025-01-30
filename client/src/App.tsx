import SetupAccount from "./screens/SetupAccount";
import SignupPage from "./screens/Signup";
import WelcomeScreen from "./screens/Welcome";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./components/Layout";
import SuperAdminDashboard from "./components/super-admin/Dashboard";
import UserManagement from "./components/super-admin/UserManagement";
import SchoolManagement from "./components/super-admin/ScoolManagement";
import RoleManagement from "./components/super-admin/RoleManagement";
import SystemSettings from "./components/super-admin/SystemSettings";
import Reports from "./components/super-admin/Reports";
import TeacherPage from "./components/admin/Staff";
import ScheduleManagement from "./components/admin/ScheduleManagement";
import CurriculumManagement from "./components/admin/Curriculum";
import Announcements from "./components/admin/Announcement";
import Messages from "./components/admin/Messages";
import StudentManagement from "./components/admin/student";
import AdminDashboard from "./components/admin/Dashboard";
import TeacherDashboard from "./components/teacher/dashboard";
import Assignments from "./components/teacher/Assignment";
import Attendance from "./components/teacher/Attendance";
import Grading from "./components/teacher/Grading";
import MyClasses from "./components/teacher/Classes";
import TeachingMaterials from "./components/teacher/TeachingMeterial";
import Schedule from "./components/teacher/Scheduled";
import ParentMeetings from "./components/teacher/Parent-Meeting";
import TeacherMessages from "./components/teacher/Messages";
import TeacherProfile from "./components/teacher/Profile";
import AccountantDashboard from "./components/accountant/Dashboard";
import FeesManagement from "./components/accountant/FeesManagement";
import Invoices from "./components/accountant/Invoices";
import FinancialReports from "./components/accountant/Finanace-Report";
import StaffPayroll from "./components/accountant/Payrole";
import SalaryStatements from "./components/accountant/SalaryStatement";
import BudgetPlanning from "./components/accountant/BudgetPlanning";
import ExpenseTracking from "./components/accountant/ExpenceTracker";

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
    path: "/superadmin",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <SuperAdminDashboard />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "school-management",
        element: <SchoolManagement />,
      },
      {
        path: "role-management",
        element: <RoleManagement />,
      },
      {
        path: "settings",
        element: <SystemSettings />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
  {
    path: "admin",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "staff",
        element: <TeacherPage />,
      },
      {
        path: "students",
        element: <StudentManagement />,
      },
      {
        path: "schedule-management",
        element: <ScheduleManagement />,
      },
      {
        path: "curriculum",
        element: <CurriculumManagement />,
      },
      {
        path: "announcements",
        element: <Announcements />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
    ],
  },
  {
    path: "teacher",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <TeacherDashboard />,
      },
      {
        path: "classes",
        element: <MyClasses />,
      },
      {
        path: "assignments",
        element: <Assignments />,
      },
      {
        path: "Attendance",
        element: <Attendance />,
      },
      {
        path: "grading",
        element: <Grading />,
      },
      {
        path: "meterials",
        element: <TeachingMaterials />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "meetings",
        element: <ParentMeetings />,
      },
      {
        path: "messages",
        element: <TeacherMessages />,
      },
      {
        path: "profile",
        element: <TeacherProfile />,
      },
    ],
  },
  {
    path: "accountant",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <AccountantDashboard />,
      },
      {
        path: "fees",
        element: <FeesManagement />,
      },
      {
        path: "invoices",
        element: <Invoices />,
      },
      {
        path: "reports",
        element: <FinancialReports />,
      },
      {
        path: "payroll",
        element: <StaffPayroll />,
      },
      {
        path: "salary-statements",
        element: <SalaryStatements />,
      },
      {
        path: "budget",
        element: <BudgetPlanning />,
      },
      {
        path: "expenses",
        element: <ExpenseTracking />,
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
