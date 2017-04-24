import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import colorLuminance from '../lib/colorLuminance';
import bindAll from 'lodash/bindAll';

const StyledGroupSVGOverlay = styled.svg`
    width: calc(100%);
    height: calc(100%);
    position: absolute;
    top: 0;
    left: 0;

    path {
        transition: stroke-dashoffset 3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

`;

export default class GroupSVGOverlay extends Component {
    constructor(props) {
        super(props);

        this.state = { width: 0, height: 0 };

        bindAll(this, '_updateDimensions');
    }

    componentDidMount() {
        this._updateDimensions();
        window.addEventListener('resize', this._updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._updateDimensions);
    }

    _updateDimensions() {
        const node = ReactDOM.findDOMNode(this);
        const width = node.clientWidth;
        const height = node.clientHeight;
        this.setState({width, height});
    }

    render() {
        const {width, height, classNameProp} = this.state;
        const color = `#${this.props.color}`;
        const darkerColor = colorLuminance(color, -0.2);
        return (
            <StyledGroupSVGOverlay className={classNameProp} preserveAspectRatio="xMaxYMax meet">
                <path d={`M0 0 H${width}  V${height} H 0 L 0 0`} stroke={darkerColor} strokeWidth="3" fill="none"/>
            </StyledGroupSVGOverlay>
        )
    }
}