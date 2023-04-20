import React from "react";

const TranslateComparison = () => {
  return (
    <div className="leading-4 text-md my-8">
      <h3 className="text-2xl">
        Comparing LangAI Translate vs Google Translate
      </h3>
      <div>
        <div className="text-xl mb-2">1. Meaningful translation</div>
        <ul className="list-disc ml-4">
          <li className="mb-2">
            Creoles, especially those that borrow many words from other
            languages, are notoriously hard to translate. We tasked both LangAI
            and Google Translate to interpret a creole called "Pidgin English,"
            which is spoken in West Africa.
          </li>
          <li className="italic mb-2">
            Source Text: "Wetin come happen na. Since you say you go come help
            me with that thing, I no come see your brake light. Wetin sup?"
          </li>
          <li className="mb-2">
            In the source text, the speaker is complaining to the reader that
            they promised to help with a task but hasn't turned up since then.
            Then concludes with "What's happening?"
          </li>
          <li className="mb-2">
            While Google Translate understands "Pidgin English '' to some
            extent, it failed woefully at translating the source text. Part of
            the problem is due to Google Translate's limited ability to
            distinguish creole from English because of the presence of English
            words.
          </li>
        </ul>

        <div className="mb-2">
          <img
            src="/images/testimony/gtrans_creola.webp"
            alt="gtrans_creola"
            className="w-full border border-white"
            loading="lazy"
          />
        </div>
        <ul className="list-disc ml-4 my-4">
          <li>
            Although not flawlessly, LangAI's interpretation was able to clearly
            convey the meaning and intent of the speaker. Considering the highly
            contextual nature of Pidgin English, the results are very
            impressive.
          </li>
        </ul>
        <div className="mb-4">
          <img
            src="/images/testimony/langai_creola.webp"
            alt="langai_creola"
            className="w-full border border-white"
            loading="lazy"
          />
        </div>
        <ul className="list-disc ml-4 my-4">
          <li className="mb-4">Below is another example of Meaningful translation</li>
          <li>Google Translate: plz d ya know what to do</li>
        </ul>

        <div className="mb-4">
          <img
            src="/images/testimony/gtrans_meaning.png"
            alt="langai_creola"
            className="w-full border border-white"
            loading="lazy"
          />
        </div>
        <ul className="list-disc ml-4 my-4">
          <li>LangAI Translate: plz d ya know what to do</li>
        </ul>
        <div>
          <img src="/images/testimony/langai_meaning.png" alt="langai_creola"  className="w-full border border-white"
            loading="lazy"/>
        </div>
      </div>
    </div>
  );
};

export default TranslateComparison;
