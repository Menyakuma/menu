import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
      margin: 0;
      padding: 0;
      font-family: 'Noto Sans KR', sans-serif; /* 기본 폰트 설정 */
      background-color: #f4e4bc; /* 배경색 설정 */
      color: #1a1a1a; /* 기본 텍스트 색상 설정 */
  }

  a {
      text-decoration: none; /* 링크의 밑줄 제거 */
      color: inherit; /* 부모의 텍스트 색상 상속 */
  }

  button {
      border: none; /* 기본 버튼 테두리 제거 */
      background: none; /* 배경 제거 */
      cursor: pointer; /* 커서 변경 */
  }

  /* 추가 스타일 필요시 여기 추가 */
`;

export default GlobalStyles;
