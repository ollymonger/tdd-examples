import { TestFixture, Expect, TestCase, Any } from "alsatian";
import { getCorrectGear } from "./get-correct-gear";

@TestFixture()
export class GetCorrectGearTests {
    @TestCase(0, 0)
    @TestCase(15, 1)
    @TestCase(10, 1)
    @TestCase(27, 2)
    @TestCase(33, 2)
    @TestCase(42, 3)
    @TestCase(47, 3)
    @TestCase(60, 4)
    @TestCase(54, 4)
    @TestCase(78, 5)
    @TestCase(85, 5)
    public shouldReturnCorrectGear(speed: number, expectedGear: any) {
        const result = getCorrectGear(speed);
        Expect(result).toBe(expectedGear);
    }
}