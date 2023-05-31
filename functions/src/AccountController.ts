import * as functions from 'firebase-functions';
import { AccountService } from './AccountService';
import { CallableContext } from 'firebase-functions/lib/common/providers/https';
import { UserProfile } from 'UserProfile';

/**
 * AccountController for accessing user account.
 */
class AccountController {
  public constructor(private readonly accountService: AccountService) {}

  public async findUserAccountById(
    input: any,
    _context: CallableContext
  ): Promise<UserProfile | undefined> {
    functions.logger.info('Starting to find user account by ID', {
      structuredData: true
    });
    const data = input as { id: string };
    return this.accountService.findUserById(data.id);
  }
}

export { AccountController };
