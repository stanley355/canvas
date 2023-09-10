import React from "react";
import { TRANS_QUALITY_COMPARISON } from "../lib/constant";
import styles from "./plan.module.scss";
import { createPremiumDiff } from "../lib/createPremiumDiff";

const TransQualityComparisonTable = () => {
  return (
    <div className="mt-12 overflow-x-auto">
      <div className="text-3xl">Quality Measurement</div>
      <div className="mb-4">
        Here we can see the comparison of our translation quality from time to time
      </div>
      <table className={styles.premium__quality__table}>
        <thead>
          <tr>
            <th>Original Text</th>
            <th>2022</th>
            <th>2023</th>
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
