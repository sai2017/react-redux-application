// function App() {
//   return (
//     <>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("チェンジ！")}}/>
//     </>
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
    </div>
  );
}

const Cat = () => {
  return (
    <div>Meow!</div>
  )
}

export default App;
