import React from 'react';
import './ProjectPage.css';
import { Table } from 'react-bootstrap';

function ProjectPage() {
  return (
    <>
      <section className="projects-section">
            <h2>Projects</h2>
            <div className="project-cards">
                <div class="card card-styling" style={{width: 18 + 'rem'}}>
                    <a href="https://sprout-app.now.sh/" rel="noopener noreferrer" target="_blank">
                        <img class="card-img-top" src={require("../images/sprout-app.png")} alt="A browser screenshot of the Sprout App" />
                    </a>
                    <h5 class="card-title">Sprout</h5>
                    <div class="card-body">
                        <h6 class="card-text">Sprout is a formative assessment tool used to help 
                            teachers deliver specific, goal-oriented, and timely feedback in the 
                            classroom. This project was in collaboration with 5 other developers.</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <img className="logo" id="React" alt="React" src={require("../images/React-logo.png")} />
                                <img className="logo" id="HTML" alt="HTML" src={require("../images/html logo.png")} />
                                <img className="logo" id="CSS" alt="CSS" src={require("../images/css logo.png")} />
                                <img className="logo" id="JavaScript" alt="JavaScript" src={require("../images/javascript-logo.png")} />
                            </li>
                            <li className="list-group-item">
                                <img className="logo" id="Nodejs" alt="Nodejs" src={require("../images/nodejs-logo.png")} />
                            </li>
                        </ul>
                    </div>
                    <a href="https://sprout-app.now.sh/" class="btn btn-primary" rel="noopener noreferrer" target="_blank">Live App</a>
                    <a href="https://github.com/thinkful-ei-emu/ZOMGPOW-Client" rel="noopener noreferrer" class="btn btn-primary" target="_blank">Repo</a>
                </div>
                <div className="card card-styling" style={{width: 18 + 'rem'}}>
                    <a href="https://spaced-repetition-cr.now.sh/" rel="noopener noreferrer" target="_blank">
                        <img className="card-img-top" src={require("../images/dashboard.png")} alt="A browser screenshot of the Spaced Repetition App" />
                    </a>
                    <h5 className="card-title">Spaced Repetition</h5>
                    <div className="card-body">
                        <h6 className="card-text">Lets the user create spaced repetition flash card 
                            sets in order to help them memorize foreign words. This project was 
                            in collaboration with Paul Han.</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <img className="logo" id="React" alt="React" src={require("../images/React-logo.png")} />
                                <img className="logo" id="HTML" alt="HTML" src={require("../images/html logo.png")} />
                                <img className="logo" id="CSS" alt="CSS" src={require("../images/css logo.png")} />
                                <img className="logo" id="JavaScript" alt="JavaScript" src={require("../images/javascript-logo.png")} />
                            </li>
                            <li className="list-group-item">
                                <img className="logo" id="Nodejs" alt="Nodejs" src={require("../images/nodejs-logo.png")} />
                            </li>
                        </ul>
                    </div>
                    <a href="https://spaced-repetition-cr.now.sh/" className="btn btn-primary" rel="noopener noreferrer" target="_blank">Live App</a>
                    <a href="https://github.com/thinkful-ei-emu/spaced-repetition-client-CP3" className="btn btn-primary" rel="noopener noreferrer" target="_blank">Repo</a>
                </div>
                <div className="card card-styling" style={{width: 18 + 'rem'}}>
                    <a href="https://chris-mobile-bookshelf-app.now.sh" rel="noopener noreferrer" target="_blank">
                        <img className="card-img-top" src={require("../images/MB_Landing.jpg")} alt="A browser screenshot of the Bookmark storing applicaiton" />
                    </a>
                    <h5 className="card-title">Mobile Bookshelf</h5>
                    <div className="card-body">
                        <h6 className="card-text">Mobile Bookshelf  allows users to compile information on all 
                            of the books that they are reading across various mediums (print, ebook, website, etc) in one social database.</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <img className="logo" id="React" alt="React" src={require("../images/React-logo.png")} />
                                <img className="logo" id="HTML" alt="HTML" src={require("../images/html logo.png")} />
                                <img className="logo" id="CSS" alt="CSS" src={require("../images/css logo.png")} />
                                <img className="logo" id="JavaScript" alt="JavaScript" src={require("../images/javascript-logo.png")} />
                            </li>
                            <li className="list-group-item">
                                <img className="logo" id="Nodejs" alt="Nodejs" src={require("../images/nodejs-logo.png")} />
                            </li>
                            </ul>
                    </div>
                    <a href="https://chris-mobile-bookshelf-app.now.sh" className="btn btn-primary" rel="noopener noreferrer" target="_blank">Live App</a>
                    <a href="https://github.com/thinkful-ei-emu/chris-capstone1-client" className="btn btn-primary" rel="noopener noreferrer" target="_blank">Repo</a>
                </div>
                <div className="card card-styling" style={{width: 18 + 'rem'}}>
                    <a href="https://thinkful-ei-emu.github.io/Bookmark-App-Chris-M/" rel="noopener noreferrer" target="_blank">
                        <img className="card-img-top" src={require("../images/BookmarkApp.jpg")} alt="A browser screenshot of the Bookmark storing applicaiton" />
                    </a>
                    <h5 className="card-title">Bookmark App</h5>
                    <div className="card-body">
                        <p className="card-text">A simple bookmark saving app that tests API 
                                functionality and responsive layout. This allows users to save, 
                                edit and delete bookmarks for later access.</p>
                        <h6 className="card-text">List of technologies</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <img className="logo" id="React" alt="React" src={require("../images/React-logo.png")} />
                                <img className="logo" id="HTML" alt="HTML" src={require("../images/html logo.png")} />
                                <img className="logo" id="CSS" alt="CSS" src={require("../images/css logo.png")} />
                                <img className="logo" id="JavaScript" alt="JavaScript" src={require("../images/javascript-logo.png")} />
                            </li>
                            <li className="list-group-item">
                                <img className="logo" id="Nodejs" alt="Nodejs" src={require("../images/nodejs-logo.png")} />
                            </li>
                        </ul>
                    </div>
                        <a href="https://thinkful-ei-emu.github.io/Bookmark-App-Chris-M/" className="btn btn-primary" rel="noopener noreferrer" target="_blank">Live App</a>
                        <a href="https://github.com/thinkful-ei-emu/Bookmark-App-Chris-M" className="btn btn-primary" rel="noopener noreferrer" target="_blank">Repo</a>
                </div>
                <div className="card card-styling" style={{width: 18 + 'rem'}}>
                    <img className="card-img-top" src={require("../images/QuizApp.jpg")} alt="A browser screenshot of the quiz application" />
                    <h5 className="card-title">Quiz App</h5>
                    <div className="card-body">
                        <p className="card-text">A Quiz app that runs through 5 random questions. 
                            It locally keeps your high score so that you know what you're trying 
                            to beat the next round. Questions range from obvious to almost 
                            impossible, but that's half the fun.</p>
                        <h6 className="card-text">List of technologies</h6>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <img className="logo" id="React" alt="React" src={require("../images/JQuery_logo.png")} />
                                <img className="logo" id="HTML" alt="HTML" src={require("../images/html logo.png")} />
                                <img className="logo" id="CSS" alt="CSS" src={require("../images/css logo.png")} />
                                <img className="logo" id="JavaScript" alt="JavaScript" src={require("../images/javascript-logo.png")} />
                            </li>
                        </ul>
                    </div>
                        <a href="https://thinkful-ei-emu.github.io/wlib-quiz-app-chris/" className="btn btn-primary disabled" rel="noopener noreferrer" target="_blank">Live App</a>
                        <a href="https://github.com/thinkful-ei-emu/wlib-quiz-app-chris" className="btn btn-primary" rel="noopener noreferrer" target="_blank">Repo</a>
                </div>
            </div>
            <div className='skills-table small-table'>
                <h4 className="skills-title">Technical Skills</h4>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr>
                            <th>FrontEnd</th>
                            <th>BackEnd</th>
                            <th>Database</th>
                            <th>WorkFlow</th>
                            <th>Testing</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HTML</td>
                            <td>Node.js</td>
                            <td>MySQL</td>
                            <td>Git</td>
                            <td>Jest</td>
                        </tr>
                        <tr>
                        <td>CSS</td>
                        <td>Java</td>
                        <td>PostgreSQL</td>
                        <td>Pipelines</td>
                        <td>Enzyme</td>
                        </tr>
                        <tr>
                        <td>Angular</td>
                        <td>Python</td>
                        <td>MongoDb</td>
                        <td>Jira</td>
                        <td>Chai</td>
                        </tr>
                        <tr>
                        <td>React.js</td>
                        <td></td>
                        <td></td>
                        <td>Bitbucket</td>
                        <td>Mocha</td>
                        </tr>
                        <tr>
                        <td>jQuery</td>
                        <td></td>
                        <td></td>
                        <td>Slack</td>
                        <td>Chrome Dev Tools</td>
                        </tr>
                        <tr>
                        <td>Bootstrap</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </section>
    </>
  )
}

export default ProjectPage;