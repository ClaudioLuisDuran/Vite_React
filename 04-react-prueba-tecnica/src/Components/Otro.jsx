import { useCatImage } from "../hooks/useCatImage"

export function Otro() {
    const { imageUrl } = useCatImage({ fact: 'catOK' })
    return (
        <>
            {imageUrl && <img src={imageUrl} />}
        </>
    )

}