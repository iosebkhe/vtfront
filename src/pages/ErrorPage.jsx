import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <h1>გვერდი არ მოიძებნა</h1>
      <Link to="/">მთავარ გვერდზე დაბრუნება</Link>
      <Footer />
    </div>
  );
};

export default ErrorPage;