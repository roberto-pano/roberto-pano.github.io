import React, {useState} from 'react';

const IMAGES = [
  {
    src: '/site/assets/Kill The Pachuco Bastard.png',
    alt: 'Kill The Pachuco Bastard! 2001',
    title: 'Kill The Pachuco Bastard! 2001',
    description:
      'An oil painting that vividly captures chaos around the 1943 Zoot Suit Riots in Los Angeles. The work reflects racial tensions and the marginalization of Mexican-American communities during WWII. It juxtaposes patriotism with discrimination and calls attention to how clothing and style can become symbols of cultural identity and resistance.',
  },
  {
    src: '/site/assets/inmemory.jpg',
    alt: 'In Memory of Great Grandfather 1999',
    title: 'In Memory of Great Grandfather 1999',
    description:
      "House paint on wood panel, featured in 'Vincent Valdez: In Memory'. This piece preserves Mexican-American history and evokes empathy about loss and memory.",
  },
  {
    src: '/site/assets/The Strangest Fruit Part 1.png',
    alt: 'The Strangest Fruit Part 1',
    title: 'The Strangest Fruit (Part 1)',
    description:
      'Part of a nine-canvas series reenacting lynchings of Latinos in Texas; a challenging work used to remember and humanize victims and confront histories often forgotten.',
  },
  {
    src: '/site/assets/The Strangest Fruit Part 2.png',
    alt: 'The Strangest Fruit Part 2',
    title: 'The Strangest Fruit (Part 2)',
    description: 'Continuation of the series; see Part 1 for context.',
  },
  {
    src: '/site/assets/The Strangest Fruit Part 3.png',
    alt: 'The Strangest Fruit Part 3',
    title: 'The Strangest Fruit (Part 3)',
    description: 'Continuation of the series; see Part 1 for context.',
  },
  {
    src: '/site/assets/NastyNez.jpg',
    alt: 'Nasty Nez',
    title: 'Nasty Nez',
    description:
      'Featured at the Cheech 2022 exhibit. Subjects wearing masks represent how Mexican-Americans may conceal parts of their identity; the tiger mask can symbolize ferocity and endurance.',
  },
  {
    src: '/site/assets/Untitled1.png',
    alt: 'Untitled 1',
    title: 'Untitled',
    description:
      'A piece showing a masked figure that may reference code-switching and the emotional cost of masking one’s identity; the posture suggests introspection about identity and marginalization.',
  },
  {
    src: '/site/assets/Untitled2.png',
    alt: 'Untitled 2',
    title: 'Untitled',
    description:
      'Portrait of a child wearing a mask and a graduation cap — possibly commenting on the tension between assimilation/academic success and concealment of cultural heritage.',
  },
  {
    src: '/site/assets/Untitled3.png',
    alt: 'Untitled 3',
    title: 'Untitled',
    description:
      "Photograph of a shed with the phrase 'God Never Changes' and crosses — touches on faith, resourcefulness, and economic conditions within communities in Texas.",
  },
  {
    src: '/site/assets/turbulent.png',
    alt: 'Turbulent 2015',
    title: 'Turbulent 2015',
    description:
      'A stylized painting using vibrant color and forms that may reference agave/maguey plants and the cyclical nature of life; possibly a nod to Mexican folk traditions.',
  },
  {
    src: '/site/assets/Souvenirs.png',
    alt: 'Souvenirs 2014',
    title: 'Souvenirs 2014',
    description:
      "A dense collage of symbols — passport stamps, religious imagery, and cultural references — reflecting the complexity of Mexican-American identity and the Asco art collective's influence.",
  },
  {
    src: '/site/assets/Isolation.png',
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
    <div>
      <h2 style={{textAlign: 'center', marginBottom: 24}}>
        Virtual Art Exhibit
      </h2>
      <p style={{textAlign: 'center', marginBottom: 24}}>
        The theme of the overall exhibit is an exploration into dual identity
        and how Mexican-American and Chicano/a/x artists express identity
        through various mediums and art styles.
      </p>

      <div className="gallery">
        {IMAGES.map((img, idx) => (
          <div className="gallery-item" key={idx}>
            <div className="title">{img.title || img.alt}</div>
            <img
              src={img.src}
              alt={img.alt}
              className="gallery-img"
              onClick={() => openModal(img)}
              style={{cursor: 'pointer'}}
            />
            <div className="description">{img.description}</div>
          </div>
        ))}
      </div>

      <div
        id="myModal"
        className={`modal ${modalOpen ? 'show' : ''}`}
        onClick={closeModal}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        {modalOpen && (
          <img
            className="modal-content"
            id="img01"
            src={modalSrc}
            alt={modalAlt}
          />
        )}
        <div id="caption">{modalAlt}</div>
      </div>
    </div>
  );
}
