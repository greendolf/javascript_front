console.log("Log:Exporting template for task-table");

export default function (vm) {
  return `
  <style>
      table {
          border: 2px solid grey;
          text-align: center;
          background-color: lightgray;
      }
      
      th {
          border: 1px solid grey;
      }
      
      td {
          border: 1px solid grey;
      }
  </style>
  <input type="button" value="Обновить" id="update-btn">
  <input type="button" value="Добавить" id="add-btn">
  <table id="task-table"></table>
  `;
}
