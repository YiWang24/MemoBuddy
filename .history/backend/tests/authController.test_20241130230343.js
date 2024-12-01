const { describe, it, expect, vi, beforeEach } = require("vitest");
const { checkUserExists } = require("../controllers/authController");
const User = require("../models/User");
