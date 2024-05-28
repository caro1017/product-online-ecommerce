import { StepContent } from "./Section/StepContent/StepContent";
import { NavBar } from "../../layout/NavBar/NavBar";
import { FooterBar } from "../../layout/FooterBar/FooterBar";

const PaymentPage = () => {
  return (
    <>
      <NavBar />
      <div className="mt-32 lg:mt-36 mb-20 text-black">
        <StepContent />
      </div>
      <FooterBar />
    </>
  );
};

export default PaymentPage;
