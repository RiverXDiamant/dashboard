// import component
import Welcome from "./Welcome";

export default function WebsiteVisitors() {
  return (
    <div className="visitor-count">
      <h3>Website Visitors</h3>
      <p>821</p>
      <div className="welcome">
        <Welcome />
      </div>
    </div>
  );
}
