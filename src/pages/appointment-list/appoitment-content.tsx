import { TableAppointment } from "./appoitment-table";

export function AppointmentListContent() {
  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto px-4 py-6 space-y-6">
      <h1 className="text-4xl text-sky-950">Meus agendamentos</h1>
      <TableAppointment />
    </div>
  );
}
