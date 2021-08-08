import React from 'react';
import styles from './styles.module.scss';

function NoteContainer() {
  const [textValue, setTextValue] = React.useState('');

  return (
    <section className={styles.noteContainer}>
      <textarea
        value={textValue}
        onChange={(e) => {
          setTextValue(e.target.value);
        }}
      ></textarea>
    </section>
  );
}

export default NoteContainer;
