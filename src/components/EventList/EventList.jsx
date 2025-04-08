import EventItem from '../EventItem/EventItem'
import { List } from './EventList.styled';

export const EventList = ({ events }) => {
  return (
    <List>
      {events.map(({ name, location, speaker, type, time }) => {
        return <EventItem
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />;
      })}
    </List>
  );
};
