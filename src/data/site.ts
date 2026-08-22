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
  planet?: string; // path under /public for the world's planet image (Higgsfield render)
  planetVideo?: string; // optional looping video of the planet (Higgsfield image-to-video)
};

export type Member = {
  slug: string;
  name: string;
  role: string; // e.g. 'vocals · production' — placeholder ok
  // worlds this member drives (ids from `worlds`): shapes their accent + tags
  worlds: string[];
  accent: string; // page accent; falls back to canvas ink if you like
  bio: string; // short bio — placeholder ok, rewrite in the group's voice
  photo?: string; // primary portrait (hero + homepage card); omit for initials placeholder
  bgPhoto?: string; // full-bleed, faded hero background image
  heroVideo?: string; // scroll-scrubbed "liquid development" video for the artist-page hero
  gallery?: string[]; // extra photos shown in a gallery strip
  links?: { label: string; href: string }[];
};

export const members: Member[] = [
  {
    slug: 'rafe-tangorra',
    name: 'Rafe Tangorra',
    role: 'producer · multi-instrumentalist',
    worlds: ['house', 'velvet'],
    accent: '#00E5FF',
    bio: `Rafe Tangorra didn’t learn music in a classroom — he learned it on stages. On Long Island, he taught himself drums, then guitar, then bass, then keys, playing night after night and band after band until he could hear an entire record in his head and go build it himself. Years on the live circuit and a run of earlier projects sharpened the instinct that defines him now: whatever the song needs, he can play it.

In blanc, Rafe is the studio brain — the producer and multi-instrumentalist who builds the worlds the group’s songs live in. Raised on rock and roots but hooked on the craft of a great pop song, he refuses to pick a lane. A track usually starts with a riff that won’t leave him alone or a production idea he has to chase, then grows into something that doesn’t sound quite like anyone else. He’s the one who carries a song from a spark to a finished record.

Ask what he’s after and the answer is simple: it has to make you move. High-energy on stage and relentless behind the console, Rafe builds records with one job — to hit you in the body before you’ve had time to think.`,
    photo: 'members/rafe-tangorra.jpg',
    bgPhoto: 'members/rafe-live.jpg',
    heroVideo: 'members/rafe-develop.mp4',
    gallery: [
      'members/rafe-drums.jpg',
      'members/rafe-guitar.jpg',
      'members/rafe-studio.jpg',
    ],
  },
  {
    slug: 'nick-tangorra',
    name: 'Nick Tangorra',
    role: 'songwriter · TODO instrument/role',
    worlds: ['golden'],
    accent: '#C7761F',
    bio: 'PLACEHOLDER — Nick’s bio goes here. What he plays, what he writes, the world he lives in most.',
    // photo: 'members/nick-tangorra.jpg',
  },
  {
    slug: 'jacqueline-tangorra',
    name: 'Jacqueline Tangorra',
    role: 'songwriter · TODO instrument/role',
    worlds: ['velvet', 'golden'],
    accent: '#E23A55',
    bio: 'PLACEHOLDER — Jacqueline’s bio goes here. Her voice in the collective and the sound she’s known for.',
    // photo: 'members/jacqueline-tangorra.jpg',
  },
];

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

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
    planet: 'worlds/house-orb.jpg',
    planetVideo: 'worlds/house-orb.mp4',
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
    planet: 'worlds/golden-orb.jpg',
    planetVideo: 'worlds/golden-orb.mp4',
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
    planet: 'worlds/velvet-orb.jpg',
    planetVideo: 'worlds/velvet-orb.mp4',
  },
];

export type Track = {
  title: string;
  world: string; // world id from `worlds`
  released: boolean;
  artwork?: string; // path under /public, e.g. 'tracks/crimson.jpg' (square cover art)
  embed?: string; // streaming EMBED url for released tracks (Spotify / YouTube / SoundCloud)
  link?: string; // optional external "listen" link
};

// Add tracks here as you upload artwork + links.
//   Released  → set released:true and give it an `embed` (opens a player) + `artwork`.
//   Unreleased→ leave released:false; it shows as a "coming soon" tile (artwork optional).
export const tracks: Track[] = [
  {
    title: 'What You Doin?',
    world: 'house',
    released: true,
    embed: 'https://open.spotify.com/embed/track/1InUwMZAvg7kx7spgVKkvD',
    artwork: 'tracks/what-you-doin.jpg',
  },
  {
    title: 'Make That Sweat Drip',
    world: 'house',
    released: true,
    embed: 'https://open.spotify.com/embed/track/2fY4mz3HzN4zgq49Pzx7Et',
    artwork: 'tracks/make-that-sweat-drip.jpg',
  },
  {
    title: 'Curve in My Spine',
    world: 'golden',
    released: true,
    artwork: 'tracks/curve-in-my-spine.jpg',
    embed: 'https://open.spotify.com/embed/track/2Mwwkc4ikeMA0yazY1jMU0',
  },
  {
    title: 'Lose U',
    world: 'golden',
    released: true,
    embed: 'https://open.spotify.com/embed/track/5Q19gH5CloNOuR9E8Ui2PZ',
    artwork: 'tracks/lose-u.jpg',
  },
  {
    title: 'Beautiful Woman',
    world: 'golden',
    released: true,
    embed: 'https://open.spotify.com/embed/track/5toQlg206Si08Q0T1hyQb5',
    artwork: 'tracks/beautiful-woman.jpg',
  },
  {
    title: 'I Hate Your Friends',
    world: 'golden',
    released: false,
    artwork: 'tracks/i-hate-your-friends.jpg',
  },
  {
    title: 'Smoke Rises',
    world: 'golden',
    released: false,
    artwork: 'tracks/smoke-rises.jpg',
  },
  {
    title: 'Wild Eyes',
    world: 'golden',
    released: false,
    artwork: 'tracks/wild-eyes.jpg',
  },
  {
    title: 'Egypt',
    world: 'velvet',
    released: false,
    artwork: 'tracks/egypt.jpg',
  },
  {
    title: 'Free',
    world: 'velvet',
    released: false,
    artwork: 'tracks/free.jpg',
  },
];
