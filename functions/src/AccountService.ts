import { FirestoreCrudRepository } from './FirestoreCrudRepository';
import { UserProfile } from './UserProfile';

/**
 * AccountService for accessing user account.
 */
class AccountService {
  public constructor(
    private readonly userProfileRepository: FirestoreCrudRepository<UserProfile>
  ) {}

  public async findUserById(id: string): Promise<UserProfile | undefined> {
    return this.userProfileRepository.findById(id);
  }
}

export { AccountService };
