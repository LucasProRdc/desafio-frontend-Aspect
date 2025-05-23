import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ExamsList } from "./pages/exams-list";
import { CreateAppointment } from "./pages/create-appointment";
import { AppointmentList } from "./pages/appointment-list";
import { ExamsListProvider } from "./providers/exams-list-provider";
import { Header } from "./components/header";

export function App() {
  return (
    <BrowserRouter>
      <ExamsListProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ExamsList />} />
          <Route path="appointment-list" element={<AppointmentList />} />
          <Route path="/create-appointments" element={<CreateAppointment />} />
        </Routes>
      </ExamsListProvider>
    </BrowserRouter>
  );
}
