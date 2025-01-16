type InputProps = {
    id: string;
    name: string;
    type: string;
    placeholder: string;
    labelText?: string;
    classes?: string;
};

const Input = ({ id, name, type, placeholder, labelText, classes }: InputProps) => {
    return (
        <div className={`flex flex-col ${classes || ''}`}>
            {labelText && (
                <label htmlFor={id} className="text-white mb-1">
                    {labelText}
                </label>
            )}
            <input
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                className="w-5/6 h-10 px-4 py-2 border-none rounded-[5px] bg-customGray text-[13px] outline-none"
            />
        </div>
    );
};

export default Input;
