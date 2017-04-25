import React from 'react';
import Link from './Link';
import styled from 'styled-components';

const StyledGroupLinksListContainer = styled.div `
    height: 68%;
    margin: 0 auto;
    overflow: auto;
    width: 85%;
    position: relative;
`;

const StyledGroupLinksList = styled.table `
    width: 100%;
    border-spacing: 0px;
`;

const GroupLinksList = ({
    links,
    ...props
}) => (
    <StyledGroupLinksListContainer>
        <StyledGroupLinksList cellspacing="0" cellpadding="0">
            <tbody>
                {links.map(link => <Link id={link.id} key={link.id} {...props} {...link}/>)}
            </tbody>
        </StyledGroupLinksList>
    </StyledGroupLinksListContainer>
);

export default GroupLinksList;