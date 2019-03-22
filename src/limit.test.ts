import { TestFixture, Test, Expect, TestCase } from "alsatian";
import { limitAdd, limitGreaterThan, limitSub, limitDiv, limitMulti } from "./limitTests";


@TestFixture()
export class limitTest {

    @TestCase(3,4,9,7)
    @TestCase(9,12,25,21)
    @TestCase(3,1,8,4)
    public shouldAddFirstAndSecondNumberAndReturnIfBelowLimit(firstNumber: number, secondNumber: number, limit: number, expected:number) {
        const result = limitAdd(firstNumber,secondNumber,limit);
        
        Expect(result).toBe(expected);
    }
    
    @TestCase(7,2,4,9)
    @TestCase(12,4,6,16)
    @TestCase(7,2,8,9)
    public shouldAddFirstAndSecondNumberAndReturnIfAboveLimit(firstNumber: number, secondNumber: number, limit: number, expected:number) {
        const result = limitGreaterThan(firstNumber,secondNumber,limit);
        
        Expect(result).toBe(expected);
    }

    @TestCase(20,9,14,11)
    @TestCase(24,4,60,20)
    @TestCase(1800,242,1954,1558)
    public shouldSubtractFirstAndSecondNumberAndReturnIfBelowLimit(firstNumber: number, secondNumber: number, limit: number, expected:number) {
        const result = limitSub(firstNumber,secondNumber,limit);
        
        Expect(result).toBe(expected);
    }

    @TestCase(15,3,2,5)
    @TestCase(27,8,1.53,3.375)
    @TestCase(683,3,200,227.66666666666666)
    public shouldDivideFirstAndSecondNumberAndReturnIfAboveLimit(firstNumber: number, secondNumber: number, limit: number, expected:number) {
        const result = limitDiv(firstNumber,secondNumber,limit);
        
        Expect(result).toBe(expected);
    }
    
    @TestCase(73,19,1500,1387)
    @TestCase(32,6,200,192)
    @TestCase(5,5,200,25)
    public shouldMultiplyFirstAndSecondNumberAndReturnIfBelowLimit(firstNumber: number, secondNumber: number, limit: number, expected:number) {
        const result = limitMulti(firstNumber,secondNumber,limit);
        
        Expect(result).toBe(expected);
    }


}