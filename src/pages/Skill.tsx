import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Skill = () => {
  const renderList = ():JSX.Element[] => {
    const list: JSX.Element[] = skills.map((item, index) => {
      const levels: any[] = [];
      for (let i = 0; i < item.level; i++) {
        levels.push(<span key={i}>★</span>);
      }
      return(
        <Item key={index + item.name}>
          <h1>{item.name}</h1>
          <p>{levels}</p>
          <p>{item.desc}</p>
        </Item>
      );
    });
    return list;
  };
  return(
    <Wrapper>
      <h1>My Skills</h1>
      <List>
        {renderList()}
      </List>
      <p>※星の数は相対的な得意度です</p>
    </Wrapper>
  );
};

type SkillItem = {
  name: string,
  level: number,
  desc: string
}

type SkillList = SkillItem[]

const skills: SkillList = [
  {
    name: "HTML",
    level: 5,
    desc: "実務でWebサイト制作をしています。"
  },
  {
    name: "CSS",
    level: 5,
    desc: "大抵のスタイリングは問題無くできます。やればやるほど奥が深いです。"
  },
  {
    name: "SCSS",
    level: 4,
    desc: "実務でCSSを書くときはsassで書いてます。"
  },
  {
    name: "JavaScript",
    level: 4,
    desc: "やっとクセをつかんできた感じがします。"
  },
  {
    name: "jQuery",
    level: 4,
    desc: "サイト制作でアニメーションや簡単な動きをつける際に使用しています。"
  },
  {
    name: "React",
    level: 3,
    desc: "モダンな技術でアプリ開発がしたいと思い勉強中です。"
  },
  {
    name: "jest",
    level: 2,
    desc: "Reactで作ったアプリはjeatでテストを書いています。実務でテストを書いたことがないので勉強中です。"
  },
  {
    name: "TypeScript",
    level: 1,
    desc: "最近手を出し始めました。まだまだ使いこなせていません。"
  },
  {
    name: "Firebase",
    level: 2,
    desc: "個人開発の際にHosting・Firestore・Authentication等を利用しています。"
  },
];

const Wrapper = styled.div`
  width: 73vw;
  margin: 0 auto;
  ${media.lessThan("medium")`
    width: 85vw;
  `}
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Item = styled.li`
  width: 32%;
  margin-top: 20px;
  background-color: gray;
`;

export default Skill;