<div align="center">

# 🌙 백준 다크모드
<img width="3839" height="2034" alt="image" src="https://github.com/user-attachments/assets/238e7adb-5a42-40a6-812b-2c703a94e761" />

<img src="https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Chrome Extension">
<img src="https://img.shields.io/badge/Version-1.0-brightgreen?style=for-the-badge" alt="Version">
<img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="License">

**백준 온라인 저지를 더 편안하게, 눈이 편안한 다크모드로 즐기세요!**

[✨ 기능](#-주요-기능) • [📦 설치](#-설치-방법) • [🎨 커스터마이징](#-커스터마이징) • [📄 라이선스](#-라이선스)

</div>

---

## 📖 소개

**백준 다크모드**는 [백준 온라인 저지(acmicpc.net)](https://acmicpc.net)에서 코딩 문제를 풀 때 눈의 피로를 줄여주는 크롬 확장 프로그램입니다. 

밤늦게 알고리즘 문제를 풀 때, 또는 오래 공부할 때 밝은 화면이 부담스러우셨나요? 이제 다크모드로 더 편안하게 백준을 이용하세요!

## ✨ 주요 기능

-  **완벽한 다크 테마** - 백준 사이트 전체를 부드러운 다크 테마로 변환
-  **눈 보호** - 장시간 코딩할 때 눈의 피로 감소
-  **최적화된 가독성** - 코드와 텍스트를 더 명확하게 볼 수 있는 색상 조합
-  **즉시 적용** - 페이지 로드 시 자동으로 다크모드 활성화
-  **커스터마이징 가능** - 원하는 색상으로 자유롭게 변경 가능
-  **가볍고 빠름** - 최소한의 리소스로 빠르게 작동

## 📦 설치 방법

### 개발자 모드로 설치 (로컬)

1. 이 저장소를 다운로드하거나 클론합니다
   ```bash
   git clone https://github.com/yourusername/baekjoon-darkmode.git
   ```

2. Chrome 브라우저에서 `chrome://extensions/` 페이지를 엽니다

3. 우측 상단의 **"개발자 모드"** 토글을 활성화합니다

4. **"압축해제된 확장 프로그램을 로드합니다"** 버튼을 클릭합니다

5. 다운로드한 프로젝트 폴더를 선택합니다

6. 완료! 이제 [백준](https://acmicpc.net)에 접속하면 다크모드가 적용됩니다 🎉

## 🎨 커스터마이징

[darkmode.css](darkmode.css) 파일을 수정하여 자신만의 색상 테마를 만들 수 있습니다.

### 색상 팔레트

| 요소 | 기본 색상 | CSS 변수 |
|------|----------|----------|
| 배경색 | `#1e1e1e` | 메인 배경 |
| 패널 배경 | `#252526` | 컨텐츠 영역 |
| 텍스트 | `#d4d4d4` | 기본 텍스트 |
| 링크 | `#569cd6` | 하이퍼링크 |
| 테두리 | `#3e3e42` | 경계선 |

### 커스터마이징 예제

```css
/* darkmode.css 파일에서 원하는 색상으로 변경하세요 */
body {
    background-color: #your-color !important;
    color: #your-text-color !important;
}
```

## 🗂️ 프로젝트 구조

```
백준 다크모드/
├── 📄 manifest.json      # 확장 프로그램 설정
├── 🎨 darkmode.css       # 다크모드 스타일시트
├── 📜 content.js         # 컨텐츠 스크립트
├── 🎯 popup.html         # 팝업 인터페이스
├── ⚙️ popup.js           # 팝업 로직
├── 🖼️ icon.png           # 확장 프로그램 아이콘
└── 📖 README.md          # 프로젝트 문서
```

## 🛠️ 기술 스택

- **Manifest V3** - 최신 Chrome Extension API
- **Pure CSS** - 의존성 없는 순수 CSS 스타일링
- **JavaScript** - 가벼운 바닐라 JS

## 🤝 기여하기

버그를 발견하거나 개선 아이디어가 있으시다면 언제든지 Issue를 열거나 Pull Request를 보내주세요!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 변경 로그

### v1.0 (2026-01-07)
- 🎉 초기 릴리스
- ✨ 백준 사이트 전체 다크모드 지원
- 🎨 최적화된 색상 팔레트 적용

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

<div align="center">

**즐거운 알고리즘 문제풀이 되세요! 💻✨**

Made with ❤️ by developers, for developers

⭐ 이 프로젝트가 도움이 되셨다면 Star를 눌러주세요!

</div>
