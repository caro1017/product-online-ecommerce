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

export const CustomTabs = ({
  titleTab1,
  titleTab2,
  titleTab3,
  content1,
  content2,
  content3,
}) => {
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
            <Tab
              label={titleTab1}
              className="text-salmon normal-case text-[14px] md:text-base font-normal"
            />
            <Tab
              label={titleTab2}
              className="text-salmon normal-case text-[14px] md:text-base font-normal"
            />
            <Tab
              label={titleTab3}
              className="text-salmon normal-case text-[14px] md:text-base font-normal"
            />
          </AntTabs>
        </div>
        {/* Contenido de las pestañas */}
        <div className="lg:w-[900px] mx-auto">
          {value === 0 && <div>{content1}</div>}
          {value === 1 && <div>{content2}</div>}
          {value === 2 && <div>{content3}</div>}
        </div>
      </div>
    </>
  );
};
