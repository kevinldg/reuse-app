import { useState } from "react";
import styled from "styled-components";

import { ideas as defaultIdeas } from "@/lib/db";
import Card from "../components/Card";
import Header from "@/components/Header";

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const CardListItem = styled.li`
  flex: 0 0 calc(50% - 1rem);
  max-width: calc(50% - 1rem);
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export default function HomePage() {
  const [ideas, setIdeas] = useState(defaultIdeas);

  return (
    <div>
      <Header />
      <CardList>
        {ideas.map((idea) => (
          <CardListItem key={idea.id}>
            <Card
              image={idea.image}
              title={idea.title}
              hashtags={idea.hashtags}
            />
          </CardListItem>
        ))}
      </CardList>
    </div>
  );
}
