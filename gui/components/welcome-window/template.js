console.log("Log:Exporting template for welcome");

export default function (vm) {
  return `
    <div>
    <h1>Добро пожаловать, ${vm._login}</h1>
    </div>
`;
}
