# Homepage Visual Mockups — AI Researcher Edition
> 텍스트 기반 고해상도 예상도

---

## 1. 전체 색감 & 무드

```
현재 (Before)                    목표 (After)
─────────────────────────────    ─────────────────────────────
배경: #ffffff 흰색               배경: #0d0f14 딥 네이비 블랙
강조: #52adc8 teal               강조: #6366f1 인디고 바이올렛
텍스트: #333 다크 그레이          텍스트: #e2e8f0 밝은 그레이
카드: #fafbfc 연한 회색           카드: #13161e 다크 서피스

무드: 평범한 학술 사이트           무드: 딥테크 스타트업 / FAANG AI 연구자
```

---

## 2. 네비게이션 바

```
BEFORE:
┌──────────────────────────────────────────────────────────────┐
│  Changmin Lee             Publications  CV  Blog             │
│  (academicpages 기본 masthead, 밋밋함)                       │
└──────────────────────────────────────────────────────────────┘

AFTER (scroll 후):
┌──────────────────────────────────────────────────────────────┐
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│  ← blur backdrop
│  CL   About  Publications  Research  Projects  Contact   ☀  │
│░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
└──────────────────────────────────────────────────────────────┘
       ─────                                                      ← 현재 섹션 밑줄 (indigo)
      (active)

특징:
  - background: rgba(13,15,20,0.8)
  - backdrop-filter: blur(12px) saturate(180%)
  - border-bottom: 1px solid rgba(99,102,241,0.2)
  - 스크롤 내리면 나타남 (top에서는 투명)
  - 현재 섹션 nav item: color: #6366f1; border-bottom: 2px solid
```

---

## 3. Hero 섹션

```
BEFORE:
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [photo]  Changmin Lee                                      │
│           AI Research Engineer | M.S.-Ph.D. Student...     │
│           I work on [typed text]|                           │
│           [Email] [GitHub] [LinkedIn] [arXiv] [CV]         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
(흰 배경, 밋밋함)

AFTER:
╔═════════════════════════════════════════════════════════════╗
║ ░ ● ━━━ ● ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ║ ← Canvas 파티클
║ ░░░ ╲ ╱ ░░░░ ●━━━━●░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ║   (투명도 8~12%)
║ ░░░░ ╳ ░░░░░░░ ╲ ╱ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ║   노드: #6366f1
║ ░ ● ━━━ ●  ░░░░ ╲╱ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ║   엣지: #38bdf8
║                                                             ║
║         ╔══════════╗                                        ║
║         ║          ║  Changmin Lee                          ║
║         ║  photo   ║                                        ║
║         ║    🔵   ║  AI Research Engineer                  ║  ← 인디고 glow
║         ╚══════════╝  M.S.-Ph.D. @ UNIST UAI Lab           ║
║           (glow)                                            ║
║                                                             ║
║           I work on [ Personalized RAG ▌ ]                 ║
║                       ↑ typed animation                     ║
║                                                             ║
║           ┌──────┐ ┌────────┐ ┌──────────┐ ┌─────┐ ┌──┐  ║
║           │ Mail │ │ GitHub │ │ LinkedIn │ │arXiv│ │CV│  ║
║           └──────┘ └────────┘ └──────────┘ └─────┘ └──┘  ║
║                                                             ║
║           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━      ║
║           🏆 ICML 2026  ·  🎓 NRF Fellow  ·  📍 UNIST     ║
║                                                             ║
╚═════════════════════════════════════════════════════════════╝

버튼 스타일:
┌──────┐   border: 1px solid rgba(99,102,241,0.4)
│ Mail │   background: rgba(99,102,241,0.1)
└──────┘   color: #a5b4fc
           hover: background: #6366f1, color: #fff

프로필 사진:
  border-radius: 50%
  border: 3px solid #6366f1
  box-shadow: 0 0 0 6px rgba(99,102,241,0.15),
              0 0 40px rgba(99,102,241,0.25)

Achievement 배지:
  ┌──────────────┐  ┌───────────────┐  ┌──────────┐
  │ 🏆 ICML 2026│  │ 🎓 NRF Fellow │  │ 📍 UNIST │
  └──────────────┘  └───────────────┘  └──────────┘
  background: rgba(245,158,11,0.12)  ← 금색 반투명
  border: 1px solid rgba(245,158,11,0.3)
  color: #fbbf24
```

---

## 4. News 섹션

```
BEFORE:
News
────────────────────────────────────────
2026.05   My paper "From Volume to..."
2025.08   Awarded NRF Master's Fellowship

AFTER:
News
────────────────────────────────────────────────────────
                                                        
  2026.05   ★ Paper accepted to ICML 2026              
  ───────   ─────────────────────────────────────────  
            "From Volume to Value: Preference-Aligned  
             Memory Construction for On-Device RAG"   
                                                        
  2025.08   🎓 Awarded NRF Master's Fellowship         
  ───────   (Graduate Student Research Encouragement)  
                                                        

날짜: font-family: 'JetBrains Mono'; color: #38bdf8
★ 아이콘: color: #f59e0b (gold)
선 구분: border-left: 2px solid #1e2433 + 왼쪽 패딩으로 타임라인 느낌
```

---

## 5. Publications 섹션 (핵심)

```
BEFORE:
Publications
────────────────────────────
[ICML 2026] (파란 배지)
From Volume to Value...
Changmin Lee, Jaemin Kim...
[arXiv] [Code]  [Show Abstract]

AFTER:

Publications
────────────────────────────────────────────────────────────────

  ╔════════════════════════════════════════════════════════════╗
  ║▌                                                           ║  ← indigo left border
  ║  🏆 ICML 2026  ← 금색 배지                                ║
  ║                                                            ║
  ║  From Volume to Value:                                     ║
  ║  Preference-Aligned Memory Construction for On-Device RAG  ║
  ║  (Newsreader font, 크고 읽기 좋게)                         ║
  ║                                                            ║
  ║  Changmin Lee, Jaemin Kim, Taesik Gong                    ║
  ║  (본인 이름: 밑줄 + 볼드)                                  ║
  ║                                                            ║
  ║  [arXiv ↗]  [Code ↗]  [📋 BibTeX]  [Abstract ▼]         ║
  ╚════════════════════════════════════════════════════════════╝

  ─ Preprints ────────────────────────────────────────────────

  ┌────────────────────────────────────────────────────────────┐
  │  [Under Prep]  Transition-Level Memory for GUI Agents      │
  │  Changmin Lee, Taehwan Park, Jongwon Lee, Taesik Gong     │
  │  Transition-aware compact memory for mobile GUI agents.    │
  └────────────────────────────────────────────────────────────┘

  ─ Other Publications ───────────────────────────────────────

  [IEIE 2024]  Enhancing Chest X-Ray Classification...  →
  [KMS 2024]   Comparison of Recycling Waste...         →

베뉴 배지 색상 코드:
  Top-tier (ICML, NeurIPS, ICLR, CVPR):
    background: rgba(245,158,11,0.15)
    border: 1px solid rgba(245,158,11,0.4)
    color: #fbbf24

  Journal:
    background: rgba(99,102,241,0.15)
    border: 1px solid rgba(99,102,241,0.4)
    color: #a5b4fc

  Workshop / Preprint:
    background: rgba(100,116,139,0.15)
    border: 1px solid rgba(100,116,139,0.4)
    color: #94a3b8

BibTeX 복사 버튼:
  클릭 → "Copied! ✓" 로 0.8초간 바뀜
  (Clipboard API)
```

---

## 6. Research 섹션

```
BEFORE:
About & Research
────────────────────
I am an M.S.-Ph.D. student in...

[Personalized AI] [Personalized RAG] [On-Device AI]
[On-Device RAG] [Efficient LLMs] [AI Agents]

AFTER:
Research Interests
────────────────────────────────────────────────────────

  ╔═══════════════════════════════════════════════════╗
  ║  " I build AI systems that are personal,          ║
  ║    efficient, and deployable on the edge. "       ║
  ╚═══════════════════════════════════════════════════╝
  (큰 serif italic 폰트, indigo 왼쪽 선)

  My research lies at the intersection of large language
  models, retrieval-augmented generation, and efficient
  on-device inference — with a focus on personalization.

  ┌────────────────────┐ ┌────────────────────┐ ┌───────────────────┐
  │   🎯 Personalized  │ │   ⚡ On-Device     │ │   🤖 AI Agents   │
  │   AI & RAG        │ │   AI & LLMs        │ │   & Memory        │
  │                   │ │                    │ │                   │
  │  User-specific    │ │  Efficient         │ │  GUI Agents,      │
  │  memory, prefs,   │ │  inference on      │ │  Long-horizon     │
  │  retrieval        │ │  edge devices      │ │  task planning    │
  └────────────────────┘ └────────────────────┘ └───────────────────┘

  Keywords:
  [● Personalized AI]  [● Personalized RAG]  — Primary (indigo)
  [● On-Device AI]     [● Efficient LLMs]    — System (sky blue)
  [● AI Agents]        [● On-Device RAG]     — Application (teal)

Pillar 카드 스타일:
  background: rgba(99,102,241,0.06)
  border: 1px solid rgba(99,102,241,0.2)
  border-radius: 12px
  hover: border-color: #6366f1, background: rgba(99,102,241,0.12)
```

---

## 7. Experience 타임라인

```
BEFORE:
  ● Mar. 2025 - Present
    M.S.-Ph.D. Student — UAI Lab, UNIST

  ● Jan. 2025 - Dec. 2025
    Lab Manager — UAI Lab, UNIST

AFTER:
                              ↓ pulse 애니메이션
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━●━━━━ Present
  Mar 2025                    ◉  M.S.-Ph.D. Student   ← 현재 항목
                              │  UAI Lab, UNIST
  ─────────────────────────── │
                              │
  Jan 2025 ━━━━━━━━━━━━━━━━━━●━━━━ Dec 2025
                              │  Lab Manager
                              │  UAI Lab, UNIST
  ─────────────────────────── │
                              │
  Dec 2023 ━━━━━━━━━━━━━━━━━━●━━━━ Sep 2024
                              │  Undergrad RA
                              │  PRMI Lab, KNU

타임라인 선: border-left: 2px solid #1e2433 (왼쪽 수직선)
dot: width/height: 10px; border-radius: 50%
현재 dot: background: #6366f1 + animation: pulse 1.5s infinite
과거 dot: background: #374151
```

---

## 8. Skills 섹션

```
BEFORE:
Programming       [Python] [C] [Java]
Deep Learning     [PyTorch] [TensorFlow]...

AFTER:
Skills
─────────────────────────────────────────────

  ┌──────────────────────────────────────────┐
  │  ⚙  Programming                         │
  │     Python · C · Java                   │
  └──────────────────────────────────────────┘

  ┌──────────────────────────────────────────┐
  │  🔬  DL Frameworks                      │
  │     PyTorch · TensorFlow · Keras        │
  │     scikit-learn                        │
  └──────────────────────────────────────────┘

  ┌──────────────────────────────────────────┐
  │  🔍  RAG & Retrieval                    │
  │     FAISS · Dense Retrieval · LLM Eval  │
  │     Personalized RAG                    │
  └──────────────────────────────────────────┘

  ┌──────────────────────────────────────────┐
  │  🛠  Systems & Tools                    │
  │     Linux · Git · Docker · LaTeX · vLLM │
  └──────────────────────────────────────────┘

아이콘: 이모지 or Font Awesome (선택)
카드 배경: #13161e
Border-left: 3px solid #6366f1 (indigo accent)
태그 대신 ·으로 구분된 인라인 텍스트 (더 깔끔)
```

---

## 9. 모바일 (360px)

```
┌────────────────────────┐
│ CL              [☰]   │  ← 햄버거 메뉴
├────────────────────────┤
│                        │
│  [photo]               │
│  Changmin Lee          │
│  AI Research Engineer  │
│  M.S.-Ph.D. @ UNIST   │
│                        │
│  I work on             │
│  [Personalized RAG▌]   │
│                        │
│  [Email][GitHub][+2]   │
│                        │
├────────────────────────┤
│  🏆 ICML 2026         │
│  🎓 NRF Fellow        │
└────────────────────────┘

(세로 스택, 버튼 풀위드)
```

---

## 10. 전체 색감 프리뷰 (ASCII 컬러 표현)

```
╔════════════════════════════════════════╗
║ ████ #0d0f14  최하위 배경 (페이지)    ║
║ ████ #13161e  카드, 서피스            ║
║ ████ #1e2433  border, divider         ║
║                                        ║
║ ████ #6366f1  Primary (Indigo)        ║
║ ████ #38bdf8  Secondary (Sky)         ║
║ ████ #f59e0b  Gold (Award, Top venue) ║
║ ████ #10b981  Green (Active/current)  ║
║                                        ║
║ ████ #e2e8f0  Text Primary            ║
║ ████ #94a3b8  Text Secondary          ║
║ ████ #64748b  Text Muted              ║
╚════════════════════════════════════════╝
```

---

## 구현 우선순위

```
즉시 효과 큰 작업 (HIGH IMPACT, LOW EFFORT):
  1. 색상 팔레트 교체 (CSS 변수 10개 바꾸면 전체가 바뀜)
  2. 폰트 교체 (Google Fonts 링크 + font-family 3줄)
  3. Publications Featured 카드 (HTML 수정 + CSS 추가)
  4. 네비게이션 바 glassmorphism

다음 단계 (HIGH IMPACT, MED EFFORT):
  5. Hero 배경 Canvas 애니메이션
  6. Research pillar 3-column
  7. 타임라인 pulse 애니메이션

마무리 (MED IMPACT, LOW EFFORT):
  8. BibTeX 복사 버튼
  9. 모바일 반응형 점검
  10. SEO 메타태그
```
