import "./style.css";
import Cards from "./Cards";
import {useState} from "react";
import {useDispatch} from "react-redux";


function App() {
    const [topic, setTopic] = useState("all");
    const dispatch = useDispatch();

    return (
        <div className="page">
            <header>
                <div className="wrapper-nav">
                    {/*<p className="logo">Agency</p>*/}
                    <div className="logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="141.825" height="43.416" viewBox="0 0 141.825 43.416">
                            <g id="logo" transform="translate(-1.175)">
                                <text id="Agency" transform="translate(62 32)" fill="#fff" fontSize="24" fontFamily="Helvetica"><tspan x="0" y="0">Agency</tspan></text>
                                <g id="Polygon" fill="none" strokeMiterlimit="10">
                                    <path d="M24,0,46.825,16.584,38.107,43.416H9.893L1.175,16.584Z" stroke="none"/>
                                    <path d="M 23.99999809265137 6.180351257324219 L 7.052497863769531 18.49341773986816 L 13.5258674621582 38.41640472412109 L 34.47411346435547 38.41640472412109 L 40.94748306274414 18.49341583251953 L 23.99999809265137 6.180351257324219 M 24 3.814697265625e-06 L 46.82534408569336 16.58358573913574 L 38.10683441162109 43.41640472412109 L 9.893146514892578 43.41640472412109 L 1.174636840820312 16.58358573913574 L 24 3.814697265625e-06 Z" stroke="none" fill="#ef6d58"/>
                                </g>
                                <path id="Polygon-2" data-name="Polygon" d="M9.5,0l9.035,6.564L15.084,17.186H3.916L.465,6.564Z" transform="translate(14 14)" fill="#ef6d58"/>
                            </g>
                        </svg>
                    </div>
                    <nav className="main-nav">
                        <a href=".">About</a>
                        <a href=".">Services</a>
                        <a href=".">Pricing</a>
                        <a href=".">Blog</a>
                    </nav>
                    <button className="contact-btn">CONTACT</button>
                </div>
                <p className="title">Portfolio</p>
                <p className="desc">Agency provides a full service range including technical skills, design, business understanding.</p>
            </header>
            <main>
                <select
                    id="topic-select-id"
                    className="select-arrow mobile-sel"
                    onChange={(e) => setTopic(() => e.target.value)}>
                    <option value="all">Show all</option>
                    <option value="design">Design</option>
                    <option value="branding">Branding</option>
                    <option value="illustration">Illustration</option>
                    <option value="motion">Motion</option>
                </select>
                <ul className="topic-list">
                    <li onClick={() => setTopic(() => "all")}>Show all</li>
                    <li onClick={() => setTopic(() => "design")}>Design</li>
                    <li onClick={() => setTopic(() => "branding")}>Branding</li>
                    <li onClick={() => setTopic(() => "illustration")}>Illustration</li>
                    <li onClick={() => setTopic(() => "motion")}>Motion</li>
                </ul>
                <Cards topic={topic} setTopic={setTopic}/>
                <button className="load-more-btn" onClick={() => dispatch({type: "ADD_CARDS"})}>LOAD MORE</button>
            </main>
        </div>
    );
}

export default App;
