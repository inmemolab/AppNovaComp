// Importamos librerias
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError, InternalAxiosRequestConfig} from "axios";
// Variable para manejo de log´s - activar o desactivar
const debugThis = true;

// Descripción: Cliente para uso de llamados a apis o BackEnd
// Verificado: SI
// Creado por: Guillermo Corredor
// Fecha de creación: 06/13/2024
// NOTA:

// Interfaz personalizada que extiende AxiosRequestConfig
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  metadata?: {
    startTime: Date;
  };
}
// Cliente
export class ClientsCore {
  private static instance: ClientsCore;
  private client: AxiosInstance;

  private constructor() {
    this.client = axios.create({
      baseURL: `https://6172cfe5110a740017222e2b.mockapi.io/elements`,
      timeout: 1000 * 60,
      headers: {
        "Content-Type": "application/json"
      }
    });

    this.client.interceptors.request.use(this.handleRequest.bind(this));
    this.client.interceptors.response.use(this.handleSuccessResponse.bind(this), this.handleErrorResponse.bind(this));
  }

  public static getInstance(): ClientsCore {
    if (!ClientsCore.instance) {
      ClientsCore.instance = new ClientsCore();
    }
    return ClientsCore.instance;
  }

  public getClient(): AxiosInstance {
    return this.client;
  }

  private handleRequest(config: CustomAxiosRequestConfig): InternalAxiosRequestConfig<any> {
    config.metadata = {startTime: new Date()};
    return config as InternalAxiosRequestConfig<any>;
  }

  private handleSuccessResponse(response: AxiosResponse): AxiosResponse {
    const endTime = new Date();
    const startTime = (response.config as CustomAxiosRequestConfig).metadata?.startTime;
    if (startTime) {
      const elapsedTime = endTime.getTime() - startTime.getTime();
      if (debugThis) {
        console.log(`📡 ---> ClientsCore - Tiempo de respuesta: ${elapsedTime} ms`);
        console.log(`📡 ---> ClientsCore - respuesta: ${JSON.stringify(response)}`);
      }
    }
    return response;
  }

  private handleErrorResponse(error: AxiosError): Promise<AxiosError> {
    // Manejar errores de respuesta aquí si es necesario
    console.error("🧨 ---> ClientsCore - error:", JSON.stringify(error, null, 2));
    return Promise.reject(error);
  }
}
