import React from "react";
import classNames from "classnames";
import Button from "@/common/components/Button";
import styles from "../ScholarTable.module.scss";

interface ISearchScholarTable {
  paperList: any[];
}

const SerpScholarTable = (props: ISearchScholarTable) => {
  const { paperList } = props;

  const PaperTable = () => (
    <tbody>
      {paperList.map((paper: any) => (
        <tr>
          <td>
            <Button
              type="link"
              href={paper.link}
              title={paper.title}
              wrapperClassName="text-blue-200"
            />
          </td>
          <td>{paper.inline_links.cited_by?.total}</td>
          <td>{paper.publication_info.summary}</td>
          <td>{paper.snippet}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <table className={styles.scholar__table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Cited By</th>
          <th>Summary</th>
          <th>Abstract</th>
        </tr>
      </thead>
      <PaperTable />
    </table>
  );
};

export default SerpScholarTable;
