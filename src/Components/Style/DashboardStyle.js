import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  header: {
    textAlign: "center",
    fontSize: "30px",
    "& a": {
      fontWeight: "bold",
      color: "black",
    },
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: "100% !important",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  boxModal: {
    width: "80%",
    minHeight: "393px",
    padding: "2px 16px",
    marginTop: "20px",
    display: "flex",
  },
  container: {
    maxWidth: "1000px",
    alignSelf: "center",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
  },
  masonryModal: {
    columns: 5,
    spacing: 3,
  },
  description: {
    display: "flex",
    textAlign: "center",
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
  },
  paginationContainer: {
    position: "relative",
    top: "50px",
    left: "20px",
  },
  pagination: {
    background: "red",
  },
  buffer: {
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
});

export default useStyle;
