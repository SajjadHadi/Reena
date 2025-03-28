import { Client, Account, Databases } from 'appwrite';
import envsDev from '../envs/dev';

export const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(envsDev.appwrite.projectId)

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from 'appwrite';
