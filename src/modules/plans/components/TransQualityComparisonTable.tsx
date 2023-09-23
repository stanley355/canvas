import React from "react";
import { TRANS_QUALITY_COMPARISON } from "../lib/constant";
import styles from "./plan.module.scss";
import { createPremiumDiff } from "../lib/createPremiumDiff";

const TransQualityComparisonTable = () => {
  return (
    <div className="mt-12 overflow-x-auto">
      <div className="text-3xl">Google Translate vs Language AI</div>
      <div className="mb-4">
        Here we can see that although Google Translate also provides Good Translation
        but Language AI can provide better translation
      </div>
      <table className={styles.premium__quality__table}>
        <thead>
          <tr>
            <th>Original Text</th>
            <th>Google Translate</th>
            <th>Language AI</th>
          </tr>
        </thead>
        <tbody>
          {TRANS_QUALITY_COMPARISON.map((trans: any, index: number) => {
            const diff = createPremiumDiff(trans.nonPremium, trans.premium);
            return (
              <tr key={index}>
                <td>{trans.oriText}</td>
                <td>{diff.removedDiff}</td>
                <td>{diff.addedDiff}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransQualityComparisonTable;
