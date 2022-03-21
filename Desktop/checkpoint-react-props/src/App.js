import Data from "./Profile/Components";
import Image from "./icon.jpg"

function App() {
  
  let fun = {fullname:"wajdi ben othmen",bio:"Hello world",profession:"webdevelopper"}
  
  return (
    <div className="App">
      <Data data={fun}>
        <img width={350} src={Image} />
        </Data>
      
    </div>
  );
}

export default App;