import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

const events = [
  {
    title: 'Investor Meeting',
    date: '2025-12-20',
  },
  {
    title: 'Pitch Discussion',
    date: '2025-12-22',
  },
  {
    title: 'Follow-up Call',
    date: '2025-12-25',
  },
];

const MeetingCalendar = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto"
      />
    </div>
  );
};

export default MeetingCalendar;
