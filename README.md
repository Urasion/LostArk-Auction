# Lostark Auction

Lostark Auction은 로스트아크의 경매장 데이터를 시각화하고, 사용자가 즐겨찾는 아이템을 관리할 수 있도록 돕는 웹 애플리케이션입니다. Next.js와 TypeScript를 기반으로 구축되었으며, React Query를 활용한 캐싱 전략으로 효율적인 데이터 관리를 지향합니다.

## ✨ 주요 기능

- **타입스크립트 기반의 안정적인 코드**: 모든 컴포넌트와 API 로직은 타입스크립트로 작성되어 코드의 안정성과 유지보수성을 높였습니다.
- **API 요청 최적화를 위한 캐싱**: `React Query`를 적극적으로 사용하여 API 요청 횟수를 최소화하고, 사용자에게 빠르고 쾌적한 경험을 제공합니다. `stale-while-revalidate` 전략을 통해 데이터의 최신성을 유지하면서도 불필요한 네트워크 요청을 줄입니다.
- **직관적인 데이터 시각화**: `Recharts`를 활용하여 경매장 아이템의 시세 변동을 차트로 시각화하여 보여줍니다.
- **반응형 웹 디자인**: PC와 모바일 환경 모두에서 최적화된 UI를 제공합니다.
- **즐겨찾기 기능**: 사용자가 관심 있는 아이템을 즐겨찾기에 추가하고, 한눈에 모아볼 수 있습니다.

## 🚀 기술 스택

- **프레임워크**: Next.js
- **언어**: TypeScript
- **상태 관리**: React Query, Zustand
- **스타일링**: Tailwind CSS, shadcn/ui
- **차트**: Recharts
- **테스팅**: Vitest, Storybook
- **API 클라이언트**:
- **배포**: Vercel

## 🏁 시작하기

### 1. 프로젝트 클론

```bash
git clone https://github.com/your-username/lostark-auction.git
cd lostark-auction
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 환경 변수 설정

`.env.local` 파일을 생성하고, 필요한 환경 변수를 추가합니다.

```env
NEXT_PUBLIC_API_URL=...
```

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하여 애플리케이션을 확인할 수 있습니다.

## 📁 프로젝트 구조

```
/
├── app/                  # Next.js App Router 기반의 페이지 및 API 라우트
│   ├── api/              # API 라우트
│   ├── (category)/       # 각 카테고리별 페이지
│   └── ...
├── components/           # 공통 UI 컴포넌트
├── features/             # 특정 기능과 관련된 컴포넌트 및 로직
├── hooks/                # 공통으로 사용되는 커스텀 훅
├── lib/                  # API 클라이언트, 유틸리티 함수 등
├── services/             # API 요청 로직
├── store/                # Zustand를 사용한 전역 상태 관리
└── ...
```