import Head from 'next/head';
import Image from 'next/image';
import NoteContainer from '../components/NoteContainer';

export default function Home() {
  return (
    <div className="container">
      <NoteContainer />
    </div>
  );
}
