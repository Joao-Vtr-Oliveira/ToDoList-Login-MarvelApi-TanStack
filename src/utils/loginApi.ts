import { Data } from "../types/Data";
import { RequestReturn } from "../types/RequestReturn";

export const login = async (data: Data): Promise<RequestReturn | null> => {
  const url = 'https://run.mocky.io/v3/49bf0d3b-a77b-4bad-8648-98e9560e12ef';
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.status} - ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Ocorreu um erro durante a solicitação');
  }
}