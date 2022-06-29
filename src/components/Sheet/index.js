import ReactGoogleSheets from 'react-google-sheets';
 
 
export const Sheet = () => {
  return (
    // <ReactGoogleSheets 
    //   clientId={YOUR_CLIENT_ID}
    //   apiKey={YOUR_API_KEY}
    //   spreadsheetId={YOUR_SPREADSHEET_ID}
    //   afterLoading={() => this.setState({sheetLoaded: true})}
    // >
    //   {this.state.sheetLoaded ? 
    //     <div>
    //       {/* Access Data */}
    //       {console.log('Your sheet data : ', this.props.getSheetsData({YOUR_SPREADSHEET_NAME}))}
    //       {/* Update Data */}
    //       <button onClick={() => {
    //         this.props.updateCell(
    //           'sheet02', // sheetName
    //           'E', // column
    //           13, // row
    //           'Apple', // value
    //           null, // successCallback
    //           (error) => {
    //             console.log('error', error)
    //           } // errorCallback
    //         );
    //       }}>update cell!</button>
    //     </div>
    //     :
    //     'loading...'
    //   }
    // </ReactGoogleSheets>
    <></>
  )
}
 
export default ReactGoogleSheets.connect(Sheet);
 
 