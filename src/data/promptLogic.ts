const lightingLookup: Record<string, string> = {
  'dark-studio': 'pure black background, single dramatic off-axis Rembrandt lighting, deep sculptural shadows, rim light catching subject edges',
  'golden-hour': 'warm amber 6000K golden hour backlight, visible dust motes in sunbeams, long warm shadows, halo rim lighting',
  'dawn-mist': 'soft diffused cool blue-grey dawn light, atmospheric mist layers, ethereal quiet, low contrast',
  'harsh-midday': 'harsh direct overhead sunlight, strong contrast, bleached highlights, deep black shadows, no fill light',
  'blue-hour': 'deep blue twilight ambient light, cool mysterious tones, minimal fill light, long exposures',
  'overcast-dramatic': 'heavy storm cloud diffused light, dramatic grey sky, high contrast without harsh shadows, moody atmosphere'
};

const moodLookup: Record<string, string> = {
  'confrontational': 'direct piercing gaze locked onto the camera lens, intense, challenging the viewer, unflinching eye contact',
  'serene': 'calm peaceful expression, eyes soft and present, quiet dignity, relaxed posture',
  'predatory': 'focused hunting intensity, eyes tracking something off-frame, coiled readiness, still before the strike',
  'vulnerable': 'a rare unguarded moment, softness beneath the power, emotional depth, caught off guard',
  'ancient-wisdom': 'weathered and experienced, carrying the weight of years in deep-set eyes, battle-scarred',
  'playful': 'light energy, caught in an unexpected moment of joy or curiosity, uncharacteristic softness'
};

const resolutionLookup: Record<string, { text: string, ar: string }> = {
  'ratio-2-3': { text: 'ultra HD large format print quality, 300 DPI equivalent detail, suitable for 24x36 inch Etsy wall print', ar: '2:3' },
  'ratio-3-2': { text: 'ultra HD large format print quality, 300 DPI equivalent detail, suitable for 36x24 inch Etsy wall print', ar: '3:2' },
  'ratio-4-5': { text: 'ultra HD large format print quality, 300 DPI equivalent detail, suitable for 16x20 inch Etsy wall print', ar: '4:5' },
  'ratio-1-1': { text: 'ultra HD large format print quality, 300 DPI equivalent detail, suitable for large square Etsy gallery print', ar: '1:1' },
  'ratio-16-9': { text: 'ultra HD large format print quality, 300 DPI equivalent detail, suitable for widescreen panoramic Etsy wall print', ar: '16:9' },
  'ratio-9-16': { text: 'ultra HD large format print quality, 300 DPI equivalent detail, suitable for tall vertical Etsy statement print', ar: '9:16' }
};

const compositionLookup: Record<string, string> = {
  'eyes-dominant': 'strict rule of thirds — eyes positioned precisely on the upper-left third intersection, filling the upper third, staring directly into the lens',
  'full-body-environmental': 'strict rule of thirds — full body occupying the left third, natural habitat breathing through the right two-thirds',
  'abstract-detail': 'extreme macro composition — single defining feature fills the frame, abstract and graphic, texture visible at a microscopic level',
  'silhouette': 'high-contrast silhouette — pure animal shape in left or right third against a dramatically lit sky or background',
  'peak-action': 'dynamic diagonal composition — body mid-motion, leading element on the upper third intersection, energy flowing across the frame'
};

const getTexture = (animal: string) => {
  const a = animal.toLowerCase();
  if (a.includes('elephant')) return 'individual skin wrinkle and hide fold texture';
  if (a.includes('lion')) return 'individual mane hair strand and fur texture';
  if (a.includes('leopard') || a.includes('cheetah')) return 'rosette pattern and individual fur strand texture';
  if (a.includes('buffalo')) return 'horn surface crack and hide wrinkle texture';
  if (a.includes('rhino')) return 'horn layering and skin fold texture';
  if (a.includes('giraffe')) return 'pattern edge detail and fur texture';
  if (a.includes('wild dog')) return 'mottled coat pattern and individual fur texture';
  return 'individual fur and skin texture';
};

export const generatePrompts = (answers: any) => {
  const variationsCount = parseInt(answers.variations || '1', 10);
  const models = answers.models || [];
  
  const results = [];
  
  const baseData = {
    animal: answers.animal,
    resolution: resolutionLookup[answers.resolution].text,
    ar: resolutionLookup[answers.resolution].ar,
    texture: getTexture(answers.animal)
  };

  const lightingKeys = Object.keys(lightingLookup);
  const moodKeys = Object.keys(moodLookup);
  const compKeys = Object.keys(compositionLookup);

  const getRandom = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  const formatTitle = (key: string) => key.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

  for (let i = 0; i < variationsCount; i++) {
    let currentLightingKey = answers.lighting;
    let currentMoodKey = answers.mood;
    let currentCompKey = answers.composition;

    // For variations beyond the first, pick random styles from previous steps
    if (i > 0) {
      currentLightingKey = getRandom(lightingKeys);
      currentMoodKey = getRandom(moodKeys);
      currentCompKey = getRandom(compKeys);
    }

    const currentLighting = lightingLookup[currentLightingKey];
    const currentMood = moodLookup[currentMoodKey];
    const currentComposition = compositionLookup[currentCompKey];
    
    const variationPrompts: any = {
      id: i + 1,
      title: i === 0 ? 'Primary Selection' : `Variation ${i + 1}: ${formatTitle(currentMoodKey)} & ${formatTitle(currentLightingKey)}`,
      description: i === 0 ? 'Based on your exact selections' : `Randomized style: ${formatTitle(currentCompKey)} composition with ${formatTitle(currentLightingKey)} lighting.`,
      prompts: []
    };

    if (models.includes('gpt')) {
      variationPrompts.prompts.push({
        model: 'ChatGPT / DALL-E 3',
        color: '#10a37f',
        text: `Generate a photorealistic fine art wildlife photograph of a ${baseData.animal}. ${currentComposition}. ${currentLighting}. Mood: ${currentMood}. Quality directives: Ultra HD photorealistic, ${baseData.resolution}, NO TEXT, NO LOGOS, NO WATERMARKS, NO overlays of any kind. Pure wildlife photography aesthetic. Authentic ${baseData.texture}, no AI artifacts.`
      });
    }

    if (models.includes('bing')) {
      variationPrompts.prompts.push({
        model: 'Bing Image Creator',
        color: '#0078d4',
        text: `Photorealistic fine art wildlife photograph: ${baseData.animal}. ${currentComposition}. ${currentLighting}. ${currentMood}. Ultra HD, gallery wall art quality, no text, no watermarks, no logos. Authentic ${baseData.texture}.`
      });
    }

    if (models.includes('midjourney')) {
      variationPrompts.prompts.push({
        model: 'Midjourney',
        color: '#9b59b6',
        text: `photorealistic fine art wildlife photograph, ${baseData.animal}, ${currentComposition}, ${currentLighting}, ${currentMood}, authentic ${baseData.texture}, ultra HD, highly detailed --ar ${baseData.ar} --v 6.1 --style raw --q 2`
      });
    }

    if (models.includes('gemini')) {
      variationPrompts.prompts.push({
        model: 'Gemini / Imagen 3',
        color: '#ea4335',
        text: `A breathtaking wildlife photograph of a ${baseData.animal}.\n\nSubject: ${baseData.animal} with authentic ${baseData.texture}.\nCamera Angle & Composition: ${currentComposition}.\nLighting: ${currentLighting}.\nBackground: Natural appropriate background.\nMood: ${currentMood}.\nTechnical & Resolution: ${baseData.resolution}.\n\nQuality: Ultra HD photorealistic, large-format print resolution, museum print quality. NO TEXT, NO LOGOS, NO WATERMARKS. Authentic animal texture, natural lighting, zero AI artifacts.`
      });
    }

    results.push(variationPrompts);
  }

  return results;
};
