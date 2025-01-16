type InputFieldProps = {
    name: string;
    type: string;
    placeholder: string;
    labelText: string;
    classes?: string;
    id: string;
    error?: string;
    required: boolean;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
  
  const InputField = ({ name, placeholder, type, labelText, classes, id, error, required, value, onChange }: InputFieldProps) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor={id} className="text-sm text-white">
          {labelText}
        </label>
  
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          name={name}
          className={`w-full h-10 px-4 py-2 border-none rounded-[5px] bg-customGray text-[13px] outline-none ${classes || ''}`}
          value={value}
          onChange={onChange}
          required={required}
        />
  
        {error && <span className="text-primary-light text-sm">{error}</span>}
      </div>
    );
  };
  
  export default InputField;
  