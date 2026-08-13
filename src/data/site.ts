// Central content for blanc. Edit copy, links, and world data here.

export const site = {
  name: 'blanc',
  tagline: 'one group. many worlds.',
  intro:
    'blanc is a songwriting collective that refuses a single sound. We start from a blank page — then let each song flood it with its own color. Scroll to travel between our worlds.',
  bookingEmail: 'rafetangorra@gmail.com',
  social: {
    instagram: '', // e.g. 'https://instagram.com/songsbyblanc'
    spotify: '', // e.g. 'https://open.spotify.com/artist/…'
    youtube: '',
  },
};

export type World = {
  id: string;
  index: string;
  name: string;
  genre: string;
  blurb: string;
  // palette
  bg: string; // full-bleed background for the world
  ink: string; // primary text on that background
  muted: string; // secondary text
  accent: string;
  accent2: string;
  font: 'house' | 'golden' | 'velvet';
  // optional embed — drop a Spotify / SoundCloud / YouTube embed URL here later
  embed?: string;
  track?: string; // display name of a signature track (placeholder ok)
};

export const worlds: World[] = [
  {
    id: 'house',
    index: '01',
    name: 'House World',
    genre: 'electronic · house',
    blurb:
      'Four-on-the-floor pulse and midnight neon. Basslines you feel in your chest, hooks that loop until sunrise. This is blanc after dark.',
    bg: '#0B0B14',
    ink: '#EDEDF7',
    muted: '#9A9AB8',
    accent: '#00E5FF',
    accent2: '#FF2D95',
    font: 'house',
    embed: '',
    track: 'Untitled Pulse',
  },
  {
    id: 'golden',
    index: '02',
    name: 'Golden World',
    genre: 'pop · singer-songwriter',
    blurb:
      'Golden-hour confessions — warm, unguarded, close enough to whisper. Just a voice, a few chords, and the truth it was hiding.',
    bg: '#F6EAD3',
    ink: '#2A1D0A',
    muted: '#7A6338',
    accent: '#C7761F',
    accent2: '#E8A93C',
    font: 'golden',
    embed: '',
    track: 'Golden Hour',
  },
  {
    id: 'velvet',
    index: '03',
    name: 'Velvet World',
    genre: 'rock',
    blurb:
      'Smoke and crimson curtains. A guitar that means every word, drums that dare you to look away. Rock with the velvet rope pulled back.',
    bg: '#150609',
    ink: '#F3E7EA',
    muted: '#B98A93',
    accent: '#E23A55',
    accent2: '#7A1020',
    font: 'velvet',
    embed: '',
    track: 'Crimson',
  },
];
