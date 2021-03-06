import { makeStyles } from "@material-ui/core";
import { Themes } from "./../Components/Themes/Themes";

export const useStyles = makeStyles((theme) => ({
  //Top Banner Styling for landing page
  root: {
    width: "100%",
    minHeight: "100vh",
    height: "auto",
    backgroundColor: Themes.colors.base1,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    boxSizing: "border-box",
  },
  //Styling of  Section containing landing banner information
  headerContainer: {
    width: "100%",
    boxSizing: "border-box",
    height: "auto",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "left",
    textShadow: "2px 2px 1px black",
    [theme.breakpoints.down("md")]: {
      padding: "50% 5% 0 10%",
    },
    [theme.breakpoints.up("md")]: {
      padding: "30% 5% 0 15%",
    },
  },
  // Top Banner information heading
  headerTitle: {
    textAlign: "left",
    fontSize: "2rem",
    color: Themes.colors.base2,
  },
  // Top Banner information description
  headerDesc: {
    textAlign: "left",
    color: Themes.colors.base2,
  },
  // Material UI AppBar Customization
  navbar: {
    background: "transparent",
    backgroundColor: Themes.colors.base1,
    color: Themes.colors.base2,
    flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      marginBottom: 56,
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: 64,
    },
  },
  // Material UI Toolbar Customization
  toolbar: {
    width: "100%",
    padding: "1% 5%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // Font for navbar
  navFont: {
    fontFamily: "'Comforter', cursive",
  },
  // Font for navbar buttons
  navLinks: {
    color: Themes.colors.base2,
    textDecoration: "none",
  },
  // Resume Download Button Styling
  decorator: {
    display: "flex",
    margin: "5px 0",
    padding: "5px 0",
    color: Themes.colors.base2,
    textShadow: "1px 1px 0px black",
    fontWeight: "bolder",
    fontFamily: "'Roboto', sans-serif",
    position: "relative",
    // pseudo element before
    "&:before": {
      width: "45px",
      height: "45px",
      backgroundColor: Themes.colors.primary,
      content: "''",
      borderRadius: "50%",
    },
    "&:hover:before": {
      backgroundColor: "#EEBC1D",
    },
  },
  // Resume Button text Styling
  decoratorText: {
    lineHeight: "45px",
    position: "absolute",
    left: "20px",
  },
  // Resume Button Arrow Styling
  resumeArrow: {
    lineHeight: "18px",
    position: "absolute",
    top: "15px",
    left: "80px",
    fontWeight: "bold",
    transition: "all .9s ease",
    "&:hover ": {
      transform: "scale(1.3)",
    },
  },

  // Styles for Particles
  particles: {
    zIndex: 999,
  },

  // Styles For Web Application Body
  section: {
    backgroundColor: Themes.colors.base1,
    padding: theme.spacing(15, 0, 8, 0),
    minHeight: "100vh",
    boxSizing: "border-box",
  },

  // Style For About ME section
  sectionHeadingContainer: {
    padding: theme.spacing(1),
  },

  // Styles For Section Title Divider
  divider: {
    display: "block",
    height: "4px",
    backgroundColor: Themes.colors.primary,
    "&:hover": {
      backgroundColor: "gold",
    },
  },
  // About Me image responsive Styling
  responsiveImage: {
    width: "100%",
    height: "auto",
  },
  // About Me Title
  sectionHeading: {
    fontWeight: 700,
    color: Themes.colors.base2,
  },
  // About Me Description
  sectionDesc: {
    color: Themes.colors.base2,
  },

  // Projects Section
  projects: {
    backgroundColor: Themes.colors.base1,
    minHeight: "100vh",
    boxSizing: "border-box",
    paddingTop: "5%",
  },
  // Style for projectCard
  projectCard: {
    border: `2px solid ${Themes.colors.primary}`,
    borderBottom: "none",
    borderRadius: "6px",
    backgroundColor: "#16161d",
  },
  // Style For Project Card
  projectDetails: {
    color: Themes.colors.base2,
  },
  // Style For Forms
  form: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
  },

  // Style For form Items
  formItems: {
    width: "300px",
    background: "none",
    padding: "15px 18px",
    marginTop: "10px",
    marginLeft: "10px",
    border: `1px solid ${Themes.colors.primary}`,
    borderRadius: "55px",
    outline: "none",
    color: "white",
    "&:focus": {
      borderColor: "yellow",
    },
  },

  buttonSubmit: {
    width: "90px",
    marginTop: "10px",
    marginLeft: "20px",
    padding: "6px 22px",
    borderRadius: "12px",
    borderColor: Themes.colors.primary,
    background: "none",
    color: "white",

    "&:hover": {
      color: "gold",
      borderColor: "gold",
    },
  },
}));
