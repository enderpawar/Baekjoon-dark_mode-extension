// 다크모드 CSS
const darkModeCSS = `
/* 백준 온라인 저지 다크모드 - 개선 버전 */

/* ===== 기본 설정 ===== */
* {
  border-color: #30363d !important;
}

html {
  background-color: #0d1117 !important;
}

body {
  background-color: #0d1117 !important;
  color: #c9d1d9 !important;
}

body * {
  color: #c9d1d9 !important;
}

/* 모든 요소의 배경색을 다크로 강제 변경 */
div, section, article, aside, header, main, footer, nav {
  background-color: #0d1117 !important;
}

/* 패널과 카드 스타일 요소만 약간 밝게 */
.panel, .card, .well, .jumbotron {
  background-color: #161b22 !important;
}

/* 흰색/밝은 배경 강제 제거 */
[style*="background-color: white"],
[style*="background-color: #fff"],
[style*="background-color: #ffffff"],
[style*="background-color: rgb(255, 255, 255)"],
[style*="background: white"],
[style*="background: #fff"],
[style*="background: #ffffff"],
[class*="bg-white"],
[class*="background-white"] {
  background-color: #0d1117 !important;
  background: #0d1117 !important;
}

/* ===== 네비게이션 바 ===== */
#navbar, .navbar, nav, .navbar-default {
  background-color: #161b22 !important;
  border-color: #30363d !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3) !important;
}

#navbar a, .navbar a, nav a, .navbar-nav > li > a {
  color: #c9d1d9 !important;
  transition: all 0.2s ease !important;
}

#navbar a:hover, .navbar a:hover, nav a:hover, .navbar-nav > li > a:hover {
  color: #58a6ff !important;
  background-color: #21262d !important;
}

.navbar-brand {
  color: #58a6ff !important;
  font-weight: 600 !important;
}

/* ===== 드롭다운 메뉴 ===== */
.dropdown-menu {
  background-color: #161b22 !important;
  border: 1px solid #30363d !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5) !important;
}

.dropdown-menu > li > a {
  color: #c9d1d9 !important;
}

.dropdown-menu > li > a:hover,
.dropdown-menu > li > a:focus {
  background-color: #21262d !important;
  color: #58a6ff !important;
}

.dropdown-menu .divider {
  background-color: #30363d !important;
}

/* ===== 메인 컨테이너 ===== */
.container, .container-fluid {
  background-color: #0d1117 !important;
}

/* ===== 패널 및 카드 ===== */
.panel, .card, .panel-default {
  background-color: #161b22 !important;
  border: 1px solid #30363d !important;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) !important;
}

.panel-heading, .card-header, .panel-default > .panel-heading {
  background: linear-gradient(180deg, #1c2128 0%, #161b22 100%) !important;
  border-bottom: 1px solid #30363d !important;
  color: #c9d1d9 !important;
  font-weight: 600 !important;
}

.panel-body, .card-body {
  background-color: #161b22 !important;
  color: #c9d1d9 !important;
}

.panel-footer, .card-footer {
  background-color: #0d1117 !important;
  border-top: 1px solid #30363d !important;
  color: #8b949e !important;
}

/* ===== 테이블 ===== */
table, .table {
  background-color: #0d1117 !important;
  color: #c9d1d9 !important;
  border-color: #30363d !important;
}

table thead, .table thead {
  background: linear-gradient(180deg, #21262d 0%, #1c2128 100%) !important;
  border-bottom: 2px solid #30363d !important;
}

table thead th, .table thead th {
  color: #c9d1d9 !important;
  border-color: #30363d !important;
  font-weight: 600 !important;
  background-color: #1c2128 !important;
}

/* 모든 테이블 행과 셀 배경 강제 적용 */
table tbody tr, .table tbody tr,
table tr, .table tr,
.table-striped tbody tr,
.table-striped > tbody > tr {
  background-color: #0d1117 !important;
  border-color: #30363d !important;
  transition: background-color 0.2s ease !important;
}

table tbody tr:hover, .table tbody tr:hover,
table tr:hover, .table tr:hover {
  background-color: #161b22 !important;
}

/* 홀수/짝수 행 모두 같은 배경색으로 강제 */
table tbody tr:nth-child(even), 
table tbody tr:nth-child(odd),
.table tbody tr:nth-child(even),
.table tbody tr:nth-child(odd),
.table-striped > tbody > tr:nth-child(odd),
.table-striped > tbody > tr:nth-child(even) {
  background-color: #0d1117 !important;
}

table tbody tr:nth-child(even):hover,
table tbody tr:nth-child(odd):hover {
  background-color: #161b22 !important;
}

/* 모든 td, th 배경 제거 - 최고 우선순위 */
th, td,
table th, table td,
.table th, .table td,
.table > thead > tr > th,
.table > tbody > tr > th,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > tbody > tr > td,
.table > tfoot > tr > td {
  color: #c9d1d9 !important;
  border-color: #30363d !important;
  background-color: transparent !important;
  background-image: none !important;
}

/* 테이블 셀의 배경색 강제 제거 - bootstrap 오버라이드 */
/* 선택자 특정성을 최대한 높여서 Bootstrap CSS 덮어쓰기 */
table.table.table-striped > tbody > tr:nth-child(odd) > td,
table.table.table-striped > tbody > tr:nth-child(odd) > th,
table.table.table-striped > tbody > tr:nth-child(even) > td,
table.table.table-striped > tbody > tr:nth-child(even) > th,
table.table-striped > tbody > tr:nth-child(odd) > td,
table.table-striped > tbody > tr:nth-child(odd) > th,
table.table-striped > tbody > tr:nth-child(even) > td,
table.table-striped > tbody > tr:nth-child(even) > th,
.table.table-striped > tbody > tr:nth-child(odd) > td,
.table.table-striped > tbody > tr:nth-child(odd) > th,
.table.table-striped > tbody > tr:nth-child(even) > td,
.table.table-striped > tbody > tr:nth-child(even) > th,
.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th,
.table-striped > tbody > tr:nth-child(even) > td,
.table-striped > tbody > tr:nth-child(even) > th,
.table-striped > tbody > tr:nth-of-type(odd) > td,
.table-striped > tbody > tr:nth-of-type(odd) > th,
.table-striped > tbody > tr:nth-of-type(even) > td,
.table-striped > tbody > tr:nth-of-type(even) > th,
.table-bordered > thead > tr > th,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > tbody > tr > td,
.table-bordered > tfoot > tr > td {
  background-color: transparent !important;
  background-image: none !important;
  background: transparent !important;
}

/* 추가로 인라인 스타일도 무시 */
table td[style],
table th[style],
.table td[style],
.table th[style] {
  background-color: transparent !important;
  background: transparent !important;
}

/* td와 th의 모든 배경 스타일 제거 */
td[style*="background"],
th[style*="background"],
tr[style*="background"] {
  background-color: #0d1117 !important;
  background: #0d1117 !important;
}

/* ===== 입력 필드 ===== */
input[type="text"], 
input[type="password"], 
input[type="email"],
input[type="number"],
input[type="search"],
textarea, 
select,
.form-control {
  background-color: #0d1117 !important;
  color: #c9d1d9 !important;
  border: 1px solid #30363d !important;
  transition: all 0.2s ease !important;
}

input:focus, 
textarea:focus, 
select:focus,
.form-control:focus {
  background-color: #0d1117 !important;
  color: #c9d1d9 !important;
  border-color: #58a6ff !important;
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1) !important;
  outline: none !important;
}

/* ===== 버튼 ===== */
.btn-default {
  background: linear-gradient(180deg, #21262d 0%, #1c2128 100%) !important;
  color: #c9d1d9 !important;
  border: 1px solid #30363d !important;
  transition: all 0.2s ease !important;
}

.btn-default:hover,
.btn-default:focus {
  background: linear-gradient(180deg, #30363d 0%, #21262d 100%) !important;
  color: #ffffff !important;
  border-color: #58a6ff !important;
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.1) !important;
}

.btn-primary {
  background: linear-gradient(135deg, #1f6feb 0%, #58a6ff 100%) !important;
  border: none !important;
  color: #ffffff !important;
  font-weight: 600 !important;
  transition: all 0.2s ease !important;
}

.btn-primary:hover,
.btn-primary:focus {
  background: linear-gradient(135deg, #58a6ff 0%, #79c0ff 100%) !important;
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.2) !important;
  transform: translateY(-1px) !important;
}

.btn-success {
  background: linear-gradient(135deg, #238636 0%, #2ea043 100%) !important;
  border: none !important;
  color: #ffffff !important;
}

.btn-danger {
  background: linear-gradient(135deg, #da3633 0%, #f85149 100%) !important;
  border: none !important;
  color: #ffffff !important;
}

.btn-warning {
  background: linear-gradient(135deg, #9e6a03 0%, #d29922 100%) !important;
  border: none !important;
  color: #ffffff !important;
}

/* ===== 링크 ===== */
a {
  color: #58a6ff !important;
  transition: color 0.2s ease !important;
}

a:hover {
  color: #79c0ff !important;
  text-decoration: underline !important;
}

/* ===== 코드 블록 ===== */
pre, code, .code-block {
  background-color: #0d1117 !important;
  color: #c9d1d9 !important;
  border: 1px solid #30363d !important;
  border-radius: 6px !important;
  font-family: 'Consolas', 'Monaco', 'Courier New', monospace !important;
}

pre {
  padding: 16px !important;
  overflow-x: auto !important;
}

code {
  padding: 2px 6px !important;
}

/* ===== 문제 내용 ===== */
#problem_description, 
#problem_input, 
#problem_output,
#problem_limit,
.problem-text {
  background-color: #161b22 !important;
  color: #c9d1d9 !important;
  padding: 20px !important;
  border-radius: 6px !important;
  border: 1px solid #30363d !important;
}

/* ===== 샘플 데이터 ===== */
.sampledata {
  background-color: #0d1117 !important;
  color: #c9d1d9 !important;
  border: 1px solid #30363d !important;
  border-radius: 6px !important;
  padding: 12px !important;
}

/* ===== 페이지네이션 ===== */
.pagination > li > a,
.pagination > li > span {
  background-color: #161b22 !important;
  color: #c9d1d9 !important;
  border: 1px solid #30363d !important;
  transition: all 0.2s ease !important;
}

.pagination > li > a:hover,
.pagination > li > span:hover {
  background-color: #21262d !important;
  color: #58a6ff !important;
  border-color: #58a6ff !important;
}

.pagination > .active > a,
.pagination > .active > span {
  background: linear-gradient(135deg, #1f6feb 0%, #58a6ff 100%) !important;
  border-color: #58a6ff !important;
  color: #ffffff !important;
}

/* ===== Alert 박스 ===== */
.alert {
  border-radius: 6px !important;
  border-width: 1px !important;
}

.alert-success {
  background-color: rgba(35, 134, 54, 0.15) !important;
  border-color: #2ea043 !important;
  color: #3fb950 !important;
}

.alert-info {
  background-color: rgba(31, 111, 235, 0.15) !important;
  border-color: #58a6ff !important;
  color: #79c0ff !important;
}

.alert-warning {
  background-color: rgba(158, 106, 3, 0.15) !important;
  border-color: #d29922 !important;
  color: #e3b341 !important;
}

.alert-danger {
  background-color: rgba(218, 54, 51, 0.15) !important;
  border-color: #f85149 !important;
  color: #ff7b72 !important;
}

/* ===== 레이블 및 배지 ===== */
.label, .badge {
  background-color: #21262d !important;
  color: #c9d1d9 !important;
  border-radius: 12px !important;
  padding: 4px 10px !important;
}

.label-success, .badge-success {
  background-color: #238636 !important;
  color: #ffffff !important;
}

.label-danger, .badge-danger {
  background-color: #da3633 !important;
  color: #ffffff !important;
}

.label-warning, .badge-warning {
  background-color: #9e6a03 !important;
  color: #ffffff !important;
}

.label-info, .badge-info {
  background-color: #1f6feb !important;
  color: #ffffff !important;
}

/* ===== Well ===== */
.well {
  background-color: #161b22 !important;
  border: 1px solid #30363d !important;
  color: #c9d1d9 !important;
  border-radius: 6px !important;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2) !important;
}

/* ===== 모달 ===== */
.modal-content {
  background-color: #161b22 !important;
  color: #c9d1d9 !important;
  border: 1px solid #30363d !important;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.6) !important;
}

.modal-header {
  background-color: #1c2128 !important;
  border-bottom: 1px solid #30363d !important;
}

.modal-footer {
  background-color: #0d1117 !important;
  border-top: 1px solid #30363d !important;
}

.modal-backdrop {
  background-color: #000000 !important;
}

/* ===== 제출 현황 ===== */
.result-text {
  color: #c9d1d9 !important;
}

/* ===== 사이드바 ===== */
.sidebar, .side-menu {
  background-color: #161b22 !important;
  color: #c9d1d9 !important;
  border: 1px solid #30363d !important;
}

/* ===== 푸터 ===== */
footer {
  background-color: #161b22 !important;
  color: #8b949e !important;
  border-top: 1px solid #30363d !important;
  padding: 20px 0 !important;
}

footer a {
  color: #58a6ff !important;
}

/* ===== 스크롤바 ===== */
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  background: #0d1117;
}

::-webkit-scrollbar-thumb {
  background: #30363d;
  border-radius: 6px;
  border: 2px solid #0d1117;
}

::-webkit-scrollbar-thumb:hover {
  background: #484f58;
}

/* ===== 코드 에디터 (ACE Editor) ===== */
.ace_editor {
  background-color: #0d1117 !important;
  color: #c9d1d9 !important;
}

.ace_gutter {
  background-color: #161b22 !important;
  color: #8b949e !important;
  border-right: 1px solid #30363d !important;
}

.ace_gutter-active-line {
  background-color: #21262d !important;
}

.ace_cursor {
  color: #c9d1d9 !important;
}

.ace_selection {
  background: rgba(88, 166, 255, 0.2) !important;
}

/* ===== Solved.ac 티어 ===== */
.solvedac-tier {
  border-color: #30363d !important;
  border-radius: 4px !important;
}

/* ===== HR 구분선 ===== */
hr {
  border-color: #30363d !important;
  opacity: 1 !important;
}

/* ===== Breadcrumb ===== */
.breadcrumb {
  background-color: #161b22 !important;
  border: 1px solid #30363d !important;
}

.breadcrumb > li + li:before {
  color: #8b949e !important;
}

/* ===== 이미지 조정 ===== */
img {
  opacity: 0.9;
  transition: opacity 0.2s ease !important;
}

img:hover {
  opacity: 1;
}

/* ===== 폼 그룹 ===== */
.form-group label {
  color: #c9d1d9 !important;
  font-weight: 500 !important;
}

/* ===== 헬프 텍스트 ===== */
.help-block {
  color: #8b949e !important;
}

/* ===== List Group ===== */
.list-group-item {
  background-color: #161b22 !important;
  border: 1px solid #30363d !important;
  color: #c9d1d9 !important;
}

.list-group-item:hover {
  background-color: #21262d !important;
}

/* ===== 프로그레스 바 ===== */
.progress {
  background-color: #21262d !important;
  border-radius: 6px !important;
  overflow: hidden !important;
}

.progress-bar {
  background: linear-gradient(135deg, #1f6feb 0%, #58a6ff 100%) !important;
}

/* ===== 탭 ===== */
.nav-tabs {
  border-bottom: 1px solid #30363d !important;
}

.nav-tabs > li > a {
  color: #8b949e !important;
  border: 1px solid transparent !important;
  transition: all 0.2s ease !important;
}

.nav-tabs > li > a:hover {
  background-color: #21262d !important;
  border-color: #30363d !important;
  color: #c9d1d9 !important;
}

.nav-tabs > li.active > a {
  background-color: #161b22 !important;
  border-color: #30363d #30363d transparent !important;
  color: #58a6ff !important;
}

/* ===== 문제 태그 ===== */
.problem-tag {
  background-color: #21262d !important;
  color: #58a6ff !important;
  border: 1px solid #30363d !important;
  border-radius: 12px !important;
  padding: 4px 12px !important;
  font-size: 12px !important;
  transition: all 0.2s ease !important;
}

.problem-tag:hover {
  background-color: #30363d !important;
  border-color: #58a6ff !important;
}

/* ===== 제출 결과 색상 ===== */
.result-ac, .result-text.result-ac {
  color: #3fb950 !important;
}

.result-wa, .result-text.result-wa {
  color: #f85149 !important;
}

.result-tle, .result-text.result-tle {
  color: #d29922 !important;
}

.result-mle, .result-text.result-mle {
  color: #d29922 !important;
}

.result-re, .result-text.result-re {
  color: #ff7b72 !important;
}

.result-ce, .result-text.result-ce {
  color: #e3b341 !important;
}
`;

// 다크모드 스타일 적용 함수
function applyDarkMode() {
  // 페이지 로드 완료 후 스타일 삽입 (기존 CSS보다 나중에 로드되도록)
  const insertStyle = () => {
    // 기존 스타일 제거
    const oldStyle = document.getElementById('boj-darkmode-style');
    if (oldStyle) oldStyle.remove();
    
    // head 끝에 스타일 삽입
    const style = document.createElement('style');
    style.id = 'boj-darkmode-style';
    style.textContent = darkModeCSS;
    document.head.appendChild(style);
    
    // 추가로 body 끝에도 삽입 (최고 우선순위)
    const style2 = document.createElement('style');
    style2.textContent = `
      .table-striped > tbody > tr:nth-child(odd) > td,
      .table-striped > tbody > tr:nth-child(odd) > th {
        background-color: transparent !important;
        background: none !important;
      }
      .table-striped > tbody > tr:nth-child(even) > td,
      .table-striped > tbody > tr:nth-child(even) > th {
        background-color: transparent !important;
        background: none !important;
      }
    `;
    document.body.appendChild(style2);
  };
  
  // 즉시 실행
  insertStyle();
  
  // DOM 로드 후 다시 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', insertStyle);
  }
  
  // 추가 인라인 스타일 강제 적용
  forceTableStyles();
}

// 테이블 스타일 강제 적용
function forceTableStyles() {
  const applyStyles = () => {
    const cells = document.querySelectorAll('.table-striped td, .table-striped th');
    cells.forEach(cell => {
      cell.style.setProperty('background-color', 'transparent', 'important');
      cell.style.setProperty('background', 'transparent', 'important');
    });
  };
  
  // 즉시 실행
  applyStyles();
  
  // 페이지 로드 후 다시 실행
  setTimeout(applyStyles, 100);
  setTimeout(applyStyles, 500);
  setTimeout(applyStyles, 1000);
  
  // MutationObserver로 DOM 변경 감시
  const observer = new MutationObserver(applyStyles);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// 다크모드 스타일 제거 함수
function removeDarkMode() {
  const style = document.getElementById('boj-darkmode-style');
  if (style) {
    style.remove();
  }
}

// 초기 로드 시 설정 확인
chrome.storage.sync.get(['darkModeEnabled'], function(result) {
  const isEnabled = result.darkModeEnabled !== false; // 기본값은 true
  if (isEnabled) {
    applyDarkMode();
  }
});

// 메시지 리스너
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleDarkMode') {
    if (request.enabled) {
      applyDarkMode();
    } else {
      removeDarkMode();
    }
  }
});
