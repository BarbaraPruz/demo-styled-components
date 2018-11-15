import React from 'react';
import { Link } from 'react-router-dom';
export default () => {
    return (
        <div>
            options menu
            <Link to="/basics">Basics</Link>
            <Link to="/themes">Themes</Link>
        </div>
    )
}
