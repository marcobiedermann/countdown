import type { ReactNode } from 'react';

interface FormLabelProps {
  children: ReactNode;
  htmlFor: string;
}

function FormLabel(props: FormLabelProps) {
  return <label className="form__label" {...props} />;
}

export default FormLabel;
