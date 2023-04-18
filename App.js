// const heading=React.createElement("h1",{id:"heading"},"");
const parent=React.createElement("div",{id:"parent"},[React.createElement("h1",{id:"child1"},"I am H1 Tag"),React.createElement("h2",{id:"child1"},"I am H2 Tag")]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
