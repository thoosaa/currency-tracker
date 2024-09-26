export type DateFormState = {
  fromDate: string;
  toDate: string;
};

export type DateFormProps = {
  handleChange: (fromDate: string, toDate: string) => void;
  handleError: (error: string) => void;
};
