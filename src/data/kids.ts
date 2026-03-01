export const kidsQuestions = [
  {
    id: 'age-group',
    title: 'STEP 1 — AGE GROUP',
    text: 'Age Group',
    subtext: 'This shapes the quote complexity, visual tone and typography style',
    type: 'single-select',
    options: [
      { value: 'age-7-9', label: 'Ages 7–9', desc: 'Simple truths, warmth and safety. Short sentences. Big friendly animals.' },
      { value: 'age-10-12', label: 'Ages 10–12', desc: 'Identity, individuality and courage. Slightly more sophisticated.' },
      { value: 'age-13-16', label: 'Ages 13–16', desc: 'Purpose, resilience and authenticity. Almost adult tone but always hopeful.' }
    ]
  },
  {
    id: 'lesson',
    title: 'STEP 2 — WHAT SHOULD THIS TEACH?',
    text: 'Life Lesson',
    subtext: 'The lesson shapes the quote, the animal and the mood',
    type: 'single-select',
    options: [
      { value: 'kindness', label: 'Kindness', desc: 'Being good to others costs nothing and means everything' },
      { value: 'belonging', label: 'Belonging', desc: 'You are never alone. Community, togetherness, love' },
      { value: 'individuality', label: 'Individuality', desc: 'There is no one in the world quite like you' },
      { value: 'confidence', label: 'Quiet Confidence', desc: 'You don\'t have to be the loudest to be powerful' },
      { value: 'resilience', label: 'Resilience', desc: 'Every champion was once a beginner' },
      { value: 'purpose', label: 'Purpose & Direction', desc: 'Know where you are going' },
      { value: 'curiosity', label: 'Curiosity', desc: 'Never stop asking why' },
      { value: 'bravery', label: 'Bravery', desc: 'Courage is doing it even when you are scared' },
      { value: 'growth', label: 'Growth', desc: 'You are not finished yet — you are just beginning' },
      { value: 'friendship', label: 'Friendship', desc: 'The best adventures are shared' }
    ]
  },
  {
    id: 'animal',
    title: 'STEP 3 — CHOOSE YOUR ANIMAL',
    text: 'Animal',
    subtext: 'Baby and juvenile animals only — warm, curious and approachable',
    type: 'chip-grid',
    getOptions: (answers: any) => {
      const age = answers['age-group'];
      if (age === 'age-7-9') return ['Baby Elephant', 'Meerkat Family', 'Lion Cub', 'Baby Giraffe', 'Baby Zebra', 'Meerkat Pup', 'Baby Rhino', 'Cheetah Cub', 'Baby Warthog', 'Penguin Chick', 'Baby Hippo', 'Young Baboon'];
      if (age === 'age-10-12') return ['Lion Cub', 'Young Zebra', 'Cheetah Cub', 'Juvenile Giraffe', 'Young Wild Dog', 'Young Elephant', 'Baby Rhino', 'Young Leopard', 'Juvenile Meerkat', 'Young Baboon', 'Juvenile Caracal', 'Young Serval'];
      if (age === 'age-13-16') return ['Young Cheetah', 'Juvenile Lion', 'Young Elephant Bull', 'Young Leopard', 'Juvenile Wild Dog', 'Young Buffalo', 'Young Rhino', 'Juvenile Giraffe', 'Young Eagle', 'Young Crocodile', 'Juvenile Zebra'];
      return ['Baby Elephant', 'Lion Cub', 'Cheetah Cub', 'Baby Giraffe'];
    }
  },
  {
    id: 'feeling',
    title: 'STEP 4 — HOW SHOULD IT MAKE THEM FEEL?',
    text: 'Feeling',
    subtext: 'When your child looks at this every day, what hits them?',
    type: 'single-select',
    options: [
      { value: 'safe-loved', label: 'Safe and Loved', desc: 'Warm, held, unconditionally belonging' },
      { value: 'joyful', label: 'Joyful and Bright', desc: 'Happy, energised, the world is wonderful' },
      { value: 'quietly-strong', label: 'Quietly Strong', desc: 'Calm, capable, I can handle this' },
      { value: 'uniquely-me', label: 'Uniquely Themselves', desc: 'I am enough exactly as I am' },
      { value: 'ready-to-grow', label: 'Ready to Grow', desc: 'I am becoming something great' },
      { value: 'brave', label: 'Brave and Unafraid', desc: 'I can do hard things' }
    ]
  },
  {
    id: 'style',
    title: 'STEP 5 — VISUAL STYLE',
    text: 'Art Style',
    subtext: 'How should the artwork look and feel?',
    type: 'single-select',
    options: [
      { value: 'warm-photography', label: 'Warm Photography', desc: 'Photorealistic but soft and golden — recommended' },
      { value: 'painterly', label: 'Painterly / Illustrated', desc: 'Warm digital illustration, painterly brushwork, storybook quality' },
      { value: 'watercolour', label: 'Watercolour', desc: 'Soft watercolour wash, gentle edges, dreamy and tender' },
      { value: 'vector-bright', label: 'Bold & Graphic', desc: 'Clean flat vector shapes, bright colours, modern poster feel' },
      { value: 'cinematic-warm', label: 'Cinematic Warm', desc: 'Film-grade warm colour grade, more sophisticated' }
    ]
  },
  {
    id: 'format',
    title: 'STEP 6 — FORMAT',
    text: 'Output Format',
    type: 'single-select',
    options: [
      { value: 'portrait-standard', label: 'Portrait Print', desc: '2:3 ratio' },
      { value: 'square', label: 'Square', desc: '1:1 ratio' },
      { value: 'portrait-tall', label: 'Tall Portrait', desc: '3:4 ratio' },
      { value: 'wide', label: 'Wide', desc: '16:9 ratio' }
    ]
  },
  {
    id: 'models',
    title: 'STEP 7 — TARGET MODELS',
    text: 'Which AI platforms?',
    type: 'multi-select',
    options: [
      { value: 'gemini', label: 'Gemini / Imagen 3', desc: 'TESTED & CONFIRMED' },
      { value: 'gpt', label: 'ChatGPT / DALL-E 3', desc: '' },
      { value: 'bing', label: 'Bing Image Creator', desc: '' },
      { value: 'midjourney', label: 'Midjourney', desc: 'See text warning' },
      { value: 'flux-pro', label: 'Flux 2 Pro', desc: '' },
      { value: 'flux-dev', label: 'Flux 2 Dev', desc: '' },
      { value: 'flux-klein-9b', label: 'Flux 2 Klein-9b', desc: '' },
      { value: 'flux-flex', label: 'Flux 2 Flex', desc: '' }
    ]
  }
];

const quotes = [
  { text: "Be kind. It costs NOTHING and means everything.", accentWord: "NOTHING", color: "#FFD166", lesson: "kindness", ageFit: ["age-7-9"] },
  { text: "The kindest thing you can do is make someone feel SEEN.", accentWord: "SEEN", color: "#FF6B6B", lesson: "kindness", ageFit: ["age-10-12", "age-13-16"] },
  { text: "Small acts of kindness make a ENORMOUS difference.", accentWord: "ENORMOUS", color: "#FFD166", lesson: "kindness", ageFit: ["age-7-9"] },
  { text: "Be the reason someone smiled TODAY.", accentWord: "TODAY", color: "#FF6B6B", lesson: "kindness", ageFit: ["age-7-9", "age-10-12"] },
  { text: "You are never ALONE.", accentWord: "ALONE", color: "#FF6B6B", lesson: "belonging", ageFit: ["age-7-9"] },
  { text: "You belong here. You have always BELONGED.", accentWord: "BELONGED", color: "#FF6B6B", lesson: "belonging", ageFit: ["age-10-12", "age-13-16"] },
  { text: "The best adventures are always SHARED.", accentWord: "SHARED", color: "#FFD166", lesson: "belonging", ageFit: ["age-7-9", "age-10-12"] },
  { text: "Home is wherever your people ARE.", accentWord: "ARE", color: "#FF6B6B", lesson: "belonging", ageFit: ["age-7-9"] },
  { text: "There is no one in the world quite like YOU.", accentWord: "YOU", color: "#00C9C8", lesson: "individuality", ageFit: ["age-10-12"] },
  { text: "Your difference is your greatest STRENGTH.", accentWord: "STRENGTH", color: "#00C9C8", lesson: "individuality", ageFit: ["age-10-12", "age-13-16"] },
  { text: "Normal is a word invented by people who were afraid to be THEMSELVES.", accentWord: "THEMSELVES", color: "#00C9C8", lesson: "individuality", ageFit: ["age-13-16"] },
  { text: "The world is full of copies. Be an ORIGINAL.", accentWord: "ORIGINAL", color: "#00C9C8", lesson: "individuality", ageFit: ["age-13-16"] },
  { text: "You don't have to ROAR to be heard.", accentWord: "ROAR", color: "#FFD700", lesson: "confidence", ageFit: ["age-10-12"] },
  { text: "Confidence is quiet. Insecurity is LOUD.", accentWord: "LOUD", color: "#FFD700", lesson: "confidence", ageFit: ["age-13-16"] },
  { text: "You are stronger than you KNOW.", accentWord: "KNOW", color: "#FFD700", lesson: "confidence", ageFit: ["age-10-12"] },
  { text: "Stand tall. Not everyone has to understand YOUR path.", accentWord: "YOUR", color: "#FFD700", lesson: "confidence", ageFit: ["age-10-12", "age-13-16"] },
  { text: "Every champion was once a beginner who refused to QUIT.", accentWord: "QUIT", color: "#FFA500", lesson: "resilience", ageFit: ["age-13-16"] },
  { text: "Falling down is how you learn to get BACK UP.", accentWord: "BACK UP", color: "#FFA500", lesson: "resilience", ageFit: ["age-10-12"] },
  { text: "The comeback is always stronger than the SETBACK.", accentWord: "SETBACK", color: "#FFA500", lesson: "resilience", ageFit: ["age-13-16"] },
  { text: "You are tougher than whatever you are going THROUGH.", accentWord: "THROUGH", color: "#FFA500", lesson: "resilience", ageFit: ["age-13-16"] },
  { text: "It is okay to start SMALL.", accentWord: "SMALL", color: "#FFD700", lesson: "resilience", ageFit: ["age-7-9"] },
  { text: "The world makes room for those who know where they are GOING.", accentWord: "GOING", color: "#50C878", lesson: "purpose", ageFit: ["age-13-16"] },
  { text: "You were made for something MEANINGFUL.", accentWord: "MEANINGFUL", color: "#50C878", lesson: "purpose", ageFit: ["age-13-16"] },
  { text: "The path is yours. Walk it with INTENTION.", accentWord: "INTENTION", color: "#50C878", lesson: "purpose", ageFit: ["age-13-16"] },
  { text: "One day at a time. One step at a TIME.", accentWord: "TIME", color: "#50C878", lesson: "purpose", ageFit: ["age-7-9", "age-10-12"] },
  { text: "Never stop asking WHY.", accentWord: "WHY", color: "#00C9C8", lesson: "curiosity", ageFit: ["age-7-9", "age-10-12"] },
  { text: "The biggest adventures begin with a single QUESTION.", accentWord: "QUESTION", color: "#FFD166", lesson: "curiosity", ageFit: ["age-7-9", "age-10-12"] },
  { text: "Stay curious. The world is bigger than you THINK.", accentWord: "THINK", color: "#00C9C8", lesson: "curiosity", ageFit: ["age-10-12", "age-13-16"] },
  { text: "Courage is doing it even when you are SCARED.", accentWord: "SCARED", color: "#FFA500", lesson: "bravery", ageFit: ["age-10-12", "age-13-16"] },
  { text: "Be brave enough to be BAD at something new.", accentWord: "BAD", color: "#FFA500", lesson: "bravery", ageFit: ["age-10-12"] },
  { text: "Do it afraid. Brave isn't the absence of FEAR.", accentWord: "FEAR", color: "#FFA500", lesson: "bravery", ageFit: ["age-13-16"] },
  { text: "You are not finished. You are just BEGINNING.", accentWord: "BEGINNING", color: "#50C878", lesson: "growth", ageFit: ["age-13-16"] },
  { text: "Growth is uncomfortable. So is staying the SAME.", accentWord: "SAME", color: "#50C878", lesson: "growth", ageFit: ["age-13-16"] },
  { text: "Every expert was once a complete BEGINNER.", accentWord: "BEGINNER", color: "#50C878", lesson: "growth", ageFit: ["age-10-12"] },
  { text: "The best adventures are SHARED.", accentWord: "SHARED", color: "#FFD166", lesson: "friendship", ageFit: ["age-7-9", "age-10-12"] }
];

const colorDesc: Record<string, string> = {
  '#FFD166': 'warm bright sunshine yellow, radiant and joyful, like the best day of summer',
  '#FF6B6B': 'warm coral, tender and enveloping, the colour of warmth and unconditional love',
  '#FFD700': 'warm gold, glowing from within, quiet confidence and inner strength',
  '#00C9C8': 'bright fresh turquoise, alive with individuality and possibility, like clear open water',
  '#50C878': 'rich living emerald green, growing and forward-moving, full of potential',
  '#FFA500': 'deep warm amber, determined and energised, the colour of doing it anyway'
};

const colorNames: Record<string, string> = {
  '#FFD166': 'Sunshine Yellow',
  '#FF6B6B': 'Coral',
  '#FFD700': 'Warm Gold',
  '#00C9C8': 'Turquoise',
  '#50C878': 'Emerald',
  '#FFA500': 'Amber'
};

const visualStyles: Record<string, string> = {
  'warm-photography': 'warm photorealistic style, soft golden natural lighting, painterly photographic quality, ultra detailed, never intimidating',
  'painterly': 'warm digital illustration, confident painterly brushwork, storybook quality, rich colour, tactile texture visible',
  'watercolour': 'soft watercolour illustration, gentle wet edges, luminous washes of colour, dreamy and tender, white paper showing through in highlights',
  'vector-bright': 'bold clean vector graphic illustration, bright saturated flat colours, strong clear shapes, modern children\'s poster design aesthetic',
  'cinematic-warm': 'cinematic warm colour grade, film aesthetic, muted golden tones, sophisticated but hopeful, Kodak film warmth'
};

const ageTone: Record<string, string> = {
  'age-7-9': 'warm, joyful and magical. Soft golden afternoon light. Background bright and full of gentle colour — golden grasses, soft bokeh, no harsh elements. Overall mood: safe, warm and wonder-filled. Soft painterly photorealistic style — ultra detailed but gentle and inviting, never intimidating.',
  'age-10-12': 'warm, confident and quietly empowering. Directional warm golden light giving gentle depth. Background is soft focus — open and full of possibility. Mood: calm self-assurance. Warm photorealistic style with beautiful detail.',
  'age-13-16': 'cinematic, purposeful and quietly inspiring. Warm golden afternoon or late afternoon side light. Long shadows. Background wide and open — the whole world ahead. Mood: not aggressive — directional and certain. Cinematic photorealistic style, extraordinary detail in fur and light.'
};

const ageTypo: Record<string, string> = {
  'age-7-9': 'Bold clean ROUNDED sans-serif font — warm and friendly but strong. Slightly rounder letterforms than adult motivational style. Text in clear warm negative space — never over the animal\'s face or eyes. Primary text: warm white (#FFFFFF). Wide letter-spacing throughout. Generous line separation. Large enough to read easily from across a room. Never decorative, never script, never thin.',
  'age-10-12': 'Bold clean rounded sans-serif font — confident and warm. Slightly more mature than 7-9 but still approachable. Text in clear negative space. Primary text: white (#FFFFFF). Wide letter-spacing. All lines clearly separated. Fully legible at large print sizes.',
  'age-13-16': 'Bold clean sans-serif font — mature but warm. Not aggressive. Closer to adult motivational typography but with warmth preserved. Text in clear negative space. Primary text: white (#FFFFFF). Wide letter-spacing on secondary lines. Final word commands the space. Fully legible at all print sizes.'
};

const formatLookup: Record<string, { ratio: string, ar: string }> = {
  'portrait-standard': { ratio: '2:3 portrait', ar: '2:3' },
  'square': { ratio: '1:1 square', ar: '1:1' },
  'portrait-tall': { ratio: '3:4 portrait', ar: '3:4' },
  'wide': { ratio: '16:9 widescreen', ar: '16:9' }
};

const STANDARD_NEGATIVE_PROMPT = 'scary or aggressive expression, intimidating posture or composition, dark or near-black background, adult predator in threatening pose, blood or hunting scene, deformed limbs, extra legs or arms, malformed facial features, asymmetrical eyes, blurred subject face, incorrect animal anatomy, misspelled words, extra words not in the specified quote, duplicate text lines, additional sentences or phrases not listed, text appearing in wrong position, script or decorative fonts, thin or light-weight fonts, blurred or warped text, distorted letterforms, text placed over the animal\'s eyes or face, watermarks, logos, borders, extra animals not specified, human figures, cold or dark colour palette, horror or frightening elements, overly saturated unnatural colours.';

export const generateKidsPrompts = (answers: any, customAccentWord?: string | null) => {
  const age = answers['age-group'];
  const lesson = answers.lesson;
  const animal = answers.animal;
  const feeling = answers.feeling;
  const style = answers.style;
  const format = formatLookup[answers.format];
  const models = answers.models || [];

  let bestQuote = quotes.find(q => q.lesson === lesson && q.ageFit.includes(age));
  if (!bestQuote) bestQuote = quotes.find(q => q.lesson === lesson) || quotes[0];

  const finalAccentWord = customAccentWord || bestQuote.accentWord;
  const colorHex = bestQuote.color;
  const colorDescriptor = colorDesc[colorHex];
  const visualStyleDesc = visualStyles[style];
  const toneDesc = ageTone[age];
  const typoSpec = ageTypo[age];

  let compDesc = 'animal positioned in the centre-lower two-thirds of the frame, facing viewer with wide curious eyes, clear negative space above for text, animal never intimidating — always approachable and warm';
  if (animal.includes('Family') || animal.includes('group')) {
    compDesc = 'group pressed together naturally, all facing or angled toward viewer, smallest member centred or protected by the group, warm light on all faces, togetherness physically expressed';
  } else if (age === 'age-13-16') {
    compDesc = 'animal walking with purposeful confidence toward camera, low angle, the beginnings of adult features just visible, wide open landscape background, the world ahead of them';
  }

  const results = [];

  if (models.includes('gemini')) {
    results.push({
      model: 'Gemini / Imagen 3',
      prompts: [{
        text: `Create a children's room wall art print. ${toneDesc}\n${animal}, ${compDesc}. ${visualStyleDesc}.\n\nTypography: ${typoSpec}. Text positioned in the upper or lower third of the image in clear warm negative space.\nThe quote reads:\n"${bestQuote.text}"\nThe word "${finalAccentWord}" is in ${colorHex} — ${colorDescriptor} — significantly larger than all surrounding text.\n\nEvery word spelled correctly. Text fully legible at large print sizes.\nImage format: ${format.ratio}, ultra HD, children's room large format print quality.\n\nNEGATIVE PROMPT: ${STANDARD_NEGATIVE_PROMPT}`
      }]
    });
  }

  if (models.includes('gpt')) {
    results.push({
      model: 'ChatGPT / DALL-E 3',
      prompts: [{
        text: `Generate a children's room wall art print for ages ${age.replace('age-', '')}. ${visualStyleDesc}. ${animal}, ${compDesc}. Warm, ${feeling}, never intimidating. The text "${bestQuote.text}" must appear clearly as bold rounded sans-serif typography. Word "${finalAccentWord}" in ${colorHex}, larger than surrounding text. Text in clear negative space. Legible at all sizes. Ultra HD, ${format.ratio}. NEGATIVE PROMPT: ${STANDARD_NEGATIVE_PROMPT}`
      }]
    });
  }

  if (models.includes('bing')) {
    results.push({
      model: 'Bing Image Creator',
      prompts: [{
        text: `Children's room wall art, ${visualStyleDesc}, ages ${age.replace('age-', '')}. ${animal}, ${compDesc}. Warm, bright, ${feeling}. Bold rounded white sans-serif text reading "${bestQuote.text}" with "${finalAccentWord}" in ${colorHex} and larger. Text in clear negative space. Ultra HD, ${format.ratio}. NEGATIVE PROMPT: ${STANDARD_NEGATIVE_PROMPT}`
      }]
    });
  }

  if (models.includes('midjourney')) {
    results.push({
      model: 'Midjourney',
      prompts: [
        {
          label: 'WITH TEXT',
          text: `${compDesc}, ${visualStyleDesc}, children's wall art, warm bright ${feeling}, bold white rounded sans-serif text "${bestQuote.text}" with ${finalAccentWord} in ${colorHex} larger, ${age.replace('age-', '')} appropriate, ultra HD --ar ${format.ar} --v 6.1 --style raw`
        },
        {
          label: 'IMAGE ONLY (FOR CANVA OVERLAY)',
          text: `${compDesc}, ${visualStyleDesc}, children's wall art, warm bright ${feeling}, clear negative space for text overlay, ${age.replace('age-', '')} appropriate, ultra HD --ar ${format.ar} --v 6.1 --style raw`
        }
      ]
    });
  }

  const fluxModels = models.filter((m: string) => m.startsWith('flux-'));
  for (const flux of fluxModels) {
    results.push({
      model: flux.replace('-', ' ').toUpperCase(),
      prompts: [{
        text: `Children's room wall art print, ages ${age.replace('age-', '')}. ${visualStyleDesc}. ${animal}, ${compDesc}. Warm and ${feeling}, never intimidating. Bold rounded sans-serif text: "${bestQuote.text}" — word "${finalAccentWord}" in ${colorHex} and larger than surrounding text. Text in clear negative space. NEGATIVE PROMPT: ${STANDARD_NEGATIVE_PROMPT}. Ultra HD, ${format.ratio}.`
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
