import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  min-height: 100vh;
  padding-top: ${props => props.theme.layout.height.head.large};
  padding-bottom: ${props => props.theme.layout.height.foot.large};
  background-color: ${props => props.theme.color[props.color]};
  ${media.lessThan("medium")`
    padding-top: ${props => props.theme.layout.height.head.small};
  `}
`;