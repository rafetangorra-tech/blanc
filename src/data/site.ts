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
  cardOrigin?: string; // transform-origin for the homepage card's face-zoom crop
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
    worlds: ['house', 'golden', 'velvet'],
    accent: '#00E5FF',
    bio: `Rafe Tangorra didn’t learn music in a classroom — he learned it on stages. On Long Island, he taught himself drums, then guitar, then bass, then keys, playing night after night and band after band until he could hear an entire record in his head and go build it himself. Years on the live circuit and a run of earlier projects sharpened the instinct that defines him now: whatever the song needs, he can play it.

In blanc, Rafe is the studio brain — the producer and multi-instrumentalist who builds the worlds the group’s songs live in. Raised on rock and roots but hooked on the craft of a great pop song, he refuses to pick a lane. A track usually starts with a riff that won’t leave him alone or a production idea he has to chase, then grows into something that doesn’t sound quite like anyone else. He’s the one who carries a song from a spark to a finished record.

Ask what he’s after and the answer is simple: it has to make you move. High-energy on stage and relentless behind the console, Rafe builds records with one job — to hit you in the body before you’ve had time to think.`,
    photo: 'members/rafe-tangorra.jpg',
    cardOrigin: '59% 32%',
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
    role: 'the voice of blanc',
    worlds: ['house', 'golden'],
    accent: '#C7761F',
    photo: 'members/nick-tangorra.jpg',
    cardOrigin: '47% 24%',
    bgPhoto: 'members/nick-hero.jpg',
    heroVideo: 'members/nick-develop.mp4',
    gallery: ['members/nick-stage.jpg', 'members/nick-street.jpg'],
    bio: `Nick Tangorra has been the voice in the room since he was a teenager on Long Island, fronting the Nick Tangorra Band — the group he built with his brother Rafe — and turning a self-made single called “Boo Hoo” into 28 million streams. The rooms got bigger fast: writing sessions with Toby Gad, Lindy Robbins, and Steve Kipner, and stages shared with Fifth Harmony, Shawn Mendes, and Meghan Trainor. Born entertainer isn’t a figure of speech here. It’s the job description.

In blanc, Nick is the voice — all of it. Melodies pour out of him faster than the sessions can catch them, and then the craftsman takes over: stacking, comping, chasing the take until it’s undeniable. What comes out is a tone you recognize in one note, elastic enough to live in two worlds at once — smooth and hypnotic when it floats over House World’s pulse, close enough to whisper when Golden World asks for the truth.

And under all of it is the oldest partnership in the group: two brothers who’ve been writing songs in the same room for over a decade. Rafe builds the worlds; Nick makes you believe them. Put him in front of a crowd and you’ll see the rest — some people learn to hold a room. Nick was built for it.`,
  },
  {
    slug: 'jacqueline-tangorra',
    name: 'Jacqueline Tangorra',
    role: 'the pen of blanc',
    worlds: ['house', 'golden'],
    accent: '#C7761F',
    bio: `Jacqueline Tangorra was a poet long before she was a songwriter — twenty-three years of filling pages with the big subjects: love, faith, who you are when nobody’s watching. She’s the kind of writer who feels everything at full volume and then finds the six words that say it better than your own diary could. That instinct didn’t change when the pages became songs. It got dangerous.

In blanc, Jacqueline is the pen. She writes the line you rewind — the one that arrives in the second verse and quietly takes the whole song hostage. Golden World is where her handwriting shows most: unfiltered, diary-close detail, names-and-places honesty, the gut-punch delivered gently. And when the collective goes after House World’s pulse, she’s the reason there’s a story worth dancing to underneath it.

She’s also family — married to Rafe, which makes blanc less a project and more a household: her words, his worlds, Nick’s voice. Three writers passing the same truth around the room until it becomes a song. Somebody has to write down what the heart actually said. That’s Jacqueline’s job, and nobody does it with more love.`,
    photo: 'members/jacqueline-tangorra.jpg',
    cardOrigin: '49% 21%',
    bgPhoto: 'members/jacqueline-hero.jpg',
    heroVideo: 'members/jacqueline-develop.mp4',
    gallery: ['members/jacqueline-hat.jpg', 'members/jacqueline-hero.jpg'],
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
