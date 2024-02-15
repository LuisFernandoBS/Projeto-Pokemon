import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Row, Col} from 'react-bootstrap';
import '../styles/components/DetalhesCard.css'


interface DetalhesCardProps {
    url: string;
    showModal: boolean;
    fecharModal: Function;
}

const DetalhesCard: React.FC<DetalhesCardProps> = ({url,fecharModal,showModal}) => {

  return (
    <>
      <Modal
        show={showModal}
        onHide={() => fecharModal(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        className='glass-modal'
      >
        <Modal.Body className='px-0 py-0'>
            <Row className="justify-content-center">
                 <Col sm="auto" md="auto" lg="auto" xl="auto" xxl="auto">
                    <img src={url} className='imgCardDetalhesCard'/>
                 </Col>
            </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DetalhesCard;