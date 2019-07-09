import { types } from "mobx-state-tree";
import Item from "./Item";

const ItemList = types
  .model("ItemsList", {
    items: types.array(Item)
  })
  .actions(self => ({
    add(item) {
      self.items.push(item);
    }
  }));

export default ItemList;
