import {Component} from "react";

import {InfoModalContainer, Title} from "./InfoModal.styled";

export interface InfoModalProps {
  handleClose: () => void;
}

class InfoModal extends Component<InfoModalProps> {
  constructor(props: InfoModalProps) {
    super(props);
  }

  render() {
    return (
      <InfoModalContainer>
        <Title>Chart Updated</Title>
        <button onClick={this.props.handleClose}>Close</button>
      </InfoModalContainer>
    );
  }
}

export default InfoModal;
