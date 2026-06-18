(function () {
  const slides = [
    {
      section: "module",
      type: "title",
      kicker: "WORKSHOP / MODULE 02",
      title: "Build Your Own Financial Agent",
      body: ["Data, retrieval, embeddings, and the path from raw records to useful agent context."],
      chips: ["wifi: frontiertower995", "RAG", "Embeddings", "Crunchbase"],
    },
    {
      section: "welcome",
      type: "statement",
      kicker: "SESSION STATUS",
      title: "Welcome to the workshop!",
      body: ["Settle in, connect to the network, and keep a browser and terminal nearby."],
      variant: "invert",
    },
    {
      section: "room check",
      type: "question",
      kicker: "ROOM SIGNAL / 01",
      title: "Who here has heard of RAG or Retrieval Augmented Generation?",
      chips: ["retrieval", "augmentation", "generation"],
    },
    {
      section: "room check",
      type: "question",
      kicker: "ROOM SIGNAL / 02",
      title: "Who here has heard of an Embedding or Embeddings Model?",
      chips: ["vectors", "semantic space", "model output"],
      variant: "invert",
    },
    {
      section: "room check",
      type: "question",
      kicker: "ROOM SIGNAL / 03",
      title: "What about databases, like SQLite or Airtable?",
      chips: ["SQLite", "Airtable", "structured data"],
    },
    {
      section: "recap",
      type: "recap",
      kicker: "RECAP LOG / FIRST LECTURE",
      title: "What we've covered so far:",
      body: ["The operating frame for agents, durable workflows, and prompt-driven capability upgrades."],
      recapItems: [
        {
          label: "01 / AGENT FUNDAMENTALS",
          title: "What an agent is",
          points: ["Conceptually: a ReAct loop", "Practically: 200 lines of Python that do five things"],
        },
        {
          label: "02 / DURABLE EXECUTION",
          title: "LangGraph",
          points: ["Agent execution as a state machine", "Durable and auditable workflow traces"],
        },
        {
          label: "03 / CAPABILITY UPGRADE",
          title: "Pi agent",
          points: ["Use simple prompts to upgrade capabilities", "Write Python, build LangGraphs, or self-modify to fit the task"],
        },
      ],
      variant: "deep",
    },
    {
      section: "recap",
      type: "list",
      kicker: "THREE ROUTES",
      title: "Three levels of complexity, one destination",
      bullets: [
        "For the most technically inclined: write an agent from scratch in 200 lines of Python.",
        "For someone who wants absolute control over an enterprise workflow: LangGraph.",
        "For someone who just wants to prompt all the way to results without requiring much system design: Pi agent.",
      ],
      readouts: [
        ["LOW LEVEL", "Python"],
        ["WORKFLOW", "LangGraph"],
        ["PROMPT", "Pi"],
      ],
      variant: "deep",
    },
    {
      section: "recap",
      type: "question",
      kicker: "FRAMEWORK READY",
      title: "So you have the framework to build an agent at any level of skill.",
      body: ["Now what?"],
      chips: ["scratch", "workflow", "prompt"],
    },
    {
      section: "data",
      type: "chapter",
      kicker: "MISSING INPUT",
      title: "It needs DATA",
      body: ["The agent is only as capable as the context it can reach."],
      variant: "invert",
    },
    {
      section: "data",
      type: "statement",
      kicker: "SYSTEM LIMIT",
      title: "Agents are fundamentally limited by the quality and accessibility of the data they operate on.",
      variant: "deep",
    },
    {
      section: "data",
      type: "statement",
      kicker: "CONTEXT TRACE",
      title: "We've spoken a lot about context in general, but now let's get specific:",
      body: ["Where does the data come from, how is it shaped, and how does the agent retrieve the right pieces?"],
    },
    {
      section: "data",
      type: "list",
      kicker: "SOURCE MAP",
      title: "Where does data come from?",
      bullets: [
        "Public or paid APIs",
        "Scraping (Warning)",
        "RSS feeds",
        "Government and open datasets",
        "Government filings",
        "Any files you provide directly",
      ],
      readouts: [
        ["API", "paid/public"],
        ["FILES", "direct"],
        ["OPEN", "datasets"],
      ],
      variant: "warn",
    },
    {
      section: "data",
      type: "statement",
      kicker: "CONTEXT FAILURE",
      title: "Quality sources are not enough.",
      body: ["You can't just shove them directly into context and expect great results."],
      variant: "invert",
    },
    {
      section: "data",
      type: "statement",
      kicker: "DESIGN RESPONSIBILITY",
      title: "We need to intelligently surface the correct context to get what we want.",
      body: ["The system design problem is retrieval, not just storage."],
    },
    {
      section: "vectorization",
      type: "chapter",
      kicker: "CORE PRIMITIVE",
      title: "One of the best tools in our arsenal is vectorization.",
      variant: "deep",
    },
    {
      section: "vectorization",
      type: "statement",
      kicker: "TOKEN TO NUMBER",
      title: "Computers can't directly understand text.",
      body: [
        "Vectorization converts tokens into vectors a computer can work with.",
        "To a computer, a vector is just a list of numbers.",
      ],
    },
    {
      section: "vectorization",
      type: "visual",
      kicker: "EMBEDDING SPACE",
      title: "Vectorized tokens are called embeddings.",
      body: ["They capture patterns, relationships, and meaning by placing similar tokens in similar locations in high-dimensional space."],
      asset: "./assets/FT2-lexical-vectorization.svg",
      alt: "Lexical vectorization diagram showing words as vectors in semantic space.",
      variant: "invert",
    },
    {
      section: "similarity",
      type: "statement",
      kicker: "SIMILARITY SCORE",
      title: "We have a mathematical operation that measures similarity between two vectors.",
      body: ["It's called the dot product."],
    },
    {
      section: "similarity",
      type: "formula",
      kicker: "DOT PRODUCT",
      title: "Dot Product",
      body: ["It calculates a single score representing the overlap between a user's search and our data."],
      formula: "A · B = (A<sub>x</sub> × B<sub>x</sub>) + (A<sub>y</sub> × B<sub>y</sub>)",
      formulaMode: "inline",
      chips: ["score", "overlap", "direction + magnitude"],
      variant: "deep",
    },
    {
      section: "similarity",
      type: "formula",
      kicker: "NORMALIZED SCORE",
      title: "Cosine similarity usually performs better in practice.",
      body: ["It is a normalized dot product where we divide out vector magnitude."],
      formula: "cos(A, B) = <span class=\"frac\"><span>A · B</span><span>|A| |B|</span></span>",
      chips: ["angle", "normalized", "semantic distance"],
      variant: "invert",
    },
    {
      section: "similarity",
      type: "statement",
      kicker: "MAGNITUDE PROBLEM",
      title: "Magnitude can distort relevance.",
      body: ["A massive 100-page document might score higher than a highly relevant one-paragraph summary simply because the larger document has a larger vector magnitude."],
    },
    {
      section: "similarity",
      type: "statement",
      kicker: "THE AMAZING PART",
      title: "The difference in angle between two vectors is essentially the difference in meaning between them.",
      body: ["Assuming the vectors represent the words, geometry becomes semantics."],
      variant: "deep",
    },
    {
      section: "similarity",
      type: "statement",
      kicker: "SEMANTIC SIMILARITY",
      title: "Semantic similarity is both meaning distance and vector angle distance.",
      body: ["For embeddings, those two ideas are effectively the same operational signal."],
      chips: ["meaning", "angle", "distance"],
    },
    {
      section: "retrieval",
      type: "chapter",
      kicker: "RETRIEVAL READY",
      title: "You now have the essential concept for feeding data to your agent in a structured way.",
      variant: "invert",
    },
    {
      section: "retrieval",
      type: "list",
      kicker: "ENABLED CAPABILITIES",
      title: "Meaning capture enables modern AI workflows.",
      bullets: ["Semantic search", "Retrieval", "Clustering", "Recommendation systems", "Most critical modern AI workflows"],
      readouts: [
        ["SEARCH", "semantic"],
        ["GROUP", "cluster"],
        ["RANK", "recommend"],
      ],
    },
    {
      section: "ingestion",
      type: "list",
      kicker: "NOT A SILVER BULLET",
      title: "Vectorization is not the whole system.",
      bullets: [
        "Operating on structured data is faster and more reliable, so anything that can be a simple algorithm should be.",
        "Not all kinds of data vectorize well without cleaning steps.",
      ],
      readouts: [
        ["RULE", "algorithm first"],
        ["DATA", "cleaning"],
      ],
      variant: "warn",
    },
    {
      section: "ingestion",
      type: "list",
      kicker: "DATA TYPES",
      title: "Lots of different data, three broad buckets:",
      widePanel: true,
      bullets: ["Structured, like JSON or CSV", "Unstructured, like text", "Noisy data, like measurements or raw transcriptions"],
      readouts: [
        ["JSON", "structured"],
        ["TEXT", "unstructured"],
        ["RAW", "noisy"],
      ],
    },
    {
      section: "ingestion",
      type: "statement",
      kicker: "INGESTION STRATEGY",
      title: "Each data type requires a slightly different ingestion strategy.",
      body: ["The job is to make the source useful to your agent, not merely available."],
      variant: "deep",
    },
    {
      section: "json",
      type: "list",
      kicker: "EXAMPLE / JSON",
      title: "Embeddings are semantic representations of text. JSON is structured data.",
      bullets: ["To embed JSON well, convert relevant fields into intentionally designed text blocks."],
      readouts: [
        ["INPUT", "fields"],
        ["OUTPUT", "text block"],
      ],
      variant: "invert",
    },
    {
      section: "json",
      type: "code",
      kicker: "RAW STRUCTURED RECORD",
      title: "Example company record",
      codeLabel: "json / source",
      code: `{
  "name": "Acme Workflow",
  "category_code": "software",
  "founded_at": "2011-04-01",
  "status": "operating",
  "country_code": "USA",
  "region": "SF Bay Area",
  "short_description": "Workflow automation for enterprise teams",
  "overview": "Acme Workflow helps operations teams automate approvals and internal processes.",
  "total_funding_usd": 4500000,
  "funding_rounds": 2
}`,
    },
    {
      section: "json",
      type: "code",
      kicker: "BAD STRATEGY",
      title: "Do not embed raw JSON noise.",
      body: ["The structure is machine-readable, but the embedding model needs intentionally phrased semantic context."],
      codeLabel: "bad embedding payload",
      code: `{"name":"Acme Workflow","category_code":"software","founded_at":"2011-04-01"...}`,
      compactCode: true,
      variant: "warn",
    },
    {
      section: "json",
      type: "code",
      kicker: "BETTER STRATEGY",
      title: "Translate fields into a readable company profile.",
      codeLabel: "better embedding payload",
      code: `Company: Acme Workflow
Category: software
Status: operating
Founded: 2011
Location: SF Bay Area, USA
Description: Workflow automation for enterprise teams.
Overview: Acme Workflow helps operations teams automate approvals and internal processes.
Funding: Raised $4.5M across 2 rounds.`,
      variant: "invert",
    },
    {
      section: "json",
      type: "code",
      kicker: "FORTIFY THE RECORD",
      title: "Then fortify it with a founder profile.",
      body: ["A high-value embedding record can combine structured company attributes with plain-language team signals."],
      codeLabel: "founder profile",
      code: `Founder profile:
The founding team includes a CEO with prior enterprise SaaS sales experience and a CTO with a background in workflow automation and backend infrastructure.`,
      compactCode: true,
    },
    {
      section: "json",
      type: "code",
      kicker: "COMBINED RECORD",
      title: "Combined embedding record",
      codeLabel: "company + team text block",
      code: `Company: Acme Workflow
Category: software
Status: operating
Founded: 2011
Location: SF Bay Area, USA
Description: Workflow automation for enterprise teams.
Overview: Acme Workflow helps operations teams automate approvals and internal processes.
Funding: Raised $4.5M across 2 rounds.
Founder/team profile:
The founding team includes a CEO with prior enterprise SaaS sales experience and a CTO with a background in workflow automation and backend infrastructure.`,
      variant: "deep",
    },
    {
      section: "chunking",
      type: "chapter",
      kicker: "NEXT CONTROL",
      title: "The next thing to be careful with: Chunk Size",
      body: ["Chunks decide what the retriever can see and what the agent can reason over."],
    },
    {
      section: "chunking",
      type: "list",
      kicker: "CHUNK TYPE / 01",
      title: "Short structured records",
      bullets: [
        "Example: company profile, founder profile, funding round.",
        "Strategy: field-aware concatenation.",
        "Usually one chunk per entity or one chunk per company/team.",
      ],
      readouts: [
        ["CHUNK", "entity"],
        ["METHOD", "field-aware"],
      ],
      variant: "invert",
    },
    {
      section: "chunking",
      type: "list",
      kicker: "CHUNK TYPE / 02",
      title: "Long text documents",
      bullets: [
        "Example: pitch decks, memos, websites, diligence notes.",
        "Strategy: section-aware chunking.",
        "Preserve headings and context.",
      ],
      readouts: [
        ["CHUNK", "section"],
        ["METHOD", "context-aware"],
      ],
    },
    {
      section: "retrieval",
      type: "statement",
      kicker: "BEYOND VECTOR SEARCH",
      title: "Relational and historical data often need graph-based retrieval.",
      body: ["We'll go over that more sophisticated strategy later."],
      variant: "deep",
    },
    {
      section: "evaluation",
      type: "chapter",
      kicker: "DATA SCIENCE DISCIPLINE",
      title: "We can apply classic evaluation tools to improve system performance.",
      chips: ["recall", "precision", "ranking"],
      variant: "invert",
    },
    {
      section: "evaluation",
      type: "metric",
      kicker: "METRIC / RECALL",
      title: "Recall",
      body: ["Recall answers: \"Of all the good companies that exist in the dataset, how many did our system find?\""],
      metrics: [["true positive", "TP"], ["false negative", "FN"], ["GOAL", "coverage"]],
    },
    {
      section: "evaluation",
      type: "formula",
      kicker: "RECALL FORMULA",
      title: "For deal sourcing:",
      body: [
        "High recall means fewer interesting companies are missed.",
        "Low recall means the agent is blind to good opportunities.",
        "At the early analyst stage, missing the next great company is costly.",
      ],
      formula: "Recall = <span class=\"frac\"><span>TP</span><span>TP + FN</span></span>",
      variant: "deep",
    },
    {
      section: "evaluation",
      type: "metric",
      kicker: "METRIC / PRECISION",
      title: "Precision",
      body: ["Precision answers: \"Of all the companies the system recommended, how many were actually good?\""],
      metrics: [["true positive", "TP"], ["false positive", "FP"], ["GOAL", "signal"]],
      variant: "invert",
    },
    {
      section: "evaluation",
      type: "formula",
      kicker: "PRECISION FORMULA",
      title: "For deal sourcing:",
      body: [
        "High precision means less partner and analyst time wasted.",
        "Low precision means the pipeline floods humans with junk.",
      ],
      formula: "Precision = <span class=\"frac\"><span>TP</span><span>TP + FP</span></span>",
    },
    {
      section: "retrieval",
      type: "statement",
      kicker: "PRACTICAL POSTURE",
      title: "Overfetch, then prune",
      body: ["Maximize recall first, then use structured filters and scoring to recover precision."],
      variant: "deep",
    },
    {
      section: "retrieval",
      type: "process",
      kicker: "PIPELINE EXAMPLE",
      title: "Overfetch, then prune",
      steps: [
        "Embed all companies.",
        "Retrieve top 100 by semantic similarity.",
        "Apply structured filters.",
        "Score founder/team fit.",
        "Return top 20.",
        "Agent writes explanations for top 5 or top 10.",
      ],
      flow: ["Embed", "Retrieve 100", "Filter", "Score", "Top 20", "Explain 5-10"],
    },
    {
      section: "example",
      type: "chapter",
      kicker: "THEORY TO PRACTICE",
      title: "Now that you have the theory, let's dive into an example.",
      variant: "invert",
    },
    {
      section: "example",
      type: "statement",
      kicker: "DATASET",
      title: "We'll use a historic snapshot of Crunchbase from 2013.",
      body: ["It has been released openly and is useful for practicing venture-style retrieval workflows."],
    },
    {
      section: "example",
      type: "metric",
      kicker: "CRUNCHBASE SNAPSHOT",
      title: "Over 20,000 ventures across 11 distinct tables.",
      body: ["The data primarily covers the lifecycle of early-to-mid-stage tech companies up through 2013."],
      metrics: [["VENTURES", "20K+"], ["TABLES", "11"], ["WINDOW", "to 2013"]],
      variant: "deep",
    },
    {
      section: "example",
      type: "graphic",
      kicker: "RAG EXAMPLE",
      title: "RAG Example",
      body: ["Representative retrieval flow before the live walkthrough."],
      graphic: "rag",
    },
    {
      section: "example",
      type: "statement",
      kicker: "RETRIEVAL MATURITY",
      title: "At this point in the field, RAG is considered a \"naive\" approach to recall.",
      body: ["That does not make it useless. It makes it the primitive you need to understand before more advanced systems click."],
      variant: "warn",
    },
    {
      section: "example",
      type: "statement",
      kicker: "MODERN SYSTEM CORE",
      title: "Semantic search is still present at the core of cutting-edge systems.",
      body: ["More complex retrieval systems often layer around it rather than replacing it entirely."],
    },
    {
      section: "example",
      type: "statement",
      kicker: "ADVICE",
      title: "Get good with this and the other systems will be a breeze to pick up.",
      variant: "deep",
    },
    {
      section: "example",
      type: "statement",
      kicker: "COMPOSITION",
      title: "Let's look at a more complex application that brings together Pi and LangGraph.",
      body: ["The point is to combine the ingredients, not memorize a single implementation path."],
      variant: "invert",
    },
    {
      section: "example",
      type: "graphic",
      kicker: "PI + LANGGRAPH + AIRTABLE",
      title: "Pi + LangGraph + Airtable Example",
      body: ["Representative orchestration map before switching into the live demo."],
      graphic: "integration",
      variant: "deep",
    },
    {
      section: "hands-on",
      type: "chapter",
      kicker: "WORKSHOP MODE",
      title: "Now you all try it out!",
      body: ["Move from theory into a concrete use case and retrieval workflow."],
    },
    {
      section: "hands-on",
      type: "statement",
      kicker: "USE CASE LENS",
      title: "Most knowledge work with AI boils down to transforming data.",
      body: [
        "Either the system executes operations autonomously based on it, or it compresses it and gets it into your head.",
        "Think in this direction to come up with a good use case for these concepts.",
      ],
      variant: "invert",
    },
    {
      section: "close",
      type: "chapter",
      kicker: "OPEN FLOOR",
      title: "Q & A",
      variant: "deep",
    },
    {
      section: "close",
      type: "chapter",
      kicker: "DEMO FLOOR",
      title: "Showcase What You Built!",
      body: ["Bring up the output, explain the data transformation, and show where retrieval helped."],
    },
    {
      section: "close",
      type: "contact",
      kicker: "CONTACT",
      title: "Contact Info",
      contacts: [
        ["Ashan Devine", "ashandevine@gmail.com"],
        ["SVET", "svetrating@gmail.com"],
      ],
      variant: "invert",
    },
  ];

  const deck = document.querySelector("#deck");
  const prevButton = document.querySelector("[data-prev]");
  const nextButton = document.querySelector("[data-next]");
  const progressButton = document.querySelector("[data-progress]");
  const progressFill = document.querySelector(".progress-fill");
  const slideCount = document.querySelector(".slide-count");
  let current = 0;

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function inline(value) {
    return escapeHtml(value)
      .replace(/\*\*([^*]+)\*\*/g, '<span class="strong">$1</span>')
      .replace(/\*([^*]+)\*/g, '<span class="em">$1</span>')
      .replace(/`([^`]+)`/g, '<span class="code-token">$1</span>');
  }

  function pad(value) {
    return String(value).padStart(2, "0");
  }

  function clamp(index) {
    return Math.max(0, Math.min(slides.length - 1, index));
  }

  function hashIndex() {
    const match = window.location.hash.match(/^#\/(\d+)$/);
    return match ? clamp(Number(match[1]) - 1) : 0;
  }

  function bodyMarkup(slide) {
    const parts = [];
    if (slide.body) {
      parts.push(...slide.body.map((line, index) => `<p class="${index === 0 ? "lead" : ""}">${inline(line)}</p>`));
    }
    if (slide.chips) {
      parts.push(`<div class="chips">${slide.chips.map((chip, index) => `<span class="chip ${index === 0 ? "active" : ""}">${inline(chip)}</span>`).join("")}</div>`);
    }
    return parts.join("");
  }

  function copyMarkup(slide) {
    return `
      <div class="copy-stack">
        <div>
          <p class="kicker ${slide.variant === "warn" ? "warn" : ""}">${inline(slide.kicker || slide.section)}</p>
          <h${slide.type === "title" ? "1" : "2"}>${inline(slide.title)}</h${slide.type === "title" ? "1" : "2"}>
        </div>
        ${bodyMarkup(slide)}
      </div>
    `;
  }

  function bulletMarkup(items, numbered = false) {
    const className = numbered ? "number-list" : "bullet-list";
    return `<ul class="${className}">${items.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`;
  }

  function readoutMarkup(readouts = []) {
    return `
      <div class="metric-panel">
        ${readouts.map(([label, value], index) => `
          <div class="metric-readout ${index === 0 ? "orange" : ""}">
            <b>${inline(value)}</b>
            <span>${inline(label)}</span>
          </div>
        `).join("")}
      </div>
    `;
  }

  function titlePanel() {
    return `
      <div class="instrument-stack" aria-hidden="true">
        <div class="readout-grid">
          <div class="readout active"><span>MODULE</span><strong>02</strong></div>
          <div class="readout"><span>SIGNAL</span><strong>DATA</strong></div>
          <div class="readout"><span>METHOD</span><strong>RAG</strong></div>
          <div class="readout"><span>MODEL</span><strong>EMBED</strong></div>
        </div>
        <div class="sweep"></div>
        <div class="axis-field"><span></span><span></span><span></span><span></span><span></span></div>
      </div>
    `;
  }

  function graphicMarkup(kind) {
    if (kind === "rag") {
      return `
        <div class="graphic-panel rag-graphic" role="img" aria-label="RAG retrieval flow from user query through embeddings, vector search, retrieved context, and agent response.">
          <div class="graphic-node query"><span>01 / query</span><strong>user asks</strong><em>"Find promising workflow companies"</em></div>
          <div class="graphic-node embed"><span>02 / embed</span><strong>vectorize</strong><em>query -> numbers</em></div>
          <div class="graphic-core">
            <div class="vector-stack" aria-hidden="true">
              <i style="--x: 12%; --y: 32%"></i>
              <i style="--x: 22%; --y: 58%"></i>
              <i style="--x: 35%; --y: 24%"></i>
              <i style="--x: 46%; --y: 68%"></i>
              <i style="--x: 60%; --y: 38%"></i>
              <i style="--x: 75%; --y: 55%"></i>
              <i style="--x: 86%; --y: 22%"></i>
            </div>
            <span>03 / vector search</span>
            <strong>Crunchbase semantic index</strong>
          </div>
          <div class="graphic-node context"><span>04 / retrieve</span><strong>top chunks</strong><em>company + team + funding</em></div>
          <div class="graphic-node answer"><span>05 / answer</span><strong>agent response</strong><em>ranked shortlist + rationale</em></div>
        </div>
      `;
    }

    return `
      <div class="graphic-panel integration-graphic" role="img" aria-label="Pi, LangGraph, and Airtable orchestration map for a live demo.">
        <div class="integration-terminal">
          <span>PI AGENT</span>
          <strong>prompt -> plan -> code</strong>
          <code>upgrade retrieval workflow</code>
        </div>
        <div class="state-machine">
          <span>LANGGRAPH STATE MACHINE</span>
          <div class="state-row"><b>ingest</b><b>retrieve</b><b>score</b><b>explain</b></div>
          <div class="state-pulse" aria-hidden="true"></div>
        </div>
        <div class="airtable-grid">
          <span>AIRTABLE OUTPUT</span>
          <div class="table-row head"><b>company</b><b>fit</b><b>note</b></div>
          <div class="table-row"><b>Acme</b><b>92</b><b>workflow SaaS</b></div>
          <div class="table-row"><b>Northstar</b><b>87</b><b>strong team</b></div>
          <div class="table-row"><b>Relay</b><b>81</b><b>market pull</b></div>
        </div>
      </div>
    `;
  }

  function contentMarkup(slide) {
    if (slide.type === "title") {
      return `${copyMarkup(slide)}${titlePanel()}`;
    }

    if (slide.type === "list") {
      return `${copyMarkup(slide)}<div class="plate high">${bulletMarkup(slide.bullets || [])}${readoutMarkup(slide.readouts || [])}</div>`;
    }

    if (slide.type === "recap") {
      return `
        ${copyMarkup(slide)}
        <div class="recap-board">
          ${(slide.recapItems || []).map((item, index) => `
            <article class="recap-cell ${index === 0 ? "active" : ""}">
              <span>${inline(item.label)}</span>
              <strong>${inline(item.title)}</strong>
              ${bulletMarkup(item.points || [])}
            </article>
          `).join("")}
        </div>
      `;
    }

    if (slide.type === "code") {
      return `${copyMarkup(slide)}<div class="code-panel ${slide.compactCode ? "compact" : ""}"><span class="code-label">${inline(slide.codeLabel || "code")}</span><pre><code>${escapeHtml(slide.code || "")}</code></pre></div>`;
    }

    if (slide.type === "formula") {
      return `${copyMarkup(slide)}<div class="formula-box"><div class="formula ${slide.formulaMode ? `is-${slide.formulaMode}` : ""}">${slide.formula}</div>${slide.body && slide.body.length > 1 ? bulletMarkup(slide.body) : ""}</div>`;
    }

    if (slide.type === "visual") {
      return `${copyMarkup(slide)}<figure class="asset-panel"><img src="${escapeHtml(slide.asset)}" alt="${escapeHtml(slide.alt || "")}" /></figure>`;
    }

    if (slide.type === "graphic") {
      return `${copyMarkup(slide)}${graphicMarkup(slide.graphic)}`;
    }

    if (slide.type === "metric") {
      return `${copyMarkup(slide)}${readoutMarkup(slide.metrics || [])}`;
    }

    if (slide.type === "process") {
      return `
        <div class="copy-stack">
          ${copyMarkup(slide)}
          ${bulletMarkup(slide.steps || [], true)}
        </div>
        <div class="flow-panel">
          ${(slide.flow || []).map((step, index) => `
            <div class="flow-node ${index === 1 ? "active" : ""}">
              <span>stage ${pad(index + 1)}</span>
              <strong>${inline(step)}</strong>
            </div>
          `).join("")}
        </div>
      `;
    }

    if (slide.type === "placeholder") {
      return `
        ${copyMarkup(slide)}
        <div class="placeholder-panel" role="img" aria-label="${escapeHtml(slide.placeholderBody || "Asset placeholder")}">
          <div class="placeholder-mark">
            <span>${inline(slide.kicker)}</span>
            <strong>${inline(slide.placeholderTitle || "Asset placeholder")}</strong>
            <p>${inline(slide.placeholderBody || "")}</p>
          </div>
        </div>
      `;
    }

    if (slide.type === "contact") {
      return `
        ${copyMarkup(slide)}
        <div class="plate high">
          <ul class="contact-list">
            ${(slide.contacts || []).map(([name, detail]) => `<li><span class="strong">${inline(name)}:</span> <span class="code-token">${inline(detail)}</span></li>`).join("")}
          </ul>
          <div class="stage-strip" aria-hidden="true"><span>DATA</span><span>AGENT</span><span>RESULTS</span></div>
        </div>
      `;
    }

    return copyMarkup(slide);
  }

  function renderSlides() {
    deck.innerHTML = slides.map((slide, index) => `
      <section class="slide layout-${slide.type} ${slide.variant ? `variant-${slide.variant}` : ""} ${slide.widePanel ? "is-wide-panel" : ""}" aria-hidden="true" data-slide="${index + 1}">
        <header class="slide-chrome">
          <span class="system">${inline(slide.section)}</span>
          <span class="coords">FT2 / MODULE 02</span>
          <span class="ordinal">${pad(index + 1)} / ${pad(slides.length)}</span>
        </header>
        <div class="content">
          ${contentMarkup(slide)}
        </div>
      </section>
    `).join("");
  }

  function show(index, updateHash = true) {
    current = clamp(index);
    const renderedSlides = Array.from(document.querySelectorAll(".slide"));

    renderedSlides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
    });

    const currentNumber = current + 1;
    slideCount.textContent = `${pad(currentNumber)} / ${pad(slides.length)}`;
    progressFill.style.width = `${(currentNumber / slides.length) * 100}%`;
    prevButton.disabled = current === 0;
    nextButton.disabled = current === slides.length - 1;

    if (updateHash) {
      const nextHash = `#/${currentNumber}`;
      if (window.location.hash !== nextHash) {
        history.replaceState(null, "", nextHash);
      }
    }
  }

  function next() {
    show(current + 1);
  }

  function prev() {
    show(current - 1);
  }

  renderSlides();

  prevButton.addEventListener("click", prev);
  nextButton.addEventListener("click", next);
  progressButton.addEventListener("click", (event) => {
    const rect = progressButton.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    show(Math.floor(ratio * slides.length));
  });

  document.addEventListener("keydown", (event) => {
    const tagName = event.target?.tagName?.toLowerCase() || "";
    if (["input", "textarea", "select", "button"].includes(tagName) && event.key === " ") return;

    if (["ArrowRight", " ", "PageDown"].includes(event.key)) {
      event.preventDefault();
      next();
    }
    if (["ArrowLeft", "PageUp"].includes(event.key)) {
      event.preventDefault();
      prev();
    }
    if (event.key === "Home") {
      event.preventDefault();
      show(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      show(slides.length - 1);
    }
  });

  window.addEventListener("hashchange", () => show(hashIndex(), false));
  show(hashIndex());
})();
