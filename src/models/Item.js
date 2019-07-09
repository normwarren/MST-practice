import { types } from "mobx-state-tree";

const Item = types.model("Item", {
  item: types.string,
  priority: types.string,
  status: types.string
});
export default Item;
