/* eslint-disable react/prop-types */
import { Step, StepLabel, Stepper } from "@mui/material";

export const CustomStep = ({ steps, activeStep }) => {
  return (
    <Stepper activeStep={activeStep}>
      {steps.map((label, index) => (
        <Step key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
