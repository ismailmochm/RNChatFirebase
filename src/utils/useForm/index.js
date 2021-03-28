import React,{useState} from 'react';

export const useForm = (initialvalue) => {
  const [form, setForm] = useState(initialvalue);
  return [
    form,
    (formType, formValue) => {
      if (formType === 'reset') {
        return setForm(initialvalue);
      }
      return setForm({...form, [formType]: formValue});
    },
  ];
};
