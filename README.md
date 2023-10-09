# 프로젝트 Description

## ✔ 프로젝트명
백주희의 이력서
## ✔ 프로젝트인지 소개
여러가지 취업사이트의 정보 입력을 여러 번 하는 것이 귀찮아서 정보를 한 곳에 모아 동일한 정보의 같은 이력서를 보여주기 위해 만들어진 프로젝트.

<details>
<summary> ✔ 디렉토리 구조</summary>
<code>
  ┣ 📂public
  ┃ ┣ 📜brachiosaurus.png
  ┃ ┣ 📜favicon.ico
  ┃ ┣ 📜index.html
  ┃ ┣ 📜manifest.json
  ┃ ┗ 📜robots.txt
  ┣ 📂src
  ┃ ┣ 📂api
  ┃ ┃ ┣ 📜customAxios.ts
  ┃ ┃ ┣ 📜errorHandler.ts
  ┃ ┃ ┗ 📜notion.ts
  ┃ ┣ 📂assets
  ┃ ┃ ┣ 📂images
  ┃ ┃ ┃ ┗ 📜apng_loader-ball.png
  ┃ ┃ ┗ 📂scss
  ┃ ┃ ┃ ┣ 📂font
  ┃ ┃ ┃ ┃ ┣ 📜Montserrat.scss
  ┃ ┃ ┃ ┃ ┣ 📜NotoSansKR.scss
  ┃ ┃ ┃ ┃ ┗ 📜index.scss
  ┃ ┃ ┃ ┣ 📜_mediaQueries.scss
  ┃ ┃ ┃ ┣ 📜_mixins.scss
  ┃ ┃ ┃ ┣ 📜_reset.scss
  ┃ ┃ ┃ ┗ 📜_variables.scss
  ┃ ┣ 📂components
  ┃ ┃ ┣ 📂custom
  ┃ ┃ ┃ ┣ 📜DChip.tsx
  ┃ ┃ ┃ ┗ 📜ToggleChip.tsx
  ┃ ┃ ┣ 📂utils
  ┃ ┃ ┣ 📜Loading.scss
  ┃ ┃ ┗ 📜Loading.tsx
  ┃ ┣ 📂constants
  ┃ ┃ ┗ 📜MainStack.tsx
  ┃ ┣ 📂context
  ┃ ┃ ┗ 📜ColorModeContext.ts
  ┃ ┣ 📂data
  ┃ ┃ ┣ 📜DB_company.json
  ┃ ┃ ┣ 📜DB_profileInfo.json
  ┃ ┃ ┣ 📜DB_project.json
  ┃ ┃ ┣ 📜DB_role.json
  ┃ ┃ ┗ 📜DB_stack.json
  ┃ ┣ 📂hooks
  ┃ ┣ 📂layout
  ┃ ┃ ┣ 📂header
  ┃ ┃ ┃ ┣ 📜Header.scss
  ┃ ┃ ┃ ┣ 📜Header.tsx
  ┃ ┃ ┃ ┗ 📜MenuPopupState.tsx
  ┃ ┃ ┣ 📂nav
  ┃ ┃ ┃ ┣ 📜Nav.scss
  ┃ ┃ ┃ ┣ 📜Nav.tsx
  ┃ ┃ ┃ ┗ 📜ProfileInfoBox.tsx
  ┃ ┃ ┣ 📜FixButton.scss
  ┃ ┃ ┣ 📜Layout.scss
  ┃ ┃ ┣ 📜Layout.tsx
  ┃ ┃ ┣ 📜ThemeCustomized.scss
  ┃ ┃ ┗ 📜ThemeCustomized.tsx
  ┃ ┣ 📂pages
  ┃ ┃ ┣ 📂resume
  ┃ ┃ ┃ ┣ 📂card
  ┃ ┃ ┃ ┃ ┣ 📜CardListItem.tsx
  ┃ ┃ ┃ ┃ ┗ 📜SubListItem.tsx
  ┃ ┃ ┃ ┣ 📂filter
  ┃ ┃ ┃ ┃ ┗ 📜FilterOption.tsx
  ┃ ┃ ┃ ┣ 📜Main.scss
  ┃ ┃ ┃ ┗ 📜Main.tsx
  ┃ ┃ ┗ 📜MainForProject.tsx
  ┃ ┣ 📂redux
  ┃ ┃ ┣ 📂modules
  ┃ ┃ ┃ ┗ 📜pointColor.ts
  ┃ ┃ ┣ 📜actions.ts
  ┃ ┃ ┣ 📜rootReducer.ts
  ┃ ┃ ┗ 📜store.ts
  ┃ ┣ 📂theme
  ┃ ┃ ┗ 📜Theme.tsx
  ┃ ┣ 📂types
  ┃ ┃ ┣ 📜global.d.ts
  ┃ ┃ ┗ 📜images.d.ts
  ┃ ┣ 📂utils
  ┃ ┃ ┗ 📜String.tsx
  ┃ ┣ 📜App.scss
  ┃ ┣ 📜App.tsx
  ┃ ┣ 📜index.css
  ┃ ┗ 📜index.tsx
  ┣ 📜.eslintrc.js
  ┣ 📜.gitignore
  ┣ 📜.prettierrc.json
  ┣ 📜README.md
  ┣ 📜TODO.md
  ┣ 📜craco.config.js
  ┣ 📜initSetting.md
  ┣ 📜package-lock.json
  ┣ 📜package.json
  ┣ 📜react-app-env.d.ts
  ┣ 📜tsconfig.json
  ┗ 📜tsconfig.paths.json
  </code>    
</details>
 

# 프로젝트 정보

## ✔ 개발스택
> Front
>> React: 구조를 자유롭게 내가 원하는대로 짤 수 있고 많은 라이브러리와 수많은 커뮤니티로 유지보수하기 쉬워서 선택했다.
>>
>> TypeScript: 에러체크를 미리 해주기 때문에 실수할 일이 많이 줄고 편하기 때문에 선택했다.
>>
>>
> Backend
>> Lambda: 처음엔 node.js로 백엔드 서버를 따로 둘까도 생각했는데 아무래도 요즘 서버리스를 하는 추세이기도 하고
>>         서버 하나 더 두면 비용적인 측면에서 따져봐도 더 적은 금액으로 할 수 있을 것 같아서 처음 써보았다.
>>
>> Notion API: Notion에 정보를 몰아 넣고 요것 하나만 수정해서 database처럼 사용하기로 했다.

## ✔ 구현 목록

### 필수 기능

    1. 필터 기능 
    2. 정렬 기능 (최신순 오래된순)
    3. 상세페이지 붙이기(노션 페이지)
    4. 프린트 pdf 기능

### 미적 요소

    1. 다크 모드
    2. 반응형
    3. 테마 기능(포인트 컬러 변경)

### 리펙토링

    1. 컴포넌트화 시키기(프로젝트 카드, 필터 등)

### 추후 하고 싶은거

    1. 경력 요약 그래프
    2. 번역기능
    3. 테스트 코드 붙이기
    4. 스토리보드 붙이기
    5. 문서화

### 프로젝트 결과물

[백주희의 이력서](https://juhee-playground.github.io/)

