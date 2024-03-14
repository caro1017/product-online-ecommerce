import { Grid } from "@mui/material";
import { CustomButtons } from "../../../common/CustomButtons/CustomButtons";
import { Images } from "../../../images/Images";

// Obtener la imagen segun el tamaño de la pantalla
const clothesImagePath =
  window.innerWidth >= 500 ? Images.clothesImage : Images.clothesImageMovil;

const tecnologyImagePath =
  window.innerWidth >= 500 ? Images.airPods : Images.airPodsMovil;

export const BannerHeader = () => {
  return (
    <>
      <Grid container spacing={0}>
        {/* Imagen en la parte superior */}
        <Grid item xs={12}>
          <div
            elevation={3}
            className="h-[550px] bg-gradient-to-r from-yellow to-[#F5C273] md:flex justify-around"
          >
            <div className="pt-20 md:ml-5 md:pt-48 mx-10">
              <div className=" text-black text-center md:text-left">
                <h2 className="text-5xl lg:text-8xl mb-5 static ">
                  <span className="font-light">IPhone 14 </span>Pro
                </h2>
                <p className="mb-5 md:mb-10">
                  Face ID, acelerómetro, giroscopio, proximidad, brújula.
                </p>
              </div>
              <div className="text-center md:text-left ">
                <CustomButtons title="Comprar" variant="outlined" />
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                src={Images.iphoneImage}
                alt="IPhone 14"
                className="mt-6 md:mt-16 ml-2 lg:ml-0 overflow-hidden"
              />
            </div>
          </div>
        </Grid>

        {/* Galería Inferior */}
        <Grid item md={6} xs={12}>
          <Grid container spacing={0}>
            {/* Imagen en la parte superior */}
            <Grid item xs={12}>
              <div
                elevation={3}
                className="md:h-80 bg-white md:flex text-black"
              >
                <div className="overflow-hidden">
                  <img
                    src={Images.healthImage}
                    alt="healthImage"
                    className="mt-6 md:mt-16 ml-2 lg:ml-0 mb-4 overflow-hidden static"
                  />
                </div>
                <div className=" md:mt-28 text-center md:text-left mx-10">
                  <h2 className="text-5xl lg:text-6xl mb-5 static ">
                    Vida Plena
                  </h2>
                  <p className="mb-10">
                    Encontrarás una amplia gama de productos y recursos
                    dedicados a mejorar tu salud y calidad de vida.
                  </p>
                </div>
              </div>
            </Grid>

            {/* Imágenes en la parte inferior */}
            <Grid item xs={12} sm={6} md={6}>
              <div elevation={3} className="md:h-60 ">
                <div
                  elevation={3}
                  className="md:h-60  bg-lightGrey md:flex text-black"
                >
                  <div className="flex items-center justify-center overflow-hidden">
                    <img src={clothesImagePath} alt="Clothes" />
                  </div>

                  <div className="md:absolute md:ml-48 md:w-44 md:mt-12 lg:mt-12 md:text-left mx-2 text-center pb-5">
                    <h2 className="text-4xl static mb-2">
                      <span className="font-light">Estilos que </span>
                      Inspira
                    </h2>
                    <p>Desde prendas de alta calidad</p>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} sm={6} md={6}>
              <div elevation={3} className="md:h-60 ">
                <div
                  elevation={3}
                  className="md:h-60 bg-yellow md:flex text-black"
                >
                  <div className="flex items-center justify-center overflow-hidden">
                    <img
                      src={tecnologyImagePath}
                      alt="Tecnology"
                      className="my-5"
                    />
                  </div>

                  <div className="md:absolute md:ml-48 md:w-44 md:mt-12 lg:mt-12 md:text-left mx-2 text-center pb-5">
                    <h2 className="text-4xl static mb-2">
                      <span className="font-light">AirPods </span>Max
                    </h2>
                    <p>Audio computacional. Escucha, es poderoso</p>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* Imagen en el lado derecho */}
        <Grid item md={6} xs={12}>
          <div
            elevation={3}
            className="lg:h-[560px] bg-[#E8E7E5] flex flex-col justify-between"
          >
            <div className="text-center md:text-left mx-10">
              <h2 className="text-4xl static mb-5 pt-14 md:pt28">
                <span className="font-light">Hogar </span>Venecia
              </h2>
              <p className="md:w-96 mb-9">
                Encontrarás una amplia gama de productos y recursos dedicados a
                mejorar tu salud y calidad de vida.
              </p>
              <div className="absolute text-center md:text-left">
                <CustomButtons title="Comprar" variant="outlined" />
              </div>
            </div>

            <div className="overflow-hidden w-full mt-auto">
              <img src={Images.homeImage} alt="" />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
