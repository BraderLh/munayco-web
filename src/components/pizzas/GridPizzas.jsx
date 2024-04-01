import { ItemType } from "../ItemType";

export const GridPizzas = ({ items }) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="grid gap-4">
          {items.map((item) => {
            return <ItemType key={item.itemsTypeId} item={item} />;
          })}
        </div>
      </div>
    </>
  );
};
