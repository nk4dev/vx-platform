import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const getApiData = async () => {
        const response = await fetch('https://api.varius.technology/version');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.json();
    }
    res.status(200).json({ info: await getApiData() });
}