import React, {useState} from "react";
import nyu_logo from "./nyu_logo.jpg";

/* fetching data from Google sheets */
async function getData() {
  const spreadsheetId = '1KkIQ8lDtxTrRmFoAiMvmkL4fdFWpdUITnH_GSpkExDU';
  const response = await fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`);
  const result = await response.text();
  const json = JSON.parse(result.replace(/.*google.visualization.Query.setResponse\({(.*?)}\);?/s, '{$1}'));

  const rows = json.table.rows;


  return rows

}

async function searchBySecondColumn(searchValue) {
  const rows = await getData();
  const matchingValues = [];
  rows.forEach(row => {
    const secondColValue = row.c[1].v; // Assuming the second column is the index 1 (zero-based)
    const fourthColValue = row.c[3].v; // Assuming the fourth column is the index 3 (zero-based)
    if (secondColValue === searchValue) {
      matchingValues.push(fourthColValue);
    } 
  });
  return matchingValues;



}


/*the App begins*/
function App() {

  const [searchResult, setSearchResult] = useState([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const searchValue = event.target.name.value;
    const result = await searchBySecondColumn(searchValue);
    setSearchResult(result);

  };




  let generateTable;

  if (searchResult.length === 0) {
    generateTable = <td colSpan={3}><p id='warning'>No Data to Display, Please enter the Project Group ID on the text-box above or use the chat-bot :)</p> </td>;
  } else {
    generateTable = searchResult.map((comment, index) => (
        <tr key={index}>
          <td></td>
          <td>{comment}</td>
          <td id={index}></td>
        </tr>
    ));
  }



  return (
      <div>
        <header>
          <table id="header_table">
            <tr>
              <td width="33%">
                <img alt= "logo" src="https://catme.org/images/logo_COMBINED.jpg" />
              </td>
              <td width="33%">
                <img alt="NYU logo" src={nyu_logo} id="nyu_logo"/>
              </td>
              <td width="33%">
                <h1 id="catme_title">
                  CATME <br />
                  Evaluations<br />
                  Results<br />
                </h1>
              </td>
            </tr>
          </table>
        </header>


        <nav>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="name">Project group ID:</label>
              <input type="text" id="name" name="name" required />
              <input type="submit" value="Analyze" />
            </form>


          <p id="students_alert">
            Not an Instructor? Visit the{' '}
            <a href="https://catme.org/login/index" title="CatMe Login page for students">
              students' evaluation page
            </a>
          </p>
        </nav>

        <div class='container'>
        <main class='left-section'>

          <table id='content_table' border= '1px' >
            <tr>
              <th> ID</th>
              <th> Raw Comments</th>
              <th> Processed Results</th>
            </tr>

            {generateTable}




          </table>


        </main>


        <aside class='right-section'>


        </aside>
        </div>


        <footer>
          <p>contacts</p>
        </footer>
      </div>
  );
}

export default App;