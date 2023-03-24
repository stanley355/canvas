import React from "react";
import classNames from "classnames";
import Button from "@/common/components/Button";
import styles from "../ScholarTable.module.scss";

interface ISearchScholarTable {
  paperList: any[];
}

const SemanticScholarTable = (props: ISearchScholarTable) => {
  const { paperList } = props;

  const PaperTable = () => (
    <tbody>
      {paperList.map((paper: any) => (
        <tr key={paper.paperId}>
          <td>
            <Button
              type="link"
              href={paper.url}
              title={paper.title}
              wrapperClassName="text-blue-200"
            />
          </td>
          <td>{paper.year}</td>
          <td>
            {paper.author.reduce((a: any, b: any) => a.name + "," + b.name)}
          </td>
          <td>{paper.citationCount}</td>
          <td>{paper.abstract}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <table className={styles.scholar__table}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Author</th>
          <th>Cited By</th>
          <th>Abstract</th>
        </tr>
      </thead>
      <PaperTable />
    </table>
  );
};

export default SemanticScholarTable;
