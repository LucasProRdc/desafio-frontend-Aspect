import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAppointmentListProvider } from "@/providers/appointment-list-provider";
import type { IAppointment } from "@/types/appointment";
import { AppointmentDetailModal } from "./appointment-detail-modal";

export function TableAppointment() {
  const { dataAppointment } = useAppointmentListProvider();
  return (
    <Table>
      <TableCaption>Sua lista de agendamentos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Número</TableHead>
          <TableHead>Tipo</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.isArray(dataAppointment) && dataAppointment.length > 0 ? (
          dataAppointment.map((appointment: IAppointment) => (
            <TableRow key={appointment.id}>
              <TableCell className="font-medium">{appointment.id}</TableCell>
              <TableCell>{appointment.exam.name}</TableCell>
              <TableCell className="text-right">
                <AppointmentDetailModal appointment={appointment} />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-center py-4">
              Nenhum agendamento encontrado.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
