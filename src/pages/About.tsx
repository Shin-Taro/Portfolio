import React from "react";
import styled from "styled-components";

const About = () => {
  return(
    <Wrapper>
      <h1>About me</h1>
      <Container>
        <table>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>Shintaro</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>:</td>
            <td>24</td>
          </tr>
          <tr>
            <td>Favorite</td>
            <td>:</td>
            <td>野球、ゲーム、漫画、お酒(飲み会)</td>
          </tr>
          <tr>
            <td>History</td>
            <td>:</td>
            <td>2020学部卒 → 大手ISP就職 → 約半年後スタートアップにSE見習いとして転職 → now!!</td>
          </tr>
        </table>
      </Container>
      <h1>FAQ</h1>
      <Container>
        <p>Q:なぜプログラミングを始めたの<br/>
          A:なんとなく興味を持って自分で色々触ってみたら面白かったので、仕事にしようと思いました。</p>
        <p>Q:なぜ興味を持ったの<br/>
          A:大学時代の活動の関係でHTMLなどを触る必要があったこと、ゲームをしていて自作PCに
          興味を持ったこと、これらの経験から自然とIT関連技術全般に興味を持っていきました。</p>
        <p>Q:学生時代なにしていたの<br/>
          A:大学1年まで13年間野球をしていました。大学では怪我などで選手を引退し、
          所属していたリーグの運営責任者として活動しました。</p>
        <p>Q:目標は？<br/>
          A:短期目標：フロントエンドが楽しいのでReactやVue等のFWも使えるようになって、
            webアプリやSaaS開発等に携わる。<br/>
          　中期目標：Webサービスを作るための技術・知識(フロントエンド、バックエンド、インフラ等を含めて)を得て
            Web案件なら任せてくださいと言う。<br/>
          　長期目標：まだ決めてない。自分でサービスやビジネスを立ち上げるか、
            もっといろんな勉強をして技術を極めていくのも面白そう。
            その時楽しいと思えることをしていたい。</p>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 73vw;
  margin: 0 auto;
`;

const Container = styled.div`
  width: 100%;
  padding: 40px;
  background-color: gray;
  border-radius: 30px;
`;
export default About;