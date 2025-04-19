import { useEffect, useState } from "react"

export default function LoadMore() {
    const [pagination, setPagination] = useState({
        skip:0,
        limit:10,
    })
    const [reviewsExpaned, setExpanded] = useState(0)
    const [items, setItems] = useState([])
    
    const fetchItems = async () => {
        try{
            const resp = await fetch(`https://dummyjson.com/products?limit=${pagination.limit}&skip=${pagination.skip}`)
            const body = await resp.json()
            const products = [];
            for(const product of body.products){
                products.push({
                    id:product.id,
                    title:product.title,
                    description:product.description,
                    thumbnail:product.thumbnail,

                    reviews:product.reviews,
                    reviewsExpaned:false
                })
            }
            setItems(products)

        } catch (e) {
            console.error(e);
        }
    }


    const handleExpandReviews = (index) => {
        setExpanded(reviewsExpaned + 1)
        items[index].reviewsExpaned = !items[index].reviewsExpaned
    }

    useEffect(() => {
        fetchItems()
    }, [pagination])

    const handleLoadingMore = () => {
        setPagination({
            skip:pagination.skip + 10,
            limit:10,
        })
    }

    return <div>

        {items.length > 0 ? items.map((item, index) => {
            return <div className="product" key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <img src={item.thumbnail} alt="no images were provided"/>
                <span onClick={() => handleExpandReviews(index)}>see reviews</span>
                <br />
                {
                    item.reviewsExpaned ? item.reviews.map(( review, index) => {
                       return  <li key={index}>
                            {review.comment}
                        </li>
                    }) : ""
                }
            </div>
        }):  <p>Uh oh...</p>}

        <button onClick={handleLoadingMore}>Load more...</button>
    </div>

}