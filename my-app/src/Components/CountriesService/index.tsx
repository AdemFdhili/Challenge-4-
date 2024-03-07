export interface Country {
    name: { common: string };
    capital: string[];
    population: number;
    region: string;
    flags: { png: string };
   
}

export async function getCountries(): Promise<Country[]> {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries: Country[] = await response.json();
        return countries;
    } catch (error) {
        console.error("Error fetching countries:", error);
        return [];
    }
}