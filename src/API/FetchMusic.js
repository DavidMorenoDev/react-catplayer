<<<<<<< HEAD


=======
>>>>>>> bernat
export const fetchMusic = async (url) => {
            try{
                const response = await fetch(url);
                console.log("conexion exitosa");
                return await response.json();
            } catch (error) {
                console.log("error")
            }
        };