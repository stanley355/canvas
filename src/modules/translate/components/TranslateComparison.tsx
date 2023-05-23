import React from "react";

const TranslateComparison = () => {
  return (
    <div className="my-8" id="translate_comparison">
      <div className="text-2xl font-semibold mb-4">
        Comparing <i>LanguageAI Translate</i>  vs <i>Google Translate</i> , why are we better?
      </div>

      <p className="mb-4">
        Translating creole languages, especially those that borrow many words from other languages, can be quite challenging. We assigned the task of deciphering a particular creole known as &quot;Pidgin English,&quot; spoken in West Africa, to both LanguageAI and Google Translate.
      </p>

      <p className="mb-4">
        The original text reads, <strong> <i>&quot;Wetin come happen na. Since you say you go come help me with that thing, I no come see your brake light. Wetin sup?&quot; </i> </strong> The speaker&apos;s displeasure at the lack of assistance promised to them is evident in this passage, with the final question &quot;What&apos;s happening?&quot; serving as a conclusion.
      </p>

      <p>
        Here, Google Translate struggled with the text, likely because the presence of English words made it difficult to distinguish between Pidgin English and English itself.
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
        However, though not without some flaws, LanguageAI&apos;s interpretation successfully conveyed the speaker&apos;s meaning and intent. Given the highly contextual nature of Pidgin English, these results are quite impressive.
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

      <div className="font-semibold text-lg">Conclusion</div>
      <div>
        LanguageAI performed better than Google Translate in translation, a type of creole language spoken in West Africa. The speaker in the original text expressed displeasure at a promise of help not being fulfilled, with the question &quot;What&apos;s happening?&quot; serving as a conclusion. Despite its challenges, LanguageAI&apos;s interpretation successfully conveyed the speaker&quot;s meaning and intent.
      </div>
    </div>
  );
};

export default TranslateComparison;
