import { FormErrors, FormValues } from "@/interface";

export function isEmptyString(value: string) {
  return typeof value === "string" && value.trim() === "";
}

export const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  // Name validation
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (values.name.length < 3) {
    errors.name = 'Name must be at least 3 characters';
  } else if (values.name[0] !== values.name[0].toUpperCase()) {
    errors.name = 'Name must start with a capital letter';
  }

  // Email validation
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  // Phone validation
  if (!values.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\d+$/.test(values.phone)) {
    errors.phone = "Phone number must contain only digits";
  } else if (values.phone.length < 8) {
    errors.phone = "Phone number must be at least 8 digits long";
  }

  // Message validation
  if (!values.message) {
    errors.message = 'Message is required';
  } else if (values.message.length < 5) {
    errors.message = 'Message must be at least 5 characters';
  }

  return errors;
};