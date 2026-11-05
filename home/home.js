/* Wednesdata home (www.wednesdata.com).
   The Ghost "Home" page holds one HTML card: <div id="wednesdata-home"> with the subscribe form inside it, and this
   script. Portal binds that form when the page loads, so the form has to be in the page from the start.
   This script loads home.html from the folder it was itself loaded from, moves the form into the hero, then fills
   the latest issue and the four before it from /featured/rss/ (Featured posts whose primary tag is 뉴스레터, as set
   in routes.yaml). If home.html cannot be loaded, a short fallback with the form and two links is shown instead;
   if the feed cannot be read, the issues written in home.html stay. */
(function () {
  var root = document.getElementById('wednesdata-home');
  if (!root) return;

  var me = document.currentScript;
  var base = me && me.src ? me.src.replace(/[^\/]*$/, '') : 'https://yehwanhwang.github.io/wednesdata/home/';
  var form = root.querySelector('form[data-members-form]');
  var fallback =
    '<section class="wd-hero"><div class="wd-in">' +
    '<p class="wd-eyebrow">매주 수요일 아침 6시, 메일 한 통</p>' +
    '<div class="wd-signup" data-signup></div>' +
    '<p class="wd-fallback"><a href="/blog/">전체 글 보기</a> · <a href="/contact-us/">협업 문의</a></p>' +
    '</div></section>';

  if (!window.fetch) { show(fallback); return; }

  fetch(base + 'home.html', { cache: 'no-cache' })
    .then(function (r) { return r.ok ? r.text() : Promise.reject(r.status); })
    .then(function (html) { show(html); fillIssues(); })
    .catch(function () { show(fallback); });

  function show(html) {
    // Setting innerHTML detaches the form, but the element (and Portal's listener on it) is kept in `form`
    root.innerHTML = html;
    var slot = root.querySelector('[data-signup]');
    if (form) (slot || root).appendChild(form);
    root.setAttribute('data-ready', '');
    if (location.hash && location.hash.indexOf('#/') !== 0) {
      var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target) target.scrollIntoView();
    }
  }

  function fillIssues() {
    if (!window.DOMParser) return;
    fetch('/featured/rss/')
      .then(function (r) { return r.ok ? r.text() : Promise.reject(r.status); })
      .then(function (text) {
        var xml = new DOMParser().parseFromString(text, 'text/xml');
        var items = Array.prototype.slice.call(xml.getElementsByTagName('item'), 0, 5).map(read).filter(Boolean);
        if (!items.length) return;
        fillLatest(root.querySelector('[data-latest]'), items[0]);
        if (items.length > 1) fillList(root.querySelector('[data-issues]'), items.slice(1));
      })
      .catch(function () {});
  }

  // One RSS item: titles are "문장형 제목: 공식 데이터명", so the part after the last ": " becomes the data name
  function read(item) {
    var link = childText(item, 'link');
    var title = childText(item, 'title');
    if (!link || !title) return null;
    var cut = title.lastIndexOf(': ');
    var media = item.getElementsByTagNameNS('http://search.yahoo.com/mrss/', 'content')[0];
    var date = new Date(childText(item, 'pubDate'));
    return {
      href: link,
      title: cut > 0 ? title.slice(0, cut) : title,
      data: cut > 0 ? title.slice(cut + 2) : '',
      image: media ? media.getAttribute('url') || '' : '',
      date: isNaN(date.getTime()) ? null : date
    };
  }

  function fillLatest(box, it) {
    if (!box) return;
    var links = box.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) links[i].href = it.href;
    var frame = box.querySelector('.wd-latest-img');
    if (frame) { frame.innerHTML = ''; frame.appendChild(picture(it, 960, 'eager')); }
    setText(box.querySelector('.wd-latest-title'), it.title);
    setText(box.querySelector('.wd-latest-data'), it.data);
    var pen = box.querySelector('.wd-pen');
    var day = it.date && kst(it.date);
    if (pen && day) {
      pen.innerHTML = '';
      var d = document.createElement('span');
      d.className = 'wd-pen-date';
      d.textContent = day.month + '월 ' + day.day + '일';
      pen.appendChild(d);
      pen.appendChild(document.createTextNode(' ' + day.weekday + '에 보낸 차트'));
    }
  }

  function fillList(box, items) {
    if (!box) return;
    var cards = items.slice(0, 4).map(card);
    box.innerHTML = '';
    cards.forEach(function (c) { box.appendChild(c); });
  }

  function card(it) {
    var a = document.createElement('a');
    a.className = 'wd-issue';
    a.href = it.href;
    a.appendChild(picture(it, 600, 'lazy'));
    var day = it.date && kst(it.date);
    var now = kst(new Date());
    if (day) a.appendChild(span('wd-issue-date', (now && day.year !== now.year ? day.year + '년 ' : '') + day.month + '월 ' + day.day + '일'));
    a.appendChild(span('wd-issue-title', it.title));
    if (it.data) a.appendChild(span('wd-issue-data', it.data));
    return a;
  }

  // The feature image at the width it is shown, from Ghost's resized copies; the original if that copy fails
  function picture(it, width, loading) {
    if (!it.image) return span('wd-noimg', it.data || it.title);
    var img = document.createElement('img');
    img.width = width;
    img.height = Math.round(width * 4 / 3);
    img.alt = '';
    img.loading = loading;
    img.onerror = function () { img.onerror = null; if (img.src !== it.image) img.src = it.image; };
    img.src = sized(it.image, width);
    return img;
  }

  function sized(url, width) {
    if (/\/content\/images\/(?!size\/)/.test(url) && !/\.svg(\?|$)/i.test(url)) {
      return url.replace('/content/images/', '/content/images/size/w' + width + '/format/webp/');
    }
    if (/^https:\/\/images\.unsplash\.com\//.test(url)) return url.replace(/([?&])w=\d+/, '$1w=' + width);
    return url;
  }

  // Year, month, day and weekday of a date in Korean time (posts go out at 06:00 KST, 21:00 UTC the day before)
  function kst(date) {
    var out = {};
    try {
      new Intl.DateTimeFormat('ko-KR', { timeZone: 'Asia/Seoul', year: 'numeric', month: 'numeric', day: 'numeric', weekday: 'long' })
        .formatToParts(date)
        .forEach(function (p) { out[p.type] = p.value; });
    } catch (e) { return null; }
    return out.month && out.day ? out : null;
  }

  function childText(item, tag) {
    var el = item.getElementsByTagName(tag)[0];
    return el ? el.textContent.trim() : '';
  }

  function span(cls, text) {
    var s = document.createElement('span');
    s.className = cls;
    s.textContent = text;
    return s;
  }

  function setText(el, text) {
    if (el) el.textContent = text;
  }
})();
