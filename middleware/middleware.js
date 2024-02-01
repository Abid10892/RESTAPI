const express = require("express");
const app = express();

// Custom middleware function
exports.requestLoggerMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const accessToken = req.headers.authorization || "No access token";

  console.log(`[${timestamp}] ${method} ${url} - Access Token: ${accessToken}`);

  // Continue with the next middleware or route handler
  next();
};
