import { Link } from "react-router-dom"
const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-[#f9f6f0]">
            <p className="text-6xl font-mono">?:404/:</p>
            <div className="mt-10">
                <p className="text-gray-500 text-lg font-medium">
                    there's is not <span className="text-gray-700 font-bold">Aivie</span> Pages 
                </p>
            </div>
                <div className="mt-10 text-gray-500">
                    <p>
                    if you are try to find pages on this site visit this site <Link className="text-blue-500 underline cursor-help" to={"/dashboard"}>See all Pages</Link> first
                    </p>
                </div>
                <div className="text-gray-500 mt-2">
                    <p>
                        Never look for something that doesn't exist, it will be in vain :/.
                    </p>
                </div>
                <div className="mt-10">
                    <p><span className="text-gray-400">— </span>@Aivie</p>
                </div>
        </div>
    )
}
export default ErrorPage