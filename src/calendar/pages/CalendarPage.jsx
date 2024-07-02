import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Navbar } from "../"
import { addHours } from 'date-fns'

import { localizer, getMessagesES } from '../../helpers'


const events = [{
  title: 'Cumpleaños',
  notes: 'Hay que comprar',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Carlos'
  }
}]

export const CalendarPage = () => {

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    console.log({ event, start, end, isSelected })

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.0,
      color: 'white'
    }

    return {
      style
    }
  }

  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
      />
    </>
  )
}
