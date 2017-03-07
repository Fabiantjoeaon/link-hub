import React from 'react';
import Group from './Group';

const GroupList = ({ groups, links }) => (
    <div>
        {groups.map(group =>
            <Group key={group.id} {...group} />
        )}
    </div>
);

export default GroupList;