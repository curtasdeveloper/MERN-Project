const BASE_API = import.meta.env.VITE_SERVER_API;

export default async function sendMessage(endpoint, data) {
    try {
        const request = new Request(`${BASE_API}/api/${endpoint}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const response = await fetch(request);
        if (!response.ok) throw new Error("Unsuccessfull POST request.")
        const responseData = await response.json()
        console.log(responseData)
    } catch (error) {
        console.log(`Erorr: ${error}`)
    }
}