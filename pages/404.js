import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {

    const router = useRouter();

    // use effet to fire a function only when component first mount
    // 2 arguments, function and an empty array (dependecy empty array) for only fire this function once 
    // when the components first mount and not again if any state changes
    useEffect(() => {
        // 3000 miliseconds
        setTimeout(() => {
            // router.go(-1)
            // router.go(1)
            router.push('/')
        }, 10000)
    }, [])

    return (
    <div className="not-found">
        <h1>Ooops...</h1>
        <h2>That page cannot be found :(</h2>
        <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
    );
}
 
export default NotFound;