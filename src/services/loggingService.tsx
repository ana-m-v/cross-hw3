import pino from "pino";

const logger = pino({
  timestamp: pino.stdTimeFunctions.isoTime,
});

let logs: any[] = [];

const loggingService = {
  logClick: (message: any) => {
    const logMessage = `${new Date()} - ${message} clicked`;
    logger.info(logMessage);
    logs.push(logMessage);
  },
  getLogs: () => {
    return logs;
  },
};

export default loggingService;
