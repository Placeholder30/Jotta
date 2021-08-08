import Head from 'next/head';
import Image from 'next/image';
import CalendarComponent from '../components/Calendar';
import NoteContainer from '../components/NoteContainer';

export default function Home() {
  return (
    <div className="container">
      <h1>Jotta</h1>
      <NoteContainer />
      <CalendarComponent />
    </div>
  );
}
