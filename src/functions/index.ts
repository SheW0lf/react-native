export const randomColor = () => {
    const randomNum = () => Math.floor(Math.random() * 256);
    return `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
};
