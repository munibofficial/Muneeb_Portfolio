// // export default function button() {
// //   return (
// //     <>
// //       <button onClick={Alert}>Nothing</button>
// //       <button onDoubleClick ={Alert1}>Hover</button>
// //     </>
// //   );
// // }
// // function Alert() {
// //   return alert('I am clicked');
// // }
// // function Alert1() {
// //   return alert('I am hover');
// // }
// // function AlertButton({ message, children }) {
// //   return <button onclick={() => alert(message)}></button>;
// //   return <button onClick={() => alert(message)}>{children}</button>;
// // }

// export default function Toolbar() {
//   return (
//     <div>
//       <PlayButton moviename="Carry On Jutt">Play movie</PlayButton>
//     </div>
//   );
// }

// function Button({ onClick, children }) {
//   return <button onClick={onClick}>{children}</button>;
// }

// function PlayButton({ moviename, children }) {
//   function handlePlayButton() {
//     alert(`Playing ${moviename}`);
//   }
//   return <Button onClick={handlePlayButton}>Play {moviename}</Button>;
// }
import Header from './Header.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import AvatarComponent from './Avatar.jsx';

export default function App() {
  return (
    <div className="header">
      <Header />
      <AvatarComponent name="Muneeb Amjad"  />
    </div>
  );
}
