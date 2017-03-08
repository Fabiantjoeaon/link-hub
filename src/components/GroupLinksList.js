import React from 'react';
import Link from './Link';

const GroupLinksList = ({ links }) => (
  <ul>
      {links.map(link =>
        <Link key={link.id} {...link} />
      )}
  </ul>
);

export default GroupLinksList;