import { Connection } from 'typeorm';

export abstract class BaseSetupAbstract<T extends {}> {
  protected abstract connection: Connection;
  protected abstract data: T[];

  public abstract instantiateOne(): Promise<void>;
  /**
   * DO NOT DO LIKE THIS:
   *
   ** groups.forEach((group) => {
   **  proms.push(repo.save(Group.createNewInstance(group)));
   ** });
   ** await Promise.all(proms);
   *
   * The reason is simple. We cannot trust the order of groups being saved for us to test correctly.
   */
  public abstract instantiateAll(): Promise<void>;
}
