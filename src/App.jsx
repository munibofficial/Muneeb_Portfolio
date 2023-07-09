import Header from './Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvatarComponent from './Avatar.jsx';
import Image from './images/muneeb.jpg';
import Project from './Project.jsx';
import ContactForm from './form.jsx';
import Footer from './footer.jsx';

export default function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div id="profile">
        <AvatarComponent name="hello , I am Muneeb" avatarUrl={Image} />
      </div>

      <div className="projectContainer" id="project">
        <Project />
      </div>

      <div className="ContactForm" id="contact">
        <ContactForm />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
