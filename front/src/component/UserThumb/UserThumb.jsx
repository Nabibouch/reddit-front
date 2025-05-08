import {useState, useRef} from "react"

export function UserThumb() {

    const [photo, setPhoto] = useState(null)
    const inputRef = useRef()
    const imageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPhoto(reader.result)
                localStorage.setItem("userPhoto", reader.result)
            }
        reader.readAsDataURL(file)
        }
    }

    const removeImage = () => {
        setPhoto(null)
        inputRef.current.value = null
    }

    const fileSelect= () => {
        inputRef.current.click()
    }

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="w-22 h-22 rounded-full bg-gray-60 verflow-hidden relative-group">
                {photo ? (
                    <img src="{photo}" alt="Photo de profil" className="object-cover w-fullh-full" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-80 text-4xl">👤</div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex felx-col items-center justify-center space-y-2">
                    <button onClick ={fileSelect} className="">Modifier</button>
                    {photo && (
                        <button onClick={removeImage} className="">Supprimer</button>
                    )}
                </div>
            </div>

            <input type="file" accept="image/*" ref={inputRef} onChange={imageChange} className="hidden" />

        </div>
        )
    }

