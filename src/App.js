import Jokes from "./components/Jokes";
import { DateAndTime } from "./components/DateAndTime";

function App() {
  return (
    <div className="Headline">
      <DateAndTime />
      <h1>Lets read some jokes!</h1>
      <Jokes />
    </div>
  );
}
export default App;