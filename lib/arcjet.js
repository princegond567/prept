import arcjet, { tokenBucket } from "@arcjet/next";

export function createRateLimiter({ refillRate, interval, capacity }) {
    return arcjet({
        key: process.env.ARCJET_KEY,
        characteristics: ["userId"],
        rules: [
            tokenBucket({
                mode: "LIVE",
                refillRate,
                interval,
                capacity,
            }),
        ],
    });
}

export async function checkRateLimit({ aj, req, userId }) {
    const decision = await aj.protect(req, { userId, requested: 1 });
    if (decision.isDenied()) {
        return decision.reason.isRateLimit()
            ? "Too many requests. Please try again later."
            : "Request blocked.";
    }

    return null;
}