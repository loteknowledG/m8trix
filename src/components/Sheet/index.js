import React, { useEffect, useState } from 'react'
import ReactGoogleSheets from 'react-google-sheets';
 
 
export const Sheet = () => {
  const [sheetLoaded, setSheetLoaded] = useState(false)
  const [getSheetData, setSheetData] = useState('')
  return (
    <ReactGoogleSheets 
      clientId={'346253512556-9cll30jrl8c77o4d4vk9md0mk94g8sge.apps.googleusercontent.com'}
      apiKey={'AIzaSyBIuVPoKgX7GOOa6m77ZAV1HIK9-ZEYQyE'}
      spreadsheetId={'1vDIghRcWeNr2GP-NgkkLEKWvXngQJxEC8gWnphCOzc4'}
      afterLoading={() => this.setState({sheetLoaded: true})}
    >
      {sheetLoaded ? 
        <div>
          {/* Access Data */}
          {console.log('Your sheet data : ', getSheetData('Plays'))}
          {/* Update Data */}
          <button onClick={() => {
            this.props.updateCell(
              'sheet02', // sheetName
              'E', // column
              13, // row
              'Apple', // value
              null, // successCallback
              (error) => {
                console.log('error', error)
              } // errorCallback
            );
          }}>update cell!</button>
        </div>
        :
        'loading...'
      }
    </ReactGoogleSheets>
  )
}
 
export default ReactGoogleSheets.connect(Sheet);
 
 