import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useExamsListProvider } from "@/providers/exams-list-provider";

export function SelectExams() {
  const { dataExams, setDataExamsSelect } = useExamsListProvider();

  const handleSelect = (selectedValue: string) => {
    const selectedExam = dataExams.find((exam) => exam.id === selectedValue);
    if (selectedExam) {
      setDataExamsSelect(selectedExam);
    }
  };

  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a specialty" />
      </SelectTrigger>
      <SelectContent>
        {dataExams.map((exam) => (
          <SelectItem key={exam.id} value={exam.id}>
            {exam.medicalSpecialty}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
