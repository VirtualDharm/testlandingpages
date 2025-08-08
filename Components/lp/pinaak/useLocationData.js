// useLocationData.js
import { useState, useEffect } from 'react';

const useLocationData = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Starting location data fetch...");
      try {
        const response = await fetch('/api/UseLocation');
        const data = await response.json();
        console.log("Fetched data:", data);

        if (data.status === 'success') {
          const isBusiness = data.org && !/isp|internet|broadband|communications/i.test(data.org);
          console.log("Organization:", data.org);
          console.log("Is business:", isBusiness);

          setLocationData({
            // Location data
            country: data.country,
            company: isBusiness ? data.org : null,
            isBusiness: isBusiness,
            country: data.country,
            countryCode: data.countryCode,
            region: data.region,
            regionName: data.regionName,
            city: data.city,
            zip: data.zip,
            lat: data.lat,
            lon: data.lon,
            timezone: data.timezone,
            
            // Network data
            isp: data.isp,
            org: data.org,
            company: isBusiness ? data.org : null,
            isBusiness: isBusiness,
            
            // Client data (existing)
            userAgent: data.userAgent,
            acceptLanguage: data.acceptLanguage,
            referer: data.referer,
            screenResolution: data.screenResolution,
            
            // Security data
            isProxy: data.proxy,
            isHosting: data.hosting,
            isMobile: data.mobile,
            
            // Enhanced IP detection data
            serverDetectedIP: data.serverDetectedIP,
            vercelIP: data.vercelIP,
            allIPSources: data.allIPSources,
            detectionMethod: data.detectionMethod,
            
            // Platform detection
            platform: data.platform,
            isVercel: data.isVercel,
            
            // Additional headers
            allHeaders: data.allHeaders,
            connectionInfo: data.connectionInfo,
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