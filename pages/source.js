import {useRouter} from 'next/router'

const Memo = () => {


    const router = useRouter();
    const { id } = router.query;


    

    return <div>
        {id}
        Memo!!
    </div>

}


export default Memo