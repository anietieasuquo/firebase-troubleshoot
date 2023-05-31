/**
 * FirestoreCrudRepository extends CrudRepository to interact with firestore.
 */
class FirestoreCrudRepository<T> {
  /**
   * Find entity by ID
   * @param id Entity ID
   */
  public async findById(id: string): Promise<T | undefined> {
    console.log(`Find by id: ${id}`);
    return undefined;
  }
}

export { FirestoreCrudRepository };
