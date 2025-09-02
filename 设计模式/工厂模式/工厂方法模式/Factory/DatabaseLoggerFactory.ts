import { ILogger } from "../Logger/ILogger";
import { DatabaseLogger } from "../Logger/DatabaseLogger";
import { IFactory } from "./IFactory";

export class DatabaseLoggerFactory implements IFactory {
  createLogger(): ILogger {
    return new DatabaseLogger();
  }
}
