export interface TestExecution {
    
    id?:string;
    algorithm_id?:string;
    amount_of_tests?:number;
    executions?:string[];
    invalid_tests_count?:number;
    test_suite?:string;
}