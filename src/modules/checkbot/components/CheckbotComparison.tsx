import React from "react";

const CheckbotComparison = () => (
  <div id="checkbot_comparison">
    <div className="text-2xl mb-4">
      Comparing LanguageAI Checkbot vs Grammarly
    </div>

    <p className="mb-4">
      One of the main advantages of incorporating LanguageAI Checkbot into
      editing and refining written content is its capacity to collaborate with
      specific prompts. For instance, you can utilize LanguageAI Checkbot to
      enhance the grammar, style, tone, and clarity of your composition. As the
      outcome of the text created by LanguageAI Checkbot usually varies, it is
      important to regenerate the text to achieve desirable results. Conversely,
      Grammarly takes a more cautious approach to its revisions.
    </p>

    <p className="mb-4">
      To exhibit the efficiency of LanguageAI Checkbot in proofreading and
      refining written content, we will utilize a reasonably well-written source
      text, composed by a non-native speaker, as a reference point for our
      comparison. This text will assist us in comprehending how LanguageAI
      Checkbot can impact written content. Source Text:
    </p>

    <div className="mb-4">
      <img
        src="/images/testimony/sourcetext_checkbot.webp"
        alt="Source Text Checkbot"
        loading="lazy"
        className="rounded-md"
        width={697}
        height={471}
      />
    </div>

    <p className="mb-4">
      <strong>Grammarly revision:</strong>
      Grammarly (free) made revisions to the text that primarily address grammar
      errors. But since the text was already well-written, the revisions were
      minimal. 6 changes were made in total, 4% of the passage was rewritten.
    </p>
    <div className="mb-4">
      <img
        src="/images/testimony/grammarly_free.png"
        alt="Source Text Checkbot"
        loading="lazy"
        className="rounded-md"
        width={631}
        height={550}
      />
    </div>

    <p className="mb-4">
      <strong>LanguageAI Checkbot revision (Light):</strong>
      By utilizing the &quot;Proofread this:&quot; personal instruction in
      LanguageAI Checkbot, you can expect to see some solid improvement in your
      writing. On average, a &quot;Proofread this:&quot; personal instruction
      will result in 10-20% change from the original passage. This can help
      writers enhance their content while still preserving their voice. If this
      is too intrusive, a prompt such as &quot;Proofread this but only fix
      grammar&quot; can help reduce the level of revisions.
    </p>
    <div className="mb-4">
      <img
        src="/images/testimony/checkbot_light.png"
        alt="Source Text Checkbot"
        loading="lazy"
        className="rounded-md"
      />
    </div>

    <p className="mb-4">
      <strong>Grammarly Premium revision:</strong>
      Using Grammarly Premium ($10-30 per month), we get a deeper analysis of
      the text than free Grammarly. It goes beyond basic corrections and offers
      suggestions for improving grammar, style, and tone. As you can see, even
      with this level of revision, only 17% of the text was rewritten for this
      particular example.
    </p>
    <div className="mb-4">
      <img
        src="/images/testimony/grammarly_premium.png"
        alt="Source Text Checkbot"
        loading="lazy"
        className="rounded-md"
      />
    </div>

    <p className="mb-4">
      <strong>LanguageAI Checkbot revision (Heavy)</strong>
      By adding additional instructions &quot;Proofread this and improve the
      clarity and flow:&quot; to the personal instruction, we significantly
      enhanced our writing with LanguageAI Checkbot. As demonstrated in the
      markup below, the writing has greatly improved, perhaps even too much.
      Nevertheless, it serves as an example of how your writing can be improved.
    </p>
    <div className="mb-4">
      <img
        src="/images/testimony/checkbot_heavy.png"
        alt="Source Text Checkbot"
        loading="lazy"
        className="rounded-md"
      />
    </div>
  </div>
);

export default CheckbotComparison;
