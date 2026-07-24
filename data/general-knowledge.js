/*
  GENERAL KNOWLEDGE DATA
  Unit personnel questions are included here so they appear in both Phase 6 and Phase 6+.
  Phase 6 uses multiple choice. Phase 6+ randomly changes up to 25% of these questions to fill in the blank.
  The answer set follows the user-approved study material for this project.
*/

window.GENERAL_KNOWLEDGE_DATA = [
  {
    "id": "gk-unit-bco-sds",
    "prompt": "Who is your B-Co Senior Drill Sergeant (SDS)?",
    "fillBlankPrompt": "Type the name or title and name of the B-Co Senior Drill Sergeant.",
    "answer": "SDS Barbieri",
    "choices": [
      "SDS Barbieri",
      "DS Malin",
      "DS Cottam",
      "1LT Hale"
    ],
    "acceptedAnswers": [
      "Barbieri",
      "SDS Barbieri",
      "Senior Drill Sergeant Barbieri"
    ]
  },
  {
    "id": "gk-unit-first-plt-psg",
    "prompt": "Who are your B-Co 1st Platoon Sergeants?",
    "fillBlankPrompt": "Type both B-Co 1st Platoon Sergeants.",
    "answer": "DS Malin and DS Lopez",
    "choices": [
      "DS Malin and DS Lopez",
      "DS Cottam and SDS Barbieri",
      "SFC Keene and SFC Johnson",
      "SSG Smith and DS Lopez"
    ],
    "answerType": "unordered-list",
    "requiredItems": [
      "Malin",
      "Lopez"
    ],
    "acceptedAnswers": [
      "DS Malin DS Lopez",
      "Malin and Lopez"
    ]
  },
  {
    "id": "gk-unit-second-plt-psg",
    "prompt": "Who is your B-Co 2nd Platoon Sergeant?",
    "fillBlankPrompt": "Type the name or title and name of the B-Co 2nd Platoon Sergeant.",
    "answer": "DS Cottam",
    "choices": [
      "DS Cottam",
      "DS Malin",
      "SDS Barbieri",
      "1LT Hale"
    ],
    "acceptedAnswers": [
      "Cottam",
      "DS Cottam",
      "Drill Sergeant Cottam"
    ]
  },
  {
    "id": "gk-unit-bco-xo",
    "prompt": "Who is your B-Co Executive Officer (XO)?",
    "fillBlankPrompt": "Type the rank and/or name of the B-Co Executive Officer.",
    "answer": "1LT Hale",
    "choices": [
      "1LT Hale",
      "CPT Michael Everson",
      "SDS Barbieri",
      "CSM Carlos De La Cruz"
    ],
    "acceptedAnswers": [
      "Hale",
      "1LT Hale",
      "First Lieutenant Hale",
      "B-Co XO 1LT Hale"
    ]
  },
  {
    "id": "gk-phase-down-form",
    "prompt": "What is the phase-down counseling form?",
    "answer": "DA Form 4856",
    "choices": [
      "DA Form 4856",
      "DA Form 7279",
      "DA Form 4187",
      "DA Form 638"
    ],
    "acceptedAnswers": [
      "DA 4856",
      "4856"
    ]
  },
  {
    "id": "gk-uniform-reg",
    "prompt": "Which regulation covers the wear and appearance of Army uniforms?",
    "answer": "AR 670-1",
    "choices": [
      "AR 670-1",
      "DA Form 4856",
      "AR 600-20",
      "FM 7-22"
    ],
    "acceptedAnswers": [
      "AR670-1",
      "Army Regulation 670-1",
      "Army Regulation 670 1"
    ]
  },
  {
    "id": "gk-salute",
    "prompt": "What does SALUTE stand for?",
    "answer": "Size, Activity, Location, Unit/Uniform, Time, Equipment",
    "choices": [
      "Size, Activity, Location, Unit/Uniform, Time, Equipment",
      "Situation, Action, Location, Uniform, Terrain, Enemy",
      "Size, Area, Line, Unit, Time, Equipment",
      "Soldier, Activity, Location, Unit, Terrain, Engagement"
    ],
    "answerType": "ordered-list",
    "requiredItems": [
      "Size",
      "Activity",
      "Location",
      "Unit/Uniform",
      "Time",
      "Equipment"
    ],
    "acceptedAnswers": [
      "Size Activity Location Unit Uniform Time Equipment"
    ]
  },
  {
    "id": "gk-three-ds",
    "prompt": "What are the three D's?",
    "answer": "Direction, Distance, Description",
    "choices": [
      "Direction, Distance, Description",
      "Distance, Duration, Danger",
      "Direction, Defense, Decision",
      "Description, Detection, Departure"
    ],
    "answerType": "unordered-list",
    "requiredItems": [
      "Direction",
      "Distance",
      "Description"
    ]
  },
  {
    "id": "gk-airway",
    "prompt": "What are the two ways to clear an airway?",
    "answer": "Head-tilt chin-lift and jaw-thrust",
    "choices": [
      "Head-tilt chin-lift and jaw-thrust",
      "Recovery position and chest compressions",
      "Finger sweep and abdominal thrusts",
      "Rescue breathing and pulse check"
    ],
    "answerType": "unordered-list",
    "requiredItems": [
      "Head-tilt chin-lift",
      "Jaw-thrust"
    ],
    "acceptedAnswers": [
      "Head tilt chin lift jaw thrust"
    ]
  },
  {
    "id": "gk-ambush-types",
    "prompt": "What are the two types of ambush?",
    "answer": "Point and area",
    "choices": [
      "Point and area",
      "Near and far",
      "Hasty and deliberate",
      "Linear and L-shaped"
    ],
    "answerType": "unordered-list",
    "requiredItems": [
      "Point",
      "Area"
    ],
    "acceptedAnswers": [
      "Point ambush and area ambush",
      "Point ambushes and area ambushes"
    ]
  },
  {
    "id": "gk-camo-dark",
    "prompt": "When camouflaging, what color should cover the forehead, cheekbones, nose, and ears?",
    "answer": "Dark paint",
    "choices": [
      "Dark paint",
      "Light paint",
      "White paint",
      "No paint"
    ],
    "acceptedAnswers": [
      "Dark"
    ]
  },
  {
    "id": "gk-tourniquet",
    "prompt": "Where should a tourniquet be placed?",
    "answer": "High above the wound and tight",
    "choices": [
      "High above the wound and tight",
      "Directly over the wound and loose",
      "Below the wound and tight",
      "Around the nearest joint"
    ],
    "acceptedAnswers": [
      "High and tight",
      "High above wound tight",
      "Above the wound and tight"
    ]
  },
  {
    "id": "gk-shock-sign",
    "prompt": "What is a sign that someone may be going into shock?",
    "answer": "Dizziness or confusion",
    "choices": [
      "Dizziness or confusion",
      "Increased appetite",
      "Improved coordination",
      "Warm dry skin only"
    ],
    "acceptedAnswers": [
      "Dizziness",
      "Dizzyness",
      "Dizzy",
      "Confusion",
      "Confused",
      "Dizziness and confusion"
    ]
  },
  {
    "id": "gk-camo-light",
    "prompt": "When camouflaging, what color should cover the eyes, under the nose, and under the chin?",
    "answer": "Light paint",
    "choices": [
      "Light paint",
      "Dark paint",
      "Red paint",
      "No paint"
    ],
    "acceptedAnswers": [
      "Light"
    ]
  },
  {
    "id": "gk-sideburns",
    "prompt": "Where must male sideburns not extend below?",
    "answer": "The bottom of the ear opening",
    "choices": [
      "The bottom of the ear opening",
      "The middle of the earlobe",
      "The jawline",
      "The top of the collar"
    ],
    "acceptedAnswers": [
      "Bottom of ear opening",
      "Below the bottom of the ear opening"
    ]
  },
  {
    "id": "gk-durags",
    "prompt": "Where are durags allowed to be worn?",
    "answer": "Only inside personal dwellings",
    "choices": [
      "Only inside personal dwellings",
      "Anywhere while in civilian clothes",
      "Only inside the dining facility",
      "Anywhere after duty hours"
    ],
    "acceptedAnswers": [
      "Inside personal dwellings",
      "Personal dwellings only"
    ]
  },
  {
    "id": "gk-pov-weeks",
    "prompt": "How many weeks of MOS training are required before driving a POV or rental car?",
    "answer": "21 weeks",
    "choices": [
      "21 weeks",
      "10 weeks",
      "14 weeks",
      "24 weeks"
    ],
    "acceptedAnswers": [
      "21",
      "Twenty-one weeks",
      "Twenty one weeks"
    ]
  },
  {
    "id": "gk-single-line-distance",
    "prompt": "What is the distance between each person in a single-line formation?",
    "answer": "36 to 40 inches",
    "choices": [
      "36 to 40 inches",
      "18 to 24 inches",
      "6 paces",
      "10 meters"
    ],
    "acceptedAnswers": [
      "36-40 inches",
      "36 40 inches",
      "Thirty-six to forty inches"
    ]
  },
  {
    "id": "gk-amnesty",
    "prompt": "How long is the amnesty period for new Soldiers to dispose of prohibited items or send them home?",
    "answer": "1 hour",
    "choices": [
      "1 hour",
      "30 minutes",
      "24 hours",
      "72 hours"
    ],
    "acceptedAnswers": [
      "One hour",
      "60 minutes"
    ]
  },
  {
    "id": "gk-sign-in",
    "prompt": "What time must all Soldiers be signed in from off-post?",
    "answer": "2000",
    "choices": [
      "2000",
      "1900",
      "2100",
      "2200"
    ],
    "acceptedAnswers": [
      "20:00",
      "8 PM",
      "8:00 PM"
    ]
  },
  {
    "id": "gk-camelbak",
    "prompt": "How often must CamelBak water be changed out?",
    "answer": "Weekly",
    "choices": [
      "Weekly",
      "Daily",
      "Every 72 hours",
      "Monthly"
    ],
    "acceptedAnswers": [
      "Once a week",
      "Every week"
    ]
  },
  {
    "id": "gk-leave-days",
    "prompt": "Where can accrued leave days be found?",
    "answer": "Leave and Earnings Statement (LES)",
    "choices": [
      "Leave and Earnings Statement (LES)",
      "DA Form 4856",
      "Soldier Talent Profile",
      "Medical readiness portal"
    ],
    "acceptedAnswers": [
      "LES",
      "Leave and Earnings Statement"
    ]
  },
  {
    "id": "gk-leave-authority",
    "prompt": "Who is the approving authority for leave for AIT Soldiers?",
    "answer": "Battalion Commander",
    "choices": [
      "Battalion Commander",
      "Company First Sergeant",
      "Platoon Sergeant",
      "Squad Leader"
    ],
    "acceptedAnswers": [
      "BN Commander",
      "Battalion CDR"
    ]
  },
  {
    "id": "gk-reveille",
    "prompt": "Which bugle call occurs at 0630?",
    "answer": "Reveille",
    "choices": [
      "Reveille",
      "Retreat",
      "Taps",
      "Assembly"
    ]
  },
  {
    "id": "gk-retreat",
    "prompt": "Which bugle call signals the end of the workday?",
    "answer": "Retreat",
    "choices": [
      "Retreat",
      "Reveille",
      "Taps",
      "First Call"
    ]
  },
  {
    "id": "gk-taps-time",
    "prompt": "Which bugle call occurs at 2100 or 2200?",
    "answer": "Taps",
    "choices": [
      "Taps",
      "Retreat",
      "Reveille",
      "To the Color"
    ]
  },
  {
    "id": "gk-taps-meaning",
    "prompt": "What does Taps signify?",
    "answer": "Honoring fallen Soldiers and the end of the day",
    "choices": [
      "Honoring fallen Soldiers and the end of the day",
      "The beginning of physical training",
      "The raising of the flag",
      "The start of the duty day"
    ],
    "acceptedAnswers": [
      "Honoring fallen soldiers",
      "End of day",
      "Honoring fallen Soldiers/end of day"
    ]
  },
  {
    "id": "gk-no-battle-buddy",
    "prompt": "Which phase does not require a battle buddy?",
    "answer": "MOS-Q",
    "choices": [
      "MOS-Q",
      "Phase IV",
      "Phase V",
      "Phase VI"
    ],
    "acceptedAnswers": [
      "MOS Q",
      "MOS Qualified"
    ]
  },
  {
    "id": "gk-salute-distance",
    "prompt": "At what distance do you salute when approaching an officer outdoors?",
    "answer": "6 paces",
    "choices": [
      "6 paces",
      "3 paces",
      "10 paces",
      "12 paces"
    ],
    "acceptedAnswers": [
      "Six paces",
      "6"
    ]
  },
  {
    "id": "gk-army-song",
    "prompt": "What is the official song of the United States Army?",
    "answer": "The Army Goes Rolling Along",
    "choices": [
      "The Army Goes Rolling Along",
      "The Stars and Stripes Forever",
      "Anchors Aweigh",
      "The Army Song of Freedom"
    ],
    "acceptedAnswers": [
      "Army Goes Rolling Along"
    ]
  },
  {
    "id": "gk-army-founded",
    "prompt": "On what date was the Army founded?",
    "answer": "June 14, 1775",
    "choices": [
      "June 14, 1775",
      "July 4, 1776",
      "June 14, 1776",
      "September 17, 1787"
    ],
    "acceptedAnswers": [
      "14 June 1775",
      "6/14/1775",
      "June 14 1775"
    ]
  },
  {
    "id": "gk-cyber-colors",
    "prompt": "What are the Cyber Branch colors?",
    "answer": "Steel gray and black",
    "choices": [
      "Steel gray and black",
      "Blue and white",
      "Scarlet and gold",
      "Green and silver"
    ],
    "answerType": "unordered-list",
    "requiredItems": [
      "Steel gray",
      "Black"
    ]
  },
  {
    "id": "gk-male-fingernails",
    "prompt": "What is the maximum authorized fingernail length for males?",
    "answer": "They may not extend beyond the fingertip",
    "choices": [
      "They may not extend beyond the fingertip",
      "One-quarter inch beyond the fingertip",
      "One-half inch beyond the fingertip",
      "There is no maximum length"
    ],
    "acceptedAnswers": [
      "Not beyond the fingertip",
      "Cannot extend beyond fingertip",
      "Do not extend beyond fingertip"
    ]
  },
  {
    "id": "gk-female-ponytail",
    "prompt": "What is the maximum authorized length of a female ponytail in uniform?",
    "answer": "It may not extend more than 6 inches below the collar",
    "choices": [
      "It may not extend more than 6 inches below the collar",
      "It may not extend past the bottom of the shoulder blades",
      "It may extend to the waist",
      "It may not extend below the collar"
    ],
    "acceptedAnswers": [
      "6 inches below the collar",
      "Six inches below the collar",
      "Not more than 6 inches below collar"
    ]
  },
  {
    "id": "gk-streamers",
    "prompt": "How many streamers are on the Army flag?",
    "answer": "190",
    "choices": [
      "190",
      "177",
      "200",
      "145"
    ],
    "acceptedAnswers": [
      "One hundred ninety"
    ]
  },
  {
    "id": "gk-weapon-fails",
    "prompt": "If a weapon fails, what should be performed first?",
    "answer": "Immediate action",
    "choices": [
      "Immediate action",
      "Detailed disassembly",
      "Weapons turn-in",
      "Function check"
    ]
  },
  {
    "id": "gk-immediate-action",
    "prompt": "What are the three steps of immediate action?",
    "answer": "Tap, Rack, and Reassess",
    "choices": [
      "Tap, Rack, and Reassess",
      "Clear, Load, and Fire",
      "Pull, Observe, and Release",
      "Lock, Drop, and Inspect"
    ],
    "answerType": "ordered-list",
    "requiredItems": [
      "Tap",
      "Rack",
      "Reassess"
    ]
  },
  {
    "id": "gk-clp",
    "prompt": "In weapons maintenance, what does CLP stand for?",
    "answer": "Clean, Lubricate, Protect",
    "choices": [
      "Clean, Lubricate, Protect",
      "Clear, Load, Prepare",
      "Check, Lock, Pull",
      "Clean, Load, Preserve"
    ],
    "answerType": "ordered-list",
    "requiredItems": [
      "Clean",
      "Lubricate",
      "Protect"
    ]
  },
  {
    "id": "gk-final-weapon-step",
    "prompt": "What is the final step of maintaining a weapon?",
    "answer": "Functions check",
    "choices": [
      "Functions check",
      "Apply camouflage",
      "Load a magazine",
      "Zero the weapon"
    ],
    "acceptedAnswers": [
      "Function check",
      "Functions check"
    ]
  },
  {
    "id": "gk-m4-components",
    "prompt": "What are the three main components of an M4?",
    "answer": "Upper Receiver, Lower Receiver, Bolt Carrier",
    "choices": [
      "Upper Receiver, Lower Receiver, Bolt Carrier",
      "Barrel, stock, sling",
      "Magazine, handguard, optic",
      "Upper rail, lower rail, charging handle"
    ],
    "answerType": "unordered-list",
    "requiredItems": [
      "Upper Receiver",
      "Lower Receiver",
      "Bolt Carrier"
    ],
    "acceptedAnswers": [
      "Upper receiver lower receiver bolt carrier group"
    ]
  },
  {
    "id": "gk-tight-shot-group",
    "prompt": "For three shots to qualify as a tight shot group, what must their spacing be?",
    "answer": "Within a circle 4 centimeters or less in size",
    "choices": [
      "Within a circle 4 centimeters or less in size",
      "Within a circle 6 centimeters or less in size",
      "Within a square 10 centimeters in size",
      "All touching the center of the target"
    ],
    "acceptedAnswers": [
      "Within 4 cm circle",
      "4 centimeters or less",
      "4 cm or less"
    ]
  },
  {
    "id": "gk-marksmanship",
    "prompt": "What are the four fundamentals of marksmanship?",
    "answer": "Steady position, sight picture/aiming, breath control, trigger squeeze",
    "choices": [
      "Steady position, sight picture/aiming, breath control, trigger squeeze",
      "Stance, magazine change, breathing, follow-through",
      "Position, movement, scanning, reloading",
      "Sight adjustment, trigger reset, speed, concealment"
    ],
    "answerType": "unordered-list",
    "requiredItems": [
      "Steady position",
      "Sight picture/aiming",
      "Breath control",
      "Trigger squeeze"
    ],
    "acceptedAnswers": [
      "Steady position sight picture aiming breath control trigger squeeze"
    ]
  },
  {
    "id": "gk-weapon-statuses",
    "prompt": "What are the three weapon statuses?",
    "answer": "Green, amber, red",
    "choices": [
      "Green, amber, red",
      "Safe, ready, fire",
      "Cold, warm, hot",
      "White, yellow, black"
    ],
    "answerType": "unordered-list",
    "requiredItems": [
      "Green",
      "Amber",
      "Red"
    ]
  },
  {
    "id": "gk-first-receive-weapon",
    "prompt": "What should you do first when handed a weapon?",
    "answer": "Clear the weapon using a 3-point safety check",
    "choices": [
      "Clear the weapon using a 3-point safety check",
      "Insert a magazine",
      "Place the weapon on fire",
      "Perform a functions check without clearing"
    ],
    "acceptedAnswers": [
      "Clear the weapon",
      "3-point safety check",
      "Three point safety check"
    ]
  },
  {
    "id": "gk-north-types",
    "prompt": "What are the three types of north on a map?",
    "answer": "True north, Grid north, Magnetic north",
    "choices": [
      "True north, Grid north, Magnetic north",
      "Map north, compass north, terrain north",
      "Grid north, route north, polar north",
      "True north, south north, east north"
    ],
    "answerType": "unordered-list",
    "requiredItems": [
      "True north",
      "Grid north",
      "Magnetic north"
    ]
  },
  {
    "id": "gk-compass-holds",
    "prompt": "What are the two ways to hold a compass?",
    "answer": "Compass-to-cheek and center-hold",
    "choices": [
      "Compass-to-cheek and center-hold",
      "High-hold and low-hold",
      "Left-hand and right-hand",
      "Prone-hold and standing-hold"
    ],
    "answerType": "unordered-list",
    "requiredItems": [
      "Compass-to-cheek",
      "Center-hold"
    ],
    "acceptedAnswers": [
      "Compass to cheek center hold"
    ]
  },
  {
    "id": "gk-map-colors",
    "prompt": "What are the six colors on a map?",
    "answer": "Black, red-brown, blue, green, brown, red",
    "choices": [
      "Black, red-brown, blue, green, brown, red",
      "Black, white, blue, green, yellow, red",
      "Red, orange, yellow, green, blue, purple",
      "Black, gray, tan, blue, green, white"
    ],
    "answerType": "ordered-list",
    "requiredItems": [
      "Black",
      "Red-brown",
      "Blue",
      "Green",
      "Brown",
      "Red"
    ]
  },
  {
    "id": "gk-wedge-distance",
    "prompt": "What is the normal distance between Soldiers in a wedge formation?",
    "answer": "10 meters",
    "choices": [
      "10 meters",
      "5 meters",
      "25 meters",
      "36 to 40 inches"
    ],
    "acceptedAnswers": [
      "10 Meters",
      "Ten meters",
      "10"
    ]
  },
  {
    "id": "gk-mileage-radius",
    "prompt": "What is the mileage radius for Soldiers who sign off post?",
    "answer": "20 miles",
    "choices": [
      "20 miles",
      "10 miles",
      "50 miles",
      "100 miles"
    ],
    "acceptedAnswers": [
      "20",
      "Twenty miles"
    ]
  },
  {
    "id": "gk-nine-line",
    "prompt": "Which lines of a 9-line MEDEVAC must be transmitted during initial contact within 25 seconds?",
    "answer": "The first 5 lines",
    "choices": [
      "The first 5 lines",
      "Lines 6 through 9",
      "Only line 1",
      "All 9 lines before contact"
    ],
    "acceptedAnswers": [
      "First five",
      "Lines 1 through 5",
      "1-5"
    ]
  },
  {
    "id": "gk-rush",
    "prompt": "What is the quickest way to move under enemy fire?",
    "answer": "Rush (3-5 second rush)",
    "choices": [
      "Rush (3-5 second rush)",
      "Low crawl",
      "High crawl",
      "Walking fire"
    ],
    "acceptedAnswers": [
      "Rush",
      "3-5 second rush",
      "3 to 5 second rush"
    ]
  },
  {
    "id": "gk-acu-pattern",
    "prompt": "What is the camouflage pattern called on the ACU uniform?",
    "answer": "Operational Camouflage Pattern (OCP)",
    "choices": [
      "Operational Camouflage Pattern (OCP)",
      "Universal Camouflage Pattern (UCP)",
      "Woodland Battle Dress Pattern",
      "MultiCam Dress Pattern"
    ],
    "acceptedAnswers": [
      "OCP",
      "Operational Camouflage Pattern",
      "Occupational Camo Pattern",
      "Occupational Camouflage Pattern"
    ]
  },
  {
    "id": "gk-high-crawl",
    "prompt": "What moves faster than the low crawl while still providing a low silhouette?",
    "answer": "High crawl",
    "choices": [
      "High crawl",
      "3-5 second rush",
      "Walking",
      "Lateral movement"
    ]
  },
  {
    "id": "gk-aft-lane",
    "prompt": "How many meters long is an AFT lane?",
    "answer": "25 meters",
    "choices": [
      "25 meters",
      "10 meters",
      "50 meters",
      "100 meters"
    ],
    "acceptedAnswers": [
      "25",
      "Twenty-five meters"
    ]
  },
  {
    "id": "gk-phase6-weeks",
    "prompt": "How many weeks of AIT are required for Phase 6?",
    "answer": "3 weeks",
    "choices": [
      "3 weeks",
      "6 weeks",
      "10 weeks",
      "21 weeks"
    ],
    "acceptedAnswers": [
      "3",
      "Three weeks"
    ]
  },
  {
    "id": "gk-phase6plus-weeks",
    "prompt": "How many weeks of AIT are required for Phase 6+?",
    "answer": "10 weeks",
    "choices": [
      "10 weeks",
      "3 weeks",
      "6 weeks",
      "21 weeks"
    ],
    "acceptedAnswers": [
      "10",
      "Ten weeks"
    ]
  },
  {
    "id": "gk-etp",
    "prompt": "Who can grant an exception to Policy Letter 15 (ETP)?",
    "answer": "The Brigade Commander, at the request of the Battalion Commander",
    "choices": [
      "The Brigade Commander, at the request of the Battalion Commander",
      "Any Drill Sergeant",
      "The Company First Sergeant alone",
      "The Platoon Sergeant"
    ],
    "acceptedAnswers": [
      "Brigade Commander at Battalion Commander request",
      "Brigade Commander requested by Battalion Commander"
    ]
  },
  {
    "id": "gk-cbrn",
    "prompt": "What does CBRN stand for?",
    "answer": "Chemical, Biological, Radiological, Nuclear",
    "choices": [
      "Chemical, Biological, Radiological, Nuclear",
      "Combat, Ballistic, Rescue, Navigation",
      "Chemical, Biological, Radiation, Network",
      "Civil, Biological, Response, Nuclear"
    ],
    "answerType": "ordered-list",
    "requiredItems": [
      "Chemical",
      "Biological",
      "Radiological",
      "Nuclear"
    ]
  },
  {
    "id": "gk-phase-down-authority",
    "prompt": "Which authority has the power to phase a Soldier down for 72 hours?",
    "answer": "Drill Sergeants and above",
    "choices": [
      "Drill Sergeants and above",
      "Only the Battalion Commander",
      "Any battle buddy",
      "Only the company clerk"
    ],
    "acceptedAnswers": [
      "Drill Sergeants and up",
      "DS and above",
      "Drill Sergeant and above"
    ]
  },
  {
    "id": "gk-freeze-halt",
    "prompt": "What is the difference between Freeze and Halt?",
    "answer": "Halt means stop but you may look around; Freeze means stop all motion and cut noise",
    "choices": [
      "Halt means stop but you may look around; Freeze means stop all motion and cut noise",
      "Freeze means move faster; Halt means crawl",
      "There is no difference",
      "Halt cuts noise; Freeze allows normal movement"
    ],
    "acceptedAnswers": [
      "Halt stop can look around freeze stop all motion cut noise",
      "Halt means stop, freeze means stop all motion and cut noise"
    ]
  },
  {
    "id": "gk-locker-left",
    "prompt": "What goes on the left door of your locker?",
    "answer": "PT jacket and pants on a hanger",
    "choices": [
      "PT jacket and pants on a hanger",
      "AGSU coat and shoes",
      "Laundry bag and towel",
      "Civilian clothes only"
    ],
    "acceptedAnswers": [
      "PT jacket and pants",
      "PT jacket pants hanger"
    ]
  },
  {
    "id": "gk-rdi",
    "prompt": "Where is the RDI placed on the AGSU?",
    "answer": "1/8 inch above the top of the right pocket flap",
    "choices": [
      "1/8 inch above the top of the right pocket flap",
      "Centered on the left pocket flap",
      "1 inch above the nameplate",
      "On the left lapel"
    ],
    "acceptedAnswers": [
      "One eighth inch above right pocket flap",
      "1/8th inch above the top of the right pocket flap"
    ]
  },
  {
    "id": "gk-agsu-class-a",
    "prompt": "Which AGSU version includes the coat?",
    "answer": "Class A",
    "choices": [
      "Class A",
      "Class B",
      "Class C",
      "Combat configuration"
    ]
  },
  {
    "id": "gk-left-lapel",
    "prompt": "What goes on the left lapel of the AGSU?",
    "answer": "MOS branch insignia",
    "choices": [
      "MOS branch insignia",
      "RDI",
      "Nameplate",
      "Unit awards"
    ],
    "acceptedAnswers": [
      "Branch insignia",
      "MOS insignia"
    ]
  },
  {
    "id": "gk-tape-method",
    "prompt": "What is the only authorized taping method for height and weight purposes?",
    "answer": "Circumference-Based Tape Method",
    "choices": [
      "Circumference-Based Tape Method",
      "Body mass index estimate",
      "Neck-only measurement",
      "Visual assessment"
    ],
    "acceptedAnswers": [
      "Circumference based tape method",
      "Circumference tape method"
    ]
  },
  {
    "id": "gk-quick-time",
    "prompt": "What is the cadence for quick-time marching?",
    "answer": "120 steps per minute",
    "choices": [
      "120 steps per minute",
      "90 steps per minute",
      "150 steps per minute",
      "180 steps per minute"
    ],
    "acceptedAnswers": [
      "120",
      "120 steps"
    ]
  },
  {
    "id": "gk-double-time",
    "prompt": "What is the cadence for double-time marching?",
    "answer": "180 steps per minute",
    "choices": [
      "180 steps per minute",
      "120 steps per minute",
      "150 steps per minute",
      "200 steps per minute"
    ],
    "acceptedAnswers": [
      "180",
      "180 steps"
    ]
  }
];
