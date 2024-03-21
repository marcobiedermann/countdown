import type { ReactNode } from 'react';

interface FormFieldProps {
  children: ReactNode;
}

function FormField(props: FormFieldProps) {
  return <div className="form__field" {...props} />;
}

export default FormField;
