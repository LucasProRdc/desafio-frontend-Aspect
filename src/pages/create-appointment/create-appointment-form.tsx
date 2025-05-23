import { useExamsListProvider } from "@/providers/exams-list-provider";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { useForm } from "../../hooks/useForm";
import { SelectDates } from "./select-dates";
import { useNavigate } from "react-router-dom";

export function CreateAppointmentForm() {
  const { availableDate, dataExamsSelect, postAppointment } =
    useExamsListProvider();
  const navigate = useNavigate();
  const additionalInformation = useForm("");

  const CreateAppointment = (event: React.FormEvent) => {
    event.preventDefault();

    if (additionalInformation.validate() && dataExamsSelect && availableDate) {
      const isoPart = availableDate.split(" às ")[0];
      const dateObj = new Date(isoPart);
      const hora = dateObj.toTimeString().slice(0, 5);

      postAppointment({
        examId: dataExamsSelect?.id,
        date: isoPart,
        time: hora,
        additionalInfo: additionalInformation.value,
      });

      navigate("/appointment-list");
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto px-4 py-6 space-y-4">
      <h1 className="text-4xl text-sky-950">Agendar Exame</h1>
      <form className="flex flex-col space-y-6" onSubmit={CreateAppointment}>
        <label>
          Tipo de exame:
          <Input
            className="w-full"
            type="text"
            name="patientName"
            value={dataExamsSelect?.name}
            readOnly
          />
        </label>
        <label>
          Datas disponíveis:
          <SelectDates />
        </label>
        <label>
          Informações Adicionais:
          <Input
            className="w-full"
            type="text"
            name="additionalInformation"
            {...additionalInformation}
          />
        </label>
        <Button type="submit">Agendar</Button>
      </form>
    </div>
  );
}
