import { FC } from "react";
import { Link } from "react-router-dom";

const CardWorkspace: FC<WorkspaceUser> = ({nameWorkSpace, _id, members, profileImage}) => {
    return(
        <div className="px-12 py-6 w-full border-b border-b-black/10 flex items-center justify-between">
            <div className="flex items-center gap-x-3">
                {
                    !profileImage || !profileImage.length ? 
                    <div className={`bg-[#F39F5A] text-white text-xl flex items-center justify-center w-16 h-16 rounded-full uppercase font-semibold`}>
                        <span>
                        {nameWorkSpace && nameWorkSpace.split(" ")[0] ? nameWorkSpace.split(" ")[0][0] : ''}
                        {nameWorkSpace && nameWorkSpace.split(" ")[1] ? nameWorkSpace.split(" ")[1][0] : ''}
                        </span>
                    </div> :
                    <img className="w-12 h-12 rounded-full" src={profileImage} alt="foto usuario" />
                }
                <div className="text-secundary-color">
                    <h3 className="font-semibold">{nameWorkSpace}</h3>
                    <span className="font-thin">{!members.length  ? "Aun no existen miembros en el espacio de trabajo" : <span>{members.length} persona están en este espacio de trabajo</span>}</span>
                </div>
            </div>
            <Link to={`./${_id}`} className="bg-secundary-color text-white rounded-lg px-10 py-2">Iniciar conexión</Link>
        </div>
    )
}
export default CardWorkspace;
