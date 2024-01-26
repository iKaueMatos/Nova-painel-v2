// import { IBGE_STATES } from "@/constants/BASE_API";
// import axios, { AxiosResponse } from "axios";

// interface Request {
// }

// export const fetchStates = async (request: Request): Promise<any> => {
//   try {
//     const { data }: AxiosResponse = await axios.get(IBGE_STATES);
//     if (data.response.status >= 400) {
//       throw new Error("Erro ao consultar API do IBGE");
//     }

//     return data;
//   } catch (error) {
//     console.error("Ocorreu um erro durante a solicitação da API:", error);
//     throw error;
//   }
// };
