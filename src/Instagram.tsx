import React from "react";
import styled from "styled-components";

const InstagramButton = styled.a`
  display: flex;
  align-items: center;
  background-color: #f0f0f0; /* 밝은 배경색 */
  border-radius: 5px; /* 둥근 모서리 */
  padding: 10px 15px; /* 안쪽 여백 */
  text-decoration: none; /* 밑줄 제거 */
  color: #333; /* 텍스트 색상 */
  transition: background-color 0.3s, transform 0.2s; /* 부드러운 효과 */

  &:hover {
    background-color: #e1e1e1; /* 호버 시 배경색 변화 */
    transform: scale(1.05); /* 약간 커지는 효과 */
  }
`;

const InstagramIcon = styled.img`
  width: 24px;
  margin-right: 10px; /* 아이콘과 텍스트 간격 */
`;

const InstagramText = styled.span`
  font-weight: bold; /* 텍스트 두껍게 */
`;

const Instagram = () => {
  return (
    <InstagramButton
      href="https://www.instagram.com/menya_kuma/"
      target="_blank"
    >
      <InstagramIcon src="/images/instagram.svg" alt="instagram" />
      <InstagramText>인스타그램: @menya_kuma</InstagramText>
    </InstagramButton>
  );
};

export default Instagram;
