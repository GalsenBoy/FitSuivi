import Navigation from "../navigation/Navigation";
import TopBar from "../top-bar/TopBar";
import "./dashboard.scss";
export default function Dashboard() {
  return (
    <div
      id="dashboard"
      style={{
        display: "grid",
        gridTemplateColumns: "350px 1fr",
        gridTemplateRows: "150px 1fr",
        height: "100vh",
      }}
    >
      <Navigation />
      <TopBar />
    </div>
  );
}
