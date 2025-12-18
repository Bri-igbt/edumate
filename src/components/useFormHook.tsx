import { FormErrors, FormValues } from "@/interface";
import { SuccessPopup } from "@/utils/notification";
import { validate } from "@/utils/validate";
import { useRef, useState } from "react";

const useFormHook = () => {
  const initialState = { name: "", email: "", phone: "", message: "" };
  const [values, setValues] = useState<FormValues[]>([initialState]);
  const [errors, setErrors] = useState<FormErrors[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const clearAllInputs = () => {
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll("input, textarea");
      inputs.forEach((input) => {
        if (
          input instanceof HTMLInputElement ||
          input instanceof HTMLTextAreaElement
        ) {
          input.value = "";
        }
      });
      setValues(
        values.map((_) => {
          return {
            name: "",
            email: "",
            phone: "",
            message: "",
          };
        })
      );
      setErrors([]);
    }
  };

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const newValues = [...values];
    newValues[index][name as keyof FormValues] = value;
    setValues(newValues);
    if (errors[index] && Object.keys(errors[index]).length > 0) {
      const validationErrors = newValues.map(validate);
      setErrors(validationErrors as FormErrors[]);
    }
  };

  const handleAddField = () => {
    setValues([...values, initialState]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = values.map(validate);
    setErrors(validationErrors as FormErrors[]);
    if (validationErrors.every((error) => Object.keys(error).length === 0)) {
      setSubmitted(true);

      setTimeout(() => {
        SuccessPopup("Form has been successfully created!");
        setSubmitted(false);
        clearAllInputs();
      }, 1000);
    }
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const removeIndex = (index: number) => {
    if (index >= 0 && index < values.length) {
      const newValues = [...values];
      const newErrors = [...errors];

      const filteredValues = newValues.filter((_, i) => i !== index);
      const filteredErrors = newErrors.filter((_, i) => i !== index);

      setValues(filteredValues);
      setErrors(filteredErrors);
    }
  };

  return {
    initialState,
    values,
    errors,
    submitted,
    handleChange,
    handleAddField,
    handleSubmit,
    handleEnterKeyPress,
    clearAllInputs,
    formRef,
    removeIndex,
  };
};

export default useFormHook;
