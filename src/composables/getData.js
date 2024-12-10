//recuerda este composable es para que sea reutilizado en cual quier componente que requiera llamar
//a una api
import { ref } from "vue"
import axios from "axios"
export const useGetData= () => {

  const data = ref(null)
  const errorData = ref(null)
  const loading = ref(true)
  const getData = async (url) =>{
    try {
      const res =  await axios.get(url)
      data.value= res.data
    } catch (e) { 
      errorData.value="Error de Servidor"
    }
    finally {
      loading.value= false
    }
  }

  return{
    getData,
    data,
    loading,
    errorData
  }
}