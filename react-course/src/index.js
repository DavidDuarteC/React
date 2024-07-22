import React from "react";
import ReactDom from "react-dom";

const root = ReactDom.createRoot(document.getElementById("root"));
function Greeting() {
    const married = true
    return <h1>{married? 'Estoy casado': "No estoy casado"}</h1>
}

root.render(
    <Greeting />
);
