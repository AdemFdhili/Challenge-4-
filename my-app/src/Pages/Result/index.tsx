import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './index.css';
import { useState, ChangeEvent, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Country, getCountries } from '../../Components/CountriesService';
import NotFound from '../../Pages/NotFound';


export default function Result (){
    const [selectedRegion, setSelectedRegion] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [countries, setCountries] = useState<Country[]>([]);
    const navLinks: React.MutableRefObject<any> = useRef({});

    useEffect(() => {
        async function fetchCountries() {
            const countriesData = await getCountries();
            setCountries(countriesData);
        }
        fetchCountries();
    }, []);

    useEffect(() => {
        navLinks.current = {
            africa: document.getElementById('africa-link'),
            americas: document.getElementById('americas-link'),
            asia: document.getElementById('asia-link'),
            europe: document.getElementById('europe-link'),
            oceania: document.getElementById('oceania-link')
        };
    }, []);

    const handleRegionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedRegion(event.target.value);
        if (navLinks.current[event.target.value]) {
            navLinks.current[event.target.value].click();
        }
    };

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const filteredCountries = countries.filter(country =>
        (country.name.common.toLowerCase().startsWith(searchTerm.toLowerCase()) || searchTerm === '') &&
        (selectedRegion === 'all' || country.region.toLowerCase() === selectedRegion.toLowerCase())
    );
    return (
        <>
        <div className='search'>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ height: '2rem' }} />
                <input type="text" placeholder='Search for a country' onChange={handleSearchChange} />
                <select name="Region" className='region-options' value={selectedRegion} onChange={handleRegionChange}>
                    <option value="all">All</option>
                    <option value="africa">Africa</option>
                    <option value="americas">Americas</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
            <nav>
                <NavLink to="/africa" id="africa-link" className="path">Africa</NavLink>
                <NavLink to="/americas" id="americas-link" className="path">Americas</NavLink>
                <NavLink to="/asia" id="asia-link" className="path">Asia</NavLink>
                <NavLink to="/europe" id="europe-link" className="path">Europe</NavLink>
                <NavLink to="/oceania" id="oceania-link" className="path">Oceania</NavLink>
            </nav>
            
            
            
            <div id="countries">
                {filteredCountries.length === 0 ? (
                    <NotFound />
                ) : (
                    filteredCountries.map((country, index) => (
                        <div className="country" key={index}>
                            <img className="flag" src={country.flags.png} alt={country.name.common} />
                            <div className='country-info'>
                                <h1 className='title'> {country.name.common}</h1>
                                <p className="capital">Capital: <span>{country.capital}</span></p>
                                <p className="population">Population: <span>{country.population}</span> </p>
                                <p className="region">Region: <span>{country.region}</span> </p>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </> 
    )
}