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
    // justifyContent: "center",
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    flexDirection: "column",
    textAlign: "center",
    margin: "0 auto",
    alignContent: "center",
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
    // background: "red",
    left: "20px",
  },
});

export default useStyle;
