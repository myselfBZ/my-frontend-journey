import { useEffect, useState } from "react";

const url = 'https://picsum.photos/v2/list?page=18&limit=10'

export default function Slider() {
    const [err, setErr] = useState("")
    const [loading, setLoading] = useState(true)
    const [images, setImages] = useState([])
    const [currentImage, setCurrentImage] = useState({
        url:"",
        author:"",
        index:0
    })
    useEffect(() => {
        const fetchImages = async () => {
            try{
                const resp = await fetch(url)
                const images = await resp.json()
                setImages(images)
                setCurrentImage({
                    author:images[0].author,
                    url:images[0].download_url,
                    index:0
                })
            } catch(e) {
                setErr(err.message || "Unknown Error")
            }

        }
        fetchImages()
        setLoading(false)
    }, [])



    const handleNext = () => {
        if(currentImage.index + 1 >= images.length){
            setCurrentImage({
                author:images[0].author,
                url:images[0].download_url,
                index:0
            })
        } else {
            const nextImage = images[currentImage.index + 1]
            setCurrentImage({
                author:nextImage.author,
                url:nextImage.download_url,
                index:currentImage.index + 1
            })
        }
    }

    if(loading) {
        return <h1>Loading images please wait a sec...</h1>
    }

    if(err !== "") {
        return <h1>Couldn't load the images today...sorry</h1>
    }

    return  <div className="imageCurrent">
        <h1>{currentImage.author}</h1>
        {
        currentImage.url ? 
        <img src={currentImage.url} alt="Loading..." /> 
        : <p>no images</p>
        }

        <button onClick={handleNext}>Next</button>
        <p>{currentImage.index + 1} out of {images.length}</p>
        { err }
    </div>
}