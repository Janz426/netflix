import { useEffect } from 'react'
import './Row.css'
import {getData} from '../api'

export default function Row({title,path,isLarge}) {

    let fetchData =async()=>{

        let result = await getData(path)

        return result

    }

    useEffect(()=>{

        let teste = fetchData()
        teste.then ((data))=>{
            
        }

    },[])

    return (
        <div className='teste'> 
        {title}
        </div>
    )
}