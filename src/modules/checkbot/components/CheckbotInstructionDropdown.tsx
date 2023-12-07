import Select, { SingleValue } from "react-select";
import { CHECKBOT_INSTRUCTION_OPTIONS } from "../lib/checkbotInstructionOptions";
import { useCheckbot } from "../lib/useCheckbot";

const CheckbotInstructionDropdown = () => {
  const { dispatch } = useCheckbot();

  const handleChange = (
    option: SingleValue<{ label: string; value: string }>
  ) => {
    dispatch({
      type: "SET",
      name: "isPersonalInstruction",
      value: option?.value === "personal_instruction",
    });

    dispatch({
      type: "SET",
      name: "checkbotInstruction",
      value: option?.value,
    });
  };

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
        onChange={handleChange}
        styles={styles}
      />
    </label>
  );
};

export default CheckbotInstructionDropdown;
