export function addDataValues(response, spreadsheetData, columns) {
  var spreadsheet = response.result
  var spreadsheetId = response.result.spreadsheetId;

  var valuesSheet1 = [columns]

  spreadsheetData.forEach(country => {
    var row = []
    columns.forEach(heading => {
      row.push(country[heading])
    })
    valuesSheet1.push(row)
  })

  // var valuesSheet2 = 

  var data = [];
  data.push(
    {
      range: "Sheet1",
      values: valuesSheet1
    },
    // {
      // range: "Sheet2",
      // values: valuesSheet2
    // }
  );

  var body = {
    data: data,
    valueInputOption: "USER_ENTERED"
  };

  // window.gapi.client.sheets.spreadsheets.values.batchUpdate({
  //   spreadsheetId: spreadsheetId,
  //   resource: body
  // }).then(() => addFormatting(spreadsheet));
}