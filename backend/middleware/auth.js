import { verifyJwt } from "../helpers/jwt.js";

export function auth(request, response, next) {
  console.log("Auth middleware running");

  console.log(request.cookies);

  try {
    const token = verifyJwt(request.cookies.jwtToken);
    console.log(token);
    request.userId = token.sub;
  } catch (error) {
    console.log("Invalid token");

    return response.status(401).send("Unauthorized");
  }

  next();
}
