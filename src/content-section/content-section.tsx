import React, { FunctionComponent } from 'react';
import './content-section.scss';


interface ContentSectionProps {
  title: string;
}

const ContentSection: FunctionComponent<ContentSectionProps> = ({ children,  title }) => {
  return (
    <div className="content-section--wrapper">
      <div className="content-section">
        <h2 className="content-section--title">{title}</h2>
        <div className="content-section--content">{children}</div>
      </div>
    </div>
  );
};

export { ContentSection };
export type { ContentSectionProps };
