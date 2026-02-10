# 포트폴리오 웹사이트 (Portfolio Website)

이 프로젝트는 HTML, CSS, JavaScript로 제작된 반응형 포트폴리오 웹사이트 템플릿입니다.
자신의 이력과 프로젝트를 효과적으로 보여줄 수 있도록 구성되어 있습니다.

## 🚀 시작하기 (Getting Started)

이 프로젝트를 로컬 컴퓨터에서 실행하려면 다음 단계를 따르세요.

1.  이 저장소를 클론(clone)하거나 다운로드합니다.
2.  `index.html` 파일을 웹 브라우저(Chrome, Edge, Safari 등)에서 엽니다.

## 📝 커스터마이징 (Customization)

### 1. 텍스트 수정
`index.html` 파일을 텍스트 에디터(VS Code, 메모장 등)로 열어 내용을 수정하세요.
- **이름**: `<h1>Hong Gil Dong</h1>` 부분을 찾아 본인의 이름으로 변경하세요.
- **소개**: `<p class="multiple-text"></p>` 부분과 아래의 자기소개 문구를 수정하세요.
- **이력서**: `#resume` 섹션의 학력 및 경력 사항을 본인의 정보로 변경하세요.
- **연락처**: `#contact` 섹션의 이메일 주소 등을 수정하세요.

### 2. 이미지 변경
`img` 태그의 `src` 속성을 본인의 이미지 경로로 변경하세요.
- 예: `<img src="images/my-photo.jpg" alt="My Photo">`
- 이미지 파일은 프로젝트 폴더 내에 저장하는 것이 좋습니다.

### 3. 색상 변경
`style.css` 파일의 `:root` 변수를 수정하여 전체 테마 색상을 변경할 수 있습니다.
```css
:root {
    --main-color: #0ef; /* 이 값을 원하는 색상 코드로 변경하세요 */
}
```

## 🌐 GitHub Pages 배포 방법 (Deployment)

이 웹사이트를 인터넷에 무료로 공개하려면 GitHub Pages를 사용하세요.

1.  GitHub에 새로운 Public Repository를 생성합니다 (이름은 자유롭게, 예: `my-portfolio`).
2.  이 프로젝트의 파일들(`index.html`, `style.css`, `script.js` 등)을 해당 Repository에 업로드(Push)합니다.
3.  Repository 페이지에서 **Settings** > **Pages**로 이동합니다.
4.  **Source** 섹션에서 `Deploy from a branch`를 선택합니다.
5.  **Branch**를 `main` (또는 `master`)으로 설정하고 `/root` 폴더를 선택한 뒤 **Save**를 클릭합니다.
6.  잠시 후(약 1~5분) 상단에 생성된 웹사이트 주소(URL)가 표시됩니다. 해당 주소를 클릭하여 배포된 사이트를 확인하세요.

## 📄 라이선스 (License)

이 프로젝트는 오픈 소스이며 자유롭게 수정 및 배포할 수 있습니다.
