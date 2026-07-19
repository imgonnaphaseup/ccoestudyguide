# Cyber Center of Excellence Randomized Study Test
made mostly by chatgpt for independent study
## Open the test

Double-click `index.html` or `OPEN-TEST.bat`. The test works locally and does not require installation or internet access.

The opening menu gives you three choices:

- **Phase 6**
- **Phase 6+**
- **Previous Attempts**

## Phase 6 behavior

- Leadership questions show a picture and a dropdown containing every loaded leadership name.
- The dropdown name order is randomized.
- Sections 4, 6, and 8 are multiple choice.
- Multiple-choice answer choices are randomized for every new test.

## Phase 6+ behavior

- Leadership questions require the full first and last name, rank, and position to be typed.
- In each multiple-choice section, up to 25% of the questions are randomly changed into fill-in-the-blank questions.
- The selected fill-in-the-blank questions change with every new test.
- All remaining multiple-choice questions have randomized answer choices.

## Test behavior

- Sections remain in the required order.
- Questions are randomized only inside their own section.
- Every section displays `Score: 0 out of X` and updates after each answer is checked.
- Every question has its own **Check** button.
- After checking, the question shows Correct or Incorrect and always displays the correct answer.
- Text answers ignore capitalization, ordinary punctuation, and extra spaces.
- Leadership requires 15 out of 15.
- Mottos require 4 out of 4.
- The right-side Quiz Navigation box contains a numbered button for every question.
- Clicking a number scrolls directly to that question.
- Navigation buttons turn green for correct answers and red for incorrect answers.
- The Submit Test button unlocks after every question has been checked.
- Submitted attempts are saved in the browser on that device.
- Saved attempts record whether the test was Phase 6 or Phase 6+.
- Each saved attempt can be opened to review the question format, submitted answer, correct answer, and result.
- **Take a New Test** returns to the Phase 6 / Phase 6+ selection menu.

## Add leadership pictures and information

1. Rename each image clearly, using lowercase letters and hyphens when possible.
   - Example: `raymond-harris.jpg`
2. Copy the image into:
   - `images/leadership/`
3. Open:
   - `data/leadership.js`
4. Add one object for the person inside `window.LEADERSHIP_DATA = [ ... ];`

Example:

```javascript
{
  id: "raymond-harris",
  image: "images/leadership/raymond-harris.jpg",
  name: "Raymond Harris",
  rank: "CSM",
  position: "T2COM CSM",
  acceptedAnswers: [
    "T2COM Command Sergeant Major CSM Raymond Harris",
    "Command Sergeant Major Raymond Harris T2COM CSM"
  ]
},
```

Important:

- Keep a comma between every person object.
- `image` must exactly match the image folder and filename.
- `name` is automatically added to the Phase 6 dropdown.
- `rank` and `position` are required in the Phase 6+ typed answer.
- The Phase 6+ grader accepts the name, rank, and position in any order.
- `acceptedAnswers` is optional and is used for expanded rank names or unusual answer variations.
- Add exactly 15 active entries to use the required 15 out of 15 passing score.

## Add hand-signal pictures and answers

1. Rename the image clearly.
   - Example: `assemble.jpg`
2. Copy it into:
   - `images/hand-signals/`
3. Open:
   - `data/hand-signals.js`
4. Add an object inside `window.HAND_SIGNAL_DATA = [ ... ];`

Example:

```javascript
{
  id: "assemble",
  image: "images/hand-signals/assemble.jpg",
  answer: "Assemble",
  description: "Assemble at the indicated location",
  acceptedAnswers: [
    "assemble here",
    "rally",
    "rally here"
  ]
},
```

The hand-signal section accepts the main answer, description, or any item in `acceptedAnswers`.

## Image file types

JPG, JPEG, PNG, WEBP, and GIF work in normal browsers. JPG or PNG is recommended.

If a filename or path is wrong, the test displays a placeholder image instead of breaking.

## Edit multiple-choice questions

Multiple-choice questions in `map-colors.js`, `movement-drills.js`, and `general-knowledge.js` automatically work in both modes.

```javascript
{
  id: "unique-question-id",
  prompt: "What bugle call happens at 0630?",
  fillBlankPrompt: "What bugle call happens at 0630?",
  answer: "Reveille",
  acceptedAnswers: ["reveille"],
  choices: [
    "Reveille",
    "Retreat",
    "Taps",
    "To the Colors"
  ]
},
```

- `choices` are automatically randomized.
- `fillBlankPrompt` is optional. When it is omitted, the regular `prompt` is used for the Phase 6+ fill-in version.
- `acceptedAnswers` is optional and adds other valid typed answers for the Phase 6+ fill-in version.
- The correct answer should appear exactly once in `choices`.

## Edit ordinary fill-in-the-blank questions

```javascript
{
  id: "unique-question-id",
  prompt: "Question text?",
  answer: "Correct answer",
  acceptedAnswers: ["Optional alternate answer"]
},
```
