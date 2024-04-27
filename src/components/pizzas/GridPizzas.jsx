import { ItemType } from "../ItemType";

export const GridPizzas = ({ items }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
        {items &&
          items.map((item) => {
            return <ItemType key={item.itemsTypeId} item={item} />;
          })}
      </div>
    </>
  );
};
