import { Loader2 } from "lucide-react";

export default function Loader() {
    return (
        <div className="relative flex items-center justify-center" style={{ width: 64, height: 64 }}>
            <span className="absolute inset-0 flex items-center justify-center">
                <Loader2
                    className="animate-spin-reverse text-primary/40"
                    style={{ width: 60, height: 60 }}
                />
            </span>
            <span className="relative flex items-center justify-center">
                <Loader2
                    className="animate-spin text-primary"
                    style={{ width: 32, height: 32, }}
                />
            </span>
        </div>
    )
}