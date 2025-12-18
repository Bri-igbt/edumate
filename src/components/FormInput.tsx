import { FormInputProps } from "@/interface";
import { isEmptyString } from "@/utils/validate";

const FormInput = ({
  type,
  label,
  name,
  value,
  error,
  placeholder,
  onChange,
  inputType,
}: FormInputProps) => {
  const inputClass = `${
    isEmptyString(error ?? "") ? "input" : "input-invalid"
  } appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-1 outline-none`;

  return (
    <div className="-mx-3 flex flex-col mb-6 px-8">
      <div className="mb-6 md:mb-3">
        <label
          className="block capitalize tracking-wide text-grey-darker text-md md:text-lg font-normal mb-2"
          htmlFor={name}
        >
          {label}
          <span className="text-[#F15846] mx-1">*</span>
        </label>
        {inputType === "textarea" ? (
          <textarea
            className={inputClass}
            id={name}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
          />
        ) : (
          <input
            className={inputClass}
            id={name}
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        )}
        <div className="text-red-900 text-sm" data-testid="error-message">{error ?? ""}</div>
      </div>
    </div>
  );
};

export default FormInput;
