import { useExamsListProvider } from "@/providers/exams-list-provider";
import { Link } from "react-router-dom";

export function Header() {
  const { resetState } = useExamsListProvider();
  return (
    <nav className="bg-sky-200 w-full h-24 border-b border-gray-200 shadow-sm">
      <div className="h-24 flex items-center justify-between max-w-7xl mx-auto px-4 py-2 text-sky-950 text-lg">
        <Link
          to="/"
          onClick={() => {
            // só reseta se não estiver já na home
            if (location.pathname !== "/") {
              resetState();
            }
          }}
        >
          Home
        </Link>
        <Link to="/appointment-list">Meus agendamentos</Link>
      </div>
    </nav>
  );
}
