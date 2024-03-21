import type { ReactNode } from 'react';

interface FormProps {
  children: ReactNode;
  onSubmit: () => void;
}

function Form(props: FormProps) {
  return <form className="form" {...props} />;
}

export default Form;
