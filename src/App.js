import React, { useState } from 'react';
import VerticalTimeline from './components';
import { events } from "./components/events";

function App() {
  const [filteredEvents, setFilteredEvents] = useState(events);

  const filterUpcomingEvents = () => {
    const upcoming = events.filter(event => new Date(event.time.split('-').reverse().join('-')) > new Date());
    setFilteredEvents(upcoming);
  };

  const filterThisYearEvents = () => {
    const currentYear = new Date().getFullYear();
    const thisYear = events.filter(event => new Date(event.time.split('-').reverse().join('-')).getFullYear() === currentYear);
    setFilteredEvents(thisYear);
  };

  const filterPastEvents = () => {
    const past = events.filter(event => new Date(event.time.split('-').reverse().join('-')) < new Date());
    setFilteredEvents(past);
  };

  return (
    <div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={filterUpcomingEvents}>Upcoming Events</button>
        <button style={styles.button} onClick={filterThisYearEvents}>This Year</button>
        <button style={styles.button} onClick={filterPastEvents}>Past Events</button>
      </div>
      <VerticalTimeline events={filteredEvents} interval={700} />
    </div>
  );
}

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0'
  },
  button: {
    backgroundColor: '#007BFF',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '4px'
  }
};

export default App;
