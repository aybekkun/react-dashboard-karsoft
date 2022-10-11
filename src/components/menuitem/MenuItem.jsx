import React from "react";
import "./menuitem.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SubMenu from "../submenu/SubMenu";
const MenuItem = ({ name, description, sub_menu, count }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="menu">
      <Accordion
        expanded={expanded === "panel"}
        onChange={handleChange("panel")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <h3>
            {name}
            <span>{count}</span>
          </h3>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            {sub_menu.map((menu) => (
              <SubMenu {...menu} />
            ))}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuItem;
