import { useState, useEffect } from 'react';

const useLocationData = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Starting location data fetch...");
      try {
        const response = await fetch('/api/UseLocation'); // Use relative URL for Next.js API route
        const data = await response.json();

        console.log("Fetched data:", data);

        if (data.status === 'success') {
          const isBusiness = data.org && !/isp|internet|broadband|communications/i.test(data.org);
          console.log("Organization:", data.org);
          console.log("Is business:", isBusiness);

          setLocationData({
            country: data.country,
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
          setLocationData(null);
        }
      } catch (error) {
        console.error("Failed to fetch location data:", error);
        setLocationData(null);
      } finally {
        setLoading(false);
        console.log("Location data fetch complete. Loading set to false.");
      }
    };

    fetchData();
  }, []);

  return { locationData, loading };
};

export default useLocationData;