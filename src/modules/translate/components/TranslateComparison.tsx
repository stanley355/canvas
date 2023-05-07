import React from "react";
import Image from "next/image";

const TranslateComparison = () => {
  return (
    <div className="my-8" id="translate_comparison">
      <div className="text-2xl mb-4">
        Comparing LanguageAI Translate vs Google Translate
      </div>
      <p className="mb-4">
        Creoles, especially those that borrow many words from other languages,
        are notoriously hard to translate. We tasked both LanguageAI and Google
        Translate to interpret a creole called &quot;Pidgin English,&quot; which
        is spoken in West Africa. Source Text:
      </p>

      <p className="italic mb-4">
        Source Text: &quot;Wetin come happen na. Since you say you go come help
        me with that thing, I no come see your brake light. Wetin sup?&quot;
      </p>

      <p className="mb-4">
        The speaker in the original text expresses dissatisfaction to the reader
        regarding a promise to assist with a task that has not been fulfilled
        yet. The speaker concludes by asking &quot;What&apos;s happening?&quot;.
        Google Translate struggled to translate the source text adequately,
        likely due to the difficulty in distinguishing between creole and
        English since English words were present.
      </p>
      <div className="mb-4">
        <img
          src="/images/testimony/gtrans_creola.webp"
          alt="gtrans_creola"
          className="rounded-md"
          loading="lazy"
          width={1264}
          height={383}
        />
      </div>

      <p className="mb-4">
        Although not flawlessly, LanguageAI&apos;s interpretation was able to
        clearly convey the meaning and intent of the speaker. Considering the
        highly contextual nature of Pidgin English, the results are very
        impressive.
      </p>

      <div className="mb-4">
        <img
          src="/images/testimony/langai_creola.webp"
          alt="langai_creola"
          className="rounded-md border border-white"
          loading="lazy"
          width={1264}
          height={383}
        />
      </div>
      <p className="mb-4">
        Below is another example of Meaningful translation. Google Translate:
        plz d ya know what to do:
      </p>
      <div className="mb-4">
        <img
          src="/images/testimony/gtrans_meaning.png"
          alt="langai_creola"
          className="rounded-md"
          loading="lazy"
        />
      </div>

      <p className="mb-4">LanguageAI Translate: plz d ya know what to do</p>

      <div className="mb-4">
        <img
          src="/images/testimony/langai_meaning.png"
          alt="langai_creola"
          className="rounded-md border border-white"
          loading="lazy"
          width={1264}
          height={354}
        />
      </div>
    </div>
  );
};

export default TranslateComparison;
