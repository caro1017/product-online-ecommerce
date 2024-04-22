import { CustomSelect } from "../../../common/CustomSelect/CustomSelect";
export const Filters = () => {
  // Listado de los items que tendra el selector
  const menuItems = [
    { value: 10, label: "Defecto" },
    { value: 20, label: "Menor precio" },
    { value: 30, label: "Mayor precio" },
  ];
  
  return (
    <>
      <div className="m-10 flex justify-end md:px-20">
        <p className="text-grey mt-8 px-2"> Ordenar por </p>
        <CustomSelect initialValue="Filtrar" menuItems={menuItems} />
      </div>
      <div className="flex">
        <p className="bg-salmon">Filtros</p>
        <p className="bg-yellow">Card Filtros</p>
      </div>
    </>
  );
};
