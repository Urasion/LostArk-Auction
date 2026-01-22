# 로아시세

이 프로젝트는 Lost Ark 게임의 경매장 데이터를 추적하고 시각화하기 위해 Next.js로 구축된 웹 애플리케이션입니다. 보석, 재련 재료, 각인 레시피와 같은 다양한 게임 내 아이템에 대한 최신 가격 정보를 제공합니다.

## ✨ 주요 기능

- **실시간 데이터:** 현재 경매장 가격을 가져와 표시합니다.
- **데이터 시각화:** 시간 경과에 따른 가격 추세를 시각화하는 대화형 차트.
- **카테고리별 아이템:** 보석, 재련 재료, 레시피와 같은 카테고리별로 아이템을 찾아볼 수 있습니다.
- **반응형 디자인:** 데스크톱 및 모바일 장치 모두를 위한 완전 반응형 레이아웃.
- **다크 모드:** 라이트 및 다크 테마 간 전환.
- **컴포넌트 라이브러리:** 격리된 컴포넌트 개발 및 테스트를 위해 Storybook을 사용합니다.

## 🛠️ 기술 스택

- **프레임워크:** [Next.js](https://nextjs.org/)
- **언어:** [TypeScript](https://www.typescriptlang.org/)
- **스타일링:** [Tailwind CSS](https://tailwindcss.com/)
- **UI 컴포넌트:** [Shadcn/UI](https://ui.shadcn.com/)
- **데이터 페칭:** [TanStack Query](https://tanstack.com/query)
- **상태 관리:** [Jotai](https://jotai.org/)
- **테이블:** [TanStack Table](https://tanstack.com/table)
- **차트:** [Recharts](https://recharts.org/)
- **린팅:** [ESLint](https://eslint.org/)
- **테스팅:** [Vitest](https://vitest.dev/)
- **컴포넌트 개발:** [Storybook](https://storybook.js.org/)

## 🚀 시작하기

### 전제 조건

- Node.js (v20.x 이상 권장)
- npm, yarn 또는 pnpm

### 설치 및 설정

1.  **리포지토리 복제:**

    ```bash
    git clone https://github.com/your-username/lostark-auction.git
    cd lostark-auction
    ```

2.  **의존성 설치:**

    ```bash
    npm install
    # 또는
    yarn install
    # 또는
    pnpm install
    ```

3.  **개발 서버 실행:**
    ```bash
    npm run dev
    ```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

## 📜 사용 가능한 스크립트

- `npm run dev`: 개발 서버를 시작합니다.
- `npm run build`: 프로덕션용 빌드를 생성합니다.
- `npm run start`: 프로덕션 서버를 시작합니다.
- `npm run lint`: ESLint 린터를 실행하여 코드 품질 문제를 확인합니다.
- `npm run storybook`: 컴포넌트 개발을 위한 Storybook 서버를 시작합니다.
- `npm run build-storybook`: 배포를 위한 Storybook을 빌드합니다.

## 📁 프로젝트 구조

```
.
├── app/                  # Next.js App Router 페이지
│   ├── gem/              # 보석 관련 페이지
│   ├── recipe/           # 레시피 관련 페이지
│   └── upgrade/          # 재련 재료 관련 페이지
├── components/           # 공유 UI 컴포넌트 (Shadcn/UI 사용)
├── features/             # 기능별 컴포넌트 및 로직
│   ├── data-chart/       # 재사용 가능한 차트 컴포넌트
│   ├── data-table/       # 재사용 가능한 테이블 컴포넌트
│   └── sidebar/          # 사이드바 레이아웃 및 컴포넌트
├── lib/                  # 유틸리티 함수 및 API 클라이언트
├── public/               # 정적 자산
├── store/                # 전역 상태 관리 (Jotai)
├── stories/              # Storybook 스토리
└── ...
```
