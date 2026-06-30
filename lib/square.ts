import { SquareClient, SquareEnvironment } from "square";

if (!process.env.SQUARE_ACCESS_TOKEN) {
  throw new Error("Falta la variable de entorno SQUARE_ACCESS_TOKEN");
}

export const square = new SquareClient({
  token: process.env.SQUARE_ACCESS_TOKEN,
  environment:
    process.env.NODE_ENV === "production"
      ? SquareEnvironment.Production
      : SquareEnvironment.Sandbox,
});
