import React from 'react';

export const TaksBanner = props => (
    <h4 className="bg-dark text-white text-center p-4">
        {props.userName} Anime Watch List ( {props.taskItems.filter(t => !t.done).length} anime to watch )
    </h4>
)