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

  const [searchResult, setSearchResult] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const searchValue = event.target.name.value;
    const result = await searchBySecondColumn(searchValue);
    setSearchResult(result);
  };


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
        <table>
          <tr>
            <td>
              <main>
                <table id="content_table">
                  <tr>
                    <td rowspan="2">
                      <h3 id="title_peerEvals"></h3>
                      <p id="peerEvals">{searchResult}</p>
                    </td>
                    <td>
                      <h3 id="title_proEvals"></h3>
                      <p id="proEvals"></p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="" id="graphEvals" />
                    </td>
                  </tr>
                </table>
              </main>
            </td>
            <td id="aside">

            </td>
          </tr>
        </table>
        <footer>
          <p>contacts</p>
        </footer>
      </div>
  );
}

export default App;