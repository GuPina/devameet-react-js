import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MeetServices } from "../../services/MeetServices";
import { MeetAddEditHeader } from "./MeetAddEditHeader";
import { MeetObjectsRoom } from "./MeetObjectRoom";

const meetServices = new MeetServices();

export const MeetAdd = () => {

    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const goBack = () => {
        return navigate(-1);
    }

    const isFormInValid = (!name || name.trim().length < 5
        || !color || color.trim().length < 4)

    const doSave = async () => {
        try {
            if (isFormInValid) {
                return;
            }

            await meetServices.createMeet({ name, color });
            return goBack();
        } catch (e: any) {

            if (e?.response?.data?.message) {
                console.log('Erro ao efetuar login:', e);;
            } else {
                console.log('Erro ao efetuar login:', e);
            }
        }
    }

    return (
        <div className="container-principal">
            <div className="container-meet">
                <MeetAddEditHeader
                    name={name}
                    color={color}
                    setName={setName}
                    setColor={setColor}
                    isEdit={false}
                />
                <div className="form">
                    <span onClick={goBack}>Voltar</span>
                    <button onClick={doSave} disabled={isFormInValid}
                        className={isFormInValid ? 'disabled' : ''}>Salvar</button>
                </div>
            </div>
            <MeetObjectsRoom />
        </div>
    )
}