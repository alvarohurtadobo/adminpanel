import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router"

export default function Invoice(props) {
    const router = useRouter();
    return (
        <div style={{backgroundColor: 'white', marginLeft: '120px', marginTop: '10px' }}>
            <Link className={router.pathname == "/profile" ? "active" : ""} href="/profile">
                <Image
                    src="/assets/demo/profile_.png" // Route of the image file
                    height={1600} // Desired size with correct aspect ratio
                    width={1600} // Desired size with correct aspect ratio
                    alt="Profile"
                />
            </Link>
        </div>
    )
}
