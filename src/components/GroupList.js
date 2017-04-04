import React from 'react';
import Group from '../containers/Group';
import styled from 'styled-components';

const StyledGroupList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    transform: ${props => props.visible ? 'translate3d(0px,0px,-89px)' : 'translate3d(0px,0px,0px)'};
    transition: all ${props => props.visible ? '0.7s 0.5s' : '0.8s 0.4s'} cubic-bezier(0.19, 1, 0.22, 1);
    
    &:before, &:after {
        content: none;
        width: 0;
    }
`;

const GroupList = ({ groups, links, visible, ...props}) => (
    <StyledGroupList visible={visible}>
        {groups.map(group =>
            <Group
                groupId={group.id}
                key={group.id}
                {...group}
                {...props} />
        )}
    </StyledGroupList>
);

export default GroupList;