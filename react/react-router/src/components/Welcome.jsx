import { useParams } from "react-router-dom"

export function Welcome() {
    const {name} = useParams()
    return(
        <p>Welcome {name}!</p>
    )
}