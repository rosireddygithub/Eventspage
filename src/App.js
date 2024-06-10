import VerticalTimeline from './components';
import { events } from "./components/events";

function App() {
  return <VerticalTimeline events={events} interval={1000} />;
}

export default App;
