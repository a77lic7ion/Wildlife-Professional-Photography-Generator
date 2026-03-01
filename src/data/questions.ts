export const questions = [
  {
    id: 'animal',
    title: 'STEP 1 — SUBJECT',
    text: 'Which African animal?',
    type: 'text-chip',
    placeholder: 'e.g. African elephant, leopard, cheetah...',
    options: [
      'African Lion', 'Leopard', 'Cheetah', 'African Elephant', 'Cape Buffalo', 'White Rhino', 'African Wild Dog', 'Spotted Hyena', 'Giraffe', 'Zebra', 'Nile Crocodile', 'African Vulture', 'Vervet Monkey', 'Baboon', 'Serval', 'Caracal'
    ]
  },
  {
    id: 'lighting',
    title: 'STEP 2 — LIGHTING',
    text: 'What atmosphere defines the shot?',
    type: 'single-select',
    options: [
      { value: 'dark-studio', label: 'Dark Studio', desc: 'Pure black background, dramatic sculpted light — like the vulture & lion portraits' },
      { value: 'golden-hour', label: 'Golden Hour', desc: 'Warm amber backlight, dust motes, savannah magic — the classic safari look' },
      { value: 'dawn-mist', label: 'Dawn Mist', desc: 'Soft cool blues, atmospheric fog layers, ethereal quiet' },
      { value: 'harsh-midday', label: 'Harsh Midday', desc: 'Bleached highlights, deep black shadows, raw intensity' },
      { value: 'blue-hour', label: 'Blue Hour', desc: 'Deep twilight, mysterious cool tones, minimal light' },
      { value: 'overcast-dramatic', label: 'Storm Light', desc: 'Heavy cloud diffusion, moody greys, dramatic without harshness' }
    ]
  },
  {
    id: 'mood',
    title: 'STEP 3 — MOOD',
    text: 'What should the viewer feel?',
    type: 'single-select',
    options: [
      { value: 'confrontational', label: 'Confrontational', desc: 'Direct gaze, challenging the viewer, raw power' },
      { value: 'serene', label: 'Serene', desc: 'Quiet dignity, peaceful presence, soft strength' },
      { value: 'predatory', label: 'Predatory', desc: 'Focused intensity, hunting stillness, coiled readiness' },
      { value: 'vulnerable', label: 'Vulnerable', desc: 'A rare unguarded moment, emotional depth beneath the power' },
      { value: 'ancient-wisdom', label: 'Ancient Wisdom', desc: 'Weathered, experienced — years carried in the eyes' },
      { value: 'playful', label: 'Playful', desc: 'Unexpected lightness, curiosity, a moment of joy' }
    ]
  },
  {
    id: 'composition',
    title: 'STEP 4 — COMPOSITION FOCUS',
    text: 'Where should the eye land first?',
    type: 'single-select',
    options: [
      { value: 'eyes-dominant', label: 'Eyes First', desc: 'The gaze is everything — eyes fill the upper third, direct and unavoidable' },
      { value: 'full-body-environmental', label: 'Full Body + Environment', desc: 'Animal and habitat together — story over isolation' },
      { value: 'abstract-detail', label: 'Abstract Detail', desc: 'Extreme macro — fur texture, skin pattern, or one defining feature' },
      { value: 'silhouette', label: 'Silhouette', desc: 'Shape and form against light — graphic, bold, iconic' },
      { value: 'peak-action', label: 'Peak Action', desc: 'Frozen at the peak of motion — a moment that could never be planned' }
    ]
  },
  {
    id: 'resolution',
    title: 'STEP 5 — OUTPUT FORMAT',
    text: 'Which Etsy large print ratio?',
    type: 'single-select',
    options: [
      { value: 'ratio-2-3', label: '2:3 Vertical', desc: 'Classic poster size (e.g. 24x36", 20x30")' },
      { value: 'ratio-3-2', label: '3:2 Horizontal', desc: 'Classic landscape size (e.g. 36x24", 30x20")' },
      { value: 'ratio-4-5', label: '4:5 Vertical', desc: 'Standard art print (e.g. 16x20", 24x30")' },
      { value: 'ratio-1-1', label: '1:1 Square', desc: 'Square gallery wall print (e.g. 20x20", 30x30")' },
      { value: 'ratio-16-9', label: '16:9 Widescreen', desc: 'Panoramic landscape (e.g. 40x22")' },
      { value: 'ratio-9-16', label: '9:16 Tall', desc: 'Tall vertical statement piece' }
    ]
  },
  {
    id: 'variations',
    title: 'STEP 6 — VARIATIONS',
    text: 'How many different shots?',
    type: 'single-select',
    options: [
      { value: '1', label: '1 Shot', desc: 'One perfectly crafted prompt — the definitive take' },
      { value: '2', label: '2 Shots', desc: 'Two totally different angles and treatments' },
      { value: '3', label: '3 Shots', desc: 'Three radically different compositions — portrait, action, environmental' }
    ]
  },
  {
    id: 'models',
    title: 'STEP 7 — TARGET MODELS',
    text: 'Which AI platforms?',
    type: 'multi-select',
    options: [
      { value: 'gpt', label: 'ChatGPT / DALL-E 3', desc: 'Structured, literal, follows composition briefs precisely' },
      { value: 'bing', label: 'Bing Image Creator', desc: 'DALL-E 3 powered, clean descriptive language' },
      { value: 'midjourney', label: 'Midjourney', desc: 'Cinematic, tag-based with --ar and --v parameters' },
      { value: 'gemini', label: 'Gemini / Imagen 3', desc: 'Narrative + structured — excellent photorealism' }
    ]
  }
];
