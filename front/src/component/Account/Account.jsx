import { Edit } from "lucide-react";
import DefaultStructure from "../Default structure/DefaultStructure";

const Account = ({username}) => {
    return(
        <DefaultStructure>
            <div className="">
                <span></span>
                <div>
                    <p>{username}</p>
                    <Edit />
                </div>
            </div>
        </DefaultStructure>
    )
}