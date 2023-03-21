import React from "react";
import { createRoot } from "react-dom/client";

import XdComponent from "../../src/XdComponent";
const App = () => <XdComponent title="My first component" color={"red"} />;

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
// render(<App />, document.getElementById("root"));
