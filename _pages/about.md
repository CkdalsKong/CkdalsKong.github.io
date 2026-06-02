---
permalink: /
title: ""
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section id="home" class="home-section hero-section">
  <div class="hero-content">
    <h1>Changmin Lee</h1>
    <p class="hero-subtitle">AI Research Engineer | MS-PhD Student at <strong>UNIST</strong></p>
    <p class="typed-wrapper">
      I work on <span class="typed-text"></span><span class="typed-cursor">|</span>
    </p>
    <div class="quick-links">
      <a class="btn-link" href="mailto:lchm1106@unist.ac.kr">Email</a>
      <a class="btn-link" href="https://github.com/CkdalsKong" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a class="btn-link" href="https://www.linkedin.com/in/changmin0lee/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a class="btn-link" href="https://arxiv.org/abs/2605.18271" target="_blank" rel="noopener noreferrer">arXiv</a>
      <a class="btn-link" href="/files/CV.pdf">CV</a>
    </div>
  </div>
</section>

<section class="home-section metric-strip" data-animate>
  <div class="metric-item">
    <div class="metric-value">2,404x</div>
    <div class="metric-label">less indexing memory (EPIC)</div>
  </div>
  <div class="metric-item">
    <div class="metric-value">+20.17pp</div>
    <div class="metric-label">preference-following accuracy</div>
  </div>
  <div class="metric-item">
    <div class="metric-value">29.35ms</div>
    <div class="metric-label">query latency on-device</div>
  </div>
</section>

<section id="news" class="home-section" data-animate>
  <h2>News</h2>
  <div class="news-list">
    <div class="news-item">
      <span class="news-date">2026.05</span>
      <span class="news-text">Our paper <strong>"From Volume to Value: Preference-Aligned Memory Construction for On-Device RAG"</strong> was accepted to <strong>ICML 2026</strong>.</span>
    </div>
    <div class="news-item">
      <span class="news-date">2025.08 - 2026.09</span>
      <span class="news-text">Awarded <strong>NRF Master's Fellowship</strong> (Graduate Student Research Encouragement Grant for Master's Program).</span>
    </div>
  </div>
</section>

<section id="research" class="home-section" data-animate>
  <h2>About & Research</h2>
  <p>
    I am a graduate researcher at UAI Lab, UNIST, advised by Prof. Taesik Gong. I focus on personalized and efficient AI systems that can run under strict memory and latency constraints.
  </p>
  <div class="research-tags">
    <span class="research-tag">Personalized AI</span>
    <span class="research-tag">On-Device RAG</span>
    <span class="research-tag">Efficient LLMs</span>
    <span class="research-tag">Memory Construction</span>
    <span class="research-tag">AI Agents</span>
    <span class="research-tag">Multimodal Systems</span>
  </div>
</section>

<section id="education" class="home-section" data-animate>
  <h2>Education</h2>
  <div class="edu-card">
    <div class="edu-header">
      <div>
        <div class="edu-school">Ulsan National Institute of Science and Technology (UNIST)</div>
        <div class="edu-major">M.S.-Ph.D. Integrated Program, Computer Science and Engineering</div>
      </div>
      <div class="edu-period">Mar. 2025 - Present</div>
    </div>
    <p class="edu-note">UAI Lab, Advisor: Prof. Taesik Gong</p>
  </div>

  <div class="edu-card">
    <div class="edu-header">
      <div>
        <div class="edu-school">Kyungpook National University</div>
        <div class="edu-major">B.S., Computer Science and Engineering</div>
      </div>
      <div class="edu-period">Mar. 2019 - Feb. 2025</div>
    </div>
    <p class="edu-note">Total GPA: <strong>3.9/4.3</strong>, Major GPA: <strong>4.2/4.3</strong></p>
  </div>
</section>

<section id="publications" class="home-section" data-animate>
  <h2>Publications</h2>

  <div class="pub-card">
    <span class="venue-badge venue-top">ICML 2026</span>
    <div class="pub-title">From Volume to Value: Preference-Aligned Memory Construction for On-Device RAG</div>
    <div class="pub-authors"><u>Changmin Lee</u>, Jaemin Kim, Taesik Gong</div>
    <div class="pub-links">
      <a class="pub-btn" href="https://arxiv.org/abs/2605.18271" target="_blank" rel="noopener noreferrer">arXiv</a>
      <a class="pub-btn" href="https://github.com/UbiquitousAILab/EPIC" target="_blank" rel="noopener noreferrer">Code</a>
    </div>
    <button class="pub-abstract-toggle" type="button" data-target="abs-epic">Show Abstract</button>
    <div class="pub-abstract" id="abs-epic">
      We propose EPIC, a preference-aligned memory construction framework for on-device RAG. Across four benchmarks, EPIC reduces indexing memory by 2,404x, improves preference-following accuracy by 20.17 points, and achieves 33.33x lower retrieval latency over strong baselines.
    </div>
  </div>

  <div class="pub-card">
    <span class="venue-badge venue-journal">IEIE Journal 2024</span>
    <div class="pub-title">Enhancing Chest X-Ray Classification with Multi-Class Token Hybrid Transformers</div>
    <div class="pub-authors"><u>Chang-min Lee</u>, Ho-kyung Shin, Woo-Jeoung Nam</div>
  </div>

  <div class="pub-card">
    <span class="venue-badge venue-workshop">Preprint (Under Preparation)</span>
    <div class="pub-title">Transition-Level Memory for GUI Agents</div>
    <div class="pub-authors"><u>Changmin Lee</u>, et al.</div>
    <div class="pub-note">Transition-aware compact memory construction for mobile GUI agents.</div>
  </div>

  <div class="pub-card">
    <span class="venue-badge venue-workshop">Korean Multimedia Society 2024 (Poster)</span>
    <div class="pub-title">Comparison of Recycling Waste Awareness Performance by Transfer Learning Model</div>
    <div class="pub-authors">Dong-hyuk Kim, <u>Chang-min Lee</u>, et al.</div>
  </div>
</section>

<section id="epic-demo" class="home-section" data-animate>
  <h2>EPIC Retrieval Flow</h2>
  <p class="section-intro">
    This is a compact representation of how EPIC transforms raw personal data into preference-aligned memory and serves low-latency retrieval for on-device generation.
  </p>

```mermaid
flowchart LR
  rawData[Raw_User_Data] --> select[Preference_Relevance_Filtering]
  select --> memory[Compact_Preference_Memory]
  memory --> index[EPIC_FAISS_Index]
  query[User_Query] --> retrieve[Preference_Aligned_Retrieval]
  index --> retrieve
  retrieve --> gen[LLM_Generation]
  gen --> response[Personalized_Response]
```

  <div class="demo-card">
    <h3>Mini Demo (Conceptual)</h3>
    <p>Type a query and preferred style. The demo shows how a preference-aware memory answer is composed.</p>
    <div class="demo-grid">
      <label for="demo-query">Query</label>
      <input id="demo-query" type="text" placeholder="e.g., Recommend a lightweight laptop for research and coding"/>

      <label for="demo-pref">Preference</label>
      <select id="demo-pref">
        <option value="concise">Concise and practical</option>
        <option value="technical">Technical and detailed</option>
        <option value="budget">Budget-first</option>
      </select>
    </div>
    <button class="pub-abstract-toggle demo-run-btn" type="button" id="run-epic-demo">Run Demo</button>
    <pre id="demo-output" class="demo-output">Demo output will appear here.</pre>
  </div>
</section>

<section id="projects" class="home-section" data-animate>
  <h2>Projects (Undergraduate)</h2>
  <div class="project-grid">
    <div class="project-card">
      <h3>EPIC</h3>
      <p>Preference-aligned memory construction for efficient on-device RAG under strict resource constraints.</p>
      <div class="project-result">
        <span class="result-value">2,404x</span> lower indexing memory, <span class="result-value">+20.17pp</span> preference-following accuracy, <span class="result-value">29.35ms/query</span> on-device latency.
      </div>
      <div class="project-tags">
        <span class="project-tag">RAG</span>
        <span class="project-tag">On-Device AI</span>
        <span class="project-tag">Memory</span>
      </div>
      <div class="pub-links">
        <a class="pub-btn" href="https://arxiv.org/abs/2605.18271" target="_blank" rel="noopener noreferrer">arXiv</a>
        <a class="pub-btn" href="https://github.com/UbiquitousAILab/EPIC" target="_blank" rel="noopener noreferrer">Code</a>
      </div>
    </div>
    <div class="project-card">
      <h3>Transition-Level Memory for GUI Agents</h3>
      <p>Compact transition-aware memory design for mobile GUI agents with long-horizon task support.</p>
      <div class="project-tags">
        <span class="project-tag">GUI Agent</span>
        <span class="project-tag">Memory</span>
        <span class="project-tag">Under Preparation</span>
      </div>
    </div>
    <div class="project-card">
      <h3>MCTCheXFormer</h3>
      <p>Hybrid CNN-Transformer model for multi-label chest X-ray classification using multi-class token refinement.</p>
      <div class="project-tags">
        <span class="project-tag">Medical AI</span>
        <span class="project-tag">Vision Transformer</span>
      </div>
    </div>
    <div class="project-card">
      <h3>Smart Table Clock (Undergraduate)</h3>
      <p>Built an Arduino-based smart table clock with LCD widgets, Daegu bus API integration, and Wi-Fi web control.</p>
      <div class="project-tags">
        <span class="project-tag">Arduino</span>
        <span class="project-tag">IoT</span>
        <span class="project-tag">Web API</span>
      </div>
    </div>
    <div class="project-card">
      <h3>Remote File Explorer (Undergraduate)</h3>
      <p>Developed a terminal-based remote file transfer and browsing system in C with Linux-style file commands and curses UI.</p>
      <div class="project-tags">
        <span class="project-tag">C</span>
        <span class="project-tag">Systems</span>
        <span class="project-tag">Linux</span>
      </div>
    </div>
  </div>
</section>

<section id="teaching" class="home-section" data-animate>
  <h2>Teaching</h2>
  <div class="teaching-list">
    <div class="teaching-item">
      <div class="teaching-course">Teaching Assistant - Computer Networks (CSE)</div>
      <div class="teaching-note">Supported course operations, grading, and student communication.</div>
    </div>
    <div class="teaching-item">
      <div class="teaching-course">Teaching Assistant - On-Device AI for Smart Manufacturing</div>
      <div class="teaching-note">Supported project-based activities and AI deployment practice.</div>
    </div>
    <div class="teaching-item">
      <div class="teaching-course">Teaching Assistant - NOVA 508</div>
      <div class="teaching-note">Assisted graduate-level hands-on AI course operation.</div>
    </div>
  </div>
</section>

<section id="experience" class="home-section" data-animate>
  <h2>Experience</h2>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">Mar. 2025 - Present</div>
      <div class="timeline-content">
        <strong>Graduate Researcher</strong> - UAI Lab, UNIST
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">Jan. 2025 - Dec. 2025</div>
      <div class="timeline-content">
        <strong>Lab Manager</strong> - UAI Lab, UNIST
      </div>
    </div>
  </div>
</section>

<section id="honors" class="home-section" data-animate>
  <h2>Honors</h2>
  <div class="timeline">
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">2025.08 - 2026.09</div>
      <div class="timeline-content"><strong>NRF Master's Fellowship</strong> (Graduate Student Research Encouragement Grant for Master's Program)</div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">2026</div>
      <div class="timeline-content">Paper accepted to <strong>ICML 2026</strong></div>
    </div>
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-date">2024</div>
      <div class="timeline-content">Excellence Award, Undergraduate Research Support Program</div>
    </div>
  </div>
</section>

<section id="pbl" class="home-section" data-animate>
  <h2>PBL and Graduate Projects</h2>
  <div class="project-grid">
    <div class="project-card">
      <h3>AI Novatus / PBL Projects (Graduate)</h3>
      <p>Industry-academic and project-based work completed during graduate studies, separated from undergraduate project portfolio.</p>
      <div class="project-tags">
        <span class="project-tag">PBL</span>
        <span class="project-tag">Industry-Academic</span>
        <span class="project-tag">Graduate</span>
      </div>
    </div>
    <div class="project-card">
      <h3>Human-Centered Hyper-Personalized Agent</h3>
      <p>Graduate-stage research direction integrating multimodal sensing, personalized RAG, and lightweight memory mechanisms for real-world assistant scenarios.</p>
      <div class="project-tags">
        <span class="project-tag">Graduate</span>
        <span class="project-tag">Agent</span>
        <span class="project-tag">On-Device</span>
      </div>
    </div>
  </div>
</section>

<section id="skills" class="home-section" data-animate>
  <h2>Skills</h2>
  <div class="skill-groups">
    <div class="skill-group">
      <div class="skill-title">Programming</div>
      <div class="skill-tags">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">C</span>
        <span class="skill-tag">Java</span>
      </div>
    </div>
    <div class="skill-group">
      <div class="skill-title">Deep Learning</div>
      <div class="skill-tags">
        <span class="skill-tag">PyTorch</span>
        <span class="skill-tag">TensorFlow</span>
        <span class="skill-tag">Keras</span>
        <span class="skill-tag">scikit-learn</span>
      </div>
    </div>
    <div class="skill-group">
      <div class="skill-title">RAG and Retrieval</div>
      <div class="skill-tags">
        <span class="skill-tag">FAISS</span>
        <span class="skill-tag">Dense Retrieval</span>
        <span class="skill-tag">Personalized RAG</span>
        <span class="skill-tag">LLM Evaluation</span>
      </div>
    </div>
    <div class="skill-group">
      <div class="skill-title">Systems and Tools</div>
      <div class="skill-tags">
        <span class="skill-tag">Linux</span>
        <span class="skill-tag">Git</span>
        <span class="skill-tag">Docker</span>
        <span class="skill-tag">LaTeX</span>
        <span class="skill-tag">vLLM</span>
      </div>
    </div>
  </div>
</section>

<section id="contact" class="home-section" data-animate>
  <h2>Contact</h2>
  <div class="contact-cards">
    <a class="contact-card" href="mailto:lchm1106@unist.ac.kr">
      <strong>Email</strong>
      <span>lchm1106@unist.ac.kr</span>
    </a>
    <a class="contact-card" href="https://github.com/CkdalsKong" target="_blank" rel="noopener noreferrer">
      <strong>GitHub</strong>
      <span>github.com/CkdalsKong</span>
    </a>
    <a class="contact-card" href="https://www.linkedin.com/in/changmin0lee/" target="_blank" rel="noopener noreferrer">
      <strong>LinkedIn</strong>
      <span>linkedin.com/in/changmin0lee</span>
    </a>
  </div>
</section>
