// UseLocation.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log("req.headers", req.headers);
    console.log("req.cookies", req.cookies);
    console.log("req.signedCookies", req.signedCookies);

    // Enhanced IP geolocation with more fields (your existing call)
    const response = await axios.get(
      `http://ip-api.com/json/${clientIp}?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,proxy,hosting,mobile,query`
    );

    if (response.data.status === 'success') {
      // Collect additional client information from headers (enhanced)
      const clientData = {
        ...response.data,
        
        // Your existing header data
        userAgent: req.headers['user-agent'],
        acceptLanguage: req.headers['accept-language'],
        acceptEncoding: req.headers['accept-encoding'],
        referer: req.headers['referer'] || req.headers['referrer'],
        origin: req.headers['origin'],
        host: req.headers['host'],
        connection: req.headers['connection'],
        cacheControl: req.headers['cache-control'],
        dnt: req.headers['dnt'], // Do Not Track
        upgradeInsecureRequests: req.headers['upgrade-insecure-requests'],
        
        // Cloudflare specific headers (your existing)
        cfRay: req.headers['cf-ray'],
        cfCountry: req.headers['cf-ipcountry'],
        cfConnectingIp: req.headers['cf-connecting-ip'],
        
        // Additional network info (your existing)
        xForwardedFor: req.headers['x-forwarded-for'],
        xRealIp: req.headers['x-real-ip'],
        xForwardedProto: req.headers['x-forwarded-proto'],
        xForwardedHost: req.headers['x-forwarded-host'],
        
        // Request metadata (your existing)
        requestTime: new Date().toISOString(),
        requestMethod: req.method,
        requestUrl: req.url,
        protocol: req.protocol,
        secure: req.secure,

        // All headers for debugging (NEW)
        allHeaders: req.headers,
      };

      res.status(200).json(clientData);
    } else {
      console.warn('API returned non-success status:', response.data.message);
      res.status(400).json({ 
        error: response.data.message,
      });
    }
  } catch (error) {
    console.error('Error fetching location data:', error.message);
    res.status(500).json({ error: 'Failed to fetch location data' });
  }
}