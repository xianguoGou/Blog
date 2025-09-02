import { ILogger } from "../Logger/ILogger";
import { IFactory } from "./IFactory";
import { FileLogger } from "../Logger/FileLogger";

export class FileLoggerFactory implements IFactory {
  createLogger(): ILogger {
    return new FileLogger();
  }
}
