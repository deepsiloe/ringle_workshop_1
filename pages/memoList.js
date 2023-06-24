import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

export default function MemoList() {

    const [memos, setMemos] = useState([])
    const router = useRouter()

    useEffect(() => {
        getMemos()
    }, [])

    const getMemos = async () => {
        const res = await fetch("/api/getMemos")
        const json = await res.json()
        setMemos(json.memos)
    }

    const navigateToMemo = (id) => {

        router.push("/memo/" + id)
    }

    return (
        <main>
            hahaha...
            {memos.map((memo, index) => {
                return <div key={index} onClick={e => navigateToMemo(memo.id)}>
                    {memo.id}<br />
                    {memo.title}<br />
                    {memo.body}<br />
                    {memo.createdAt}<br />
                </div>
            })}
        </main>
    )
}

