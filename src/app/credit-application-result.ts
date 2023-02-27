export class CreditApplicationResult {

    creditResult: string;
    creditLimit: number;

    constructor(
        creditResult: string,
        creditLimit: number
    ){
        this.creditResult = creditResult;
        this.creditLimit = creditLimit;
    }
}