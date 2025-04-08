import {formatEventDuration, formatEventStart} from '../../utils'
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FiClock } from "react-icons/fi";
import { Item, List, ListItem, Title, Text } from './EventItem.styled';

const EventItem = ({name, location, speaker, type, date, start, end}) => {
    const formattedStart = formatEventStart(start)
    const duration = formatEventDuration(start, end)
    return (
        <Item>
            <Title>{name}</Title>
            <List>
                <ListItem>
                    <Text>{<FaMapMarkerAlt />} {location}</Text>
                </ListItem>
                <ListItem>
                    <Text><IoPerson /> {speaker}</Text>
                </ListItem>
                <ListItem>
                    <Text><IoCalendarNumberOutline /> {formattedStart}</Text>
                </ListItem>
                <ListItem>
                    <Text><FiClock /> {duration}</Text>
                </ListItem>
            </List>
        </Item>
    )
}

export default EventItem