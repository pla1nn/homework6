import {formatEventDuration, formatEventStart} from '../../utils'

const EventItem = ({name, location, speaker, type, date, start, end}) => {
    const formattedStart = formatEventStart(start)
    const duration = formatEventDuration(start, end)
    return (
        <li>
            <h2>{name}</h2>
            <ul>
                <li>
                    <p>{location}</p>
                </li>
                <li>
                    <p>{speaker}</p>
                </li>
                <li>
                    <p>{formattedStart}</p>
                </li>
                <li>
                    <p>{duration}</p>
                </li>
            </ul>
        </li>
    )
}

export default EventItem