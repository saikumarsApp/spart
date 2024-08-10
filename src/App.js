import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar-container">
        <h1 className="navbar-heading">Instagram Dashboard</h1>
      </div>
      <div className="sorting-container">
        <div className="sorting-card">
          <p className="date-name-styling">Date Range</p>
          <p className="date-styling">Aug 11 2024 -- Aug 12 2024</p>
        </div>
        <div className="sorting-card">
          <p className="date-name-styling">Age group</p>
          <p className="date-styling">All members..</p>
        </div>
        <div className="sorting-card">
          <p className="date-name-styling">Country</p>
          <p className="date-styling">All members..</p>
        </div>
      </div>
      <div className="updates-container">
        <div className="image-container">
          <img
            className="instagram-image"
            alt="instagram"
            src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?t=st=1723277790~exp=1723281390~hmac=f8fa820185203bfa28c7ce5e2c7753b430e8889163dd855fe30ad1ed6fab89b5&w=740"
          />
        </div>
        <div className="new-followers-container">
          <p className="new-followers-text">Aug new followers</p>
          <div className="new-followers-num-card">
            <h1 className="new-follower-num-heading">196K</h1>
            <p className="increasing-new-followers-num">↑27K</p>
            <p className="vs-last-to-this-month">
              vs Jun 30, 2024 to July 31, 2024
            </p>
          </div>
        </div>
        <div className="monthly-new-followers-container">
          <p className="new-followers-text">Monthly new followers</p>
          <img
            alt="graph"
            className="graph-styling"
            src="https://img.freepik.com/premium-vector/vector-simple-infographic-line-chart_580167-1744.jpg?w=1380"
          />
        </div>
      </div>
      <div className="quick-stats-container">
        <h2 className="quick-stats-text">Quick Stats</h2>
      </div>
      <div className="total-stats-container">
        <div className="total-users-card">
          <p className="total-users-text">Total users</p>
          <div className="total-users-numbering-alignment">
            <h1 className="total-users-number">82,188</h1>
            <p className="total-users-increase">↑16%</p>
            <p className="total-users-previous-year">vs previous year</p>
          </div>
        </div>
        <div className="total-users-card">
          <p className="total-users-text">Total posts</p>
          <div className="total-users-numbering-alignment">
            <h1 className="total-users-number">94,567</h1>
            <p className="total-users-increase">↑22%</p>
            <p className="total-users-previous-year">vs previous year</p>
          </div>
        </div>
        <div className="total-users-card">
          <p className="total-users-text">Active users in last 24</p>
          <div className="total-users-numbering-alignment">
            <h1 className="total-users-number">50,166</h1>
            <p className="total-users-increase">↑19%</p>
            <p className="total-users-previous-year">vs previous year</p>
          </div>
        </div>
        <div className="total-users-card">
          <p className="total-users-text">Post published in last 24</p>
          <div className="total-users-numbering-alignment">
            <h1 className="total-users-number">40,139</h1>
            <p className="total-users-increase">↑18%</p>
            <p className="total-users-previous-year">vs previous year</p>
          </div>
        </div>
      </div>
      <div>
        <img
          alt="bar"
          src="https://img.freepik.com/premium-vector/infographic-template-bar-chart-monthly-chart-statistics-year_564420-7614.jpg?w=1380"
        />
      </div>
    </div>
  );
}

export default App;
