import MatrixGradient from "./components/MatrixGradient"

function App() {
  return (
    <div className="App">
      <MatrixGradient 
        upperLeft={[0.937,0.988,0.325]}
        lowerLeft={[0.988,0.263,0.804]}
        upperRight={[0.475,0.937,0.769]}
        lowerRight={[0.286, 0.267, 0.843]}
        width={5}
        height={7}
      />
    </div>
  );
}

export default App;
