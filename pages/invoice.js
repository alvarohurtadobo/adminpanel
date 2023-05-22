import Image from 'next/image';

export default function Invoice(props) {
    return (
        <div style={{backgroundColor: 'white', marginLeft: '280px', marginTop: '10px' }}>
            <Image
                src="/assets/demo/invoice.png" // Route of the image file
                height={1200} // Desired size with correct aspect ratio
                width={1200} // Desired size with correct aspect ratio
                alt="Invoice"
            />
        </div>
    )
}
