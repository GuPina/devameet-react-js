
import { useState } from 'react';
import downIcon from '../../assets/images/arrow_object_down.svg';
import rightIcon from '../../assets/images/arrow_object_right.svg';
import addIcon from '../../assets/images/plus_circle.svg';


type MeetObjectPicker = {
    image: string,
    label: string,
    asset: string,
    selected: string,
    setObject(s:string): void
}

export const MeetObjectPicker: React.FC<MeetObjectPickerType> = ({ image, label, asset, selected, setObject }) => {

    const [show, setShow] = useState(false)

    const getImageFromObject = (object: string) => {
        if(object && object.trim().length > 0){
            const path = `../../assets/objects/${asset.path}/${object}${asset.canRotate ? '_front' :'' }.png`;
            const imageUrl = new URL(path, import.meta.url);
            return imageUrl.href; 
        }
    }

    const selectObject = (o:string) => {
        setObject(o);
    }

    return (
        <div className="container-object-picker">
            <div className="action" onClick={() => setShow(!show)}>
                <img src={image} />
                <span>{label}</span>
                {!show 
                    ? <img src={downIcon} /> 
                    : <img src={rightIcon} />}
            </div>
            {show && <div className='objects'>
                {asset?.objects?.map((o: any) =>
                    <div className={o === selected ? 'selected' : ''} onClick={() => selectObject(o)}>
                        <img src={getImageFromObject(o)}
                            className={'object ' + (asset.path === 'wall' || asset.path === 'couch' ? 'large' : '')}
                            />
                            <img src={addIcon} className='add'/>
                    </div>
                )}
            </div>}
        </div>
    )
}