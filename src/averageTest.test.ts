import { TestFixture, Expect, TestCase, Any } from "alsatian";
import { average } from "./averageTest";

@TestFixture()
export class averageTest {

    @TestCase([3, 4], 3.5)
    @TestCase([7, 4, 3], 4.666666666666667)
    @TestCase([19, 4, 16, 23], 15.5)
    @TestCase([8, 20, 14, 50, 7, 4, 11], 16.285714285714285)
    public shouldTakeArrayAndReturnAverage(inputs: any, expected: number) {
        const result = average(inputs);
        Expect(result).toBe(expected);
    }

}