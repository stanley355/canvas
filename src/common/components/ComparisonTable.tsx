import React from "react";

interface IComparisonTable {
  comparisons: Array<any>;
}

const ComparisonTable = ({ comparisons }: IComparisonTable) => (
  <table className="lg:w-full">
    <thead>
      <tr>
        <th className="border lg:py-2 lg:w-1/3">-</th>
        <th className="border lg:py-2 lg:w-1/3">Original</th>
        <th className="border lg:py-2 lg:w-1/3">Premium</th>
      </tr>
    </thead>
    <tbody>
      {comparisons.map((comparison: any) => (
        <tr key={comparison.title}>
          <td className="border text-center lg:py-2">{comparison.title}</td>
          <td className="border text-center lg:py-2">{comparison.original}</td>
          <td className="border text-center lg:py-2">{comparison.premium}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ComparisonTable;
