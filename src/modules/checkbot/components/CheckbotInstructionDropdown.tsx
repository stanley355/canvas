import Select from "react-select";
import { CHECKBOT_INSTRUCTION_OPTIONS } from "../lib/checkbotInstructionOptions";

const CheckbotInstructionDropdown = () => {
  const styles = {
    control: (defaults: any) => ({
      ...defaults,
      border: "1px solid gray",
    }),
    placeholder: (defaults: any) => ({
      ...defaults,
      color: "black",
    }),
  };
  return (
    <label htmlFor="checkbot_instruction_select">
      <Select
        placeholder="What can I help you with?"
        name="checkbot_instruction"
        options={CHECKBOT_INSTRUCTION_OPTIONS}
        className="w-full text-black mb-2 border-black"
        id="checkbot_instruction_select"
        aria-label="checkbot_instruction_select"
        aria-labelledby="checkbot_instruction_select"
        onChange={(option) => console.log(option)}
        styles={styles}
      />
    </label>
  );
};

export default CheckbotInstructionDropdown;
