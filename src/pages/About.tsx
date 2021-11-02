import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Wrapper, Container, Title, Text } from "../styles/utility";

const About = () => {
  return(
    <Wrapper>
      <Container>
        <Box>
          <Title color="white">About me</Title>
          <TextAria>
            <table>
              <tbody>
                <tr>
                  <TableData color="white">Name</TableData>
                  <TableData color="white">:</TableData>
                  <TableData color="white">Shintaro</TableData>
                </tr>
                <tr>
                  <TableData color="white">Age</TableData>
                  <TableData color="white">:</TableData>
                  <TableData color="white">24</TableData>
                </tr>
                <tr>
                  <TableData color="white">Favorite</TableData>
                  <TableData color="white">:</TableData>
                  <TableData color="white">野球、ゲーム、漫画、お酒(飲み会)</TableData>
                </tr>
                <tr>
                  <TableData color="white">History</TableData>
                  <TableData color="white">:</TableData>
                  <TableData color="white">2020学部卒 <BrForSp/>→ 大手ISP就職 <BrForSp/>→ 約半年後スタートアップにSE見習いとして転職 <BrForSp/>→ 研修を経てフロントエンドのコーディングを経験<BrForSp/> → Now!!</TableData>
                </tr>
              </tbody>
            </table>
          </TextAria>
        </Box>
        <Box>
          <Title color="white">FAQ</Title>
          <TextAria>
            <AboutText color="white">Q:なぜプログラミングを始めたの<br/>
              A:なんとなく興味を持って自分で色々触ってみたら面白かったので、仕事にしようと思いました。</AboutText>
            <AboutText color="white">Q:なぜ興味を持ったの<br/>
              A:大学時代の活動の関係でHTMLなどを触る必要があったこと、ゲームをしていて自作PCに
              興味を持ったこと、これらの経験から自然とIT関連技術全般に興味を持っていきました。</AboutText>
            <AboutText color="white">Q:学生時代なにしていたの<br/>
              A:大学1年まで13年間野球をしていました。大学では怪我などで選手を引退し、
              所属していたリーグの運営責任者として活動しました。</AboutText>
            <AboutText color="white">Q:目標は？<br/>
              A:短期目標：フロントエンドが楽しいのでReactやVue等のFWも使えるようになって、
                webアプリやSaaS開発等に携わる。<br/>
              　中期目標：Webサービスを作るための技術・知識(フロントエンド、バックエンド、インフラ等を含めて)を得て
                Web案件なら任せてくださいと言う。<br/>
              　長期目標：まだ決めてない。自分でサービスやビジネスを立ち上げるか、
                もっといろんな勉強をして技術を極めていくのも面白そう。
                その時楽しいと思えることをしていたい。</AboutText>
          </TextAria>
        </Box>
      </Container>
    </Wrapper>
  );
};

const Box = styled.div`
  margin-top: ${props => props.theme.layout.margin.top.large};
  ${media.lessThan("medium")`
    margin-top: ${props => props.theme.layout.margin.top.small};
  `}
`;

const TextAria = styled.div`
  width: 100%;
  margin-top: ${props => props.theme.layout.margin.top.large};
  padding: 40px;
  background-color: ${props => props.theme.color.gray};
  border: solid 1px ${props => props.theme.color.white};
  border-radius: 30px;
  ${media.lessThan("medium")`
    margin-top: ${props => props.theme.layout.margin.top.small};
    padding: 20px;
  `}
`;

const TempTd = Text.withComponent("td");
const TableData = styled(TempTd)`
  padding-left: 20px;
  ${media.lessThan("medium")`
    padding-left: 10px;
  `}
`;

const BrForSp = styled.br`
  display: none;
  ${media.lessThan("medium")`
    display: inline;
  `}
`;

const AboutText = styled(Text)`
  &:not(:first-child){
    margin-top: 40px;
    ${media.lessThan("medium")`
      margin-top: 30px;
    `}
  }
`;
export default About;