
import "./ProgressBarStyle.css";
import UseProgressBar from "./UseProgressBar";

function ProgressBar() {
  const [one, two, three, ctaOne, ctaTwo, ctaThree] = UseProgressBar();

  return (
    <div className="main-div">
      <div className="main-mdl">
        <div className="main-mdl-1">
          <h1 style={{ textAlign: "center" }}>Progress App</h1>
        </div>

        <div className="main-mdl-2">
          <input
            type="range"
            className="main-mdl-2-bar"
            min="0"
            max="100"
            value={one}
            onChange={(e) => {
              ctaOne(e.target.value);
            }}
          />
          <p>{one}%</p>
        </div>
        <div className="main-mdl-2">
          <input
            type="range"
            className="main-mdl-2-bar"
            min="0"
            max="100"
            value={two}
            onChange={(e) => {
              ctaTwo(e.target.value);
            }}
          />
          <p>{two}%</p>
        </div>
        <div className="main-mdl-2">
          <input
            type="range"
            className="main-mdl-2-bar"
            min="0"
            max="100"
            value={three}
            onChange={(e) => {
              ctaThree(e.target.value);
            }}
          />
          <p>{three}%</p>
        </div>
        <p style={{ textAlign: "center" }}>Total = 100</p>
      </div>
    </div>
  );
}
export default ProgressBar;
