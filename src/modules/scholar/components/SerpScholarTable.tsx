import React from "react";
import Button from "@/common/components/Button";

interface ISearchScholarTable {
  paperList: any[];
}

const SerpScholarTable = (props: ISearchScholarTable) => {
  const { paperList } = props;

  const PaperTable = () => {
    return (
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
            <td>{paper.inline_links.cited_by}</td>
            <td>{paper.publication_info.Summary}</td>
            <td>{paper.snippet}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <table>
      <thead>
        <td>Title</td>
        <td>Cited By</td>
        <td>Summary</td>
        <td>Abstract</td>
      </thead>
      <PaperTable />
    </table>
  );
};

export default SerpScholarTable;