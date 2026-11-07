---
name: "wednesdata-house-style"
description: "웬즈데이터 뉴스레터 초안을 2026-11-01 지침(호기심을 여는 인용 없는 리드, 통념 확인 호의 질문형 섹션 제목, 섹션마다 구분선, 모바일 문단 길이, 리드 차트 한 장과 본문 보조 차트, 판정 문장 없는 '우리는 묻습니다', 출처 불릿과 링크)과 숫자 예산·리듬 지표로 점검할 때 사용한다. '발행 전에 체크해줘', '문단 길이 봐줘', '출처 링크 봐줘' 요청에 쓴다."
---

# 웬즈데이터 하우스 스타일 체커 (v11, 2026-11-01 지침)

지침에서 사람이 눈으로 놓치기 쉽지만 기계적으로는 명확하게 검증 가능한
규칙을 자동으로 스캔합니다. v5부터 **리드를 인용·콜아웃 없는 일반 문단으로 읽고,
모바일 문단 길이**를 잽니다(Ghost 메일 모바일 미리보기는 한 줄에 약 22자).
v6은 **'숫자의 출처'의 링크**를 읽습니다. 마크다운 링크 `[\<공식 명칭\>](주소)`는
글자만 남겨 형식을 검사하고, 숫자 예산·문단 길이도 주소를 빼고 잽니다.
v7은 **구분선을 발행본 형식으로** 봅니다. 구분선(---)은 리드 뒤와 섹션 제목 앞마다
하나씩 둡니다(10/14호 발행본과 같은 형식, 2026-10-18).
v8은 **짧은 문장 연속을 숫자가 든 문장끼리만** 셉니다. 숫자 없는 짧은 질문·전환·감정 문장은 숨 쉴 자리라서 연달아도 경고하지 않습니다(2026-10-24, '세어보지 않았던 것들' 분석).
v9는 **본문 보조 차트**를 읽습니다. 본문 섹션의 차트 지시어는 `[차트 삽입: 보조 차트 — ...]`만 받습니다. 보조 차트는 필요할 때 넣으므로 장 수는 세지 않습니다(2026-10-24, 보조 차트는 Vizney 블로그 차트 형식).
v10은 **판정 문장을 요구하지 않습니다**. '우리는 묻습니다'는 독자의 삶 → 질문 두 문단으로 쓰고, 날짜·조건으로 맺는 판정 문장('○월에 나오는 ○○가 ○○면 ○○라는 뜻')이 남아 있으면 경고합니다(2026-10-30, 독자가 그날 그 숫자를 찾아볼 일이 드물어 독자에게 남는 것이 적다고 보고 폐지).
v11은 **통념 확인 호의 질문형 섹션 제목**을 받습니다. 본문 섹션 제목이 모두 흔히 쓰는 말에 물음표를 붙인 질문형이면('부자는 망해도 3년은 간다?') 오류로 보지 않고, 일부만 질문형이면 예전처럼 마지막 본문 섹션에만 허용합니다. 리드는 장면 대신 독자가 흔히 쓰는 말·믿음·궁금증으로 열고 호기심만 던지므로, 첫 문장 경고 문구를 그에 맞게 바꾸고, 리드에 큰따옴표 대사가 있으면 지어낸 대사가 아닌지 경고합니다(2026-11-01).
**문체·서사·통찰의 질, 사실관계 정확성은 이 스킬이 판단할 수 없는 영역**이므로
검사하지 않습니다 — 그 부분은 여전히 사람(에디터)의 몫입니다.

체커는 글을 다 쓴 뒤에 돌립니다. 규칙을 맞추려고 문장을 덧붙이면 글이 조립한
것처럼 되므로, 경고가 나오면 해당 문장을 앞뒤와 이어 다시 쓰는 쪽으로 고칩니다.
문단 길이 경고는 문장을 자르지 말고, 생각이 바뀌는 곳에서 문단을 나눠 고칩니다.

## 언제 쓰나
메인 뉴스레터 초안이 거의 완성되어 발행 직전 마지막 점검이 필요할 때.
사용자가 초안 텍스트를 붙여넣거나 파일을 첨부하고 "확인해줘",
"가이드라인대로 됐는지 봐줘", "숫자 밀도 봐줘", "문장 끊기는지 봐줘" 등을
요청하면 이 스킬을 사용한다. 노트·링크드인 글·기획 브리핑에는 쓰지 않는다
(구조가 다르다). 에세이 호는 같은 스크립트로 검사하되, 숫자 예산 목표를
100어절당 3개로 읽는다.

## 사용 방법
1. 초안 텍스트를 `draft.md`로 저장한다 (사용자가 대화에 붙여넣었다면
   그 내용을 그대로 파일로 저장). '제목:' 줄부터 '숫자의 출처' 끝까지가
   검사 범위이고, '[발행 URL' 또는 '[Ghost 메타' 이후는 무시된다.
   리드는 '캡션:' 줄과 첫 구분선(---) 사이의 문단으로 읽는다.
   '숫자의 출처'의 링크는 마크다운 그대로(`[\<공식 명칭\>](주소)`) 저장한다.
2. 검사 스크립트는 이 문서 맨 끝 '검사 스크립트 (v11)' 절에 들어 있다. 손으로 옮겨
   적지 말고, 스킬을 불러올 때 표시되는 Base directory의 SKILL.md에서 그대로 꺼내
   저장한 뒤 실행한다(작업 폴더나 scratchpad에서):
   ```bash
   python3 -I - "<Base directory>/SKILL.md" check_draft_v11.py <<'EOF'
   import sys
   t = open(sys.argv[1], encoding="utf-8").read()
   code = t.rsplit("<!-- check_draft_v11.py -->", 1)[1].split("```python\n", 1)[1].split("\n```", 1)[0]
   open(sys.argv[2], "w", encoding="utf-8").write(code + "\n")
   EOF
   python3 -I check_draft_v11.py draft.md
   ```
   스킬 폴더의 `scripts/check_draft.py`는 v6 이하 옛 판일 수 있으니 쓰지 않는다.
   SKILL.md 파일을 열 수 없는 환경이면 맨 끝 코드 블록을 그대로 복사해 저장한다.
3. 스크립트는 JSON을 stdout으로 출력한다. **이 JSON을 그대로 사용자에게
   보여주지 말 것.** `passed`는 한두 줄로 요약하고, `metrics`는 아래 표
   형식으로 보여주고, `issues`는 `severity`별로 나눠 설명한다.
   - `error`: 구조·고정 형식 위반. 반드시 고쳐야 한다.
   - `warn`: 참고용 경고. 문맥상 자연스러우면 그대로 둬도 된다고 안내한다.
     가독성·리듬·문단 길이 경고는 "어느 문장·문단을 어떻게 고치면 되는지"를 함께 제안한다.
4. 위반이 없으면 짧게 통과했다고 알린다. 최종 판단은 사용자 몫이다.

metrics 안내 형식 (측정값 / 목표):
- 핵심 수치 100어절당: 1.9 / 5 이하 (경고 7 초과)
- 숫자 든 문장 비율: 14% / 45% 이하 (경고 55% 초과)
- 핵심 수치 총량: 9개 / 경고 25개 초과
- 물음표: 2개 / 2개 이상
- 독자 등장: 7회 / 글 전체 2회 이상
- 평균 문장 길이: 16.1어절 / 15 안팎 (경고 12 미만)
- 숫자 든 짧은 문장 연속: 0 / 경고 2 이상
- "A가 아니라 B": 0 / 경고 2 이상
- 리드 문단: 3개, 최장 111자 / 2~3개, 110자 안팎 (경고 120자 초과, 모바일 약 6줄)
- 본문 최장 문단: 194자 / 경고 200자 초과 (모바일 약 9줄)
- 출처 링크: 3개 / 원문·함께 본 자료에는 반드시, 원데이터·관련 글은 있으면

기준점(참고): 2025년 발행분은 100어절당 0.3~3.9개, 숫자 든 문장 11~44%,
평균 문장 길이 10~13어절이었고, 2026-10-07호는 7.9개, 74%, 11.4어절이었다.
지침 예시 초안(2026-10-10판, OECD 교육지표 최종본)은 1.9개, 14%, 16.1어절,
리드 최장 111자, 본문 최장 194자이고, 판정 문단을 뺀 2026-10-30판은 1.9개, 11%, 15.7어절이다. 같은 글의 10-09판은 리드가 인용 서식 한 덩어리
293자(모바일 13줄)여서 모바일 미리보기에서 읽히지 않았다.

## 검사 항목
1. **제목** — '제목: [문장형 제목]: [공식 데이터명]' 형식 (콜론 구분).
2. **리드 차트와 캡션** — 제목 바로 다음에 `[차트 삽입: ...]`, 그 아래
   `캡션: [결론 한 줄]`. 지시어에 '원문 그림' / '재가공' / '별도 제작' 명시 여부(warn).
3. **리드** — 캡션과 첫 구분선 사이의 일반 문단. `> ` 인용 서식이 있으면 error
   (2026-10-10부터 인용·콜아웃을 쓰지 않는다). 문단 4개 이상 warn(권장 2~3개),
   문단 하나가 120자를 넘으면 warn(목표 110자 안팎, 모바일 5줄), 문장이 2개 미만이거나
   5개 초과면 warn(권장 3~4문장), 핵심 수치 2개 초과 warn.
   첫 문장이 연도·숫자·기관명으로 시작하거나 핵심 수치가 2개 이상이면 warn
   (독자가 흔히 쓰는 말·믿음·궁금증으로 열라는 뜻, v11). 리드에 큰따옴표(" " “ ”)로 묶은
   대사가 있으면 warn(누가 하는지 모를 대사를 지어내 붙이지 않는다, v11). 옛 구조의 도입부 불릿이 있으면 error.
4. **구분선(v7)** — `---`는 리드 뒤(첫 섹션 제목 앞)와 그다음 섹션 제목 앞마다
   정확히 하나씩. 섹션 제목 앞에 없거나 두 개 이상 겹치면 error, 섹션 제목 앞이 아닌
   곳(섹션 안·리드 앞·'숫자의 출처' 뒤)에 있으면 error. '숫자의 출처' 뒤 구분선은
   엔딩과 함께 사용자가 Ghost에서 붙이므로 초안에는 두지 않는다(발행본 형식, 2026-10-18).
5. **섹션 구조** — 본문 섹션 2~3개, 마지막 두 섹션은
   `### 우리는 묻습니다` → `### 숫자의 출처` 순. 폐지된 섹션명
   (출처, 내 삶에서는, 다음에 볼 숫자, 함께 보기 등)은 error.
6. **섹션 제목** — 질문형은 마지막 본문 섹션에만. 다만 본문 섹션 제목이 모두 질문형이면
   통념 확인 호로 보고 허용한다(v11). '지표명 + 수치'로
   끝나는 옛 형식은 warn. 제목 속 핵심 수치 2개 이상이면 warn.
7. **섹션 본문** — 문단 2~3개(warn, 한 줄 문단 허용), 볼드 정확히 1개
   (0개 error, 2개+ warn). 볼드에 숫자가 없어도 된다. 볼드가 섹션의 마지막
   문장이면 warn. 섹션의 마지막 문장에 숫자가 있으면 warn.
   **본문 섹션의 차트 지시어는 `[차트 삽입: 보조 차트 — ...]`만 받는다(v9)** — '보조 차트' 표기가 없는 차트 지시어는
   error(리드 차트는 제목 바로 아래 한 장뿐). 보조 차트는 필요할 때 넣으므로 장 수는 세지 않는다.
   **문단 하나가 200자(모바일 약 9줄)를 넘으면 warn** — '우리는 묻습니다'도 같다.
8. **우리는 묻습니다** — 2문단 권장(나 → 우리, warn), 마지막 문장은 '?'(error),
   첫 문단에 수치(warn). 판정 문장(날짜·조건으로 맺는 문장)은 2026-10-30에 폐지해,
   남아 있으면 warn(v10).
9. **숫자의 출처** — 항목별 불릿 목록. 불릿이 아닌 줄이 있으면 error(구분선 줄은 4번에서 본다).
   첫 불릿은 '- 원문: [기관], <공식 명칭>, [YYYY년 M월 D일] 발표' 형식(error).
   공식 명칭에 링크가 걸려 있어도(`[\<공식 명칭\>](주소)`) 같은 형식으로 읽는다.
   불릿 3~8개(warn), 45어절을 넘는 불릿(warn).
   **링크(v6)** — 원문·함께 본 자료 불릿에 링크가 없으면 warn. '(링크 확인 필요)'가
   남아 있거나, 글자에 걸지 않은 맨 주소, 이스케이프하지 않은 꺾쇠(채팅에서 사라질 수 있음)가
   있으면 warn. 링크 수는 metrics의 `출처_링크수`.
9-1. **본문 링크·본문 초반 출처 언급(v6)** — 리드·본문 섹션·'우리는 묻습니다'에 링크나
   주소가 있으면 warn(구체적인 출처와 링크는 '숫자의 출처'에만). 원문 불릿의 기관 이름이
   리드나 첫 섹션 첫 문단에 없으면 warn(본문 초반에 출처를 한 번 간략히 밝힌다).
10. **엔딩** — 초안에 엔딩 문구('사유의 도구', '지금 구독하고', 옛 한 줄 엔딩)가
    있으면 warn. 엔딩은 사용자가 Ghost에서 직접 붙이므로 초안은 '숫자의 출처'로 끝난다.
11. **금지 표현·메타 라벨·차트 지시어·이모지** — 자화자찬 표현(warn),
    '30초 버전'·'오늘의 한 장' 같은 메타 라벨(error), "아래 차트에서 보듯"류
    지시어(error), 이모지(error).
12. **가독성 지표 (숫자 예산)** — 리드·본문 섹션·'우리는 묻습니다'를
    합친 본문에서 100어절당 핵심 수치(연도·날짜·연령대·기간 제외)가 7개를
    넘으면 warn(목표 5), 숫자가 든 문장이 55%를 넘으면 warn(목표 45%),
    핵심 수치 총량이 25개를 넘으면 warn, 물음표가 2개 미만이면 warn,
    독자에게 말을 거는 문장이 글 전체 2개 미만이면 warn.
13. **리듬 지표** — 평균 문장 길이가 12어절 미만이면 warn(목표 15 안팎. 에세이 호는 참고만),
    숫자가 든 8어절 이하 문장이 연달아 나오는 곳이 2군데 이상이면 warn(v8. 숫자 없는 짧은 질문·전환·감정 문장은 세지 않는다),
    'A가 아니라 B' 구문이 2번 이상이면 warn.
14. **모바일 문단 지표** — 리드 문단 수와 최장 리드 문단, 본문 최장 문단의 글자 수를
    metrics에 싣는다(경고는 3번·7번 항목에서 낸다).

## 스크립트를 쓸 수 없을 때 (폴백)
검사 스크립트를 꺼내거나 실행할 수 없으면 구조 항목 1~11은 위 목록을 보고
눈으로 점검하고(구분선은 '### ' 줄마다 바로 위, 빈 줄을 건너뛴 자리에 '---'가 하나 있는지),
12~14번 지표만 아래로 계산한다.
```python
import re
t = open("draft.md", encoding="utf-8").read()
t = t.split("### 숫자의 출처")[0]                      # 출처 제외
t = re.sub(r"\[([^\]\n]+)\]\(https?://[^\s)]+\)", r"\1", t)  # 링크는 글자만
t = re.sub(r"^제목:.*|^\[차트.*|^캡션:.*|^###.*|^---$", " ", t, flags=re.M).replace("**", "")
paras = [re.sub(r"^\s*>\s?", "", p).strip() for p in t.split("\n\n") if p.strip()]
s = [x for x in re.split(r"(?<=[.?!])\s+", t) if x.strip()]
lens = [len(x.split()) for x in s]
u = re.sub(r"(19|20)\d{2}년|\d{1,2}월(\s*\d{1,2}일)?|\d+\s*~\s*\d+\s*세|\d+대(?!\d)|\d+년\s*(전|새|만에|째|간|뒤|사이)|\d+개월", " ", t)
core = re.findall(r"\d[\d,]*(?:\.\d+)?\s*(?:%p|%|조\s?원|억\s?원|만\s?원|원|명|세|건|배|㎡|년|시간|일|호|개|곳|점|달러)|\d+분의\s*\d+", u)
print("어절", len(t.split()), "| 핵심 수치/100어절", round(len(core)/len(t.split())*100, 1),
      "| 숫자 든 문장 %", round(sum(1 for x in s if re.search(r"\d", x))/len(s)*100),
      "| 평균 문장 어절", round(sum(lens)/len(lens), 1),
      "| 숫자 든 짧은 문장 연속", sum(1 for i in range(len(lens) - 1) if lens[i] <= 8 and lens[i + 1] <= 8 and re.search(r"\d", s[i]) and re.search(r"\d", s[i + 1])),
      "| 아니라", len(re.findall(r"(?:이|가|게|건|것이|라기)\s*아니라", t)), "| 물음표", t.count("?"),
      "| 문단 글자 수", [len(p) for p in paras])   # 리드 문단 120자, 본문 문단 200자 넘으면 나누기
```

## 한계 (사용자에게 필요시 안내)
- 정규식 기반 탐지라 오탐·미탐이 있을 수 있다. 핵심 수치는 단위가 붙은
  숫자 위주라 "1천 명당" 같은 정의 문구는 세지 않고, '열에 여덟' 같은
  한글 숫자는 세지 않으며, 비교 짝(전·후)은 구분하지 못해 실제보다 많게 셀 수 있다.
  '10억 원'처럼 단위로 쓰인 금액도 한 번씩 센다.
- 문장은 마침표·물음표·느낌표 뒤 공백으로 나눈다. 따옴표 안의 마침표나
  "3.3%" 같은 소수점은 문제없지만, 줄임표(…)로 끝나는 문장은 다음 문장과 합쳐진다.
- 모바일 줄 수는 Ghost 메일 모바일 미리보기(한 줄 약 22자, 공백 포함)로 어림한 값이다.
  실제 줄 수는 기기·글꼴·메일 앱에 따라 다르니, 발행 전 Ghost Test 메일로 한 번 본다.
- 독자 등장은 '당신·여러분·독자·~라면·~까요?' 같은 표지어만 본다. '우리'는
  '우리나라'와 구분이 안 돼 세지 않는다. 리드가 호기심을 여는지, 지어낸 대사나 결론을 쓰려고
  만든 문장이 없는지, 문장이 자연스럽게 이어지는지는 사람이 읽어야 한다. 큰따옴표 대사 경고는
  따옴표만 보므로, 따옴표 없이 지어낸 대사는 잡지 못한다. 리듬 지표는 끊김의 징후를 잡을 뿐이다.
- 남은 판정 문장 검사(v10)는 '○월'·'분기'·'발표'와 '뜻입니다'·'신호' 같은 단어가 '우리는 묻습니다'에
  함께 있는지만 본다. 판정 문장이 아닌데 경고가 나면 무시한다.
- 링크 검사는 링크가 있는지와 표기 형식만 본다. 링크가 열리는지, 열린 페이지의 명칭·발표일이
  불릿과 같은지는 직접 열어 확인해야 한다(지침 6장 점검 항목).
- 본문 초반 출처 언급은 원문 기관 이름(첫 단어 포함)이 리드나 첫 섹션 첫 문단에 있는지만 본다.
  'OECD 평균'처럼 출처 문장이 아닌 곳에 나와도 통과한다.
- 구분선 검사는 '---'만 구분선으로 읽는다. '***'나 '___'처럼 다른 표기로 쓴 구분선은 보지 못한다.
- 문체·스토리텔링의 질, 사실관계 정확성(원본 발표자료와의 수치 대조)은
  검사 범위 밖이다 — 이건 지침 1-1 절차로 별도 대조해야 한다.

## 테스트
- v11: 지침 7장 예시는 v10과 같이 error 0건, warn 0건이어야 한다. 본문 섹션 제목 셋이 모두 질문형인
  11월 4일 발행호 초안('부자는 망해도 3년은 간다?', '가난은 대물림된다?', '개천에서 용 난다?')은 '섹션 제목' error가
  나오지 않아야 한다(v10은 error 2건). 첫 섹션 제목만 질문형으로 바꾼 7장 예시는 '섹션 제목' error 1건이 나와야 하고,
  7장 예시의 리드 첫 문장 앞에 “요즘 개천에서 용 안 나.”를 붙이면 '리드' warn 1건(큰따옴표 대사)만 나와야 한다.
- v10: 지침 7장 예시(2026-10-30판, '우리는 묻습니다'의 판정 문단과 '숫자의 출처'의 '판정 지표' 불릿을 뺀 판)는
  error 0건, warn 0건이어야 한다. 판정 문단이 남은 옛 판(10-28판 예시)을 넣으면 '우리는 묻습니다' warn 2건
  (문단 3개, 판정 문장)만 나와야 한다. 판정 문장이 없는 초안에 v9가 내던 '판정 문장이 없습니다' error는 나오지 않아야 한다.
- v9: 지침 7장 예시는 v8과 같이 error 0건, warn 0건이어야 한다. 첫 섹션 둘째 문단 뒤에 `[차트 삽입: 보조 차트 — ...]`
  한 줄을 넣으면 error 0건이고 passed에 '본문 보조 차트 1장'이 나와야 한다. 같은 자리에 '보조 차트' 표기 없이
  `[차트 삽입: 월별 기본급·물가 상승률]`을 넣으면 '차트' error 1건, 한 섹션에 보조 차트를 두 장 넣어도 error·warn은 없어야 한다.
- v8: 2025년 '세어보지 않았던 것들' 본문은 8어절 이하 문장 13개 중 12개가 숫자 없는 문장이라, v7에서는 '짧은 문장 연속' 2곳이었지만 v8에서는 0곳이어야 한다. 숫자가 든 짧은 문장이 연달아 나오는 글("물가가 3% 올랐다. 월급은 2% 올랐다. 차이는 1%p다.")은 2곳으로 잡혀야 한다. 나머지 판정은 v7과 같다.
- 지침 7장 예시(OECD 교육지표 2026 최종본, 출처 링크 포함)를 섹션 제목 앞마다 구분선을 넣어
  저장하면 error 0건, warn 0건이어야 한다.
- 같은 글을 구분선이 리드 뒤 하나뿐인 옛 형식으로 두면 '구분선' error 4건(둘째 섹션부터
  '숫자의 출처'까지 섹션 제목 앞마다)만 나와야 한다.
- 리드 뒤 구분선을 빼고, '우리는 묻습니다' 앞에 구분선을 두 개 겹치고, 둘째 섹션 안과
  '숫자의 출처' 뒤에 하나씩 넣으면 '구분선' error 3건(리드 뒤 없음, 겹침, 섹션 제목 앞이 아닌 곳 2개)만 나와야 한다.
- 스킬 폴더에 v6 판 `tests/`가 남아 있으면 v10 스크립트로 이렇게 나와야 한다(error/warn):
  good_eag_v6_links.md 4/2(구분선 4, 판정 문단 2), good_eag_v5.md 4/4(구분선 4, 출처 링크 2, 판정 문단 2),
  bad_links_v6.md 4/8, eag_v4_quote_lead.md 5/6, dense_wage.md 7/14, birth_v3_old_voice.md 9/8,
  dense_birth_v2.md 9/17, bad_labels.md 12/20, old_format.md 7/14.
  v9보다 판정 문단이 남은 파일은 warn이 늘고(문단 수·판정 문장), 판정 문장이 없던 old_format.md는 error가 하나 준다.
  구분선 error를 빼면 구조 판정은 v6 결과와 같다(v8에서 짧은 문장 연속 경고가 줄어든 파일은 warn이 하나씩 적을 수 있다).

## 설치 메모
v11(2026-11-01)은 v10에서 섹션 제목·리드 검사만 바꿨다(본문 섹션 제목이 모두 질문형이면 통념 확인 호로 보고 허용, 리드 첫 문장 경고 문구를 '흔히 쓰는 말·믿음·궁금증'으로, 리드의 큰따옴표 대사 warn 추가). v10(2026-10-30)은 v9에서 '우리는 묻습니다' 검사만 바꿨다(판정 문장 필수 검사를 없애고 남아 있으면 warn, 권장 문단 3 → 2, '숫자의 출처' 권장 불릿에서 판정 지표 삭제). v9(2026-10-24)는 v8에서 본문 차트 검사만 바꿨다(보조 차트 지시어 허용, 장 수는 세지 않음). v8(2026-10-24)은 v7에서 '짧은 문장 연속' 셈만 바꿨다. v7부터 검사 스크립트를 이 문서 안에 넣었다. 스킬 카드로 SKILL.md만 바뀌어도 설명과 스크립트가
함께 바뀌게 하기 위해서다(2026-10-18 확인: 설치본이 v5 설명에 v3 스크립트여서, 폐지된 인용 리드·
'본 글은' 출처 문장·고정 엔딩을 error로 잡은 적이 있다). 스킬 폴더의 `scripts/`·`tests/`는
v6 이하 판일 수 있으니 실행하지 않는다. 나중에 .skill 패키지로 다시 묶을 때는 아래 코드 블록을
`scripts/check_draft.py`로 옮긴다.

## 검사 스크립트 (v11)
<!-- check_draft_v11.py -->
```python
#!/usr/bin/env python3
"""
웬즈데이터 뉴스레터 초안 QA 체커 v11 (2026-11-01 지침: 여섯 블록 + 가독성·리듬·모바일 문단 지표 + 출처 링크 + 섹션 구분선 + 본문 보조 차트 + 판정 문장 폐지 + 호기심 리드·통념 확인 호)

사용법: python3 check_draft_v11.py <draft.md>
출력: JSON (stdout) — {"passed": [...], "metrics": {...}, "issues": [{"check","location","detail","severity"}]}
  severity: "error" = 구조·고정 문구 위반(반드시 수정), "warn" = 참고용 경고(문맥상 자연스러우면 유지 가능)

검사 범위는 '제목:' 줄부터 '숫자의 출처' 끝까지. '[발행 URL' 또는 '[Ghost 메타' 이후는 무시한다.

v11(2026-11-01): 본문 섹션 제목이 모두 질문형이면 통념 확인 호로 보고 질문형 제목을 허용. 리드 첫 문장 경고 문구를 '흔히 쓰는 말·믿음·궁금증'으로 바꾸고, 리드의 큰따옴표 대사를 warn.
v10(2026-10-30): '우리는 묻습니다'는 2문단(나 → 우리). 판정 문장 필수 검사를 없애고, 날짜·조건으로 맺는 판정 문장이 남아 있으면 warn.
v9(2026-10-24): 본문 섹션의 차트 지시어는 '보조 차트' 표기가 있을 때만 받는다(없으면 error). 보조 차트 장 수는 세지 않는다.
v8(2026-10-24): '짧은 문장 연속'은 숫자가 든 8어절 이하 문장끼리 붙어 있을 때만 센다(숫자 없는 질문·전환·감정의 짧은 문장은 숨 쉴 자리).
v7(2026-10-18, 구분선): 구분선(---)은 리드 뒤(첫 섹션 제목 앞)와 그다음 섹션 제목 앞마다 하나씩 둔다(발행본 10/14호와 같은 형식).
  없거나 겹치면 error, 섹션 제목 앞이 아닌 곳(섹션 안·리드 앞·'숫자의 출처' 뒤)에 있으면 error.
  '숫자의 출처' 뒤 구분선은 엔딩과 함께 사용자가 Ghost에서 붙인다.
v6(2026-10-18): '숫자의 출처' 링크(원문·함께 본 자료 링크 누락, 링크 확인 필요, 맨 주소, 꺾쇠), 본문 링크, 본문 초반 기관 언급.
v5(2026-10-10): 리드는 인용 없는 일반 문단, 모바일 문단 길이(리드 120자·본문 200자 경고).
v4(2026-10-09): 엔딩 미포함, '숫자의 출처' 불릿, 본문 차트 금지, 리듬 지표, 독자 등장은 글 전체 2회 이상.
v3(2026-10-08): 숫자 예산(100어절당 핵심 수치, 숫자 든 문장 비율), 리드 첫 문장, 섹션 끝 문장, 질문 수.
"""
import sys
import re
import json

OLD_ENDINGS = ["데이터로 세상을 읽는 수요일, 웬즈데이터. 이 글이 생각의 도구가 됐다면", "사유의 도구", "지금 구독하고"]

BANNED_SELF_REF = ["분석했습니다", "해독해 드립니다", "알아보겠습니다", "살펴보겠습니다",
                   "말씀드리겠습니다", "정리해드립니다", "짚어보겠습니다"]
BANNED_META_LABELS = ["30초 버전", "오늘의 한 장", "핵심 요약", "TL;DR", "한 줄 요약", "요약하면"]
BANNED_CHART_REFS = ["아래 차트에서 보듯", "위 그래프를 보면", "아래 그래프", "위 차트", "다음 차트를 보면", "아래를 보면"]
RETIRED_SECTIONS = ["내 삶에서는", "다음에 볼 숫자", "함께 보기", "출처", "30초 버전", "오늘의 한 장"]
REQUIRED_TAIL = ["우리는 묻습니다", "숫자의 출처"]
AGENCY_OPENERS = ["국가데이터처", "한국은행", "고용노동부", "국토교통부", "교육부", "한국부동산원", "한국소비자원",
                  "금융감독원", "관세청", "OECD", "IMF", "세계은행", "ILO", "통계청"]

# 가독성 목표치 (지침 2-2 숫자 예산)
DENSITY_TARGET, DENSITY_WARN = 5.0, 7.0          # 핵심 수치 / 100어절 (2025년 글 0.3~3.9, 10/7호 7.9)
DIGIT_SENT_TARGET, DIGIT_SENT_WARN = 45, 55      # 숫자 든 문장 비율(%) (2025년 글 11~44, 10/7호 74)
LEAD_CORE_MAX = 2                                # 리드 문단 핵심 수치
MIN_QUESTIONS = 2                                # 글 전체 '?' 수
TOTAL_CORE_WARN = 25                             # 글 전체 핵심 수치 총량
AVG_SENT_TARGET, AVG_SENT_WARN = 15, 12          # 평균 문장 길이(어절): 2025년 글 10~13, 10/9 EAG 초안 16
SHORT_RUN_WARN = 2                               # 숫자가 든 8어절 이하 문장이 연달아 나오는 횟수(v8)
ANIRA_WARN = 2                                   # 'A가 아니라 B' 구문 수
SOURCE_BULLETS = (3, 8)                          # 숫자의 출처 불릿 수
MOBILE_CPL = 22                                  # Ghost 메일 모바일 미리보기 한 줄 글자 수(공백 포함)
LEAD_PARA_MAX = 120                              # 리드 문단 글자 수 경고 기준 (목표 110자 안팎 = 모바일 5줄)
LEAD_PARA_COUNT_MAX = 3                          # 리드 문단 수 (권장 2~3개)
BODY_PARA_MAX = 200                              # 본문 문단 글자 수 경고 기준 (모바일 약 9줄)

EMOJI_PATTERN = re.compile("[\U0001F300-\U0001FAFF\U00002600-\U000027BF\U0001F1E6-\U0001F1FF\U00002B00-\U00002BFF]")
CHART_PATTERN = re.compile(r"^\[차트(?: 삽입)?:.*\]\s*$")
SUPPORT_CHART = "보조 차트"                       # 본문 보조 차트 지시어 표지(v9)
BOLD_PATTERN = re.compile(r"\*\*[^*\n]+\*\*")
SENT_END = re.compile(r"[.?!](?=\s|$)")
READER_PATTERN = re.compile(r"당신|여러분|독자|내\s(통장|월급|연봉|삶|집|대출|시간|지갑|졸업장)|나요\?|까요\?|시나요\?|신다면|하고 있다면|이라면|라면,")
LINK_PATTERN = re.compile(r"\[([^\]\n]+)\]\((https?://[^\s)]+)\)")   # 마크다운 링크 [글자](주소)
BARE_URL = re.compile(r"https?://\S+")


def norm(s):
    return re.sub(r"\s+", " ", s).strip()


def unlink(s):
    """마크다운 링크는 글자만 남기고, 꺾쇠 이스케이프(\\<, \\>)를 푼다. 형식 검사와 숫자 셈에서 주소를 뺀다."""
    s = LINK_PATTERN.sub(lambda m: m.group(1), s)
    return s.replace("\\<", "<").replace("\\>", ">")


def count_links(s):
    """마크다운 링크 수와, 글자에 걸지 않은 맨 주소 수."""
    return len(LINK_PATTERN.findall(s)), len(BARE_URL.findall(LINK_PATTERN.sub(" ", s)))


def numbers_in(text):
    """'핵심 수치'만 센다: 연도·날짜·연령대·기간은 제외, 분수(3분의 1)는 1개, 단위나 소수점이 있는 숫자만."""
    t = re.sub(r"(19|20)\d{2}년", " ", text)
    t = re.sub(r"\b(19|20)\d{2}\b", " ", t)
    t = re.sub(r"\d{1,2}월(\s*\d{1,2}일)?(\s*말)?", " ", t)
    t = re.sub(r"\d+\s*~\s*\d+\s*세", " ", t)
    t = re.sub(r"\d+대(?!\d)", " ", t)
    t = re.sub(r"\d+년\s*(전|새|만에|째|간|뒤|사이)", " ", t)
    t = re.sub(r"\d+개월", " ", t)
    frac = len(re.findall(r"\d+분의\s*\d+", t))
    t = re.sub(r"\d+분의\s*\d+", " ", t)
    toks = re.findall(r"\d[\d,]*(?:\.\d+)?\s*(?:%p|%|조\s?원|억\s?원|만\s?원|원|명|세|건|배|년치|㎡|년|시간|일|호|개|곳|점|달러|\$)?", t)
    toks = [x for x in toks if re.search(r"[%원명세건배㎡년.시일호개곳점달러$]", x) or "," in x]
    return toks + ["분수"] * frac


def sentences(text):
    return [s.strip() for s in re.split(r"(?<=[.?!])\s+", text) if s.strip()]


def split_paragraphs(lines):
    """빈 줄 기준 문단. 차트 지시어·캡션 줄은 문단에서 제외."""
    paras, cur = [], []
    for ln in lines:
        s = ln.strip()
        if not s:
            if cur:
                paras.append(" ".join(cur))
                cur = []
            continue
        if CHART_PATTERN.match(s) or s.startswith("캡션:") or s == "---":
            if cur:
                paras.append(" ".join(cur))
                cur = []
            continue
        cur.append(s)
    if cur:
        paras.append(" ".join(cur))
    return paras


def main():
    if len(sys.argv) < 2:
        print(json.dumps({"error": "draft 파일 경로를 인자로 넘겨주세요."}, ensure_ascii=False))
        sys.exit(1)
    raw = open(sys.argv[1], encoding="utf-8").read()

    cut = re.search(r"^\[(?:발행 URL|Ghost 메타)", raw, flags=re.MULTILINE)
    body = raw[:cut.start()] if cut else raw
    raw_lines = body.splitlines()                # 링크 검사용 원문 줄
    lines = [unlink(l) for l in raw_lines]       # 형식·숫자 검사용 줄 (링크는 글자만)
    issues, passed, metrics = [], [], {}

    def err(check, loc, detail):
        issues.append({"check": check, "location": loc, "detail": detail, "severity": "error"})

    def warn(check, loc, detail):
        issues.append({"check": check, "location": loc, "detail": detail, "severity": "warn"})

    # ---------- 1. 제목 ----------
    title_idx = next((i for i, l in enumerate(lines) if l.strip().startswith("제목:")), None)
    if title_idx is None:
        err("제목", "머리", "'제목: [문장형 제목]: [공식 데이터명]' 줄이 없습니다.")
        title_idx = -1
    else:
        t = lines[title_idx].split("제목:", 1)[1].strip()
        if ":" not in t and "：" not in t:
            err("제목", "머리", "제목에 '[문장형 제목]: [공식 데이터명]' 구분 콜론이 없습니다.")
        else:
            passed.append("제목 형식 확인")

    # ---------- 2. 리드 차트 + 캡션 ----------
    after_title = [(i, l) for i, l in enumerate(lines) if i > title_idx and l.strip()]
    lead_chart_i = None
    if after_title and CHART_PATTERN.match(after_title[0][1].strip()):
        lead_chart_i = after_title[0][0]
        directive = after_title[0][1]
        if "삽입" not in directive:
            warn("리드 차트", "머리", "'[차트: ...]' 대신 '[차트 삽입: ...]' 표기를 권장합니다.")
        if not ("원문" in directive or "재가공" in directive or "별도 제작" in directive):
            warn("리드 차트", "머리", "지시어에 '원문 그림' / '원문 그림 재가공(강조 요소)' / '별도 제작 필요' 중 하나를 적어 주세요.")
        if len(after_title) > 1 and after_title[1][1].strip().startswith("캡션:"):
            cap = after_title[1][1].split("캡션:", 1)[1].strip()
            if len(cap) < 10:
                warn("캡션", "머리", "캡션이 너무 짧습니다. 결론 한 줄이어야 합니다.")
            else:
                passed.append("리드 차트와 캡션 확인")
        else:
            err("캡션", "머리", "리드 차트 바로 아래 '캡션: [결론 한 줄]' 이 없습니다.")
    else:
        err("리드 차트", "머리", "제목 다음에 리드 차트 지시어 [차트 삽입: ...] 가 와야 합니다.")

    # ---------- 3. 리드 (캡션과 구분선 사이의 일반 문단) ----------
    first_h3 = next((i for i, l in enumerate(lines) if l.startswith("### ")), len(lines))
    div_idx = [i for i, l in enumerate(lines) if l.strip() == "---"]
    cap_i = next((i for i, l in enumerate(lines[:first_h3]) if l.strip().startswith("캡션:")), None)
    lead_start = (cap_i if cap_i is not None else (lead_chart_i if lead_chart_i is not None else title_idx)) + 1
    lead_end = next((i for i in div_idx if lead_start <= i < first_h3), first_h3)
    lead_region = lines[lead_start:lead_end]
    old_bullets = [l for l in lead_region if l.strip().startswith(("* ", "- "))]
    quote_lines = [l for l in lead_region if l.strip().startswith(">")]
    lead_paras = split_paragraphs([re.sub(r"^\s*>\s?", "", l) for l in lead_region
                                   if not l.strip().startswith(("* ", "- "))])
    lead = " ".join(lead_paras)
    if quote_lines:
        err("리드 형식", "머리", "리드에 인용 서식('> ')이 있습니다. 리드는 인용·콜아웃 없이 일반 문단으로 씁니다"
            " (모바일에서 줄 폭이 좁아지고 인용처럼 읽혀 건너뛰게 됨, 2026-10-10 원칙).")
    if not lead_paras:
        err("리드", "머리", "리드가 없습니다. 캡션과 구분선(---) 사이에 일반 문단 2~3개로 씁니다.")
    else:
        if len(lead_paras) > LEAD_PARA_COUNT_MAX:
            warn("리드", "머리", f"리드 문단 {len(lead_paras)}개 (권장 2~3개).")
        for k, p in enumerate(lead_paras, 1):
            n = len(p.replace("**", ""))
            if n > LEAD_PARA_MAX:
                warn("리드", "머리", f"리드 {k}번째 문단이 {n}자입니다 (모바일 약 {-(-n // MOBILE_CPL)}줄). "
                     f"110자(약 5줄) 안팎에서 나누고, 결론 문장은 한 줄 문단으로 떼어도 좋습니다.")
        lead_sents = sentences(lead)
        n_sent = len(lead_sents)
        if n_sent < 2 or n_sent > 5:
            warn("리드", "머리", f"문장 {n_sent}개 (권장 3~4문장).")
        n_num = len(numbers_in(lead))
        if n_num > LEAD_CORE_MAX:
            warn("리드", "머리", f"핵심 수치 {n_num}개 (리드는 {LEAD_CORE_MAX}개 이내. 나머지는 본문으로).")
        first = lead_sents[0] if lead_sents else ""
        if re.match(r"\s*(19|20)\d{2}년", first) or re.match(r"\s*\d", first) or any(first.startswith(a) for a in AGENCY_OPENERS):
            warn("리드 첫 문장", "머리", "첫 문장이 연도·숫자·기관명으로 시작합니다. 독자가 흔히 쓰는 말·믿음·궁금증으로 여세요(결론은 리드 차트와 캡션이 말합니다).")
        elif len(numbers_in(first)) >= 2:
            warn("리드 첫 문장", "머리", "첫 문장에 핵심 수치가 2개 이상입니다. 독자가 이미 품은 물음으로 열고 숫자는 둘째 문장부터.")
        quoted = re.findall(r"[\"“]([^\"“”\n]{2,})[\"”]", lead)
        if quoted:
            warn("리드", "머리", f"리드에 큰따옴표 대사가 있습니다({quoted[0][:20]!r}). 실제로 흔히 쓰는 말인지 확인하고, 누가 하는지 모를 대사를 지어내 붙이지 마세요(2026-11-01).")
        if not any(i["check"] in ("리드", "리드 형식", "리드 첫 문장") for i in issues):
            passed.append(f"리드 일반 문단 {len(lead_paras)}개, {n_sent}문장, 핵심 수치 {n_num}개, 첫 문장 형식 통과")

    if old_bullets:
        err("폐지된 구조", "머리", f"도입부 불릿 {len(old_bullets)}개 발견 — 리드 문단으로 대체됐습니다.")

    # ---------- 4. 구분선 (v7: 리드 뒤와 섹션 제목 앞마다 하나씩, 발행본 형식) ----------
    h3_all = [i for i, l in enumerate(lines) if l.startswith("### ")]
    div_used, div_bad = set(), 0
    for k, i in enumerate(h3_all):
        j, gap = i - 1, []
        while j > title_idx and (not lines[j].strip() or lines[j].strip() == "---"):
            if lines[j].strip() == "---":
                gap.append(j)
            j -= 1
        div_used.update(gap)
        loc = "머리" if k == 0 else f"### {norm(lines[i][4:])}"
        where = "리드 뒤(첫 섹션 제목 앞)" if k == 0 else "섹션 제목 앞"
        if not gap:
            err("구분선", loc, f"{where}에 구분선(---)이 없습니다. 구분선은 리드 뒤와 섹션 제목 앞마다 하나씩 둡니다(발행본 형식).")
            div_bad += 1
        elif len(gap) > 1:
            err("구분선", loc, f"{where}에 구분선이 {len(gap)}개 겹쳐 있습니다. 하나만 두세요.")
            div_bad += 1
    stray = [i for i in div_idx if i not in div_used]
    if stray:
        err("구분선", "전체", f"섹션 제목 앞이 아닌 곳에 구분선이 {len(stray)}개 있습니다(섹션 안·리드 앞·'숫자의 출처' 뒤 등). "
            "'숫자의 출처' 뒤 구분선은 엔딩과 함께 Ghost에서 붙입니다.")
        div_bad += 1
    if h3_all and not div_bad:
        passed.append(f"구분선 {len(div_idx)}개: 리드 뒤와 섹션 제목 앞마다 1개씩")

    # ---------- 5. 섹션 분해 ----------
    h3_idx = [i for i, l in enumerate(lines) if l.startswith("### ")]
    sections = []
    for k, i in enumerate(h3_idx):
        end = h3_idx[k + 1] if k + 1 < len(h3_idx) else len(lines)
        sections.append({"title": norm(lines[i][4:]), "lines": lines[i + 1:end], "raw": raw_lines[i + 1:end]})
    titles = [s["title"] for s in sections]

    for t in titles:
        if t in RETIRED_SECTIONS:
            fix = "'숫자의 출처'로 이름을 바꾸세요." if t == "출처" else "폐지된 블록입니다. '우리는 묻습니다'에 통합하거나 삭제하세요."
            err("폐지된 구조", f"### {t}", fix)
    if titles[-2:] != REQUIRED_TAIL:
        err("필수 구조", "끝", f"마지막 두 섹션은 '### 우리는 묻습니다' → '### 숫자의 출처' 순이어야 합니다. 현재: {titles[-2:]}")
    else:
        passed.append("'우리는 묻습니다' → '숫자의 출처' 순서 확인")

    content = [s for s in sections if s["title"] not in REQUIRED_TAIL and s["title"] not in RETIRED_SECTIONS]
    if not 2 <= len(content) <= 3:
        err("본문 섹션 수", "본문", f"본문 섹션 {len(content)}개 (2~3개).")
    else:
        passed.append(f"본문 섹션 {len(content)}개")

    # ---------- 6. 섹션 제목 형식 ----------
    myth_check = len(content) >= 2 and all(s["title"].endswith("?") for s in content)   # v11 통념 확인 호
    if myth_check:
        passed.append("통념 확인 호: 본문 섹션 제목이 모두 질문형(섹션의 결론은 볼드 문장이 맡는다)")
    for n, s in enumerate(content):
        t = s["title"]
        if t.endswith("?") and n != len(content) - 1 and not myth_check:
            err("섹션 제목", f"### {t}", "질문형 제목은 마지막 본문 섹션에만 허용됩니다(본문 섹션 제목이 모두 흔히 쓰는 말 + ?인 통념 확인 호는 예외).")
        if re.search(r"\d[\d,.]*\s*(%|명|세|원|건|배|년|㎡)$", t):
            warn("섹션 제목", f"### {t}", "'지표명 + 수치'로 끝나는 옛 형식입니다. 결론 문장(평서문)으로 바꾸세요.")
        if len(numbers_in(t)) > 1:
            warn("섹션 제목", f"### {t}", "제목에 핵심 수치가 2개 이상입니다. 제목의 숫자는 1개 이내.")
        if len(t) < 6:
            warn("섹션 제목", f"### {t}", "제목이 너무 짧습니다. 섹션의 결론을 한 문장으로 적으세요.")

    # ---------- 7. 섹션 본문: 문단 수, 볼드, 차트, 마지막 문장, 독자 등장 ----------
    total_charts = 1 if lead_chart_i is not None else 0
    n_support = 0
    body_paras = list(lead_paras)
    section_paras = []

    def check_para_length(paras, label):
        for p in paras:
            n = len(p.replace("**", ""))
            if n > BODY_PARA_MAX:
                warn("문단 길이", label, f"{n}자 문단(모바일 약 {-(-n // MOBILE_CPL)}줄)이 있습니다: '{p.replace('**', '')[:16]}…' "
                     f"— {BODY_PARA_MAX}자(약 9줄) 안에서 생각이 바뀌는 곳을 찾아 나누세요.")

    for s in content:
        label = f"### {s['title']}"
        paras = split_paragraphs(s["lines"])
        body_paras.extend(paras)
        section_paras.extend(paras)
        check_para_length(paras, label)
        charts = [l.strip() for l in s["lines"] if CHART_PATTERN.match(l.strip())]
        support = [c for c in charts if SUPPORT_CHART in c]
        other = [c for c in charts if SUPPORT_CHART not in c]
        n_support += len(support)
        total_charts += len(charts)
        if other:
            err("차트", label, f"본문 섹션에 '보조 차트' 표기가 없는 차트 지시어 {len(other)}개. 본문 차트는 "
                "[차트 삽입: 보조 차트 — ...]로 쓰고, 리드 차트는 제목 바로 아래 한 장뿐입니다(지침 2장 4).")
        if not 2 <= len(paras) <= 3:
            warn("섹션 문단 수", label, f"문단 {len(paras)}개 (권장 2~3문단. 한 줄 문단은 허용).")
        bolds = BOLD_PATTERN.findall("\n".join(s["lines"]))
        if len(bolds) != 1:
            (err if len(bolds) == 0 else warn)("섹션 볼드", label, f"볼드 문장 {len(bolds)}개 (섹션당 정확히 1개, 독자가 기억할 문장).")
        if bolds:
            sec_text = "\n".join(s["lines"])
            tail = sec_text[sec_text.rfind(bolds[-1]) + len(bolds[-1]):]
            tail_has_sentence = bool(re.search(r"[가-힣][^\n]*[.?!]", tail))
            tail_has_chart = any(CHART_PATTERN.match(l.strip()) for l in tail.splitlines())
            if not (tail_has_sentence or tail_has_chart):
                warn("섹션 볼드", label, "볼드 문장이 섹션의 마지막 문장입니다. 뒤에 숫자 없는 문장을 한 줄 두세요.")
        if paras:
            last_sents = sentences(re.sub(r"\*\*", "", paras[-1]))
            if last_sents and re.search(r"\d", last_sents[-1]):
                warn("섹션 끝 문장", label, "섹션의 마지막 문장에 숫자가 있습니다. 숫자 없는 문장으로 숨을 쉬게 하세요.")
    metrics["본문_보조차트"] = n_support
    if lead_chart_i is not None and not any(i["check"] == "차트" for i in issues):
        passed.append("차트: 리드 차트 1장" + (f", 본문 보조 차트 {n_support}장" if n_support else ""))

    # ---------- 8. 우리는 묻습니다 ----------
    ask = next((s for s in sections if s["title"] == "우리는 묻습니다"), None)
    if ask:
        paras = split_paragraphs(ask["lines"])
        body_paras.extend(paras)
        section_paras.extend(paras)
        check_para_length(paras, "### 우리는 묻습니다")
        if len(paras) != 2:
            warn("우리는 묻습니다", "끝", f"문단 {len(paras)}개 (나 → 우리, 2문단 권장. 판정 문장은 2026-10-30에 폐지).")
        if not paras or not paras[-1].rstrip().endswith("?"):
            err("우리는 묻습니다", "끝", "마지막 문장이 질문(?)으로 끝나야 합니다.")
        joined = " ".join(paras)
        if re.search(r"\d+월|분기|발표", joined) and re.search(r"뜻(입니다|이다|이고)|신호", joined):
            warn("우리는 묻습니다", "끝", "판정 문장('○월에 나오는 ○○가 ○○면 ○○라는 뜻')으로 보이는 문장이 있습니다. "
                 "2026-10-30부터 쓰지 않습니다. 독자의 삶에 닿는 문단과 질문만 남기세요.")
        if paras and re.search(r"\d", paras[0]) is None:
            warn("우리는 묻습니다", "끝", "첫 문단(독자의 삶)에 수치가 없습니다. 독자 단위로 체감되는 숫자 하나를 쓰세요.")
        if not any(i["check"] == "우리는 묻습니다" for i in issues):
            passed.append("'우리는 묻습니다' 구성 확인")

    # ---------- 9. 숫자의 출처 ----------
    src = next((s for s in sections if s["title"] == "숫자의 출처"), None)
    if src:
        src_lines = [l.strip() for l in src["lines"] if l.strip() and l.strip() != "---"]  # 구분선은 4번에서 따로 본다
        bullets = [l for l in src_lines if l.startswith(("- ", "* "))]
        prose = [l for l in src_lines if not l.startswith(("- ", "* ")) and not any(e in l for e in OLD_ENDINGS)]
        if prose:
            err("숫자의 출처", "끝", "불릿('- ')이 아닌 줄이 있습니다. '숫자의 출처'는 항목별 불릿 목록으로 씁니다.")
        if not bullets or not re.match(r"^[-*] 원문: .+?, <.+?>, .*?\d{4}년 \d{1,2}월 \d{1,2}일", bullets[0]):
            err("숫자의 출처", "끝", "첫 불릿은 '- 원문: [기관], <공식 명칭>, [YYYY년 M월 D일] 발표' 형식이어야 합니다.")
        else:
            passed.append("'숫자의 출처' 첫 불릿(원문) 형식 확인")
        if not SOURCE_BULLETS[0] <= len(bullets) <= SOURCE_BULLETS[1]:
            warn("숫자의 출처", "끝", f"불릿 {len(bullets)}개 (권장 {SOURCE_BULLETS[0]}~{SOURCE_BULLETS[1]}개: 원문 / 함께 본 자료 / 지표 정의 / 어림한 값 / 인용 조건 / 관련 글).")
        long_b = [b for b in bullets if len(b.split()) > 45]
        if long_b:
            warn("숫자의 출처", "끝", f"45어절을 넘는 불릿이 {len(long_b)}개 있습니다. 정의는 한 불릿에 하나씩 짧게.")

        # ----- 9-1. 출처 링크 (2026-10-18 지침 2장 10) -----
        raw_bullets = [l.strip() for l in src["raw"] if l.strip().startswith(("- ", "* "))]
        n_links = sum(count_links(b)[0] for b in raw_bullets)
        metrics["출처_링크수"] = n_links
        for key in ("원문:", "함께 본 자료:"):
            b = next((x for x in raw_bullets if x[2:].startswith(key)), None)
            if b and not LINK_PATTERN.search(b):
                warn("출처 링크", "끝", f"'{key[:-1]}' 불릿에 링크가 없습니다. 꺾쇠까지 포함한 공식 명칭에 원문 페이지 링크를 거세요(지침 2장 10).")
        pending = sum(b.count("링크 확인 필요") for b in raw_bullets)
        if pending:
            warn("출처 링크", "끝", f"'(링크 확인 필요)'가 {pending}곳 남아 있습니다. 발행 전에 직접 열어 확인한 링크로 채우세요.")
        bare = sum(count_links(b)[1] for b in raw_bullets)
        if bare:
            warn("출처 링크", "끝", f"글자에 걸지 않은 주소가 {bare}곳 있습니다. 공식 명칭이나 글 제목에 링크를 거세요.")
        unescaped = [m.group(1) for b in raw_bullets for m in LINK_PATTERN.finditer(b)
                     if re.search(r"(?<!\\)[<>]", m.group(1))]
        if unescaped:
            warn("출처 링크", "끝", f"링크 글자의 꺾쇠가 이스케이프되지 않은 곳이 {len(unescaped)}곳 있습니다. "
                 "채팅에서 꺾쇠가 사라질 수 있으니 [\\<공식 명칭\\>](주소)처럼 적으세요.")
        if not any(i["check"] == "출처 링크" for i in issues):
            passed.append(f"'숫자의 출처' 링크 {n_links}개 (원문·함께 본 자료 링크 확인)")

        # ----- 9-2. 본문 초반의 출처 언급 -----
        m = re.match(r"^[-*] 원문:\s*([^,]+),", bullets[0]) if bullets else None
        if m:
            orgs = [o.strip() for o in re.split(r"[·/]", m.group(1)) if o.strip()]
            keys = set(orgs) | {o.split()[0] for o in orgs if len(o.split()[0]) >= 2}
            first_sec = split_paragraphs(content[0]["lines"]) if content else []
            early = " ".join(lead_paras) + " " + (first_sec[0] if first_sec else "")
            if not any(k in early for k in keys):
                warn("출처 언급", "머리", f"리드나 첫 섹션 첫 문단에 원문 기관({', '.join(orgs)})이 나오지 않습니다. "
                     "본문 초반에 기관과 자료 이름을 한 번 간략히 밝히세요(지침 2장 10).")
            else:
                passed.append("본문 초반에 원문 기관 언급")

    # ---------- 9-3. 본문 링크 (구체적인 출처와 링크는 '숫자의 출처'에만) ----------
    src_h3 = next((i for i, l in enumerate(lines) if l.startswith("### ") and norm(l[4:]) == "숫자의 출처"), len(lines))
    start = title_idx + 1 if title_idx >= 0 else 0
    body_raw = [l for l in raw_lines[start:src_h3] if not CHART_PATTERN.match(l.strip())]
    n_body_links = sum(sum(count_links(l)) for l in body_raw)
    if n_body_links:
        warn("본문 링크", "본문", f"본문에 링크가 {n_body_links}개 있습니다. 구체적인 출처와 링크는 '숫자의 출처'에만 둡니다(지침 2장 10).")
    else:
        passed.append("본문에 링크 없음")

    # ---------- 10. 엔딩 ----------
    if any(e in body for e in OLD_ENDINGS):
        warn("엔딩", "끝", "엔딩 문구('사유의 도구'·구독 안내)가 초안에 들어 있습니다. 엔딩은 사용자가 Ghost에서 직접 붙이므로 초안은 '숫자의 출처'로 끝냅니다.")
    else:
        passed.append("초안이 '숫자의 출처'로 끝남 (엔딩은 사용자 삽입)")

    # ---------- 11. 금지 표현·메타 라벨·차트 지시어·이모지 ----------
    for ph in BANNED_SELF_REF:
        if ph in body:
            warn("금지 표현", "전체", f"'{ph}' 발견")
    for ph in BANNED_META_LABELS:
        if ph in body:
            err("메타 라벨", "전체", f"'{ph}' 발견 — 글의 구조를 글 안에서 설명하지 않습니다.")
    for ph in BANNED_CHART_REFS:
        if ph in body:
            err("차트 지시어", "전체", f"'{ph}' 발견 — [차트 삽입: ...] 형태로 교체")
    em = set(EMOJI_PATTERN.findall(body))
    if em:
        err("이모지", "전체", f"이모지 발견: {' '.join(em)}")
    for name, check in [("금지된 자화자찬 표현 없음", "금지 표현"), ("메타 라벨 없음", "메타 라벨"),
                        ("금지된 차트 지시어 없음", "차트 지시어"), ("이모지 없음", "이모지")]:
        if not any(i["check"] == check for i in issues):
            passed.append(name)

    # ---------- 12. 가독성 지표 (숫자 예산·독자·질문) ----------
    plain = " ".join(re.sub(r"\*\*", "", p) for p in body_paras)
    words = plain.split()
    n_words = len(words)
    core = numbers_in(plain)
    sents = sentences(plain)
    digit_sents = sum(1 for s in sents if re.search(r"\d", s))
    density = round(len(core) / n_words * 100, 1) if n_words else 0.0
    pct_digit = round(digit_sents / len(sents) * 100) if sents else 0
    n_q = plain.count("?")
    n_reader = len(READER_PATTERN.findall(plain))
    metrics.update({"어절": n_words, "핵심수치_총량": len(core), "핵심수치_100어절당": density,
                    "숫자든문장_비율%": pct_digit, "문장수": len(sents), "물음표": n_q, "독자등장": n_reader,
                    "목표": {"핵심수치_100어절당": f"≤{DENSITY_TARGET} (경고 >{DENSITY_WARN})",
                             "숫자든문장_비율%": f"≤{DIGIT_SENT_TARGET} (경고 >{DIGIT_SENT_WARN})",
                             "물음표": f"≥{MIN_QUESTIONS}", "핵심수치_총량": f"경고 >{TOTAL_CORE_WARN}"}})
    if density > DENSITY_WARN:
        warn("숫자 예산", "전체", f"핵심 수치가 100어절당 {density}개입니다 (목표 {DENSITY_TARGET} 이하). 숫자를 줄이고 인과 설명을 남기세요.")
    if pct_digit > DIGIT_SENT_WARN:
        warn("숫자 예산", "전체", f"숫자가 든 문장이 {pct_digit}%입니다 (목표 {DIGIT_SENT_TARGET}% 이하). 숫자 없는 문장으로 숨을 쉬게 하세요.")
    if len(core) > TOTAL_CORE_WARN:
        warn("숫자 예산", "전체", f"핵심 수치 총량 {len(core)}개 (경고 기준 {TOTAL_CORE_WARN}). 한 글을 드는 숫자 하나를 정하고 나머지를 덜어내세요.")
    if n_q < MIN_QUESTIONS:
        warn("질문", "전체", f"물음표 {n_q}개 (글 전체 {MIN_QUESTIONS}개 이상, '우리는 묻습니다' 포함).")
    if n_reader < 2:
        warn("독자 등장", "전체", f"독자에게 말을 거는 문장이 {n_reader}개입니다 (당신·여러분·'~라면'·'~까요?' 등, 글 전체 2개 이상). 문단 끝에 기계적으로 붙이지 말고 장면 안에 두세요.")
    # 리듬: 문장 길이, 짧은 문장 연속, 'A가 아니라 B'
    lens = [len(x.split()) for x in sents]
    avg_len = round(sum(lens) / len(lens), 1) if lens else 0
    has_d = [bool(re.search(r"\d", x)) for x in sents]
    short_runs = sum(1 for i in range(len(lens) - 1)
                     if lens[i] <= 8 and lens[i + 1] <= 8 and has_d[i] and has_d[i + 1])
    anira = len(re.findall(r"(?:이|가|게|건|것이|라기)\s*아니라", plain))
    metrics.update({"평균_문장_어절": avg_len, "짧은문장_연속": short_runs, "아니라_구문": anira,
                    "리듬_목표": {"평균_문장_어절": f"{AVG_SENT_TARGET} 안팎 (경고 <{AVG_SENT_WARN})", "짧은문장_연속": f"경고 ≥{SHORT_RUN_WARN}", "아니라_구문": f"경고 ≥{ANIRA_WARN}"}})
    if avg_len and avg_len < AVG_SENT_WARN:
        warn("리듬", "전체", f"평균 문장 길이가 {avg_len}어절입니다 (목표 {AVG_SENT_TARGET} 안팎). 문장이 툭툭 끊깁니다. 앞 문장의 꼬리를 물어 이어 쓰세요.")
    if short_runs >= SHORT_RUN_WARN:
        warn("리듬", "전체", f"숫자가 든 8어절 이하 문장이 연달아 나오는 곳이 {short_runs}군데입니다. 숫자 하나를 말하고 끊는 짧은 단정문을 연속으로 두지 말고, 앞뒤 문장과 이어 쓰세요.")
    if anira >= ANIRA_WARN:
        warn("리듬", "전체", f"'A가 아니라 B' 구문이 {anira}번입니다. 한 편에 한 번이면 충분합니다.")
    if not any(i["check"] == "리듬" for i in issues):
        passed.append(f"리듬 통과: 평균 {avg_len}어절, 짧은 문장 연속 {short_runs}, 아니라 {anira}")
    if not any(i["check"] == "숫자 예산" for i in issues):
        passed.append(f"숫자 예산 통과: 100어절당 {density}개, 숫자 든 문장 {pct_digit}%")
    # 모바일 문단 길이
    lead_max = max((len(p.replace("**", "")) for p in lead_paras), default=0)
    body_max = max((len(p.replace("**", "")) for p in section_paras), default=0)
    metrics.update({"리드_문단수": len(lead_paras), "리드_최장문단_자": lead_max, "본문_최장문단_자": body_max,
                    "문단_목표": {"리드_최장문단_자": f"110 안팎 (경고 >{LEAD_PARA_MAX}, 모바일 한 줄 약 {MOBILE_CPL}자)",
                                "본문_최장문단_자": f"경고 >{BODY_PARA_MAX} (모바일 약 9줄)", "리드_문단수": "2~3"}})
    if not any(i["check"] == "문단 길이" for i in issues):
        passed.append(f"모바일 문단 길이 통과: 리드 최장 {lead_max}자, 본문 최장 {body_max}자")

    print(json.dumps({"passed": passed, "metrics": metrics, "issues": issues}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
```