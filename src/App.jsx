import Header from './Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvatarComponent from './Avatar.jsx';
import Image from './images/muneeb.jpg';
import CardComp from './Project.jsx';

export default function App() {
  return (
    <div>
      <div className="header">
        <Header />
        <AvatarComponent name="Muneeb Amjad" avatarUrl={Image} />
      </div>
      <CardComp />
    </div>
  );
}
