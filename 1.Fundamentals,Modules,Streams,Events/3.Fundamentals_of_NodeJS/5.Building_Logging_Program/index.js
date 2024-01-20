import { writeLogLine, readLogFile, appendLogLine } from "./logger.js";

writeLogLine("log.txt", "test line\n");
readLogFile("log.txt");
appendLogLine("log.txt", "second test line\n");
readLogFile("log.txt");
