import React from "react";

const TranslateComparison = () => {
  return (
    <div className="leading-4">
      <h3 className="text-lg">Comparing LangAI Translate vs Google Translate</h3>
      <div>
        <div>1. Meaningful translation</div>
        <div>
          Creoles, especially those that borrow many words from other languages,
          are notoriously hard to translate. We tasked both LangAI and Google
          Translate to interpret a creole called "Pidgin English," which is
          spoken in West Africa.
        </div>
        <div>Below is the source text:</div>
        <div className="italic">
          "Wetin come happen na. Since you say you go come help me with that
          thing, I no come see your brake light. Wetin sup?"
        </div>
        <div>
          In the source text, the speaker is complaining to the reader that they
          promised to help with a task but hasn't turned up since then. Then
          concludes with "What's happening?"
        </div>
        <div>
          While Google Translate understands "Pidgin English '' to some extent,
          it failed woefully at translating the source text. Part of the problem
          is due to Google Translate's limited ability to distinguish creole
          from English because of the presence of English words.
        </div>
        <div>
          <img src="/images/testimony/gtrans_creola.webp" alt="gtrans_creola" />
        </div>
        <div>
          Although not flawlessly, LangAI's interpretation was able to clearly
          convey the meaning and intent of the speaker. Considering the highly
          contextual nature of Pidgin English, the results are very impressive.
        </div>
        <div>
          <img src="/images/testimony/langai_creola.webp" alt="langai_creola" />
        </div>
        <div>Below is another example of Meaningful translation</div>
        <div>Google Translate: plz d ya know what to do</div>
        <div>
          <img
            src="/images/testimony/gtrans_meaning.webp"
            alt="langai_creola"
          />
        </div>
        <div>LangAI Translate: plz d ya know what to do</div>
        <div>
          <img
            src="/images/testimony/langai_meaning.webp"
            alt="langai_creola"
          />
        </div>
      </div>
    </div>
  );
};

export default TranslateComparison;