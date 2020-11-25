import React, { FunctionComponent } from 'react';
import './contact-card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInbox, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { ContactCardAnchors } from '../contact-card-anchors/contact-card-anchors';
import { Anchor } from '../contact-card-anchors/anchor';


interface ContactCardProps {
  anchors: Anchor[];
}

const ContactCard: FunctionComponent<ContactCardProps> = ({ anchors }) => {
  return (
    <div className="contact-card--wrapper">
      <div className="contact-card">
        <div className="contact-card--name">
          <strong>Steph Huerta</strong>
        </div>
        <div className="contact-card--item">
          <FontAwesomeIcon icon={faInbox} size="sm" fixedWidth title="Email Address"/>
          <span>stph.flwrs@gmail.com</span>
        </div>
        <div className="contact-card--item">
          <FontAwesomeIcon icon={faMapPin} size="sm" fixedWidth title="Location"/>
          <span>Austin, TX</span>
        </div>

        <ContactCardAnchors anchors={anchors}/>
      </div>
    </div>
  );
};

export { ContactCard };
export type { ContactCardAnchors };
