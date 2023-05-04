import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ForgetPassword from "./components/auth/ForgetPassword";
import Courses from "./components/courses/Courses";
import Contact from "./components/contact/Contact";
import ResetPassword from "./components/auth/ResetPassword";
import Request from "./components/request/Request";
import About from "./components/about/About";
import PaymentSuccess from "./components/payments/PaymentSuccess";
import Subscribe from "./components/payments/Subscribe";
import PaymentFail from "./components/payments/PaymentFail";
import NotFound from "./components/layout/notfound/NotFound";
import CoursePage from "./components/coursepage/CoursePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* main routes */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
     {/* single course route -- open onclicking WATCH NOW in courses page */}
        <Route path="/course/:id" element={<CoursePage />} />
        {/* auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword/:token" element={<ResetPassword />} />
        {/* payment routes */}
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/paymentfail" element={<PaymentFail />} />
        {/* Layout route */}
        <Route path="*" element={<NotFound />} />
        {/* request a course */}
        <Route path="/request" element={<Request />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
