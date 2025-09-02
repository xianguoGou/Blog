import { ILogger } from "./ILogger";

export class DatabaseLogger implements ILogger {
  log(message: string): void {
    console.log(`Database Logger: ${message}`);
  }
}
