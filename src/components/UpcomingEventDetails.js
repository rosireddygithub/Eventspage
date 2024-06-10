import React from 'react';

const UpcomingEventDetails = ({ event }) => {
  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default UpcomingEventDetails;
