import { useEffect, useState } from "react"
import emptyIcon from '../../assets/images/empty_list.svg';
import { MeetServices } from "../../services/MeetServices";
<<<<<<< HEAD
import { MeetListItem } from "./MeetListItem";
import { Modal } from "react-bootstrap";
=======
>>>>>>> parent of f07a050 (Aula 05 Parte 03)

const meetServices = new MeetServices();

export const MeetList = () => {

    const [meets, setMeets] = useState([]);
    const [ShowModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState<String | null >(null);

    const getMeets = async () => {
        try {
            const result = await meetServices.getMeets();
            if(result?.data){
                setMeets(result.data);
            }
        } catch (e) {
            console.log('Ocorreu erro ao listar reuniões', e);
        }
    }

<<<<<<< HEAD
    const selectToRemove = (id: string) => {
        setSelected(id);
        setShowModal(true);
    }

    const cancelSelection = () => {
        setSelected(null);
        setShowModal(false);
    }

=======
>>>>>>> parent of f07a050 (Aula 05 Parte 03)
    useEffect(() => {
        getMeets();
    }, []);

    const removeMeet = async() =>{
        try {
            const result = await meetServices.getMeets();
            if(!selected) {
                return;
            }

            await meetServices.deleteMeet(selected);
            await getMeets();
            cancelSelection();
        } catch (e) {
            console.log('Ocorreu erro ao excluir reunião:', e )
        }
    }

    return (
        <>
        <div className="container-meet-list">
            {meets && meets.length > 0
                ?
                    meets.map((meet: any) => <p>{meet.name}</p>)
                :
                    <div className="empty">
                        <img src={emptyIcon}/>
                        <p>Você ainda não possui reuniões criadas :( </p>
                    </div>
                }
        </div>
        <Modal
            show={ShowModal}
            onHide={() => setShowModal(false)}
            className="container-modal">
                <Modal.Body>
                    <div className="content">
                        <div className="container">
                        <span>Deletar Reunião</span>
                        <p>Deseja deletar reunião?</p>
                        <p>Essa ação não poderá ser desfeita.</p>
                        </div>
                        <div className="actions">
                            <span onClick={cancelSelection}>Cancelar</span>
                            <button onClick={removeMeet}>Confirmar</button>

                        </div>
                    </div>
                </Modal.Body>

        </Modal>
        </>
    )
}