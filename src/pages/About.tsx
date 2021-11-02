import React from "react";
import styled from "styled-components";
import media from "styled-media-query";
import { Wrapper, Container, Box, Title, Text } from "../styles/utility";

const About = () => {
  return(
    <Wrapper>
      <Container>
        <Box>
          <Title >About me</Title>
          <TextAria>
            <Table>
              <tbody>
                <tr>
                  <TableData >Name</TableData>
                  <TableData >:</TableData>
                  <TableData >Shintaro</TableData>
                </tr>
                <tr>
                  <TableData >Age</TableData>
                  <TableData >:</TableData>
                  <TableData >24</TableData>
                </tr>
                <tr>
                  <TableData >Favorite</TableData>
                  <TableData >:</TableData>
                  <TableData >野球、ゲーム、漫画、お酒(飲み会)</TableData>
                </tr>
                <tr>
                  <TableData >History</TableData>
                  <TableData >:</TableData>
                  <TableData >2020学部卒 <BrForSp/>→ 大手ISP就職 <BrForSp/>→ 約半年後スタートアップにSE見習いとして転職 <BrForSp/>→ 研修を経てフロントエンドのコーディングを経験<BrForSp/> → Now!!</TableData>
                </tr>
              </tbody>
            </Table>
          </TextAria>
        </Box>
        <Box>
          <Title >FAQ</Title>
          <TextAria>
            <Table>
              <tbody>
                <tr>
                  <TableData>Q.</TableData>
                  <TableData>なぜプログラミングを始めたの</TableData>
                </tr>
                <tr>
                  <TableData>A.</TableData>
                  <TableData>なんとなく興味を持って自分で色々触ってみたら面白かったので、仕事にしようと思いました。</TableData>
                </tr>
                <tr>
                  <TableData $margin={true}>Q.</TableData>
                  <TableData>なぜ興味を持ったの</TableData>
                </tr>
                <tr>
                  <TableData>A.</TableData>
                  <TableData>大学時代の活動の関係でHTMLなどを触る必要があったこと、ゲームをしていて自作PCに興味を持ったこと、これらの経験から自然とIT関連技術全般に興味を持っていきました。</TableData>
                </tr>
                <tr>
                  <TableData $margin={true}>Q.</TableData>
                  <TableData>学生時代は何していたの</TableData>
                </tr>
                <tr>
                  <TableData>A.</TableData>
                  <TableData>大学1年まで13年間野球をしていました。大学では怪我などで選手を引退し、所属していたリーグの運営責任者として活動しました。</TableData>
                </tr>
              </tbody>
            </Table>
            <Table>
              <tbody>
                <tr>
                  <TableData $margin={true}>Q.</TableData>
                  <TableData>目標は？</TableData>
                </tr>
                <tr>
                  <TableData>A.</TableData>
                  <TableData $nowrap={true}>短期目標</TableData>
                  <TableData>:</TableData>
                  <TableData>
                    フロントエンドが楽しいのでReactやVue等のFWも使えるようになって、webアプリやSaaS開発等に携わる。
                  </TableData>
                </tr>
                <tr>
                  <TableData>　</TableData>
                  <TableData $nowrap={true}>中期目標</TableData>
                  <TableData>:</TableData>
                  <TableData>
                    Webサービスを作るための技術・知識
                    (フロントエンド、バックエンド、インフラ等を含めて)を得てWeb案件なら任せてくださいと言う。
                  </TableData>
                </tr>
                <tr>
                  <TableData>　</TableData>
                  <TableData $nowrap={true}>長期目標</TableData>
                  <TableData>:</TableData>
                  <TableData>
                    まだ決めてない。自分でサービスやビジネスを立ち上げるか、もっといろんな勉強をして技術を極めていくのも面白そう。その時楽しいと思えることをしていたい。
                  </TableData>
                </tr>
              </tbody>
            </Table>
          </TextAria>
        </Box>
      </Container>
    </Wrapper>
  );
};

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

const Table = styled.table`
  border-collapse: separate;
  border-spacing: 10px 0;
  ${media.lessThan("medium")`
    border-spacing: 5px 0;
  `}
`;

const Temp = Text.withComponent("td");
const TableData = styled(Temp)<{$margin?: boolean; $nowrap?: boolean}>`
  padding-top: ${props => props.$margin ? props.theme.layout.margin.top.small : "0"};
  white-space: ${({$nowrap}) => $nowrap ? "nowrap" : "nomal"};
`;

const BrForSp = styled.br`
  display: none;
  ${media.lessThan("medium")`
    display: inline;
  `}
`;
export default About;