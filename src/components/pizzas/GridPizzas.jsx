import { ItemType,} from "../ItemType";

export const GridPizzas = ({ items }) => {
  return (
    <>
      <div className="h-full grid grid-rows-4 grid-cols-1 auto-cols-max gap-2 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 md:auto-cols-min xl:auto-cols-max">
        {items.map((item) => {
          return (
            <ItemType 
              key={item.itemsTypeId}
              item={item}
            />
          );
        })}
      </div>
    </>
  );
};
