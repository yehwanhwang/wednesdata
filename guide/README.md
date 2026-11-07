# 웬즈데이터 작업 지침 (guide/)

claude.ai 'Wednesdata' 프로젝트에서 Claude가 작업할 때 읽는 규칙 파일입니다. 모든 대화에 필요한 규칙은 프로젝트 지침 칸에 두고, 특정 작업에만 필요한 규칙은 여기에 둡니다. 그래서 지침 칸은 짧게 유지되고, 이 파일들은 고칠 때마다 복사해 붙일 필요가 없습니다.

| 파일 | 언제 읽나 |
|---|---|
| [project-instructions.md](project-instructions.md) | 프로젝트 지침 칸에 붙여 둔 전문의 원본. 지침 본문이 바뀌면 이 파일도 함께 고칩니다 |
| [charts.md](charts.md) | 리드 차트를 별도 제작·재가공하거나 본문 보조 차트를 그릴 때 |
| [derivatives.md](derivatives.md) | 노트, 링크드인, 인스타그램 이미지 게시물, 커뮤니티 공유, 데이터 카탈로그(리드 차트 데이터셋 엑셀) |
| [motion.md](motion.md) | 인스타그램 릴스(움직이는 차트·흐르는 차트) |
| [scan.md](scan.md) | 소재 스캔과 공모·지원 기회. 목요일 예약 작업도 이 파일을 읽습니다 |
| [examples/](examples/) | 표준 구조의 완성 예시(분량·밀도·리듬 기준) |
| [CHANGELOG.md](CHANGELOG.md) | 규칙이 왜 생겼는지. 새 변경은 맨 위에 한 항목 |

## 읽는 법

- 저장소가 대화에 연결돼 있으면 파일을 직접 읽습니다.
- 아니면 저장소를 붙인 뒤 `gh api repos/yehwanhwang/wednesdata/contents/guide/<파일> -H "Accept: application/vnd.github.raw"`로 원문을 읽습니다.
- WebFetch는 원문 대신 요약을 돌려주고, Claude 작업 공간의 셸에서는 raw.githubusercontent.com이 막혀 있어 둘 다 쓰지 않습니다(2026-11-07 확인).

## 고치는 법

- guide/는 `main`에 바로 커밋해도 됩니다. 홈 화면과 상관없고, `main`에 있어야 다음 대화가 새 규칙을 읽습니다.
- 바꿀 때마다 CHANGELOG.md 맨 위에 무엇을 왜 바꿨는지 한 항목을 더합니다.
- 같은 규칙을 지침 칸과 이 폴더 두 곳에 쓰지 않습니다.
- 서체(Distort 등)와 모션 템플릿은 여기에 두지 않습니다. 서체는 프로젝트 파일, 모션 템플릿은 Drive '01. Design/Template/motion'에 있습니다.
- 이 폴더도 GitHub Pages로 함께 공개됩니다(저장소가 공개라 내용은 어차피 보입니다).
