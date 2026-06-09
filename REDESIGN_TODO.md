# Homepage Redesign — AI Researcher Aesthetic
> Target: Changmin Lee | M.S.-Ph.D. @ UNIST UAI Lab  
> Stack: Jekyll (academicpages) + custom SCSS + vanilla JS

---

## 현재 문제점 진단

| 영역 | 현재 상태 | 문제 |
|------|-----------|------|
| 색상 | 기본 teal (#52adc8) | 개성 없음, 템플릿 느낌 |
| 폰트 | 시스템 기본 | 학술적 권위감 없음 |
| Hero | 사진 + 텍스트 나열 | 인상이 없음 |
| Publications | 카드 나열 | 연구 임팩트가 안 보임 |
| Research | 태그만 있음 | 연구 방향성이 안 전달됨 |
| 레이아웃 | 단순 세로 스크롤 | 지루함 |
| 네비게이션 | 없음 | 긴 페이지에서 길을 잃음 |
| 배경 | 흰색 단색 | 생기 없음 |
| 다크모드 | 미완성 | 어두운 색상이 어색함 |

---

## Phase 1 — 디자인 토대 (우선순위 최상)

### 1-1. 색상 팔레트 전면 교체
**파일**: `assets/css/main.scss`, `_sass/theme/`

현재 teal 계열 → **Deep Indigo + Electric Blue + Off-white** 조합으로 교체

```scss
// 새 팔레트
--color-bg:         #0d0f14;   // 거의 검정 네이비
--color-surface:    #13161e;   // 카드 배경
--color-border:     #1e2433;   // 구분선
--color-primary:    #6366f1;   // Indigo (포인트)
--color-accent:     #38bdf8;   // Sky Blue (보조 포인트)
--color-text:       #e2e8f0;   // 메인 텍스트
--color-muted:      #64748b;   // 보조 텍스트
--color-highlight:  #f59e0b;   // 황금색 (어워드, Top venue 강조)
```

**작업**:
- [ ] `_sass/theme/_dark_ai.scss` 신규 생성
- [ ] CSS 변수 전면 적용 (하드코딩된 색상 제거)
- [ ] `_config.yml`에서 `site_theme: dark_ai` 설정

---

### 1-2. 폰트 시스템 교체
**파일**: `_includes/head.html`, `assets/css/main.scss`

```html
<!-- Google Fonts 추가 -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;600&family=Newsreader:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
```

| 용도 | 폰트 |
|------|------|
| 본문, UI 전반 | Inter |
| 코드, 날짜, 배지 | JetBrains Mono |
| 논문 제목, 인용구 | Newsreader (serif) |

**작업**:
- [ ] Google Fonts 링크 `head.html`에 삽입
- [ ] `font-family` 변수화 후 전체 적용
- [ ] 줄간격 / 자간 미세 조정

---

### 1-3. 상단 네비게이션 바 신규 제작
**파일**: `_includes/masthead.html` 교체

```
[  CL  ]  About · Publications · Research · Projects · Contact      [Dark/Light]
```

- 스크롤 시 배경 blur + 반투명 (`backdrop-filter: blur(12px)`)
- 현재 섹션 활성화 표시 (IntersectionObserver)
- 모바일: 햄버거 메뉴

**작업**:
- [ ] `masthead.html` 전면 재작성
- [ ] JS: `IntersectionObserver`로 현재 섹션 감지
- [ ] CSS: sticky + glassmorphism 효과

---

## Phase 2 — Hero 섹션 임팩트 강화

### 2-1. Hero 배경 — 신경망 파티클 애니메이션
**파일**: `_pages/about.md` hero 섹션, JS 신규 파일

배경에 노드와 엣지로 이루어진 낮은 투명도(~10%)의 신경망 그래픽을 Canvas로 구현.
마우스 움직임에 반응해 가까운 노드가 연결됨.

```
●━━━━━●        ← 노드들이 천천히 이동
    ╲  ╱
     ╲╱          ← 마우스 근처에서 새 엣지 생성
     ╱╲
    ╱  ╲
●━━━━━●
```

**작업**:
- [ ] `assets/js/neural-bg.js` 신규 작성 (Canvas API)
- [ ] 성능: `requestAnimationFrame` + 모바일 비활성화
- [ ] Hero div에 `<canvas id="neural-bg">` 삽입

---

### 2-2. Hero 레이아웃 재설계
**파일**: `_pages/about.md` 상단 섹션

```
┌─────────────────────────────────────────────┐
│  [신경망 Canvas 배경]                        │
│                                             │
│   ╔══════════╗                              │
│   ║ profile  ║  Changmin Lee               │
│   ║  photo   ║  AI Research Engineer       │
│   ╚══════════╝  M.S.-Ph.D. @ UNIST         │
│                                             │
│   I work on [typed: Personalized RAG ...]   │
│                                             │
│   [Email] [GitHub] [LinkedIn] [arXiv] [CV] │
│                                             │
│   ── ICML 2026 · NRF Fellow ──             │
└─────────────────────────────────────────────┘
```

프로필 사진: 원형 + indigo glow border 효과  
배지 라인: 주요 수상/논문을 미니 뱃지로 Hero 하단에 배치

**작업**:
- [ ] Hero HTML 구조 재작성
- [ ] `hero-photo`: `box-shadow: 0 0 0 3px #6366f1, 0 0 40px rgba(99,102,241,0.3)`
- [ ] 하단 achievement 배지 추가
- [ ] 모바일 반응형 확인

---

## Phase 3 — Publications 섹션 (핵심)

### 3-1. Publications 계층 구조 재설계
AI 연구자 홈페이지에서 가장 중요한 섹션. 임팩트를 최대화.

**신규 레이아웃**:

```
Publications
──────────────────────────────────────────────────────

★ Featured                                  [ICML 2026]
┌─────────────────────────────────────────────────────┐
│  From Volume to Value: Preference-Aligned Memory    │
│  Construction for On-Device RAG                     │
│                                                     │
│  Changmin Lee, Jaemin Kim, Taesik Gong             │
│                                                     │
│  [arXiv ↗]  [Code ↗]  [BibTeX ▼]  [Abstract ▼]   │
└─────────────────────────────────────────────────────┘

Conference / Workshop Papers
────────────────────────────
  [IEIE 2024]  Enhancing Chest X-Ray...  →
  [KMS 2024]   Comparison of Recycling... →

Preprints
─────────
  [Under Review]  Transition-Level Memory for GUI Agents  →
```

**작업**:
- [ ] Featured paper: 큰 카드, indigo left-border accent
- [ ] Venue badge 색상 계층화: `top-venue`(ICML)=금색, `journal`=은색, `workshop`=회색
- [ ] BibTeX 복사 버튼 (클립보드 API)
- [ ] Abstract toggle 애니메이션 개선

---

### 3-2. Citation / Impact 표시
- [ ] "ICML 2026" 옆에 🏆 아이콘 (Top-tier venue 강조)
- [ ] Google Scholar 링크 추가 (현재 config에 비어있음)

---

## Phase 4 — Research 섹션 시각화

### 4-1. 연구 관심사 — 인터랙티브 노드 다이어그램

단순 태그 → 연구 토픽 간 관계를 보여주는 미니 그래프

```
          ┌──────────────┐
          │ Personalized │
          │     AI       │
          └──────┬───────┘
                 │
    ┌────────────┼────────────┐
    │            │            │
┌───┴──┐    ┌───┴───┐   ┌───┴────┐
│ RAG  │    │On-Dev │   │Agents  │
│      │    │  AI   │   │        │
└──────┘    └───────┘   └────────┘
```

또는 더 간단하게: 태그를 카테고리별로 그룹핑 + 색상으로 구분

**작업**:
- [ ] 연구 토픽을 `Primary / Secondary / Application` 3계층으로 분류
- [ ] 태그에 카테고리별 색상 적용
- [ ] hover시 관련 논문으로 스크롤 (선택사항)

---

### 4-2. Research Statement 추가

현재 한 문단 설명 → 더 임팩트 있는 형식으로:

```
┌──────────────────────────────────────────────────┐
│  " I build AI systems that are personal,         │
│    efficient, and deployable on the edge. "      │
│                                                  │
│   My research sits at the intersection of       │
│   [LLM Efficiency] × [Personalization] ×        │
│   [On-Device Deployment]                        │
└──────────────────────────────────────────────────┘
```

---

## Phase 5 — 나머지 섹션 폴리싱

### 5-1. Education 카드 업그레이드
- [ ] UNIST 로고 이미지 추가 (작은 아이콘)
- [ ] GPA highlight: `4.2/4.3` → 강조 색상

### 5-2. Experience Timeline 개선
- [ ] 타임라인 선 색상: indigo gradient
- [ ] dot: 현재 진행중인 항목만 pulse 애니메이션

### 5-3. News 섹션
- [ ] 날짜를 `JetBrains Mono` 폰트로 변경 (코드 감성)
- [ ] ICML 수락 뉴스에 🎉 또는 별도 강조 스타일

### 5-4. Skills 시각화
현재 태그 나열 → 카테고리 아이콘 + 그룹 배지로

```
⚙ Programming    Python · C · Java
🔬 DL Frameworks  PyTorch · TensorFlow · Keras
🔍 RAG & Retrieval FAISS · Dense Retrieval · ...
🛠 DevOps & Tools  Linux · Git · Docker · LaTeX
```

---

## Phase 6 — 성능 & SEO

- [ ] Open Graph 메타 태그 (`_includes/seo.html`)
- [ ] 프로필 사진 WebP 변환 + lazy loading
- [ ] Canvas 애니메이션 `prefers-reduced-motion` 대응
- [ ] 모바일 전체 반응형 검증 (320px~)

---

## 파일별 수정 범위 요약

| 파일 | 수정 범위 |
|------|-----------|
| `assets/css/main.scss` | 전면 리팩터 (색상 변수화, 섹션별 스타일) |
| `_sass/theme/_dark_ai.scss` | 신규 생성 |
| `_pages/about.md` | Hero HTML 재작성, 섹션 순서 조정 |
| `_includes/masthead.html` | 전면 재작성 |
| `_includes/head.html` | 폰트 추가, Canvas JS 링크 |
| `assets/js/neural-bg.js` | 신규 생성 |
| `assets/js/main.js` | IntersectionObserver 추가 |
| `_config.yml` | Scholar URL, theme 설정 |

---

## 참고 레퍼런스 사이트

- https://karpathy.ai — 미니멀 다크, 강한 타이포그래피
- https://lilianweng.github.io — 깔끔한 연구자 사이트
- https://jonbarron.info — 논문 중심, 임팩트 강조
- https://nerfies.github.io — 모던 프로젝트 페이지 스타일

---

**추정 작업 시간**: Phase 1-2 (3-4h) → Phase 3-4 (3-4h) → Phase 5-6 (2h) = 약 8-10h
