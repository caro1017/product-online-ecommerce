import { BannerHeader } from "../../common/BannerHeader/BannerHeader";
import { NavBar } from "../../layout/NavBar/NavBar";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="mt-14 md:mt-16 lg:mt-[6.2rem] mb-5">
        <BannerHeader />
      </div>
    </>
  );
};
