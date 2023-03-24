import React from "react";
import Button from "@/common/components/Button";
import styles from "../ScholarTable.module.scss";

interface ISearchScholarTable {
  paperList: any[];
}

const SemanticScholarTable = (props: ISearchScholarTable) => {
  const { paperList } = props;

  const handlePaperAuthors = (authors: any[]) => {
    return authors.map((author: any) => author.name).join(",");
  };

  const PaperTable = () => (
    <tbody>
      {paperList.map((paper: any) => (
        <tr key={paper.paperId}>
          <td>
            <Button
              type="link"
              href={paper.url}
              title={paper.title}
              wrapperClassName="text-blue-200 hover:underline"
            />
            <div>({paper.year})</div>
          </td>
          <td>{paper.citationCount}</td>
          <td>{handlePaperAuthors(paper.authors)}</td>
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
          <th>Cited By</th>
          <th>Author</th>
          <th>Abstract</th>
        </tr>
      </thead>
      <PaperTable />
    </table>
  );
};

export default SemanticScholarTable;
