import { EventList } from '../EventList/EventList';
import { PageTitle } from '../PageTitle/PageTitle';
import upcomingEvents from '../../upcoming-events.json'
import './App.css';

function App() {
  return (
    <div>
        <PageTitle title='24th Core Worlds Coalition Conference'/>
        <EventList events={upcomingEvents} />
    </div>
  )
}

export default App;
