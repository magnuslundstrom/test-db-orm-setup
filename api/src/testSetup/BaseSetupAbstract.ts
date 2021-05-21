import { Connection } from 'typeorm';

export abstract class BaseSetupAbstract<T extends {}> {
  protected abstract connection: Connection;
  protected abstract data: T[];

  public abstract instantiateOne(): Promise<void>;
  public abstract instatiateAll(): Promise<void>;
}
