import * as functions from 'firebase-functions';
import { AccountController } from './AccountController';
import { AccountService } from './AccountService';
import { FirestoreCrudRepository } from './FirestoreCrudRepository';
import { UserProfile } from './UserProfile';

const accountRepository: FirestoreCrudRepository<UserProfile> =
  new FirestoreCrudRepository<UserProfile>();
const accountService: AccountService = new AccountService(accountRepository);
const accountController: AccountController = new AccountController(
  accountService
);

export const findUserById = functions
  .runWith({
    timeoutSeconds: 300,
    memory: '512MB'
  })
  .https.onCall(accountController.findUserAccountById);
