const log = (level, timestamp, message) => {
	return `[${level}] ${timestamp} ${message}`;
};

const logInfo = log.bind(null, "INFO");

console.log(logInfo("10:00", "App started"));
