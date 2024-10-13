import { Suspense } from "react"
import LoginComponent from "./_component/LoginComponet"

const page = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <LoginComponent />
        </Suspense>
    )
}

export default page