import { useSelector } from "react-redux"
import { currentUser, access_token } from "../../services/features/auth/authSlice"
import { Link } from "react-router-dom"
import { Header } from "../../layout/components"

const Welcome = () => {
    const user = useSelector(currentUser);
    const token = useSelector(access_token)  
    
    const welcome = user ? `Welcome ${user}!` : 'Welcome!'
    const tokenAbbr = `${token.slice(0,100)}...`

    const content = (
        <section className="w-1/2 mx-auto">
            <Header />
            <h1>{welcome}</h1>
            <p>Token: {tokenAbbr}</p>
            <p><Link to="/userslist">Go to the Users List</Link></p>
            
        </section>
    )

    return content
}
export default Welcome