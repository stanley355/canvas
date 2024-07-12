export const convertJsonToCsvData = (
  csvHead: string[],
  objectArray: Record<string, any>
) => {
  const head = csvHead.join(",") + "\n";
  const rows = objectArray
    .map((obj: Record<string, any>) => Object.values(obj).join(","))
    .join("\n");
  return head + rows;
};
