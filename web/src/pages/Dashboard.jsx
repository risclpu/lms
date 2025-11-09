import CourseList from "../components/CourseList";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="dashboard p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-2">Dashboard</h2>
      <p className="mb-4 text-slate-600">
        Your courses and activities are below.
      </p>
      <CourseList />
    </div>
  );
}
