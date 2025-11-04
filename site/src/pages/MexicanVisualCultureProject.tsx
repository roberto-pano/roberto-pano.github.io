import React, {useState} from 'react';
import styles from './MexicanVisualCultureProject.module.css';
import modalStyles from './Modal.module.css';

const IMAGES = [
  {
    src: '/assets/Kill The Pachuco Bastard.png',
    alt: 'Kill The Pachuco Bastard! 2001',
    title: 'Kill The Pachuco Bastard! 2001',
    description:
      'An oil painting that vividly captures chaos around the 1943 Zoot Suit Riots in Los Angeles. The work reflects racial tensions and the marginalization of Mexican-American communities during WWII. It juxtaposes patriotism with discrimination and calls attention to how clothing and style can become symbols of cultural identity and resistance.',
  },
  {
    src: '/assets/inmemory.jpg',
    alt: 'In Memory of Great Grandfather 1999',
    title: 'In Memory of Great Grandfather 1999',
    description:
      "House paint on wood panel, featured in 'Vincent Valdez: In Memory'. This piece preserves Mexican-American history and evokes empathy about loss and memory.",
  },
  {
    src: '/assets/The Strangest Fruit Part 1.png',
    alt: 'The Strangest Fruit Part 1',
    title: 'The Strangest Fruit (Part 1)',
    description:
      'Part of a nine-canvas series reenacting lynchings of Latinos in Texas; a challenging work used to remember and humanize victims and confront histories often forgotten.',
  },
  {
    src: '/assets/The Strangest Fruit Part 2.png',
    alt: 'The Strangest Fruit Part 2',
    title: 'The Strangest Fruit (Part 2)',
    description: 'Continuation of the series; see Part 1 for context.',
  },
  {
    src: '/assets/The Strangest Fruit Part 3.png',
    alt: 'The Strangest Fruit Part 3',
    title: 'The Strangest Fruit (Part 3)',
    description: 'Continuation of the series; see Part 1 for context.',
  },
  {
    src: '/assets/NastyNez.jpg',
    alt: 'Nasty Nez',
    title: 'Nasty Nez',
    description:
      'Featured at the Cheech 2022 exhibit. Subjects wearing masks represent how Mexican-Americans may conceal parts of their identity; the tiger mask can symbolize ferocity and endurance.',
  },
  {
    src: '/assets/Untitled1.png',
    alt: 'Untitled 1',
    title: 'Untitled',
    description:
      'A piece showing a masked figure that may reference code-switching and the emotional cost of masking one’s identity; the posture suggests introspection about identity and marginalization.',
  },
  {
    src: '/assets/Untitled2.png',
    alt: 'Untitled 2',
    title: 'Untitled',
    description:
      'Portrait of a child wearing a mask and a graduation cap — possibly commenting on the tension between assimilation/academic success and concealment of cultural heritage.',
  },
  {
    src: '/assets/Untitled3.png',
    alt: 'Untitled 3',
    title: 'Untitled',
    description:
      "Photograph of a shed with the phrase 'God Never Changes' and crosses — touches on faith, resourcefulness, and economic conditions within communities in Texas.",
  },
  {
    src: '/assets/turbulent.png',
    alt: 'Turbulent 2015',
    title: 'Turbulent 2015',
    description:
      'A stylized painting using vibrant color and forms that may reference agave/maguey plants and the cyclical nature of life; possibly a nod to Mexican folk traditions.',
  },
  {
    src: '/assets/Souvenirs.png',
    alt: 'Souvenirs 2014',
    title: 'Souvenirs 2014',
    description:
      "A dense collage of symbols — passport stamps, religious imagery, and cultural references — reflecting the complexity of Mexican-American identity and the Asco art collective's influence.",
  },
  {
    src: '/assets/Isolation.png',
    alt: 'Isolation (COVID Series 2020)',
    title: 'Isolation (COVID Series 2020)',
    description:
      'Depicts indoor domestic scenes from the pandemic; vibrant colors and religious motifs suggest resilience, faith, and the emotional reality of isolation.',
  },
];

export default function MexicanVisualCultureProject() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  function openModal(img: {src: string; alt: string}) {
    setModalSrc(img.src);
    setModalAlt(img.alt);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalSrc('');
    setModalAlt('');
  }

  return (
    <div className={styles.galleryContainer}>
      <h2 style={{textAlign: 'center', marginBottom: '24px'}}>
        Virtual Art Exhibit
      </h2>
      <p style={{textAlign: 'center', marginBottom: '24px'}}>
        The theme of the overall exhibit is an exploration into dual identity
        and how Mexican-American and Chicano/a/x artists express identity
        through various mediums and art styles.
      </p>

      <div className={styles.galleryGrid}>
        {IMAGES.map((img, idx) => (
          <div className={styles.galleryItem} key={idx}>
            <img
              src={img.src}
              alt={img.alt}
              className={styles.galleryImage}
              onClick={() => openModal(img)}
              style={{cursor: 'pointer'}}
            />
            <div className={styles.galleryContent}>
              <h3 className={styles.galleryTitle}>{img.title || img.alt}</h3>
              <p className={styles.galleryDescription}>{img.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`${modalStyles.modal} ${modalOpen ? modalStyles.show : ''}`}
        onClick={closeModal}>
        <span className={modalStyles.modalClose} onClick={closeModal}>
          &times;
        </span>
        {modalOpen && (
          <img
            className={modalStyles.modalContent}
            src={modalSrc}
            alt={modalAlt}
          />
        )}
        <div className={modalStyles.modalCaption}>{modalAlt}</div>
      </div>
    </div>
  );
}
