import Image from "next/image"
import Link from "next/link"


export default function NotFound() {
    return (
        <>
            <div className="flex items-center justify-center w-full h-screen font-mono bg-[url('/bg.jpg')]">
                <div className="border border-blue-600 border-2 bg-white rounded overflow-hidden">
                    <Image src={"/404.gif"} width={500} height={500} alt="404-gif" />
                    <div className="text-center flex flex-col gap-8">
                        <h2 className="text-3xl font-bold">
                            Sorry
                        </h2>
                        <p>
                            Page Not Found 
                        </p>
                        <Link
                        className="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] 
                        from-blue-200 via-blue-100 to-blue-500 text-blue-800 font-bold rounded py-4 px-2 transition"
                        href={"/"}>
                            Go Home
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}