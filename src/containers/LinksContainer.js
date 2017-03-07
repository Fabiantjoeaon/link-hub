import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import styled from 'styled-components';
import GroupList from '../components/GroupList';

const StyledLinksComponent = styled.section`
    height: 50em;
    width: 85%;
    margin: 0 auto;
`;

class LinksComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.addGroup('name1', 'ffefcc');
        this.props.addGroup('name2', 'ffa37a');
        this.props.addGroup('name3', '26ff8f');
        this.props.addGroup('name4', 'ff8226');
        this.props.addGroup('name5', '19a7ff');
    }

    render() {
        return (
            <StyledLinksComponent>
                <GroupList {...this.props} />
            </StyledLinksComponent>
        );
    }
}

const mapStateToProps = (state) => ({
    groups: state.groups,
    links: state.links
});

const LinksContainer = connect(
    mapStateToProps,
    actions
)(LinksComponent);

export default LinksContainer;