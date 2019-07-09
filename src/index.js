import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Invoice from "./models/Invoice";
import { onPatch } from "mobx-state-tree";
import makeInspectable from "mobx-devtools-mst";

const invoice = Invoice.create({ currency: "CAD" });

//debugging for mobx-state-tree
onPatch(invoice, patch => {
  console.log(patch);
});
makeInspectable(invoice);

ReactDOM.render(<App invoice={invoice} />, document.getElementById("root"));
serviceWorker.unregister();
