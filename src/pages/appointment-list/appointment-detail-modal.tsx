import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppointmentListProvider } from "@/providers/appointment-list-provider";
import type { IAppointment } from "@/types/appointment";
import { CircleEllipsis, Trash2 } from "lucide-react";

interface AppointmentDetailModalProps {
  appointment: IAppointment;
}

export function AppointmentDetailModal({
  appointment,
}: AppointmentDetailModalProps) {
  const { deleteAppointment } = useAppointmentListProvider();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="border-none" variant="outline">
          <CircleEllipsis />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            <p className="flex gap-2">
              <span>Número do agendamento:</span>
              {appointment.id}
            </p>
          </DialogTitle>
          <DialogDescription>{appointment.exam.name}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-2">
          <p className="text-lg font-semibold text-sky-950">
            Data: {appointment.date}
          </p>
          <p className="text-lg  text-sky-950">Hora: {appointment.time}</p>
          <p className="text-lg text-sky-950">{appointment.additionalInfo}</p>
        </div>
        <DialogFooter>
          <Button
            onClick={() => deleteAppointment(appointment.id)}
            className="bg-red-500 hover:bg-red-400"
            type="submit"
          >
            Deletar <Trash2 />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
