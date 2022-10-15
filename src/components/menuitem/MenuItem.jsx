import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React from "react";
import SubMenu from "../submenu/SubMenu";
import "./menuitem.scss";
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
          {sub_menu.map((menu) => (
            <SubMenu key={menu.id} {...menu} />
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuItem;
