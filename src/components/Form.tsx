import { AddIcon, LoadingIcon, RemoveIcon } from "@/assets/svgs";
import FormInput from "@/components/FormInput";
import useFormHook from "@/components/useFormHook";

const Form = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleAddField,
    handleEnterKeyPress,
    submitted,
    clearAllInputs,
    formRef,
    removeIndex,
  } = useFormHook();
  return (
    <div
      className="form__container"
      id="form__container"
      data-testid="form__container"
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded pt-2 pb-8 mb-4 flex flex-col my-2"
      >
        <h3 className="py-3 text-center text-lg md:text-xl lg:text-2xl font-bold capitalize px-8 border-b-[2px] border-gray-50">
          Contact Form
        </h3>
        {values?.map((value, index) => {
          return (
            <div key={index}>
              <div
                className={`px-5 mb-2 py-3 ${
                  index > 0 &&
                  "border-t-[2px] border-gray-50 flex justify-between items-center w-full"
                }`}
              >
                <h3 className="text-base font-semibold tracking-wide text-[#507FDF]">
                  Form {index + 1}
                </h3>
                {index > 0 && (
                  <button
                    className="flex justify-start items-center cursor-pointer"
                    onClick={() => removeIndex(index)}
                    type="button"
                  >
                    <RemoveIcon />
                    <p className="text-sm text-[#F15846] font-medium ml-3">
                      Remove
                    </p>
                  </button>
                )}
              </div>
              <FormInput
                type="text"
                label="Name"
                name="name"
                placeholder="-- Enter name --"
                inputType={"input"}
                value={value.name}
                error={errors[index]?.name}
                onChange={(e) => handleChange(index, e)}
              />
              <FormInput
                type="email"
                label="Email"
                name="email"
                placeholder="-- Enter email --"
                inputType={"input"}
                value={value.email}
                error={errors[index]?.email}
                onChange={(e) => handleChange(index, e)}
              />
              <FormInput
                type="text"
                label="Phone"
                name="phone"
                placeholder="-- Enter phone --"
                inputType={"input"}
                value={value.phone}
                error={errors[index]?.phone}
                onChange={(e) => handleChange(index, e)}
              />
              <FormInput
                type="text"
                label="Message"
                name="message"
                placeholder="-- Enter message --"
                inputType={"textarea"}
                value={value.message}
                error={errors[index]?.message}
                onChange={(e) => handleChange(index, e)}
              />
            </div>
          );
        })}

        <div className="flex justify-between items-center px-8">
          <button
            className="flex justify-start items-center cursor-pointer"
            onClick={handleAddField}
            type="button"
          >
            <AddIcon />
            <p className="text-sm text-[#1034A6] font-medium ml-3">
              Add another
            </p>
          </button>
          <div className="flex flex-end justify-end items-center">
            <button
              type="button"
              className="mr-3 text-gray-900 cursor-pointer"
              onClick={clearAllInputs}
            >
              Cancel
            </button>
            <button
              className={`flex bg-gray-900 capitalize hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md ${
                submitted && "opacity-50"
              }`}
              onClick={handleSubmit}
              onKeyDown={handleEnterKeyPress}
              disabled={submitted}
              type={'submit'}
            >
              {submitted && (
                <div aria-label="Loading..." role="status" className="mr-1">
                  <LoadingIcon />
                </div>
              )}
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
