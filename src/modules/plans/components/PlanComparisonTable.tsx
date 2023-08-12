import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import styles from "./plan.module.scss";

const PlanComparisonTable = () => (
  <div id="comparison">
    <div className="text-3xl mb-4">
      What&apos;s included in all Premium Plans?
    </div>
    <table className={styles.plan__table}>
      <thead>
        <tr>
          <th>Features</th>
          <th>Non-premium</th>
          <th>Premium</th>
        </tr>
      </thead>
      <tbody className="">
        <tr>
          <td>Language Translate</td>
          <td>
            <FaCheck />{" "}
          </td>
          <td>
            <FaCheck />{" "}
          </td>
        </tr>
        <tr>
          <td>Grammar, Spelling, and Punctuation</td>
          <td>
            <FaCheck />{" "}
          </td>
          <td>
            <FaCheck />{" "}
          </td>
        </tr>
        <tr>
          <td>Security</td>
          <td>
            <FaCheck />{" "}
          </td>
          <td>
            <FaCheck />{" "}
          </td>
        </tr>
        <tr>
          <td>Doctrans Access (Soon)</td>
          <td>
            <FaCheck />{" "}
          </td>
          <td>
            <FaCheck />{" "}
          </td>
        </tr>
        <tr>
          <td>LanguageGPT Access (Soon)</td>
          <td>
            <FaTimes />{" "}
          </td>
          <td>
            <FaCheck />{" "}
          </td>
        </tr>
        <tr className="font-semibold">
          <td>Language Update</td>
          <td>Six Month </td>
          <td>Every Month </td>
        </tr>
        <tr>
          <td>Consistency in Translation</td>
          <td>Normal</td>
          <td>High</td>
        </tr>
        <tr>
          <td>Consistency in Checkbot</td>
          <td>Normal</td>
          <td>High</td>
        </tr>
        <tr className="font-semibold">
          <td>Quality</td>
          <td>Normal</td>
          <td>High</td>
        </tr>
        <tr className="font-semibold">
          <td>Word Limit</td>
          <td>4k</td>
          <td>8k</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default PlanComparisonTable;
