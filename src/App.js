import React from "react";

function App() {
  return (
      <div>
        <header>
          <table id="header_table">
            <tr>
              <td width="50%">
                <img src="https://catme.org/images/logo_COMBINED.jpg" />
              </td>
              <td>
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
          <form>
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
                      <p id="peerEvals"></p>
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
        <df-messenger
            intent="WELCOME"
            chat-title="BotNAME"
            agent-id="241f3b79-f2d1-42a7-b080-b730849631d9"
            language-code="en"
        ></df-messenger>
        <footer>
          <p>contacts</p>
        </footer>
      </div>
  );
}

export default App;
