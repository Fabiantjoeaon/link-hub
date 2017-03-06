import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addLink} from '../actions';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onLinkDrop('bla.com', 'desc');
        this.props.onLinkDrop('bla.com2', 'desc2');
    }

    render() {
        return (
            <h1>Dashboard</h1>
        )
    }
}

const mapStateToProps = (state) => ({
    links: state.links
});

const mapDispatchToProps = (dispatch) => ({
    onLinkDrop(url, description) {
        dispatch(addLink(url, description));
    }
});

const LinkDashboard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);

export default LinkDashboard;



