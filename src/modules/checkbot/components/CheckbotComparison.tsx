import React from "react";

const CheckbotComparison = () => (
  <div id="checkbot_comparison">
    <div className="text-2xl mb-4 font-semibold">
      Comparing our <i> Checkbot</i> vs <i> Grammarly</i>, why are we better?
    </div>

    <p className="mb-4">
      LanguageAI Checkbot can check grammar, spelling, and punctuation errors for free.
      It utilizes  the power of cutting-edge AI technology to improve the grammar, spelling, style, tone, and clarity of written content.
      In addition, it can provide variety of changes to your text, so it is important to regenerate the text to achieve desirable results.
      In comparison, Grammarly is a more conservative grammar checker that offers a narrower range of suggestions for improving your writing and
      it focuses primarily on grammar and spelling errors. Here, we will use an example of well-written source text as a reference to demonstrate the comparison of LanguageAI Checkbot vs Grammarly. Text:
    </p>

    <div className="mb-4">
      <img
        src="/images/testimony/sourcetext_checkbot.webp"
        alt="Grammar Check Text"
        loading="lazy"
        className="rounded-md lg:mx-auto"
        width={697}
        height={500}
      />
    </div>

    <div id="first_round">
      <p className="mb-2 text-lg font-semibold">1st Round: Grammarly Free vs LanguageAI Checkbot</p>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <div>
          <div className="mb-4">
            <img
              src="/images/testimony/grammarly_free.png"
              alt="Grammar Check Text"
              loading="lazy"
              className="rounded-md"
              width={631}
              height={550}
            />
          </div>
          <div className="mb-4">
            <strong>Grammarly Check: Minimal Changes to Well-Written Text</strong>
            <p>
              In the picture, Grammarly was used to check a well-written text. The text was free of grammar errors, but the revisions were minimal.
              The changes were minor and did not significantly alter the meaning of the text. The total percentage of the passage that was rewritten was 4%.
              These findings suggest that Grammarly can improve the quality of your writing. However, it is not a perfect tool.
              It make changes that you do not agree with, and it does not catch all grammar errors.
            </p>
          </div>
        </div>
        <div>
          <div className="mb-4">
            <img
              src="/images/testimony/checkbot_light.png"
              alt="Grammar Check Text"
              loading="lazy"
              className="rounded-md"
              width={631}
              height={550}
            />
          </div>
          <div className="mb-4">
            <strong>LanguageAI Checkbot Grammar Check: Improves Your Writing with 10-20% Changes:</strong>
            <p>
              One of the features of LanguageAI Checkbot is the &quot;Proofread&quot; instruction.
              This instruction allows you to specify the level of revision that you want LanguageAI Checkbot to make. LanguageAI Checkbot will make changes to your text that will result in a 10-20% change from the original passage.
              It enhances their content while still preserving their voice and it suggest changes to word choice, sentence structure, and punctuation. These changes can help to improve the clarity, conciseness, and overall quality of your writing.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="second_round" className="mt-4">
      <p className="mb-2 text-lg font-semibold">2nd Round: Grammarly Premium vs LanguageAI Checkbot</p>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <div>
          <div className="mb-4">
            <img
              src="/images/testimony/grammarly_premium.png"
              alt="Grammar Check"
              loading="lazy"
              className="rounded-md"
            />
          </div>
          <div className="mb-4">
            <strong>Grammarly Premium Grammar Check: Deeper Analysis and Improved Writing</strong>
            <p>
              Grammarly Premium is a paid version of Grammarly that offers a deeper analysis of your writing than the free version. Grammarly Premium goes beyond basic corrections and offers suggestions for improving grammar, style, and tone.
              In a recent study, Grammarly Premium was used to check a well-written text. The text was free of grammar errors, but Grammarly Premium still made 17 changes. The changes were minor and did not significantly alter the meaning of the text. The total percentage of the passage that was rewritten was 17%.
              These findings suggest that Grammarly Premium ican improve the quality of your writing. However, it make changes that you do not agree with, and it does not catch all grammar errors.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <img
              src="/images/testimony/checkbot_heavy.png"
              alt="Grammar Check"
              loading="lazy"
              className="rounded-md"
            />
          </div>
          <div className="mb-4">
            <strong>LanguageAI Checkbot Grammar Check: Improve Clarity and Flow</strong>
            <p>
              LanguageAI Checkbot checks for grammar, spelling, and punctuation errors, and offers suggestions for improvement.
              One of the features of LanguageAI Checkbot is the &quot;Proofread&quot; instruction. This instruction allows you to specify the level of revision that you want LanguageAI Checkbot to make. You can also add additional instructions to the personal instruction, such as &quot;improve the clarity and flow.&quot;
              When you add the &quot;improve the clarity and flow&quot; instruction to the personal instruction, it will make changes to your text that will improve the clarity and flow of your writing. LanguageAI Checkbot willl suggest changes to word choice, sentence structure, and punctuation.
              In the example above, the writing has been significantly improved by adding the &quot;improve the clarity and flow&quot; instruction to the personal instruction. The writing is now more concise and easier to read. The changes made by LanguageAI Checkbot have also improved the flow of the writing.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-4">
      <p className="mb-2 text-xl font-semibold">Conclusion: LanguageAI Checkbot Wins</p>
      <div>
        LanguageAI Checkbot is a free online tool that helps you improve the quality of your writing. It checks for grammar, spelling, and punctuation errors, and offers suggestions for improvement.
        While Grammarly can also do similar things, it make changes that you do not agree with, and it does not catch all grammar errors. Thereby, If you are looking for a way to improve the quality of your writing, Checkbot is a great option. It is free, easy to use, and can help you catch errors that you might otherwise miss.
        By following these tips, you can get the most out of Checkbot and improve your writing.
      </div>
    </div>
  </div>
);

export default CheckbotComparison;
