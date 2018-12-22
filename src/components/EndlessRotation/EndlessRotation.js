// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

type Props = {
  duration: number,
  delay: number,
  repeatAfter: number,
  children: React$Node,
};

class PlanetCloud extends Component<Props> {
  static defaultProps = {
    duration: 5000,
    delay: 0,
    repeatAfter: 100,
  };

  node: ?HTMLElement;

  componentDidMount() {
    const { duration, delay, repeatAfter } = this.props;
    const { node } = this;

    if (!node) {
      return;
    }

    const orbitAnimationFrames = [
      { transform: `translateX(0%)` },
      { transform: `translateX(-${repeatAfter}%)` },
    ];

    const orbitAnimationTiming = {
      duration,
      delay,
      iterations: Infinity,
    };

    // $FlowFixMe
    node.animate(orbitAnimationFrames, orbitAnimationTiming);
  }

  render() {
    const { duration, delay, planetSize, children, ...delegated } = this.props;

    return (
      <Orbiter
        {...delegated}
        ref={node => {
          this.node = node;
        }}
      >
        {children}
      </Orbiter>
    );
  }
}

const Orbiter = styled.div`
  display: inline-block;
`;

export default PlanetCloud;