import jsonwebtoken from "jsonwebtoken";

export function generateJwt(user) {
  return jsonwebtoken.sign(
    {
      sub: user._id,
      name: user.name,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1h" }
  );
}

export function verifyJwt(token) {
  return jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
}
