import { createElement } from "./createElement";

const app = document.querySelector<HTMLDivElement>("#app")!;

const hello = (name: string): string => {
  return `Hello, ${name}!`;
};

app.innerHTML = `
  <h1>${hello("TypeScript")}</h1>
  <p>This is a Vite + TypeScript project.</p>
`;

const sampele = createElement("input");
const sample2 = createElement("input", null, "a");

console.log({ sampele, sample2 });
