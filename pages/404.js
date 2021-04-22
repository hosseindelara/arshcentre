import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Custom404() {
    const router = useRouter()
    useEffect(() => {
        router.push('/')
        return () => {

        }
    }, [])
    https://www.npmjs.com/package/nookies
    return (
        <div>
            <h1 className=' mx-auto  ' >404 Page</h1>
        </div>
    )
}
