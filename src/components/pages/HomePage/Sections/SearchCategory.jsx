import { CardCategory } from "../../../common/Card/CardCategory";

const categoriesItems = [
  { title: "Moda", icon: <i className="bx bx-closet" /> },
  { title: "Tecnologia", icon: <i className="bx bx-laptop" /> },
  { title: "Hogar", icon: <i className="bx bx-home-smile" /> },
  { title: "Salud", icon: <i className="bx bx-spa" /> },
];

export const SearchCategory = () => {
  return (
    <>
      <div className="w-full h-full py-2 bg-[#FAFAFA]">
        <h2 className="text-center text-2xl py-8">Buscar por categoría</h2>
        <div className="flex flex-wrap justify-center pb-8">
          {categoriesItems.map((categoriesItems, index) => (
            <div key={index} className="py-2 px-0 md:px-1">
              <CardCategory
                icon={categoriesItems.icon}
                title={categoriesItems.title}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
