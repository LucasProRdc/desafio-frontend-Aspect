import { useExamsListProvider } from "@/providers/exams-list-provider";
import { Button } from "../../components/button";
import { SelectExams } from "./select-exams";
import { useNavigate } from "react-router";

export function ExamsListContent() {
  const { dataExamsSelect } = useExamsListProvider();
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto px-4 py-6 space-y-4">
      <h1 className="text-4xl text-sky-950">Qual exame você precisa?</h1>
      <div>
        <SelectExams />
      </div>
      {dataExamsSelect && (
        <>
          <div className="text-md text-sky-950 bg-sky-100 rounded-sm p-4">
            <p className="">{dataExamsSelect.name}</p>
            <p className="font-semibold">{dataExamsSelect.medicalSpecialty}</p>
          </div>

          <Button
            onClick={() => {
              navigate("/create-appointments");
            }}
          >
            Agendar exame
          </Button>
        </>
      )}
    </div>
  );
}
