import { useState, useEffect } from 'react';

const useLocationData = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Starting location data fetch...");

      try {
        // We use a free, keyless service for this example.
        // For production, consider a more robust service with an API key.
        const response = await fetch('http://ip-api.com/json/?fields=status,country,org,isp');
        const data = await response.json();

        console.log("Fetched data:", data);

        if (data.status === 'success') {
          // Check if the organization name suggests a business (not a typical ISP)
          const isBusiness = data.org && !/isp|internet|broadband|communications/i.test(data.org);
          
          console.log("Organization:", data.org);
          console.log("Is business:", isBusiness);

          setLocationData({
            country: data.country,
            // Use the organization name as the company if it's a business
            company: isBusiness ? data.org : null, 
            isBusiness: isBusiness,
          });

          console.log("Set location data:", {
            country: data.country,
            company: isBusiness ? data.org : null,
            isBusiness: isBusiness,
          });
        } else {
          console.warn("API returned non-success status:", data.status);
          setLocationData(null); // Ensure data is null on error
        }
      } catch (error) {
        console.error("Failed to fetch location data:", error);
        setLocationData(null); // Ensure data is null on error
      } finally {
        setLoading(false);
        console.log("Location data fetch complete. Loading set to false.");
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures this runs only once.

  return { locationData, loading };
};

export default useLocationData;
