interface exam {
  name: string;
}

export interface IAppointment {
  id: string;
  date: string;
  time: string;
  exam: exam;
  additionalInfo: string;
}

export interface ICreateAppointment {
  date: string;
  time: string;
  additionalInfo: string;
  examId: string;
}
