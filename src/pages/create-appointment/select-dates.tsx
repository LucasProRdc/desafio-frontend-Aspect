import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useExamsListProvider } from "@/providers/exams-list-provider";

export function SelectDates() {
  const { dataAvailableDate, setAvailableDate } = useExamsListProvider();

  const handleSelect = (selectedValue: string) => {
    setAvailableDate(selectedValue);
  };

  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Escolha uma data disponível" />
      </SelectTrigger>
      <SelectContent>
        {dataAvailableDate.map((availableDate) => (
          <SelectItem key={availableDate} value={availableDate}>
            {availableDate}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
