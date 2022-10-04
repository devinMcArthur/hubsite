import { jsonwt } from "api-utils";
import { Server } from "http";
import request from "supertest";
import createApp from "../../app";

let app: Server;

beforeAll(async () => {
  app = await createApp();
});

describe("User Resolver", () => {
  describe("Mutations", () => {
    describe("userLoginPhone", () => {
      const userLoginPhone = `
        mutation UserLoginPhone($phone: String!) {
          userLoginPhone(phone: $phone)
        }
      `;

      describe("success", () => {
        test("should successfully return a temp token", async () => {
          const res = await request(app)
            .post("/graphql")
            .send({
              query: userLoginPhone,
              variables: {
                phone: "+14039737408",
              },
            });

          console.log(res.body);
          expect(res.body.data.userLoginPhone).toBeDefined();

          const decoded = jsonwt.decode(res.body.data.userLoginPhone);

          expect(decoded.loginRequestId).toBeDefined();
          expect(decoded.exp).toBeDefined();
        });
      });
    });
  });
});
