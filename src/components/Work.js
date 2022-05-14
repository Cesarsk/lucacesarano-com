import React, {Component} from 'react';
import '../styles/Work.css'

function RenderContainer() {
    return (
        <div className="Work">
            <div className="Work-section">
                <span className="About-text">Here you will find everything about me.</span>
                <div className="Inline">
                    <p className="About-text">If you're a company that wants to reach out:
                        <a
                            className="About-link"
                            href="https://drive.google.com/file/d/1z_s31i35-ZkyEhBt_xRybwtPPVnbP7J_/view"
                            target="_blank"
                            rel="noopener noreferrer"> CHECK MY CV
                        </a>.
                    </p>
                    <p className="About-relocate"></p>
                </div>
                <p>I enjoy developing lots of things, check it out on my <a className="Work-link"
                                                                            href="https://github.com/cesarsk">Github</a> Page.
                </p>
                <p>Check out my <a className="Work-link" href="https://lucacesarano.medium.com/">Blog</a>, I'm
                    publishing some cool projects developed in Python and extra nerd stuff.</p>
                <br/>
                <p>Try my live demos: </p>
                <div className="Work-list">
                    <a className="Work-link" rel="noopener noreferrer" target="_blank"
                       href="https://cesarsk.github.io/AI-GA-on-MAS/">» An Application of Genetic Algorithms (GA) to a
                        Multi-Agent-System <span role="img" aria-label="uk-flag">🇬🇧</span></a>
                    <br/>
                    <a className="Work-link" rel="noopener noreferrer" target="_blank"
                       href="https://gitlab.com/lu.cesarano/lucacesarano-com">» This CI/CD enabled Website <span
                        role="img" aria-label="uk-flag">🇬🇧</span></a>
                    <br/>
                </div>
                <br/>

                <p>Open Source Projects:</p>
                <div className="Work-list">
                    <a className="Work-link" rel="noopener noreferrer" target="_blank"
                       href="https://github.com/FerrariAndrea/AlfredTheRealButler">» Alfred - The Cyber Butler <span
                        role="img" aria-label="uk-flag">🇬🇧</span></a>
                    <br/>
                    <a className="Work-link" href="https://play.google.com/store/apps/details?id=com.cesarsk.say_it">»
                        Say It! For Android (~ 30k users, 320 reviews, 4.9/5.0 <span role="img"
                                                                                     aria-label="uk-flag">★</span>) <span
                            role="img" aria-label="uk-flag">🇬🇧</span></a>
                </div>
                <br/>

                <p>Publications:</p>
                <div className="Work-list">
                    <a className="Work-link"
                       href="https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9624984"> IEEE ACCESS - A
                        Real-time Energy-Saving Mechanism in Internet of Vehicles Systems <span role="img"
                                                                                                aria-label="uk-flag">🇬🇧</span></a>
                </div>
                <br/>

                <p>Check out my book suggestions:</p>
                <div className="Work-list">
                    <a className="Work-link" rel="noopener noreferrer" target="_blank"
                       href="https://www.amazon.com/Site-Reliability-Engineering-Production-Systems/dp/149192912X/ref=sr_1_1?crid=X8YWINNQW1XE&keywords=sre+site+reliability+engineering&qid=1650799906&sprefix=sre+site+reliability+engineeri%2Caps%2C166&sr=8-1">»
                        Site Reliability Engineering: How Google Runs Production Systems <span role="img"
                                                                                               aria-label="uk-flag">🇬🇧</span></a>
                    <br/>
                    <a className="Work-link" rel="noopener noreferrer" target="_blank"
                       href="https://www.amazon.com/Kubernetes-Running-Dive-Future-Infrastructure/dp/109811020X/ref=sr_1_2?crid=31HBVY0EDCUU1&keywords=kubernetes+up+and+running&qid=1650671033&sprefix=kubernetes+up+and+runnin%2Caps%2C164&sr=8-2">»
                        Kubernetes: Up and Running: Dive into the Future of Infrastructure <span role="img"
                                                                                                 aria-label="uk-flag">🇬🇧</span></a>
                    <br/>
                    <a className="Work-link" rel="noopener noreferrer" target="_blank"
                       href="https://www.amazon.com/DevOps-Handbook-World-Class-Reliability-Organizations/dp/1950508404/ref=sr_1_1?crid=X5U454XQBXYP&keywords=the+devops+handbook&qid=1650671070&sprefix=the+devops+handbo%2Caps%2C155&sr=8-1">»
                        The DevOps Handbook: How to Create World-Class Agility, Reliability, & Security in Technology
                        Organizations <span role="img" aria-label="uk-flag">🇬🇧</span></a>
                    <br/>
                    <a className="Work-link" rel="noopener noreferrer" target="_blank"
                       href="https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/ref=sr_1_1?crid=6XDJD1SAEY0X&keywords=code+clean&qid=1650671053&sprefix=code+cle%2Caps%2C166&sr=8-1">»
                        Clean Code: A Handbook of Agile Software Craftsmanship <span role="img"
                                                                                     aria-label="uk-flag">🇬🇧</span></a>
                    <br/>
                    <a className="Work-link" rel="noopener noreferrer" target="_blank"
                       href="https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164/ref=sr_1_1?crid=27B5CYILRUYVP&keywords=clean+architecture&qid=1650671061&sprefix=clean+architectu%2Caps%2C149&sr=8-1">»
                        Clean Architecture: A Craftsman's Guide to Software Structure and Design <span role="img"
                                                                                                       aria-label="uk-flag">🇬🇧</span></a>
                    <br/>
                </div>

                <br/>
                <p>Some stuff I wrote during University (2013-2020):</p>
                <p>Artificial Intelligence:</p>
                <div className="Work-list">
                    <a className="Work-link" rel="noopener noreferrer" target="_blank"
                       href="https://drive.google.com/file/d/1kyY_U1fVYOItwn51I720NJVn4jfcuIEY/view">» An application of
                        Genetic Algorithms to a Multi-Agent-System <span role="img" aria-label="uk-flag">🇬🇧</span></a>
                    <br/>
                    <a className="Work-link" rel="noopener noreferrer" target="_blank"
                       href="https://drive.google.com/open?id=1xHqsh4hD99Po2HjKU5iFwpznFfX6_u9L">» An Example of a MLP
                        Classifier in KNIME <span role="img" aria-label="uk-flag">🇬🇧</span></a>

                </div>
                <p>Augmented Reality:</p>
                <div className="Work-list">
                    <a className="Work-link" rel="noopener noreferrer" target="_blank"
                       href="https://drive.google.com/open?id=1AmN-PM7Vc90qQ4wPdh8AtLGtgWvc6kq2">» Realtà Aumentata:
                        stato dell’arte delle tecnologie <span role="img" aria-label="it-flag">🇮🇹</span></a>
                    <br/>

                    <a className="Work-link" rel="noopener noreferrer" target="_blank"
                       href="https://drive.google.com/open?id=1Pgjcs3dDSMqB8z9VkImFVzOEt75ikmcb">» QR-Code on Augmented
                        Reality <span role="img" aria-label="it-flag">🇮🇹</span></a> <a className="Work-link"
                                                                                         rel="noopener noreferrer"
                                                                                         target="_blank"
                                                                                         href="https://github.com/Cesarsk/Android-QR-Code-on-AR">[Github]</a>
                </div>
                <p>VHDL:</p>
                <div className="Work-list">
                    <a className="Work-link" rel="noopener noreferrer" target="_blank"
                       href="https://drive.google.com/open?id=1b1qHpluzVhwtIL7HD5x64vFUJGQbC34A">» The Snake Game - A
                        VHDL Version <span role="img" aria-label="it-flag">🇮🇹</span></a>
                    <br/>

                </div>
                <p>Project Management:</p>
                <div className="Work-list">
                    <a className="Work-link" rel="noopener noreferrer" target="_blank"
                       href="https://drive.google.com/file/d/1doKws8vu9DOB_twX7VU5cpSJXYQgMmHb/view">» [Full] Simulation
                        of a Project Proposal for VERTIS <span role="img" aria-label="it-flag">🇮🇹</span></a>
                </div>
            </div>

        </div>
    )
}

export default class Work extends Component {
    render() {
        return (
            <div className="Work" id={this.props.id}>
                {RenderContainer()}
            </div>
        );
    }
}
