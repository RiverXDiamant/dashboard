// components
import Sidebar from "./components/Sidebar";
import Reviews from "./components/Reviews";
import AverageRating from "./components/AverageRating";
import SentimentAnalysis from "./components/SentimentAnalysis";

// css
import "./App.css";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="dashboard">
          <Sidebar />
        </div>
        <div className="reviews">
          <Reviews />
        </div>
        <div className="average-rating">
          <AverageRating />
        </div>
        <div className="sentiment-analysis">
          <SentimentAnalysis />
        </div>
      </div>
    </>
  );
}
