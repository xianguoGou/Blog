import { ILogger } from "./ILogger";

export class RemoteLogger implements ILogger {
  log(message: string): void {
    console.log(`RemoteLogger: ${message}`);
  }
}
