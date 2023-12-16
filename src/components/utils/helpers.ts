export const PHONE_REGX =
    /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
export const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//-------------------------------
// nicely print object.
//-------------------------------
export function printObject(label: string, target: Record<string, any>): void {
    console.log(label, JSON.stringify(target, null, 2));
}
