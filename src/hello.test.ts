import { TestFixture, Test, Expect } from "alsatian";
import { hello } from "./hello";

@TestFixture()
export class HelloTests {

    @Test()
    public shouldReturnHelloWorldWhenNoNameGiven() {
        const result = hello();

        Expect(result).toBe("Hello, world!");
    }
    
    @Test()
    public shouldReturnHelloOliverWhenNameGiven() {
        const result = hello("Oliver");

        Expect(result).toBe("Hello, Oliver!");
    }

}