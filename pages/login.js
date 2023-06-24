import  {useState} from 'react' ;
import {useRouter} from 'next/router'

export default function Login() {

    //hook
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter();

    const check = () => {
        if(email !== "hi"){
        alert('email is not registered')
        return false
        }

        if(password !== "000") {
        alert('password not match')
        return false
        }
        router.push("/createMemo");
    }

    return (
        <main>
        <br></br>    
        <input placeholder = "email" value = {email} onChange={e => setEmail(e.target.value)}/>
        <br/>
        <input placeholder = "password" type = "password" value ={password} onChange={e => setPassword(e.target.value)}/>
        <br/>
        <button onClick={e => check()}>login</button>
        </main>
      )
}
