import React from 'react';
import { useState } from 'react';
import matatus from '../data/mat';
import Matcard from './Matcard';

function List() {
    const [search, setSearch] = useState("");

    const filteredMAtatus = matatus.filter((matatu) =>
        matatu.area.toLowerCase().includes(search.toLowerCase()) ||
        matatu.matatuName.toLowerCase().includes(search.toLowerCase()) ||
        matatu.routeNumber.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className="matatu-section">
            <h2>Matatus Spotted</h2>

            <input
                type="text"
                placeholder="Search by area, route or matatu name..."
                className="search-bar"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Show count of results */}
            <p>Showing {filteredMAtatus.length} of {matatus.length} matatus</p>

            <div className="matatu-grid">
                {/* ✅ Use filteredMAtatus here, not matatus */}
                {filteredMAtatus.map((matatu) => (
                    <Matcard
                        key={matatu.id}
                        area={matatu.area}
                        matatuName={matatu.matatuName}
                        routeNumber={matatu.routeNumber}
                        location={matatu.location}
                        timeSpotted={matatu.timeSpotted}
                    />
                ))}
            </div>

            {/* Show message when no results */}
            {filteredMAtatus.length === 0 && search !== "" && (
                <p>No matatus found matching "{search}"</p>
            )}
        </section>
    );
}

export default List;