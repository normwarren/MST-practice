import React from "react";

export default ({ item }) => (
  <li>
    Item: {item.item} Priority: {item.priority} Status: {item.status}
  </li>
);
