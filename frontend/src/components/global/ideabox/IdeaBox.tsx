import { colors, rounded, spacing } from '@variables';
import React from 'react';
import styled from 'styled-components';

interface Props {
  ideas?: string[];
  improvements?: string[];
}

export const IdeaBox: React.FC<Props> = ({ ideas, improvements }) => {
  const renderIdeas = ideas?.map((idea, idx) => <li key={idx}>{idea}</li>);
  const renderImprovements = improvements?.map((improvement, idx) => (
    <li key={idx}>{improvement}</li>
  ));
  return (
    <Wrapper>
      <h2>DEVELOPMENT</h2>
      {ideas && (
        <>
          <h3>Ideas 💡</h3>
          <ul>{renderIdeas}</ul>
        </>
      )}
      {improvements && (
        <>
          <h3>Improvements 🔨</h3>
          <ul>{renderImprovements}</ul>
        </>
      )}

      <h3
        style={{
          backgroundColor: colors.darkRed,
          textAlign: 'center',
          color: colors.white,
          padding: spacing.md,
          width: '80%',
          margin: '0 auto',
          borderRadius: rounded.sm,
          marginTop: spacing.xl,
        }}
      >
        Remember to update / Delete when all are done
      </h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${colors.lightGray};
  padding: ${spacing.md};
  border-radius: ${rounded.sm};
  margin-top: ${spacing.xxl};
`;
