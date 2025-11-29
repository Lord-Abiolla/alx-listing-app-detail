import React from "react";
import Button from "./Button";
import { CardProps } from "@/interfaces";

export default function Card({ title, description, image }: CardProps) {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            )}

            <div className="p-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-gray-600 mt-1">{description}</p>
            </div>
            <div className="mt-3 p-3">
                <Button label="Learn More" onClick={() => alert("Clicked!")} />
            </div>
        </div>
    );
}
