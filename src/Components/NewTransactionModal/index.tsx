import { Container } from "./styles";
import Modal from "react-modal";
interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-ovelay"
      className=".react-modal-content"
    >
      <Container>
        <h2>Cadastrar Transaçao</h2>

        <input placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
