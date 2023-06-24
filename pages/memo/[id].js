import {useRouter} from 'next/router'
import { useEffect, useState } from 'react';

const Memo = () => {

    const [memo, setMemo] = useState({title:"", body:"", createdAt:""})
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {

        if(id){
            requestMemoData(id)
        }

    }, [id])

    const requestMemoData = async (id) => {

        const response = await fetch(`/api/getMemo?id=${id}`)
        const jsonResponse = await response.json()
        console.log(jsonResponse.memo)

        if (jsonResponse.memo){
        setMemo(jsonResponse.memo) 
        }
        if (!jsonResponse.memo) {
            alert('..?')
        } else {
        setMemo(jsonResponse.memo)
        }
    }

    return <div>
        {id}
        Memo!!<br/>
        {memo.title}<br/>
        {memo.body}<br/>
        {memo.createdAt}<br/>
        ...?
    </div>
}


export default Memo