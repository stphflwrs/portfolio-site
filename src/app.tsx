import React, { FunctionComponent, RefObject, useEffect, useRef, useState } from 'react';
import './app.scss';
import { ContactCard } from './contact-card/contact-card';
import { ContentSection } from './content-section/content-section';
import { ContentSectionDivider } from './content-section-divider/content-section-divider';
import { fetchMarkdown } from './lib/fetch-markdown';
import ReactMarkdown from 'react-markdown';
import { Anchor } from './contact-card-anchors/anchor';


const App: FunctionComponent = () => {
  const [resumeMd, setResumeMd] = useState<string>('');
  const [portfolioMd, setPortfolioMd] = useState<string>('');
  const [linksMd, setLinksMd] = useState<string>('');

  const resumeSectionRef: RefObject<any> = useRef(null);
  const portfolioSectionRef: RefObject<any> = useRef(null);
  const linksSectionRef: RefObject<any> = useRef(null);

  const anchors: Anchor[] = [{
    label: 'Resume',
    ref: resumeSectionRef
  }, {
    label: 'Portfolio',
    ref: portfolioSectionRef
  }, {
    label: 'Links',
    ref: linksSectionRef
  }];

  useEffect(() => {
    fetchMarkdown('resume').then((markdown: string) => setResumeMd(markdown));
    fetchMarkdown('portfolio').then((markdown: string) => setPortfolioMd(markdown));
    fetchMarkdown('links').then((markdown: string) => setLinksMd(markdown));
  }, []);

  return (
    <div className="app--wrapper">
      <div className="app">
        <div className="app--contact-card">
          <ContactCard anchors={anchors}/>
        </div>
        <div className="app--content-sections">
          <div ref={resumeSectionRef}>
            <ContentSection title="Resume">
              <ReactMarkdown>{resumeMd}</ReactMarkdown>
            </ContentSection>
          </div>
          <ContentSectionDivider/>
          <div ref={portfolioSectionRef}>
            <ContentSection title="Portfolio">
              <ReactMarkdown>{portfolioMd}</ReactMarkdown>
            </ContentSection>
          </div>
          <ContentSectionDivider/>
          <div ref={linksSectionRef}>
            <ContentSection title="Links">
              <ReactMarkdown>{linksMd}</ReactMarkdown>
            </ContentSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export { App };
