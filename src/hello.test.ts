import { TestFixture, Test, Expect, TestCase } from "alsatian";
import { hello } from "./hello";

@TestFixture()
export class HelloTests {

    @Test()
    public shouldReturnHelloWorldWhenNoNameGiven() {
        const result = hello();

        Expect(result).toBe("Hello, world!");
    }
    
    @TestCase("Oliver")
    @TestCase("James")
    public shouldReturnHelloNameWhenNameGiven(name: string) {
        const expected = "Hello, " + name + "!";
        const result = hello(name);

        Expect(result).toBe(expected);
    }

}