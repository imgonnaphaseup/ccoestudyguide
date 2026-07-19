(() => {
  "use strict";

  const PASS_REQUIREMENTS = {
    leadership: 15,
    mottos: 4
  };

  const ATTEMPT_STORAGE_KEY = "cyberStudyTestAttemptsV2";
  const MAX_SAVED_ATTEMPTS = 20;
  const PHASE_6 = "phase6";
  const PHASE_6_PLUS = "phase6plus";
  let memoryAttemptFallback = [];

  const sectionDefinitions = [
    {
      id: "leadership",
      title: "Section 1: Leadership Picture Identification",
      type: "leadership",
      data: window.LEADERSHIP_DATA || []
    },
    {
      id: "mottos",
      title: "Section 2: Unit Mottos",
      type: "text",
      data: window.MOTTO_DATA || []
    },
    {
      id: "army-values",
      title: "Section 3: Army Values and Warrior Ethos",
      type: "text",
      data: window.ARMY_VALUES_DATA || []
    },
    {
      id: "map-colors",
      title: "Section 4: Map Colors (FM 3-25.26)",
      type: "multiple-choice",
      data: window.MAP_COLOR_DATA || []
    },
    {
      id: "terrain-features",
      title: "Section 5: Terrain Features",
      type: "terrain",
      data: window.TERRAIN_FEATURE_DATA || []
    },
    {
      id: "movement-drills",
      title: "Section 6: Military Movement Drills",
      type: "multiple-choice",
      data: window.MOVEMENT_DRILL_DATA || []
    },
    {
      id: "true-false",
      title: "Section 7: General Knowledge — True or False",
      type: "true-false",
      data: window.TRUE_FALSE_DATA || []
    },
    {
      id: "general-knowledge",
      title: "Section 8: General Knowledge",
      type: "multiple-choice",
      data: window.GENERAL_KNOWLEDGE_DATA || []
    },
    {
      id: "hand-signals",
      title: "Section 9: Hand-Signal Picture Identification",
      type: "hand-signal",
      data: window.HAND_SIGNAL_DATA || []
    }
  ];

  const menuView = document.getElementById("menuView");
  const testView = document.getElementById("testView");
  const attemptsView = document.getElementById("attemptsView");
  const reviewView = document.getElementById("reviewView");
  const currentModeBadge = document.getElementById("currentModeBadge");
  const phase6Button = document.getElementById("phase6Button");
  const phase6PlusButton = document.getElementById("phase6PlusButton");
  const previousAttemptsButton = document.getElementById("previousAttemptsButton");
  const testContainer = document.getElementById("testContainer");
  const questionTemplate = document.getElementById("questionTemplate");
  const finalSummary = document.getElementById("finalSummary");
  const summaryContent = document.getElementById("summaryContent");
  const navigationGrid = document.getElementById("navigationGrid");
  const quizNavigation = document.getElementById("quizNavigation");
  const closeNavigationButton = document.getElementById("closeNavigationButton");
  const showNavigationButton = document.getElementById("showNavigationButton");
  const goToSubmitButton = document.getElementById("goToSubmitButton");
  const returnToMenuButton = document.getElementById("returnToMenuButton");
  const submitPanel = document.getElementById("submitPanel");
  const submitStatus = document.getElementById("submitStatus");
  const submitTestButton = document.getElementById("submitTestButton");
  const attemptsList = document.getElementById("attemptsList");
  const newTestButton = document.getElementById("newTestButton");
  const reviewContent = document.getElementById("reviewContent");
  const backToAttemptsButton = document.getElementById("backToAttemptsButton");
  const newTestFromReviewButton = document.getElementById("newTestFromReviewButton");

  const state = {
    mode: null,
    questionCount: 0,
    gradedCount: 0,
    sections: new Map(),
    questions: [],
    submitted: false,
    observer: null,
    currentQuestionNumber: null,
    navigationSections: new Map()
  };

  function shuffle(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
    }
    return copy;
  }

  function normalize(value) {
    return String(value ?? "")
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[’']/g, "")
      .replace(/([a-z])([0-9])/g, "$1 $2")
      .replace(/([0-9])([a-z])/g, "$1 $2")
      .replace(/[^a-z0-9]+/g, " ")
      .trim()
      .replace(/\s+/g, " ");
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function modeLabel(mode) {
    if (mode === PHASE_6) return "Phase 6";
    if (mode === PHASE_6_PLUS) return "Phase 6+";
    return "Previous Version";
  }


  const NUMBER_WORD_VALUES = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90
  };

  const OPTIONAL_ANSWER_WORDS = new Set([
    "a", "an", "the", "and", "or", "of", "to", "is", "are", "was", "were",
    "it", "they", "may", "be", "that", "which", "for", "in", "on", "at",
    "week", "weeks", "meter", "meters", "pace", "paces", "hour", "hours",
    "minute", "minutes", "centimeter", "centimeters", "cm", "inch", "inches",
    "paint", "color", "colors"
  ]);

  const RANK_ALIASES = {
    president: ["president"],
    honorable: ["honorable", "hon"],
    general: ["general", "gen"],
    sma: ["sma", "sergeant major of the army"],
    ltg: ["ltg", "lieutenant general"],
    csm: ["csm", "command sergeant major"],
    mg: ["mg", "major general"],
    col: ["col", "colonel"],
    ltc: ["ltc", "lieutenant colonel"],
    cpt: ["cpt", "captain"],
    "1 sg": ["1sg", "1 sg", "first sergeant"]
  };

  function normalizeNumberWords(value) {
    const tokens = normalize(value).split(" ").filter(Boolean);
    const converted = [];
    let index = 0;

    while (index < tokens.length) {
      if (!(tokens[index] in NUMBER_WORD_VALUES)) {
        converted.push(tokens[index]);
        index += 1;
        continue;
      }

      let current = 0;
      let total = 0;
      let cursor = index;
      let usedNumberWord = false;

      while (cursor < tokens.length) {
        const token = tokens[cursor];

        if (token === "and" && usedNumberWord && cursor + 1 < tokens.length
          && tokens[cursor + 1] in NUMBER_WORD_VALUES) {
          cursor += 1;
          continue;
        }

        if (token in NUMBER_WORD_VALUES) {
          current += NUMBER_WORD_VALUES[token];
          usedNumberWord = true;
          cursor += 1;
          continue;
        }

        if (token === "hundred" && usedNumberWord) {
          current = (current || 1) * 100;
          cursor += 1;
          continue;
        }

        if (token === "thousand" && usedNumberWord) {
          total += (current || 1) * 1000;
          current = 0;
          cursor += 1;
          continue;
        }

        break;
      }

      if (!usedNumberWord) {
        converted.push(tokens[index]);
        index += 1;
      } else {
        converted.push(String(total + current));
        index = cursor;
      }
    }

    return converted.join(" ");
  }

  function canonicalAnswer(value) {
    return normalizeNumberWords(value);
  }

  function significantTokens(value) {
    return canonicalAnswer(value)
      .split(" ")
      .filter((token) => token && !OPTIONAL_ANSWER_WORDS.has(token));
  }

  function phraseTokensIncluded(userValue, expectedValue) {
    const userTokens = new Set(significantTokens(userValue));
    const expectedTokens = significantTokens(expectedValue);
    return expectedTokens.length > 0 && expectedTokens.every((token) => userTokens.has(token));
  }

  function automaticAnswerVariants(value) {
    const raw = String(value ?? "").trim();
    const variants = new Set();
    if (!raw) return variants;

    const add = (candidate) => {
      const normalized = canonicalAnswer(candidate);
      if (normalized) variants.add(normalized);
    };

    add(raw);
    add(raw.replace(/\s*\([^)]*\)/g, ""));

    for (const match of raw.matchAll(/\(([^)]+)\)/g)) {
      add(match[1]);
    }

    raw.split(";").forEach(add);

    const daForm = raw.match(/^DA\s+Form\s+(.+)$/i);
    if (daForm) {
      add(`DA ${daForm[1]}`);
      add(daForm[1]);
    }

    const daPam = raw.match(/^DA\s+Pam(?:phlet)?\s+(.+)$/i);
    if (daPam) {
      add(`DA PAM ${daPam[1]}`);
      add(daPam[1]);
    }

    const canonical = canonicalAnswer(raw);
    const unitOnly = canonical.match(/^(\d+)\s+(?:week|weeks|meter|meters|pace|paces|hour|hours|minute|minutes|centimeter|centimeters|cm|inch|inches)$/);
    if (unitOnly) add(unitOnly[1]);

    [
      "they may not ",
      "it may not ",
      "not to ",
      "only ",
      "the correct answer is "
    ].forEach((prefix) => {
      if (canonical.startsWith(prefix)) add(canonical.slice(prefix.length));
    });

    return variants;
  }

  function acceptedTextAnswers(question) {
    const answers = [question.answer, ...(question.acceptedAnswers || [])].filter(Boolean);
    const variants = new Set();
    answers.forEach((answer) => automaticAnswerVariants(answer).forEach((variant) => variants.add(variant)));
    return [...variants];
  }

  function isTextCorrect(question, userAnswer) {
    const normalizedUserAnswer = canonicalAnswer(userAnswer);
    if (!normalizedUserAnswer) return false;

    if (question.answerType === "unordered-list") {
      const requiredItems = question.requiredItems || [];
      return requiredItems.every((item) => phraseTokensIncluded(normalizedUserAnswer, item));
    }

    const acceptedAnswers = acceptedTextAnswers(question);
    if (acceptedAnswers.includes(normalizedUserAnswer)) return true;

    return acceptedAnswers.some((answer) => {
      const expectedTokens = significantTokens(answer);
      return expectedTokens.length >= 2 && phraseTokensIncluded(normalizedUserAnswer, answer);
    });
  }

  function rankAliasesFor(rank) {
    const normalizedRank = normalize(rank);
    return RANK_ALIASES[normalizedRank] || [rank];
  }

  function isLeadershipTypedCorrect(question, userAnswer) {
    const normalizedUserAnswer = canonicalAnswer(userAnswer);
    if (!normalizedUserAnswer) return false;

    const explicitlyAccepted = (question.acceptedAnswers || [])
      .some((answer) => canonicalAnswer(answer) === normalizedUserAnswer);
    if (explicitlyAccepted) return true;

    const requiredNameTokens = normalize(question.name)
      .split(" ")
      .filter((token) => token.length > 1);
    const userTokens = new Set(normalizedUserAnswer.split(" "));
    const hasCorrectName = requiredNameTokens.every((token) => userTokens.has(token));

    const hasCorrectRank = rankAliasesFor(question.rank)
      .some((alias) => phraseTokensIncluded(normalizedUserAnswer, alias));

    const positionAliases = [question.position, ...(question.positionAliases || [])];
    const hasCorrectPosition = positionAliases
      .some((alias) => phraseTokensIncluded(normalizedUserAnswer, alias));

    return hasCorrectName && hasCorrectRank && hasCorrectPosition;
  }

  function isHandSignalCorrect(question, userAnswer) {
    return isTextCorrect({
      ...question,
      acceptedAnswers: [question.description, ...(question.acceptedAnswers || [])].filter(Boolean)
    }, userAnswer);
  }

  function correctAnswerText(question, sectionType) {
    if (sectionType === "leadership") {
      return `${question.rank} ${question.name} — ${question.position}`;
    }
    if ((sectionType === "hand-signal" || sectionType === "terrain") && question.description) {
      return `${question.answer} — ${question.description}`;
    }
    return question.answer;
  }

  function getFillBlankPrompt(question) {
    return question.fillBlankPrompt || question.prompt || "Type the complete correct answer.";
  }

  function sectionDescription(section, fillBlankCount = 0) {
    if (section.id === "leadership") {
      return state.mode === PHASE_6
        ? "Select each person's full first and last name from the dropdown. Required score: 15 out of 15."
        : "Type each person's full first and last name, rank, and position. Required score: 15 out of 15.";
    }
    if (section.id === "mottos") {
      return "Type the correct motto. Required score: 4 out of 4.";
    }
    if (section.id === "army-values") {
      return "Fill in each blank.";
    }
    if (section.id === "terrain-features") {
      return state.mode === PHASE_6
        ? "Complete the terrain knowledge questions and identify each terrain-feature picture from a dropdown."
        : "Complete the terrain knowledge questions and type the name of each terrain feature shown.";
    }
    if (section.id === "true-false") {
      return "Select True or False.";
    }
    if (section.id === "hand-signals") {
      return "Identify or describe the hand signal shown.";
    }
    if (section.type === "multiple-choice" && state.mode === PHASE_6_PLUS) {
      return `${fillBlankCount} out of ${section.data.length} questions were randomly changed to fill in the blank. All other questions are multiple choice.`;
    }
    if (section.type === "multiple-choice") {
      return "Multiple choice. Answer choices are reshuffled for every new test.";
    }
    return "";
  }

  function promptText(question, sectionType, renderType) {
    if (sectionType === "leadership") {
      return renderType === "leadership-dropdown"
        ? "Identify the person shown by selecting the correct full first and last name."
        : "Identify the person shown. Type the full first and last name, rank, and position within the Cyber Center of Excellence.";
    }
    if (sectionType === "hand-signal") {
      return "Identify or describe the hand signal shown.";
    }
    if (sectionType === "terrain" && question.image) {
      return renderType === "terrain-dropdown"
        ? "Identify the terrain feature shown by selecting its name."
        : "Identify the terrain feature shown.";
    }
    if (renderType === "fill-blank") {
      return getFillBlankPrompt(question);
    }
    return question.prompt || "";
  }

  function createImage(path, alt, fallbackPath, className = "question-image") {
    const image = document.createElement("img");
    image.className = className;
    image.src = path;
    image.alt = alt;
    image.loading = "lazy";
    image.addEventListener("error", () => {
      if (!image.dataset.fallbackApplied) {
        image.dataset.fallbackApplied = "true";
        image.src = fallbackPath;
      }
    });
    return image;
  }

  function createTextInput() {
    const row = document.createElement("div");
    row.className = "inline-fill-row";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "answer-input wide";
    input.autocomplete = "off";
    input.spellcheck = false;
    input.setAttribute("aria-label", "Type your answer");
    input.dataset.role = "text-answer";

    const statusIcon = document.createElement("span");
    statusIcon.className = "answer-status-icon";
    statusIcon.setAttribute("aria-hidden", "true");

    row.append(input, statusIcon);
    return row;
  }

  function createLeadershipDropdown(questionKey) {
    const row = document.createElement("div");
    row.className = "inline-fill-row";

    const select = document.createElement("select");
    select.className = "answer-select wide";
    select.dataset.role = "leadership-select";
    select.setAttribute("aria-label", "Select the person's full name");

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select a name";
    placeholder.selected = true;
    placeholder.disabled = true;
    select.append(placeholder);

    const leadershipSection = sectionDefinitions.find((section) => section.id === "leadership");
    const people = (leadershipSection?.data || [])
      .filter((person) => person.name && person.rank)
      .map((person) => ({
        name: person.name,
        label: `${person.rank} ${person.name}`
      }));

    shuffle(people).forEach((person) => {
      const option = document.createElement("option");
      option.value = person.name;
      option.textContent = person.label;
      select.append(option);
    });

    select.name = questionKey;

    const statusIcon = document.createElement("span");
    statusIcon.className = "answer-status-icon";
    statusIcon.setAttribute("aria-hidden", "true");

    row.append(select, statusIcon);
    return row;
  }


  function createTerrainDropdown(questionKey) {
    const row = document.createElement("div");
    row.className = "inline-fill-row";

    const select = document.createElement("select");
    select.className = "answer-select wide";
    select.dataset.role = "terrain-select";
    select.setAttribute("aria-label", "Select the terrain feature");

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Select a terrain feature";
    placeholder.selected = true;
    placeholder.disabled = true;
    select.append(placeholder);

    const terrainSection = sectionDefinitions.find((section) => section.id === "terrain-features");
    const names = [...new Set((terrainSection?.data || [])
      .filter((item) => item.image)
      .map((item) => item.answer)
      .filter(Boolean))];

    shuffle(names).forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      select.append(option);
    });

    select.name = questionKey;

    const statusIcon = document.createElement("span");
    statusIcon.className = "answer-status-icon";
    statusIcon.setAttribute("aria-hidden", "true");

    row.append(select, statusIcon);
    return row;
  }

  function createChoiceList(question, questionKey, forceTrueFalse = false) {
    const list = document.createElement("ul");
    list.className = "choice-list";

    const originalChoices = forceTrueFalse ? ["True", "False"] : (question.choices || []);
    const choices = forceTrueFalse ? originalChoices : shuffle(originalChoices);

    choices.forEach((choice, index) => {
      const listItem = document.createElement("li");
      const label = document.createElement("label");
      label.className = "choice-row";
      label.dataset.choiceValue = choice;

      const input = document.createElement("input");
      input.type = "radio";
      input.name = questionKey;
      input.value = choice;
      input.className = "choice-input";

      const letter = document.createElement("span");
      letter.className = "choice-letter";
      letter.textContent = `${String.fromCharCode(97 + index)}.`;

      const text = document.createElement("span");
      text.className = "choice-text";
      text.textContent = choice;

      label.append(input, letter, text);
      listItem.append(label);
      list.append(listItem);
    });

    return list;
  }


  function readQuestionResponse({ question, renderType, answerArea }) {
    let selectedAnswer = "";
    let hasAnswer = true;
    let correct = false;

    if (["text", "leadership-text", "hand-signal", "terrain-picture", "fill-blank"].includes(renderType)) {
      const input = answerArea.querySelector("[data-role='text-answer']");
      selectedAnswer = input?.value || "";
      hasAnswer = Boolean(canonicalAnswer(selectedAnswer));

      if (renderType === "leadership-text") {
        correct = isLeadershipTypedCorrect(question, selectedAnswer);
      } else if (renderType === "hand-signal") {
        correct = isHandSignalCorrect(question, selectedAnswer);
      } else {
        correct = isTextCorrect(question, selectedAnswer);
      }
    } else if (renderType === "leadership-dropdown") {
      const select = answerArea.querySelector("[data-role='leadership-select']");
      selectedAnswer = select?.value || "";
      hasAnswer = Boolean(canonicalAnswer(selectedAnswer));
      correct = hasAnswer && canonicalAnswer(selectedAnswer) === canonicalAnswer(question.name);
    } else if (renderType === "terrain-dropdown") {
      const select = answerArea.querySelector("[data-role='terrain-select']");
      selectedAnswer = select?.value || "";
      hasAnswer = Boolean(canonicalAnswer(selectedAnswer));
      correct = hasAnswer && canonicalAnswer(selectedAnswer) === canonicalAnswer(question.answer);
    } else {
      const selected = answerArea.querySelector("input[type='radio']:checked");
      hasAnswer = Boolean(selected);
      selectedAnswer = selected?.value || "";
      correct = hasAnswer && canonicalAnswer(selectedAnswer) === canonicalAnswer(question.answer);
    }

    return { selectedAnswer, hasAnswer, correct };
  }

  function responseForRecord(record) {
    return readQuestionResponse({
      question: record.question,
      renderType: record.renderType,
      answerArea: record.answerArea
    });
  }

  function updateScores() {
    for (const [sectionId, sectionState] of state.sections.entries()) {
      const scoreElement = document.querySelector(`[data-section-score="${sectionId}"]`);
      if (scoreElement) {
        const requirement = PASS_REQUIREMENTS[sectionId];
        let scoreText = `Score: ${sectionState.score} out of ${sectionState.total} — Checked: ${sectionState.graded} out of ${sectionState.total}`;

        if (requirement) {
          const passed = sectionState.score === requirement && sectionState.total >= requirement;
          scoreText += passed ? " — PASSED" : ` — Needs ${requirement} out of ${requirement}`;
          scoreElement.classList.toggle("pass-label", passed);
          scoreElement.classList.toggle("fail-label", sectionState.graded > 0 && !passed);
        }

        scoreElement.textContent = scoreText;
      }

      const navigationSection = state.navigationSections.get(sectionId);
      if (navigationSection) {
        navigationSection.progress.textContent = `${sectionState.graded}/${sectionState.total} checked`;
      }
    }

    const ungradedRecords = state.questions.filter((record) => !record.graded);
    const answeredNotChecked = ungradedRecords.filter((record) => responseForRecord(record).hasAnswer).length;
    const unanswered = ungradedRecords.length - answeredNotChecked;

    submitTestButton.disabled = state.questionCount === 0 || state.submitted;

    if (state.questionCount === 0) {
      submitStatus.textContent = "No questions are loaded.";
    } else if (ungradedRecords.length === 0) {
      submitStatus.textContent = "Every question has been checked. Your test is ready to submit.";
    } else {
      submitStatus.textContent = `${answeredNotChecked} answered but not checked; ${unanswered} unanswered. You may still submit now.`;
    }
  }

  function revealFinalSummaryIfComplete() {
    if (state.questionCount === 0 || state.gradedCount !== state.questionCount) return;

    const rows = sectionDefinitions.map((section) => {
      const sectionState = state.sections.get(section.id);
      const requirement = PASS_REQUIREMENTS[section.id];
      let status = "Completed";

      if (requirement) {
        status = sectionState.score === requirement && sectionState.total >= requirement
          ? "Passed"
          : `Not passed — requires ${requirement} out of ${requirement}`;
      }

      return `
        <tr>
          <td>${escapeHtml(section.title.replace(/^Section \d+: /, ""))}</td>
          <td>${escapeHtml(status)}</td>
          <td>${sectionState.score} out of ${sectionState.total}</td>
        </tr>
      `;
    }).join("");

    const leadershipState = state.sections.get("leadership");
    const mottoState = state.sections.get("mottos");
    const requiredPassed = leadershipState?.score === 15
      && leadershipState?.total >= 15
      && mottoState?.score === 4
      && mottoState?.total >= 4;

    summaryContent.innerHTML = `
      <p><strong>Mode:</strong> ${escapeHtml(modeLabel(state.mode))}</p>
      <p class="${requiredPassed ? "pass-label" : "fail-label"}">
        <strong>${requiredPassed ? "Required sections passed." : "Required sections not yet passed."}</strong>
      </p>
      <table class="summary-table">
        <thead>
          <tr><th>Section</th><th>Status</th><th>Score</th></tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
    finalSummary.hidden = false;
  }


  function sectionNumberFor(section) {
    return sectionDefinitions.findIndex((item) => item.id === section.id) + 1;
  }

  function setNavigationSectionExpanded(sectionId, expanded, collapseOthers = false) {
    if (collapseOthers && expanded) {
      for (const [otherId, otherSection] of state.navigationSections.entries()) {
        if (otherId === sectionId) continue;
        otherSection.grid.hidden = true;
        otherSection.toggle.setAttribute("aria-expanded", "false");
        otherSection.container.classList.remove("expanded");
      }
    }

    const navigationSection = state.navigationSections.get(sectionId);
    if (!navigationSection) return;

    navigationSection.grid.hidden = !expanded;
    navigationSection.toggle.setAttribute("aria-expanded", String(expanded));
    navigationSection.container.classList.toggle("expanded", expanded);
  }

  function createNavigationSection(section, totalQuestions) {
    const container = document.createElement("section");
    container.className = "navigation-section";
    container.dataset.navigationSection = section.id;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "navigation-section-toggle";
    toggle.setAttribute("aria-expanded", "false");

    const title = document.createElement("span");
    title.className = "navigation-section-title";
    title.textContent = section.title;

    const progress = document.createElement("span");
    progress.className = "navigation-section-progress";
    progress.textContent = `0/${totalQuestions} checked`;

    const chevron = document.createElement("span");
    chevron.className = "navigation-section-chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.textContent = "▸";

    toggle.append(title, progress, chevron);

    const grid = document.createElement("div");
    grid.className = "navigation-section-question-grid";
    grid.hidden = true;

    toggle.addEventListener("click", () => {
      const willExpand = toggle.getAttribute("aria-expanded") !== "true";
      setNavigationSectionExpanded(section.id, willExpand, willExpand);
    });

    container.append(toggle, grid);
    navigationGrid.append(container);

    const navigationSection = { container, toggle, title, progress, grid };
    state.navigationSections.set(section.id, navigationSection);

    if (state.navigationSections.size === 1) {
      setNavigationSectionExpanded(section.id, true, false);
    }

    return navigationSection;
  }

  function setCurrentNavigationQuestion(questionNumber) {
    if (state.currentQuestionNumber === questionNumber) return;
    state.currentQuestionNumber = questionNumber;

    const currentRecord = state.questions.find((record) => record.number === questionNumber);
    if (currentRecord) {
      setNavigationSectionExpanded(currentRecord.sectionId, true, true);
    }

    state.questions.forEach((record) => {
      record.navButton?.classList.toggle("current", record.number === questionNumber);
    });
  }

  function scrollToQuestion(record) {
    if (!record?.row) return;
    record.row.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrentNavigationQuestion(record.number);
    record.row.classList.add("navigation-highlight");
    window.setTimeout(() => record.row.classList.remove("navigation-highlight"), 1200);
  }

  function createNavigationButton(record, navigationSection) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "navigation-question-button";
    button.textContent = String(record.sectionQuestionNumber);
    button.title = `${record.sectionTitle} — Question ${record.sectionQuestionNumber}`;
    button.setAttribute(
      "aria-label",
      `Go to ${record.sectionTitle}, question ${record.sectionQuestionNumber}`
    );
    button.addEventListener("click", () => scrollToQuestion(record));
    navigationSection.grid.append(button);
    record.navButton = button;
  }

  function markTextControl(answerArea, correct, selector) {
    const control = answerArea.querySelector(selector);
    const statusIcon = answerArea.querySelector(".answer-status-icon");
    control.disabled = true;
    control.classList.add(correct ? "correct" : "incorrect");
    statusIcon.textContent = correct ? "✓" : "×";
    statusIcon.classList.add(correct ? "correct" : "incorrect");
  }


  function gradeQuestion(
    { section, question, renderType, row, answerArea, checkButton, sectionState, record },
    { allowBlank = false } = {}
  ) {
    if (row.dataset.graded === "true") return true;

    const { selectedAnswer, hasAnswer, correct } = readQuestionResponse({
      question,
      renderType,
      answerArea
    });

    const feedback = row.querySelector(".answer-feedback");
    if (!hasAnswer && !allowBlank) {
      feedback.hidden = false;
      feedback.innerHTML = "Select or enter an answer before pressing <strong>Check</strong>.";
      return false;
    }

    row.dataset.graded = "true";

    const pendingState = row.querySelector(".question-state-pending");
    const gradedState = row.querySelector(".question-state-graded");
    const gradeLabel = row.querySelector(".grade-label");
    const gradeScore = row.querySelector(".grade-score");

    pendingState.hidden = true;
    gradedState.hidden = false;
    gradeLabel.textContent = correct ? "Correct" : "Incorrect";
    gradeLabel.classList.add(correct ? "correct" : "incorrect");
    gradeScore.textContent = correct ? "1.00" : "0.00";

    if (["text", "leadership-text", "hand-signal", "terrain-picture", "fill-blank"].includes(renderType)) {
      markTextControl(answerArea, correct, "[data-role='text-answer']");
    } else if (renderType === "leadership-dropdown") {
      markTextControl(answerArea, correct, "[data-role='leadership-select']");
    } else if (renderType === "terrain-dropdown") {
      markTextControl(answerArea, correct, "[data-role='terrain-select']");
    } else {
      const choices = answerArea.querySelectorAll("input[type='radio']");
      choices.forEach((choiceInput) => {
        choiceInput.disabled = true;
        const label = choiceInput.closest(".choice-row");
        if (canonicalAnswer(choiceInput.value) === canonicalAnswer(question.answer)) {
          label.classList.add("correct-choice");
        } else if (choiceInput.checked) {
          label.classList.add("incorrect-choice");
        }
      });
    }

    checkButton.disabled = true;
    feedback.hidden = false;
    feedback.innerHTML = !hasAnswer
      ? `No answer was submitted. The correct answer is: <strong>${escapeHtml(correctAnswerText(question, section.type))}</strong>`
      : `The correct answer is: <strong>${escapeHtml(correctAnswerText(question, section.type))}</strong>`;

    sectionState.graded += 1;
    state.gradedCount += 1;
    if (correct) sectionState.score += 1;

    record.graded = true;
    record.correct = correct;
    record.userAnswer = hasAnswer ? selectedAnswer : "";
    record.navButton.classList.add(correct ? "correct" : "incorrect");

    updateScores();
    revealFinalSummaryIfComplete();
    return true;
  }

  function renderQuestion(
    section,
    question,
    globalQuestionNumber,
    sectionQuestionNumber,
    sectionState,
    renderType,
    navigationSection
  ) {
    const fragment = questionTemplate.content.cloneNode(true);
    const row = fragment.querySelector(".question-row");
    const sidebar = fragment.querySelector(".question-sidebar");
    const questionNumber = fragment.querySelector(".question-number");
    const prompt = fragment.querySelector(".question-prompt");
    const media = fragment.querySelector(".question-media");
    const answerArea = fragment.querySelector(".answer-area");
    const checkButton = fragment.querySelector(".check-button");
    const flagButton = fragment.querySelector(".flag-button");

    const sectionNumber = sectionNumberFor(section);

    row.id = `question-${globalQuestionNumber}`;
    row.dataset.questionNumber = String(globalQuestionNumber);
    questionNumber.innerHTML = `<span>Section ${sectionNumber}</span><span>Question ${sectionQuestionNumber}</span>`;

    const imagePath = question.image || "";
    const displayedPrompt = promptText(question, section.type, renderType);

    const formatLabels = {
      "leadership-dropdown": "Picture and name dropdown",
      "leadership-text": "Picture and typed name, rank, and position",
      "terrain-dropdown": "Terrain picture and dropdown",
      "terrain-picture": "Terrain picture identification",
      "multiple-choice": "Multiple choice",
      "fill-blank": "Fill in the blank",
      "true-false": "True or False",
      "hand-signal": "Picture identification",
      text: "Fill in the blank"
    };

    const record = {
      number: globalQuestionNumber,
      sectionQuestionNumber,
      sectionId: section.id,
      sectionTitle: section.title,
      sectionType: section.type,
      questionFormat: formatLabels[renderType] || renderType,
      prompt: displayedPrompt,
      imagePath,
      correctAnswer: correctAnswerText(question, section.type),
      userAnswer: "",
      graded: false,
      correct: false,
      flagged: false,
      row,
      navButton: null,
      question,
      renderType,
      answerArea,
      checkButton,
      sectionState,
      section
    };

    state.questions.push(record);
    createNavigationButton(record, navigationSection);

    prompt.innerHTML = `<p>${escapeHtml(displayedPrompt)}</p>`;

    if (section.type === "leadership") {
      media.append(createImage(
        question.image,
        `Leadership identification image for ${question.position}`,
        "images/placeholder-person.svg"
      ));
      answerArea.append(
        renderType === "leadership-dropdown"
          ? createLeadershipDropdown(`question-${globalQuestionNumber}`)
          : createTextInput()
      );
    } else if (section.type === "hand-signal") {
      media.append(createImage(
        question.image,
        "Hand-signal identification image",
        "images/placeholder-hand-signal.svg"
      ));
      answerArea.append(createTextInput());
    } else if (section.type === "terrain" && question.image) {
      media.append(createImage(
        question.image,
        `Terrain-feature identification image for ${question.answer}`,
        "images/placeholder-hand-signal.svg"
      ));
      answerArea.append(
        renderType === "terrain-dropdown"
          ? createTerrainDropdown(`question-${globalQuestionNumber}`)
          : createTextInput()
      );
    } else if (renderType === "multiple-choice") {
      answerArea.append(createChoiceList(question, `question-${globalQuestionNumber}`));
    } else if (renderType === "true-false") {
      answerArea.append(createChoiceList(question, `question-${globalQuestionNumber}`, true));
    } else {
      answerArea.append(createTextInput());
    }

    record.grade = (options = {}) => gradeQuestion({
      section,
      question,
      renderType,
      row,
      answerArea,
      checkButton,
      sectionState,
      record
    }, options);

    flagButton.addEventListener("click", () => {
      const isFlagged = flagButton.getAttribute("aria-pressed") === "true";
      flagButton.setAttribute("aria-pressed", String(!isFlagged));
      flagButton.textContent = isFlagged ? "⚑ Flag question" : "⚑ Unflag question";
      sidebar.classList.toggle("flagged", !isFlagged);
      record.flagged = !isFlagged;
      record.navButton.classList.toggle("flagged", !isFlagged);
    });

    checkButton.addEventListener("click", () => {
      record.grade();
    });

    answerArea.addEventListener("input", updateScores);
    answerArea.addEventListener("change", updateScores);

    const textInput = answerArea.querySelector("[data-role='text-answer']");
    if (textInput) {
      textInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          checkButton.click();
        }
      });
    }

    return fragment;
  }

  function createFillBlankSelection(section) {
    if (state.mode !== PHASE_6_PLUS || section.type !== "multiple-choice") {
      return new Set();
    }

    const maximumFillBlankCount = Math.floor(section.data.length * 0.25);
    return new Set(shuffle(section.data).slice(0, maximumFillBlankCount));
  }

  function renderTypeForQuestion(section, question, fillBlankSelection) {
    if (section.type === "leadership") {
      return state.mode === PHASE_6 ? "leadership-dropdown" : "leadership-text";
    }
    if (section.type === "terrain" && question.image) {
      return state.mode === PHASE_6 ? "terrain-dropdown" : "terrain-picture";
    }
    if (section.type === "hand-signal") return "hand-signal";
    if (section.type === "true-false") return "true-false";
    if (section.type === "multiple-choice") {
      return fillBlankSelection.has(question) ? "fill-blank" : "multiple-choice";
    }
    return "text";
  }

  function renderSection(section, startingQuestionNumber) {
    const wrapper = document.createElement("section");
    wrapper.className = "test-section";
    wrapper.id = `section-${section.id}`;

    const fillBlankSelection = createFillBlankSelection(section);
    const sectionState = {
      total: section.data.length,
      graded: 0,
      score: 0,
      fillBlankCount: fillBlankSelection.size
    };
    state.sections.set(section.id, sectionState);

    const navigationSection = createNavigationSection(section, section.data.length);

    const heading = document.createElement("div");
    heading.className = "section-heading";
    heading.innerHTML = `
      <div class="section-heading-row">
        <h2>${escapeHtml(section.title)}</h2>
        <div class="section-score" data-section-score="${escapeHtml(section.id)}">Score: 0 out of ${section.data.length} — Checked: 0 out of ${section.data.length}</div>
      </div>
      <p>${escapeHtml(sectionDescription(section, fillBlankSelection.size))}</p>
    `;
    wrapper.append(heading);

    if (section.id === "leadership" && section.data.length !== PASS_REQUIREMENTS.leadership) {
      const warning = document.createElement("div");
      warning.className = "empty-data-warning";
      warning.innerHTML = `<strong>${section.data.length} of 15 leadership entries are currently loaded.</strong> Add the remaining people in <code>data/leadership.js</code> and their images in <code>images/leadership/</code>.`;
      wrapper.append(warning);
    }

    if (section.data.length === 0) {
      const warning = document.createElement("div");
      warning.className = "empty-data-warning";
      warning.textContent = "No questions are loaded in this section yet.";
      wrapper.append(warning);
      return { element: wrapper, nextQuestionNumber: startingQuestionNumber };
    }

    const randomizedQuestions = shuffle(section.data);
    let globalQuestionNumber = startingQuestionNumber;
    let sectionQuestionNumber = 1;

    randomizedQuestions.forEach((question) => {
      const renderType = renderTypeForQuestion(section, question, fillBlankSelection);
      wrapper.append(renderQuestion(
        section,
        question,
        globalQuestionNumber,
        sectionQuestionNumber,
        sectionState,
        renderType,
        navigationSection
      ));
      globalQuestionNumber += 1;
      sectionQuestionNumber += 1;
      state.questionCount += 1;
    });

    return { element: wrapper, nextQuestionNumber: globalQuestionNumber };
  }

  function initializeQuestionObserver() {
    if (!("IntersectionObserver" in window)) return;
    state.observer?.disconnect();
    state.observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible.length > 0) {
        setCurrentNavigationQuestion(Number(visible[0].target.dataset.questionNumber));
      }
    }, {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0, 0.15, 0.4]
    });

    state.questions.forEach((record) => state.observer.observe(record.row));
  }

  function resetTestState() {
    state.questionCount = 0;
    state.gradedCount = 0;
    state.sections.clear();
    state.questions = [];
    state.submitted = false;
    state.currentQuestionNumber = null;
    state.navigationSections.clear();
    state.observer?.disconnect();
    state.observer = null;
    testContainer.innerHTML = "";
    navigationGrid.innerHTML = "";
    summaryContent.innerHTML = "";
    finalSummary.hidden = true;
    quizNavigation.hidden = false;
    showNavigationButton.hidden = true;
  }

  function initializeTest() {
    resetTestState();
    currentModeBadge.textContent = modeLabel(state.mode);
    let nextQuestionNumber = 1;
    sectionDefinitions.forEach((section) => {
      const rendered = renderSection(section, nextQuestionNumber);
      testContainer.append(rendered.element);
      nextQuestionNumber = rendered.nextQuestionNumber;
    });
    updateScores();
    initializeQuestionObserver();
    if (state.questions.length > 0) setCurrentNavigationQuestion(1);
  }

  function loadAttempts() {
    try {
      const raw = window.localStorage.getItem(ATTEMPT_STORAGE_KEY);
      if (!raw) return memoryAttemptFallback;
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      return memoryAttemptFallback;
    }
  }

  function saveAttempt(attempt) {
    const attempts = [attempt, ...loadAttempts().filter((item) => item.id !== attempt.id)]
      .slice(0, MAX_SAVED_ATTEMPTS);
    memoryAttemptFallback = attempts;
    try {
      window.localStorage.setItem(ATTEMPT_STORAGE_KEY, JSON.stringify(attempts));
    } catch (error) {
      // The in-memory fallback keeps attempts available during this browser session.
    }
  }

  function buildAttemptRecord() {
    const sectionResults = sectionDefinitions.map((section) => {
      const result = state.sections.get(section.id);
      const requirement = PASS_REQUIREMENTS[section.id] || null;
      return {
        id: section.id,
        title: section.title,
        score: result?.score || 0,
        total: result?.total || 0,
        requirement,
        passed: requirement
          ? result?.score === requirement && result?.total >= requirement
          : true
      };
    });

    const totalScore = sectionResults.reduce((sum, section) => sum + section.score, 0);
    const totalQuestions = sectionResults.reduce((sum, section) => sum + section.total, 0);
    const requiredPassed = sectionResults
      .filter((section) => section.requirement)
      .every((section) => section.passed);

    return {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      completedAt: new Date().toISOString(),
      mode: state.mode,
      modeLabel: modeLabel(state.mode),
      totalScore,
      totalQuestions,
      requiredPassed,
      sectionResults,
      questions: state.questions.map((record) => ({
        number: record.number,
        sectionQuestionNumber: record.sectionQuestionNumber,
        sectionId: record.sectionId,
        sectionTitle: record.sectionTitle,
        sectionType: record.sectionType,
        questionFormat: record.questionFormat,
        prompt: record.prompt,
        imagePath: record.imagePath,
        userAnswer: record.userAnswer,
        correctAnswer: record.correctAnswer,
        correct: record.correct,
        flagged: record.flagged
      }))
    };
  }

  function formatAttemptDate(isoDate) {
    const date = new Date(isoDate);
    if (Number.isNaN(date.getTime())) return "Unknown date";
    return date.toLocaleString([], {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit"
    });
  }

  function showView(viewName) {
    menuView.hidden = viewName !== "menu";
    testView.hidden = viewName !== "test";
    attemptsView.hidden = viewName !== "attempts";
    reviewView.hidden = viewName !== "review";
    currentModeBadge.hidden = viewName !== "test";
    showNavigationButton.hidden = viewName !== "test" || !quizNavigation.hidden;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderAttemptsMenu() {
    const attempts = loadAttempts();
    attemptsList.innerHTML = "";

    if (attempts.length === 0) {
      attemptsList.innerHTML = `
        <div class="empty-history">
          No submitted attempts are saved yet. Complete and submit a test to create your first review.
        </div>
      `;
      return;
    }

    attempts.forEach((attempt, index) => {
      const card = document.createElement("article");
      card.className = "attempt-card";
      const requiredStatus = attempt.requiredPassed
        ? '<span class="pass-label"><strong>Required sections passed</strong></span>'
        : '<span class="fail-label"><strong>Required sections not passed</strong></span>';
      card.innerHTML = `
        <div>
          <h3>Attempt ${attempts.length - index}</h3>
          <p class="attempt-mode">${escapeHtml(attempt.modeLabel || modeLabel(attempt.mode))}</p>
          <p class="attempt-meta">Submitted ${escapeHtml(formatAttemptDate(attempt.completedAt))}</p>
          <p><strong>Overall score:</strong> ${attempt.totalScore} out of ${attempt.totalQuestions}</p>
          <p>${requiredStatus}</p>
        </div>
      `;

      const reviewButton = document.createElement("button");
      reviewButton.type = "button";
      reviewButton.className = "secondary-button";
      reviewButton.textContent = "View Correct / Incorrect";
      reviewButton.addEventListener("click", () => renderAttemptReview(attempt.id));
      card.append(reviewButton);
      attemptsList.append(card);
    });
  }

  function showAttemptsMenu() {
    renderAttemptsMenu();
    showView("attempts");
  }

  function reviewImageFallback(sectionType) {
    return sectionType === "leadership"
      ? "images/placeholder-person.svg"
      : "images/placeholder-hand-signal.svg";
  }

  function renderAttemptReview(attemptId) {
    const attempt = loadAttempts().find((item) => item.id === attemptId);
    if (!attempt) {
      showAttemptsMenu();
      return;
    }

    const sectionSummaryRows = attempt.sectionResults.map((section) => `
      <tr>
        <td>${escapeHtml(section.title.replace(/^Section \d+: /, ""))}</td>
        <td>${section.score} out of ${section.total}</td>
        <td>${section.requirement ? (section.passed ? "Passed" : `Needs ${section.requirement} out of ${section.requirement}`) : "Completed"}</td>
      </tr>
    `).join("");

    const groupedQuestions = sectionDefinitions.map((section) => {
      const questions = attempt.questions.filter((question) => question.sectionId === section.id);
      if (questions.length === 0) return "";

      const questionCards = questions.map((question) => {
        const imageMarkup = question.imagePath
          ? `<img class="review-image" src="${escapeHtml(question.imagePath)}" alt="Review image for question ${question.number}" onerror="this.onerror=null;this.src='${escapeHtml(reviewImageFallback(question.sectionType))}'">`
          : "";
        return `
          <article class="review-question-card ${question.correct ? "correct" : "incorrect"}">
            <div class="review-question-heading">
              <strong>Question ${question.sectionQuestionNumber || question.number}</strong>
              <strong class="${question.correct ? "pass-label" : "fail-label"}">${question.correct ? "Correct" : "Incorrect"}</strong>
            </div>
            <p class="question-format-label">${escapeHtml(question.questionFormat || "Question")}</p>
            <p>${escapeHtml(question.prompt)}</p>
            ${imageMarkup}
            <div class="review-answer-grid">
              <div class="review-answer-box">
                <span>Your answer</span>
                <strong>${escapeHtml(question.userAnswer || "No answer submitted")}</strong>
              </div>
              <div class="review-answer-box">
                <span>Correct answer</span>
                <strong>${escapeHtml(question.correctAnswer)}</strong>
              </div>
            </div>
          </article>
        `;
      }).join("");

      return `
        <section class="review-section">
          <h3>${escapeHtml(section.title)}</h3>
          ${questionCards}
        </section>
      `;
    }).join("");

    reviewContent.innerHTML = `
      <section class="review-header">
        <h2>Attempt Review</h2>
        <p><strong>Mode:</strong> ${escapeHtml(attempt.modeLabel || modeLabel(attempt.mode))}</p>
        <p><strong>Submitted:</strong> ${escapeHtml(formatAttemptDate(attempt.completedAt))}</p>
        <p><strong>Overall score:</strong> ${attempt.totalScore} out of ${attempt.totalQuestions}</p>
        <p class="${attempt.requiredPassed ? "pass-label" : "fail-label"}"><strong>${attempt.requiredPassed ? "Required sections passed." : "Required sections not passed."}</strong></p>
        <table class="summary-table">
          <thead><tr><th>Section</th><th>Score</th><th>Status</th></tr></thead>
          <tbody>${sectionSummaryRows}</tbody>
        </table>
      </section>
      ${groupedQuestions}
    `;
    showView("review");
  }

  function startNewTest(mode) {
    state.mode = mode;
    initializeTest();
    showView("test");
  }

  function returnToModeSelection(confirmUnfinished = false) {
    if (confirmUnfinished && !state.submitted && state.gradedCount > 0) {
      const confirmed = window.confirm("Leaving will erase the current unfinished attempt. Continue?");
      if (!confirmed) return;
    }
    showView("menu");
  }

  submitTestButton.addEventListener("click", () => {
    if (state.questionCount === 0) {
      window.alert("No questions are loaded.");
      return;
    }

    const ungradedRecords = state.questions.filter((record) => !record.graded);
    const answeredNotChecked = ungradedRecords.filter((record) => responseForRecord(record).hasAnswer);
    const unanswered = ungradedRecords.filter((record) => !responseForRecord(record).hasAnswer);

    if (ungradedRecords.length > 0) {
      const messageParts = ["Are you sure you want to submit this test?"];

      if (answeredNotChecked.length > 0) {
        messageParts.push(
          `${answeredNotChecked.length} answered question${answeredNotChecked.length === 1 ? " has" : "s have"} not been checked. ${answeredNotChecked.length === 1 ? "It" : "They"} will be graded automatically.`
        );
      }

      if (unanswered.length > 0) {
        messageParts.push(
          `${unanswered.length} question${unanswered.length === 1 ? " has" : "s have"} not been answered. ${unanswered.length === 1 ? "It" : "They"} will be marked incorrect.`
        );
      }

      messageParts.push("Select OK to submit, or Cancel to return to the test.");

      const confirmed = window.confirm(messageParts.join("\n\n"));
      if (!confirmed) return;

      ungradedRecords.forEach((record) => {
        record.grade({ allowBlank: true });
      });
    }

    if (!state.submitted) {
      saveAttempt(buildAttemptRecord());
      state.submitted = true;
    }

    showAttemptsMenu();
  });

  phase6Button.addEventListener("click", () => startNewTest(PHASE_6));
  phase6PlusButton.addEventListener("click", () => startNewTest(PHASE_6_PLUS));
  previousAttemptsButton.addEventListener("click", showAttemptsMenu);
  newTestButton.addEventListener("click", () => returnToModeSelection(false));
  newTestFromReviewButton.addEventListener("click", () => returnToModeSelection(false));
  backToAttemptsButton.addEventListener("click", showAttemptsMenu);

  closeNavigationButton.addEventListener("click", () => {
    quizNavigation.hidden = true;
    showNavigationButton.hidden = false;
  });

  showNavigationButton.addEventListener("click", () => {
    quizNavigation.hidden = false;
    showNavigationButton.hidden = true;
  });

  goToSubmitButton.addEventListener("click", () => {
    submitPanel.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  returnToMenuButton.addEventListener("click", () => returnToModeSelection(true));

  showView("menu");
})();
