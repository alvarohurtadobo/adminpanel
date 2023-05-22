import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router"

export default function Summary(props) {
    const router = useRouter();
    return (
        <div style={{backgroundColor: 'white', marginLeft: '280px', marginTop: '10px' }}>
            <Link className={router.pathname == "/invoice" ? "active" : ""} href="/invoice">
                <Image
                    src="/assets/demo/summary.png" // Route of the image file
                    height={1600} // Desired size with correct aspect ratio
                    width={1600} // Desired size with correct aspect ratio
                    alt="Report summary complete"
                />
            </Link>
        </div>
    )
}
