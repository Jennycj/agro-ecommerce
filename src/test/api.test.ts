import request from "supertest";
import app from "../app";


describe("API/products", () => {
  describe("GET products", () => {
    it("Finds and send products to cart", async () => {
      const res = await request(app).get('/')
      expect(res.status).toBe(200);

    })

  })

})

describe("API/products", () => {
  describe("return 404", () => {
    it("not found", async () => {
      const res = await request(app).get('/d')
      expect(res.status).toBe(404);

    })

  })

})






