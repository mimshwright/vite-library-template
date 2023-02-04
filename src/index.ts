export { default as hello } from "./hello";

const title = window.document.createElement("h1");
title.innerText = "Hello world!";
window.document.body.appendChild(title);
