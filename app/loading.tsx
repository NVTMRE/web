import Loader from "@/components/loader";

export default function Loading() {
    return(
        <div className="h-[calc(100vh-3rem)] flex items-center justify-center">
            <Loader />
        </div>
    )
}