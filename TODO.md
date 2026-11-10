# TODO

> 이 파일은 `_config.yml`의 `exclude`에 포함되어 사이트에 공개되지 않습니다.

## CV 업데이트

CV 원본은 `files/cv.tex`(Awesome CV)이고, 빌드 결과물 `files/CV.pdf`를 홈페이지 CV 버튼에 연결합니다.
빌드: `cd files && tectonic -X compile cv.tex` (`brew install tectonic`). `files/awesome-cv.cls`는
Awesome-CV `964f99d3f1`에 고정했습니다. 이후 버전은 LuaLaTeX나 fontawesome6이 필요해서 tectonic으로 빌드되지 않습니다.

- [x] **Experience:** Nota AI 인턴 경력 추가 (2026-11-10, Industry Experience)
- [x] **Publications:** PastForward 프리프린트 추가 (2026-11-10, Preprints)
- [x] 기존 ΔAgent "Manuscript in preparation" 항목 삭제 (2026-11-10)
- [x] `cv.tex` 빌드 후 `files/CV.pdf` 교체 (2026-11-10). 2026-07-01 PDF의 원본 tex가 repo에 없어서 PDF 내용으로 `cv.tex`를 다시 작성
- [x] **Patents:** 특허 출원 10-2026-0220252(2026-11-06) 추가, Publications 페이지에 Patents 섹션 추가
- [ ] (선택) `_data/cv.json`도 같은 내용으로 갱신. 현재 이 파일을 사용하는 페이지는 없습니다.

## 사이트 리디자인

현재 사이트는 모노스페이스 폰트, 다크 인디고 색상, 카드 나열 구조라서 Codex·Claude 같은 AI 코딩 도구 화면과 비슷해 보입니다. 이 형식을 그대로 쓰지 않고, 개성 있는 아이디어를 중심으로 다시 디자인합니다.

- [ ] 참고할 연구자·디자이너 홈페이지를 모으고 콘셉트 후보 2~3개를 정리
- [ ] 연구 주제(on-device AI, 효율, personalization)를 시각적으로 표현하는 방법 검토
  - 예: hero 인터랙션, 논문별 대표 figure 썸네일, 연구 흐름 타임라인
- [ ] 타이포그래피, 색상, 레이아웃 기준을 새로 정의
- [ ] `REDESIGN_*.md`의 기존 계획 중 유지할 요소 정리
- [ ] 라이트·다크 모드와 모바일 화면 확인
