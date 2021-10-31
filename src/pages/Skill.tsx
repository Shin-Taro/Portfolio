import React from "react";
import styled from "styled-components";
import media from "styled-media-query";

const Skill = () => {
  const renderList = ():JSX.Element[] => {
    const list: JSX.Element[] = skills.map(item => {
      const levels: any[] = [];
      for (let i = 0; i < item.level; i++) {
        levels.push(<span key={item.id + "level" + i}>★</span>);
      }
      return(
        <Item key={item.id}>
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
  id: number,
  name: string,
  level: number,
  desc: string
}

type SkillList = SkillItem[]

const skills: SkillList = [
  {
    id: 1,
    name: "HTML",
    level: 5,
    desc: "実務でWebサイト制作をしています。"
  },
  {
    id: 2,
    name: "CSS",
    level: 5,
    desc: "大抵のスタイリングは問題無くできます。やればやるほど奥が深いです。"
  },
  {
    id: 3,
    name: "SCSS",
    level: 4,
    desc: "実務でCSSを書くときはsassで書いてます。"
  },
  {
    id: 4,
    name: "JavaScript",
    level: 4,
    desc: "やっとクセをつかんできた感じがします。"
  },
  {
    id: 5,
    name: "jQuery",
    level: 4,
    desc: "サイト制作でアニメーションや簡単な動きをつける際に使用しています。"
  },
  {
    id: 6,
    name: "React",
    level: 3,
    desc: "モダンな技術でアプリ開発がしたいと思い勉強中です。"
  },
  {
    id: 7,
    name: "jest",
    level: 2,
    desc: "Reactで作ったアプリはjestでテストを書いています。実務でテストを書いたことがないので勉強中です。"
  },
  {
    id: 8,
    name: "TypeScript",
    level: 1,
    desc: "最近手を出し始めました。まだまだ使いこなせていません。"
  },
  {
    id: 9,
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