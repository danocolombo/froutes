// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
    return new Promise<{ data: number }>((resolve) =>
        setTimeout(() => resolve({ data: amount }), 500)
    );
}
export function getDefaultValue() {
    return new Promise<{ data: number }>((resolve) =>
        setTimeout(() => resolve({ data: 4 }), 500)
    );
}
