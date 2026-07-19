/*
  TERRAIN FEATURE DATA
  --------------------
  Put the ten terrain images in:
  images/terrain-features/

  Required filenames:
  ridge.png, hill.png, saddle.png, valley.png, depression.png,
  spur.png, draw.png, cliff.png, cut.png, fill.png
*/

window.TERRAIN_FEATURE_DATA = [
  {
    id: "terrain-mnemonic",
    prompt: "What mnemonic is used to remember the five major terrain features?",
    answer: "Hidden Valley Ranch Salad Dressing",
    acceptedAnswers: ["Hidden Valley Ranch Salad Dressing", "HVRSD"]
  },
  {
    id: "terrain-major",
    prompt: "List the five major terrain features.",
    answer: "Ridge, Hill, Saddle, Valley, Depression",
    answerType: "unordered-list",
    requiredItems: ["Ridge", "Hill", "Saddle", "Valley", "Depression"]
  },
  {
    id: "terrain-minor",
    prompt: "List the three minor terrain features.",
    answer: "Spur, Draw, Cliff",
    answerType: "unordered-list",
    requiredItems: ["Spur", "Draw", "Cliff"]
  },
  {
    id: "terrain-supplemental",
    prompt: "List the two supplemental terrain features.",
    answer: "Cut and Fill",
    answerType: "unordered-list",
    requiredItems: ["Cut", "Fill"]
  },
  {
    id: "terrain-picture-ridge",
    image: "images/terrain-features/ridge.png",
    answer: "Ridge",
    description: "Ridge terrain feature",
    acceptedAnswers: ["a ridge", "ridge terrain feature"]
  },
  {
    id: "terrain-picture-hill",
    image: "images/terrain-features/hill.png",
    answer: "Hill",
    description: "Hill terrain feature",
    acceptedAnswers: ["a hill", "hill terrain feature"]
  },
  {
    id: "terrain-picture-saddle",
    image: "images/terrain-features/saddle.png",
    answer: "Saddle",
    description: "Saddle terrain feature",
    acceptedAnswers: ["a saddle", "saddle terrain feature"]
  },
  {
    id: "terrain-picture-valley",
    image: "images/terrain-features/valley.png",
    answer: "Valley",
    description: "Valley terrain feature",
    acceptedAnswers: ["a valley", "valley terrain feature"]
  },
  {
    id: "terrain-picture-depression",
    image: "images/terrain-features/depression.png",
    answer: "Depression",
    description: "Depression terrain feature",
    acceptedAnswers: ["a depression", "depression terrain feature"]
  },
  {
    id: "terrain-picture-spur",
    image: "images/terrain-features/spur.png",
    answer: "Spur",
    description: "Spur terrain feature",
    acceptedAnswers: ["a spur", "spur terrain feature"]
  },
  {
    id: "terrain-picture-draw",
    image: "images/terrain-features/draw.png",
    answer: "Draw",
    description: "Draw terrain feature",
    acceptedAnswers: ["a draw", "draw terrain feature"]
  },
  {
    id: "terrain-picture-cliff",
    image: "images/terrain-features/cliff.png",
    answer: "Cliff",
    description: "Cliff terrain feature",
    acceptedAnswers: ["a cliff", "cliff terrain feature"]
  },
  {
    id: "terrain-picture-cut",
    image: "images/terrain-features/cut.png",
    answer: "Cut",
    description: "Cut terrain feature",
    acceptedAnswers: ["a cut", "cut terrain feature"]
  },
  {
    id: "terrain-picture-fill",
    image: "images/terrain-features/fill.png",
    answer: "Fill",
    description: "Fill terrain feature",
    acceptedAnswers: ["a fill", "fill terrain feature"]
  }
];
