import React from "react";
import styled from "styled-components";

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
  height: calc(100vh - 140px);
`;

const Text = styled.p`
  transform: translateY(-140px);
  line-height: 60px;
  font-size: 40px;
`;

export default Home;