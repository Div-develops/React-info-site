import "../components/main.css";
import REACT from "../components/img/react.png";

export default function Main() {
  return (
    <>
      <main>
        <div className="main">
          <h1>Fun facts about React</h1>
          <div className="flexr">
            <img src={REACT} className="reactlogo" />
            <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walke</li>
              <li>Has well over 100k starson Github</li>
              <li>Is maintained by facebook</li>
              <li>Power thousands of enterprises apps,including mobiel apps</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
