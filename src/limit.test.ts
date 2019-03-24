import { TestFixture, Test, Expect, TestCase } from "alsatian";
import { limitAdd } from "./limitTests";


@TestFixture()
export class LimitTest {

    @TestCase(3,4,9,7)
    @TestCase(9,12,25,21)
    @TestCase(3,1,8,4)
    public shouldAddFirstAndSecondNumberAndReturnIfBelowLimit(firstNumber: number, secondNumber: number, limit: number, expected:number) {
        const result = limitAdd(firstNumber,secondNumber,limit);
            
        Expect(result).toBe(expected);
    }
}