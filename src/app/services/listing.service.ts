import { Injectable } from '@angular/core';
import { Databases, ID } from 'appwrite';
import { databases } from '../../lib/appwrite';
import { Home } from '../interfaces/home';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private databases: Databases

  constructor() {
    this.databases = databases
  }

  async getAllListings() {
    try {
      const data = await this.databases.listDocuments('Reena', 'listings');
      return data.documents;
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : String(error));
    }
  }

  async createListing(data: Home) {
    try {
      return await this.databases.createDocument('Reena', 'listings', ID.unique(), data);
    } catch (catchError) {
      throw new Error(catchError instanceof Error ? catchError.message : String(catchError));
    }
  }

  async getListing(id: string) {
    try {
      return await this.databases.getDocument('Reena', 'listings', id);
    } catch (catchError) {
      throw new Error(catchError instanceof Error ? catchError.message : String(catchError));
    }
  }
}
