import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';  // Import HttpService
import { AxiosResponse } from 'axios';
import { lastValueFrom } from 'rxjs'; // Use lastValueFrom to convert observable to promise

@Injectable()
export class GatewayService {
  constructor(private readonly httpService: HttpService) {}

  // Method to forward HTTP requests to another service (e.g., product-service)
  async forwardRequest(url: string, method: string, body?: any): Promise<AxiosResponse> {
    try {
      if (method === 'GET') {
        return await lastValueFrom(this.httpService.get(url)); // Convert observable to promise
      } else if (method === 'POST') {
        return await lastValueFrom(this.httpService.post(url, body)); // Convert observable to promise
      }
    } catch (error) {
      throw new Error(`Error forwarding request to ${url}: ${error.message}`);
    }
  }
}

