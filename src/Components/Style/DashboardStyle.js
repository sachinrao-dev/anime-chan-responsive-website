import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  boxModal: {
    width: "80%",
    minHeight: 393,
    padding: "2px 16px",
    marginTop: "20px",
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
  },
  item: {
    backgroundColor: "grey",
    textAlign: "center",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: 0.3,
    "& hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
  masonryModal: {
    columns: 5,
    spacing: 3,
  },
  description: {
    display: "flex",
    textAlign: "center",
    // alignItems: "center",
  },
  heading: {
    marginRight: "10px",
    marginLeft: "10px",
    fontSize: "25px",
    fontWeight: 600,
  },
  headingDescription: {
    fontSize: "20px",
    inlineHeight: "1px",
    // background: "red",
  },
});

export default useStyle;
