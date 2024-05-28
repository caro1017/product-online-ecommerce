import { useState } from "react";
import { CustomStep } from "../../../../common/CustomStep/CustomStep";
import { CustomButtons } from "../../../../common/CustomButtons/CustomButtons";
import { StepContent_1 } from "./StepContent_1";
import { StepContent_2 } from "./StepContent_2";
import { StepContent_3 } from "./StepContent_3";
import { ConfirmOrder } from "../SummaryPurchase/ConfirmOrder";

export const StepContent = () => {
  const steps = ["Datos", "Envio", "Pago"];
  const [activeStep, setActiveStep] = useState(0);
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(null);

  const handleNext = () => {
    // Verificar si estamos en el paso 1 y si no se ha seleccionado ningún método de envío
    if (activeStep === 1 && selectedShippingMethod === null) {
      // Aquí puedes mostrar un mensaje de error o realizar alguna acción adecuada
      console.log("Por favor selecciona un método de envío");
    } else {
      // Avanzar al siguiente paso
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    // Retroceder al paso anterior
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSelectionChange = (index) => {
    if (selectedShippingMethod === index) {
      // Si el usuario selecciona el método que ya estaba seleccionado, lo deseleccionamos
      setSelectedShippingMethod(null);
    } else {
      // Si el usuario selecciona un método diferente, lo seleccionamos
      setSelectedShippingMethod(index);
    }
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <StepContent_1 />;
      case 1:
        return <StepContent_2 handleSelectionChange={handleSelectionChange} />;
      case 2:
        return <StepContent_3 />;
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div className="px-2 md:px-10 lg:px-36">
      <CustomStep steps={steps} activeStep={activeStep} />
      <div className="mt-16">
        {activeStep === steps.length ? (
          <div>
            <ConfirmOrder />
            <div className="mt-4 space-x-5 flex justify-end">
              <CustomButtons
                onClick={() => setActiveStep(0)}
                title="Aceptar Envio"
                variant="contained"
                link="#"
              />
            </div>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div className="mt-16 space-x-5 flex justify-end">
              <CustomButtons
                disabled={activeStep === 0}
                onClick={handleBack}
                title="Regresar"
                variant="outlined"
              />
              <CustomButtons
                onClick={handleNext}
                title={activeStep === steps.length - 1 ? "Pagar" : "Confirmar"}
                variant="contained"
                disabled={
                  activeStep === 1 ? selectedShippingMethod === null : false
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
