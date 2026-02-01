const BASE_API = import.meta.env.VITE_SERVER_API;

export const messageServices = {

    postMessage: async (endpoint, data) => {
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
            return responseData;
        } catch (error) {
            console.log(`Erorr: ${error}`)
            throw error
        }
    },

    getMessages: async (endpoint) => {
        try {
            const request = new Request(`${BASE_API}/api/${endpoint}`, {
                method: "GET",
            })
            const response = await fetch(request)
            if (!response.ok) throw new Error("Unsuccessful backend connectivity.")
            const data = await response.json()
            return data
        } catch (error) {
            console.log(`Error: ${error.message}`)
            throw error
        }
    },

    updateMessage: async (endpoint, data) => {
        try {
            const request = new Request(`${BASE_API}/api/${endpoint}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const response = await fetch(request)
            if (!response.ok) throw new Error("Unsuccessful backend connectivity.")
            const responseData = await response.json()
            return responseData
        } catch (error) {
            console.log(`Error: ${error.message}`)
            throw error
        }
    },

    deleteMessage: async (enpoint, id) => {
        try {
            const request = new Request(`${BASE_API}/api/${enpoint}`, {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(id)
            })            
            const response = await fetch(request)
            if (!response.ok) throw new Error("Unsuccessful backend connectivity.")
            const data = await response.json()
            return data
        } catch (error) {
            console.log(`Error: ${error.message}`)
            throw error
        }
    },
    
}