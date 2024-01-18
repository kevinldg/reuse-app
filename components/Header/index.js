import styled from "styled-components";

const StyledHeader = styled.header`
  margin-bottom: 2rem;
  text-align: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Reuse</h1>
    </StyledHeader>
  );
}
