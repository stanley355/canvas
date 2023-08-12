import React from "react";
import { TRANS_QUALITY_COMPARISON } from "../lib/constant";
import styles from "./plan.module.scss";
import { createPremiumDiff } from "../lib/createPremiumDiff";

const TransQualityComparisonTable = () => {
  return (
    <div className="mt-12 overflow-x-auto">
      <div className="text-3xl">Freemium vs Premium</div>
      <div className="mb-4">
        Here we can see that although Non-premium also provides Good Translation
        but Premium can provide better translation
      </div>
      <table className={styles.premium__quality__table}>
        <thead>
          <tr>
            <th>Original Text</th>
            <th>Non Premium</th>
            <th>Premium</th>
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
