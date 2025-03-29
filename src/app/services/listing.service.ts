import { inject, Injectable } from '@angular/core';
import { Databases, ID } from 'appwrite';
import { databases } from '../../lib/appwrite';
import { Home } from '../interfaces/home';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private readonly DATABASE_ID = 'Reena';
  private readonly COLLECTION_ID = 'listings';

  private readonly databases: Databases = databases;
  private readonly router = inject(Router);
  private readonly messageService = inject(MessageService);

  // TODO: Handle Home type error in return
  async getAllListings() {
    try {
      const response = await this.databases.listDocuments(
        this.DATABASE_ID,
        this.COLLECTION_ID
      );
      return response.documents;
    } catch (error) {
      this.handleError(error, 'Failed to fetch listings');
      return [];
    }
  }

  async createListing(data: Home): Promise<void> {
    try {
      const response = await this.databases.createDocument(
        this.DATABASE_ID,
        this.COLLECTION_ID,
        ID.unique(),
        data
      );
      this.showToast('success', 'Listing created successfully', 'Success');
      await this.router.navigate([`/listings/${response.$id}`]);
    } catch (error) {
      this.handleError(error, 'Failed to create listing');
    }
  }

  // TODO: Handle Home type error in return
  async getListing(id: string) {
    try {
      return await this.databases.getDocument(
        this.DATABASE_ID,
        this.COLLECTION_ID,
        id
      );
    } catch (error) {
      this.handleError(error, 'Failed to fetch listing');
      await this.router.navigate([`/listings`]);
      return null;
    }
  }

  private showToast(severity: string, detail: string, summary: string): void {
    this.messageService.add({ severity, summary, detail });
  }

  private getErrorMessage(error: unknown): string {
    return error instanceof Error ? error.message : String(error);
  }

  private handleError(error: unknown, context: string): void {
    const message = this.getErrorMessage(error);
    this.showToast('error', `${context}: ${message}`, 'Error');
  }
}
