export const motivationalQuestions = [
  {
    id: 'animal',
    title: 'STEP 1 — YOUR ANIMAL',
    text: 'Which African animal?',
    subtext: 'The animal carries the message. Choose wisely.',
    type: 'chip-grid',
    options: [
      'African Lion', 'Lioness', 'Leopard', 'Cheetah', 'African Elephant', 'Cape Buffalo',
      'African Wild Dog', 'Spotted Hyena', 'White Rhino', 'Giraffe', 'Zebra',
      'African Fish Eagle', 'Nile Crocodile', 'Serval', 'Caracal', 'Vervet Monkey',
      'Baboon', 'Warthog', 'Meerkat'
    ]
  },
  {
    id: 'who',
    title: 'STEP 2 — WHO IS THIS FOR?',
    text: 'Who is this for?',
    subtext: 'This shapes the voice of the message',
    type: 'single-select',
    options: [
      { value: 'myself', label: 'Myself', desc: 'Personal motivation — I need to hear this right now' },
      { value: 'someone-i-love', label: 'Someone I Care About', desc: 'A gift for someone going through something' },
      { value: 'my-team', label: 'My Team or Business', desc: 'Leadership, culture, shared purpose' },
      { value: 'a-teenager', label: 'A Young Person', desc: 'Teen or young adult finding their way' }
    ]
  },
  {
    id: 'challenge',
    title: 'STEP 3 — WHAT IS THE CHALLENGE?',
    text: 'What are they facing?',
    subtext: 'Be honest. This is what the quote will speak to.',
    type: 'single-select',
    options: [
      { value: 'starting-something', label: 'Starting Something New', desc: 'Beginning a business, a journey, a chapter' },
      { value: 'pushing-through', label: 'Pushing Through Difficulty', desc: 'Mid-battle — tired but not done' },
      { value: 'self-doubt', label: 'Overcoming Self-Doubt', desc: 'The voice in their head is too loud' },
      { value: 'stepping-up', label: 'Stepping Into Leadership', desc: 'Taking responsibility, owning the room' },
      { value: 'chasing-big', label: 'Chasing a Big Goal', desc: 'The dream feels too large' },
      { value: 'after-setback', label: 'Rising After a Setback', desc: 'Loss, failure, a fall — the comeback' },
      { value: 'finding-purpose', label: 'Searching for Purpose', desc: 'What am I here for?' },
      { value: 'staying-hungry', label: 'Staying Hungry at the Top', desc: 'Complacency is the enemy' }
    ]
  },
  {
    id: 'feeling',
    title: 'STEP 4 — THE FEELING',
    text: 'How should it feel?',
    subtext: 'When someone looks at this poster, what hits them in the chest?',
    type: 'single-select',
    options: [
      { value: 'fired-up', label: 'Fired Up & Unstoppable', desc: 'Raw energy, aggression, go-mode' },
      { value: 'calm-determined', label: 'Calm & Deeply Determined', desc: 'Still water runs deep — quiet power' },
      { value: 'reflective', label: 'Reflective & Purposeful', desc: 'Slowing down to see clearly' },
      { value: 'fearless', label: 'Fearless & Bold', desc: 'Nothing to lose, everything to gain' },
      { value: 'hopeful', label: 'Hopeful & Rising', desc: 'The comeback, the dawn after dark' },
      { value: 'focused', label: 'Locked In & Focused', desc: 'Tunnel vision, precision, no distraction' }
    ]
  },
  {
    id: 'format',
    title: 'STEP 5 — FORMAT',
    text: 'Output Format',
    type: 'single-select',
    options: [
      { value: 'poster-portrait', label: 'Portrait Poster', desc: '2:3 ratio' },
      { value: 'poster-square', label: 'Square', desc: '1:1 ratio' },
      { value: 'poster-wide', label: 'Wide / Cinematic', desc: '16:9 ratio' },
      { value: 'us-letter', label: 'US Letter Print', desc: '8.5:11 ratio' }
    ]
  },
  {
    id: 'models',
    title: 'STEP 6 — TARGET MODELS',
    text: 'Which AI platforms?',
    type: 'multi-select',
    options: [
      { value: 'gemini', label: 'Gemini / Imagen 3', desc: 'TESTED & CONFIRMED' },
      { value: 'gpt', label: 'ChatGPT / DALL-E 3', desc: '' },
      { value: 'bing', label: 'Bing Image Creator', desc: '' },
      { value: 'midjourney', label: 'Midjourney', desc: 'See text warning' },
      { value: 'flux-pro', label: 'Flux 2 Pro', desc: '' },
      { value: 'flux-dev', label: 'Flux 2 Dev', desc: '' },
      { value: 'flux-klein-4b', label: 'Flux 2 Klein-4b', desc: '' },
      { value: 'flux-klein-9b', label: 'Flux 2 Klein-9b', desc: '' },
      { value: 'flux-flex', label: 'Flux 2 Flex', desc: '' }
    ]
  }
];

const animalToneMap: Record<string, string[]> = {
  'African Lion': ['leadership', 'dominance', 'ambition'],
  'Lioness': ['resilience', 'fierce love', 'protective strength'],
  'Leopard': ['quiet strength', 'patience', 'stealth'],
  'Cheetah': ['speed', 'focus', 'freedom', 'pursuit'],
  'African Elephant': ['wisdom', 'memory', 'family', 'endurance'],
  'Cape Buffalo': ['stubbornness', 'resilience', 'herd strength'],
  'African Wild Dog': ['loyalty', 'teamwork', 'never giving up'],
  'Spotted Hyena': ['underestimated', 'survivor', 'misunderstood power'],
  'White Rhino': ['immovable', 'ancient', 'unstoppable'],
  'Giraffe': ['perspective', 'rising above', 'long view'],
  'Zebra': ['individuality', 'identity', 'standing out'],
  'African Fish Eagle': ['vision', 'freedom', 'clarity', 'high perspective'],
  'Nile Crocodile': ['patience', 'ancient wisdom', 'calculated'],
  'Serval': ['precision', 'elegance', 'quiet lethality'],
  'Caracal': ['independence', 'agility', 'defiance'],
  'Vervet Monkey': ['curiosity', 'adaptability', 'intelligence'],
  'Baboon': ['community', 'survival', 'raw tenacity'],
  'Warthog': ['humility', 'resilience', 'underdog'],
  'Meerkat': ['vigilance', 'community', 'standing tall']
};

const quotes = [
  { text: "If your dreams don't scare you, they aren't BIG enough.", accentWord: "BIG", color: "#FFD700", comp: "low upward angle, animal looking skyward", style: "dark-photography", tags: ["ambition", "chasing-big", "fired-up"] },
  { text: "The size of your dreams must always exceed your current CAPACITY.", accentWord: "CAPACITY", color: "#FFD700", comp: "face-on portrait, dominant", style: "dark-photography", tags: ["ambition", "chasing-big", "fired-up"] },
  { text: "Stop waiting for the right moment. CREATE it.", accentWord: "CREATE", color: "#FFA500", comp: "mid-action, forward motion", style: "cinematic-colour", tags: ["ambition", "chasing-big", "fired-up", "starting-something"] },
  { text: "Be so good they can't IGNORE you.", accentWord: "IGNORE", color: "#FFD700", comp: "direct gaze into lens, confrontational", style: "dark-photography", tags: ["ambition", "chasing-big", "fired-up"] },
  { text: "Chase the vision, not the MONEY.", accentWord: "MONEY", color: "#C0C0C0", comp: "silhouette against sky", style: "bw-photography", tags: ["ambition", "chasing-big", "fired-up"] },
  { text: "The comeback is always STRONGER than the setback.", accentWord: "STRONGER", color: "#C0C0C0", comp: "lioness mid-roar, defiant", style: "bw-photography", tags: ["resilience", "after-setback", "hopeful"] },
  { text: "Fall seven times. STAND UP eight.", accentWord: "STAND UP", color: "#FFD700", comp: "animal rising from low position", style: "dark-photography", tags: ["resilience", "after-setback", "hopeful", "pushing-through"] },
  { text: "What doesn't kill you makes you STRONGER.", accentWord: "STRONGER", color: "#C0C0C0", comp: "scarred animal, battle-worn, dignified", style: "bw-photography", tags: ["resilience", "after-setback", "hopeful"] },
  { text: "The storm doesn't last FOREVER.", accentWord: "FOREVER", color: "#50C878", comp: "animal in mist or rain, light breaking through", style: "cinematic-colour", tags: ["resilience", "after-setback", "hopeful"] },
  { text: "Every scar is a STORY of survival.", accentWord: "STORY", color: "#C0C0C0", comp: "extreme close-up of aged animal face", style: "dark-photography", tags: ["resilience", "after-setback", "hopeful"] },
  { text: "Pain is temporary. QUITTING is forever.", accentWord: "QUITTING", color: "#FFA500", comp: "animal mid-exertion, pushing forward", style: "dark-photography", tags: ["resilience", "after-setback", "hopeful", "pushing-through"] },
  { text: "Mindset is EVERYTHING.", accentWord: "EVERYTHING", color: "#FFD700", comp: "surreal water reflection — cub above, lion below", style: "concept-art", tags: ["self-doubt", "calm-determined", "reflective"] },
  { text: "Your only limit is your MIND.", accentWord: "MIND", color: "#C0C0C0", comp: "animal gazing into distance, contemplative", style: "bw-photography", tags: ["self-doubt", "calm-determined", "reflective"] },
  { text: "Whether you think you can or you think you can't — you're RIGHT.", accentWord: "RIGHT", color: "#FFD700", comp: "direct confrontational gaze", style: "dark-photography", tags: ["self-doubt", "calm-determined", "reflective"] },
  { text: "Silence is the best response to a FOOL.", accentWord: "FOOL", color: "#C0C0C0", comp: "animal in calm stillness, side profile", style: "dark-photography", tags: ["self-doubt", "calm-determined", "reflective"] },
  { text: "The quieter you become, the more you can HEAR.", accentWord: "HEAR", color: "#C0C0C0", comp: "animal ears forward, alert stillness", style: "dark-photography", tags: ["self-doubt", "calm-determined", "reflective"] },
  { text: "Doubt kills more dreams than FAILURE ever will.", accentWord: "FAILURE", color: "#FFA500", comp: "low angle upward, animal against open sky", style: "cinematic-colour", tags: ["self-doubt", "calm-determined", "reflective"] },
  { text: "Kings don't need approval from their KINGDOM.", accentWord: "KINGDOM", color: "#FFD700", comp: "lion surveying landscape from elevation", style: "cinematic-colour", tags: ["leadership", "stepping-up", "fired-up"] },
  { text: "A true leader leads by EXAMPLE.", accentWord: "EXAMPLE", color: "#FFD700", comp: "male lion with pride behind, leading", style: "dark-photography", tags: ["leadership", "stepping-up", "fired-up"] },
  { text: "Not the loudest in the room. The most PREPARED.", accentWord: "PREPARED", color: "#C0C0C0", comp: "animal in perfect stillness, coiled readiness", style: "bw-photography", tags: ["leadership", "stepping-up", "fired-up"] },
  { text: "The lion doesn't lose sleep over the opinion of SHEEP.", accentWord: "SHEEP", color: "#FFD700", comp: "resting lion, eyes half open, utterly unbothered", style: "dark-photography", tags: ["leadership", "stepping-up", "fired-up"] },
  { text: "Command respect. Never DEMAND it.", accentWord: "DEMAND", color: "#FFA500", comp: "direct face-on portrait, commanding", style: "dark-photography", tags: ["leadership", "stepping-up", "fired-up"] },
  { text: "Your purpose is greater than your PAIN.", accentWord: "PAIN", color: "#50C878", comp: "animal in dramatic landscape, small against vastness", style: "cinematic-colour", tags: ["purpose", "finding-purpose", "reflective"] },
  { text: "Live as if you'll die tomorrow. LEARN as if you'll live forever.", accentWord: "LEARN", color: "#50C878", comp: "elephant — wisdom and age visible", style: "dark-photography", tags: ["purpose", "finding-purpose", "reflective"] },
  { text: "Do what you love or spend your life doing what you HATE.", accentWord: "HATE", color: "#FFA500", comp: "animal in full natural habitat, free and purposeful", style: "cinematic-colour", tags: ["purpose", "finding-purpose", "reflective"] },
  { text: "One life. Make it MATTER.", accentWord: "MATTER", color: "#FFD700", comp: "extreme close-up eye shot, one eye filling the frame", style: "dark-photography", tags: ["purpose", "finding-purpose", "reflective"] },
  { text: "Be the energy you want to ATTRACT.", accentWord: "ATTRACT", color: "#50C878", comp: "animal backlit, golden halo, majestic", style: "cinematic-colour", tags: ["purpose", "finding-purpose", "reflective"] },
  { text: "Don't wait for OPPORTUNITIES. Create them.", accentWord: "OPPORTUNITIES", color: "#FFD700", comp: "lioness mid-roar, upward angle", style: "dark-photography", tags: ["staying-hungry", "focus", "locked-in", "fired-up"] },
  { text: "Good things come to those who WORK.", accentWord: "WORK", color: "#FFA500", comp: "cheetah at full sprint, peak action", style: "dark-photography", tags: ["staying-hungry", "focus", "locked-in", "fired-up"] },
  { text: "Stay focused. Stay HUNGRY.", accentWord: "HUNGRY", color: "#FFD700", comp: "leopard stalking, low and focused", style: "dark-photography", tags: ["staying-hungry", "focus", "locked-in"] },
  { text: "The grind doesn't stop. EVER.", accentWord: "EVER", color: "#C0C0C0", comp: "animal in harsh environment, enduring", style: "bw-photography", tags: ["staying-hungry", "focus", "locked-in"] },
  { text: "Discipline is choosing what you WANT most over what you want NOW.", accentWord: "WANT", color: "#00BFFF", comp: "cheetah locked on distant prey", style: "cinematic-colour", tags: ["staying-hungry", "focus", "locked-in"] },
  { text: "You are BRAVER than you believe.", accentWord: "BRAVER", color: "#FFD700", comp: "young animal (cub, juvenile), looking upward", style: "cinematic-colour", tags: ["young-person", "teenager", "fearless"] },
  { text: "The world needs what only YOU can give.", accentWord: "YOU", color: "#50C878", comp: "zebra standing apart from herd, individual", style: "cinematic-colour", tags: ["young-person", "teenager", "hopeful"] },
  { text: "Be yourself. Everyone else is TAKEN.", accentWord: "TAKEN", color: "#FFD700", comp: "animal with unique marking or feature prominent", style: "cinematic-colour", tags: ["young-person", "teenager"] },
  { text: "Your story isn't OVER.", accentWord: "OVER", color: "#C0C0C0", comp: "young animal in wide open landscape", style: "cinematic-colour", tags: ["young-person", "teenager", "hopeful", "after-setback"] },
  { text: "Dream BIGGER.", accentWord: "BIGGER", color: "#FFD700", comp: "cub looking up at vast sky", style: "dark-photography", tags: ["young-person", "teenager", "chasing-big"] }
];

const colorDesc: Record<string, string> = {
  '#FFD700': 'warm gold, as if lit from within, radiating heat and ambition',
  '#FFA500': 'deep amber gold, urgent and burning, like the last light before dark',
  '#C0C0C0': 'cold bright silver with a subtle metallic sheen, hard and unbreakable, like forged steel',
  '#50C878': 'rich emerald green, living and growing, full of forward energy and renewal',
  '#00BFFF': 'vivid electric blue with a faint luminous glow, as if electrified, echoing the open sky'
};

const colorNames: Record<string, string> = {
  '#FFD700': 'Gold',
  '#FFA500': 'Amber Gold',
  '#C0C0C0': 'Silver',
  '#50C878': 'Emerald',
  '#00BFFF': 'Electric Blue'
};

const visualStyles: Record<string, string> = {
  'dark-photography': 'near-black background, single dramatic Rembrandt off-axis light source, deep sculptural shadows, ultra-realistic wildlife photography, National Geographic quality, no artistic stylisation',
  'bw-photography': 'high contrast black and white photography, rich blacks, crisp whites, full tonal range, timeless editorial monochrome, no colour whatsoever',
  'cinematic-colour': 'cinematic colour grade, muted desaturated warm tones, crushed blacks, film aesthetic, subtle vignette, rich shadows, Kodak film look',
  'concept-art': 'surreal conceptual composite — photorealistic elements combined with artistic surreal composition'
};

const formatLookup: Record<string, { ratio: string, ar: string }> = {
  'poster-portrait': { ratio: '2:3 portrait', ar: '2:3' },
  'poster-square': { ratio: '1:1 square', ar: '1:1' },
  'poster-wide': { ratio: '16:9 widescreen', ar: '16:9' },
  'us-letter': { ratio: '8.5:11 portrait', ar: '17:22' }
};

export const generateMotivationalPrompts = (answers: any, customAccentWord?: string | null) => {
  const animal = answers.animal;
  const who = answers.who;
  const challenge = answers.challenge;
  const feeling = answers.feeling;
  const format = formatLookup[answers.format];
  const models = answers.models || [];

  const userTags = [...(animalToneMap[animal] || []), challenge, feeling];
  if (who === 'a-teenager') userTags.push('young-person', 'teenager');

  let bestQuote = quotes[0];
  let maxScore = -1;

  for (const q of quotes) {
    const score = q.tags.filter(t => userTags.includes(t)).length;
    if (score > maxScore) {
      maxScore = score;
      bestQuote = q;
    }
  }

  if (maxScore === 0) {
    const fallback = quotes.find(q => q.tags.includes(feeling));
    if (fallback) bestQuote = fallback;
    else bestQuote = quotes.find(q => q.accentWord === 'MATTER') || quotes[0];
  }

  const finalAccentWord = customAccentWord || bestQuote.accentWord;
  const colorHex = bestQuote.color;
  const colorDescriptor = colorDesc[colorHex];
  const visualStyleDesc = visualStyles[bestQuote.style];
  const compDesc = bestQuote.comp;

  const typographySpec = `Typography: Bold clean sans-serif typeface, highly legible at all sizes. Primary quote text in white (#FFFFFF), large and commanding. The single word "${finalAccentWord}" is rendered in ${colorHex} — ${colorDescriptor} — noticeably larger or heavier than the surrounding words. Text sits entirely within clear dark negative space. Never placed over complex animal texture or eye detail. Strong contrast ensures full legibility. No thin fonts. No script. No decorative typefaces. Wide letter-spacing on secondary lines. Generous padding from all edges.`;

  const results = [];

  if (models.includes('gemini')) {
    results.push({
      model: 'Gemini / Imagen 3',
      prompts: [{
        text: `Create a dramatic motivational poster.\n\nSubject: ${animal}, ${compDesc}.\nVisual treatment: ${visualStyleDesc}.\nText placement: upper 40% or lower 35% in clear dark space.\n\n${typographySpec}\n\nThe quote reads:\n"${bestQuote.text}"\n\nQuality: Ultra HD, ${format.ratio} aspect ratio, large format print quality. No watermarks. No logos. No borders.`
      }]
    });
  }

  if (models.includes('gpt')) {
    results.push({
      model: 'ChatGPT / DALL-E 3',
      prompts: [{
        text: `Generate a motivational poster image. ${visualStyleDesc}. ${animal}, ${compDesc}. The exact text "${bestQuote.text}" must appear clearly in the image as bold sans-serif typography. White text throughout except the word "${finalAccentWord}" which must be rendered in ${colorHex} and appear larger than surrounding words. Text in clear dark space. High contrast, fully legible. Ultra HD, ${format.ratio}. No watermarks.`
      }]
    });
  }

  if (models.includes('bing')) {
    results.push({
      model: 'Bing Image Creator',
      prompts: [{
        text: `Motivational poster, ${visualStyleDesc}. ${animal}, ${compDesc}. Bold white sans-serif text reading "${bestQuote.text}" with the word "${finalAccentWord}" highlighted in ${colorHex} and rendered larger for emphasis. Text in clear dark background, high legibility. Ultra HD, ${format.ratio}. No watermarks, no logos.`
      }]
    });
  }

  if (models.includes('midjourney')) {
    results.push({
      model: 'Midjourney',
      prompts: [
        {
          label: 'WITH TEXT',
          text: `${compDesc}, ${bestQuote.style.replace('-', ' ')}, motivational poster design, bold white sans-serif text "${bestQuote.text}" with ${finalAccentWord} in ${colorHex} larger, dramatic lighting, ultra HD --ar ${format.ar} --v 6.1 --style raw`
        },
        {
          label: 'IMAGE ONLY (FOR CANVA OVERLAY)',
          text: `${compDesc}, ${bestQuote.style.replace('-', ' ')}, dramatic lighting, clear dark negative space for text overlay, ultra HD --ar ${format.ar} --v 6.1 --style raw`
        }
      ]
    });
  }

  const fluxModels = models.filter((m: string) => m.startsWith('flux-'));
  for (const flux of fluxModels) {
    results.push({
      model: flux.replace('-', ' ').toUpperCase(),
      prompts: [{
        text: `${visualStyleDesc}. ${animal}, ${compDesc}. Text overlay: bold sans-serif typography reading "${bestQuote.text}". Word "${finalAccentWord}" in ${colorHex} — ${colorDescriptor} — larger than surrounding text. Text in dark negative space, fully legible. Ultra HD, ${format.ratio}. No watermarks.`
      }]
    });
  }

  return {
    results,
    quoteData: {
      text: bestQuote.text,
      accentWord: finalAccentWord,
      accentColorHex: colorHex,
      accentColorName: colorNames[colorHex]
    }
  };
};
