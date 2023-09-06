import { useParams } from "react-router-dom";
import Invitation from "../components/WorkSpace/Invitation";
import { useEffect } from "react";


const InvitationWorkspace = () => {
  const { id } = useParams();

    return(
        <section>
            <Invitation id={id}/>
        </section>
    )
}
export default InvitationWorkspace;
