/* eslint-disable react/prop-types */
import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import styled from "@emotion/styled";

const AntTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#D0665B",
    height: "1.5px",
  },
});

export const CustomTabs = ({ tabs }) => {
  /* Estado para cambiar de valor de cada tab */
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div>
        <div className="w-full flex justify-center py-10">
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label="Custom Tabs"
            textColor="inherit"
          >
            {tabs.map((tab, index) => (
              <Tab
                key={index}
                label={tab.title}
                className="text-salmon normal-case text-[14px] md:text-base font-normal"
              />
            ))}
          </AntTabs>
        </div>
        {/* Contenido de las pestañas */}
        <div className="lg:w-[900px] mx-auto">
          {tabs.map((tab, index) => (
            <div
              key={index}
              style={{ display: value === index ? "block" : "none" }}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
