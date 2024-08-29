/* eslint-disable jsx-a11y/no-autofocus */
import Input from "./input";
import ValidatedInput from "./validatedInput";
import VStackFull from "./vStackFull";
import Text from "./text";

interface InputVStackProps {
  isValidated?: boolean;
  validationMin?: number;
  validationMax?: number;
  autoFocus?: boolean;
  isRequired?: boolean;
  style?: React.CSSProperties;
  label: string;
  isEditable?: boolean;
  className?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  textSize?: string;
  textColor?: string;
  textClassName?: string;
}

export default function InputVStack({
  autoFocus = false,
  validationMin,
  validationMax,
  isRequired,
  label,
  style,
  className,
  isValidated,
  name,
  placeholder,
  value,
  defaultValue,
  type,
  onChange,
  textSize = "text-lg",
  textColor = "text-col-300 textShadow",
  textClassName,
}: InputVStackProps) {
  return (
    <VStackFull
      className={`${className}`}
      align="items-start"
      style={style}
      gap="gap-0.3vh"
      tabIndex={-1}
    >
      <Text className={`${textSize} ${textColor} ${textClassName}`}>
        {label}
      </Text>
      {isValidated && validationMax ? (
        <ValidatedInput
          autoFocus={autoFocus}
          isRequired={isRequired}
          min={validationMin}
          max={validationMax}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={onChange}
          className="w-full"
        />
      ) : (
        <Input
          autoFocus={autoFocus}
          required={isRequired}
          name={name}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          type={type}
          onChange={onChange}
          className="w-full"
        />
      )}
    </VStackFull>
  );
}
