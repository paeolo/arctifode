import React from 'react';

export const Inline: React.FC = props => {
  return (
    <div style={{ display: "inline-block" }}>
      {props.children}
    </div>
  );
}
