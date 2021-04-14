import "./css/styles.css";
const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const date = new Date();
document.querySelector("#date").innerHTML = `
  ${date.getDate()}
  de
  ${months[date.getMonth()]}
  del
  ${date.getFullYear()}
`;
