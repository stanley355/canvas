import { useContext } from "react";
import { CheckbotContext } from "./CheckbotContext";
import CheckbotInstructionSelect from "./CheckbotInstructionSelect";
import CheckbotUserTextarea from "./CheckbotUserTextarea";
import CheckbotResultTextarea from "./CheckbotResultTextarea";

const CheckbotBody = () => {
  const { checkbotStates, checkbotDispatch } = useContext(CheckbotContext);

  return (
    <div className="lg:grid grid-cols-2 gap-2 mb-4">
      <div>
        <CheckbotInstructionSelect checkbotDispatch={checkbotDispatch} />
        <CheckbotUserTextarea
          userText={checkbotStates.userText}
          checkbotDispatch={checkbotDispatch}
        />
      </div>
      {checkbotStates.checkbotResults.length > 0 ? (
        checkbotStates.checkbotResults.map((result, index) => (
          <CheckbotResultTextarea
            key={`checkbot_result_${index}`}
            checkbotResult={result}
          />
        ))
      ) : (
        <CheckbotResultTextarea
          key="checkbot_result"
          checkbotResult={{ base: "", added: [], removed: [] }}
        />
      )}
    </div>
  );
};

export default CheckbotBody;
