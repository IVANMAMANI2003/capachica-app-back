export declare class SubdivisionDto {
    id: number;
    name: string;
}
export declare class CountryDto {
    id: number;
    name: string;
    subdivisions: SubdivisionDto[];
}
