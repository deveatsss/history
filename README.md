# 공부기록을 가장한 식당후기

## 목적

- 최신 기술을 사용해보기
- 공부회고 및 히스토리 기록

## 화면

1. 홈

- 달력이 맨처음 그려짐
- 달력에 각 일마다 타이틀이 보여지고, 클릭시 디테일 페이지로 네비게이팅
- 달력의 각 일에 마우스 올리면 + 버튼 보여짐

2. 생성

- 타이틀, texteditor, 날짜 셀렉터, 장소 셀렉터

3. 디테일

- 타이틀, 작성자, 내용, 날짜
- 삭제, 수정기능
- 작은 지도

4. 반응형

## db스키마

```typescript
title: string;
description: string;
creator: "dobby" | "leo";
createDt: Date;
place: {
  xCoor: number;
  yCoor: number;
}
editedDt: Date;
status: "active" | "deactive";
```

## 기술스택

calendar > tui

- vite

- front
  - graphql
  - react
  - kakao map api
  - web socket
  - typescript
  - react-query
  - msw
  - jest
  - ci/cd
  - tailwind
