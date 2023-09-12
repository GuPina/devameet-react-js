import { useState } from "react";
import { MeetAddEditHeader } from "./MeetAddEditHeader";
import { MeetObjectPicker } from "./MeetObjectPicker";
import wallIcon from '../../assets/images/wall.svg';
import floorIcon from '../../assets/images/floor.svg';
import rugIcon from '../../assets/images/rug.svg';
import objectsJson from '../../assets/objects/objects.json';
import tableIcon from '../../assets/images/table.svg';
import chairIcon from '../../assets/images/chair.svg';
import couchIcon from '../../assets/images/couch.svg';
import decorIcon from '../../assets/images/decor.svg';
import natureIcon from '../../assets/images/nature.svg';


export const MeetEdit = () => {

    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [selected, setSelected] = useState('');

    const isFormInValid = true;

    return (
        <div className="container-principal">
            <div className="container-meet">
                <MeetAddEditHeader name={name} setName={setName}
                    color={color} setColor={setColor}
                    isEdit={true} />
                <div className="scroll">
                    <MeetObjectPicker image={wallIcon} label="Paredes" asset={objectsJson.wall} selected={selected} setObject={setSelected} />
                    <MeetObjectPicker image={floorIcon} label="Pisos" asset={objectsJson.floor} selected={selected} setObject={setSelected} />
                    <MeetObjectPicker image={rugIcon} label="Tapetes" asset={objectsJson.rug} selected={selected} setObject={setSelected} />
                    <MeetObjectPicker image={tableIcon} label="Mesas" asset={objectsJson.table} selected={selected} setObject={setSelected} />
                    <MeetObjectPicker image={chairIcon} label="Cadeiras" asset={objectsJson.chair} selected={selected} setObject={setSelected} />
                    <MeetObjectPicker image={couchIcon} label="Sofás" asset={objectsJson.couch} selected={selected} setObject={setSelected} />
                    <MeetObjectPicker image={decorIcon} label="Decoração" asset={objectsJson.decor} selected={selected} setObject={setSelected} />
                    <MeetObjectPicker image={natureIcon} label="Plantas" asset={objectsJson.nature} selected={selected} setObject={setSelected} />
                </div>

                <div className="form">
                    <span >Voltar</span>
                    <button
                        disabled={isFormInValid}
                        className={isFormInValid ? 'disabled' : ''}>Salvar</button>
                </div>
            </div>
        </div>
    )
}