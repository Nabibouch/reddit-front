// import { Edit } from "lucide-react";
// import DefaultStructure from "../Default structure/DefaultStructure";

// const Account = ({username}) => {
//     return(
//         <DefaultStructure>
//             <div className="">
//                 <span></span>
//                 <div>
//                     <p>{username}</p>
//                     <Edit />
//                 </div>
//             </div>
//         </DefaultStructure>
//     )
// }

import DefaultStructure from "../Default structure/DefaultStructure";
import { UserThumb } from "../UserThumb/UserThumb";
import Button from "../Button/Button";
import { Pencil } from "lucide-react";



export function Account() {
    return(
        <div className="flex flex-col gap-20">
            <div>
                <div className="flex flex-col items-center gap-2 font-semibold">
                    {/* <UserThumb /> */}
                    <div className="flex gap-4">
                        <p>USERNAME</p>
                        <Pencil className="w-5 h-5 text-gray-600 cursor-pointer hover:text-white"/>
                    </div>
                </div>
            </div>
            <div className="flex justify-start">
                <Button
                    name="Postes"
                    color="bg-nightblue text-white hover:bg-gray-80"
                    stroke={false}
                    stroke_color=""
                />
                <Button
                    name="Commentaires"
                    color="bg-nightblue text-white hover:bg-gray-80"
                    stroke={false}
                    stroke_color=""
                />
                <Button
                    name="Enregistrés"
                    color="bg-nightblue text-white hover:bg-gray-80"
                    stroke={false}
                    stroke_color=""
                />
            </div>
            {/* <Post /> */}
        </div>
    )
}