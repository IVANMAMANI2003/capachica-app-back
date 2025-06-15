export class SubdivisionDto {
  id: number;
  name: string;
}

export class CountryDto {
  id: number;
  name: string;
  subdivisions: SubdivisionDto[];
} 