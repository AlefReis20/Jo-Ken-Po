import { StyledInput } from "./styles";

export const Input = ({ placeholder, onChange }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
