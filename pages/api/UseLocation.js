// pages/api/UseLocation.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log("reaching /api /UseLocation");
    const response = await axios.get('http://ip-api.com/json/?fields=status,country,org,isp');
    console.log('Response data:', response.data);
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching location data:', error);
    res.status(500).json({ error: 'Failed to fetch location data' });
  }
}