import Header from './Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvatarComponent from './Avatar.jsx';
import Image from './images/muneeb.jpg';
import Project from './Project.jsx';

export default function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <AvatarComponent name="Muneeb Amjad" avatarUrl={Image} />
      <div className="projectContainer">
        <Project />
      </div>
    </>
  );
}
