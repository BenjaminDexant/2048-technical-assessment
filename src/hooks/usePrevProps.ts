import { useEffect, useRef } from "react";

const usePreviousProps = (value: number) => {
    // a custom hook to keep track of the previous props
    // to compare previous value with current value of the tile
    // and performing specific action based on the comparison
    const ref = useRef<number | undefined>(undefined);

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
}

export default usePreviousProps;
