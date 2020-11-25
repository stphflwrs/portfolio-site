import React, { FunctionComponent } from 'react';
import './contact-card-anchors.scss';
import { Anchor } from './anchor';


interface ContactCardAnchorsProps {
  anchors: Anchor[];
}

const ContactCardAnchors: FunctionComponent<ContactCardAnchorsProps> = ({ anchors }) => {
  return (
    <div className="contact-card-anchors--wrapper">
      <div className="contact-card-anchors">
        {anchors.map((anchor: Anchor) => (
          <div key={anchor.label} onClick={() => scrollToAnchor(anchor)} className="contact-card-anchors--anchor">
            <span className="anchor--label">{anchor.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

function scrollToAnchor(anchor: Anchor): void {
  if (anchor.ref.current && anchor.ref.current.scrollIntoView) {
    anchor.ref.current.scrollIntoView({ behavior: 'smooth' });
  }
}

export { ContactCardAnchors };
export type { ContactCardAnchorsProps };
