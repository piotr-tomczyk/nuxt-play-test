export const useCounter = () => {
    const counter = useState<number>('counter', () => Math.round(Math.random() * 50));
    const incrementCounter = () => {
        counter.value++;
    }
    return {
        counter,
        incrementCounter
    }
}