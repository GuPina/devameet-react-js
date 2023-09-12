import { useState } from 'react';
import arrowIcon from '../../assets/images/arrow_down_collor.svg';
import { Modal } from 'react-bootstrap';

type MeetAddEditHeaderProps = {
    name: string,
    setName(s: string): void,
    color: string,
    setColor(s: string): void,
    isEdit: boolean
}

export const MeetAddEditHeader: React.FC<MeetAddEditHeaderProps> = ({ name, color, setName, setColor, isEdit }) => {

    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState <string | null>(null);

    const colors = [
        '#B0A4FF',
        '#3BD42D',
        '#5E49FF',
        '#25CBD3',
        '#0EE324',
        '#FF2B2B',
        '#D62D6F',
        '#F79434',
        '#613EED',
        '#EDBB4A',
        '#ACED26',
        '#BA8A1E',
    ]

    const cancelSelection = () => {
        setSelected(null);
        setShowModal(false);
    }
    
    const selectColor = () => {
        if(selected){
            setColor(selected);
        }

        setShowModal(false);
    }

    return (
        <>
            <div className="container-user-header">
                <span>{isEdit? 'Editar reunião' : 'Nova Reunião'}</span>
                <div>
                    <input type="text" placeholder='Digite o nome da sua reunião'
                        value={name} onChange={e => setName(e.target.value)} />
                    <div className='color-select' onClick={() => setShowModal(true)}>
                        <div className='circle' style={color ? { background: color } : {}}/>
                        <img src={arrowIcon} alt='Selecionar cor' />
                    </div>
                </div>
            </div>
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                className="container-modal">
                <Modal.Body>
                    <div className="content">
                        <div className="container">
                            <span>Selecione a cor da reunião:</span>
                            <div className='colors'>
                            {colors?.map(c => <div className={c === selected ? 'selected': ''} style={{backgroundColor: c}}
                            onClick={() => setSelected(c)}/>)}
                            </div>
                            
                        </div>
                        <div className="actions">
                            <span onClick={cancelSelection}>Cancelar</span>
                            <button onClick={selectColor}>Confirmar</button>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}