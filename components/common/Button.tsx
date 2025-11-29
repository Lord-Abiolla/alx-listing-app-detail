import React from 'react';
import { ButtonProps } from '@/interfaces';


export default function Button({ label, onClick, type = "button" }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
            {label}
        </button>
    );
}