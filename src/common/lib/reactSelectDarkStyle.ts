export const reactSelectDarkStyle = {
  placeholder: (defaultStyles: any) => ({
    ...defaultStyles,
    color: "white",
  }),
  option: (defaultStyles: any, state: any) => ({
    ...defaultStyles,
    color: state.isSelected ? "black" : "white",
    backgroundColor: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      cursor: "pointer",
    },
  }),

  control: (defaultStyles: any) => ({
    ...defaultStyles,
    color: "white",
    backgroundColor: "black",
  }),
  singleValue: (defaultStyles: any) => ({ ...defaultStyles, color: "white" }),
};
