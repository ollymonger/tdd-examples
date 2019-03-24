import { TestFixture, Test, Expect, TestCase } from "alsatian";
import { limitAdd } from "./limitTests";


@TestFixture()
export class LimitTest {

    @TestCase(3,4,3,7)
    @TestCase(9,12,16,21)
    @TestCase(5,6,6,11)
    @TestCase(3,1,8,4)
    @TestCase(96,102,312,198)
    @TestCase(8,8,17,16)
    public shouldAddFirstAndSecondNumberAndReturnIfAboveLimit(firstNumber: number, secondNumber: number, limit: number, expected:number) {
        const result = limitAdd(firstNumber,secondNumber,limit);

        Expect(result).toBe(expected);
    }
}