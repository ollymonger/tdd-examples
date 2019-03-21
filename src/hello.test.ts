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
    public shouldReturnHelloOliverWhenNameGivenAsOliver() {
        const result = hello("Oliver");

        Expect(result).toBe("Hello, Oliver!");
    }   

    @Test()
    public shouldReturnHelloJamesWhenNameGivenAsJames() {
        const result = hello("James");

        Expect(result).toBe("Hello, James!");
    }

}