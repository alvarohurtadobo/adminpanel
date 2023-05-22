import { useEffect } from 'react';
import Image from 'next/image'

const OverviewPage = () => {
    return (
      <div>
        <h1 style={{marginLeft: '300px', marginRight: '300px', fontWeight:"BOLD"}}>Overview</h1>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card title="Total profit" value="$95,505" percentage="+3.5%" />
          <Card title="Total expenses" value="$95,560" percentage="+2.5%" />
          <Card title="New Users" value="1,984" percentage="-9.89%" />
        </div>
            <div style={{ margin: '10px', padding: '20px', borderRadius: '10px', backgroundColor: 'white', marginLeft: '300px', marginRight: '300px' }}>
            <h2>Sales report</h2>
        <Image
            src="/assets/demo/plot.png" // Route of the image file
            height={800} // Desired size with correct aspect ratio
            width={800} // Desired size with correct aspect ratio
            alt="Invoice"
            
        />
        </div>
      </div>
    );
  };
  
  const Card = ({ title, value, percentage }) => {
    const isNegativePercentage = percentage.includes('-');
    const percentageColor = isNegativePercentage ? 'red' : 'green';
  
    return (
      <div style={{ margin: '10px', padding: '20px', borderRadius: '10px', backgroundColor: 'white' }}>
        <h2>{title}</h2>
        <p>{value}</p>
        <p style={{ color: percentageColor }}>{percentage}</p>
      </div>
    );
  };
  
  export default OverviewPage;
  