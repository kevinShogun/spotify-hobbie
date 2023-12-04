export const getAccessToken = async () => {
    const authOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(process.env.NEXT_PUBLIC_CLIENT_ID + ':' + process.env.NEXT_PUBLIC_SECRET_ID)
        },
        body: 'grant_type=client_credentials'
    };

    try {
        const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
        throw new Error('Failed to get access token');
    } catch (error) {
        console.error('Error getting access token:', error);
        throw error;
    }
};

export const getData = async () => {
    const dataAuth = await getAccessToken();
    const res = await fetch('https://api.spotify.com/v1/artists?ids=5BtHciL0e0zOP7prIHn3pP,7iWiAD5LLKyiox2grgfmUT,2xiIXseIJcq3nG7C8fHeBj', {
        headers: {
            'Authorization': 'Bearer ' + dataAuth.access_token
        }
    })
    const dt = await res.json();
    return dt;
}