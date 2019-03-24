import { TestFixture, Expect, TestCase } from "alsatian";
import { limitAdd } from "./limit-add";


@TestFixture()
export class LimitTest {

    @TestCase(1, 2, 4)
    @TestCase(5, 2, 10)
    @TestCase(11, 2, 14)
    public shouldReturnResultIfBelowLimit(firstValue: number, secondValue: number, limit: number) {
        const result = limitAdd(firstValue, secondValue, limit);

        Expect(result).toBe(firstValue + secondValue);
    }

    @TestCase(3, 2, 3)
    @TestCase(7, 12, 16)
    @TestCase(19, 21, 36)
    public shouldReturnLimitIfAboveLimit(firstValue: number, secondValue: number, limit: number) {
        const result = limitAdd(firstValue, secondValue, limit);

        Expect(result).toBe(limit);
    }
}