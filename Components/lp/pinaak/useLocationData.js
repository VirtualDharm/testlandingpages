import { useState, useEffect } from 'react';

const useLocationData = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // We use a free, keyless service for this example.
        // For production, consider a more robust service with an API key.
        const response = await fetch('http://ip-api.com/json/?fields=status,country,org,isp');
        const data = await response.json();

        if (data.status === 'success') {
          // Check if the organization name suggests a business (not a typical ISP)
          const isBusiness = data.org && !/isp|internet|broadband|communications/i.test(data.org);
          
          setLocationData({
            country: data.country,
            // Use the organization name as the company if it's a business
            company: isBusiness ? data.org : null, 
            isBusiness: isBusiness,
          });
        }
      } catch (error) {
        console.error("Failed to fetch location data:", error);
        setLocationData(null); // Ensure data is null on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this runs only once.

  return { locationData, loading };
};

export default useLocationData;