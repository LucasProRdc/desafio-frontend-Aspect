"use client";

import type { IAppointment } from "@/types/appointment";

import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface Props {
  dataAppointment: IAppointment[];
  setDataAppointment: Dispatch<SetStateAction<IAppointment[]>>;
  deleteAppointment: (id: string) => string;
}

const AppointmentListContext = createContext({} as Props);

export const AppointmentListProvider = ({ children }: PropsWithChildren) => {
  const [dataAppointment, setDataAppointment] = useState<IAppointment[]>([
    {
      id: "1",
      date: "2023-10-01",
      time: "10:00",
      examType: "Exame de Sangue",
      additionalInfo: "Informações adicionais",
    },
    {
      id: "2",
      date: "2023-10-02",
      time: "11:00",
      examType: "Exame de Sangue 2",
      additionalInfo: "Informações adicionais",
    },
    {
      id: "3",
      date: "2023-10-03",
      time: "12:00",
      examType: "Exame de Sangue 3",
      additionalInfo: "Informações adicionais",
    },
  ]);

  const deleteAppointment = (id: string) => {
    return id;
  };

  const value: Props = {
    dataAppointment,
    setDataAppointment,
    deleteAppointment,
  };

  return (
    <AppointmentListContext.Provider value={value}>
      {children}
    </AppointmentListContext.Provider>
  );
};

export const useAppointmentListProvider = () => {
  const context = useContext(AppointmentListContext);
  if (!context) {
    throw new Error(
      "useExamsListProvider deve ser usado dentro de AppointmentListProvider"
    );
  }
  return context;
};
