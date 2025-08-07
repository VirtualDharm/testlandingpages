// useLocationData.js - Enhanced with client-side detection
import { useState, useEffect } from 'react';

// Client-side IP detection hook
const useClientSideIP = () => {
  const [clientIP, setClientIP] = useState(null);
  const [ipLoading, setIpLoading] = useState(true);
  const [ipError, setIpError] = useState(null);

  useEffect(() => {
    const getClientIP = async () => {
      console.log("Starting client-side IP detection...");
      try {
        // Method 1: Use multiple public IP services
        const services = [
            // on wifi/mobiledata
            { url: 'https://ipapi.co/json/', field: 'ip' }, // 45.122.123.5, 2409:40e3:30:9119:5c15:6142:f555:edb7
            { url: 'https://icanhazip.com', field: null }, // 45.122.123.5, 2409:40e3:30:9119:5c15:6142:f555:edb7
            { url: 'https://api.ipify.org?format=json', field: 'ip' }, // 45.122.123.5, 152.58.130.13
            { url: 'https://ip.seeip.org/jsonip', field: 'ip' },// 45.122.123.5, 152.58.130.13
            { url: 'https://httpbin.org/ip', field: 'origin' }, // 45.122.123.5, 152.58.130.13
        ];

        for (let service of services) {
          try {
            console.log(`Trying service: ${service.url}`);
            const response = await fetch(service.url, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
              }
            });
            
            if (response.ok) {
              let data;
              if (service.field === null) {
                // Plain text response
                data = await response.text();
                const ip = data.trim();
                if (ip && isValidIP(ip)) {
                  setClientIP(ip);
                  console.log(`Client-side IP detected from ${service.url}:`, ip);
                  return;
                }
              } else {
                // JSON response
                data = await response.json();
                const ip = data[service.field];
                if (ip && isValidIP(ip)) {
                  setClientIP(ip);
                  console.log(`Client-side IP detected from ${service.url}:`, ip);
                  return;
                }
              }
            }
          } catch (serviceError) {
            console.log(`Service ${service.url} failed:`, serviceError.message);
            continue;
          }
        }

        // Method 2: WebRTC IP detection (fallback)
        console.log("Trying WebRTC IP detection...");
        await getWebRTCIP();

      } catch (error) {
        console.error('Failed to get client IP:', error);
        setIpError(error.message);
      } finally {
        setIpLoading(false);
      }
    };

    // WebRTC method for IP detection on wifi/mobiledata 152.58.130.157 152.58.130.157
    const getWebRTCIP = () => {
      return new Promise((resolve) => {
        try {
          const RTCPeerConnection = window.RTCPeerConnection || 
                                   window.webkitRTCPeerConnection || 
                                   window.mozRTCPeerConnection;

          if (!RTCPeerConnection) {
            console.log('WebRTC not supported');
            resolve();
            return;
          }

          const pc = new RTCPeerConnection({ 
            iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] 
          });
          
          pc.createDataChannel('');
          
          pc.onicecandidate = (ice) => {
            if (!ice || !ice.candidate || !ice.candidate.candidate) return;
            
            const candidate = ice.candidate.candidate;
            const ipMatch = candidate.match(/(\d+\.\d+\.\d+\.\d+)/);
            
            if (ipMatch) {
              const detectedIP = ipMatch[1];
              if (isValidIP(detectedIP) && !detectedIP.startsWith('192.168') && !detectedIP.startsWith('10.')) {
                console.log('WebRTC detected public IP:', detectedIP);
                setClientIP(detectedIP);
                pc.close();
                resolve();
              }
            }
          };

          pc.createOffer()
            .then(offer => pc.setLocalDescription(offer))
            .catch(error => {
              console.log('WebRTC offer failed:', error);
              resolve();
            });

          // Timeout after 5 seconds
          setTimeout(() => {
            pc.close();
            resolve();
          }, 5000);

        } catch (error) {
          console.log('WebRTC IP detection failed:', error);
          resolve();
        }
      });
    };

    // Basic IP validation
    const isValidIP = (ip) => {
      const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
      const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
      
      if (ipv4Regex.test(ip)) {
        // Validate IPv4 ranges
        const parts = ip.split('.').map(Number);
        return parts.every(part => part >= 0 && part <= 255);
      }
      
      return ipv6Regex.test(ip) || ip.includes(':');
    };

    getClientIP();
  }, []);

  return { clientIP, ipLoading, ipError };
};

// Enhanced main hook with both client and server detection
const useLocationData = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { clientIP, ipLoading } = useClientSideIP();

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
            clientDetectedIP: clientIP,
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
            serverIP: data.serverDetectedIP,
            clientIP: clientIP,
            vercelIP: data.vercelIP,
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

    // Wait for client IP detection to complete or timeout
    if (!ipLoading) {
      fetchData();
    }
  }, [ipLoading, clientIP]);

  return { locationData, loading };
};

export default useLocationData;