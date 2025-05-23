import { AppointmentListProvider } from "@/providers/appointment-list-provider";
import { AppointmentListContent } from "./appoitment-content";

export function AppointmentList() {
  return (
    <AppointmentListProvider>
      <AppointmentListContent />
    </AppointmentListProvider>
  );
}
