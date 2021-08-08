import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function CalendarComponent() {
  const [value, setValue] = React.useState(new Date());
  return (
    <>
      <Calendar onChange={setValue} value={value} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://.../data`);
  const data = await res.json();

  return { props: { data } };
}

export default CalendarComponent;
