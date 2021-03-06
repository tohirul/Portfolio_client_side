import React from "react";
import { useStyles } from "../../Styles/useStyles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Typewriter } from "react-simple-typewriter";
import Fade from "react-reveal/Fade";

export const Decorator = ({ label, withIcon, styles, centerAlign }) => {
  const classes = useStyles();
  console.log(styles);
  return (
    <Box className={classes.decorator} style={centerAlign ? styles : {}}>
      <div>
        <Typography variant="span" className={classes.decoratorText}>
          {label}
        </Typography>
        <Typography variant="span" className={classes.resumeArrow}>
          {withIcon && (
            <ArrowDownwardIcon
              onClick={() => console.log(classes.resumeArrow)}
            />
          )}
        </Typography>
      </div>
    </Box>
  );
};

export const Divider = ({ style }) => {
  const classes = useStyles();
  return (
    <Box style={style}>
      <Typography variant="span" className={classes.divider}></Typography>
    </Box>
  );
};

export const RenderSectionHeading = ({
  heading,
  description1,
  description2,
  centerAlign,
  width,
  notSpaced,
}) => {
  const classes = useStyles();
  const words = [];
  if (heading) {
    for (let i = 0; i < 5; i++) {
      words.push(heading);
    }
  }
  console.log(words);
  return (
    <Box className={classes.sectionHeadingContainer}>
      <Fade right>
        <Typography
          sx={{ fontWeight: "bold" }}
          variant="h5"
          align={centerAlign ? "center" : "left"}
          className={classes.sectionHeading}
        >
          {words.length === 5 && (
            <span className={classes.headerDesc}>
              {/* Style will be inherited from the parent element */}
              {heading && (
                <Typewriter
                  words={[...words]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={500}
                />
              )}
            </span>
          )}
        </Typography>
      </Fade>
      <Divider style={width} />

      <Fade right>
        <Typography
          variant="body1"
          align={centerAlign ? "center" : "left"}
          className={classes.sectionDesc}
        >
          {description1}
        </Typography>
      </Fade>
      <Fade right>
        <Typography
          variant="body1"
          align={centerAlign ? "center" : "left"}
          className={classes.sectionDesc}
        >
          {description2}
        </Typography>
      </Fade>
    </Box>
  );
};
