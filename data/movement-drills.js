/*
  PREPARATION DRILL, RECOVERY DRILL, MMD1, AND MMD2
  Reference used by the test: ATP 7-22.02.
  Phase 6 uses multiple choice. Phase 6+ randomly changes up to 25% to fill in the blank.
*/

window.MOVEMENT_DRILL_DATA = [
  {
    "id": "prep-mnemonic",
    "prompt": "What mnemonic is used to remember the Preparation Drill?",
    "fillBlankPrompt": "Type the Preparation Drill mnemonic.",
    "answer": "Be Right Here Real Soon We Found Privates Behind Popeyes",
    "choices": [
      "Be Right Here Real Soon We Found Privates Behind Popeyes",
      "Only Rangers Enjoy This Shit Groaned Captain Hams",
      "Be Ready Here Right Soon We Find Privates Behind Popeyes",
      "Bend Rear High Rower Squat Windmill Forward Prone Twist Pushup"
    ]
  },
  {
    "id": "prep-full-sequence",
    "prompt": "Which answer lists the Preparation Drill in the correct order?",
    "fillBlankPrompt": "List all ten Preparation Drill exercises in order.",
    "answer": "Bend and Reach, Rear Lunge, High Jumper, Rower, Squat Bender, Windmill, Forward Lunge, Prone Row, Bent Leg Body Twist, Pushup",
    "answerType": "ordered-list",
    "requiredItems": [
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper",
      "Rower",
      "Squat Bender",
      "Windmill",
      "Forward Lunge",
      "Prone Row",
      "Bent Leg Body Twist",
      "Pushup"
    ],
    "choices": [
      "Bend and Reach, Rear Lunge, High Jumper, Rower, Squat Bender, Windmill, Forward Lunge, Prone Row, Bent Leg Body Twist, Pushup",
      "Bend and Reach, Rear Lunge, Rower, High Jumper, Squat Bender, Windmill, Prone Row, Forward Lunge, Bent Leg Body Twist, Pushup",
      "Overhead Arm Pull, Rear Lunge, Extend and Flex, Thigh Stretch, Single Leg Over, Groin Stretch, Calf Stretch, Hamstring Stretch",
      "Vertical, Lateral, Shuttle Sprint, Power Skip, Crossover, Crouch Run"
    ]
  },
  {
    "id": "prep-1",
    "prompt": "What is exercise 1 of the Preparation Drill?",
    "fillBlankPrompt": "Type exercise 1 of the Preparation Drill.",
    "answer": "Bend and Reach",
    "choices": [
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper",
      "Rower"
    ]
  },
  {
    "id": "prep-2",
    "prompt": "What is exercise 2 of the Preparation Drill?",
    "fillBlankPrompt": "Type exercise 2 of the Preparation Drill.",
    "answer": "Rear Lunge",
    "choices": [
      "Rear Lunge",
      "Bend and Reach",
      "High Jumper",
      "Rower"
    ]
  },
  {
    "id": "prep-3",
    "prompt": "What is exercise 3 of the Preparation Drill?",
    "fillBlankPrompt": "Type exercise 3 of the Preparation Drill.",
    "answer": "High Jumper",
    "choices": [
      "High Jumper",
      "Bend and Reach",
      "Rear Lunge",
      "Rower"
    ]
  },
  {
    "id": "prep-4",
    "prompt": "What is exercise 4 of the Preparation Drill?",
    "fillBlankPrompt": "Type exercise 4 of the Preparation Drill.",
    "answer": "Rower",
    "choices": [
      "Rower",
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper"
    ]
  },
  {
    "id": "prep-5",
    "prompt": "What is exercise 5 of the Preparation Drill?",
    "fillBlankPrompt": "Type exercise 5 of the Preparation Drill.",
    "answer": "Squat Bender",
    "choices": [
      "Squat Bender",
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper"
    ]
  },
  {
    "id": "prep-6",
    "prompt": "What is exercise 6 of the Preparation Drill?",
    "fillBlankPrompt": "Type exercise 6 of the Preparation Drill.",
    "answer": "Windmill",
    "choices": [
      "Windmill",
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper"
    ]
  },
  {
    "id": "prep-7",
    "prompt": "What is exercise 7 of the Preparation Drill?",
    "fillBlankPrompt": "Type exercise 7 of the Preparation Drill.",
    "answer": "Forward Lunge",
    "choices": [
      "Forward Lunge",
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper"
    ]
  },
  {
    "id": "prep-8",
    "prompt": "What is exercise 8 of the Preparation Drill?",
    "fillBlankPrompt": "Type exercise 8 of the Preparation Drill.",
    "answer": "Prone Row",
    "choices": [
      "Prone Row",
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper"
    ]
  },
  {
    "id": "prep-9",
    "prompt": "What is exercise 9 of the Preparation Drill?",
    "fillBlankPrompt": "Type exercise 9 of the Preparation Drill.",
    "answer": "Bent Leg Body Twist",
    "choices": [
      "Bent Leg Body Twist",
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper"
    ]
  },
  {
    "id": "prep-10",
    "prompt": "What is exercise 10 of the Preparation Drill?",
    "fillBlankPrompt": "Type exercise 10 of the Preparation Drill.",
    "answer": "Pushup",
    "choices": [
      "Pushup",
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper"
    ]
  },
  {
    "id": "recovery-mnemonic",
    "prompt": "What mnemonic is used to remember the Recovery Drill?",
    "fillBlankPrompt": "Type the Recovery Drill mnemonic.",
    "answer": "Only Rangers Enjoy This Shit Groaned Captain Hams",
    "choices": [
      "Only Rangers Enjoy This Shit Groaned Captain Hams",
      "Be Right Here Real Soon We Found Privates Behind Popeyes",
      "Only Rangers End This Stretch Going Calmly Home",
      "Overhead Rear Extend Thigh Single Groin Calf Hamstring"
    ]
  },
  {
    "id": "recovery-full-sequence",
    "prompt": "Which answer lists the Recovery Drill in the correct order?",
    "fillBlankPrompt": "List all eight Recovery Drill exercises in order.",
    "answer": "Overhead Arm Pull, Rear Lunge, Extend and Flex, Thigh Stretch, Single Leg Over, Groin Stretch, Calf Stretch, Hamstring Stretch",
    "answerType": "ordered-list",
    "requiredItems": [
      "Overhead Arm Pull",
      "Rear Lunge",
      "Extend and Flex",
      "Thigh Stretch",
      "Single Leg Over",
      "Groin Stretch",
      "Calf Stretch",
      "Hamstring Stretch"
    ],
    "choices": [
      "Overhead Arm Pull, Rear Lunge, Extend and Flex, Thigh Stretch, Single Leg Over, Groin Stretch, Calf Stretch, Hamstring Stretch",
      "Rear Lunge, Overhead Arm Pull, Extend and Flex, Single Leg Over, Thigh Stretch, Groin Stretch, Hamstring Stretch, Calf Stretch",
      "Bend and Reach, Rear Lunge, High Jumper, Rower, Squat Bender, Windmill, Forward Lunge, Prone Row",
      "Vertical, Lateral, Shuttle Sprint, Power Skip, Crossover, Crouch Run"
    ]
  },
  {
    "id": "recovery-1",
    "prompt": "What is exercise 1 of the Recovery Drill?",
    "fillBlankPrompt": "Type exercise 1 of the Recovery Drill.",
    "answer": "Overhead Arm Pull",
    "choices": [
      "Overhead Arm Pull",
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper"
    ]
  },
  {
    "id": "recovery-2",
    "prompt": "What is exercise 2 of the Recovery Drill?",
    "fillBlankPrompt": "Type exercise 2 of the Recovery Drill.",
    "answer": "Rear Lunge",
    "choices": [
      "Rear Lunge",
      "Bend and Reach",
      "High Jumper",
      "Rower"
    ]
  },
  {
    "id": "recovery-3",
    "prompt": "What is exercise 3 of the Recovery Drill?",
    "fillBlankPrompt": "Type exercise 3 of the Recovery Drill.",
    "answer": "Extend and Flex",
    "choices": [
      "Extend and Flex",
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper"
    ]
  },
  {
    "id": "recovery-4",
    "prompt": "What is exercise 4 of the Recovery Drill?",
    "fillBlankPrompt": "Type exercise 4 of the Recovery Drill.",
    "answer": "Thigh Stretch",
    "choices": [
      "Thigh Stretch",
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper"
    ]
  },
  {
    "id": "recovery-5",
    "prompt": "What is exercise 5 of the Recovery Drill?",
    "fillBlankPrompt": "Type exercise 5 of the Recovery Drill.",
    "answer": "Single Leg Over",
    "choices": [
      "Single Leg Over",
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper"
    ]
  },
  {
    "id": "recovery-6",
    "prompt": "What is exercise 6 of the Recovery Drill?",
    "fillBlankPrompt": "Type exercise 6 of the Recovery Drill.",
    "answer": "Groin Stretch",
    "choices": [
      "Groin Stretch",
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper"
    ]
  },
  {
    "id": "recovery-7",
    "prompt": "What is exercise 7 of the Recovery Drill?",
    "fillBlankPrompt": "Type exercise 7 of the Recovery Drill.",
    "answer": "Calf Stretch",
    "choices": [
      "Calf Stretch",
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper"
    ]
  },
  {
    "id": "recovery-8",
    "prompt": "What is exercise 8 of the Recovery Drill?",
    "fillBlankPrompt": "Type exercise 8 of the Recovery Drill.",
    "answer": "Hamstring Stretch",
    "choices": [
      "Hamstring Stretch",
      "Bend and Reach",
      "Rear Lunge",
      "High Jumper"
    ]
  },
  {
    "id": "mmd1-sequence",
    "prompt": "Which answer lists MMD1 in the correct order?",
    "fillBlankPrompt": "List all three MMD1 exercises in order.",
    "answer": "Vertical, Lateral, Shuttle Sprint",
    "answerType": "ordered-list",
    "requiredItems": [
      "Vertical",
      "Lateral",
      "Shuttle Sprint"
    ],
    "choices": [
      "Vertical, Lateral, Shuttle Sprint",
      "Power Skip, Crossover, Crouch Run",
      "Lateral, Vertical, Shuttle Sprint",
      "Vertical, Crossover, Crouch Run"
    ]
  },
  {
    "id": "mmd1-1",
    "prompt": "What is exercise 1 of Military Movement Drill 1 (MMD1)?",
    "fillBlankPrompt": "Type exercise 1 of MMD1.",
    "answer": "Vertical",
    "choices": [
      "Vertical",
      "Lateral",
      "Shuttle Sprint",
      "Power Skip"
    ]
  },
  {
    "id": "mmd1-2",
    "prompt": "What is exercise 2 of Military Movement Drill 1 (MMD1)?",
    "fillBlankPrompt": "Type exercise 2 of MMD1.",
    "answer": "Lateral",
    "choices": [
      "Lateral",
      "Vertical",
      "Shuttle Sprint",
      "Power Skip"
    ]
  },
  {
    "id": "mmd1-3",
    "prompt": "What is exercise 3 of Military Movement Drill 1 (MMD1)?",
    "fillBlankPrompt": "Type exercise 3 of MMD1.",
    "answer": "Shuttle Sprint",
    "choices": [
      "Shuttle Sprint",
      "Vertical",
      "Lateral",
      "Power Skip"
    ]
  },
  {
    "id": "mmd2-sequence",
    "prompt": "Which answer lists MMD2 in the correct order?",
    "fillBlankPrompt": "List all three MMD2 exercises in order.",
    "answer": "Power Skip, Crossover, Crouch Run",
    "answerType": "ordered-list",
    "requiredItems": [
      "Power Skip",
      "Crossover",
      "Crouch Run"
    ],
    "choices": [
      "Power Skip, Crossover, Crouch Run",
      "Vertical, Lateral, Shuttle Sprint",
      "Crossover, Power Skip, Crouch Run",
      "Power Skip, Lateral, Shuttle Sprint"
    ]
  },
  {
    "id": "mmd2-1",
    "prompt": "What is exercise 1 of Military Movement Drill 2 (MMD2)?",
    "fillBlankPrompt": "Type exercise 1 of MMD2.",
    "answer": "Power Skip",
    "choices": [
      "Power Skip",
      "Crossover",
      "Crouch Run",
      "Vertical"
    ]
  },
  {
    "id": "mmd2-2",
    "prompt": "What is exercise 2 of Military Movement Drill 2 (MMD2)?",
    "fillBlankPrompt": "Type exercise 2 of MMD2.",
    "answer": "Crossover",
    "choices": [
      "Crossover",
      "Power Skip",
      "Crouch Run",
      "Vertical"
    ]
  },
  {
    "id": "mmd2-3",
    "prompt": "What is exercise 3 of Military Movement Drill 2 (MMD2)?",
    "fillBlankPrompt": "Type exercise 3 of MMD2.",
    "answer": "Crouch Run",
    "choices": [
      "Crouch Run",
      "Power Skip",
      "Crossover",
      "Vertical"
    ]
  }
];
