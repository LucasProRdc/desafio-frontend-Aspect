"use client";

import { api } from "@/lib/axios";
import type { IAppointment } from "@/types/appointment";

import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  dataAppointment: IAppointment[];
  setDataAppointment: Dispatch<SetStateAction<IAppointment[]>>;
  deleteAppointment: (id: string) => string;
}

const AppointmentListContext = createContext({} as Props);

export const AppointmentListProvider = ({ children }: PropsWithChildren) => {
  const [dataAppointment, setDataAppointment] = useState<IAppointment[]>([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const { data } = await api.get<IAppointment[]>("/appointments");
        setDataAppointment(data);
      } catch (error) {
        console.error("Erro ao buscar exames:", error);
      }
    };

    fetchExams();
  }, []);

  const deleteAppointment = (id: string) => {
    const updatedAppointments = dataAppointment.filter(
      (appointment) => appointment.id !== id
    );
    setDataAppointment(updatedAppointments);

    api.delete(`/appointments/${id}`).catch((error) => {
      console.error("Erro ao deletar agendamento:", error);
    });

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
