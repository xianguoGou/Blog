import { ILogger } from "../Logger/ILogger";
import { RemoteLogger } from "../Logger/RemoteLogger";
import { IFactory } from "./IFactory";

export class RemoteLoggerFactory implements IFactory {
  createLogger(): ILogger {
    return new RemoteLogger();
  }
}
