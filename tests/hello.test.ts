import request from "supertest";
import { app } from '../src/index';

describe("GET /", () => {
    it("should return 200 OK", () => {
        return request(app).get("/")
            .expect("Hello World!")
            .expect(200);
    });
});