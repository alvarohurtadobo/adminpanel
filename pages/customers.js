import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router"

export default function Customers(props) {
    const router = useRouter();
    return (
        <div style={{backgroundColor: 'white', marginLeft: '280px', marginTop: '10px' }}>
            <Link className={router.pathname == "/profile" ? "active" : ""} href="/profile">
                <Image
                    src="/assets/demo/customers.png" // Route of the image file
                    height={1200} // Desired size with correct aspect ratio
                    width={1200} // Desired size with correct aspect ratio
                    alt="Customers"
                    />
            </Link>
        </div>
    )
}
