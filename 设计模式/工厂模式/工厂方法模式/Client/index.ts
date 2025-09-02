import { FileLoggerFactory } from "../Factory/FileLoggerFactory";
import { DatabaseLoggerFactory } from "../Factory/DatabaseLoggerFactory";
import { RemoteLoggerFactory } from "../Factory/RemoteLoggerFactory";

const fileLoggerFactory = new FileLoggerFactory();
const fileLogger = fileLoggerFactory.createLogger();
fileLogger.log("Hello, world!");

const databaseLoggerFactory = new DatabaseLoggerFactory();
const databaseLogger = databaseLoggerFactory.createLogger();
databaseLogger.log("Hello, world!");

const remoteLoggerFactory = new RemoteLoggerFactory();
const remoteLogger = remoteLoggerFactory.createLogger();
remoteLogger.log("Hello, world!");
