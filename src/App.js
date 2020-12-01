function App() {
  return (
    <>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("チェンジ！")}}/>
    </>
  );
}

export default App;
