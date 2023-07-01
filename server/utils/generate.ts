export const generateRGB = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
};

export const generateFilter = () => {
    return `invert(${Math.floor(Math.random() * 99)}%) sepia(${Math.floor(
        Math.random() * 100
    )}%) saturate(${Math.floor(Math.random() * 1000)}%) hue-rotate(${Math.floor(
        Math.random() * 360
    )}deg) brightness(${Math.floor(
        Math.random() * 250
    )}%) contrast(${Math.floor(Math.random() * 50)}%)`;
};
