import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Home = () => {
  return(
    <Wrapper>
      <Text>Wellcome to<br/>　Shintaro's Portfolio</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 220px);

  ${media.lessThan("medium")`
    height: calc(100vh - 200px);
  `}
`;

const Text = styled.p`
  transform: translateY(-140px);
  line-height: 60px;
  font-size: 40px;
  ${media.lessThan("medium")`
    transform: translateY(-120px);
    font-size: 26px;
  `}
`;

export default Home;