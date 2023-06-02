import axios from 'axios';

async function fetchData(url: string): Promise<any> {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export async function displayUserData(page: number): Promise<void> {
    const url = `https://reqres.in/api/users?page=${page}`;

    try {
        const data = await fetchData(url);
        console.log(`Data from page ${page}:`, data.data);
        // Display the data as per your requirements
    } catch (error) {
        console.error('Error displaying user data:', error);
    }
}