console.log("Hey gang");

const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

const onwButton = document.getElementById("onw");
const clearButton = document.getElementById("clear");
const undoButton = document.getElementById("undo");

// This function will log information about the workbook
function logWorkbookInformation() {
  // this function will find the name of the workbook
  workbook = viz.workbook;
  console.log(workbook.name);
  // this will return a list of published sheets
  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index ${index} is ${element.name}`);
  });

  //   find the active sheet
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is ${vizActiveSheet.name}`);

  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    index = element.index;
    console.log(`The worksheet with index ${index} is ${element.name}`);
  });
}

viz.addEventListener("firstinteractive", logWorkbookInformation);

function onwFunction() {
  listSheets.forEach((element) => {
    element.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
  });
}

function clearFunction() {
  listSheets.forEach((element) => {
    element.clearFilterAsync("State");
  });
}

function undoFunction() {
  viz.undoAsync();
}

onwButton.addEventListener("click", onwFunction);
clearButton.addEventListener("click", clearFunction);
undoButton.addEventListener("click", undoFunction);
