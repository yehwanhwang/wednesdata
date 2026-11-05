# 웬즈데이터 홈

www.wednesdata.com 첫 화면입니다. 내용은 Ghost가 아니라 여기에 두어, Ghost 페이지를 고치지 않고 커밋 하나로 바꿀 수 있습니다.

| 파일 | 내용 |
|---|---|
| `home.html` | 홈 본문(히어로, 최근 발행, 글은 이렇게 씁니다, 뉴스레터 밖에도, 협업) |
| `home.css` | 스타일. 모두 `#wednesdata-home` 아래로 한정하고, Ghost 페이지 틀(제목 숨김, 전체 폭, 메뉴 아래 선)만 따로 덮어씁니다 |
| `home.js` | `home.html`을 불러와 넣고, 구독 폼을 히어로로 옮기고, `/featured/rss/`로 최신 호와 그 앞 네 호를 채웁니다 |

이 파일들은 Ghost 페이지가 주소로 불러 씁니다. 옮기거나 이름을 바꾸려면 Ghost Home 페이지도 함께 고치세요.
정적 이미지는 없습니다. 차트는 모두 Ghost에 올린 리드 차트를 RSS로 받아 씁니다.

## Ghost에서 쓰는 방법

slug가 `home`인 Ghost 페이지(제목·대표 이미지 표시 끔)에 HTML 카드 하나만 둡니다.

```html
<link rel="stylesheet" href="https://yehwanhwang.github.io/wednesdata/home/home.css">
<div id="wednesdata-home" data-lang="ko">
<form class="wd-form" data-members-form>
<div class="wd-form-row">
<input class="wd-input" type="email" name="email" placeholder="이메일 주소" aria-label="이메일 주소" autocomplete="email" required data-members-email>
<button class="wd-btn wd-btn-accent" type="submit"><span class="wd-btn-idle">무료로 구독하기</span><span class="wd-btn-busy">보내는 중…</span></button>
</div>
<p class="wd-form-note">언제든 해지할 수 있습니다</p>
<p class="wd-form-success">메일함을 확인해 주세요. 가입을 마치는 링크를 보냈습니다.</p>
<p class="wd-form-error" data-members-error></p>
</form>
</div>
<script src="https://yehwanhwang.github.io/wednesdata/home/home.js" defer></script>
```

구독 폼은 이 카드 안에 있어야 합니다. Ghost의 Portal은 페이지가 처음 열릴 때 있던 `data-members-form` 폼에만 가입 처리를 붙이므로, 나중에 `home.html`로 넣은 폼은 작동하지 않습니다. `home.js`는 이 폼을 지우지 않고 히어로의 `[data-signup]` 자리로 옮깁니다. 폼 문구를 바꾸려면 Ghost Home 페이지를 고치세요.

`routes.yaml`은 루트 주소를 이 페이지로 연결합니다. 주소는 `/` 그대로이고 `/home/`은 `/`로 넘어갑니다.

```yaml
routes:
  /:
    data: page.home
    template: page
  /blog/:
    controller: channel
    filter: tag:-data
  /featured/:
    controller: channel
    filter: 'featured:true+primary_tag:newsletter'
  /newsletter/:
    controller: channel
    filter: tag:newsletter
    data: tag.newsletter
    template: tag
  /note/:
    controller: channel
    filter: tag:note
    data: tag.note
    template: tag

collections:
  /:
    permalink: /{slug}/
    template: index
    filter: tag:-data
  /data/:
    permalink: /data/{slug}/
    template: tag
    filter: tag:data
    data: tag.data

taxonomies:
  tag: /tag/{slug}/
  author: /author/{slug}/
```

- `/blog/`: 전체 글 목록(데이터 글 제외). `home.html`을 못 불러올 때 나오는 "전체 글 보기"가 엽니다.
- `/featured/`: Featured를 켠 뉴스레터(매주 발행호). `home.js`가 이 RSS의 첫 글을 히어로에, 다음 네 글을 최근 발행에 씁니다. **새 호는 지금처럼 Featured를 켜야 홈에 올라갑니다.** 곁글은 Featured를 끄면 홈에 나오지 않습니다.
- `/newsletter/`, `/note/`, `/data/`: 태그 제목과 설명이 나오는 목록이고, `/tag/newsletter/` 같은 태그 주소는 이리로 넘어갑니다.

피드를 못 읽으면 `home.html`에 적어 둔 호가 그대로 보입니다. 가끔 최신 호로 바꿔 두세요.
