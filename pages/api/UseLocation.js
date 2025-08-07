// Enhanced API endpoint - pages/api/UseLocation.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log("reaching now /api/UseLocation");
    
    // Log request data (existing - keeping all your logs)
    console.log("req.headers", req.headers);
    console.log("req.socket", req.socket);
    console.log("req.connection", req.connection);
    console.log("req.ip", req.ip);
    console.log("req.body", req.body);
    console.log("req.query", req.query);
    console.log("req.params", req.params);
    console.log("req.cookies", req.cookies);
    console.log("req.signedCookies", req.signedCookies);
    console.log("req.protocol", req.protocol);
    console.log("req.hostname", req.hostname);
    console.log("req.method", req.method);
    console.log("req.url", req.url);
    console.log("req.originalUrl", req.originalUrl);
    console.log("req.path", req.path);
    console.log("req.route", req.route);

    // Enhanced IP detection with multiple methods
    const detectClientIP = (req) => {
      console.log("=== ENHANCED IP DETECTION ===");
      
      // Platform detection
      const isVercel = process.env.VERCEL || process.env.VERCEL_ENV;
      console.log("Platform detection:", { isVercel });

      // All possible IP sources
      const allIPSources = {
        // Vercel specific (priority if on Vercel)
        vercel_x_forwarded_for: isVercel ? req.headers['x-forwarded-for'] : null,
        vercel_x_real_ip: isVercel ? req.headers['x-real-ip'] : null,
        
        // Cloudflare (highest priority if detected)
        cf_connecting_ip: req.headers['cf-connecting-ip'],
        cf_ipcountry: req.headers['cf-ipcountry'],
        
        // Standard proxy headers
        x_forwarded_for: req.headers['x-forwarded-for'],
        x_real_ip: req.headers['x-real-ip'],
        x_client_ip: req.headers['x-client-ip'],
        x_cluster_client_ip: req.headers['x-cluster-client-ip'],
        
        // Other proxy headers
        forwarded_for: req.headers['forwarded-for'],
        forwarded: req.headers['forwarded'],
        client_ip: req.headers['client-ip'],
        true_client_ip: req.headers['true-client-ip'],
        
        // Direct connection
        socket_remote_address: req.socket?.remoteAddress,
        connection_remote_address: req.connection?.remoteAddress,
        req_ip: req.ip,
        
        // Additional
        remote_addr: req.headers['remote_addr'],
        http_x_forwarded_for: req.headers['http_x_forwarded_for'],
        http_client_ip: req.headers['http_client_ip'],
      };

      console.log("All IP sources:", allIPSources);

      let detectedIP = null;
      let detectionMethod = null;

      // Priority-based detection
      
      // 1. Vercel-specific detection (if on Vercel)
      if (isVercel) {
        console.log("Using Vercel-specific IP detection");
        const vercelIP = req.headers['x-forwarded-for'] || req.headers['x-real-ip'];
        if (vercelIP) {
          detectedIP = cleanIP(vercelIP);
          detectionMethod = 'vercel';
          console.log("Vercel IP detected:", detectedIP);
        }
      }

      // 2. Cloudflare detection (highest priority after Vercel)
      if (!detectedIP && isCloudflare) {
        console.log("Using Cloudflare-specific IP detection");
        if (req.headers['cf-connecting-ip']) {
          detectedIP = cleanIP(req.headers['cf-connecting-ip']);
          detectionMethod = 'cloudflare';
          console.log("Cloudflare IP detected:", detectedIP);
        }
      }

      // 3. Standard proxy headers
      if (!detectedIP) {
        const standardSources = [
          { source: req.headers['x-forwarded-for'], method: 'x-forwarded-for' },
          { source: req.headers['x-real-ip'], method: 'x-real-ip' },
          { source: req.headers['x-client-ip'], method: 'x-client-ip' },
          { source: req.headers['true-client-ip'], method: 'true-client-ip' },
        ];

        for (let { source, method } of standardSources) {
          if (source) {
            detectedIP = cleanIP(source);
            detectionMethod = method;
            console.log(`IP detected via ${method}:`, detectedIP);
            break;
          }
        }
      }

      // 4. Direct connection (fallback)
      if (!detectedIP) {
        const directSources = [
          { source: req.socket?.remoteAddress, method: 'socket' },
          { source: req.connection?.remoteAddress, method: 'connection' },
          { source: req.ip, method: 'req.ip' },
        ];

        for (let { source, method } of directSources) {
          if (source) {
            detectedIP = cleanIP(source);
            detectionMethod = method;
            console.log(`IP detected via ${method}:`, detectedIP);
            break;
          }
        }
      }

      return {
        ip: detectedIP,
        method: detectionMethod,
        allSources: allIPSources,
        platform: { isVercel, isNetlify, isCloudflare },
        vercelIP: isVercel ? (req.headers['x-forwarded-for'] || req.headers['x-real-ip']) : null,
      };
    };

    // Clean IP function
    const cleanIP = (ip) => {
      if (!ip) return null;
      
      // Handle comma-separated IPs (take first one - original client)
      if (typeof ip === 'string' && ip.includes(',')) {
        ip = ip.split(',')[0].trim();
      }
      
      // Clean up IPv6 mapped IPv4 addresses
      if (ip.startsWith('::ffff:')) {
        ip = ip.substring(7);
      }
      
      return ip;
    };

    // Get IP using enhanced detection
    const ipDetection = detectClientIP(req);
    let clientIp = ipDetection.ip;

    // Your existing fallback logic (keeping it)
    if (!clientIp) {
      clientIp = req.headers['x-forwarded-for'] || 
                 req.headers['x-real-ip'] || 
                 req.socket.remoteAddress || 
                 req.connection.remoteAddress;

      // Handle comma-separated IPs (proxies)
      if (clientIp && typeof clientIp === 'string') {
        clientIp = clientIp.split(',')[0].trim();
      }
    }

    // Fallback for local development (your existing logic)
    if (!clientIp || clientIp === '::1' || clientIp === '127.0.0.1') {
      clientIp = '24.48.0.1';
    }

    console.log('Final Client IP:', clientIp);
    console.log('Detection Method:', ipDetection.method);

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

        // Enhanced IP detection data (NEW)
        serverDetectedIP: clientIp,
        detectionMethod: ipDetection.method,
        allIPSources: ipDetection.allSources,
        vercelIP: ipDetection.vercelIP,
        isVercel: ipDetection.platform.isVercel,
        isNetlify: ipDetection.platform.isNetlify,
        isCloudflare: ipDetection.platform.isCloudflare,
        platform: ipDetection.platform,

        // All headers for debugging (NEW)
        allHeaders: req.headers,
        
        // Connection info (NEW)
        connectionInfo: {
          remoteAddress: req.socket?.remoteAddress,
          remotePort: req.socket?.remotePort,
          localAddress: req.socket?.localAddress,
          localPort: req.socket?.localPort,
          remoteFamily: req.socket?.remoteFamily,
        },
      };

      res.status(200).json(clientData);
    } else {
      console.warn('API returned non-success status:', response.data.message);
      res.status(400).json({ 
        error: response.data.message,
        serverDetectedIP: clientIp,
        detectionMethod: ipDetection.method,
        allIPSources: ipDetection.allSources,
      });
    }
  } catch (error) {
    console.error('Error fetching location data:', error.message);
    res.status(500).json({ error: 'Failed to fetch location data' });
  }
}