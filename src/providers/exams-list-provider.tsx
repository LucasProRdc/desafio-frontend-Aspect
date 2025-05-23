"use client";

import { api } from "@/lib/axios";
import type { IAvailableDate } from "@/types/availableDate";
import type { IExam } from "@/types/exam";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";

interface ExamsListContextProps {
  dataExams: IExam[];
  setDataExams: Dispatch<SetStateAction<IExam[]>>;
  dataExamsSelect: IExam | null;
  setDataExamsSelect: Dispatch<SetStateAction<IExam | null>>;
  availableDate: string | null;
  setAvailableDate: Dispatch<SetStateAction<string | null>>;
  dataAvailableDate: string[];
  setDataAvailableDate: Dispatch<SetStateAction<string[]>>;
  resetState: () => void;
}

const ExamsListContext = createContext<ExamsListContextProps | undefined>(
  undefined
);

export const ExamsListProvider = ({ children }: PropsWithChildren) => {
  const [dataExams, setDataExams] = useState<IExam[]>([]);
  const [dataExamsSelect, setDataExamsSelect] = useState<IExam | null>(null);
  const [availableDate, setAvailableDate] = useState<string | null>(null);
  const [dataAvailableDate, setDataAvailableDate] = useState<string[]>([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const { data } = await api.get<IExam[]>("/exams");
        setDataExams(data);
      } catch (error) {
        console.error("Erro ao buscar exames:", error);
      }
    };

    fetchExams();
  }, []);

  useEffect(() => {
    const fetchAvailableDates = async () => {
      if (!dataExamsSelect) return;

      try {
        const { data } = await api.get<IAvailableDate[]>(
          `/available-date/?examId=${dataExamsSelect.id}`
        );

        const formattedDates = data.map(
          (item) => `${item.date} às ${item.time}`
        );

        setDataAvailableDate(formattedDates);
      } catch (error) {
        console.error("Erro ao buscar datas disponíveis:", error);
      }
    };

    fetchAvailableDates();
  }, [dataExamsSelect]);

  const resetState = () => {
    setDataExamsSelect(null);
    setAvailableDate(null);
  };

  return (
    <ExamsListContext.Provider
      value={{
        dataExams,
        setDataExams,
        dataExamsSelect,
        setDataExamsSelect,
        availableDate,
        setAvailableDate,
        dataAvailableDate,
        setDataAvailableDate,
        resetState,
      }}
    >
      {children}
    </ExamsListContext.Provider>
  );
};

export const useExamsListProvider = () => {
  const context = useContext(ExamsListContext);
  if (!context) {
    throw new Error(
      "useExamsListProvider deve ser usado dentro de ExamsListProvider"
    );
  }
  return context;
};
